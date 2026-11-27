# NAI AI Hub — Neural Atlas

Frontend-only React, TypeScript, and Vite application for Najah AI Society. Nine routes cover the resource library, Model Arena, AI Radar, Learning Roadmaps, and My Workspace.

## Run locally

Use Node.js 20.19 or newer, then run `npm install` and `npm run dev`. The Vite URL is printed in the terminal. Hash routing supports static hosting.

## AI Radar

`#/radar` is a dated editorial snapshot, **not a live feed**. Its local dataset is in `src/data/radar.ts`. Every development links to its primary source and includes its publication date. Category filters, search, timeline selection, details, and bookmarks work without a backend. Bookmarks use the `nai-radar-bookmarks` localStorage key.

## Learning Roadmaps

`#/roadmaps` includes eight tracks with prerequisites, ordered stages, topics, exercises, projects, primary educational links, and links into the existing NAI catalog. Selecting a stage changes the detail panel. Completion, resume, and reset work locally; progress uses the `nai-roadmap-progress` localStorage key. Existing resource IDs, favorites, comparisons, language, and theme keys are preserved.

## Design and motion

The two generated visual assets are `public/radar-earth.webp` and `public/roadmap-world.webp` (about 150 KB each). Live text, controls, timeline, stage nodes, and progress indicators remain React elements. The new scoped styling is in `src/radar-roadmaps.css`. State-driven feedback uses 140 ms `cubic-bezier(.2,0,0,1)`; panel entries use 230–240 ms `cubic-bezier(.16,1,.3,1)`. Only transform and opacity animate, and reduced-motion users receive instant state changes.

Browser captures of both routes at 1920×1080, 1440×900, 1280×800, and 390×844 are in `docs/visual-qa`. English mobile captures are included. Browser checks covered page errors, horizontal overflow, bookmarks, and persisted stage completion. A production build and typecheck were intentionally not run, per the project request.

## Architecture

- `src/components/Shell.tsx`: navigation, preferences, and global search
- `src/pages`: route components
- `src/data`: typed resource, radar, and roadmap data
- `src/state.tsx`: shared language, theme, favorites, and comparisons
- `src/styles.css`, `src/motion.css`, `src/radar-roadmaps.css`: design and interaction styling

The application has no server, authentication, API key, paid runtime, or live MCP connection. The prior Model Arena benchmark snapshot remains dated rather than live.
