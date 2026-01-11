# Project Map

## Overview

Vite + React SPA (CSR) deployed on Vercel.
Routing: React Router (BrowserRouter + Routes).

## Key Files

- `src/main.tsx` — React root render + app bootstrap
- `src/main.helpers.tsx` — Route table + lazy loading
- `src/components/Seo.tsx` — SEO/meta/canonical/OG/Twitter/JSON-LD
- `src/components/Navbar.tsx` — Primary nav + use case dropdown
- `src/components/Footer.tsx` — Footer links (some placeholders exist)

## Routes

Routes are declared in `src/main.helpers.tsx`.
Error routes:

- `src/pages/404.tsx`
- `src/pages/500.tsx`

## Content Sources

- Services:
  - Index list: `src/pages/ServicesPage.tsx`
  - Detail content: `src/pages/ServiceDetails.tsx`
- Use cases:
  - Detail content: `src/pages/UseCaseDetailPage.tsx`
- Testimonials:
  - `src/testimonials.json`

## Serverless API (Vercel)

- `api/book-demo.ts` — Resend email (uses `RESEND_API_KEY`)
- `api/hello.ts`

## Forms

- Booking and Contact use `src/lib/submitForm.ts` -> `VITE_BOOK_WEBAPP_URL`
- Demo form uses `/api/book-demo`

## SEO Notes

- `Seo.tsx` uses Helmet and builds canonical based on:
  - `getSiteUrl()` (`VITE_SITE_URL` / `SITE_URL` or `window.location.origin`)
  - `useLocation()`

## Performance Risks

- Large hero demo videos in `src/components/DemoVideo.tsx`
- Recharts imported into homepage via `FeatureTriad.tsx`
- Voiceflow widget loads globally in `index.html`
- Service worker caches videos unless changed
