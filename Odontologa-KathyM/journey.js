/* Progressive enhancement: without JS every chapter and its example remain in order. */
(() => {
  'use strict';
  const story = document.querySelector('.jr-story');
  if (!story) return;
  const chapters = [...story.querySelectorAll('[data-jr-chapter]')];
  const scenes = [...story.querySelectorAll('[data-jr-scene]')];
  const links = [...story.querySelectorAll('[data-jr-nav]')];
  const slots = chapters.map(chapter => chapter.querySelector('.jr-mobile-scene'));
  const stage = story.querySelector('.jr-stage-scenes');
  const desktop = matchMedia('(min-width: 1001px) and (min-height: 900px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let active = -1;
  let frame = 0;
  let manualTarget = null;
  let manualUntil = 0;
  function activate(index) {
    if (index === active) return;
    active = index;
    story.style.setProperty('--jr-progress', String((index + .5) / chapters.length));
    links.forEach((link, i) => {
      if (i === index) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
      chapters[i].classList.toggle('is-active', i === index);
      scenes[i].hidden = desktop.matches && i !== index;
      scenes[i].classList.toggle('is-entering', i === index);
    });
  }
  function layout() {
    story.classList.toggle('jr-desktop', desktop.matches);
    scenes.forEach((scene, i) => {
      (desktop.matches ? stage : slots[i]).append(scene);
      scene.hidden = desktop.matches && i !== active;
    });
    update();
  }
  function update() {
    frame = 0;
    const focusLine = desktop.matches ? innerHeight * .52 : Math.min(innerHeight * .37, 270);
    if (manualTarget !== null) {
      const targetTop = chapters[manualTarget].getBoundingClientRect().top;
      if (performance.now() < manualUntil && Math.abs(targetTop - parseFloat(getComputedStyle(chapters[manualTarget]).scrollMarginTop)) > 4) return;
      manualTarget = null;
    }
    let index = 0;
    chapters.forEach((chapter, i) => { if (chapter.getBoundingClientRect().top <= focusLine) index = i; });
    activate(index);
  }
  function queueUpdate() { if (!frame) frame = requestAnimationFrame(update); }
  function go(index, focusChapter = false) {
    manualTarget = index;
    manualUntil = performance.now() + 1400;
    activate(index);
    if (focusChapter) {
      chapters[index].tabIndex = -1;
      chapters[index].focus({ preventScroll: true });
    }
    const offset = parseFloat(getComputedStyle(chapters[index]).scrollMarginTop);
    scrollTo({ top: scrollY + chapters[index].getBoundingClientRect().top - offset, behavior: reduced.matches ? 'instant' : 'smooth' });
    history.replaceState(null, '', `#${chapters[index].id}`);
    setTimeout(queueUpdate, 1450);
  }
  links.forEach((link, index) => {
    link.addEventListener('click', event => { event.preventDefault(); go(index); });
    link.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % links.length;
      if (event.key === 'ArrowLeft') next = (index + links.length - 1) % links.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = links.length - 1;
      if (next !== undefined) { event.preventDefault(); links[next].focus(); go(next); }
    });
  });
  story.querySelectorAll('[data-jr-go]').forEach(button => {
    button.addEventListener('click', () => go(Number(button.dataset.jrGo), true));
  });
  // User gestures interrupt a manual smooth-scroll immediately.
  const interrupt = () => { manualTarget = null; queueUpdate(); };
  addEventListener('wheel', interrupt, { passive: true });
  addEventListener('touchstart', interrupt, { passive: true });
  addEventListener('keydown', event => {
    if (['PageDown', 'PageUp', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) interrupt();
  });
  addEventListener('scroll', queueUpdate, { passive: true });
  addEventListener('resize', queueUpdate, { passive: true });
  desktop.addEventListener('change', layout);
  story.classList.add('jr-enhanced');
  activate(0);
  layout();
})();
