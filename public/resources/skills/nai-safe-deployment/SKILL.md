---
name: nai-safe-deployment
description: "Prepare a deployment plan with rollback and health checks. Use when the user requests safe deployment."
---

# Safe deployment

## Workflow

1. Identify application runtime, target environment, existing CI, data dependencies, and ownership.
2. Separate build and runtime configuration. Keep secrets in the provider's secret store and use least privilege.
3. Plan compatible migrations, health checks, logging, smoke tests, and rollback triggers. Avoid irreversible changes.
4. Prepare configuration and commands without executing production deployment or modifying external resources unless specifically authorized.
5. Record assumptions and verification evidence. Explain what must be confirmed before release.

## Example request

Prepare a staging deployment plan for an existing web application.

## Completion checklist

- Work from the actual project or supplied materials.
- Respect explicit user constraints and existing functionality.
- Keep credentials and personal data out of output.
- Report what changed and what has not been verified.
