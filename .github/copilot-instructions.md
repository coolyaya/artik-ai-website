# AI Coding Instructions (Project Constitution)

You are working in a Vite + React 18 + TypeScript SPA using React Router and Tailwind.

## Stack

- React 18.3.1 (CSR, Vite SPA)
- React Router DOM 7.8.2 (routing in `src/main.helpers.tsx`)
- Vite 7.1.4
- TailwindCSS 3.4.17
- TypeScript (strict)
- react-helmet-async for head tags (`src/components/Seo.tsx`)
- Vercel deployment (SPA rewrites + serverless functions in `/api`)

## Ground Rules

1. Prefer **small, scoped changes**. Do not refactor unrelated code.
2. Always check for existing patterns/components before creating new ones.
3. Never introduce new dependencies unless explicitly requested.
4. Keep components < 200 lines. Extract subcomponents when needed.
5. Prefer functional components + hooks. No class components.
6. Tailwind only. No inline styles unless explicitly requested.
7. Accessibility: interactive elements must be keyboard accessible and have proper aria labels.
8. Do not leave console.log or commented-out debug code.

## Routing

- Public routes are defined in `src/main.helpers.tsx`.
- When adding a route, update:
  - `src/main.helpers.tsx` (route table)
  - `sitemap.xml` generation (if applicable)
  - any relevant nav links in `src/components/Navbar.tsx` and Footer

## SEO (Critical)

- Use `src/components/Seo.tsx` on pages.
- Prefer `Seo` over raw `Helmet`.
- Canonical must be absolute and derived from `getSiteUrl()` + route path.
- 404 pages must use `Seo` and be `noIndex`.

## Content Management

- Services and Use Cases are currently hardcoded in:
  - `src/pages/ServicesPage.tsx`
  - `src/pages/ServiceDetails.tsx`
  - `src/pages/UseCaseDetailPage.tsx`
- Do NOT duplicate service/use-case definitions across multiple files.
- If changing content structure, centralize in a single module (e.g. `src/content/services.ts`).

## Performance

- Avoid pulling heavy libraries into the home route.
- Recharts must be lazy-loaded or isolated from the homepage bundle.
- Large videos must not be eagerly downloaded; use poster/metadata and defer loading.
- Service worker must not cache multi-MB videos by default.

## Validation Checklist (Before finishing)

- `pnpm lint` passes
- `pnpm build` passes
- No new TypeScript errors
- Routes still resolve
- SEO tags are consistent and not duplicated
- No broken imports
