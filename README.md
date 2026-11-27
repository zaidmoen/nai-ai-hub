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

## V4 — Motion and visual direction
The homepage restores the original living atlas as a React-managed Canvas scene with 1,600 sphere points (half sampled on narrow viewports), perspective terrain, pointer parallax, SVG routes, hover/focus previews and real catalog links. Canvas painting is capped at 30 fps / 24 fps on smaller screens and suspended offscreen, on hidden tabs and for reduced motion. React components own and clean up their observers, animation frames and listeners. The other pages use local SVG art, route entrances, animated chart updates and keyed FLIP list transitions. No new runtime dependency or generated background images; no fake benchmark values. Build and visual verification remain outstanding.
