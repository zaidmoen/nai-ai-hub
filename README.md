# NAI AI Hub — React Neural Atlas

React + TypeScript + Vite single-page application. Seven routes and 100 existing resources.

## Run locally

Node.js 20.19+ (or supported newer version).

```sh
npm install
npm run dev
```

Open the URL printed by Vite, normally http://localhost:5173.

## Architecture

- `src/pages`: route components
- `src/components`: shared shell and UI
- `src/state.tsx`: language, theme, favorites, saved comparisons
- `src/data`: typed catalogs and local SVG icons
- `src/styles.css`: unified responsive design system
- `public`: logo, original downloadable skills and redirects for old routes

Hash-based routing allows static hosting. Existing localStorage keys and resource IDs are retained. Storage is origin-specific: switching ports does not automatically transfer saved items. Data snapshots and resource templates are unchanged. No backend or live MCP connections. The model metrics remain dated benchmark data, not live tests. See ICON-CREDITS.md.

The migration lives on `feat/react-neural-atlas`; main retains the original website. Dependencies have not been installed, so no lockfile was generated. Typecheck, build and browser verification have not been run.
