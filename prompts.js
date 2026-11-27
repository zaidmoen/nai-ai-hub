/* Local prompt catalog. No generation API or network requests. */
(() => {
'use strict';
const {categories,prompts}=window.NAI_PROMPTS;
const $=id=>document.getElementById(id);
function load(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function store(key,v){try{localStorage.setItem(key,JSON.stringify(v))}catch{}}
let lang=load('nai-lang','ar')==='en'?'en':'ar', theme=load('nai-theme','dark')==='light'?'light':'dark';
let category='all',onlySaved=false,current=null;
const loaded=load('nai-prompt-favs',[]);
const saved=new Set(Array.isArray(loaded)?loaded.filter(id=>prompts.some(p=>p.id===id)):[]);
const words={
skip:['انتقل للبرومبتات','Skip to prompts'],directory:['دليل الأدوات','Tool directory'],hero:['ابدأ مشروعك من السؤال الصح','Start with the right prompt'],intro:['برومبتات كتبناها لمهام حقيقية بتواجه الطلاب والمطورين اختار اللي بناسبك وعدله حسب مشروعك','Prompts for real tasks that students and developers work on every day'],templates:['برومبت','prompts'],fields:['مجالات','fields'],library:['مكتبة البرومبتات','Prompt library'],libraryDesc:['اختار مجال أو ابحث عن المهمة اللي بدك تشتغل عليها','Browse by field or search for your next task'],saved:['المحفوظات','Saved'],searchLabel:['ابحث عن برومبت','Search prompts'],footer:['استخدم البرومبتات مع أي مساعد ذكي وتأكد من النتائج قبل ما تعتمد عليها','Use these prompts with your AI assistant and check its results before relying on them'],home:['العودة للموقع','Back to AI Hub'],customize:['خصص البرومبت لمشروعك','Make it fit your project'],privacy:['لا تضيف كلمات مرور أو مفاتيح API أو بيانات خاصة','Never include passwords or API keys or private data'],context:['عن المشروع','Project context'],stack:['التقنيات','Technology stack'],goal:['شو بدك تنجز','Your goal'],constraints:['الشروط والقيود','Constraints'],apply:['طبق التخصيص','Apply customization'],preview:['البرومبت النهائي','Your prompt'],editHint:['بتقدر تعدل النص مباشرة قبل النسخ','Edit the text directly before copying'],copy:['انسخ البرومبت','Copy prompt'],reset:['رجع النص الأصلي','Reset prompt']
};
const tr=(ar,en)=>lang==='ar'?ar:en;
const title=p=>p[lang==='ar'?0:1];
const categoryOf=id=>categories.find(c=>c.id===id);
const norm=s=>String(s).normalize('NFKD').replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').toLowerCase().trim();
const index=new Map(prompts.map(p=>[p.id,norm([...p.title,...p.description,...categoryOf(p.category).title,p.template].join(' '))]));
const grid=$('studioGrid'),dialog=$('promptDialog'),editor=$('promptText');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function localize(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.documentElement.dataset.theme=theme;
 document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#0c0d12':'#f6f6f9';
 document.querySelectorAll('[data-p]').forEach(el=>el.textContent=title(words[el.dataset.p]));
 $('studioLang').textContent=tr('EN','عربي');$('studioLang').setAttribute('aria-label',tr('Switch to English','التبديل للعربية'));
 $('studioTheme').textContent=theme==='dark'?'☀':'☾';$('studioTheme').setAttribute('aria-label',theme==='dark'?tr('المظهر الفاتح','Light theme'):tr('المظهر الداكن','Dark theme'));
 $('studioSearch').placeholder=tr('ابحث عن برومبت أو مهمة','Search for a prompt or task');
 $('studioFilters').setAttribute('aria-label',tr('المجالات','Categories'));$('closePrompt').setAttribute('aria-label',tr('إغلاق','Close'));
 $('promptContext').placeholder=tr('مثلا موقع لطلاب الجامعة','A university student website');$('promptStack').placeholder='React + Django + PostgreSQL';$('promptGoal').placeholder=tr('مثلا تحسين الواجهة بدون تغيير الوظائف','Redesign the UI without changing behavior');$('promptConstraints').placeholder=tr('مثلا بدون مكتبات جديدة','No new dependencies');
 renderFilters();render();if(current)labelDialog();
}
function renderFilters(){
 const all=[{id:'all',title:['الكل','All']},...categories];$('studioFilters').innerHTML=all.map(c=>'<button class="btn studio-filter" type="button" data-category="'+c.id+'" aria-pressed="'+(c.id===category)+'">'+escape(title(c.title))+'</button>').join('');
}
function render(){
 const q=norm($('studioSearch').value).split(/\s+/).filter(Boolean);
 const rows=prompts.filter(p=>(category==='all'||category===p.category)&&(!onlySaved||saved.has(p.id))&&q.every(w=>index.get(p.id).includes(w)));
 $('studioSavedCount').textContent=saved.size;$('studioSaved').setAttribute('aria-pressed',String(onlySaved));
 $('studioCount').textContent=tr(rows.length+' من '+prompts.length+' برومبت',rows.length+' of '+prompts.length+' prompts');
 if(!rows.length){grid.innerHTML='<p class="studio-empty">'+escape(onlySaved?tr('ما في برومبتات محفوظة بتطابق بحثك','No saved prompts match your search'):tr('جرب كلمة ثانية أو اختار مجال مختلف','Try another search or choose a different field'))+'</p>';return}
 grid.innerHTML=rows.map(p=>{const c=categoryOf(p.category),fav=saved.has(p.id);return '<article class="studio-card" style="--pc:'+c.color+'"><div class="studio-card-top"><span class="studio-code">'+c.code+'</span><span class="studio-card-category">'+escape(title(c.title))+'</span><button class="btn studio-star" type="button" data-action="save" data-id="'+p.id+'" aria-pressed="'+fav+'" aria-label="'+escape((fav?tr('إزالة من المحفوظات','Remove saved prompt'):tr('حفظ البرومبت','Save prompt'))+' '+title(p.title))+'">'+(fav?'★':'☆')+'</button></div><h3>'+escape(title(p.title))+'</h3><p>'+escape(title(p.description))+'</p><div class="studio-card-actions"><button class="btn primary" type="button" data-action="open" data-id="'+p.id+'">'+tr('افتح وخصص','Open and customize')+'</button><button class="btn" type="button" data-action="copy" data-id="'+p.id+'">'+tr('نسخ','Copy')+'</button></div></article>'}).join('');
}
function labelDialog(){ $('promptTitle').textContent=title(current.title);$('promptCategory').textContent=title(categoryOf(current.category).title);$('promptDesc').textContent=title(current.description); }
const fields={context:'promptContext',stack:'promptStack',goal:'promptGoal',constraints:'promptConstraints'};
const defaults={context:'[Describe your project and provide relevant files or examples]',stack:'[List the existing technologies and versions]',goal:'[Describe what you want to accomplish]',constraints:'[List requirements, limitations and things to preserve]'};
function build(p,custom=false){return p.template.replace(/\{\{(context|stack|goal|constraints)\}\}/g,(_,key)=>(custom?$(fields[key]).value.trim():'')||defaults[key])}
function open(p){current=p;Object.values(fields).forEach(id=>$(id).value='');labelDialog();editor.value=build(p);$('promptStatus').textContent='';dialog.showModal();$('closePrompt').focus()}
async function copy(value){if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(value);return true}catch{}}const t=document.createElement('textarea');t.value=value;t.style.cssText='position:fixed;left:0;top:0;opacity:0;pointer-events:none';const previous=document.activeElement;(dialog.open?dialog:document.body).append(t);t.select();let ok=false;try{ok=document.execCommand('copy')}catch{}t.remove();previous?.focus({preventScroll:true});return ok}
function updateSaved(p,button){if(saved.has(p.id))saved.delete(p.id);else saved.add(p.id);store('nai-prompt-favs',[...saved]);if(onlySaved){render();$('studioSaved').focus({preventScroll:true})}else{const yes=saved.has(p.id);button.textContent=yes?'★':'☆';button.setAttribute('aria-pressed',String(yes));button.setAttribute('aria-label',(yes?tr('إزالة من المحفوظات','Remove saved prompt'):tr('حفظ البرومبت','Save prompt'))+' '+title(p.title));$('studioSavedCount').textContent=saved.size}}
$('studioFilters').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;[...$('studioFilters').children].forEach(el=>el.setAttribute('aria-pressed',String(el===b)));render()});
$('studioSearch').addEventListener('input',render);$('studioSaved').addEventListener('click',()=>{onlySaved=!onlySaved;render()});
grid.addEventListener('click',async e=>{const b=e.target.closest('[data-action]');if(!b)return;const p=prompts.find(p=>p.id===b.dataset.id);if(!p)return;if(b.dataset.action==='save')updateSaved(p,b);else if(b.dataset.action==='open')open(p);else{const ok=await copy(build(p));if(ok){b.textContent=tr('تم النسخ','Copied');setTimeout(()=>{if(b.isConnected)b.textContent=tr('نسخ','Copy')},1600)}else{open(p);editor.select();$('promptStatus').textContent=tr('حددنا النص عشان تنسخه يدوي','Text selected for manual copying')}}});
$('applyPrompt').addEventListener('click',()=>{if(current){editor.value=build(current,true);$('promptStatus').textContent=tr('تم تحديث النص','Prompt updated')}});
$('resetPrompt').addEventListener('click',()=>{if(current){Object.values(fields).forEach(id=>$(id).value='');editor.value=build(current);$('promptStatus').textContent=tr('رجعنا النص الأصلي','Original prompt restored')}});
$('copyPrompt').addEventListener('click',async()=>{const ok=await copy(editor.value);$('promptStatus').textContent=ok?tr('تم نسخ البرومبت','Prompt copied'):tr('حددنا النص عشان تنسخه يدوي','Text selected for manual copying');if(!ok){editor.focus();editor.select()}});
$('closePrompt').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{current=null;document.body.classList.remove('modal-open')});$('studioLang').addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';store('nai-lang',lang);localize()});$('studioTheme').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';store('nai-theme',theme);document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#0c0d12':'#f6f6f9';$('studioTheme').textContent=theme==='dark'?'☀':'☾';$('studioTheme').setAttribute('aria-label',theme==='dark'?tr('المظهر الفاتح','Light theme'):tr('المظهر الداكن','Dark theme'))});
$('promptTotal').textContent=prompts.length;$('promptFields').textContent=categories.length;localize();
})();
