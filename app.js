'use strict';
// Catalog: name, category, official link, Arabic description, English description, Arabic use case, English use case, color.
const raw=[
['ChatGPT','assist','https://chatgpt.com/','مساعد عام للشرح والكتابة وتحليل الأفكار وحل المشكلات.','General assistant for explanations, writing and problem-solving.','اشرح مفهومًا صعبًا بأمثلة وأسئلة تدريبية.','Explain a difficult concept with examples and practice questions.','#16816c'],
['Claude','assist','https://claude.ai/','مساعد للكتابة والتحليل وفهم النصوص الطويلة والبرمجة.','Assistant for writing, analysis, long documents and coding.','راجع مسودة تقرير واطلب نقدًا مفصلًا.','Review a report draft and request detailed feedback.','#b9664e'],
['Gemini','assist','https://gemini.google.com/','مساعد متعدد الوسائط للأسئلة والتلخيص والأفكار.','Multimodal assistant for questions, summaries and ideas.','حوّل ملاحظات المحاضرة إلى خطة مراجعة.','Turn lecture notes into a revision plan.','#526ac9'],
['Microsoft Copilot','assist','https://copilot.microsoft.com/','مساعد للبحث والكتابة وتنظيم الأفكار.','Assistant for search, writing and organizing ideas.','أنشئ مخططًا أوليًا لمشروع جماعي.','Draft an outline for a team project.','#4664bd'],
['DeepSeek','assist','https://www.deepseek.com/','مساعد للنصوص والبرمجة والاستدلال.','Assistant for text, coding and reasoning.','حلّل خطوات مسألة منطقية ثم تحقق منها بنفسك.','Analyze a logic problem and verify the steps yourself.','#4b62b8'],
['NotebookLM','research','https://notebooklm.google/','مساحة بحث ودراسة ترتكز على المصادر التي تضيفها.','Study and research workspace grounded in sources you add.','استخرج أسئلة مراجعة من ملفات المساق المسموح برفعها.','Generate revision questions from permitted course materials.','#5553b0'],
['Perplexity','research','https://www.perplexity.ai/','محرك إجابات يساعد في البحث مع روابط للمصادر.','Answer engine for research with source links.','ابحث عن مدخل لموضوع بحث وتحقق من المصادر الأصلية.','Explore a research topic and verify original sources.','#247f87'],
['Elicit','research','https://elicit.com/','يساعد في العثور على الدراسات وتنظيم نتائجها.','Find research papers and organize their findings.','كوّن جدولًا أوليًا لمراجعة الأدبيات.','Build an initial literature review table.','#7451b3'],
['Consensus','research','https://consensus.app/','محرك بحث للأسئلة التي يمكن استقصاؤها عبر الأدبيات العلمية.','Search research literature for evidence-based questions.','قارن نتائج الأبحاث حول سؤال علمي محدد.','Compare research findings on a scientific question.','#335a9f'],
['Scite','research','https://scite.ai/','أداة لاستكشاف سياق الاستشهادات بالأبحاث العلمية.','Explore the citation context of academic papers.','تحقق من كيفية استشهاد الأبحاث بدراسة معينة.','Examine how papers cite a particular study.','#4f7a74'],
['Connected Papers','research','https://www.connectedpapers.com/','يعرض العلاقات بين الأوراق العلمية في مخطط بصري.','Visualize relationships between academic papers.','اكتشف أوراقًا مرتبطة ببحث أساسي.','Discover papers related to a seed paper.','#6b5fa7'],
['GitHub Copilot','code','https://github.com/features/copilot','مساعد برمجي لاقتراح الكود وشرحه داخل بيئة التطوير.','Coding assistant for suggestions and explanations in your IDE.','اطلب تفسير دالة وكتابة حالات اختبار لها.','Ask for a function explanation and test cases.','#373641'],
['Cursor','code','https://cursor.com/','محرر برمجي مدعوم بالذكاء الاصطناعي لفهم المشاريع وتعديلها.','AI-powered code editor for understanding and editing projects.','افهم بنية مشروع برمجي قبل إجراء التعديلات.','Understand a codebase before making edits.','#3e3c57'],
['Replit','code','https://replit.com/','بيئة برمجة عبر المتصفح مع أدوات مساعدة ذكية.','Browser-based coding environment with AI assistance.','ابنِ نموذجًا أوليًا لتطبيق صغير.','Prototype a small application.','#bc632d'],
['Google AI Studio','code','https://aistudio.google.com/','بيئة لتجربة نماذج Gemini وتصميم تطبيقات تعتمد عليها.','Experiment with Gemini models and prototype AI applications.','جرّب تعليمات لنموذج قبل دمجه في مشروع.','Experiment with prompts before integrating a model.','#3f71c4'],
['Hugging Face','code','https://huggingface.co/','منصة للنماذج ومجموعات البيانات والتطبيقات التجريبية.','Hub for models, datasets and interactive demos.','استكشف نموذج تصنيف نصوص مناسب لمشروعك.','Explore a text classification model for your project.','#9a6d1e'],
['Canva','design','https://www.canva.com/','منصة تصميم تتضمن أدوات ذكية للصور والعروض والمحتوى.','Design platform with AI tools for visuals and presentations.','صمّم بوستر فعالية طلابية.','Design a student event poster.','#6472bd'],
['Adobe Firefly','design','https://firefly.adobe.com/','أدوات توليد الصور وتعديل المحتوى البصري.','Tools for generating and editing visual content.','أنشئ مفهومًا بصريًا أوليًا لحملة.','Create an initial visual concept for a campaign.','#b74771'],
['Gamma','design','https://gamma.app/','إنشاء مسودات عروض ومستندات من فكرة أو مخطط.','Generate draft presentations and documents from an outline.','حوّل خطة مشروع إلى مسودة عرض.','Turn a project outline into a presentation draft.','#7455b9'],
['Ideogram','design','https://ideogram.ai/','توليد الصور والتصاميم التي تتضمن نصوصًا.','Generate images and designs featuring text.','جرّب أفكارًا لملصق بعنوان واضح.','Explore poster ideas with a clear title.','#4d4969'],
['Midjourney','design','https://www.midjourney.com/','توليد صور إبداعية انطلاقًا من وصف نصي.','Generate creative visuals from text prompts.','استكشف اتجاهات بصرية لهوية مشروع.','Explore visual directions for a project identity.','#77619d'],
['Grammarly','writing','https://www.grammarly.com/','مساعدة في تحرير النصوص الإنجليزية وتحسين الوضوح.','Improve clarity and edit English writing.','راجع لغة رسالة رسمية أو تقرير.','Review the language of a formal email or report.','#258568'],
['DeepL','writing','https://www.deepl.com/','أداة ترجمة ومساعدة لغوية.','Translation and language assistance.','ترجم فقرة ثم راجع المصطلحات المتخصصة.','Translate a paragraph and check technical terminology.','#24456a'],
['QuillBot','writing','https://quillbot.com/','أدوات للتلخيص وإعادة الصياغة والمراجعة اللغوية.','Tools for summarizing, paraphrasing and language review.','حسّن صياغة نص كتبته بنفسك مع توثيق المصادر.','Refine your own writing while citing sources.','#387d58'],
['Runway','media','https://runwayml.com/','أدوات ذكاء اصطناعي لتوليد الفيديو وتحريره.','AI tools for video generation and editing.','جرّب مشهدًا بصريًا قصيرًا لمشروع إعلامي.','Prototype a short visual scene for a media project.','#42425a'],
['ElevenLabs','media','https://elevenlabs.io/','توليد الكلام وأدوات صوتية متعددة.','Speech generation and audio tools.','أنشئ تعليقًا صوتيًا تجريبيًا دون تقليد أشخاص بلا إذن.','Create a sample narration without impersonating anyone.','#4a5062'],
['Descript','media','https://www.descript.com/','تحرير الصوت والفيديو عبر النص وأدوات ذكية.','Text-based audio and video editing with AI features.','حرّر تسجيلًا لمقابلة بموافقة المشاركين.','Edit an interview recording with participant consent.','#5862b4'],
['Wolfram Alpha','data','https://www.wolframalpha.com/','محرك معرفة حسابية للمسائل الرياضية والعلمية.','Computational knowledge engine for math and science.','تحقق من ناتج مسألة رياضية.','Check the result of a mathematical problem.','#b75740'],
['Google Colab','data','https://colab.research.google.com/','دفاتر Python سحابية لتعلّم وتحليل البيانات وتجارب الذكاء الاصطناعي.','Cloud Python notebooks for learning, analysis and AI experiments.','جرّب تحليل مجموعة بيانات وتصور النتائج.','Analyze a dataset and visualize results.','#b57832'],
['DataRobot','data','https://www.datarobot.com/','منصة لبناء نماذج تعلم آلي وإدارة تطبيقات الذكاء الاصطناعي.','Platform for machine learning models and AI applications.','استكشف سير عمل بناء نموذج تنبؤي.','Explore a predictive modeling workflow.','#575ca0']
];
const tools=raw.map((r,id)=>({id,name:r[0],cat:r[1],url:r[2],ar:r[3],en:r[4],useAr:r[5],useEn:r[6],color:r[7]}));
const cats={all:['الكل','All'],assist:['المساعدات الذكية','AI Assistants'],research:['البحث والدراسة','Research & Study'],code:['البرمجة','Development'],design:['التصميم والعروض','Design & Slides'],writing:['الكتابة والترجمة','Writing & Translation'],media:['الصوت والفيديو','Audio & Video'],data:['البيانات والرياضيات','Data & Math']};
const tasks=[['','اختر مهمة...','Choose a task...'],['research','البحث العلمي أو الدراسة','Research or study'],['code','كتابة كود أو بناء تطبيق','Code or build an app'],['design','تصميم بوستر أو عرض','Design a poster or slides'],['writing','كتابة تقرير أو ترجمة','Write or translate'],['media','إنتاج فيديو أو صوت','Produce audio or video'],['data','تحليل البيانات أو الرياضيات','Analyze data or solve math'],['assist','شرح مفهوم أو عصف ذهني','Explain a concept or brainstorm']];
const dict={cinemaKicker:["دليل الذكاء الاصطناعي للطلاب","THE STUDENT AI INDEX"],cinemaExplore:["استكشف الأدوات","Explore tools"],cinemaFields:["اختر مجالك","Choose your field"],fieldsTitle:["لكل فكرة، أداة.","Every idea needs a tool."],fieldsDesc:["ابدأ بالمجال الذي يناسب هدفك، واكتشف الأدوات المختارة له.","Start with what you want to achieve. Discover tools curated for your field."],fieldsLabel:["مجالات","FIELDS"],field_assist:["المساعدات الذكية","AI assistants"],fieldTag_assist:["افهم بعمق","Think clearly"],field_research:["البحث والدراسة","Research & study"],fieldTag_research:["ابحث عن المصادر","Find the evidence"],field_code:["البرمجة","Development"],fieldTag_code:["طوّر فكرتك","Build something"],field_design:["التصميم والعروض","Design & slides"],fieldTag_design:["حوّل أفكارك لتصاميم","Make ideas visible"],field_writing:["الكتابة والترجمة","Writing & translation"],fieldTag_writing:["عبّر عن أفكارك","Find your words"],field_media:["الصوت والفيديو","Audio & video"],fieldTag_media:["اصنع محتوى","Tell a story"],field_data:["البيانات والرياضيات","Data & math"],fieldTag_data:["اكتشف الأنماط","See the patterns"],favorites:['المفضلة','Favorites'],hero:['فضول بلا حدود.\nوإمكانات أكبر.','Curiosity without limits.\nIntelligence within reach.'],intro:['اكتشف الأدوات التي تساعدك على التعلّم والبحث والبرمجة والإبداع. دليلك من جمعية ناي للذكاء الاصطناعي.','Discover tools to learn, research, code and create. Curated by Najah AI Society.'],searchLabel:['ابحث عن أداة','Search tools'],tools:['أداة مختارة','Curated tools'],categories:['مجالات استخدام','Categories'],hub:['منصة واحدة','Student hub'],finder:['مش عارف من وين تبدأ؟','Not sure where to start?'],finderDesc:['اختار المهمة اللي بدك تنجزها، ومنرشّحلك أدوات مناسبة.','Choose what you want to do and explore relevant tools.'],taskLabel:['اختر المهمة','Choose a task'],directory:['استكشف الأدوات','Explore tools'],directoryDesc:['اختيارات عملية لمختلف التخصصات والاهتمامات.','Practical picks for different disciplines and interests.'],disclaimer:['الدليل مستقل ولا يتبع لمزوّدي الأدوات.','Independent directory; not affiliated with tool providers.'],responsible:['استخدم الذكاء الاصطناعي بمسؤولية','Use AI responsibly'],responsibleDesc:['راجع المعلومات والمصادر، لا ترفع بيانات شخصية أو سرية، والتزم بتعليمات مدرس المساق. استخدم الأدوات لتفهم وتتعلم، مش لتسلّم شغل ما بتقدر تشرحه.','Verify information and sources, avoid uploading personal or confidential data, and follow course policies. Use AI to learn, not to submit work you cannot explain.'],plans:['قد تتغير الخطط والأسعار والتوفر الجغرافي. راجع الموقع الرسمي لكل أداة.','Plans, prices and regional availability may change. Check each official website.'],footer:['مبادرة طلابية معرفية · نسخة أولية','Student knowledge initiative · Prototype'],clear:['مسح','Clear'],compare:['مقارنة','Compare']};
Object.assign(dict,{edition:['دليل ناي للذكاء الاصطناعي','THE NAI AI INDEX'],exploreNav:['استكشف','Explore'],finderNav:['دليل الاختيار','Tool finder'],guideNav:['الاستخدام المسؤول','Responsible AI'],browse:['تصفح المكتبة','Browse the directory'],metric1:['مكتبة منتقاة بعناية','Carefully curated'],metric2:['من الدراسة إلى الإبداع','From study to creation'],metric3:['من الطلاب وإليهم','Built for students'],metric4:['مبادرة معرفية طلابية','Student-led initiative']});
const categoryPaths={all:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',assist:'<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>',research:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"/>',design:'<path d="m12 3 9 9-9 9-9-9zM12 3v18M3 12h18"/>',writing:'<path d="M4 5h16M12 5v15M8 20h8"/>',media:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4z"/>',data:'<path d="M4 20V4M4 20h17M9 16v-5m5 5V7m5 9V3"/>'};


// Interaction labels are localized alongside the original catalog copy.
Object.assign(dict, {
  ashenOpen: ['استكشف معرض 3D', 'Explore the 3D shelf'],
  libraryTitle: ['مكتبة الذكاء التفاعلية', 'The Intelligence Library'],
  libraryDesc: ['سبعة مجلدات معرفية تفتح لك عالم أدوات الذكاء الاصطناعي.', 'Seven interactive volumes for exploring AI, one collection at a time.'],
  libraryOpen: ['افتح المكتبة', 'Enter the library'],
  skip: ['انتقل إلى الأدوات', 'Skip to tools'],
  sortLabel: ['ترتيب الأدوات', 'Sort tools'],
  reset: ['مسح الفلاتر', 'Clear filters'],
  allTools: ['كل الأدوات', 'All tools'],
  noResults: ['ما لقينا أدوات مطابقة', 'No matching tools'],
  noResultsDesc: ['جرّب كلمات أقل أو امسح الفلاتر لاستكشاف كل الأدوات.', 'Try fewer keywords or clear your filters to explore all tools.'],
  noFavorites: ['أدواتك المفضلة تبدأ من هنا', 'Your favorites start here'],
  noFavoritesDesc: ['اضغط على القلب بجانب أي أداة لحفظها والرجوع إلها لاحقًا.', 'Use the heart on any tool to save it here for later.'],
  exploreAll: ['استكشف كل الأدوات', 'Explore all tools']
});

const $ = id => document.getElementById(id);
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#icon-${name}"/></svg>`;
const escapeHtml = text => String(text).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
const normalize = text => String(text).normalize('NFKD')
  .replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, '')
  .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').toLowerCase().trim();

