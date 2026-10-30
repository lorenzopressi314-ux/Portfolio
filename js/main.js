/* Logica condivisa da index.html e project.html */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const escapeHTML = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Copertina astratta generata dalla palette del progetto (usata se manca `cover`)
function generatedCover(project, variant = 0) {
  const [a, b, c] = project.palette;
  const seed = [...project.slug].reduce((n, ch) => n + ch.charCodeAt(0), 0) + variant * 7;
  const shapes = [
    `<circle cx="${280 + (seed % 120)}" cy="${170 + (seed % 60)}" r="${120 + (seed % 50)}" fill="${b}"/>
     <rect x="${60 + (seed % 80)}" y="${260 - (seed % 40)}" width="260" height="140" rx="70" fill="${c}"/>`,
    `<rect x="80" y="70" width="${220 + (seed % 90)}" height="${220 + (seed % 60)}" fill="${b}" transform="rotate(${seed % 30 - 15} 300 225)"/>
     <circle cx="${420 - (seed % 60)}" cy="320" r="80" fill="${c}"/>`,
    `<path d="M0 ${300 - (seed % 60)} Q 300 ${80 + (seed % 90)} 600 ${280 + (seed % 50)} L600 450 L0 450Z" fill="${b}"/>
     <circle cx="${150 + (seed % 200)}" cy="140" r="60" fill="${c}"/>`,
  ];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
    <rect width="600" height="450" fill="${a}"/>${shapes[seed % shapes.length]}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const coverOf = (p) => p.cover || generatedCover(p);

function renderFooter() {
  const footer = $("#footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container footer-inner">
      <p>© ${new Date().getFullYear()} ${escapeHTML(SITE.name)}</p>
      <ul class="socials">
        ${SITE.socials.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHTML(s.label)}</a></li>`).join("")}
      </ul>
      <a href="#top" class="back-top">Torna su ↑</a>
    </div>`;
}

function setupHeader() {
  $$("[data-site-name]").forEach((el) => (el.textContent = SITE.name));
  const header = $(".site-header");
  const toggle = $(".nav-toggle");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
    });
    $$(".nav a").forEach((a) =>
      a.addEventListener("click", () => {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", false);
      })
    );
  }
}

function setupReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) return items.forEach((el) => el.classList.add("visible"));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Home ---------- */

function projectCard(p, i) {
  return `
    <a class="card reveal" href="project.html?p=${encodeURIComponent(p.slug)}" style="--d:${(i % 2) * 80}ms" data-cats="${p.categories.join("|")}">
      <div class="card-media"><img src="${coverOf(p)}" alt="Copertina del progetto ${escapeHTML(p.title)}" loading="lazy"></div>
      <div class="card-meta">
        <h3>${escapeHTML(p.title)}</h3>
        <span>${p.year}</span>
      </div>
      <p class="card-tags">${p.categories.map(escapeHTML).join(" · ")}</p>
    </a>`;
}

