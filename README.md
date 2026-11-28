# NAI AI Hub — Neural Atlas

Frontend-only React, TypeScript, and Vite application for Najah AI Society. Nine routes cover the resource library, Model Arena, AI Radar, Learning Roadmaps, and My Workspace.

## Run locally

Use Node.js 20.19 or newer, then run `npm install` and `npm run dev`. The Vite URL is printed in the terminal. Hash routing supports static hosting.

## AI Radar

`#/radar` is a dated editorial snapshot, **not a live feed**. Its local dataset is in `src/data/radar.ts`. Every development links to its primary source and includes its publication date. Category filters, search, timeline selection, details, and bookmarks work without a backend. Bookmarks use the `nai-radar-bookmarks` localStorage key.

## Learning Roadmaps

`#/roadmaps` includes eight tracks with prerequisites, ordered stages, topics, exercises, projects, primary educational links, and links into the existing NAI catalog. Selecting a stage changes the detail panel. Completion, resume, and reset work locally; progress uses the `nai-roadmap-progress` localStorage key. Existing resource IDs, favorites, comparisons, language, and theme keys are preserved.

## Design and motion

The homepage now uses a monumental obsidian sculpture in a dark architectural hall (`public/home-monolith.webp`). Its direction is black stone, restrained violet seams, large typography, quiet navigation cards, and a high-contrast primary action. The original logo SVG remains in the header, displayed as a white CSS variant. All six hub links, Radar, Workspace, catalog counts, language/theme controls, and tour remain available. The generated artwork prompt describes three interlocking obsidian slabs suspended inside a monumental basalt vault. Browser captures at 1672, 1280, and 390 pixels are in `docs/visual-qa/monolith-*`; no page errors or horizontal overflow were observed.

The two generated visual assets are `public/radar-earth.webp` and `public/roadmap-world.webp` (about 150 KB each). Live text, controls, timeline, stage nodes, and progress indicators remain React elements. The new scoped styling is in `src/radar-roadmaps.css`. State-driven feedback uses 140 ms `cubic-bezier(.2,0,0,1)`; panel entries use 230–240 ms `cubic-bezier(.16,1,.3,1)`. Only transform and opacity animate, and reduced-motion users receive instant state changes.

Browser captures of both routes at 1920×1080, 1440×900, 1280×800, and 390×844 are in `docs/visual-qa`. English mobile captures are included. Browser checks covered page errors, horizontal overflow, bookmarks, and persisted stage completion. A production build and typecheck were intentionally not run, per the project request.

## Architecture

Prompt Studio has a dedicated generated terminal-and-planet hero, template explorer, variable editor, local preview, Markdown download, and saved versions. Drafts use `nai-prompt-drafts`; up to thirty versions use `nai-prompt-versions`. Existing prompt IDs and favorites are preserved. Preparing a prompt is a local preview, with no model execution or fabricated AI response. Browser checks covered template customization, persistence after reload, version restore, empty search, and layouts at 1672, 1280, and 390 pixels. Captures are in `docs/visual-qa`. The hero art prompt describes a violet glass terminal over a chip platform in a dark lunar landscape; `public/prompt-studio.webp` is the optimized local asset.

Skills Hub now uses a cinematic hero, twenty illustrated skill cards, category and source filters, search, saved resources, and a selected-skill inspector. Existing skill IDs, downloads, copy actions, upstream links, and favorites remain available. Its 21 local WebP assets total approximately 393 KB. Card art was generated as a coherent 4×5 atlas of separate objects (frontend window, motion ribbon, backend servers, ML graph, review magnifier, debugging bug, deployment rocket, research book, fabric, crystal I, UI loop, design sculpture, React atom, blueprint, motion curve, agent cubes, test check, creation tools, skill library, and folded sculpture), then exported into individual files. The hero prompt describes three levitating glass slabs with code, neural, and architecture motifs over a violet island. No course durations, lesson counts, verification badges, or video playback are fabricated. Browser captures at 1672, 1280, and 390 pixels are in `docs/visual-qa`; selection, search, category filters, favorites, source/setup dialog, and all 20 card images were checked.

- `src/components/Shell.tsx`: navigation, preferences, and global search
- `src/pages`: route components
- `src/data`: typed resource, radar, and roadmap data
- `src/state.tsx`: shared language, theme, favorites, and comparisons
- `src/styles.css`, `src/motion.css`, `src/radar-roadmaps.css`: design and interaction styling

The application has no server, authentication, API key, paid runtime, or live MCP connection. The prior Model Arena benchmark snapshot remains dated rather than live.
