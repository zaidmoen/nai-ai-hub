/* Native, bounded motion. Content and controls work without this enhancement. */
(() => {
  'use strict';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const styles = getComputedStyle(document.documentElement);
  const timing = {
    micro: parseFloat(styles.getPropertyValue('--motion-micro')) || 120,
    enter: parseFloat(styles.getPropertyValue('--motion-enter')) || 240,
    exit: parseFloat(styles.getPropertyValue('--motion-exit')) || 140,
    layout: parseFloat(styles.getPropertyValue('--motion-layout')) || 240,
    easeMicro: styles.getPropertyValue('--ease-micro').trim() || 'cubic-bezier(0.2, 0, 0, 1)',
    easeEnter: styles.getPropertyValue('--ease-enter').trim() || 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeExit: styles.getPropertyValue('--ease-exit').trim() || 'cubic-bezier(0.4, 0, 1, 1)'
  };
  const tracks = new WeakMap();
  const running = new Set();
  const visibility = new WeakMap();
  const disclosures = new WeakMap();
  const dialogs = new WeakSet();
  const layoutGhosts = new WeakMap();
  const canAnimate = element => !reduced.matches && !document.hidden && typeof element.animate === 'function';

  function cancel(element, channel) {
    tracks.get(element)?.get(channel)?.cancel();
  }
  function run(element, channel, frames, { duration, easing, onFinish, cleanup } = {}) {
    cancel(element, channel);
    if (!canAnimate(element)) {
      onFinish?.();
      cleanup?.();
      return;
    }
    const animation = element.animate(frames, { duration, easing, fill: 'both' });
    const channels = tracks.get(element) || new Map();
    tracks.set(element, channels);
    let settled = false;
    function settle(finished) {
      if (settled) return;
      settled = true;
      channels.delete(channel);
      running.delete(record);
      // Commit hidden/open state before releasing the animation's final frame.
      try { if (finished) onFinish?.(); }
      finally { animation.cancel(); cleanup?.(); }
    }
    const record = { finish: () => settle(true), cancel: () => settle(false) };
    channels.set(channel, record);
    running.add(record);
    animation.finished.then(record.finish, record.cancel);
  }
  function current(element) {
    const computed = getComputedStyle(element);
    return { opacity: computed.opacity, transform: computed.transform };
  }
  function onScreen(rect) {
    return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth;
  }

  function layout(container, mutate, { animate = true } = {}) {
    if (!animate || !canAnimate(container)) {
      [...container.children].forEach(child => cancel(child, 'layout'));
      layoutGhosts.get(container)?.forEach(ghost => cancel(ghost, 'layout'));
      mutate();
      return;
    }
    // Read every old visual position before cancelling or writing any layout.
    const before = new Map([...container.children].map(child => {
      const rect = child.getBoundingClientRect();
      return [child, { rect, opacity: onScreen(rect) ? getComputedStyle(child).opacity : '1' }];
    }));
    layoutGhosts.get(container)?.forEach(ghost => cancel(ghost, 'layout'));
    before.forEach((value, child) => cancel(child, 'layout'));
    mutate();
    const after = new Map([...container.children].map(child => [child, child.getBoundingClientRect()]));
    const ghosts = new Set();
    layoutGhosts.set(container, ghosts);

    // Exiting copies are inert, unnamed, and detached from the real list's DOM.
    before.forEach(({ rect, opacity }, child) => {
      if (after.has(child) || !onScreen(rect) || ghosts.size >= 12) return;
      const ghost = child.cloneNode(true);
      [ghost, ...ghost.querySelectorAll('[id]')].forEach(node => node.removeAttribute('id'));
      ghost.removeAttribute('aria-labelledby');
      ghost.setAttribute('aria-hidden', 'true');
      ghost.inert = true;
      ghost.classList.add('motion-ghost');
      Object.assign(ghost.style, {
        position: 'fixed', top: `${rect.top}px`, left: `${rect.left}px`,
        width: `${rect.width}px`, height: `${rect.height}px`, margin: '0',
        pointerEvents: 'none', zIndex: '1'
      });
      document.body.append(ghost);
      ghosts.add(ghost);
      run(ghost, 'layout', [{ opacity, transform: 'none' }, { opacity: 0, transform: 'translateY(-4px)' }], {
        duration: timing.exit, easing: timing.easeExit,
        cleanup: () => { ghost.remove(); ghosts.delete(ghost); }
      });
    });
    after.forEach((rect, child) => {
      if (!onScreen(rect)) return;
      const previous = before.get(child);
      const dx = previous ? previous.rect.left - rect.left : 0;
      const dy = previous ? previous.rect.top - rect.top : 0;
      if (previous && onScreen(previous.rect) && Math.hypot(dx, dy) < Math.max(innerWidth, innerHeight)) {
        if (Math.abs(dx) < .5 && Math.abs(dy) < .5 && Number(previous.opacity) === 1) return;
        run(child, 'layout', [
          { transform: `translate(${dx}px, ${dy}px)`, opacity: previous.opacity },
          { transform: 'none', opacity: 1 }
        ], { duration: timing.layout, easing: timing.easeEnter });
      } else {
        run(child, 'layout', [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], {
          duration: timing.enter, easing: timing.easeEnter
        });
      }
    });
  }

  function setVisible(element, visible, { onHidden } = {}) {
    if (visibility.get(element) === visible) return;
    visibility.set(element, visible);
    const wasHidden = element.hidden;
    if (wasHidden && !visible) { element.inert = true; onHidden?.(); return; }
    const from = wasHidden ? { opacity: 0, transform: 'translateY(8px)' } : current(element);
    cancel(element, 'visibility');
    element.inert = !visible;
    if (visible) element.hidden = false;
    run(element, 'visibility', [from, { opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(4px)' }], {
      duration: visible ? timing.enter : timing.exit,
      easing: visible ? timing.easeEnter : timing.easeExit,
      onFinish: () => {
        if (!visible) { element.hidden = true; onHidden?.(); }
      }
    });
  }

  function bindDialog(dialog) {
    if (dialogs.has(dialog)) return;
    dialogs.add(dialog);
    dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(dialog); });
    dialog.addEventListener('close', () => {
      // Native close events are queued; an earlier close must not undo a reopen.
      if (dialog.open) return;
      cancel(dialog, 'dialog');
      dialog.dataset.motionVisible = 'false';
      delete dialog.dataset.closing;
    });
  }
  function openDialog(dialog, origin = null) {
    bindDialog(dialog);
    const wasOpen = dialog.open;
    let from = wasOpen ? current(dialog) : { opacity: 0, transform: 'translateY(8px) scale(0.96)' };
    cancel(dialog, 'dialog');
    delete dialog.dataset.closing;
    if (!wasOpen) {
      dialog.dataset.motionVisible = 'false';
      dialog.showModal();
      // Resolve the backdrop's initial opacity before starting both enters.
      if (canAnimate(dialog)) getComputedStyle(dialog, '::backdrop').opacity;
    }
    if (!wasOpen && origin && canAnimate(dialog) && origin.width > 0 && origin.height > 0) {
      const dest = dialog.getBoundingClientRect();
      const scale = Math.max(.42, Math.min(.88, origin.width / Math.max(dest.width,1), origin.height / Math.max(dest.height,1)));
      const dx = origin.left + origin.width/2 - dest.left - dest.width/2;
      const dy = origin.top + origin.height/2 - dest.top - dest.height/2;
      from = {opacity:.35, transform:`translate(${dx}px,${dy}px) scale(${scale})`};
    }
    dialog.dataset.motionVisible = 'true';
    run(dialog, 'dialog', [from, { opacity: 1, transform: 'none' }], {
      duration: origin && !wasOpen ? 340 : timing.enter, easing: timing.easeEnter
    });
  }
  function closeDialog(dialog) {
    if (!dialog.open || dialog.dataset.closing) return;
    const from = current(dialog);
    dialog.dataset.closing = 'true';
    dialog.dataset.motionVisible = 'false';
    run(dialog, 'dialog', [from, { opacity: 0, transform: 'translateY(4px) scale(0.98)' }], {
      duration: timing.exit, easing: timing.easeExit,
      onFinish: () => { dialog.close(); delete dialog.dataset.closing; }
    });
  }

  function setDisclosureOpen(details, open) {
    const state = disclosures.get(details);
    if (!state) { details.open = open; return; }
    if (state.open === open) return;
    state.open = open;
    const from = details.open ? current(state.body) : { opacity: 0, transform: 'translateY(-4px)' };
    cancel(state.body, 'disclosure');
    state.summary.setAttribute('aria-expanded', String(open));
    state.body.inert = !open;
    details.toggleAttribute('data-collapsing', !open);
    if (open) layout(state.grid, () => { details.open = true; });
    run(state.body, 'disclosure', [from, { opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(-4px)' }], {
      duration: open ? timing.enter : timing.exit,
      easing: open ? timing.easeEnter : timing.easeExit,
      onFinish: () => {
        if (!open) layout(state.grid, () => { details.open = false; });
        details.removeAttribute('data-collapsing');
      }
    });
  }
  function bindDisclosure(details, grid) {
    const summary = details.querySelector('summary');
    const body = details.querySelector('.finder-body');
    disclosures.set(details, { open: details.open, body, summary, grid });
    summary.setAttribute('aria-expanded', String(details.open));
    body.inert = !details.open;
    summary.addEventListener('click', event => {
      event.preventDefault();
      setDisclosureOpen(details, !disclosures.get(details).open);
    });
  }
  function reject(element) {
    if (!element) return;
    run(element, 'validation', [0, -4, 4, -2, 0].map(x => ({ transform: `translateX(${x}px)` })), {
      duration: timing.exit, easing: timing.easeMicro
    });
  }
  function finishAll() { [...running].forEach(record => record.finish()); }
  reduced.addEventListener('change', () => { if (reduced.matches) finishAll(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) finishAll(); });
  window.addEventListener('resize', finishAll, { passive: true });
  window.addEventListener('pagehide', finishAll);

  window.naiMotion = Object.freeze({ layout, setVisible, bindDialog, openDialog, closeDialog, bindDisclosure, setDisclosureOpen, reject });
})();
