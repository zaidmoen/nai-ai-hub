---
name: nai-debugging
description: "Diagnose failures and implement focused regression fixes. Use when the user requests debugging workflow."
---

# Debugging workflow

## Workflow

1. Read the exact error and reproduction steps. Identify environment, recent changes, and relevant code paths.
2. Trace the failing input through the state and dependencies. Separate evidence from hypotheses and select the smallest useful diagnostic check.
3. Find the root cause before editing. Apply a focused change that preserves unrelated behavior and does not hide exceptions.
4. Add a regression case and include boundary or failure cases as appropriate. Respect any explicit restriction on running builds or tests.
5. Summarize cause, changed files, verification performed, and remaining steps for the user.

## Example request

Diagnose a failing API request using the error log and relevant backend code.

## Completion checklist

- Work from the actual project or supplied materials.
- Respect explicit user constraints and existing functionality.
- Keep credentials and personal data out of output.
- Report what changed and what has not been verified.
