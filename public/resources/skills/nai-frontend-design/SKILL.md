---
name: nai-frontend-design
description: "Redesign or build a product interface with intentional layout and real interactions. Use when the user requests frontend design."
---

# Frontend design

## Workflow

1. Inspect the actual routes, components, tokens, assets, and current user flows. Identify what users need to accomplish before proposing a visual direction.
2. Define a visual system with typography, spacing, hierarchy, color contrast, and responsive breakpoints. Use the product identity rather than an unrelated generic template.
3. Implement the smallest coherent set of reusable components. Include real loading, empty, error, success, and focus states. Keep existing data contracts and navigation working.
4. Check narrow and wide viewports, keyboard access, touch targets, long content, and reduced motion. Avoid unnecessary framework migrations or heavy visual effects.
5. Return changed files, rationale, and verification evidence. Clearly distinguish code inspection from browser testing.

## Example request

Redesign the dashboard without changing its existing API or business logic.

## Completion checklist

- Work from the actual project or supplied materials.
- Respect explicit user constraints and existing functionality.
- Keep credentials and personal data out of output.
- Report what changed and what has not been verified.
