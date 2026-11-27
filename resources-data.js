/* Original NAI skills and curated MCP directory. */
window.NAI_RESOURCES = {
  "skills": [
    {
      "id": "nai-frontend-design",
      "title": [
        "تصميم الواجهات",
        "Frontend design"
      ],
      "desc": [
        "تصميم واجهات مرتبطة بهدف المشروع بدل القوالب المكررة",
        "Redesign or build a product interface with intentional layout and real interactions"
      ],
      "category": "frontend",
      "code": "UI",
      "color": "#bda6ff",
      "content": "---\nname: nai-frontend-design\ndescription: \"Redesign or build a product interface with intentional layout and real interactions. Use when the user requests frontend design.\"\n---\n\n# Frontend design\n\n## Workflow\n\n1. Inspect the actual routes, components, tokens, assets, and current user flows. Identify what users need to accomplish before proposing a visual direction.\n2. Define a visual system with typography, spacing, hierarchy, color contrast, and responsive breakpoints. Use the product identity rather than an unrelated generic template.\n3. Implement the smallest coherent set of reusable components. Include real loading, empty, error, success, and focus states. Keep existing data contracts and navigation working.\n4. Check narrow and wide viewports, keyboard access, touch targets, long content, and reduced motion. Avoid unnecessary framework migrations or heavy visual effects.\n5. Return changed files, rationale, and verification evidence. Clearly distinguish code inspection from browser testing.\n\n## Example request\n\nRedesign the dashboard without changing its existing API or business logic.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-frontend-design/SKILL.md",
      "example": "Redesign the dashboard without changing its existing API or business logic."
    },
    {
      "id": "nai-creative-motion",
      "title": [
        "حركة الواجهات",
        "Creative motion"
      ],
      "desc": [
        "حركات سينمائية خفيفة بتخدم المحتوى",
        "Build purposeful scroll and interaction motion without unnecessary GPU work"
      ],
      "category": "frontend",
      "code": "FX",
      "color": "#a7b9ff",
      "content": "---\nname: nai-creative-motion\ndescription: \"Build purposeful scroll and interaction motion without unnecessary GPU work. Use when the user requests creative motion.\"\n---\n\n# Creative motion\n\n## Workflow\n\n1. Map the important moments in the current interface. Choose motion to communicate hierarchy, feedback, or spatial continuity, not to fill empty space.\n2. Define a small shared timing and easing system. Use transform and opacity for primary animations and isolate layout animation from hover transforms.\n3. Prefer native CSS or Web Animations first. Use GSAP or a renderer only when justified and compatible with the stack. Preserve an accessible static fallback.\n4. Handle coarse pointers, mobile scrolling, reduced motion, visibility, resize, cancellation, and teardown. Avoid persistent offscreen loops and blocking interaction.\n5. Document the animation lifecycle and verify interaction reversals, focus, and responsive behavior where tools permit.\n\n## Example request\n\nAdd a scroll-driven product hero with reduced-motion support.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-creative-motion/SKILL.md",
      "example": "Add a scroll-driven product hero with reduced-motion support."
    },
    {
      "id": "nai-backend-architecture",
      "title": [
        "هندسة الباك إند",
        "Backend architecture"
      ],
      "desc": [
        "تنظيم الخدمات والـ API حسب احتياج المشروع",
        "Design backend boundaries and reliable APIs"
      ],
      "category": "backend",
      "code": "API",
      "color": "#8ccaf1",
      "content": "---\nname: nai-backend-architecture\ndescription: \"Design backend boundaries and reliable APIs. Use when the user requests backend architecture.\"\n---\n\n# Backend architecture\n\n## Workflow\n\n1. Inspect repository structure, domain entities, existing routes, storage, and deployment constraints. Establish which business behavior must remain unchanged.\n2. Map responsibilities between request handling, validation, business rules, persistence, and integrations. Choose the simplest appropriate architecture.\n3. Define request and response contracts, validation, status codes, authorization, transaction boundaries, and failure behavior.\n4. Implement focused changes following existing conventions. Avoid destructive migrations, secrets in code, unnecessary dependencies, and speculative microservices.\n5. Provide positive and negative test cases, compatibility notes, and an incremental integration plan.\n\n## Example request\n\nDesign a REST endpoint for customer churn predictions with a validated schema.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-backend-architecture/SKILL.md",
      "example": "Design a REST endpoint for customer churn predictions with a validated schema."
    },
    {
      "id": "nai-ml-pipeline",
      "title": [
        "مشاريع تعلم الآلة",
        "ML pipeline"
      ],
      "desc": [
        "تدريب وتقييم النماذج بدون تسريب بيانات",
        "Create reproducible machine learning experiments and model artifacts"
      ],
      "category": "ml",
      "code": "ML",
      "color": "#9de1d2",
      "content": "---\nname: nai-ml-pipeline\ndescription: \"Create reproducible machine learning experiments and model artifacts. Use when the user requests ml pipeline.\"\n---\n\n# ML pipeline\n\n## Workflow\n\n1. Inspect dataset schema, target, task type, missingness, imbalance, groups, and time ordering. Document unclear columns rather than guessing.\n2. Choose a defensible holdout and cross-validation strategy. Fit preprocessing inside training folds and keep the test set untouched during selection and tuning.\n3. Establish baselines and compare suitable estimators under the same protocol. Tune only on training data and report variability and task-appropriate metrics.\n4. Save the fitted preprocessing and estimator together with feature schema, versions, and random seeds. Validate prediction input and artifact compatibility.\n5. Explain decisions, risks, and limitations in terms the student can defend. Never fabricate results or claim unexecuted experiments.\n\n## Example request\n\nBuild a reproducible classification pipeline with stratified splitting and cross-validation.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-ml-pipeline/SKILL.md",
      "example": "Build a reproducible classification pipeline with stratified splitting and cross-validation."
    },
    {
      "id": "nai-code-review",
      "title": [
        "مراجعة الكود",
        "Code review"
      ],
      "desc": [
        "مراجعة التعديلات واكتشاف المشاكل قبل الدمج",
        "Review diffs for correctness, security, and regressions"
      ],
      "category": "quality",
      "code": "PR",
      "color": "#e8c5a4",
      "content": "---\nname: nai-code-review\ndescription: \"Review diffs for correctness, security, and regressions. Use when the user requests code review.\"\n---\n\n# Code review\n\n## Workflow\n\n1. Read the diff and enough surrounding code to understand callers, contracts, and state transitions.\n2. Prioritize concrete correctness, security, data integrity, compatibility, and regression issues. Avoid unrelated style complaints.\n3. Trace a plausible reproduction for each finding. Cite files and lines where available and explain the user impact.\n4. Suggest minimal fixes and regression checks. Distinguish confirmed defects from hypotheses requiring more evidence.\n5. Return blocking findings first, then optional improvements and verification gaps. Do not merge or publish unless explicitly requested.\n\n## Example request\n\nReview a pull request for broken validation and API compatibility.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-code-review/SKILL.md",
      "example": "Review a pull request for broken validation and API compatibility."
    },
    {
      "id": "nai-debugging",
      "title": [
        "إصلاح المشاكل البرمجية",
        "Debugging workflow"
      ],
      "desc": [
        "تتبع المشكلة بدل تجربة حلول عشوائية",
        "Diagnose failures and implement focused regression fixes"
      ],
      "category": "quality",
      "code": "BUG",
      "color": "#d5a9f4",
      "content": "---\nname: nai-debugging\ndescription: \"Diagnose failures and implement focused regression fixes. Use when the user requests debugging workflow.\"\n---\n\n# Debugging workflow\n\n## Workflow\n\n1. Read the exact error and reproduction steps. Identify environment, recent changes, and relevant code paths.\n2. Trace the failing input through the state and dependencies. Separate evidence from hypotheses and select the smallest useful diagnostic check.\n3. Find the root cause before editing. Apply a focused change that preserves unrelated behavior and does not hide exceptions.\n4. Add a regression case and include boundary or failure cases as appropriate. Respect any explicit restriction on running builds or tests.\n5. Summarize cause, changed files, verification performed, and remaining steps for the user.\n\n## Example request\n\nDiagnose a failing API request using the error log and relevant backend code.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-debugging/SKILL.md",
      "example": "Diagnose a failing API request using the error log and relevant backend code."
    },
    {
      "id": "nai-safe-deployment",
      "title": [
        "النشر الآمن",
        "Safe deployment"
      ],
      "desc": [
        "تجهيز النشر مع خطة رجوع",
        "Prepare a deployment plan with rollback and health checks"
      ],
      "category": "devops",
      "code": "OPS",
      "color": "#e9a8bb",
      "content": "---\nname: nai-safe-deployment\ndescription: \"Prepare a deployment plan with rollback and health checks. Use when the user requests safe deployment.\"\n---\n\n# Safe deployment\n\n## Workflow\n\n1. Identify application runtime, target environment, existing CI, data dependencies, and ownership.\n2. Separate build and runtime configuration. Keep secrets in the provider's secret store and use least privilege.\n3. Plan compatible migrations, health checks, logging, smoke tests, and rollback triggers. Avoid irreversible changes.\n4. Prepare configuration and commands without executing production deployment or modifying external resources unless specifically authorized.\n5. Record assumptions and verification evidence. Explain what must be confirmed before release.\n\n## Example request\n\nPrepare a staging deployment plan for an existing web application.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-safe-deployment/SKILL.md",
      "example": "Prepare a staging deployment plan for an existing web application."
    },
    {
      "id": "nai-research-review",
      "title": [
        "البحث العلمي",
        "Research review"
      ],
      "desc": [
        "تنظيم المصادر ومراجعة الأدلة",
        "Evaluate research sources and organize a literature review"
      ],
      "category": "study",
      "code": "LAB",
      "color": "#bda6ff",
      "content": "---\nname: nai-research-review\ndescription: \"Evaluate research sources and organize a literature review. Use when the user requests research review.\"\n---\n\n# Research review\n\n## Workflow\n\n1. Clarify the research question and scope. Identify available sources and distinguish supplied evidence from external research.\n2. Read relevant passages from actual sources. Track author, title, publication date, and link only when verified.\n3. Compare methods, findings, limitations, and disagreements. Do not convert correlations into causal claims.\n4. Build an evidence table and outline. Flag missing information instead of inventing citations or results.\n5. Help the student explain the work and follow course integrity requirements.\n\n## Example request\n\nCompare supplied papers and prepare an evidence table for a literature review.\n\n## Completion checklist\n\n- Work from the actual project or supplied materials.\n- Respect explicit user constraints and existing functionality.\n- Keep credentials and personal data out of output.\n- Report what changed and what has not been verified.\n",
      "path": "resources/skills/nai-research-review/SKILL.md",
      "example": "Compare supplied papers and prepare an evidence table for a literature review."
    }
  ],
  "servers": [
    {
      "id": "github",
      "title": [
        "GitHub",
        "GitHub"
      ],
      "desc": [
        "راجع الريبو والـ Pull Requests والـ Issues من داخل مساعدك",
        "Inspect repositories and pull requests or work with issues"
      ],
      "category": "development",
      "code": "GH",
      "color": "#bda6ff",
      "provider": "GitHub",
      "transport": "http",
      "url": "https://api.githubcopilot.com/mcp/readonly",
      "docs": "https://github.com/github/github-mcp-server",
      "note": [
        "ابدأ بالقراءة فقط وتأكد من صلاحيات حسابك قبل أي تعديل",
        "Start with read-only access and review the account permissions"
      ],
      "auth": [
        "قد تحتاج تسجيل دخول أو رمز وصول حسب العميل",
        "OAuth or an access token may be required depending on the client"
      ]
    },
    {
      "id": "playwright",
      "title": [
        "Playwright",
        "Playwright"
      ],
      "desc": [
        "افتح صفحات مشروعك وافحص التفاعل وسلوك الواجهة",
        "Inspect your web app and exercise browser interactions"
      ],
      "category": "development",
      "code": "WEB",
      "color": "#9de1d2",
      "provider": "Microsoft",
      "transport": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest"
      ],
      "docs": "https://github.com/microsoft/playwright-mcp",
      "note": [
        "استخدم متصفح تجريبي بدون حسابات شخصية وراجع الأوامر قبل تشغيل الحزمة",
        "Use an isolated browser profile and review the package before running it"
      ],
      "auth": [
        "يحتاج Node.js ومتصفح مدعوم حسب التوثيق",
        "Requires a compatible Node.js setup and browser"
      ]
    },
    {
      "id": "supabase",
      "title": [
        "Supabase",
        "Supabase"
      ],
      "desc": [
        "افهم جداول قاعدة البيانات وعلاقاتها وراجع الاستعلامات",
        "Inspect database schemas and review queries"
      ],
      "category": "database",
      "code": "DB",
      "color": "#9de1d2",
      "provider": "Supabase",
      "transport": "http",
      "url": "https://mcp.supabase.com/mcp?project_ref=YOUR_PROJECT_REF&read_only=true",
      "docs": "https://supabase.com/docs/guides/ai-tools/mcp",
      "note": [
        "استبدل YOUR_PROJECT_REF بمعرف مشروع تجريبي وخلي القراءة فقط مفعلة",
        "Replace YOUR_PROJECT_REF with a development project reference and keep read-only enabled"
      ],
      "auth": [
        "سجل الدخول بحسابك عند طلب المصادقة",
        "Authenticate with your account when prompted"
      ]
    },
    {
      "id": "vercel",
      "title": [
        "Vercel",
        "Vercel"
      ],
      "desc": [
        "راجع مشاريع النشر والسجلات ومعلومات البيئات",
        "Inspect deployments and project information"
      ],
      "category": "deployment",
      "code": "DEP",
      "color": "#e8c5a4",
      "provider": "Vercel",
      "transport": "http",
      "url": "https://mcp.vercel.com",
      "docs": "https://vercel.com/docs/agent-resources/vercel-mcp",
      "note": [
        "راجع الفريق والمشروع ولا تنشر أو تغير بيئة الإنتاج بدون موافقة",
        "Confirm the team and project before approving any deployment or production change"
      ],
      "auth": [
        "تسجيل الدخول والموافقة على صلاحيات الحساب",
        "Account login and consent required"
      ]
    },
    {
      "id": "openai-docs",
      "title": [
        "OpenAI Docs",
        "OpenAI Docs"
      ],
      "desc": [
        "ارجع لتوثيق OpenAI أثناء تطوير تطبيقات الذكاء الاصطناعي",
        "Look up developer documentation while implementing AI applications"
      ],
      "category": "documentation",
      "code": "DOC",
      "color": "#a7b9ff",
      "provider": "OpenAI",
      "transport": "http",
      "url": "https://developers.openai.com/mcp",
      "docs": "https://developers.openai.com/learn/docs-mcp",
      "note": [
        "استخدمه للتحقق من التوثيق بدل تخمين أسماء الواجهات والإعدادات",
        "Check documented APIs and configuration rather than guessing"
      ],
      "auth": [
        "راجع صفحة التثبيت الرسمية لمتطلبات العميل",
        "See the official instructions for client requirements"
      ]
    },
    {
      "id": "context7",
      "title": [
        "Context7",
        "Context7"
      ],
      "desc": [
        "جيب توثيق المكتبات قبل كتابة الكود أو تحديثه",
        "Retrieve library documentation before implementing or updating code"
      ],
      "category": "documentation",
      "code": "DOC",
      "color": "#8ccaf1",
      "provider": "Upstash",
      "transport": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@upstash/context7-mcp"
      ],
      "docs": "https://learn.chatgpt.com/docs/extend/mcp",
      "note": [
        "راجع الحزمة الرسمية وإصدارها قبل تثبيت أي خادم محلي",
        "Review the package and pin a trusted version before regular use"
      ],
      "auth": [
        "راجع متطلبات الخدمة والحساب في توثيقها",
        "Check the service documentation for account requirements"
      ]
    }
  ]
};
