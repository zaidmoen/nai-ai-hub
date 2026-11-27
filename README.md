# NAI AI Hub

A bilingual AI tools directory by Najah AI Society.

Open `index.html` in a modern browser. No build step or dependencies are required.

V3 introduces a transparent NAI identity, a responsive sticky navigation, interactive cards, and reduced-motion support. The 30-tool catalog, search, task finder, favorites, comparison and dark/light mode are retained.


## Aurora visual layer
Serve the root via any static HTTP server (e.g. `python -m http.server 8000`). The site has no build step. Aurora loads pinned Three.js and GSAP from a CDN, progressively enhances the hero with WebGPU where available (WebGL otherwise), and preserves a static SVG fallback. The optional generated hero artwork is expected at `assets/nai-aurora.webp`; if it is absent the gradient and SVG are still visible. The image is decorative; the title, search input and navigation remain native accessible HTML. Motion is disabled for reduced-motion preferences.
