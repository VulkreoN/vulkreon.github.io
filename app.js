// Hakim Redjem — portfolio v4
// Bilingual content + rendering. No build step: plain script for GitHub Pages.

const I18N = {
  nav: {
    experience: { fr: "Expériences", en: "Experience" },
    projects:   { fr: "Projets",     en: "Projects" },
    skills:     { fr: "Compétences", en: "Skills" },
    education:  { fr: "Formation",   en: "Education" },
    contact:    { fr: "Me contacter", en: "Contact me" },
  },
  hero: {
    available:    { fr: "Disponible immédiatement — recherche un CDI", en: "Available now — looking for a permanent role" },
    role:         { fr: "Développeur <em>Full-Stack / IA</em>, Toulouse.", en: "<em>Full-Stack / AI</em> developer, Toulouse." },
    pitch:        {
      fr: "Formé à EPITECH, passé par la R&D IA (Medinbox) et le développement full-stack (BPCE-IT). Je construis des applications de bout en bout, au plus près des équipes métier.",
      en: "Trained at EPITECH, with experience in AI R&D (Medinbox) and full-stack development (BPCE-IT). I build applications end to end, working closely with business teams.",
    },
    cta_projects: { fr: "Voir mes projets", en: "See my projects" },
    cta_cv:       { fr: "Télécharger le CV", en: "Download résumé" },
  },
  bento: {
    location_label: { fr: "Basé à", en: "Based in" },
    location_sub:   { fr: "Permis B, véhiculé", en: "Driving licence, own car" },
    stack_label:    { fr: "Stack du quotidien", en: "Everyday stack" },
    langs_label:    { fr: "Langues parlées", en: "Spoken languages" },
    fr: { fr: "Français", en: "French" }, fr_level: { fr: "natif", en: "native" },
    en: { fr: "Anglais",  en: "English" },
    es: { fr: "Espagnol", en: "Spanish" },
    ja: { fr: "Japonais", en: "Japanese" }, ja_level: { fr: "conversationnel", en: "conversational" },
    mob_label: { fr: "Mobilité", en: "Mobility" },
    mob_value: { fr: "Partout", en: "Anywhere" },
    mob_sub:   { fr: "sur site, hybride ou full remote — prêt à déménager", en: "on-site, hybrid or fully remote — happy to relocate" },
    ai_label:  { fr: "IA appliquée", en: "Applied AI" },
    ai_value:  { fr: "Whisper fine-tuné", en: "Fine-tuned Whisper" },
    ai_sub:    { fr: "pipeline présenté à l'ARCH Symposium 2024", en: "pipeline presented at ARCH Symposium 2024" },
    cg_value:  { fr: "Mentions « Honneurs »", en: "Honours distinctions" },
  },
  experience: {
    title: { fr: "Expériences", en: "Experience" },
    lead:  { fr: "Trois expériences, trois contextes : R&D IA en santé, enseignement, et outillage interne dans la banque.", en: "Three roles, three contexts: AI R&D in healthcare, teaching, and internal tooling in banking." },
    items: [
      {
        company: "Medinbox, Toulouse",
        period: { fr: "Avril – août 2023", en: "April – August 2023" },
        role:   { fr: "Stagiaire R&D Intelligence Artificielle", en: "AI Research & Development Intern" },
        bullets: {
          fr: [
            "Conception d'un pipeline Python (PyTorch, fine-tuning du modèle Whisper) pour transcrire et indexer automatiquement des vidéos médicales et réduire le travail manuel.",
            "Développement full-stack de l'interface web (ASP.NET / Angular) qui expose le pipeline, service conteneurisé avec Docker.",
            "Intégration d'un chatbot spécialisé à l'interface, présenté à l'ARCH Symposium 2024.",
            "Travail en équipe : revues de code, suivi des tickets GitLab.",
          ],
          en: [
            "Built a Python pipeline (PyTorch, fine-tuning of Whisper) to automatically transcribe and index medical videos and cut down on manual work.",
            "Developed the full-stack web interface (ASP.NET / Angular) exposing the pipeline, with the service running in Docker.",
            "Added a specialised chatbot to the interface, presented at the ARCH Symposium 2024.",
            "Team work with code reviews and GitLab issue tracking.",
          ],
        },
        tags: ["Python", "PyTorch", "Whisper", "ASP.NET", "Angular", "Docker"],
      },
      {
        company: "ISEG, Toulouse",
        period: { fr: "Mars – avril 2023", en: "March – April 2023" },
        role:   { fr: "Formateur développement web", en: "Web development instructor" },
        bullets: {
          fr: ["Encadrement d'un groupe d'étudiants pendant un code camp intensif (HTML, CSS, PHP, SQL) jusqu'à la livraison de leur propre plateforme e-commerce."],
          en: ["Supervised a group of students during an intensive code camp (HTML, CSS, PHP, SQL) until they delivered their own e-commerce platform."],
        },
        tags: ["HTML", "CSS", "PHP", "SQL"],
      },
      {
        company: "BPCE-IT, Toulouse",
        period: { fr: "Juillet – décembre 2021", en: "July – December 2021" },
        role:   { fr: "Stagiaire développeur Full-Stack C#", en: "Full-Stack C# Developer Intern" },
        bullets: {
          fr: [
            "Développement en autonomie de l'outil interne « Power10 » (C# / .NET), utilisé par le support IT niveau 1 et 2.",
            "Intégration des API ServiceNow, AirWatch, Windows AD et SharePoint ; échanges avec les utilisateurs pour recueillir leurs besoins.",
            "Rédaction des documentations technique et utilisateur.",
          ],
          en: [
            "Developed the internal tool “Power10” (C# / .NET) on my own; used daily by level 1 and 2 IT support.",
            "Integrated the ServiceNow, AirWatch, Windows AD and SharePoint APIs; gathered requirements directly from users.",
            "Wrote the technical and user documentation.",
          ],
        },
        tags: ["C#", ".NET", "WPF", "ServiceNow", "SharePoint"],
      },
    ],
  },
  projects: {
    title: { fr: "Projets", en: "Projects" },
    lead:  { fr: "Du produit en production aux projets d'école qui m'ont appris le bas niveau.", en: "From a product in production to the school projects that taught me the low-level stuff." },
    live:  { fr: "En production", en: "In production" },
    visit: { fr: "Voir le site", en: "Visit the site" },
    code:  { fr: "Code source", en: "Source code" },
    video: { fr: "Vidéo", en: "Video" },
    items: [
      {
        name: "EVA Scrim Manager", year: "2025 – 2026", featured: true, badge: "live",
        desc: {
          fr: "Plateforme multi-tenant pour les communautés EVA France : un bot Discord (slash commands, annonces, auto-modération, rappels) et un dashboard web React + API Express, le tout derrière une authentification Discord OAuth2. Chaque salle a son sous-domaine et sa base de données isolée, servis par une seule instance déployée via Docker vers un registry.",
          en: "Multi-tenant platform for EVA France communities: a Discord bot (slash commands, announcements, auto-mod, reminders) plus a React dashboard with an Express API, all behind Discord OAuth2. Each arena gets its own subdomain and isolated database, served by a single instance deployed through Docker to a registry.",
        },
        tags: ["TypeScript", "Node.js", "Express", "React", "MongoDB", "Discord.js", "OAuth2", "Docker"],
        links: [{ kind: "visit", href: "https://toulouse.evascrim.com" }],
        arch: true,
      },
      {
        name: "Job Tracker", year: "2025", wide: true,
        desc: {
          fr: "Suivi de candidatures en Angular 20 + API .NET, base PostgreSQL, le tout orchestré avec Docker Compose derrière un reverse proxy nginx.",
          en: "Job application tracker built with Angular 20 and a .NET API over PostgreSQL, orchestrated with Docker Compose behind an nginx reverse proxy.",
        },
        tags: ["Angular", ".NET", "PostgreSQL", "Docker", "nginx"],
        links: [],
      },
      {
        name: "AREA", year: "2023", wide: true,
        desc: {
          fr: "Architecture microservices conteneurisée avec un moteur de triggers / actions entre services tiers (Spotify, GitHub…). Projet EPITECH.",
          en: "Containerised microservices architecture with a trigger / action engine connecting third-party services (Spotify, GitHub…). EPITECH project.",
        },
        tags: ["TypeScript", "Express", "React", "MongoDB", "Docker"],
        links: [{ kind: "code", href: "https://github.com/VulkreoN/Area" }],
      },
      {
        name: "Laval Game Jam", year: "2022", badge: "award",
        desc: {
          fr: "RPG en réalité mixte sur HoloLens 2, développé en 48 h sur le thème de l'accessibilité : sorts lancés au regard, aux gestes et à la voix. 1ᵉʳ prix.",
          en: "Mixed-reality RPG on HoloLens 2 built in 48 h on the theme of accessibility: spells cast with gaze, gestures and voice. 1st prize.",
        },
        tags: ["Unity", "C#", "HoloLens 2", "MRTK"],
        links: [{ kind: "code", href: "https://github.com/VulkreoN/Laval-Game-Jam" }, { kind: "video", href: "https://youtu.be/0iO2uH7ddG0" }],
      },
      {
        name: "R-Type", year: "2022",
        desc: {
          fr: "Shoot-em-up coopératif à 4 joueurs en C++ : moteur ECS maison et protocole réseau UDP.",
          en: "Four-player co-op shoot-em-up in C++: homemade ECS engine and UDP networking.",
        },
        tags: ["C++", "Réseau", "SFML"],
        links: [{ kind: "code", href: "https://github.com/VulkreoN/R-Type" }],
      },
      {
        name: "Arcade", year: "2021",
        desc: {
          fr: "Borne d'arcade logicielle en C++ : jeux et bibliothèques graphiques (SFML, SDL2, ncurses) chargés dynamiquement en .so, interchangeables à chaud.",
          en: "Software arcade machine in C++: games and graphics libraries (SFML, SDL2, ncurses) loaded dynamically as .so and swapped at runtime.",
        },
        tags: ["C++", "dlopen", "SFML", "SDL2"],
        links: [{ kind: "code", href: "https://github.com/VulkreoN/Arcade-Epi" }],
      },
    ],
  },
  skills: {
    title: { fr: "Compétences", en: "Skills" },
    lead:  { fr: "Les outils que j'utilise réellement. En surbrillance, ceux que je pratique au quotidien.", en: "The tools I actually use. Highlighted: the ones I work with daily." },
    groups: [
      { label: { fr: "Langages", en: "Languages" }, core: ["TypeScript", "C#", "Python"], items: ["TypeScript", "JavaScript", "C#", "Python", "C++", "C", "Java", "Rust", "SQL"] },
      { label: { fr: "Backend & API", en: "Backend & APIs" }, core: [".NET / ASP.NET", "Node.js / Express"], items: [".NET / ASP.NET", "Node.js / Express", "REST", "MongoDB", "PostgreSQL", "OAuth2"] },
      { label: { fr: "Frontend", en: "Frontend" }, core: ["React", "Angular"], items: ["React", "Angular", "HTML / CSS", "Three.js"] },
      { label: { fr: "IA & Data", en: "AI & Data" }, core: ["PyTorch", "Whisper"], items: ["PyTorch", "Whisper", "TensorFlow", "OpenCV"] },
      { label: { fr: "DevOps & Cloud", en: "DevOps & Cloud" }, core: ["Docker", "Git"], items: ["Docker", "Git", "GitHub Actions", "Jenkins", "CI/CD", "Azure", "AWS", "Kubernetes (notions)"] },
      { label: { fr: "Tests & méthodes", en: "Testing & practices" }, core: [], items: ["Jest", "Criterion", { fr: "Tests unitaires", en: "Unit testing" }, { fr: "Revues de code", en: "Code reviews" }, "GitLab issues"] },
    ],
  },
  education: {
    title: { fr: "Formation", en: "Education" },
    lead:  { fr: "Cinq ans de pédagogie par projets, un semestre à Tokyo, et un diplôme d'ingénieur en cours de validation.", en: "Five years of project-based learning, a semester in Tokyo, and an engineering degree being validated." },
    items: [
      { school: "CESI", period: { fr: "En cours", en: "In progress" }, degree: { fr: "Diplôme d'ingénieur par VAE", en: "Engineering degree through VAE" }, body: { fr: "Validation des acquis de l'expérience.", en: "Validation of prior experience." }, current: true },
      { school: "EPITECH Toulouse", period: "2020 – 2025", degree: { fr: "Bachelor + cycle ingénieur (5ᵉ année)", en: "Bachelor + engineering cycle (5th year)" }, body: { fr: "Cursus intensif par projets : C, C++, systèmes, réseau, puis web, mobile et IA.", en: "Intensive project-based programme: C, C++, systems, networking, then web, mobile and AI." } },
      { school: "Shibaura Institute of Technology, Tokyo", period: "2023 – 2024", degree: { fr: "Échange universitaire", en: "University exchange" }, body: { fr: "Un an au Japon : cours d'ingénierie en anglais, immersion linguistique.", en: "A year in Japan: engineering courses in English, language immersion." } },
    ],
  },
  contact: {
    title: { fr: "On en parle ?", en: "Let's talk." },
    lead:  { fr: "Je suis disponible immédiatement, où que soit le poste. Un mail suffit.", en: "I'm available right away, wherever the role is. An email is all it takes." },
  },
};

