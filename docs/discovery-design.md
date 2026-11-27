# Discovery V5 — design rationale

Sources reviewed: Anthropic frontend-design SKILL.md; nextlevelbuilder UI/UX Pro Max SKILL.md (guidance only, search scripts not executed); NAI frontend design skill; Vercel React best practices.

Design direction: keep the established midnight, violet and cyan palette (#0b0e18, #151827, #c4a3ff, #72ddea, #f5f3ff) and existing system typefaces. Prioritize readable titles and real resource identity over repetitive gradient hero banners. Shared toolbar, category navigation, spacing, focus and empty-state components. Logical CSS properties for RTL. No new dependency.

- Tools: three editorial picks in asymmetric composition, category rail, filterable grid/list, detail and comparison actions.
- Skills: curated editorial showcase, source and category browsing, extension-marketplace rows, installation detail with local files or upstream links.
- MCP: directory plus selected server inspector, actual client/transport-driven example commands, explicit setup steps, navigable resource strip. Diagram is conceptual, not live connection telemetry.
- Motion: existing keyed FLIP, restrained interaction transitions; reduced-motion CSS; no heavy new effect.
- Data, IDs, routes, bookmarks, comparisons and source links preserved. No popularity, fabricated ratings, or new connectivity claims.
- Source-level checks only; build, browser screenshots, contrast measurements and runtime verification still outstanding.
