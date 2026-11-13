// HabitQuest public site, home page v2: the motion layer. Every text comes from the page
// (data attributes), so one script serves the five languages; nothing moves under reduced motion.
(function () {
  let still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll = voyage: the ship on the top route follows the page.
  let ship = document.getElementById('ship'), wake = document.getElementById('wake');
  let stops = [].slice.call(document.querySelectorAll('.route .stop'));
  function onScroll() {
    let max = document.documentElement.scrollHeight - innerHeight;
    let p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    let x = 3 + p * 94;
    ship.style.left = x + '%'; wake.style.width = x + '%';
    stops.forEach(function (s) { s.classList.toggle('on', parseFloat(s.style.left) <= x + .5); });
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // 2. Hero: a quest gets checked, XP floats up, the counters move.
  let q = document.getElementById('quest');
  let quests = JSON.parse(q.dataset.quests);
  let qi = 0;
  let qn = document.getElementById('qname'), qg = document.getElementById('qgain'), xf = document.getElementById('xpf');
  function cycle() {
    q.classList.add('done'); xf.textContent = '+' + quests[qi][1] + ' XP';
    xf.classList.remove('go'); void xf.offsetWidth; xf.classList.add('go');
    setTimeout(function () {
      qi = (qi + 1) % quests.length; q.classList.remove('done');
      qn.textContent = quests[qi][0]; qg.textContent = '+' + quests[qi][1] + ' XP';
    }, 2200);
  }
  if (!still) { setTimeout(cycle, 900); setInterval(cycle, 3600); }

  // 3. Reveal below-the-fold blocks as they come in (everything is visible without script).
  let rv = [].slice.call(document.querySelectorAll('.rv'));
  let once = {};
  function enter(el) {
    el.classList.remove('wait');
    if (el.contains(document.getElementById('bosscard')) && !once.boss) { once.boss = 1; fight(); }
  }
  if ('IntersectionObserver' in window && !still) {
    rv.forEach(function (el, i) {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('wait'); el.style.transitionDelay = (i % 4) * 90 + 'ms'; }
    });
    let io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { enter(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    rv.forEach(function (el) { io.observe(el); });
    setTimeout(function () { rv.forEach(function (el) { el.classList.remove('wait'); }); }, 4000);
  }

  // 4. The boss of the week takes hits (10 per quest, as in the app) down to 39 %.
  let bc = document.getElementById('bosscard'), unit = bc.dataset.unit, hp = 147, target = 57;
  function fight() {
    let bar = document.getElementById('hpbar'), txt = document.getElementById('hptext'), sp = document.getElementById('bsprite'), dmg = document.getElementById('dmg');
    if (still) { hp = target; bar.style.width = Math.round(hp / 147 * 100) + '%'; txt.textContent = hp + ' / 147 ' + unit; return; }
    let t = setInterval(function () {
      hp = Math.max(target, hp - 10);
      bar.style.width = Math.round(hp / 147 * 100) + '%'; txt.textContent = hp + ' / 147 ' + unit;
      sp.classList.remove('hit'); void sp.offsetWidth; sp.classList.add('hit');
      dmg.classList.remove('go'); void dmg.offsetWidth; dmg.classList.add('go');
      if (hp <= target) clearInterval(t);
    }, 520);
  }
  if (!('IntersectionObserver' in window) || still) fight();

  // 5. Live moments when sections come into view: duel strikes, leagues light up, the stamp lands.
  if ('IntersectionObserver' in window) {
    let live = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('live');
        if (e.target.id === 'duel' && !still) {
          [].slice.call(document.querySelectorAll('#leagues span')).forEach(function (s, i) { setTimeout(function () { s.classList.add('lit'); }, 300 + i * 260); });
        }
        if (e.target.id === 'duel' && still) [].slice.call(document.querySelectorAll('#leagues span')).forEach(function (s) { s.classList.add('lit'); });
        live.unobserve(e.target);
      });
    }, { threshold: .35 });
    [document.getElementById('duel'), document.getElementById('pass')].forEach(function (el) { live.observe(el); });
  }

  // 6. The three lurking bosses: tap to unmask.
  [].slice.call(document.querySelectorAll('.shadow')).forEach(function (b) {
    b.addEventListener('click', function () { b.classList.toggle('seen'); });
  });

  // 7. Phones lean toward the pointer (desktop only).
  if (!still && window.matchMedia('(hover: hover)').matches) {
    [].slice.call(document.querySelectorAll('.tilt')).forEach(function (ph) {
      ph.addEventListener('pointermove', function (ev) {
        let r = ph.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width - .5, y = (ev.clientY - r.top) / r.height - .5;
        ph.style.transform = 'perspective(700px) rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-4px)';
      });
      ph.addEventListener('pointerleave', function () { ph.style.transform = ''; });
    });
  }

  // 9. The blue band: a boat crosses it while it scrolls by.
  let band = document.getElementById('band'), sailer = document.getElementById('sailer');
  function sail() {
    let r = band.getBoundingClientRect();
    let t = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
    let x = 6 + t * 88;
    sailer.style.left = x + '%';
  }
  addEventListener('scroll', sail, { passive: true }); sail();

  // 10. Premium counter: the button follows the chosen plan.
  let counter = document.getElementById('counter');
  let labels = JSON.parse(counter.dataset.labels);
  counter.addEventListener('change', function () {
    let v = counter.querySelector('input:checked').value, l = labels[v];
    document.getElementById('gobtn').textContent = l[0];
    let li = document.querySelectorAll('#sure li'); li[0].textContent = l[1]; li[1].textContent = l[2];
  });
  // C: the chest opens when it comes into view
  if ('IntersectionObserver' in window) {
    let vo = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('open'); }); }, { threshold: .3 });
    vo.observe(document.getElementById('vault'));
  }

})();
