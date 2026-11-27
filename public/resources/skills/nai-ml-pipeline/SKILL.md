---
name: nai-ml-pipeline
description: "Create reproducible machine learning experiments and model artifacts. Use when the user requests ml pipeline."
---

# ML pipeline

## Workflow

1. Inspect dataset schema, target, task type, missingness, imbalance, groups, and time ordering. Document unclear columns rather than guessing.
2. Choose a defensible holdout and cross-validation strategy. Fit preprocessing inside training folds and keep the test set untouched during selection and tuning.
3. Establish baselines and compare suitable estimators under the same protocol. Tune only on training data and report variability and task-appropriate metrics.
4. Save the fitted preprocessing and estimator together with feature schema, versions, and random seeds. Validate prediction input and artifact compatibility.
5. Explain decisions, risks, and limitations in terms the student can defend. Never fabricate results or claim unexecuted experiments.

## Example request

Build a reproducible classification pipeline with stratified splitting and cross-validation.

## Completion checklist

- Work from the actual project or supplied materials.
- Respect explicit user constraints and existing functionality.
- Keep credentials and personal data out of output.
- Report what changed and what has not been verified.
