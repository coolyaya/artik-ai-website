#!/usr/bin/env node

import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { optimize } from "svgo";
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

/**
 * Recursively collect files from a directory that match allowed extensions.
 * @param {string} dir
 * @param {Set<string>} extensions
 * @returns {Promise<string[]>}
 */
async function collectFiles(dir, extensions) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath, extensions)));
    } else if (extensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeSvgFiles() {
  const svgFiles = await collectFiles(publicDir, new Set([".svg"]));
  let optimized = 0;

  await Promise.all(
    svgFiles.map(async (filePath) => {
      const original = await readFile(filePath, "utf8");
      const result = optimize(original, {
        path: filePath,
        multipass: true,
      });

      if (result.data && result.data.length < original.length) {
        await writeFile(filePath, result.data, "utf8");
        optimized += 1;
      }
    }),
  );

  return { processed: svgFiles.length, optimized };
}

async function optimizeRasterImages() {
  const files = await imagemin(
    [path.join(publicDir, "**/*.{png,jpg,jpeg}")],
    {
      destination: publicDir,
      plugins: [
        imageminMozjpeg({ quality: 80, progressive: true }),
        imageminPngquant({ quality: [0.65, 0.85] }),
      ],
    },
  );

  return { processed: files.length };
}

async function ensurePublicDirExists() {
  try {
    const stats = await stat(publicDir);
    if (!stats.isDirectory()) {
      throw new Error(`Expected ${publicDir} to be a directory`);
    }
  } catch (err) {
    if (err && err.code === "ENOENT") {
      throw new Error(`Public directory not found at ${publicDir}`);
    }
    throw err;
  }
}

async function main() {
  await ensurePublicDirExists();
  const start = performance.now();

  const raster = await optimizeRasterImages();
  const svg = await optimizeSvgFiles();

  const durationMs = Math.round(performance.now() - start);
  console.log(
    `Optimized media assets in ${durationMs}ms (raster: ${raster.processed}, svg: ${svg.processed})`,
  );
}

main().catch((err) => {
  console.error("Failed to optimize media assets:", err);
  process.exitCode = 1;
});