function get(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { /* Browsing and in-session settings still work without storage. */ }
}

let lang = get('nai-lang', 'ar') === 'en' ? 'en' : 'ar';
let theme = get('nai-theme', 'dark') === 'light' ? 'light' : 'dark';
const storedFavorites = get('nai-favs', []);
const fav = new Set(Array.isArray(storedFavorites)
  ? storedFavorites.filter(id => Number.isInteger(id) && tools[id]) : []);
const selection = new Set();
const requestedCategory = new URLSearchParams(location.search).get('category');
let cat = requestedCategory && Object.prototype.hasOwnProperty.call(cats, requestedCategory) ? requestedCategory : 'all';
let onlyFav = false;
let query = '';
let renderFrame = 0;
let lastRowsKey = null;
let lastComparisonKey = null;
let toastTimer = 0;
const cards = new Map();
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const motion = window.naiMotion || {
  layout: (container, mutate) => mutate(),
  setVisible: (element, visible, options = {}) => { element.hidden = !visible; if (!visible) options.onHidden?.(); },
  bindDialog: () => {}, openDialog: dialog => dialog.showModal(), closeDialog: dialog => dialog.close(),
  bindDisclosure: () => {}, setDisclosureOpen: (details, open) => { details.open = open; }, reject: () => {}
};
const tr = (ar, en) => lang === 'ar' ? ar : en;
const text = key => dict[key][lang === 'ar' ? 0 : 1];
const cName = key => cats[key][lang === 'ar' ? 0 : 1];
const categoryCounts = Object.fromEntries(Object.keys(cats).map(key => [
  key, key === 'all' ? tools.length : tools.filter(tool => tool.cat === key).length
]));
// Build once: typing only checks cached bilingual text, including Arabic diacritics.
const searchIndex = new Map(tools.map(tool => [tool.id, normalize([
  tool.name, tool.ar, tool.en, tool.useAr, tool.useEn, ...cats[tool.cat]
].join(' '))]));

