---
name: nai-code-review
description: "Review diffs for correctness, security, and regressions. Use when the user requests code review."
---

# Code review

## Workflow

1. Read the diff and enough surrounding code to understand callers, contracts, and state transitions.
2. Prioritize concrete correctness, security, data integrity, compatibility, and regression issues. Avoid unrelated style complaints.
3. Trace a plausible reproduction for each finding. Cite files and lines where available and explain the user impact.
4. Suggest minimal fixes and regression checks. Distinguish confirmed defects from hypotheses requiring more evidence.
5. Return blocking findings first, then optional improvements and verification gaps. Do not merge or publish unless explicitly requested.

## Example request

Review a pull request for broken validation and API compatibility.

## Completion checklist

- Work from the actual project or supplied materials.
- Respect explicit user constraints and existing functionality.
- Keep credentials and personal data out of output.
- Report what changed and what has not been verified.
