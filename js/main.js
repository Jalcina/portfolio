(() => {
  const EN = {
    skip: 'Skip to content',
    avail: 'Looking for work',
    cta_mail: 'Get in touch', cta_cv: 'View CV', cert_cap: 'Galactic Problem Solver · NASA Space Apps Challenge 2026 (14–15 Nov 2026). Click to view it full size.',
    l_certalt: 'Galactic Problem Solver certificate awarded to Jaime Alcina, NASA Space Apps Challenge 2026',
    l_nav: 'Sections', l_tabs: 'Production websites', l_tags: 'Technologies',
    l_jx: 'JaPax on GitHub', l_jxalt: 'Screenshot of the JaPax simulator: Touch to burn tab with the Earth, ISS and Lunar base environment selector',
    l_live: 'Live view of ', l_shot: 'Screenshot of ',
    role: 'Developer · Founder of thisweb.es · Seville',
    chip1: 'Space Apps 2026', chip2: 'Founder of thisweb.es',
    f_loc: 'Location', f_locv: 'Seville, Spain', f_co: 'Company', f_cov: 'thisweb.es, since 2025', f_edu: 'Studies', f_eduv: 'Higher Technician in DAM (in progress)', f_lang: 'Languages', s6v: 'Native Spanish and Portuguese, English B2',
    l_portrait: 'Portrait of Jaime Alcina Urdiales', l_jxlogo: 'JaPax logo, Space Fire Safety',
    l_shothome: 'JaPax home page: “Know what to protect, before the fire decides” with the logo and NASA archive figures',
    l_shotrank: 'JaPax investigation ranking with score bars per criterion', l_orglogo: 'thisweb.es logo',
    fcc_tl: 'freeCodeCamp · HTML5 and CSS3',
    l_tel: 'Phone',
    c_head: 'Let’s talk', fcc_s: 'freeCodeCamp · 2025 · HTML5 and CSS3', j_cta: 'See the code on GitHub',
    pitch: 'I put software into production: websites and systems for real businesses, automations, and a fire simulator for the NASA Space Apps Challenge.',
    n_about: 'About', n_projects: 'Projects', n_exp: 'Experience', n_edu: 'Education', n_contact: 'Contact',
    about1: 'I am 19 and, since 2025, I have worked as a freelance developer with my own company: I build and deploy software end to end. I founded <a href="https://thisweb.es" rel="noopener">thisweb.es</a>, where I work out what a business needs and deliver it working: logic, database, server and domain.',
    about2: 'Today I have seven systems in production with returning clients, a prospecting automation that runs by itself every day, and a NASA project built at a hackathon. I am studying the Higher Technician degree in Multiplatform App Development (DAM) to broaden my base in programming, databases and networks.',
    about3: 'I speak Spanish and Portuguese natively and English at B2 level. I am a developer and I am open to any kind of job within the tech sector.',
    j_badge: 'Galactic Problem Solver · NASA Space Apps Challenge 2026',
    j_body: 'A 3D simulator that turns 30 years of NASA combustion experiments into answers about what burns first in a lunar base. Touch a component, start a fire and watch it spread between the parts of a spacesuit, the ISS or a lunar module. Every datum cites its source (PSI ID and DOI) and is labelled measured, predicted or estimated.',
    j_role: 'My role: lead developer, together with Pablo.',
    j_meta: 'Team of 2 · Seville hackathon, “Flame in Freefall” challenge · 14–15 Nov 2026',
    b_title: 'My websites in production, live',
    b_intro: 'These are not screenshots: they are real sites in production. Pick a tab, activate it and use the site inside the window.',
    b_live: 'Live', b_static: 'Screenshot', b_open: 'Open in a new tab',
    b_start: 'Activate live view',
    b_blocked: 'This shop blocks embedded viewing for security. Open it in a new tab.',
    b_note: 'Besides these six sites there is a seventh system for a private client (byqkda.com).',
    d_thisweb: 'My web development company: the site that presents my services.',
    d_inmo: 'Website for a local real estate agency in El Puerto de Santa María, with a free home valuation form.',
    d_cons: 'Website for a construction and renovation company in El Puerto de Santa María (Cádiz), with a quote request.',
    d_seg: 'Website for an insurance agent in El Puerto de Santa María, with direct call and WhatsApp contact.',
    d_arte: 'Online print shop with orders from home and in-store pickup: copies, vinyl, T-shirts and cards.',
    d_tienda: 'Online musical instrument shop with more than 17,000 products.',
    e1_when: '2025 – today',
    e1_t: 'Founder · Software development and automation',
    e1_d: 'Complete, autonomous development: requirements, architecture, implementation and deployment. Seven systems in production with returning clients and active maintenance. Includes an automated prospecting system that runs every day with no manual intervention, plus scripts and API integrations.',
    e2_when: '2024 – today',
    e2_t: 'Content creator and digital entrepreneur', e2_org: '· personal brand',
    e2_d: 'I create and run my own digital community of more than 2,000 members with more than 100,000 total visits, and earn monthly income selling my own digital products.',
    e3_t: 'Waiter and customer service',
    e3_d: 'Service in a restaurant and at private catering events, in high-pressure settings with direct contact with customers.',
    ed1_when: '2026 – today',
    ed1_t: 'Higher Technician in Multiplatform Application Development (DAM)',
    ed1_o: 'Seville Chamber of Commerce Campus',
    ed2_when: 'Nov 2026',
    ed2_o: 'NASA Space Apps Challenge 2026 · certificate for outstanding participation',
    ed4_t: 'Upper secondary school',
    s_title: 'Tools',
    s_more: 'I also work with XML, SSH, FTP, DNS, APIs, relational and non-relational databases, scripting and process automation.',
    c_text: 'I am a developer and I am open to any kind of job within the tech sector. If it fits, write to me.',
    foot: 'Designed and coded by me with HTML, CSS and JavaScript, no frameworks.'
  };
  const ES_EXTRA = {
    l_live: 'Vista en vivo de ', l_shot: 'Captura de ',
    b_live: 'En vivo', b_static: 'Captura',
    d_thisweb: 'Mi empresa de desarrollo web: la web que presenta mis servicios.',
    d_inmo: 'Web de una inmobiliaria local de El Puerto de Santa María, con formulario de valoración gratuita de viviendas.',
    d_cons: 'Web de una constructora y empresa de reformas de El Puerto de Santa María (Cádiz), con solicitud de presupuesto.',
    d_seg: 'Web de un agente de seguros de El Puerto de Santa María, con contacto directo por llamada y WhatsApp.',
    d_arte: 'Imprenta online con pedidos desde casa y recogida en tienda: copias, vinilos, camisetas y tarjetas.',
    d_tienda: 'Tienda online de instrumentos musicales con más de 17.000 productos.'
  };
  const DESC = { es: document.querySelector('meta[name="description"]').content, en: 'Portfolio of Jaime Alcina Urdiales, a developer in Seville and founder of thisweb.es. Websites and systems in production, automations and JaPax, a lunar-base fire simulator (NASA Space Apps 2026).' };
  const TITLE = { es: 'Jaime Alcina Urdiales · Programador · Sevilla', en: 'Jaime Alcina Urdiales · Developer · Seville' };

  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const ES = { ...ES_EXTRA };
  nodes.forEach(n => { ES[n.dataset.i18n] = n.innerHTML; });
  const attrEls = [...document.querySelectorAll('[data-i18n-attrs]')];
  attrEls.forEach(el => el.dataset.i18nAttrs.split(';').forEach(pair => { const [a, k] = pair.split(':'); ES['__' + k] = el.getAttribute(a); }));
  let lang = 'es';

  const $ = id => document.getElementById(id);
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const viewport = $('viewport'), frame = $('frame'), poster = $('poster'), start = $('start'), blocked = $('blocked');
  const urlEl = $('url'), openEl = $('open'), stateEl = $('state'), nameEl = $('site-name'), descEl = $('site-desc');
  let current = tabs[0];
  let activated = false;
  let frameReady = false;

  const t = k => (lang === 'en' ? EN : ES)[k];

  function applyLang(l) {
    lang = l;
    nodes.forEach(n => { const v = t(n.dataset.i18n); if (v !== undefined) n.innerHTML = v; });
    attrEls.forEach(el => el.dataset.i18nAttrs.split(';').forEach(pair => { const [a, k] = pair.split(':'); const v = l === 'en' ? EN[k] : ES['__' + k]; if (v !== undefined) el.setAttribute(a, v); }));
    document.documentElement.lang = l;
    document.title = TITLE[l];
    document.querySelector('meta[name="description"]').content = DESC[l];
    poster.alt = t('l_shot') + current.textContent;
    frame.title = t('l_live') + current.textContent;
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    try { localStorage.setItem('lang', l); } catch (e) {}
    renderMeta();
  }

  function renderMeta() {
    const live = current.dataset.live === '1' && frameReady;
    nameEl.textContent = current.textContent;
    descEl.dataset.i18n = 'd_' + current.dataset.site;
    descEl.innerHTML = t('d_' + current.dataset.site);
    const label = stateEl.querySelector('span');
    label.dataset.i18n = live ? 'b_live' : 'b_static';
    label.innerHTML = t(live ? 'b_live' : 'b_static');
    stateEl.classList.toggle('is-static', !live);
  }

  function loadFrame() {
    start.hidden = true;
    viewport.classList.remove('is-idle');
    frame.classList.remove('is-ready');
    frame.hidden = false;
    frameReady = false; renderMeta();
    frame.onload = () => { frame.classList.add('is-ready'); frameReady = true; poster.setAttribute('aria-hidden', 'true'); renderMeta(); };
    frame.src = current.dataset.url;
  }

  const tabList = document.querySelector('.tabs');
  let ready = false;
  function reveal(tab) {
    if (!ready) return;
    const l = tab.offsetLeft, r = l + tab.offsetWidth;
    if (l < tabList.scrollLeft) tabList.scrollLeft = l - 8;
    else if (r > tabList.scrollLeft + tabList.clientWidth - 40) tabList.scrollLeft = r - tabList.clientWidth + 48;
  }

  function select(tab, focus) {
    current = tab;
    tabs.forEach(b => {
      const on = b === tab;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
    });
    viewport.setAttribute('aria-labelledby', tab.id);
    urlEl.textContent = tab.dataset.url;
    openEl.href = tab.dataset.url;
    poster.src = tab.dataset.poster;
    poster.alt = t('l_shot') + tab.textContent;
    frameReady = false; poster.removeAttribute('aria-hidden');
    frame.title = t('l_live') + tab.textContent;
    frame.classList.remove('is-ready');
    frame.hidden = true;
    frame.removeAttribute('src');
    renderMeta();
    if (tab.dataset.live === '0') {
      start.hidden = true; blocked.hidden = false;
      viewport.classList.remove('is-idle');
    } else {
      blocked.hidden = true;
      if (activated) { loadFrame(); }
      else { start.hidden = false; viewport.classList.add('is-idle'); }
    }
    reveal(tab);
    if (focus) tab.focus();
  }

  tabs.forEach((b, i) => {
    b.addEventListener('click', () => select(b, false));
    b.addEventListener('keydown', e => {
      let n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') n = tabs[0];
      else if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); tabs.forEach(x => { x.tabIndex = x === n ? 0 : -1; }); n.focus(); reveal(n); }
    });
  });
  start.addEventListener('click', () => { activated = true; loadFrame(); viewport.focus({ preventScroll: true }); });
  select(tabs[0], false);
  ready = true;
  tabList.scrollLeft = 0;
  window.addEventListener('load', () => { tabList.scrollLeft = 0; });
  tabList.addEventListener('scroll', () => tabList.classList.toggle('is-scrolled', tabList.scrollLeft > 4), { passive: true });

  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const initial = saved || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
  if (initial !== 'es') applyLang(initial);

  // Navegación: línea de la sección activa
  const links = [...document.querySelectorAll('[data-nav]')];
  const setActive = id => links.forEach(a => {
    if (a.dataset.nav === id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
  setActive('');
  window.addEventListener('scroll', () => { if (innerHeight + scrollY >= document.body.scrollHeight - 4) setActive('contact'); }, { passive: true });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    document.querySelectorAll('main .sec').forEach(s => io.observe(s));
  }
})();
