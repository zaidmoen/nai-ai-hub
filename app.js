'use strict';
// Catalog: name, category, official link, Arabic description, English description, Arabic use case, English use case, color.
const raw=[
["ChatGPT","assist","https://chatgpt.com/","بساعدك تفهم المواضيع الصعبة وترتب أفكارك وتكتب وتراجع شغلك","Get help understanding difficult topics and working through ideas or drafts","اطلب منه يشرحلك فكرة من المحاضرة ويعطيك أمثلة عليها","Ask it to explain something from class and walk you through an example","#16816c"],
["Claude","assist","https://claude.ai/","مفيد لما بدك تراجع نص طويل أو تحلل فكرة أو تفهم كود","Useful for working through long documents and explaining code","اعطيه مسودة تقريرك وخليه يحكيلك وين ممكن تحسنها","Share a report draft and ask what could be clearer","#b9664e"],
["Gemini","assist","https://gemini.google.com/","بتقدر تسأله عن النصوص والصور وتستخدمه لتلخيص أفكارك","Ask questions about text and images or get help organizing ideas","خليه يرتبلك ملاحظات المحاضرة على شكل خطة مراجعة","Turn your lecture notes into a study plan","#526ac9"],
["Microsoft Copilot","assist","https://copilot.microsoft.com/","بساعدك بالبحث والكتابة وترتيب أفكارك قبل ما تبدأ","Get help researching a topic or organizing your thoughts","جرب ترتب معه أفكار مشروع جماعي قبل ما تبلش فيه","Use it to plan a group project before getting started","#4664bd"],
["DeepSeek","assist","https://www.deepseek.com/","بفيدك بالمسائل المنطقية وفهم الكود والشرح خطوة بخطوة","Work through reasoning problems and get explanations of code","خليه يشرحلك خطوات حل مسألة وحاول تتأكد منها بنفسك","Ask it to explain a solution and check each step yourself","#4b62b8"],
["NotebookLM","research","https://notebooklm.google/","بتضيف عليه مصادر الدراسة وبساعدك تفهمها وتراجعها","Work with your own study materials and explore what they say","ارفع ملفات المساق المسموح بمشاركتها واطلب أسئلة للمراجعة","Use permitted course materials to make practice questions","#5553b0"],
["Perplexity","research","https://www.perplexity.ai/","بجاوب على أسئلتك وبعطيك روابط ترجع فيها للمصادر","Find answers to questions with links to sources","ابدأ فيه بحثك وبعدين ارجع للمصادر الأصلية","Get started on a research topic and read the original sources","#247f87"],
["Elicit","research","https://elicit.com/","بساعدك تلاقي أبحاث علمية وترتب النتائج اللي بتحتاجها","Find academic papers and organize the findings you need","استخدمه لترتيب الدراسات السابقة لمشروعك","Use it to organize papers for your literature review","#7451b3"],
["Consensus","research","https://consensus.app/","بساعدك تعرف شو بتحكي الدراسات العلمية عن سؤال معين","See what published research says about a question","قارن نتائج أكثر من دراسة عن نفس الموضوع","Compare findings from different papers on the same topic","#335a9f"],
["Scite","research","https://scite.ai/","بوضحلك كيف الأبحاث الثانية استشهدت بدراسة معينة","See how other papers have cited a particular study","راجع إذا الدراسات الثانية بتدعم نتائج البحث أو بتناقشها","Check whether other papers support or challenge a finding","#4f7a74"],
["Connected Papers","research","https://www.connectedpapers.com/","بعرضلك الأبحاث المرتبطة ببعض بطريقة بصرية","See how related research papers connect","ابدأ من ورقة علمية واكتشف أبحاث قريبة من موضوعها","Start with one paper and find related work","#6b5fa7"],
["GitHub Copilot","code","https://github.com/features/copilot","بساعدك تكتب الكود وتفهمه من داخل محرر البرمجة","Get code suggestions and explanations inside your editor","اطلب منه يشرحلك دالة ويقترح حالات اختبار إلها","Ask for an explanation of a function and some test cases","#373641"],
["Cursor","code","https://cursor.com/","محرر كود بساعدك تفهم مشروعك وتعدل عليه","A code editor that helps you understand and edit your project","خليه يشرحلك بنية المشروع قبل ما تغير أي ملف","Explore how a project is organized before editing files","#3e3c57"],
["Replit","code","https://replit.com/","بيئة برمجة بتشتغل من المتصفح وفيها مساعد ذكي","Write and run code in your browser with AI assistance","جرب فكرتك وابن نسخة بسيطة من تطبيقك","Build a small prototype to try out an idea","#bc632d"],
["Google AI Studio","code","https://aistudio.google.com/","بتقدر تجرب نماذج Gemini وتبني عليها أفكار لتطبيقاتك","Try Gemini models and explore how to use them in an app","جرب أكثر من طلب للنموذج قبل ما تربطه بمشروعك","Try different prompts before connecting a model to your project","#3f71c4"],
["Hugging Face","code","https://huggingface.co/","مكان بتلاقي فيه نماذج جاهزة ومجموعات بيانات وتجارب","Find AI models and datasets alongside interactive demos","دور على نموذج لتصنيف النصوص يناسب مشروعك","Find a text classification model for your project","#9a6d1e"],
["Canva","design","https://www.canva.com/","بساعدك تصمم بوسترات وعروض ومحتوى بصري بسهولة","Create posters and presentations with helpful design tools","صمم بوستر لفعالية بالجامعة","Design a poster for a university event","#6472bd"],
["Adobe Firefly","design","https://firefly.adobe.com/","بتقدر تولد صور من وصف وتعدل على المحتوى البصري","Generate images from a description and edit visuals","جرب فكرة بصرية لحملة طلابية","Explore a visual idea for a student campaign","#b74771"],
["Gamma","design","https://gamma.app/","بحول أفكارك ومخططاتك لمسودات عروض ومستندات","Turn an outline into a draft presentation or document","جهز مسودة عرض من خطة مشروعك","Start a presentation from your project outline","#7455b9"],
["Ideogram","design","https://ideogram.ai/","مفيد لتوليد صور وتصاميم فيها نصوص واضحة","Generate images and designs that include text","جرب أكثر من تصميم لبوستر فيه عنوان","Try a few poster designs with a title","#4d4969"],
["Midjourney","design","https://www.midjourney.com/","بولد صور إبداعية بناء على الوصف اللي بتكتبه","Create imaginative images from your own descriptions","جرب أفكار بصرية مختلفة لهوية مشروعك","Explore visual directions for your project","#77619d"],
["Grammarly","writing","https://www.grammarly.com/","بساعدك تراجع كتابتك بالإنجليزي وتوضح المعنى","Make your English writing clearer and easier to read","راجع رسالة رسمية أو تقرير قبل ما تبعته","Review an email or report before sending it","#258568"],
["DeepL","writing","https://www.deepl.com/","مفيد لترجمة النصوص ومراجعة صياغتها","Translate text and get help with wording","ترجم فقرة وراجع المصطلحات حسب تخصصك","Translate a paragraph and check the terminology","#24456a"],
["QuillBot","writing","https://quillbot.com/","بساعدك تلخص النصوص وتعيد صياغة شغلك وتراجعه","Summarize text and get help refining your writing","حسن صياغة نص كتبته بنفسك مع الحفاظ على توثيق المصادر","Refine your own draft and keep the sources credited","#387d58"],
["Runway","media","https://runwayml.com/","بتقدر تولد فيديوهات وتعدل عليها بأدوات الذكاء الاصطناعي","Generate and edit videos with AI tools","جرب مشهد قصير لمشروع إعلامي","Try a short scene for a media project","#42425a"],
["ElevenLabs","media","https://elevenlabs.io/","بساعدك تولد كلام مسموع وتشتغل على الصوت","Generate speech and work with audio","جرب تعليق صوتي من غير ما تقلد صوت حدا بدون إذنه","Try a narration without copying someone's voice without permission","#4a5062"],
["Descript","media","https://www.descript.com/","بتقدر تعدل تسجيلات الصوت والفيديو من خلال النص","Edit audio and video by working with the transcript","عدل تسجيل مقابلة بعد ما تاخد موافقة المشاركين","Edit an interview recording with everyone's permission","#5862b4"],
["Wolfram Alpha","data","https://www.wolframalpha.com/","بساعدك تحسب وتحل مسائل بالرياضيات والعلوم","Work through calculations and math or science problems","تأكد من ناتج مسألة حليتها بنفسك","Check the answer to a problem you solved","#b75740"],
["Google Colab","data","https://colab.research.google.com/","بتقدر تكتب Python من المتصفح وتجرب تحليل البيانات ونماذج الذكاء الاصطناعي","Run Python in your browser for data analysis and AI experiments","حلل مجموعة بيانات واعرض النتائج برسومات","Analyze a dataset and visualize the results","#b57832"],
["DataRobot","data","https://www.datarobot.com/","منصة بتساعدك تبني نماذج تعلم آلي وتدير تطبيقات الذكاء الاصطناعي","Build machine learning models and manage AI applications","استكشف خطوات بناء نموذج للتنبؤ","Explore the steps involved in building a prediction model","#575ca0"]
];
const tools=raw.map((r,id)=>({id,name:r[0],cat:r[1],url:r[2],ar:r[3],en:r[4],useAr:r[5],useEn:r[6],color:r[7]}));
const cats={all:['الكل','All'],assist:['المساعدات الذكية','AI Assistants'],research:['البحث والدراسة','Research & Study'],code:['البرمجة','Development'],design:['التصميم والعروض','Design & Slides'],writing:['الكتابة والترجمة','Writing & Translation'],media:['الصوت والفيديو','Audio & Video'],data:['البيانات والرياضيات','Data & Math']};
const tasks=[['','اختار مهمة','Choose a task'],['research','البحث العلمي أو الدراسة','Research or study'],['code','كتابة كود أو بناء تطبيق','Code or build an app'],['design','تصميم بوستر أو عرض','Design a poster or slides'],['writing','كتابة تقرير أو ترجمة','Write or translate'],['media','إنتاج فيديو أو صوت','Produce audio or video'],['data','تحليل البيانات أو الرياضيات','Analyze data or solve math'],['assist','شرح مفهوم أو عصف ذهني','Explain a concept or brainstorm']];
const dict={skillsEntry:['مهارات جاهزة للمساعد البرمجي بتقدر تحملها وتضيفها لمشروعك','Reusable agent skills you can download and add to your project'],mcpEntry:['اربط مساعدك مع أدوات التطوير والمصادر اللي بتحتاجها','Connect your agent to the development tools and resources you need'],promptsNav:['Prompt Studio','Prompt Studio'],promptEntryTitle:['برومبتات تساعدك تشتغل على مشاريعك','Prompts for your next project'],promptEntryDesc:['برومبتات جاهزة للبرمجة والتصميم وتعلم الآلة بتقدر تعدلها حسب مشروعك وتنسخها لأي مساعد ذكي','Practical prompts for coding and design or machine learning that you can adapt to your project and use with any AI assistant'],promptEntryOpen:['افتح الاستوديو','Open the studio'],cinemaKicker:["دليل الذكاء الاصطناعي للطلاب","AI TOOLS FOR STUDENTS"],cinemaExplore:["استكشف الأدوات","Explore tools"],cinemaFields:["اختار مجالك","Browse by field"],fieldsTitle:["شو حابب تعمل","What do you want to work on"],fieldsDesc:["اختار المجال اللي بهمك وشوف الأدوات اللي ممكن تساعدك فيه","Pick a field to see which tools can help you"],fieldsLabel:["مجالات","FIELDS"],field_assist:["المساعدات الذكية","AI assistants"],fieldTag_assist:["اسأل وافهم","Ask and learn"],field_research:["البحث والدراسة","Research & study"],fieldTag_research:["دور على أبحاث ومراجع","Find papers and sources"],field_code:["البرمجة","Development"],fieldTag_code:["اكتب كود وطور مشاريعك","Write code and build projects"],field_design:["التصميم والعروض","Design & slides"],fieldTag_design:["صمم بوسترات وعروض","Design posters and slides"],field_writing:["الكتابة والترجمة","Writing & translation"],fieldTag_writing:["اكتب وترجم وراجع نصوصك","Write and translate"],field_media:["الصوت والفيديو","Audio & video"],fieldTag_media:["اشتغل على الصوت والفيديو","Work with audio and video"],field_data:["البيانات والرياضيات","Data & math"],fieldTag_data:["حل مسائل وحلل بيانات","Solve problems and analyze data"],favorites:['المفضلة','Favorites'],hero:['تعلم أكثر\nوجرب أدوات جديدة','Find the right tools\nfor the way you learn'],intro:['جمعنالك أدوات الذكاء الاصطناعي اللي بتفيدك بالدراسة والبحث والبرمجة والتصميم بمكان واحد من جمعية ناي للذكاء الاصطناعي','We brought together useful AI tools for studying and research as well as coding and design at Najah AI Society'],searchLabel:['ابحث عن أداة','Search tools'],tools:['أداة','AI tools'],categories:['مجالات','Categories'],hub:['منصة واحدة','Student hub'],finder:['مش عارف من وين تبدأ','Need help getting started'],finderDesc:['احكيلنا شو بدك تعمل ومنعرضلك الأدوات اللي ممكن تفيدك','Choose what you need to do and we will show you relevant tools'],taskLabel:['اختر المهمة','Choose a task'],directory:['استكشف الأدوات','Explore tools'],directoryDesc:['تصفح الأدوات وشوف كيف ممكن تستفيد منها بتخصصك ومشاريعك','Browse the tools and see how they might help with your studies and projects'],disclaimer:['الدليل مستقل عن الشركات المطورة للأدوات','An independent directory with no affiliation to tool providers'],responsible:['استخدم الذكاء الاصطناعي بمسؤولية','Use AI responsibly'],responsibleDesc:['تأكد من المعلومات ومصادرها قبل ما تعتمد عليها وخلي بياناتك الشخصية والخاصة بعيدة عن الأدوات والتزم بتعليمات مدرس المساق واستخدم الذكاء الاصطناعي عشان تتعلم وتفهم شغلك بنفسك','Check information against its sources and keep personal or confidential data private\nFollow your course rules and use AI to learn rather than submitting work you do not understand'],plans:['الأسعار والخطط وتوفر الأدوات ممكن تتغير فالأفضل تتأكد من الموقع الرسمي','Prices and availability can change so check the official website for current information'],footer:['مبادرة من طلاب جامعة النجاح','A student initiative from An Najah National University'],clear:['مسح','Clear'],compare:['مقارنة','Compare']};
Object.assign(dict,{edition:['دليل ناي للذكاء الاصطناعي','THE NAI AI INDEX'],exploreNav:['استكشف','Explore'],finderNav:['دليل الاختيار','Tool finder'],guideNav:['الاستخدام المسؤول','Responsible AI'],browse:['تصفح المكتبة','Browse the directory'],metric1:['أدوات مفيدة للدراسة','Tools for studying'],metric2:['من الدراسة إلى الإبداع','From study to creation'],metric3:['من الطلاب وإليهم','Built for students'],metric4:['مبادرة طلابية','Student initiative']});
const categoryPaths={all:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',assist:'<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>',research:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"/>',design:'<path d="m12 3 9 9-9 9-9-9zM12 3v18M3 12h18"/>',writing:'<path d="M4 5h16M12 5v15M8 20h8"/>',media:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4z"/>',data:'<path d="M4 20V4M4 20h17M9 16v-5m5 5V7m5 9V3"/>'};


// Interaction labels are localized alongside the original catalog copy.
Object.assign(dict, {
  ashenOpen: ['استكشف معرض 3D', 'Explore the 3D shelf'],
  libraryTitle: ['مكتبة الذكاء التفاعلية', 'The Intelligence Library'],
  libraryDesc: ['سبع مجموعات من الأدوات بتقدر تستكشفها', 'Explore seven collections of AI tools'],
  libraryOpen: ['افتح المكتبة', 'Enter the library'],
  skip: ['انتقل إلى الأدوات', 'Skip to tools'],
  sortLabel: ['ترتيب الأدوات', 'Sort tools'],
  reset: ['إلغاء التصفية', 'Clear filters'],
  allTools: ['كل الأدوات', 'All tools'],
  noResults: ['ما لقينا أدوات مطابقة', 'No matching tools'],
  noResultsDesc: ['جرّب كلمات أقل أو اإلغاء التصفية لاستكشاف كل الأدوات.', 'Try a different search or browse all tools'],
  noFavorites: ['لسا ما حفظت أي أداة', 'No saved tools yet'],
  noFavoritesDesc: ['اضغط على القلب جنب الأداة عشان تحفظها وترجعلها بعدين', 'Tap the heart next to a tool to save it for later'],
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
    $(id).placeholder = tr('ابحث عن أداة أو مهمة', 'Search for a tool or task');
  }
  setText($('total'), String(tools.length));
  setText($('catTotal'), String(Object.keys(cats).length - 1));
  const sortValue = $('sort').value || 'default';
  $('sort').innerHTML = `<option value="default">${tr('الترتيب الافتراضي', 'Default order')}</option><option value="az">${tr('حسب الاسم', 'By name')}</option>`;
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
  return '<div class="card-art" aria-hidden="true"><span class="card-index">FIELD '+n+'</span><svg viewBox="0 0 280 96" preserveAspectRatio="xMidYMid meet" fill="none" stroke="currentColor" stroke-width="1.25"><g opacity=".3"><path d="M0 24h280M0 48h280M0 72h280M40 0v96M80 0v96M120 0v96M160 0v96M200 0v96M240 0v96" stroke-dasharray="1 5"/><path d="M8 8h10M8 8v10m264 70h-10m10 0V78"/></g><g class="card-diagram">'+drawing+'</g></svg><span class="card-art-glint"></span></div>';
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
      <p class="card-context"><strong>${tr('كيف ممكن تستفيد منها', 'Try this')}</strong>${escapeHtml(tr(tool.useAr, tool.useEn))}</p>
      <div class="actions">
        <a class="btn visit-link" href="${tool.url}" target="_blank" rel="noopener noreferrer">${tr('زيارة الموقع', 'Visit site')}${icon('external')}<span class="sr">${tr(' يفتح في تبويب جديد', ' opens in a new tab')}</span></a>
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
    ? tr('شيل أداة من المقارنة عشان تضيف غيرها', 'Remove a tool before adding another') : compareLabel;
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
    ? tr('اختار أداة ثانية عشان تبدأ المقارنة', 'Choose another tool to start comparing')
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
    const filters = [cat !== 'all' ? cName(cat) : '', onlyFav ? text('favorites') : '', query.trim() ? query.trim() : ''].filter(Boolean);
    $('activeFilters').hidden = !filters.length;
    setText($('filterSummary'), filters.join('   '));
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
    notify(tr('بتقدر تقارن 3 أدوات مع بعض فشيل وحدة عشان تضيف غيرها', 'You can compare up to 3 tools at once'));
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
  return `<a class="btn primary" href="${tool.url}" target="_blank" rel="noopener noreferrer">${tr('الموقع الرسمي', 'Official website')}${icon('external')}<span class="sr">${tr(' يفتح في تبويب جديد', ' opens in a new tab')}</span></a>`;
}
function showDetails(id, origin = null) {
  const tool = tools[id];
  openModal(tool.name, `<p class="detail-category">${cName(tool.cat)}</p>
    <p>${escapeHtml(tr(tool.ar, tool.en))}</p>
    <h3>${tr('كيف ممكن تستخدمها بدراستك', 'How it can help with your studies')}</h3>
    <p>${escapeHtml(tr(tool.useAr, tool.useEn))}</p>
    <p class="notice">${text('plans')}</p>${officialLink(tool)}`, origin);
}
function showComparison() {
  const selected = [...selection].map(id => tools[id]);
  if (selected.length < 2) return;
  const row = (title, value) => `<tr><th scope="row">${title}</th>${selected.map(tool => `<td>${value(tool)}</td>`).join('')}</tr>`;
  openModal(tr('مقارنة الأدوات', 'Compare tools'), `
    <p class="table-hint">${tr('إذا الشاشة صغيرة اسحب الجدول عشان تشوف كل الأدوات', 'Scroll across the table to see all the tools on a smaller screen')}</p>
    <div class="tablewrap" role="region" aria-label="${tr('جدول مقارنة الأدوات', 'Tool comparison table')}" tabindex="0">
      <table><caption class="sr">${tr('مقارنة المجالات والوظائف والأمثلة العملية', 'Compare categories, purposes, and student use cases')}</caption>
        <thead><tr><th scope="col">${tr('المعيار', 'Criteria')}</th>${selected.map(tool => `<th scope="col"><bdi>${escapeHtml(tool.name)}</bdi></th>`).join('')}</tr></thead>
        <tbody>${row(tr('المجال', 'Category'), tool => cName(tool.cat))}
          ${row(tr('الوظيفة', 'Purpose'), tool => escapeHtml(tr(tool.ar, tool.en)))}
          ${row(tr('مثال عملي', 'Use case'), tool => escapeHtml(tr(tool.useAr, tool.useEn)))}
          ${row(tr('الرابط', 'Website'), tool => `<a href="${tool.url}" target="_blank" rel="noopener noreferrer">${tr('زيارة', 'Visit')}<span class="sr">${tr(' يفتح في تبويب جديد', ' opens in a new tab')}</span></a>`)}
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
  command.innerHTML='<p class="command-caption">'+escapeHtml(tr('أدوات ممكن تكون بتدور عليها','Suggested tools'))+'</p>'+ (matches.length?matches.map(tool=>'<button type="button" class="command-option" data-suggest="'+tool.id+'"><span class="command-mark" style="--mark:'+tool.color+'" aria-hidden="true">'+escapeHtml(tool.name.slice(0,2))+'</span><span><bdi>'+escapeHtml(tool.name)+'</bdi><small>'+escapeHtml(cName(tool.cat))+'</small></span>'+icon('arrow')+'</button>').join(''):'<p class="command-empty">'+escapeHtml(tr('ما لقينا أدوات مطابقة','No matching tools'))+'</p>');
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