// ---------------------------------------------------------------------------

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const t = (v, lang) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);
const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N);

let lang = (() => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {}
  return navigator.language && navigator.language.startsWith("fr") ? "fr" : "en";
})();

function renderStatic() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = get(el.dataset.i18n);
    if (v !== undefined) el.innerHTML = t(v, lang);
  });
}

function renderExperience() {
  $("#experience-list").innerHTML = I18N.experience.items.map((x) => `
    <li class="xp">
      <div class="xp-when">
        <span class="xp-period">${esc(t(x.period, lang))}</span>
        <span class="xp-company">${esc(x.company)}</span>
      </div>
      <div>
        <h3 class="xp-role">${esc(t(x.role, lang))}</h3>
        <ul class="xp-bullets">${x.bullets[lang].map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        <div class="xp-tags">${x.tags.map((g) => `<span class="tag">${esc(g)}</span>`).join("")}</div>
      </div>
    </li>`).join("");
}

const ARCH = {
  fr: `
    <div class="arch" aria-label="Architecture multi-tenant">
      <div class="arch-row">
        <div class="arch-node">toulouse.evascrim.com</div>
        <div class="arch-node">paris.evascrim.com</div>
        <div class="arch-node">…</div>
      </div>
      <div class="arch-link">↓ DNS wildcard · hostname → tenant</div>
      <div class="arch-row"><div class="arch-node is-hub">Express API + bot Discord<small>une seule instance</small></div></div>
      <div class="arch-link">↓ modèles injectés par tenant</div>
      <div class="arch-row">
        <div class="arch-node">MongoDB<small>toulouse</small></div>
        <div class="arch-node">MongoDB<small>paris</small></div>
        <div class="arch-node">MongoDB<small>…</small></div>
      </div>
    </div>`,
  en: `
    <div class="arch" aria-label="Multi-tenant architecture">
      <div class="arch-row">
        <div class="arch-node">toulouse.evascrim.com</div>
        <div class="arch-node">paris.evascrim.com</div>
        <div class="arch-node">…</div>
      </div>
      <div class="arch-link">↓ wildcard DNS · hostname → tenant</div>
      <div class="arch-row"><div class="arch-node is-hub">Express API + Discord bot<small>single instance</small></div></div>
      <div class="arch-link">↓ per-tenant models injected</div>
      <div class="arch-row">
        <div class="arch-node">MongoDB<small>toulouse</small></div>
        <div class="arch-node">MongoDB<small>paris</small></div>
        <div class="arch-node">MongoDB<small>…</small></div>
      </div>
    </div>`,
};

