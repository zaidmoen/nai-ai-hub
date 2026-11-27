/* NAI originals and source-linked third-party catalog. */
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
      "example": "Redesign the dashboard without changing its existing API or business logic.",
      "provider": "NAI",
      "use": [
        "تصميم واجهات مرتبطة بهدف المشروع بدل القوالب المكررة",
        "Redesign the dashboard without changing its existing API or business logic."
      ]
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
      "example": "Add a scroll-driven product hero with reduced-motion support.",
      "provider": "NAI",
      "use": [
        "حركات سينمائية خفيفة بتخدم المحتوى",
        "Add a scroll-driven product hero with reduced-motion support."
      ]
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
      "example": "Design a REST endpoint for customer churn predictions with a validated schema.",
      "provider": "NAI",
      "use": [
        "تنظيم الخدمات والـ API حسب احتياج المشروع",
        "Design a REST endpoint for customer churn predictions with a validated schema."
      ]
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
      "example": "Build a reproducible classification pipeline with stratified splitting and cross-validation.",
      "provider": "NAI",
      "use": [
        "تدريب وتقييم النماذج بدون تسريب بيانات",
        "Build a reproducible classification pipeline with stratified splitting and cross-validation."
      ]
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
      "example": "Review a pull request for broken validation and API compatibility.",
      "provider": "NAI",
      "use": [
        "مراجعة التعديلات واكتشاف المشاكل قبل الدمج",
        "Review a pull request for broken validation and API compatibility."
      ]
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
      "example": "Diagnose a failing API request using the error log and relevant backend code.",
      "provider": "NAI",
      "use": [
        "تتبع المشكلة بدل تجربة حلول عشوائية",
        "Diagnose a failing API request using the error log and relevant backend code."
      ]
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
      "example": "Prepare a staging deployment plan for an existing web application.",
      "provider": "NAI",
      "use": [
        "تجهيز النشر مع خطة رجوع",
        "Prepare a staging deployment plan for an existing web application."
      ]
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
      "example": "Compare supplied papers and prepare an evidence table for a literature review.",
      "provider": "NAI",
      "use": [
        "تنظيم المصادر ومراجعة الأدلة",
        "Compare supplied papers and prepare an evidence table for a literature review."
      ]
    },
    {
      "id": "anthropic-frontend",
      "title": [
        "Frontend Design",
        "Frontend Design"
      ],
      "provider": "Anthropic",
      "category": "frontend",
      "code": "UI",
      "color": "#bda6ff",
      "desc": [
        "تصميم واجهات لها شخصية بصرية واضحة",
        "Distinct visual direction and thoughtful frontend implementation"
      ],
      "external": true,
      "docs": "https://github.com/anthropics/skills",
      "source": "anthropics/skills",
      "slug": "frontend-design",
      "featured": false,
      "use": [
        "تصميم واجهات لها شخصية بصرية واضحة",
        "Distinct visual direction and thoughtful frontend implementation"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "impeccable",
      "title": [
        "Impeccable",
        "Impeccable"
      ],
      "provider": "Paul Bakaus",
      "category": "frontend",
      "code": "UI",
      "color": "#bda6ff",
      "desc": [
        "مراجعة التصميم وتحسين التفاصيل وتجنب الواجهات المكررة",
        "Design critique and refinement for interfaces"
      ],
      "external": true,
      "docs": "https://github.com/pbakaus/impeccable",
      "source": "pbakaus/impeccable",
      "slug": "impeccable",
      "featured": true,
      "use": [
        "مراجعة التصميم وتحسين التفاصيل وتجنب الواجهات المكررة",
        "Design critique and refinement for interfaces"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "ui-ux-pro-max",
      "title": [
        "UI/UX Pro Max",
        "UI/UX Pro Max"
      ],
      "provider": "NextLevelBuilder",
      "category": "frontend",
      "code": "UX",
      "color": "#bda6ff",
      "desc": [
        "اختيار أنظمة تصميم وألوان وأنماط حسب المنتج",
        "Design-system guidance and stack-specific UI patterns"
      ],
      "external": true,
      "docs": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
      "source": "nextlevelbuilder/ui-ux-pro-max-skill",
      "slug": "",
      "featured": true,
      "use": [
        "اختيار أنظمة تصميم وألوان وأنماط حسب المنتج",
        "Design-system guidance and stack-specific UI patterns"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "taste",
      "title": [
        "Taste Skill",
        "Taste Skill"
      ],
      "provider": "Leonxlnx",
      "category": "frontend",
      "code": "ART",
      "color": "#bda6ff",
      "desc": [
        "توجيه بصري لتصميم مواقع بعيدة عن الشكل التقليدي",
        "Art direction and frontend quality checks"
      ],
      "external": true,
      "docs": "https://github.com/Leonxlnx/taste-skill",
      "source": "Leonxlnx/taste-skill",
      "slug": "design-taste-frontend",
      "featured": true,
      "use": [
        "توجيه بصري لتصميم مواقع بعيدة عن الشكل التقليدي",
        "Art direction and frontend quality checks"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "vercel-react",
      "title": [
        "React Best Practices",
        "React Best Practices"
      ],
      "provider": "Vercel",
      "category": "frontend",
      "code": "REACT",
      "color": "#bda6ff",
      "desc": [
        "ممارسات أداء React وNext.js",
        "React and Next.js performance guidance"
      ],
      "external": true,
      "docs": "https://github.com/vercel-labs/agent-skills",
      "source": "vercel-labs/agent-skills",
      "slug": "vercel-react-best-practices",
      "featured": false,
      "use": [
        "ممارسات أداء React وNext.js",
        "React and Next.js performance guidance"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "vercel-web",
      "title": [
        "Web Design Guidelines",
        "Web Design Guidelines"
      ],
      "provider": "Vercel",
      "category": "frontend",
      "code": "UX",
      "color": "#bda6ff",
      "desc": [
        "مراجعة سهولة الاستخدام والوصول في الويب",
        "Audit web interfaces for usability and accessibility"
      ],
      "external": true,
      "docs": "https://github.com/vercel-labs/agent-skills",
      "source": "vercel-labs/agent-skills",
      "slug": "web-design-guidelines",
      "featured": true,
      "use": [
        "مراجعة سهولة الاستخدام والوصول في الويب",
        "Audit web interfaces for usability and accessibility"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "emil",
      "title": [
        "Emil Design Engineering",
        "Emil Design Engineering"
      ],
      "provider": "Emil Kowalski",
      "category": "frontend",
      "code": "FX",
      "color": "#bda6ff",
      "desc": [
        "حركة الواجهات وتفاصيل التفاعل وتوقيت الأنيميشن",
        "Motion and interaction craft for designers and engineers"
      ],
      "external": true,
      "docs": "https://github.com/emilkowalski/skills",
      "source": "emilkowalski/skills",
      "slug": "",
      "featured": true,
      "use": [
        "حركة الواجهات وتفاصيل التفاعل وتوقيت الأنيميشن",
        "Motion and interaction craft for designers and engineers"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "superpowers",
      "title": [
        "Superpowers",
        "Superpowers"
      ],
      "provider": "Jesse Vincent",
      "category": "quality",
      "code": "DEV",
      "color": "#e8c5a4",
      "desc": [
        "مجموعة مهارات للتخطيط والتنفيذ والفحص وتشخيص الأخطاء",
        "Development workflow collection including debugging and TDD"
      ],
      "external": true,
      "docs": "https://github.com/obra/superpowers",
      "source": "obra/superpowers",
      "slug": "",
      "featured": true,
      "use": [
        "مجموعة مهارات للتخطيط والتنفيذ والفحص وتشخيص الأخطاء",
        "Development workflow collection including debugging and TDD"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "anthropic-test",
      "title": [
        "Webapp Testing",
        "Webapp Testing"
      ],
      "provider": "Anthropic",
      "category": "quality",
      "code": "QA",
      "color": "#e8c5a4",
      "desc": [
        "اختبار التطبيقات والتفاعل معها عبر المتصفح",
        "Browser-based web application testing guidance"
      ],
      "external": true,
      "docs": "https://github.com/anthropics/skills",
      "source": "anthropics/skills",
      "slug": "webapp-testing",
      "featured": false,
      "use": [
        "اختبار التطبيقات والتفاعل معها عبر المتصفح",
        "Browser-based web application testing guidance"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "anthropic-skill-creator",
      "title": [
        "Skill Creator",
        "Skill Creator"
      ],
      "provider": "Anthropic",
      "category": "quality",
      "code": "SKILL",
      "color": "#e8c5a4",
      "desc": [
        "كتابة وتطوير مهارات خاصة بالمشروع",
        "Create and refine reusable agent skills"
      ],
      "external": true,
      "docs": "https://github.com/anthropics/skills",
      "source": "anthropics/skills",
      "slug": "skill-creator",
      "featured": false,
      "use": [
        "كتابة وتطوير مهارات خاصة بالمشروع",
        "Create and refine reusable agent skills"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "openai-catalog",
      "title": [
        "OpenAI Skills Catalog",
        "OpenAI Skills Catalog"
      ],
      "provider": "OpenAI",
      "category": "quality",
      "code": "CLI",
      "color": "#e8c5a4",
      "desc": [
        "مكتبة مهارات Codex الرسمية",
        "Official Codex skills collection"
      ],
      "external": true,
      "docs": "https://github.com/openai/skills",
      "source": "openai/skills",
      "slug": "",
      "featured": false,
      "use": [
        "مكتبة مهارات Codex الرسمية",
        "Official Codex skills collection"
      ],
      "checked": "2026-11-27"
    },
    {
      "id": "taste-classic",
      "title": [
        "High-End Visual Design",
        "High-End Visual Design"
      ],
      "provider": "Leonxlnx",
      "category": "frontend",
      "code": "ART",
      "color": "#bda6ff",
      "desc": [
        "مهارة تصميم بصري للمواقع من مجموعة Taste الكلاسيكية",
        "Visual design guidance from the classic Taste collection"
      ],
      "external": true,
      "docs": "https://github.com/Leonxlnx/taste-skill-classics",
      "source": "Leonxlnx/taste-skill-classics",
      "slug": "high-end-visual-design",
      "featured": false,
      "use": [
        "مهارة تصميم بصري للمواقع من مجموعة Taste الكلاسيكية",
        "Visual design guidance from the classic Taste collection"
      ],
      "checked": "2026-11-27"
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
      ],
      "use": [
        "راجع PR بدون تعديل الملفات",
        "Review a pull request without changing files"
      ],
      "checked": "2026-11-27",
      "featured": true
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
      ],
      "use": [
        "اختبر تسجيل الدخول على بيئة تجريبية",
        "Exercise login on a test environment"
      ],
      "checked": "2026-11-27",
      "featured": true
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
      ],
      "use": [
        "راجع الجداول والعلاقات بدون كتابة بيانات",
        "Inspect schemas and relationships read-only"
      ],
      "checked": "2026-11-27",
      "featured": false
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
      ],
      "use": [
        "راجع سبب فشل عملية نشر",
        "Investigate a failed deployment"
      ],
      "checked": "2026-11-27",
      "featured": false
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
      ],
      "use": [
        "تحقق من طريقة استخدام API في مشروعك",
        "Verify an API integration against the docs"
      ],
      "checked": "2026-11-27",
      "featured": false
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
      "docs": "https://github.com/upstash/context7",
      "note": [
        "راجع الحزمة الرسمية وإصدارها قبل تثبيت أي خادم محلي",
        "Review the package and pin a trusted version before regular use"
      ],
      "auth": [
        "راجع متطلبات الخدمة والحساب في توثيقها",
        "Check the service documentation for account requirements"
      ],
      "use": [
        "راجع توثيق إصدار المكتبة المستخدم",
        "Look up docs for the installed library version"
      ],
      "checked": "2026-11-27",
      "featured": true
    },
    {
      "id": "figma",
      "title": [
        "Figma",
        "Figma"
      ],
      "desc": [
        "اقرأ تفاصيل التصميم وحولها لكود متناسق",
        "Read design context and implement matching interfaces"
      ],
      "provider": "Figma",
      "category": "design",
      "code": "FG",
      "color": "#d5a9f4",
      "transport": "http",
      "url": "https://mcp.figma.com/mcp",
      "docs": "https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/",
      "note": [
        "راجع صلاحيات الملف قبل القراءة أو الكتابة",
        "Review file access before reading or writing designs"
      ],
      "auth": [
        "سجل الدخول وراجع الصلاحيات المطلوبة",
        "Sign in and review requested permissions"
      ],
      "checked": "2026-11-27",
      "featured": true,
      "use": [
        "حول تصميم موجود لكومبوننت متجاوب",
        "Implement a responsive component from a design"
      ]
    },
    {
      "id": "linear",
      "title": [
        "Linear",
        "Linear"
      ],
      "desc": [
        "راجع مهام المشروع وحالة الفريق",
        "Access project issues and planning context"
      ],
      "provider": "Linear",
      "category": "project",
      "code": "PM",
      "color": "#a7b9ff",
      "transport": "http",
      "url": "https://mcp.linear.app/mcp",
      "docs": "https://linear.app/docs/mcp",
      "note": [
        "انتبه لصلاحيات إنشاء وتعديل المهام",
        "Review permissions before creating or editing issues"
      ],
      "auth": [
        "سجل الدخول وراجع الصلاحيات المطلوبة",
        "Sign in and review requested permissions"
      ],
      "checked": "2026-11-27",
      "featured": false,
      "use": [
        "لخص المهام المفتوحة بدون تعديلها",
        "Summarize open issues without editing them"
      ]
    },
    {
      "id": "chrome-devtools",
      "title": [
        "Chrome DevTools",
        "Chrome DevTools"
      ],
      "desc": [
        "افحص أخطاء المتصفح والشبكة والأداء",
        "Inspect browser errors, network activity and performance"
      ],
      "provider": "Google",
      "category": "development",
      "code": "WEB",
      "color": "#9de1d2",
      "transport": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ],
      "docs": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "note": [
        "استخدم متصفح اختبار ولا تربطه بجلسة شخصية حساسة",
        "Use an isolated test browser rather than a sensitive personal session"
      ],
      "auth": [
        "يحتاج Node.js وبيئة متصفح مدعومة",
        "Requires Node.js and a supported browser environment"
      ],
      "checked": "2026-11-27",
      "featured": true,
      "use": [
        "حدد مصدر أخطاء الواجهة والطلبات",
        "Diagnose frontend and network errors"
      ]
    }
  ]
};