function setText(element, value) {
  if (element.textContent !== value) element.textContent = value;
}
function label(id, value) {
  $(id).setAttribute('aria-label', value);
}
function notify(message) {
  clearTimeout(toastTimer);
  $('toast').textContent = message;
  motion.setVisible($('toast'), true);
  setText($('feedbackStatus'), message);
  toastTimer = setTimeout(() => {
    motion.setVisible($('toast'), false, { onHidden: () => { $('toast').textContent = ''; } });
  }, 4000);
}
function syncSearchInputs() {
  for (const id of ['search', 'directorySearch']) {
    if ($(id).value !== query) $(id).value = query;
  }
}
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#090e22' : '#f4f5fc';
  const title = theme === 'dark'
    ? tr('تفعيل المظهر الفاتح', 'Switch to light theme')
    : tr('تفعيل المظهر الداكن', 'Switch to dark theme');
  label('theme', title);
  $('theme').title = title;
}
function applyLanguage() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i]').forEach(element => {
    if (element.id === 'heroTitle') {
      const [first, second] = text('hero').split('\n');
      const accent = document.createElement('span');
      accent.textContent = second;
      element.replaceChildren(first + '\n', accent);
    } else {
      setText(element, text(element.dataset.i));
    }
  });
  setText($('lang'), tr('EN', 'عربي'));
  label('lang', tr('Switch to English', 'التبديل إلى العربية'));
  label('mainNav', tr('التنقل الرئيسي', 'Main navigation'));
  label('metrics', tr('نظرة على الدليل', 'Directory overview'));
  label('filters', tr('تصفية الأدوات', 'Filter tools'));
  label('chips', tr('التصنيفات', 'Categories'));
  label('heroSearchForm', tr('البحث في الأدوات', 'Search AI tools'));
  label('directorySearchForm', tr('البحث في الدليل', 'Search the directory'));
  label('heroSearch', tr('عرض نتائج البحث', 'Show search results'));
  label('comparebar', tr('الأدوات المحددة للمقارنة', 'Selected tools for comparison'));
  label('backtop', tr('العودة للأعلى', 'Back to top'));
  label('close', tr('إغلاق', 'Close dialog'));
  for (const id of ['search', 'directorySearch']) {
    $(id).placeholder = tr('ابحث عن أداة أو مهمة...', 'Search tools or tasks...');
  }
  setText($('total'), String(tools.length));
  setText($('catTotal'), String(Object.keys(cats).length - 1));
  const sortValue = $('sort').value || 'default';
  $('sort').innerHTML = `<option value="default">${tr('الترتيب المختار', 'Curated order')}</option><option value="az">${tr('الاسم A–Z', 'Name A–Z')}</option>`;
  $('sort').value = sortValue;
  const taskValue = $('task').value;
  $('task').innerHTML = tasks.map(task => `<option value="${task[0]}">${task[lang === 'ar' ? 1 : 2]}</option>`).join('');
  $('task').value = taskValue;
  $('chips').innerHTML = Object.keys(cats).map(key => `
    <button class="chip" data-cat="${key}" type="button" aria-pressed="false" aria-controls="grid">
      <span class="cat-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24">${categoryPaths[key]}</svg></span>
      <span>${cName(key)}</span><span class="cat-count">${categoryCounts[key]}</span>
    </button>`).join('');
  cards.clear();
  lastRowsKey = null;
  applyTheme();
  render();
}
function matchingTools() {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const rows = tools.filter(tool =>
    (cat === 'all' || tool.cat === cat) &&
    (!onlyFav || fav.has(tool.id)) &&
    words.every(word => searchIndex.get(tool.id).includes(word))
  );
  if ($('sort').value === 'az') rows.sort((a, b) => a.name.localeCompare(b.name, 'en'));
  return rows;
}

