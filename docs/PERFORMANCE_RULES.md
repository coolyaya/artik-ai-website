# Performance Rules

1. The homepage must not import heavy charting libraries.
   - Recharts must be lazy loaded.
2. Hero videos must not be downloaded eagerly.
   - Use `preload="metadata"` and a poster.
   - Prefer a single format and reasonable bitrate.
3. Voiceflow widget must be consent-gated and/or loaded only on relevant routes.
4. Service worker must NOT cache large video files by default.
   w
