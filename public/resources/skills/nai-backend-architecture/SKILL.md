---
name: nai-backend-architecture
description: "Design backend boundaries and reliable APIs. Use when the user requests backend architecture."
---

# Backend architecture

## Workflow

1. Inspect repository structure, domain entities, existing routes, storage, and deployment constraints. Establish which business behavior must remain unchanged.
2. Map responsibilities between request handling, validation, business rules, persistence, and integrations. Choose the simplest appropriate architecture.
3. Define request and response contracts, validation, status codes, authorization, transaction boundaries, and failure behavior.
4. Implement focused changes following existing conventions. Avoid destructive migrations, secrets in code, unnecessary dependencies, and speculative microservices.
5. Provide positive and negative test cases, compatibility notes, and an incremental integration plan.

## Example request

Design a REST endpoint for customer churn predictions with a validated schema.

## Completion checklist

- Work from the actual project or supplied materials.
- Respect explicit user constraints and existing functionality.
- Keep credentials and personal data out of output.
- Report what changed and what has not been verified.