/* Original category artwork: small optical diagrams, not provider logos. */
function cardArt(tool) {
  const drawings = {
    assist: '<ellipse cx="180" cy="48" rx="58" ry="23" transform="rotate(-23 180 48)"/><ellipse cx="180" cy="48" rx="58" ry="23" transform="rotate(23 180 48)"/><ellipse cx="180" cy="48" rx="24" ry="43"/><circle cx="180" cy="48" r="8" fill="currentColor" stroke="none"/><circle cx="230" cy="32" r="3" fill="currentColor"/>',
    research: '<circle cx="184" cy="44" r="34"/><circle cx="184" cy="44" r="23" stroke-dasharray="2 5"/><circle cx="184" cy="44" r="10"/><path d="M208 68l22 19M142 44h84M184 4v80"/><circle cx="184" cy="44" r="3" fill="currentColor"/>',
    code: '<path d="M164 20l-32 27 32 27m36-54 32 27-32 27m-10-60-20 66"/><path d="M114 13h18m96 70h18M111 20v16m138 26v18" opacity=".5"/>',
    design: '<path d="M180 5l46 43-46 43-46-43zM180 21l29 27-29 27-29-27zM134 48h92M180 5v86"/><circle cx="180" cy="48" r="13"/><circle cx="226" cy="48" r="3" fill="currentColor"/>',
    writing: '<path d="M145 17h61l18 18v47h-79zM206 17v18h18M158 39h33m-33 12h51m-51 12h42"/><path d="M132 25v62h70" opacity=".45"/>',
    media: '<rect x="135" y="17" width="90" height="61" rx="8"/><path d="M171 33l26 15-26 15z" fill="currentColor" fill-opacity=".2"/><path d="M126 85h108M126 10h108" stroke-dasharray="4 5"/>',
    data: '<path d="M129 77h105M136 77V18M148 68V50m15 18V37m15 31V54m15 14V27m15 41V42m15 26V15" stroke-width="4"/><path d="M145 37l19-14 15 10 18-17 12 7 16-17" opacity=".55"/>'
  };
  const drawing = drawings[tool.cat] || drawings.assist;
  const n = String(tool.id+1).padStart(2,'0');
  return '<div class="card-art" aria-hidden="true"><span class="card-index">FIELD / '+n+'</span><svg viewBox="0 0 280 96" preserveAspectRatio="xMidYMid meet" fill="none" stroke="currentColor" stroke-width="1.25"><g opacity=".3"><path d="M0 24h280M0 48h280M0 72h280M40 0v96M80 0v96M120 0v96M160 0v96M200 0v96M240 0v96" stroke-dasharray="1 5"/><path d="M8 8h10M8 8v10m264 70h-10m10 0V78"/></g><g class="card-diagram">'+drawing+'</g></svg><span class="card-art-glint"></span></div>';
}