function renderHome() {
  $("#hero-role").textContent = `${SITE.role} — ${SITE.location}`;
  $("#hero-intro").textContent = SITE.intro;
  $("#availability").hidden = !SITE.available;

  // Filtri
  const cats = ["Tutti", ...new Set(PROJECTS.flatMap((p) => p.categories))];
  const filters = $("#filters");
  filters.innerHTML = cats
    .map((c, i) => `<button type="button" class="chip${i === 0 ? " active" : ""}" data-filter="${escapeHTML(c)}" aria-pressed="${i === 0}">${escapeHTML(c)}</button>`)
    .join("");

  const grid = $("#work-grid");
  grid.innerHTML = PROJECTS.map(projectCard).join("");
  $("#work-count").textContent = String(PROJECTS.length).padStart(2, "0");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    $$(".chip", filters).forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });
    const f = btn.dataset.filter;
    $$(".card", grid).forEach((card) => {
      card.hidden = f !== "Tutti" && !card.dataset.cats.split("|").includes(f);
    });
  });

  // About
  $("#about-text").innerHTML = SITE.about.map((t) => `<p>${escapeHTML(t)}</p>`).join("");
  $("#services").innerHTML = SITE.services
    .map((s, i) => `<li class="reveal"><span class="num">${String(i + 1).padStart(2, "0")}</span><div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.text)}</p></div></li>`)
    .join("");
  $("#tools").innerHTML = SITE.tools.map((t) => `<li>${escapeHTML(t)}</li>`).join("");
  $("#experience").innerHTML = SITE.experience
    .map((x) => `<li><span>${escapeHTML(x.years)}</span><strong>${escapeHTML(x.title)}</strong><em>${escapeHTML(x.place)}</em></li>`)
    .join("");

  // Contatti
  const mail = $("#contact-email");
  mail.href = `mailto:${SITE.email}`;
  mail.textContent = SITE.email;
  $("#contact-socials").innerHTML = SITE.socials
    .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHTML(s.label)} ↗</a></li>`)
    .join("");

  const copyBtn = $("#copy-email");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      copyBtn.textContent = "Copiata ✓";
    } catch {
      copyBtn.textContent = "Copia non riuscita";
    }
    setTimeout(() => (copyBtn.textContent = "Copia email"), 2000);
  });
}

/* ---------- Case study ---------- */

function renderProject() {
  const slug = new URLSearchParams(location.search).get("p");
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const main = $("#project");

  if (index === -1) {
    main.innerHTML = `<section class="container not-found"><h1>Progetto non trovato</h1><p><a class="link" href="index.html#lavori">← Torna ai lavori</a></p></section>`;
    return;
  }

  const p = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const gallery = p.gallery?.length ? p.gallery : [generatedCover(p, 1), generatedCover(p, 2)];
  document.title = `${p.title} — ${SITE.name}`;
  document.documentElement.style.setProperty("--accent", p.accent || p.palette[0]);

  main.innerHTML = `
    <header class="container project-head">
      <a class="link back" href="index.html#lavori">← Tutti i lavori</a>
      <p class="eyebrow">${p.categories.map(escapeHTML).join(" · ")}</p>
      <h1 class="display">${escapeHTML(p.title)}</h1>
      <p class="lead">${escapeHTML(p.summary)}</p>
      <dl class="facts">
        <div><dt>Cliente</dt><dd>${escapeHTML(p.client)}</dd></div>
        <div><dt>Ruolo</dt><dd>${escapeHTML(p.role)}</dd></div>
        <div><dt>Anno</dt><dd>${p.year}</dd></div>
      </dl>
    </header>
    <figure class="container project-hero reveal"><img src="${coverOf(p)}" alt="Immagine principale di ${escapeHTML(p.title)}"></figure>
    <section class="container story">
      <div class="reveal"><h2>La sfida</h2><p>${escapeHTML(p.challenge)}</p></div>
      <div class="reveal"><h2>La soluzione</h2><p>${escapeHTML(p.solution)}</p></div>
    </section>
    <section class="container gallery">
      ${gallery.map((src, i) => `<figure class="reveal"><img src="${src}" alt="${escapeHTML(p.title)}, dettaglio ${i + 1}" loading="lazy"></figure>`).join("")}
    </section>
    <section class="container results">
      <h2>Risultati</h2>
      <ul>${p.results.map((r) => `<li class="reveal">${escapeHTML(r)}</li>`).join("")}</ul>
    </section>
    <a class="next-project" href="project.html?p=${encodeURIComponent(next.slug)}">
      <div class="container">
        <span class="eyebrow">Prossimo progetto</span>
        <span class="display">${escapeHTML(next.title)} →</span>
      </div>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  if (document.body.dataset.page === "home") renderHome();
  if (document.body.dataset.page === "project") renderProject();
  renderFooter();
  setupReveal();
});
