# NAI AI Hub

A bilingual AI tools directory by Najah AI Society. The original 30-tool catalog and official links are preserved.

Open `index.html` in a modern browser, or serve this folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. No build step, package installation, or external runtime dependencies are required.

## Interface

- Arabic RTL and English LTR, with saved language and light/dark preferences applied before paint.
- Synchronized hero and directory search. Search matches multiple keywords across both languages and ignores Arabic diacritics.
- Category filters, a collapsible task finder, alphabetical sorting, and clear-filter recovery.
- Saved favorites with a visible count and an explanatory empty state.
- Comparison of two or three tools, with individual removal and a horizontally scrollable comparison table.
- Native detail/comparison dialogs, keyboard focus styles, a skip link, live result announcements, and reduced-motion support.

Press `/` to focus search, `Enter` to move to results, and `Escape` to close a dialog.

## Prompt Studio

Open `prompts.html` from the main navigation or the homepage. The studio includes 22 original English prompt templates with Arabic and English browsing labels across 7 technical and academic fields. Search and filter prompts, save favorites locally, customize project context, stack, goals and constraints, and edit or copy the final text. No accounts, AI API calls, or backend are required. Prompt content is in `prompts-data.js`; the editor does not upload or persist the entered project details.

## Skills Hub and MCP Hub

Open `skills.html` to browse 8 original NAI instruction-only agent skills. Each skill has a downloadable `SKILL.md` in `resources/skills/<name>/` with valid name and description frontmatter. The detail dialog explains project-local installation for Codex and Claude Code. Skills are reviewed by the user before installation and are not automatically executed.

Open `mcp.html` for 6 curated server setup guides with provider documentation and example commands for Codex CLI and Claude Code. GitHub starts with the documented read-only endpoint and Supabase uses a project-scoped read-only URL template. No credentials are collected and no server is automatically installed or connected. Check provider requirements, permissions, and the installed client's syntax before running any command. Local npm examples require a compatible environment and should be reviewed and version-pinned for regular use. Directory sources were checked on 2026-11-27; connection and installation were not tested.

Both hubs share bilingual navigation, search, category filters, saved items in localStorage, dark/light settings, and responsive layouts.

## Model Arena

Open `arena.html` to compare seven model/effort profiles. The default selection is Kimi K3.1 Pro, DeepSeek V4.1 Flash 1017 (Max), and GPT-6.2 Sol (Max). The dated dataset in `arena-data.js` was transcribed on 2026-11-27 from Artificial Analysis Intelligence Index v5.0.2, its performance leaderboard, and two release comparisons. Scores, benchmark cost per task (USD), time per task (minutes), first-answer-token latency (seconds), error rate, and context are displayed with their original units and provider names. Selected capability and science scores are included only when verified; null means unavailable and is never rendered as zero. The charts are native HTML/CSS and SVG, not live inference or NAI-run benchmarks. The data is a fixed snapshot and must be refreshed deliberately when sources change. Cost per benchmark task is not a subscription price. No external runtime or API key is required. Sources are linked on the page.

## Frontend performance

The current homepage uses a local WebGL filament scene and an SVG fallback. Rendering is visibility-aware and respects reduced motion. Prompt Studio has no GPU renderer or external runtime dependencies.

The search index is prepared once. Filtering and sorting reuse card nodes; favorite and comparison actions update controls in place. Changing the theme does not rebuild the catalog. The original Aurora artwork remains in `assets/` as a reference and is not downloaded by the page.

## Motion

CSS transitions handle reversible press, focus, and selection feedback. The dependency-free `motion.js` uses the native Web Animations API for FLIP list changes, dialog transitions, disclosure content, the comparison bar, toasts, and comparison-limit feedback. Only `transform` and `opacity` animate. Initial content appears immediately, without a reveal sequence or stagger.

| CSS token | Value | Use |
| --- | --- | --- |
| `--motion-micro` | `120ms` | Press, focus ring, icon crossfades |
| `--motion-enter` | `240ms` | Dialog, backdrop, bar, toast, disclosure enter |
| `--motion-exit` | `140ms` | Exits and bounded validation feedback |
| `--motion-layout` | `240ms` | FLIP position changes |
| `--ease-micro` | `cubic-bezier(0.2, 0, 0, 1)` | Controls and validation feedback |
| `--ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Enters and layout |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Exits |

Exiting bars and disclosure controls become inert immediately. Dialogs keep native focus trapping until their exit finishes. Rapid reversals cancel stale completion callbacks; temporary exit copies are inert and removed after their animation. Reduced-motion preferences apply states instantly, including when enabled mid-animation. Missing motion-script or animation-API support preserves immediate interactions and native dialogs.

## Validation

```sh
node --check app.js
node --check motion.js
git diff --check
```

The implementation was also checked with 23 DOM interaction checks, 15 deterministic Web Animations lifecycle checks, and an automated accessibility structure scan. These cover search, filters, focus retention, favorites, comparison limits, dialogs, localization, corrupt stored settings, interrupted exits, rapid reversals, reduced motion, FLIP cleanup, and compositor-property restrictions. They do not replace visual device testing or browser performance measurements.

## Library V2
Skills Hub includes 20 entries (12 source-linked external projects and 8 downloadable NAI originals). External resources are not bundled or installed; consult their upstream README and license. MCP Hub includes 9 setup guides. Prompt Studio includes 34 templates with scoped execution and verification instructions. All three pages support curated picks, category search, secondary filters, sorting, and clear-filter recovery. Upstream sources reviewed on 2026-11-27; installation and browser behavior were not tested.

## NAI Atlas experience
The homepage now presents five functional resource portals in a single lightweight knowledge map instead of unrelated visual sections. The old sidebar task finder was removed; category filtering and tool favorites remain. All six active pages share a Developer Hub menu and a keyboard-accessible global search (Ctrl/Cmd+K or /) over the same four local catalogs. Results open the exact resource on its original page via a resource query parameter. `workspace.html` reads and removes the existing local favorite records for tools, prompts, skills and MCP; no account or backend is used. Archived ThreeUI files remain in the repository and are not loaded by the main experience. Browser/device verification remains required.