function createCard(tool) {
  const template = document.createElement('template');
  const initials = tool.name.includes(' ')
    ? tool.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()
    : tool.name.slice(0, 2);
  template.innerHTML = `
    <article class="tool" data-tool-id="${tool.id}" aria-labelledby="tool-${tool.id}" style="--tool-color:${tool.color}">
      <div class="card-surface">${cardArt(tool)}
      <div class="cardtop">
        <div class="mark" style="--mark:${tool.color}" aria-hidden="true">${escapeHtml(initials)}</div>
        <div class="toolname"><h3 id="tool-${tool.id}"><bdi>${escapeHtml(tool.name)}</bdi></h3><div class="category">${cName(tool.cat)}</div></div>
        <button class="heart" type="button" data-act="fav" data-id="${tool.id}" aria-pressed="false">${icon('heart')}${icon('heart')}</button>
      </div>
      <p class="desc">${escapeHtml(tr(tool.ar, tool.en))}</p>
      <p class="card-context"><strong>${tr('جرّبها في', 'Try it for')}</strong>${escapeHtml(tr(tool.useAr, tool.useEn))}</p>
      <div class="actions">
        <a class="btn visit-link" href="${tool.url}" target="_blank" rel="noopener noreferrer">${tr('زيارة الموقع', 'Visit site')}${icon('external')}<span class="sr">${tr(' — يفتح في تبويب جديد', ' — opens in a new tab')}</span></a>
        <button class="btn" type="button" data-act="detail" data-id="${tool.id}" aria-label="${escapeHtml(tr(`تفاصيل ${tool.name}`, `Details about ${tool.name}`))}">${tr('التفاصيل', 'Details')}</button>
        <button class="btn compare" type="button" data-act="compare" data-id="${tool.id}" aria-pressed="false"><span class="compare-glyph">${icon('compare')}${icon('check')}</span></button>
      </div>
      </div>
    </article>`;
  const card = template.content.firstElementChild;
  cards.set(tool.id, card);
  updateCardState(tool.id);
  return card;
}
function updateCardState(id) {
  const card = cards.get(id);
  if (!card) return;
  const tool = tools[id];
  const saved = fav.has(id);
  const selected = selection.has(id);
  const heart = card.querySelector('[data-act="fav"]');
  heart.classList.toggle('saved', saved);
  heart.setAttribute('aria-pressed', String(saved));
  const favoriteLabel = saved
    ? tr(`إزالة ${tool.name} من المفضلة`, `Remove ${tool.name} from favorites`)
    : tr(`حفظ ${tool.name} في المفضلة`, `Save ${tool.name} to favorites`);
  heart.setAttribute('aria-label', favoriteLabel);
  heart.title = favoriteLabel;
  const compare = card.querySelector('[data-act="compare"]');
  card.classList.toggle('is-selected', selected);
  compare.setAttribute('aria-pressed', String(selected));
  compare.setAttribute('aria-disabled', String(!selected && selection.size === 3));
  const compareLabel = selected
    ? tr(`إزالة ${tool.name} من المقارنة`, `Remove ${tool.name} from comparison`)
    : tr(`إضافة ${tool.name} للمقارنة`, `Add ${tool.name} to comparison`);
  compare.setAttribute('aria-label', compareLabel);
  compare.title = !selected && selection.size === 3
    ? tr('المقارنة ممتلئة. أزل أداة لإضافة غيرها.', 'Comparison is full. Remove a tool to add another.') : compareLabel;
}
function updateFavoritesUI() {
  $('favToggle').setAttribute('aria-pressed', String(onlyFav));
  label('favToggle', tr(`المفضلة (${fav.size})`, `Favorites (${fav.size})`));
  $('favoriteCount').hidden = !fav.size;
  setText($('favoriteCount'), String(fav.size));
}
function updateComparison() {
  const key = `${lang}:${[...selection].join(',')}`;
  if (key === lastComparisonKey) return;
  lastComparisonKey = key;
  if (!selection.size) {
    motion.setVisible($('comparebar'), false, { onHidden: () => {
      document.body.classList.remove('has-comparison');
      $('selectionList').replaceChildren();
    } });
    return;
  }
  document.body.classList.add('has-comparison');
  setText($('compareCount'), selection.size === 1
    ? tr('أداة واحدة محددة · اختر أداة ثانية للمقارنة', '1 tool selected · Add another to compare')
    : tr(`${selection.size} من 3 أدوات للمقارنة`, `${selection.size} of 3 tools selected`));
  $('showCompare').disabled = selection.size < 2;
  motion.layout($('selectionList'), () => {
    const existing = new Map([...$('selectionList').children].map(chip => [Number(chip.dataset.remove), chip]));
    $('selectionList').replaceChildren(...[...selection].map(id => {
      const chip = existing.get(id);
      const removeLabel = tr(`إزالة ${tools[id].name} من المقارنة`, `Remove ${tools[id].name} from comparison`);
      if (chip) { chip.setAttribute('aria-label', removeLabel); return chip; }
      const template = document.createElement('template');
      template.innerHTML = `
    <button class="selection-chip" type="button" data-remove="${id}" aria-label="${escapeHtml(tr(`إزالة ${tools[id].name} من المقارنة`, `Remove ${tools[id].name} from comparison`))}">
      <bdi>${escapeHtml(tools[id].name)}</bdi>${icon('close')}
    </button>`;
      return template.content.firstElementChild;
    }));
  }, { animate: !$('comparebar').hidden });
  motion.setVisible($('comparebar'), true);
}
function emptyState() {
  const savedEmpty = onlyFav && !fav.size;
  return `<div class="empty">${icon(savedEmpty ? 'heart' : 'search')}
    <h3>${text(savedEmpty ? 'noFavorites' : 'noResults')}</h3>
    <p>${text(savedEmpty ? 'noFavoritesDesc' : 'noResultsDesc')}</p>
    <button class="btn" type="button" data-act="reset">${text(savedEmpty ? 'exploreAll' : 'reset')}</button>
  </div>`;
}
function render() {
  const rows = matchingTools();
  // Reuse nodes across search and sorting; favorite/compare actions patch in place.
  const rowsKey = `${lang}:${rows.map(tool => tool.id).join(',')}:${onlyFav && !fav.size}`;
  const changed = rowsKey !== lastRowsKey;
  const update = () => {
    if (changed) {
      if (rows.length) $('grid').replaceChildren(...rows.map(tool => cards.get(tool.id) || createCard(tool)));
      else $('grid').innerHTML = emptyState();
    }
    document.querySelectorAll('[data-cat]').forEach(chip => {
      const active = chip.dataset.cat === cat;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    const heading = onlyFav && cat === 'all' ? text('favorites') : cat === 'all' ? text('allTools') : cName(cat);
    setText($('resultsHeading'), heading);
    setText($('count'), tr(`${rows.length} من ${tools.length} أداة`, `${rows.length} of ${tools.length} tools`));
    const filters = [cat !== 'all' ? cName(cat) : '', onlyFav ? text('favorites') : '', query.trim() ? `“${query.trim()}”` : ''].filter(Boolean);
    $('activeFilters').hidden = !filters.length;
    setText($('filterSummary'), filters.join(' · '));
    syncSearchInputs();
    updateFavoritesUI();
    updateComparison();
  };
  if (changed) motion.layout($('grid'), update, { animate: lastRowsKey !== null });
  else update();
  lastRowsKey = rowsKey;
}
function scheduleSearch(event) {
  query = event.target.value;
  syncSearchInputs();
  if (event.isComposing) return;
  if (renderFrame) cancelAnimationFrame(renderFrame);
  renderFrame = requestAnimationFrame(() => { renderFrame = 0; render(); });
}
function showResults() {
  if (renderFrame) cancelAnimationFrame(renderFrame);
  renderFrame = 0;
  render();
  $('resultsHeading').focus({ preventScroll: true });
  $('directory').scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
}
function resetFilters() {
  cat = 'all';
  onlyFav = false;
  query = '';
  $('task').value = '';
  render();
  $('directorySearch').focus({ preventScroll: true });
}
function focusTool(id, action = 'compare') {
  const button = cards.get(id)?.querySelector(`[data-act="${action}"]`);
  (button?.isConnected ? button : $('resultsHeading')).focus({ preventScroll: true });
}
function toggleFavorite(id) {
  const saved = !fav.has(id);
  if (saved) fav.add(id); else fav.delete(id);
  save('nai-favs', [...fav]);
  updateFavoritesUI();
  updateCardState(id);
  if (onlyFav) {
    const focused = document.activeElement;
    const visibleIds = [...$('grid').querySelectorAll('.tool')].map(card => Number(card.dataset.toolId));
    const index = visibleIds.indexOf(id);
    render();
    if (!focused.isConnected) {
      const remaining = matchingTools();
      if (remaining.length) focusTool(remaining[Math.min(index, remaining.length - 1)].id, 'fav');
      else $('resultsHeading').focus({ preventScroll: true });
    }
  }
  notify(saved ? tr(`تم حفظ ${tools[id].name} في المفضلة`, `${tools[id].name} saved to favorites`)
    : tr(`تمت إزالة ${tools[id].name} من المفضلة`, `${tools[id].name} removed from favorites`));
}
function toggleComparison(id) {
  if (selection.has(id)) selection.delete(id);
  else if (selection.size < 3) selection.add(id);
  else {
    motion.reject(cards.get(id)?.querySelector('[data-act="compare"]'));
    notify(tr('يمكنك مقارنة 3 أدوات. أزل أداة من شريط المقارنة لإضافة غيرها.', 'Compare up to 3 tools. Remove one from the comparison bar to add another.'));
    return;
  }
  cards.forEach((card, toolId) => updateCardState(toolId));
  updateComparison();
}
function openModal(title, html, origin = null) {
  $('modalTitle').textContent = title;
  $('modalBody').innerHTML = html;
  motion.openDialog($('modal'), origin);
  document.body.classList.add('modal-open');
  $('modal').scrollTop = 0;
}
function officialLink(tool) {
  return `<a class="btn primary" href="${tool.url}" target="_blank" rel="noopener noreferrer">${tr('الموقع الرسمي', 'Official website')}${icon('external')}<span class="sr">${tr(' — يفتح في تبويب جديد', ' — opens in a new tab')}</span></a>`;
}
function showDetails(id, origin = null) {
  const tool = tools[id];
  openModal(tool.name, `<p class="detail-category">${cName(tool.cat)}</p>
    <p>${escapeHtml(tr(tool.ar, tool.en))}</p>
    <h3>${tr('كيف تستخدمها كطالب؟', 'How to use it as a student')}</h3>
    <p>${escapeHtml(tr(tool.useAr, tool.useEn))}</p>
    <p class="notice">${text('plans')}</p>${officialLink(tool)}`, origin);
}
function showComparison() {
  const selected = [...selection].map(id => tools[id]);
  if (selected.length < 2) return;
  const row = (title, value) => `<tr><th scope="row">${title}</th>${selected.map(tool => `<td>${value(tool)}</td>`).join('')}</tr>`;
  openModal(tr('مقارنة الأدوات', 'Compare tools'), `
    <p class="table-hint">${tr('اسحب الجدول أفقيًا لرؤية جميع الأدوات على شاشة صغيرة.', 'On smaller screens, scroll the table horizontally to see every tool.')}</p>
    <div class="tablewrap" role="region" aria-label="${tr('جدول مقارنة الأدوات', 'Tool comparison table')}" tabindex="0">
      <table><caption class="sr">${tr('مقارنة المجالات والوظائف والأمثلة العملية', 'Compare categories, purposes, and student use cases')}</caption>
        <thead><tr><th scope="col">${tr('المعيار', 'Criteria')}</th>${selected.map(tool => `<th scope="col"><bdi>${escapeHtml(tool.name)}</bdi></th>`).join('')}</tr></thead>
        <tbody>${row(tr('المجال', 'Category'), tool => cName(tool.cat))}
          ${row(tr('الوظيفة', 'Purpose'), tool => escapeHtml(tr(tool.ar, tool.en)))}
          ${row(tr('مثال عملي', 'Use case'), tool => escapeHtml(tr(tool.useAr, tool.useEn)))}
          ${row(tr('الرابط', 'Website'), tool => `<a href="${tool.url}" target="_blank" rel="noopener noreferrer">${tr('زيارة', 'Visit')}<span class="sr">${tr(' — يفتح في تبويب جديد', ' — opens in a new tab')}</span></a>`)}
        </tbody></table>
    </div><p class="notice">${text('plans')}</p>`);
}

document.querySelector('.fields-grid').addEventListener('click', event => {
  const field = event.target.closest('[data-field]');
  if (!field || !Object.prototype.hasOwnProperty.call(cats, field.dataset.field)) return;
  cat = field.dataset.field; onlyFav = false; query = ''; $('task').value = '';
  showResults();
});
$('chips').addEventListener('click', event => {
  const chip = event.target.closest('[data-cat]');
  if (!chip) return;
  cat = chip.dataset.cat;
  $('task').value = '';
  render();
  // The clicked button remains mounted and keyboard focus stays put.
});
$('grid').addEventListener('click', event => {
  const button = event.target.closest('[data-act]');
  if (!button) return;
  const id = Number(button.dataset.id);
  if (button.dataset.act === 'reset') resetFilters();
  else if (button.dataset.act === 'fav') toggleFavorite(id);
  else if (button.dataset.act === 'compare') toggleComparison(id);
  else if (button.dataset.act === 'detail') showDetails(id, button.closest('.card-surface')?.getBoundingClientRect());
});
for (const id of ['search', 'directorySearch']) {
  $(id).addEventListener('input', scheduleSearch);
  $(id).addEventListener('compositionend', scheduleSearch);
}
for (const id of ['heroSearchForm', 'directorySearchForm']) {
  $(id).addEventListener('submit', event => { event.preventDefault(); showResults(); });
}
$('sort').addEventListener('change', render);
$('resetFilters').addEventListener('click', resetFilters);
$('task').addEventListener('change', () => {
  cat = $('task').value || 'all';
  onlyFav = false;
  query = '';
  showResults();
});
$('favToggle').addEventListener('click', () => {
  onlyFav = !onlyFav;
  cat = 'all';
  query = '';
  $('task').value = '';
  showResults();
});
$('lang').addEventListener('click', () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  save('nai-lang', lang);
  clearTimeout(toastTimer);
  $('feedbackStatus').textContent = '';
  motion.setVisible($('toast'), false, { onHidden: () => { $('toast').textContent = ''; } });
  applyLanguage();
});
$('theme').addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  save('nai-theme', theme);
  applyTheme();
});
$('selectionList').addEventListener('click', event => {
  const button = event.target.closest('[data-remove]');
  if (!button) return;
  const id = Number(button.dataset.remove);
  const index = [...$('selectionList').children].indexOf(button);
  toggleComparison(id);
  const next = $('selectionList').children[Math.min(index, selection.size - 1)];
  if (next) next.focus(); else focusTool(id);
});
$('clearCompare').addEventListener('click', () => {
  const firstId = [...selection][0];
  selection.clear();
  cards.forEach((card, id) => updateCardState(id));
  updateComparison();
  focusTool(firstId);
});
$('showCompare').addEventListener('click', showComparison);
motion.bindDialog($('modal'));
$('close').addEventListener('click', () => motion.closeDialog($('modal')));
$('modal').addEventListener('close', () => {
  if (!$('modal').open) document.body.classList.remove('modal-open');
});
$('modal').addEventListener('click', event => {
  if (event.target !== $('modal')) return;
  const bounds = $('modal').getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) motion.closeDialog($('modal'));
});
document.addEventListener('keydown', event => {
  const target = document.activeElement;
  if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey || event.isComposing || $('modal').open ||
      target?.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
  event.preventDefault();
  const inDirectory = $('directory').getBoundingClientRect().top < innerHeight * .5;
  $(inDirectory ? 'directorySearch' : 'search').focus();
});
function syncNav() {
  document.querySelectorAll('.navlinks a').forEach(link => {
    const active = link.getAttribute('href') === (location.hash || '#directory');
    link.classList.toggle('nav-active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}
document.querySelector('a[href="#finder"]').addEventListener('click', () => { motion.setDisclosureOpen($('finder'), true); });
window.addEventListener('hashchange', syncNav);
$('finder').open = !matchMedia('(max-width: 760px)').matches || location.hash === '#finder';
motion.bindDisclosure($('finder'), $('grid'));

/* Native search suggestions, using the exact same catalog and normalized query. */
const command = $('heroSuggestions');
const commandInput = $('search');
function hideSuggestions(){command.hidden=true;command.replaceChildren();commandInput.setAttribute('aria-expanded','false');}
function renderSuggestions(){
  const words=normalize(commandInput.value).split(/\s+/).filter(Boolean);
  if(!words.length||!$('heroSearchForm').contains(document.activeElement)){hideSuggestions();return;}
  const matches=tools.filter(tool=>words.every(w=>searchIndex.get(tool.id).includes(w))).sort((a,b)=>Number(normalize(b.name).startsWith(words[0]))-Number(normalize(a.name).startsWith(words[0]))).slice(0,5);
  command.innerHTML='<p class="command-caption">'+escapeHtml(tr('نتائج سريعة','Quick matches'))+'</p>'+ (matches.length?matches.map(tool=>'<button type="button" class="command-option" data-suggest="'+tool.id+'"><span class="command-mark" style="--mark:'+tool.color+'" aria-hidden="true">'+escapeHtml(tool.name.slice(0,2))+'</span><span><bdi>'+escapeHtml(tool.name)+'</bdi><small>'+escapeHtml(cName(tool.cat))+'</small></span>'+icon('arrow')+'</button>').join(''):'<p class="command-empty">'+escapeHtml(tr('لا توجد نتائج مطابقة','No matching tools'))+'</p>');
  command.hidden=false;commandInput.setAttribute('aria-expanded','true');
}
commandInput.setAttribute('aria-controls','grid heroSuggestions');commandInput.setAttribute('aria-expanded','false');
commandInput.addEventListener('input',e=>{if(!e.isComposing)renderSuggestions();});
commandInput.addEventListener('compositionend',renderSuggestions);
commandInput.addEventListener('focus',renderSuggestions);
commandInput.addEventListener('keydown',e=>{if(e.key==='ArrowDown'&&!command.hidden){const first=command.querySelector('button');if(first){e.preventDefault();first.focus();}}else if(e.key==='Escape'&&!command.hidden){e.preventDefault();hideSuggestions();}});
command.addEventListener('keydown',e=>{const buttons=[...command.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);if(e.key==='Escape'){e.preventDefault();commandInput.focus();hideSuggestions();}else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const next=i+(e.key==='ArrowDown'?1:-1);if(next<0)commandInput.focus();else buttons[Math.min(next,buttons.length-1)]?.focus();}});
command.addEventListener('click',e=>{const b=e.target.closest('[data-suggest]');if(!b)return;const tool=tools[Number(b.dataset.suggest)];if(!tool)return;cat='all';onlyFav=false;query=tool.name;$('task').value='';hideSuggestions();showResults();});
document.querySelector('.hero-command').addEventListener('focusout',e=>{if(!e.currentTarget.contains(e.relatedTarget))hideSuggestions();});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('.hero-command'))hideSuggestions();},{passive:true});
$('heroSearchForm').addEventListener('submit',hideSuggestions);
$('lang').addEventListener('click',hideSuggestions);

applyLanguage();
syncNav();
