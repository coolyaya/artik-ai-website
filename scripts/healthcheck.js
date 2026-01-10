#!/usr/bin/env node
/**
 * Website Health Check Script (Non-destructive)
 * - Verifies project structure
 * - Checks dependency status (outdated / audit)
 * - Detects unused deps
 * - Runs typecheck / lint / tests if available
 * - Scans for common Vite/React issues
 *
 * Usage:
 *   node scripts/healthcheck.js
 *
 * Optional:
 *   node scripts/healthcheck.js --fix   (only auto-fixes lint if your project supports it)
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const FIX = args.includes("--fix");

function run(cmd, opts = {}) {
  try {
    console.log(`\n> ${cmd}`);
    const out = execSync(cmd, { stdio: "pipe", encoding: "utf8", ...opts });
    if (out.trim()) console.log(out.trim());
    return { ok: true, out };
  } catch (e) {
    console.log(e.stdout?.toString?.() || "");
    console.error(e.stderr?.toString?.() || e.message);
    return { ok: false, err: e };
  }
}

function exists(p) {
  return fs.existsSync(path.resolve(process.cwd(), p));
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), p), "utf8"));
}

function hasScript(pkg, scriptName) {
  return !!pkg?.scripts?.[scriptName];
}

function printSection(title) {
  console.log(`\n==================================================`);
  console.log(title);
  console.log(`==================================================`);
}

function main() {
  printSection("1) Basic Project Checks");

  if (!exists("package.json")) {
    console.error("❌ package.json not found. Run this in your project root.");
    process.exit(1);
  }
  const pkg = readJSON("package.json");

  console.log(`Project: ${pkg.name || "(no name)"} | Version: ${pkg.version || "(no version)"}`);
  console.log(`Node: ${process.version}`);
  console.log(`Package manager: ${exists("pnpm-lock.yaml") ? "pnpm" : exists("yarn.lock") ? "yarn" : "npm"}`);

  if (!exists("node_modules")) {
    console.log("⚠️ node_modules not found. Run `npm install` first for best results.");
  }

  // basic Vite check
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  if (!deps.vite) console.log("⚠️ Vite not found in dependencies/devDependencies (expected for vite projects).");
  if (!exists("vite.config.js") && !exists("vite.config.ts")) {
    console.log("ℹ️ No vite.config.(js/ts) found (not required, but common).");
  }

  printSection("2) Dependency Status");
  run("npm -v");
  run("npm ls --depth=0");

  // Outdated deps
  printSection("2a) Outdated Dependencies (does NOT install anything)");
  run("npm outdated");

  // Security audit
  printSection("2b) Security Audit (do not auto-fix unless you decide)");
  run("npm audit --audit-level=moderate");

  printSection("3) Install Health");
  // Checks lockfile consistency if using npm
  if (exists("package-lock.json")) {
    run("npm ci --dry-run");
  } else {
    console.log("ℹ️ No package-lock.json found; skipping npm ci dry-run.");
  }

  printSection("4) Unused Dependencies (depcheck)");
  // Install depcheck temporarily via npx
  run("npx --yes depcheck --json", { maxBuffer: 1024 * 1024 * 10 });

  printSection("5) Lint / Typecheck / Tests (if configured)");
  if (hasScript(pkg, "lint")) {
    if (FIX && hasScript(pkg, "lint:fix")) run("npm run lint:fix");
    else run("npm run lint");
  } else {
    console.log("ℹ️ No `lint` script found.");
  }

  if (hasScript(pkg, "typecheck")) run("npm run typecheck");
  else console.log("ℹ️ No `typecheck` script found.");

  if (hasScript(pkg, "test")) run("npm test");
  else console.log("ℹ️ No `test` script found.");

  printSection("6) Build Sanity Check");
  if (hasScript(pkg, "build")) run("npm run build");
  else console.log("ℹ️ No `build` script found.");

  printSection("7) Quick Codebase Smells (basic grep)");
  // Windows-friendly patterns: use node instead of grep
  const patterns = [
    { name: "Hardcoded localhost URLs", re: /http:\/\/localhost:\d+/g },
    { name: "Direct process.env usage (Vite wants import.meta.env)", re: /process\.env\./g },
    { name: "Deprecated ReactDOM.render", re: /ReactDOM\.render\(/g },
    { name: "Old Vite env access", re: /import\.meta\.env\.[A-Z0-9_]+/g },
  ];

  const exts = new Set([".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss", ".md"]);
  const ignoreDirs = new Set(["node_modules", "dist", "build", ".git", ".next", ".turbo", ".cache"]);

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (!ignoreDirs.has(e.name)) walk(full);
      } else {
        const ext = path.extname(e.name);
        if (exts.has(ext)) scanFile(full);
      }
    }
  }

  const findings = [];
  function scanFile(file) {
    let text;
    try {
      text = fs.readFileSync(file, "utf8");
    } catch {
      return;
    }
    for (const p of patterns) {
      const matches = text.match(p.re);
      if (matches && matches.length) {
        findings.push({
          pattern: p.name,
          file: path.relative(process.cwd(), file),
          count: matches.length,
        });
      }
    }
  }

  walk(process.cwd());

  if (findings.length === 0) {
    console.log("✅ No obvious code smells found (basic scan).");
  } else {
    console.log("⚠️ Potential issues detected:");
    for (const f of findings.slice(0, 50)) {
      console.log(`- ${f.pattern}: ${f.file} (${f.count})`);
    }
    if (findings.length > 50) console.log(`...and ${findings.length - 50} more`);
  }

  printSection("8) Summary");
  console.log("✅ Health check complete.");
  console.log("Next steps:");
  console.log("- Review `npm outdated` output");
  console.log("- Review `npm audit` findings");
  console.log("- If you want upgrade suggestions, use the Codex prompt below to generate a safe upgrade plan.");
}

main();
