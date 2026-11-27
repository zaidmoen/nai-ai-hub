'use strict';
// Catalog: name, category, official link, Arabic description, English description, Arabic use case, English use case, color.
const raw=window.NAI_TOOLS_RAW;
const tools=raw.map((r,id)=>({id,name:r[0],cat:r[1],url:r[2],ar:r[3],en:r[4],useAr:r[5],useEn:r[6],color:r[7]}));
const cats={all:['الكل','All'],assist:['المساعدات الذكية','AI Assistants'],research:['البحث والدراسة','Research & Study'],code:['البرمجة','Development'],design:['التصميم والعروض','Design & Slides'],writing:['الكتابة والترجمة','Writing & Translation'],media:['الصوت والفيديو','Audio & Video'],data:['البيانات والرياضيات','Data & Math']};
const dict={atlasKicker:['من طلاب النجاح لكل طالب','BY NAJAH STUDENTS FOR STUDENTS'],atlasIntro:['كل اللي بتحتاجه لتتعلم وتبرمج وتصمم وتشتغل على مشاريعك بالذكاء الاصطناعي بمكان واحد','Find AI tools and practical resources for studying and building your next project in one place'],arenaEntryTitle:['قارن نماذج الذكاء الاصطناعي','Compare AI models'],arenaEntryDesc:['شوف نتائج الاختبارات والتكلفة والسرعة برسومات واضحة واختار الموديل اللي بناسب شغلك','Compare published benchmark scores and API cost and speed in one place'],arenaEntryOpen:['افتح المقارنة','Open Model Arena'],skillsEntry:['مهارات جاهزة للمساعد البرمجي بتقدر تحملها وتضيفها لمشروعك','Reusable agent skills you can download and add to your project'],mcpEntry:['اربط مساعدك مع أدوات التطوير والمصادر اللي بتحتاجها','Connect your agent to the development tools and resources you need'],promptsNav:['Prompt Studio','Prompt Studio'],promptEntryTitle:['برومبتات تساعدك تشتغل على مشاريعك','Prompts for your next project'],promptEntryDesc:['برومبتات جاهزة للبرمجة والتصميم وتعلم الآلة بتقدر تعدلها حسب مشروعك وتنسخها لأي مساعد ذكي','Practical prompts for coding and design or machine learning that you can adapt to your project and use with any AI assistant'],promptEntryOpen:['افتح الاستوديو','Open the studio'],cinemaKicker:["دليل الذكاء الاصطناعي للطلاب","AI TOOLS FOR STUDENTS"],cinemaExplore:["استكشف الأدوات","Explore tools"],cinemaFields:["اختار مجالك","Browse by field"],fieldsTitle:["شو حابب تعمل","What do you want to work on"],fieldsDesc:["اختار المجال اللي بهمك وشوف الأدوات اللي ممكن تساعدك فيه","Pick a field to see which tools can help you"],fieldsLabel:["مجالات","FIELDS"],field_assist:["المساعدات الذكية","AI assistants"],fieldTag_assist:["اسأل وافهم","Ask and learn"],field_research:["البحث والدراسة","Research & study"],fieldTag_research:["دور على أبحاث ومراجع","Find papers and sources"],field_code:["البرمجة","Development"],fieldTag_code:["اكتب كود وطور مشاريعك","Write code and build projects"],field_design:["التصميم والعروض","Design & slides"],fieldTag_design:["صمم بوسترات وعروض","Design posters and slides"],field_writing:["الكتابة والترجمة","Writing & translation"],fieldTag_writing:["اكتب وترجم وراجع نصوصك","Write and translate"],field_media:["الصوت والفيديو","Audio & video"],fieldTag_media:["اشتغل على الصوت والفيديو","Work with audio and video"],field_data:["البيانات والرياضيات","Data & math"],fieldTag_data:["حل مسائل وحلل بيانات","Solve problems and analyze data"],favorites:['المفضلة','Favorites'],hero:['أطلس المعرفة\nللذكاء الاصطناعي','Discover more\nBuild something new'],intro:['جمعنالك أدوات الذكاء الاصطناعي اللي بتفيدك بالدراسة والبحث والبرمجة والتصميم بمكان واحد من جمعية ناي للذكاء الاصطناعي','We brought together useful AI tools for studying and research as well as coding and design at Najah AI Society'],searchLabel:['ابحث عن أداة','Search tools'],tools:['أداة','AI tools'],categories:['مجالات','Categories'],hub:['منصة واحدة','Student hub'],finder:['مش عارف من وين تبدأ','Need help getting started'],finderDesc:['احكيلنا شو بدك تعمل ومنعرضلك الأدوات اللي ممكن تفيدك','Choose what you need to do and we will show you relevant tools'],taskLabel:['اختر المهمة','Choose a task'],directory:['استكشف الأدوات','Explore tools'],directoryDesc:['تصفح الأدوات وشوف كيف ممكن تستفيد منها بتخصصك ومشاريعك','Browse the tools and see how they might help with your studies and projects'],disclaimer:['الدليل مستقل عن الشركات المطورة للأدوات','An independent directory with no affiliation to tool providers'],responsible:['استخدم الذكاء الاصطناعي بمسؤولية','Use AI responsibly'],responsibleDesc:['تأكد من المعلومات ومصادرها قبل ما تعتمد عليها وخلي بياناتك الشخصية والخاصة بعيدة عن الأدوات والتزم بتعليمات مدرس المساق واستخدم الذكاء الاصطناعي عشان تتعلم وتفهم شغلك بنفسك','Check information against its sources and keep personal or confidential data private\nFollow your course rules and use AI to learn rather than submitting work you do not understand'],plans:['الأسعار والخطط وتوفر الأدوات ممكن تتغير فالأفضل تتأكد من الموقع الرسمي','Prices and availability can change so check the official website for current information'],footer:['مبادرة من طلاب جامعة النجاح','A student initiative from An Najah National University'],clear:['مسح','Clear'],compare:['مقارنة','Compare']};
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
  for (const id of ['directorySearch']) {
    if ($(id).value !== query) $(id).value = query;
  }
}
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0c0d12' : '#f6f6f9';
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
  label('directorySearchForm', tr('البحث في الدليل', 'Search the directory'));
  label('comparebar', tr('الأدوات المحددة للمقارنة', 'Selected tools for comparison'));
  label('backtop', tr('العودة للأعلى', 'Back to top'));
  label('close', tr('إغلاق', 'Close dialog'));
  for (const id of ['directorySearch']) {
    $(id).placeholder = tr('ابحث عن أداة أو مهمة', 'Search for a tool or task');
  }
  setText($('total'), String(tools.length));
  setText($('catTotal'), String(Object.keys(cats).length - 1));
  const sortValue = $('sort').value || 'default';
  $('sort').innerHTML = `<option value="default">${tr('الترتيب الافتراضي', 'Default order')}</option><option value="az">${tr('حسب الاسم', 'By name')}</option>`;
  $('sort').value = sortValue;
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
function createCard(tool) {
  const template = document.createElement('template');
  template.innerHTML = `
    <article class="tool" data-tool-id="${tool.id}" aria-labelledby="tool-${tool.id}" style="--tool-color:${tool.color}">
      <div class="card-surface">
      <div class="cardtop">
        <div class="mark" style="--mark:${tool.color}" aria-hidden="true">${window.NAI_ICONS.resource("tools",tool.id,tool.cat)}</div>
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

$('chips').addEventListener('click', event => {
  const chip = event.target.closest('[data-cat]');
  if (!chip) return;
  cat = chip.dataset.cat;
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
for (const id of ['directorySearch']) {
  $(id).addEventListener('input', scheduleSearch);
  $(id).addEventListener('compositionend', scheduleSearch);
}
for (const id of ['directorySearchForm']) {
  $(id).addEventListener('submit', event => { event.preventDefault(); showResults(); });
}
$('sort').addEventListener('change', render);
$('resetFilters').addEventListener('click', resetFilters);
$('favToggle').addEventListener('click', () => {
  onlyFav = !onlyFav;
  cat = 'all';
  query = '';
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
applyLanguage();
const deepLink = new URLSearchParams(location.search).get('resource');
if (deepLink !== null && /^\d+$/.test(deepLink) && tools[Number(deepLink)]) showDetails(Number(deepLink));
