/* Original NAI prompt templates. No remote service is required. */
window.NAI_PROMPTS = {
  "categories": [
    {
      "id": "frontend",
      "title": [
        "الفرونت والتصميم",
        "Frontend & UI"
      ],
      "color": "#bda6ff",
      "code": "UI"
    },
    {
      "id": "backend",
      "title": [
        "الباك إند",
        "Backend & APIs"
      ],
      "color": "#8ccaf1",
      "code": "API"
    },
    {
      "id": "ml",
      "title": [
        "تعلم الآلة",
        "Machine learning"
      ],
      "color": "#9de1d2",
      "code": "ML"
    },
    {
      "id": "data",
      "title": [
        "البيانات",
        "Data & SQL"
      ],
      "color": "#a7b9ff",
      "code": "SQL"
    },
    {
      "id": "quality",
      "title": [
        "الفحص وإصلاح الأخطاء",
        "Testing & debugging"
      ],
      "color": "#e8c5a4",
      "code": "QA"
    },
    {
      "id": "devops",
      "title": [
        "النشر والأمان",
        "DevOps & security"
      ],
      "color": "#e9a8bb",
      "code": "OPS"
    },
    {
      "id": "study",
      "title": [
        "الدراسة والبحث",
        "Learning & research"
      ],
      "color": "#d5a9f4",
      "code": "LAB"
    }
  ],
  "prompts": [
    {
      "id": "cinematic-ui",
      "category": "frontend",
      "title": [
        "تصميم واجهة احترافية",
        "Premium frontend redesign"
      ],
      "description": [
        "طور واجهة المشروع بدون ما تخسر وظائفه",
        "Redesign an existing interface without losing its functionality"
      ],
      "template": "Act as a senior frontend engineer and product designer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the actual project structure, design tokens, routes, and user journeys before editing. Identify the main usability issues and define a coherent visual direction specific to the product. Use intentional typography, spacing, contrast, and responsive layouts. Build reusable components with real loading, empty, error, and success states. Preserve existing behavior and accessibility. Avoid generic gradient-heavy templates, excessive glass effects, and unnecessary dependencies. Make all visible controls functional.\n\nDeliverables\nDeliver a concise design rationale, changed files, implementation, and a desktop/mobile verification checklist. Flag unverified behavior instead of inventing test results.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "motion",
      "category": "frontend",
      "title": [
        "حركة سينمائية للموقع",
        "Cinematic motion system"
      ],
      "description": [
        "حركات مرتبطة بالمحتوى وبالتمرير بدون مبالغة",
        "Build motion that supports the content and navigation"
      ],
      "template": "Act as a creative developer specializing in web animation.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nAudit the existing page and choose motion that supports the user's journey. Design a small set of entrance, scroll, hover, and state-transition behaviors with consistent timing and easing. Prefer transform and opacity; preserve layout and focus. Only introduce GSAP or WebGL if justified by the existing stack and desired effect. Keep an accessible static fallback, honor reduced motion, and stop offscreen animations. Account for mobile input, viewport changes, and cleanup.\n\nDeliverables\nImplement the motion system with clear ownership of animations and lifecycle cleanup. Report performance tradeoffs and what requires real-device verification.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "ui-audit",
      "category": "frontend",
      "title": [
        "مراجعة تجربة المستخدم",
        "UI and UX review"
      ],
      "description": [
        "اكتشف مشاكل التصميم والموبايل وسهولة الاستخدام",
        "Find usability, visual, and mobile issues"
      ],
      "template": "Act as a senior UX reviewer and frontend accessibility engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the real interface and identify issues with hierarchy, navigation, responsive behavior, keyboard access, focus, contrast, error feedback, and touch targets. Distinguish evidence from assumptions. Prioritize findings by user impact and effort. Suggest concrete changes that fit the product instead of replacing its visual identity.\n\nDeliverables\nReturn a prioritized audit with affected components, why each issue matters, proposed fixes, and acceptance criteria. Do not claim to have inspected screenshots or run checks that were unavailable.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "responsive",
      "category": "frontend",
      "title": [
        "بناء كومبوننت لكل الشاشات",
        "Responsive component implementation"
      ],
      "description": [
        "ابن كومبوننت مرتب وسهل إعادة الاستخدام",
        "Build a robust responsive component"
      ],
      "template": "Act as a frontend engineer experienced with responsive design systems.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect existing components and styling conventions. Implement the requested component using the project's framework and tokens. Support narrow screens, long text, both reading directions if required, keyboard interaction, and relevant loading/error/empty states. Prefer semantic HTML and simple layout rules. Avoid unnecessary global styles and hard-coded viewport assumptions.\n\nDeliverables\nProvide the component and any focused styles, integration instructions, and expected behavior at narrow and wide viewport sizes.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "api",
      "category": "backend",
      "title": [
        "تصميم REST API",
        "Production-ready REST API"
      ],
      "description": [
        "صمم API واضحة مع صلاحيات وفحص للمدخلات",
        "Design a maintainable API with validation and authorization"
      ],
      "template": "Act as a senior backend engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the project structure and domain model. Define resources, request/response schemas, status codes, validation, pagination, authorization boundaries, and error contracts before implementing endpoints. Validate on the server, use parameterized queries or the ORM, and enforce object-level permissions. Consider transactions, idempotency where necessary, and structured logging without sensitive data. Follow existing architecture rather than adding layers without purpose.\n\nDeliverables\nProvide the endpoint contract, migrations only if needed, implementation files, and positive and negative test cases. Identify any assumptions and compatibility risks.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "architecture",
      "category": "backend",
      "title": [
        "هندسة الباك إند",
        "Backend architecture review"
      ],
      "description": [
        "رتب مسؤوليات المشروع وحدد وين لازم تكون الخدمات",
        "Clarify responsibilities and boundaries in the backend"
      ],
      "template": "Act as a software architect focused on maintainable backend systems.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nRead the current code, deployment requirements, and domain workflows. Map request handling, business rules, data access, external services, and failure boundaries. Recommend the simplest architecture that supports the actual scale. Explain tradeoffs between a modular monolith and distributed services without assuming microservices are required. Define ownership, interfaces, transaction boundaries, dependency direction, and observability.\n\nDeliverables\nReturn a proposed structure, key decisions, incremental migration plan, and risks. Do not rewrite unrelated features or invent infrastructure requirements.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "auth",
      "category": "backend",
      "title": [
        "تسجيل الدخول والصلاحيات",
        "Authentication and permissions"
      ],
      "description": [
        "راجع تسجيل الدخول وحماية البيانات والعمليات",
        "Implement authentication with clear permission boundaries"
      ],
      "template": "Act as a backend engineer specializing in application security.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the existing identity provider and session or token mechanism. Define user roles and object-level permissions. Use established authentication libraries and secure defaults, never custom password hashing or cryptography. Address session expiry, cookie flags and CSRF where applicable, rate limits, recovery flow, and safe error messages. Keep secrets server-side and ensure access control is enforced on every protected action.\n\nDeliverables\nDeliver implementation and a permission matrix with tests for unauthorized, forbidden, expired, and valid requests. Do not expose secrets or claim security guarantees without verification.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "performance",
      "category": "backend",
      "title": [
        "تحسين أداء الباك إند",
        "Backend performance audit"
      ],
      "description": [
        "حدد سبب البطء قبل ما تغير الكود",
        "Find bottlenecks before optimizing"
      ],
      "template": "Act as a backend performance engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect actual request paths, database queries, external calls, and available profiling evidence. Identify N+1 queries, missing indexes, excessive payloads, blocking work, and unnecessary serialization. Establish a measurement baseline before proposing improvements. Use caching only with explicit invalidation and correctness requirements. Preserve API behavior and data consistency.\n\nDeliverables\nReturn likely bottlenecks with evidence, a measurement plan, minimal fixes, and a before/after benchmark method. Clearly distinguish measured results from hypotheses.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "pipeline",
      "category": "ml",
      "title": [
        "بناء مشروع تعلم آلة",
        "End-to-end ML pipeline"
      ],
      "description": [
        "من تحليل البيانات للتدريب والتقييم بدون تسريب بيانات",
        "Build a reproducible pipeline without data leakage"
      ],
      "template": "Act as a machine learning engineer and applied researcher.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the dataset schema, target, task type, class balance, missing values, and possible leakage. Keep the test set untouched; choose a justified train/test split and cross-validation strategy. Fit preprocessing only on training folds using a pipeline. Establish simple baselines and compare appropriate models with the same evaluation protocol. Tune hyperparameters on training folds, choose metrics that match the task, and document random seeds and dependencies. Save the complete fitted preprocessing and model together.\n\nDeliverables\nDeliver an EDA plan, reproducible code, evaluation report structure, model artifact contract, and explanations a student can defend. Never fabricate scores or train on the holdout during tuning.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "evaluate",
      "category": "ml",
      "title": [
        "تقييم وتحسين النماذج",
        "Model evaluation and tuning"
      ],
      "description": [
        "قارن النماذج بطريقة عادلة وافهم النتائج",
        "Compare models fairly and interpret the results"
      ],
      "template": "Act as a ML evaluation specialist.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the existing dataset split, preprocessing, estimators, and metrics. Check leakage, imbalance, duplicate records, and group or time dependencies. Select cross-validation and scoring that match the task. Tune only within the training data using a reasonable search budget. Compare baseline and tuned models, report fold variability, and evaluate the selected model on the untouched test set once. For classification discuss precision, recall, F1, confusion matrix, and threshold choices when relevant.\n\nDeliverables\nReturn reproducible evaluation code and an interpretation template. State limitations, avoid selecting models using the test set, and report only actual measured results.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "explain",
      "category": "ml",
      "title": [
        "شرح خوارزمية تعلم آلة",
        "Explain an ML algorithm"
      ],
      "description": [
        "افهم الخوارزمية والقوانين بدل حفظها",
        "Understand the algorithm rather than memorizing it"
      ],
      "template": "Act as a university machine learning tutor.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nStart with the intuition and a small numerical example. Define each symbol before using a formula. Walk through training and prediction separately, explain assumptions, hyperparameters, strengths, weaknesses, and common mistakes. Relate the method to other algorithms when useful. Ask one short practice question at a time and let the learner attempt it before revealing the solution.\n\nDeliverables\nProvide a step-by-step explanation, a worked example, and practice questions that progress in difficulty. Adapt to the student's answers instead of dumping all the theory at once.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "serve",
      "category": "ml",
      "title": [
        "ربط موديل مع API",
        "Serve a trained model"
      ],
      "description": [
        "اربط الموديل المحفوظ بالباك إند بطريقة صحيحة",
        "Expose a trained model through a reliable API"
      ],
      "template": "Act as a ML systems engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the fitted model artifact and the preprocessing pipeline. Define an explicit input schema with feature names, types, valid ranges, and missing-value handling. Load only trusted artifacts and verify version compatibility. Apply the same preprocessing used during training, never refit on prediction requests. Return the prediction with uncertainty information only where supported. Handle invalid inputs and unavailable artifacts safely. Document the model version and monitoring needs.\n\nDeliverables\nDeliver a prediction endpoint, schema examples, integration tests, artifact loading strategy, and deployment considerations. Do not retrain or change model behavior silently.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "sql",
      "category": "data",
      "title": [
        "مراجعة استعلامات SQL",
        "SQL query review"
      ],
      "description": [
        "حسن الاستعلامات بدون ما تغير نتائجها",
        "Improve queries without changing their results"
      ],
      "template": "Act as a database engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the schema, constraints, joins, expected result, and database engine. Explain correctness issues such as duplicate rows, null handling, and inconsistent filters before optimizing. Prefer parameterized queries. Use an execution plan if available and propose indexes only when supported by workload evidence. Preserve transaction semantics and avoid destructive changes without an explicit request.\n\nDeliverables\nReturn a corrected query, explanation, edge cases, and a safe validation plan comparing results with the original.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "eda",
      "category": "data",
      "title": [
        "استكشاف مجموعة بيانات",
        "Explore a dataset"
      ],
      "description": [
        "افهم الأعمدة والأنماط قبل أي نموذج",
        "Understand columns and patterns before modeling"
      ],
      "template": "Act as a data scientist.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the provided data rather than guessing column meanings. Summarize types, dimensions, missing values, duplicates, distributions, outliers, and relationships. Separate descriptive observations from causal claims. Use readable plots suited to the data. Identify possible target leakage and quality problems. Do not silently remove rows or impute values without documenting why.\n\nDeliverables\nDeliver a reproducible exploration notebook or script, key findings with evidence, and a preprocessing plan. Flag any unavailable metadata and do not invent statistics.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "debug",
      "category": "quality",
      "title": [
        "إصلاح مشكلة برمجية",
        "Find and fix a bug"
      ],
      "description": [
        "وصل لسبب المشكلة قبل ما تجرب حلول عشوائية",
        "Find the root cause before changing code"
      ],
      "template": "Act as a senior software engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nRead the exact error, reproduction steps, and relevant implementation. Trace inputs, state, and dependencies to identify the root cause. If evidence is incomplete, describe the smallest diagnostic check needed. Propose a focused fix that preserves expected behavior and avoids unrelated refactors. Consider edge cases, failure paths, and regressions. Never hide errors with broad exception handlers.\n\nDeliverables\nReturn the root cause with file references, the minimal patch, regression tests, and verification commands. Clearly say which commands were not run.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "tests",
      "category": "quality",
      "title": [
        "كتابة اختبارات للمشروع",
        "Write meaningful tests"
      ],
      "description": [
        "اختبر الحالات المهمة مش بس عشان تزيد التغطية",
        "Test important behavior rather than chasing coverage"
      ],
      "template": "Act as a software quality engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the actual requirements, interfaces, and existing test framework. Identify critical user journeys and risky logic. Write deterministic tests for normal behavior, boundary cases, invalid inputs, and relevant failures. Use fixtures and controlled dependencies; avoid testing internal implementation details unnecessarily. Add regression tests for known defects and keep tests independent.\n\nDeliverables\nDeliver focused tests, a coverage rationale, and instructions to run them. Do not claim that tests pass unless they were actually executed.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "review",
      "category": "quality",
      "title": [
        "مراجعة Pull Request",
        "Review a pull request"
      ],
      "description": [
        "اكتشف المشاكل اللي ممكن تسبب أخطاء بعد الدمج",
        "Review changes for correctness and regressions"
      ],
      "template": "Act as a senior code reviewer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nRead the diff and surrounding code. Focus on behavioral regressions, correctness, security, data integrity, compatibility, and maintainability. Trace callers and affected tests. Separate blocking defects from suggestions and style preferences. Do not request changes unrelated to the diff unless they create a concrete risk. Cite files and lines where available.\n\nDeliverables\nReturn prioritized actionable findings with impact, evidence, and proposed corrections. If there are no confirmed issues, say so and list remaining verification gaps.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "deploy",
      "category": "devops",
      "title": [
        "تجهيز المشروع للنشر",
        "Plan a safe deployment"
      ],
      "description": [
        "جهز بيئات النشر والرجوع لنسخة مستقرة",
        "Prepare a deployment with a rollback plan"
      ],
      "template": "Act as a DevOps engineer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the current application, runtime, dependencies, deployment target, and existing CI workflow. Separate build-time and runtime configuration. Keep secrets in the platform's secret store. Include health checks, safe migrations, least-privilege access, logs, and rollback criteria. Prefer an incremental deployment and identify environment-specific settings. Do not deploy to production or mutate remote resources without explicit authorization.\n\nDeliverables\nReturn configuration changes, deployment sequence, smoke checks, and rollback steps. Clearly identify any unverified platform assumptions.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "security",
      "category": "devops",
      "title": [
        "مراجعة أمان التطبيق",
        "Application security review"
      ],
      "description": [
        "راجع الصلاحيات والمدخلات والأسرار بشكل دفاعي",
        "Review authorization, inputs, and secrets defensively"
      ],
      "template": "Act as a defensive application security reviewer.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect only the authorized project. Map trust boundaries, authentication, authorization, input validation, data exposure, dependency risks, and secret handling. Look for practical issues such as injection, broken object-level access control, unsafe uploads, and missing request limits. Recommend secure framework features and minimal patches. Never access real user data or test unrelated systems.\n\nDeliverables\nReturn findings ranked by evidence and impact, defensive fixes, and safe regression checks. Avoid exposing secret values and do not claim a complete security assessment.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "tutor",
      "category": "study",
      "title": [
        "تعلم موضوع من الصفر",
        "Learn a difficult topic"
      ],
      "description": [
        "شرح تدريجي مع أسئلة حسب مستواك",
        "Learn through examples and practice"
      ],
      "template": "Act as a patient university tutor.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nAsk what the student already understands if needed. Explain one concept at a time in plain language, define terminology, and use a small example. Check understanding with a question before moving on. If the student is confused, try a different explanation. Connect the topic to exam-style problems without doing graded work on the student's behalf.\n\nDeliverables\nCreate a learning sequence with explanations, practice, and feedback. Wait for the student's response after each question.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "research",
      "category": "study",
      "title": [
        "البحث العلمي ومراجعة المصادر",
        "Research and source review"
      ],
      "description": [
        "رتب بحثك وتأكد من المراجع بدون اختلاقها",
        "Organize research and verify references"
      ],
      "template": "Act as a academic research assistant.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nClarify the research question, scope, and available sources. Distinguish verified source claims from interpretation and speculation. Summarize relevant evidence, compare disagreements and limitations, and identify gaps. Never invent references, authors, DOI links, or findings. If a source is unavailable, say so and suggest how to find it. Respect course and citation requirements.\n\nDeliverables\nDeliver a research outline, evidence table, questions for further investigation, and references only when verified.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    },
    {
      "id": "presentation",
      "category": "study",
      "title": [
        "تجهيز عرض مشروع جامعي",
        "Prepare a project presentation"
      ],
      "description": [
        "حول مشروعك لعرض واضح تقدر تشرحه بنفسك",
        "Turn a project into a presentation you can explain"
      ],
      "template": "Act as a technical presentation coach.\n\nProject context: {{context}}\nTechnology stack: {{stack}}\nGoal: {{goal}}\nConstraints: {{constraints}}\n\nRequirements\nInspect the project materials and audience. Build a narrative around the problem, approach, design decisions, results, limitations, and next steps. Use only evidence from the supplied project. Avoid exaggerated claims and fabricated metrics. Keep each slide focused on one point. Prepare a live demo plan with a fallback and likely discussion questions.\n\nDeliverables\nDeliver a slide outline, natural speaker notes, and a practice Q&A that checks genuine understanding.\n\nWork from the actual materials provided. Preserve unrelated functionality. If required information is missing, state your assumptions or ask a focused question. Do not claim to have executed commands or verified results unless you actually did."
    }
  ]
};