function renderProjects() {
  const P = I18N.projects;
  $("#projects-list").innerHTML = P.items.map((p) => {
    const cls = ["project", p.featured && "is-featured", p.wide && "is-wide"].filter(Boolean).join(" ");
    const badge = p.badge === "live" ? `<span class="project-badge">● ${t(P.live, lang)}</span>`
                : p.badge === "award" ? `<span class="project-badge is-award">🏆 ${lang === "fr" ? "1ᵉʳ prix" : "1st prize"}</span>` : "";
    const links = p.links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(t(P[l.kind], lang))}</a>`).join("");
    const body = `
      <p class="project-desc">${esc(t(p.desc, lang))}</p>
      ${p.arch ? ARCH[lang] : ""}`;
    return `
      <article class="${cls}">
        <div class="project-head">
          <h3 class="project-name">${esc(p.name)}</h3>
          <span class="project-year">${esc(p.year)}</span>
        </div>
        ${badge}
        ${p.featured ? `<div class="project-body">${body}</div>` : body}
        <div class="project-tags">${p.tags.map((g) => `<span class="tag">${esc(g)}</span>`).join("")}</div>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </article>`;
  }).join("");
}

function renderSkills() {
  $("#skills-list").innerHTML = I18N.skills.groups.map((g) => `
    <div class="skill-group">
      <h3>${esc(t(g.label, lang))}</h3>
      <ul class="skill-list">${g.items.map((s) => {
        const label = t(s, lang);
        return `<li class="${g.core.includes(s) ? "is-core" : ""}">${esc(label)}</li>`;
      }).join("")}</ul>
    </div>`).join("");
}

function renderEducation() {
  $("#education-list").innerHTML = I18N.education.items.map((e) => `
    <li class="${e.current ? "is-current" : ""}">
      <span class="edu-period">${esc(t(e.period, lang))}</span>
      <span class="edu-school">${esc(e.school)}</span>
      <span class="edu-degree">${esc(t(e.degree, lang))}</span>
      <span class="edu-body">${esc(t(e.body, lang))}</span>
    </li>`).join("");
}

function renderAll() {
  document.documentElement.lang = lang;
  document.title = lang === "fr" ? "Hakim Redjem — Développeur Full-Stack / IA" : "Hakim Redjem — Full-Stack / AI Developer";
  $("#cv-link").href = lang === "fr" ? "CV_Hakim_REDJEM_Fullstack_IA_FR.pdf" : "CV_Hakim_REDJEM_Fullstack_AI_EN.pdf";
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
  renderStatic();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
}

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch {}
    renderAll();
  });
});

// Theme: explicit choice wins over the system preference; stored in localStorage.
const themeBtn = $("#theme-toggle");
const systemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
const currentTheme = () => document.documentElement.dataset.theme || (systemDark() ? "dark" : "light");
themeBtn.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});

$("#year").textContent = new Date().getFullYear();
renderAll();
