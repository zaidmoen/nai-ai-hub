/* Dependency-free motion layer; catalog state remains in app.js. */
(() => {
  'use strict';
  const grid = document.getElementById('grid');
  const header = document.querySelector('.site-header');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let active = null, frame = 0, point = null;
  function reset() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; point = null;
    if (!active) return;
    active.classList.remove('is-tracking');
    ['--rx','--ry','--mx','--my'].forEach(k => active.style.removeProperty(k));
    active = null;
  }
  function paint() {
    frame = 0;
    if (!active?.isConnected || !point || reduce.matches || !fine.matches) { reset(); return; }
    const rect = active.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (point.x - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (point.y - rect.top) / rect.height));
    active.style.setProperty('--rx', ((0.5-y)*7)+'deg');
    active.style.setProperty('--ry', ((x-0.5)*7)+'deg');
    active.style.setProperty('--mx', (x*100)+'%');
    active.style.setProperty('--my', (y*100)+'%');
  }
  grid.addEventListener('pointermove', e => {
    if (reduce.matches || !fine.matches || e.pointerType === 'touch') return;
    const card = e.target.closest('.tool');
    if (!card) { reset(); return; }
    if (active !== card) { reset(); active = card; active.classList.add('is-tracking'); }
    point = {x:e.clientX,y:e.clientY};
    if (!frame) frame = requestAnimationFrame(paint);
  }, {passive:true});
  grid.addEventListener('pointerleave', reset);
  grid.addEventListener('pointercancel', reset);
  window.addEventListener('blur', reset);
  reduce.addEventListener('change', reset);
  fine.addEventListener('change', reset);
  grid.addEventListener('click', e => {
    if (e.target.closest('a,button,input,select') || getSelection()?.toString()) return;
    e.target.closest('.tool')?.querySelector('[data-act="detail"]')?.click();
  });
  window.naiObserveCards = reset;
  if ('IntersectionObserver' in window && !reduce.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('pending-reveal');
        observer.unobserve(entry.target);
      });
    }, {threshold:0.04});
    grid.querySelectorAll('.tool').forEach(card => {
      if (card.getBoundingClientRect().top > innerHeight) {
        card.classList.add('pending-reveal'); observer.observe(card);
      }
    });
    window.naiObserveCards = () => { observer.disconnect(); reset(); };
    reduce.addEventListener('change', () => {
      observer.disconnect(); grid.querySelectorAll('.pending-reveal').forEach(c=>c.classList.remove('pending-reveal'));
    });
  }
  const links = [...header.querySelectorAll('.navlinks a')];
  function setActive(link) { links.forEach(a => {a.classList.toggle('nav-active', a === link); if (a===link) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');}); }
  function syncNav() { const link = links.find(a => a.getAttribute('href') === location.hash); setActive(link || links[0]); }
  links.forEach(a => a.addEventListener('click', () => setActive(a)));
  window.addEventListener('hashchange', syncNav); syncNav();
  let scrollFrame = 0;
  function onScroll() { if (scrollFrame) return; scrollFrame = requestAnimationFrame(() => {header.classList.toggle('scrolled',scrollY>12);scrollFrame=0;}); }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
