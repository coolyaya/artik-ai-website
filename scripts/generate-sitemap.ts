import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { industries } from '../src/data/industries';
import { locations } from '../src/data/locations';
import { serviceIds } from '../src/data/services';
import { useCaseSlugs } from '../src/data/useCases';
import { staticRoutes } from '../src/routes/staticRoutes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getSiteUrl(): string {
  const siteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL;
  if (!siteUrl) {
    throw new Error('SITE_URL or VITE_SITE_URL must be set to generate sitemap and robots.txt.');
  }
  return siteUrl.replace(/\/+$/, '');
}

function normalizePath(routePath: string): string {
  const withLeadingSlash = routePath.startsWith('/') ? routePath : `/${routePath}`;
  if (withLeadingSlash === '/') return '/';
  const trimmed = withLeadingSlash.replace(/\/+$/, '');
  return trimmed.replace(/\/{2,}/g, '/');
}

function toAbsoluteUrl(siteUrl: string, routePath: string): string {
  const normalized = normalizePath(routePath);
  return normalized === '/' ? `${siteUrl}/` : `${siteUrl}${normalized}`;
}

function buildRoutes(): string[] {
  const industryRoutes = industries.map((i) => `/industries/${i.slug}`);
  const locationRoutes = locations.map((l) => `/locations/${l.slug}`);
  const serviceRoutes = serviceIds.map((id) => `/service/${id}`);
  const useCaseRoutes = useCaseSlugs.map((slug) => `/use-cases/${slug}`);

  return Array.from(
    new Set([
      ...staticRoutes,
      ...industryRoutes,
      ...locationRoutes,
      ...serviceRoutes,
      ...useCaseRoutes,
    ]),
  );
}

function generateSitemap(siteUrl: string, routes: string[]): void {
  const urlEntries = routes.map((routePath) => {
    const loc = toAbsoluteUrl(siteUrl, routePath);
    return `  <url><loc>${loc}</loc></url>`;
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlEntries,
    '</urlset>',
  ].join('\n');

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);

  console.log(`Sitemap generated with ${routes.length} routes at ${outputPath}`);
}

function generateRobotsTxt(siteUrl: string): void {
  const robots = ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl}/sitemap.xml`, ''].join(
    '\n',
  );

  const outputPath = path.resolve(__dirname, '../public/robots.txt');
  fs.writeFileSync(outputPath, robots);

  console.log(`robots.txt written at ${outputPath}`);
}

function run(): void {
  const siteUrl = getSiteUrl();
  const routes = buildRoutes();
  generateSitemap(siteUrl, routes);
  generateRobotsTxt(siteUrl);
}

run();
