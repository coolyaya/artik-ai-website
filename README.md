# Voiceflow Chat Setup

[![Vercel Deploy](https://img.shields.io/github/deployments/coolyaya/artik-ai-website/Production?label=vercel&logo=vercel)](https://vercel.com/coolyaya)
[![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey.svg)](#license)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?logo=prettier)](https://prettier.io/)

To enable the Voiceflow web chat widget, add the following variables to your local `.env` file:

```
VITE_VF_PROJECT_ID=YOUR_VOICEFLOW_PROJECT_ID
VITE_VF_VERSION_ID=production
```

Restart `npm run dev` after adding these variables.

## Developer Tooling

- `npm run lint` – runs ESLint with zero-warning tolerance.
- `npm run build` – production build and the command enforced by the pre-commit hook.
- `npm run analyze` – generates a bundle visualization via `vite-bundle-visualizer` at `dist/stats.html`.

## License

This project is currently distributed without an explicit public license.
