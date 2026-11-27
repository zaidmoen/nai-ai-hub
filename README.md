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

## Frontend performance

The active page loads one stylesheet and two deferred scripts. The cover uses a locally hosted WebP photograph in 540px and 1080px variants. There are no animation loops or CDN imports.

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
