/* Native host for the exact Ashen Press HTML. No React or build required. */
(() => {
  'use strict';
  const source = 'src/shaders/ashen-press/sources/ashen-press.html';
  const stage = document.getElementById('ashenStage');
  const mount = document.getElementById('sceneMount');
  const status = document.getElementById('sceneStatus');
  const heading = document.getElementById('sceneHeading');
  const hint = document.getElementById('sceneHint');
  const toggle = document.getElementById('sceneToggle');
  const resume = document.getElementById('resumeScene');
  let arabic = true;
  try { arabic = JSON.parse(localStorage.getItem('nai-lang')) !== 'en'; } catch {}
  const tr = (ar,en) => arabic ? ar : en;
  if (arabic) {
    document.documentElement.lang = 'ar';
    document.getElementById('libraryBack').textContent = 'مكتبة الذكاء';
    document.getElementById('fallback').textContent = 'العودة للمكتبة';
    resume.textContent = 'استئناف المشهد';
  }
  let frame = null;
  let intersecting = false;
  let paused = false;
  let pageActive = true;
  const isVisible = () => pageActive && !document.hidden && intersecting && !stage.hidden && stage.clientWidth > 0 && stage.clientHeight > 0;
  function release() {
    if (frame) { const old = frame; frame = null; old.remove(); }
  }
  function update() {
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? tr('استئناف المشهد','Resume scene') : tr('إيقاف المشهد','Pause scene');
    if (paused || !isVisible()) {
      release();
      status.hidden = false;
      heading.textContent = paused ? tr('المشهد متوقف','Scene paused') : tr('المعرض ثلاثي الأبعاد','3D gallery');
      hint.textContent = paused ? tr('استأنف المشهد للعودة إلى تجربة الكتب.','Resume to return to the interactive shelf.') : tr('يعمل المشهد عندما تكون الصفحة ظاهرة.','The scene runs only while this page is visible.');
      resume.hidden = !paused;
      return;
    }
    if (frame) return;
    status.hidden = false;
    resume.hidden = true;
    heading.textContent = tr('جارٍ فتح المعرض','Opening the shelf');
    hint.textContent = tr('عشرة كتب تفاعلية. اختر الغلاف ثم افتحه وحرّكه.','Ten interactive volumes. Select a cover, look inside, and drag to turn.');
    const next = document.createElement('iframe');
    next.title = tr('معرض Ashen Press الأصلي','Original Ashen Press art-book shelf');
    next.setAttribute('sandbox','allow-scripts');
    next.setAttribute('referrerpolicy','no-referrer');
    next.loading = 'eager';
    next.addEventListener('load', () => { if (frame === next) status.hidden = true; }, {once:true});
    next.src = source;
    frame = next;
    mount.replaceChildren(next);
  }
  function setPaused(value) { paused = value; update(); }
  toggle.addEventListener('click', () => setPaused(!paused));
  resume.addEventListener('click', () => { setPaused(false); toggle.focus(); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { intersecting = entries[0].isIntersecting; update(); });
    observer.observe(stage);
  } else { intersecting = true; }
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(stage);
  document.addEventListener('visibilitychange', update);
  window.addEventListener('pagehide', () => { pageActive = false; release(); });
  window.addEventListener('pageshow', () => { pageActive = true; update(); });
  update();
})();