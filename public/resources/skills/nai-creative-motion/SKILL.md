---
name: nai-creative-motion
description: "Build purposeful scroll and interaction motion without unnecessary GPU work. Use when the user requests creative motion."
---

# Creative motion

## Workflow

1. Map the important moments in the current interface. Choose motion to communicate hierarchy, feedback, or spatial continuity, not to fill empty space.
2. Define a small shared timing and easing system. Use transform and opacity for primary animations and isolate layout animation from hover transforms.
3. Prefer native CSS or Web Animations first. Use GSAP or a renderer only when justified and compatible with the stack. Preserve an accessible static fallback.
4. Handle coarse pointers, mobile scrolling, reduced motion, visibility, resize, cancellation, and teardown. Avoid persistent offscreen loops and blocking interaction.
5. Document the animation lifecycle and verify interaction reversals, focus, and responsive behavior where tools permit.

## Example request

Add a scroll-driven product hero with reduced-motion support.

## Completion checklist

- Work from the actual project or supplied materials.
- Respect explicit user constraints and existing functionality.
- Keep credentials and personal data out of output.
- Report what changed and what has not been verified.
