// HAKIM/OS v3 — hub + 4 dimensions with warp transitions
import { i18n } from "./js/content.js";

const STATE = {
  lang: localStorage.getItem("hr_lang") || "en",
  screen: "hub",
  warping: false,
};
const SCREENS = ["hub", "experience", "projects", "skills", "education"];

// --- helpers ---
const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));
const t = (n) => n == null ? "" : (typeof n === "string" ? n : (n[STATE.lang] ?? n.en ?? n.fr ?? ""));
const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const pad = (n,w=2) => String(n).padStart(w,"0");

// =================================================================
// WARP NAVIGATION
// =================================================================
function warp(to) {
  if (to === STATE.screen || STATE.warping) return;
  STATE.warping = true;

  const out = $(`#screen-${STATE.screen}`);
  const inn = $(`#screen-${to}`);

  $("#warp").classList.add("on");
  $("#warp-scan").classList.add("on");
  $("#warp-flash").classList.add("on");
  out.classList.add("warping-out");

  setTimeout(() => {
    out.classList.remove("active", "warping-out");
    inn.classList.add("active", "warping-in");
    STATE.screen = to;
    updateDock();
    inn.scrollTop = 0;

    setTimeout(() => {
      inn.classList.remove("warping-in");
      $("#warp").classList.remove("on");
      $("#warp-scan").classList.remove("on");
      $("#warp-flash").classList.remove("on");
      STATE.warping = false;
    }, 700);
  }, 350);
}

function updateDock() {
  $$(".dock-btn").forEach(b => b.classList.toggle("active", b.dataset.target === STATE.screen));
}

// =================================================================
// HUB — desktop view
// =================================================================
function renderHub() {
  const h = i18n.home;
  $("#screen-hub").innerHTML = `
    <div class="hub">
      <div class="hub-grid">

        <!-- LEFT: personal info cards -->
        <aside>
          <div class="info-card">
            <div class="info-head">
              <span>// IDENT_001</span>
              <span class="pink">●</span>
            </div>
            <div class="info-row"><span class="k">Name</span><span class="v">Hakim Redjem</span></div>
            <div class="info-row"><span class="k">Role</span><span class="v">${esc(t(h.role)).slice(0,18)}</span></div>
            <div class="info-row"><span class="k">Loc.</span><span class="v pink">Toulouse</span></div>
            <div class="info-row"><span class="k">Born</span><span class="v">02 MAR 2002</span></div>
            <div class="info-row"><span class="k">Status</span><span class="v acid">Open To Work</span></div>
            <div class="info-row"><span class="k">Mode</span><span class="v">Build / Ship</span></div>
          </div>

          <div class="info-card">
            <div class="info-head">
              <span>// SIGNAL_STR</span>
              <span class="pink">~</span>
            </div>
            <div class="now-row"><span>Coffee</span><span>0.92</span></div>
            <div class="info-bar" style="--lvl:92%"></div>
            <div class="now-row"><span>Curiosity</span><span>0.99</span></div>
            <div class="info-bar" style="--lvl:99%"></div>
            <div class="now-row"><span>Bandwidth</span><span>0.78</span></div>
            <div class="info-bar" style="--lvl:78%"></div>
            <div class="now-row"><span>Sleep</span><span>0.31</span></div>
            <div class="info-bar" style="--lvl:31%"></div>
          </div>

          <div class="info-card">
            <div class="info-head">
              <span>// CONTACT</span>
              <span>↳</span>
            </div>
            <div class="contact-list">
              <a href="mailto:${i18n.contact.email}"><span>Email</span><span>↗</span></a>
              <a href="${i18n.contact.github}"   target="_blank" rel="noopener"><span>GitHub</span><span>↗</span></a>
              <a href="${i18n.contact.linkedin}" target="_blank" rel="noopener"><span>LinkedIn</span><span>↗</span></a>
            </div>
          </div>
        </aside>

        <!-- CENTER: avatar + apps -->
        <section class="hub-center">
          <div class="hub-headline">
            <div class="hub-kicker">
              <span class="pink">▸</span>
              <span>HAKIM/OS</span>
              <span class="acid">v.3.0_</span>
              <span>${STATE.lang === "fr" ? "BOOTÉ" : "BOOTED"}</span>
            </div>
            <h1 class="hub-name" data-text="HAKIM REDJEM">HAKIM REDJEM</h1>
            <div class="hub-tag">
              <span>${esc(t(h.role))}</span>
              <span class="pink"> // </span>
              <span>${STATE.lang === "fr" ? "BIENVENUE_DANS_LA_BROUME" : "WELCOME_TO_THE_HAZE"}</span>
            </div>
          </div>

          <div class="avatar-stage">
            <div class="avatar-ring">
              <svg viewBox="0 0 380 380" aria-hidden="true">
                <defs>
                  <pattern id="dot-ring" patternUnits="userSpaceOnUse" width="6" height="6">
                    <circle cx="3" cy="3" r="1.2" fill="#0A0A0A"/>
                  </pattern>
                </defs>
                <circle cx="190" cy="190" r="180" fill="url(#dot-ring)" opacity="0.5"/>
                <circle cx="190" cy="190" r="180" fill="none" stroke="#0A0A0A" stroke-width="1.5" stroke-dasharray="2 4"/>
              </svg>
            </div>
            <div class="avatar-obj">
              ${chromeAvatar()}
            </div>
          </div>

          <div class="apps">
            ${appSticker("01", "experience", i18n.nav.experience[STATE.lang], STATE.lang === "fr" ? "3 monolithes" : "3 monoliths", "experience")}
            ${appSticker("02", "projects",   i18n.nav.projects[STATE.lang],   STATE.lang === "fr" ? "6 éclats"        : "6 shards",     "projects")}
            ${appSticker("03", "skills",     i18n.nav.skills[STATE.lang],     STATE.lang === "fr" ? "pile complète"   : "full stack",   "skills")}
            ${appSticker("04", "education",  i18n.nav.education[STATE.lang],  STATE.lang === "fr" ? "FR // JP"         : "FR // JP",     "education")}
          </div>
        </section>

        <!-- RIGHT: signal + ascii + ticker -->
        <aside>
          <div class="info-card">
            <div class="info-head"><span>// FEED_NOW</span><span class="pink">LIVE</span></div>
            <div class="info-row"><span class="k"><span class="blink-dot"></span>STREAM</span><span class="v acid">ACTIVE</span></div>
            <div class="info-row"><span class="k">LAT</span><span class="v">43.6047 N</span></div>
            <div class="info-row"><span class="k">LON</span><span class="v">+001.4442 E</span></div>
            <div class="info-row"><span class="k">TZ</span><span class="v">+1:00 GMT</span></div>
            <div class="info-row"><span class="k">UA</span><span class="v">HAKIM/3.0</span></div>
            <div class="info-row"><span class="k">CPU</span><span class="v">0.62</span></div>
          </div>

          <div class="info-card">
            <div class="lab-tag">SCAN_ARCHIVE</div>
            <div class="ascii-frame">${asciiPortrait()}</div>
          </div>

          <div class="info-card">
            <div class="info-head"><span>// NOW</span><span>↘</span></div>
            <div class="info-row"><span class="k">${STATE.lang==="fr"?"Lit":"Reading"}</span><span class="v">Pattern Lang.</span></div>
            <div class="info-row"><span class="k">${STATE.lang==="fr"?"Joue":"Playing"}</span><span class="v">B.O.T.W.</span></div>
            <div class="info-row"><span class="k">${STATE.lang==="fr"?"Build":"Building"}</span><span class="v pink">HAKIM/OS</span></div>
            <div class="info-row"><span class="k">${STATE.lang==="fr"?"Veut":"Wants"}</span><span class="v">go back to ⛩</span></div>
          </div>
        </aside>

      </div>
    </div>
  `;

  // wire app stickers
  $$("#screen-hub .app-sticker").forEach(s => {
    s.addEventListener("click", () => warp(s.dataset.target));
  });
}

function appSticker(num, target, name, sub, thumbKind) {
  return `
    <button class="app-sticker" data-target="${target}">
      <div class="ap-num">APP_${num}</div>
      <div class="ap-arrow">▶</div>
      <h3 class="ap-name">${esc(name)}</h3>
      <div class="ap-sub">// ${esc(sub)}</div>
      <div class="ap-thumb">${appThumb(thumbKind)}</div>
    </button>
  `;
}

function appThumb(kind) {
  switch(kind) {
    case "experience":
      return halftoneThumb("EXP", "#FF1B8C", "#F2EDDC");
    case "projects":
      return ditherThumb("PROJ", "#0A0A0A", "#F2EDDC");
    case "skills":
      return rgbStackThumb("STACK");
    case "education":
      return mapThumb("MAP");
    default: return "";
  }
}

// =================================================================
// CHROME AVATAR — central glossy 3D-feel object (pure SVG)
// =================================================================
function chromeAvatar() {
  return `
    <svg viewBox="0 0 340 340" aria-hidden="true">
      <defs>
        <radialGradient id="chrome-head" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="20%" stop-color="#f0f0f0"/>
          <stop offset="45%" stop-color="#a8a8a8"/>
          <stop offset="55%" stop-color="#3a3a3a"/>
          <stop offset="80%" stop-color="#7a7a7a"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </radialGradient>
        <linearGradient id="chrome-neck" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#999"/>
          <stop offset="50%" stop-color="#222"/>
          <stop offset="100%" stop-color="#999"/>
        </linearGradient>
        <linearGradient id="chrome-shoulder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#cfcfcf"/>
          <stop offset="40%" stop-color="#3a3a3a"/>
          <stop offset="55%" stop-color="#cfcfcf"/>
          <stop offset="100%" stop-color="#222"/>
        </linearGradient>
        <pattern id="halftone-shadow" patternUnits="userSpaceOnUse" width="5" height="5">
          <circle cx="2.5" cy="2.5" r="1.4" fill="#0A0A0A"/>
        </pattern>
        <mask id="head-mask">
          <ellipse cx="170" cy="135" rx="78" ry="92" fill="white"/>
        </mask>
      </defs>

      <!-- shadow ground -->
      <ellipse cx="170" cy="320" rx="100" ry="10" fill="#0A0A0A" opacity="0.25"/>

      <!-- shoulders -->
      <path d="M 50 320 C 80 240, 130 220, 170 220 C 210 220, 260 240, 290 320 Z"
            fill="url(#chrome-shoulder)" stroke="#0A0A0A" stroke-width="2"/>
      <!-- halftone shadow patch on shoulders -->
      <path d="M 50 320 C 80 270, 110 250, 130 250 L 130 320 Z" fill="url(#halftone-shadow)" opacity="0.55"/>

      <!-- neck -->
      <rect x="148" y="200" width="44" height="40" fill="url(#chrome-neck)" stroke="#0A0A0A" stroke-width="2"/>

      <!-- head -->
      <ellipse cx="170" cy="135" rx="78" ry="92" fill="url(#chrome-head)" stroke="#0A0A0A" stroke-width="2.5"/>
      <!-- halftone shadow on head -->
      <g mask="url(#head-mask)">
        <rect x="170" y="60" width="100" height="170" fill="url(#halftone-shadow)" opacity="0.6"/>
      </g>

      <!-- specular highlight -->
      <ellipse cx="140" cy="95" rx="25" ry="14" fill="white" opacity="0.95"/>
      <ellipse cx="195" cy="85" rx="8" ry="4" fill="white" opacity="0.85"/>

      <!-- eyes — minimalist tiny chrome dots -->
      <circle cx="145" cy="140" r="6" fill="#0A0A0A"/>
      <circle cx="143" cy="138" r="1.8" fill="white"/>
      <circle cx="195" cy="140" r="6" fill="#0A0A0A"/>
      <circle cx="193" cy="138" r="1.8" fill="white"/>

      <!-- mouth: little smirk -->
      <path d="M 152 175 Q 170 188, 188 175" stroke="#0A0A0A" stroke-width="2.5" fill="none" stroke-linecap="round"/>

      <!-- chrome chain around neck -->
      <g>
        ${chainPath(70, 220, 270, 240, 8)}
      </g>

      <!-- floating glyph: pink heart sticker -->
      <g transform="translate(245, 175) rotate(15)">
        <path d="M 0 6 C 0 -6 16 -6 8 8 C 4 12, 4 12, 0 16 C -4 12, -4 12, -8 8 C -16 -6, 0 -6, 0 6 Z"
              fill="#FF1B8C" stroke="#0A0A0A" stroke-width="2"/>
      </g>

      <!-- floating glyph: acid green star -->
      <g transform="translate(90, 170) rotate(-15)">
        <polygon points="0,-14 4,-4 14,-4 6,3 9,13 0,7 -9,13 -6,3 -14,-4 -4,-4"
                 fill="#C7FF00" stroke="#0A0A0A" stroke-width="2"/>
      </g>

      <!-- tiny tag bottom right -->
      <g transform="translate(248, 280) rotate(8)">
        <rect x="-30" y="-9" width="60" height="18" fill="#0A0A0A"/>
        <text x="0" y="3" text-anchor="middle" font-family="JetBrains Mono, monospace"
              font-size="9" font-weight="800" fill="#C7FF00" letter-spacing="2">MODEL_3.0</text>
      </g>
    </svg>
  `;
}

function chainPath(x1, y1, x2, y2, count) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const tt = i / (count - 1);
    const x = x1 + (x2 - x1) * tt;
    const y = y1 + (y2 - y1) * tt + Math.sin(tt * Math.PI) * 20;
    out += `<circle cx="${x}" cy="${y}" r="6" fill="none" stroke="#0A0A0A" stroke-width="2"/>`;
    out += `<circle cx="${x}" cy="${y}" r="5" fill="url(#chrome-neck)"/>`;
  }
  return out;
}

// =================================================================
// THUMB GENERATORS
// =================================================================
function halftoneThumb(text, fg, bg) {
  return `
    <svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="ht-${slug(text)}" patternUnits="userSpaceOnUse" width="6" height="6">
          <rect width="6" height="6" fill="${fg}"/>
          <circle cx="3" cy="3" r="2.5" fill="${bg}"/>
        </pattern>
      </defs>
      <rect width="320" height="130" fill="${fg}"/>
      <circle cx="80"  cy="65" r="55" fill="${bg}"/>
      <circle cx="220" cy="40" r="30" fill="${bg}"/>
      <rect width="320" height="130" fill="url(#ht-${slug(text)})" opacity="0.7"/>
      <text x="50%" y="55%" text-anchor="middle" font-family="Major Mono Display, monospace"
            font-size="34" font-weight="800" fill="${fg}" style="paint-order:stroke" stroke="${bg}" stroke-width="6"
            letter-spacing="0.02em">${esc(text)}</text>
    </svg>
  `;
}
function ditherThumb(text, fg, bg) {
  return `
    <svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="dt-${slug(text)}" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill="${bg}"/>
          <rect x="0" y="0" width="1" height="1" fill="${fg}"/>
          <rect x="2" y="2" width="1" height="1" fill="${fg}"/>
        </pattern>
        <radialGradient id="grad-${slug(text)}" cx="35%" cy="35%" r="100%">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="${fg}"/>
        </radialGradient>
      </defs>
      <rect width="320" height="130" fill="url(#grad-${slug(text)})"/>
      <rect width="320" height="130" fill="url(#dt-${slug(text)})" opacity="0.6"/>
      <text x="50%" y="60%" text-anchor="middle" font-family="Major Mono Display, monospace"
            font-size="36" font-weight="800" fill="${fg}" letter-spacing="0.02em">${esc(text)}</text>
    </svg>
  `;
}
function rgbStackThumb(text) {
  return `
    <svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="130" fill="#F2EDDC"/>
      <g font-family="Major Mono Display, monospace" font-size="44" font-weight="800" text-anchor="middle" letter-spacing="0.02em">
        <text x="160" y="80" fill="#FF1B8C" transform="translate(-5 2)">${esc(text)}</text>
        <text x="160" y="80" fill="#C7FF00" transform="translate(5 -2)">${esc(text)}</text>
        <text x="160" y="80" fill="#0A0A0A">${esc(text)}</text>
      </g>
      <g stroke="#0A0A0A" stroke-width="0.8" opacity="0.5">
        ${Array.from({length: 8}, (_,i) => `<line x1="0" y1="${i*16+5}" x2="320" y2="${i*16+5}"/>`).join("")}
      </g>
    </svg>
  `;
}
function mapThumb(text) {
  return `
    <svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="130" fill="#F2EDDC"/>
      <defs>
        <pattern id="map-grid" patternUnits="userSpaceOnUse" width="14" height="14">
          <rect width="14" height="14" fill="#F2EDDC"/>
          <circle cx="7" cy="7" r="0.6" fill="#0A0A0A"/>
        </pattern>
      </defs>
      <rect width="320" height="130" fill="url(#map-grid)" opacity="0.6"/>
      <path d="M 30 50 q 20 -20, 60 -10 q 30 5, 50 20 q -10 20, -40 25 q -30 5, -50 0 q -20 -10, -20 -35 z" fill="#0A0A0A" opacity="0.85"/>
      <path d="M 200 30 q 30 -10, 70 10 q 20 20, 0 40 q -30 20, -60 10 q -30 -10, -30 -30 q 5 -25, 20 -30 z" fill="#0A0A0A" opacity="0.85"/>
      <circle cx="240" cy="50" r="8" fill="#FF1B8C" stroke="#0A0A0A" stroke-width="2"/>
      <circle cx="60"  cy="80" r="8" fill="#FF1B8C" stroke="#0A0A0A" stroke-width="2"/>
      <text x="160" y="120" text-anchor="middle" font-family="Major Mono Display, monospace"
            font-size="22" font-weight="800" fill="#0A0A0A">${esc(text)}</text>
    </svg>
  `;
}
function slug(s){ return String(s).replace(/[^a-z0-9]/gi,"").toLowerCase().slice(0,16) || "x"; }

// =================================================================
// ASCII portrait
// =================================================================
function asciiPortrait() {
  return [
    "                              ",
    "           .,**,.             ",
    "       .::ooOO@@@Oo:.         ",
    "      :oO@@@@@@@@@@Oo:        ",
    "    .:O@@@@@@@@@@@@@@O:.      ",
    "   :O@@@@@@@##@@@@@@@@@O:     ",
    "  :@@@@@@@##  ##@@@@@@@@@:    ",
    " :@@@@@@##  oo  ##@@@@@@@@:   ",
    " :@@@@@@##      ##@@@@@@@@:   ",
    "  :@@@@@##      ##@@@@@@@:    ",
    "   :@@@@##  --  ##@@@@@@:     ",
    "    :O@@@@######@@@@@@O:      ",
    "      :O@@@@@@@@@@@@O:        ",
    "        :oO@@@@@@Oo:          ",
    "       *::O@@@@O::*           ",
    "      ##  :OOO:  ##           ",
    "    ####    :    ####         ",
    "                              ",
    "    HAKIM_3.0 // SCAN_001     ",
    "    TYPE: HUMAN/v22           ",
    "    UPDATED: 02 MAR 2026      ",
  ].join("\n");
}

// =================================================================
// EXPERIENCE SCREEN
// =================================================================
function renderExperience() {
  const e = i18n.experience;
  $("#screen-experience").innerHTML = `
    <div class="section">
      <header class="section-head">
        <div>
          <div class="section-kicker">
            <span class="pink">▸</span>
            <span>DIMENSION_02</span>
            <span class="acid">// ${STATE.lang==="fr"?"JOURNAL DE TRAVAIL":"WORK LOG"}</span>
          </div>
          <h2 class="section-title" data-text="${esc(t(e.title))}">${esc(t(e.title))}</h2>
        </div>
        <div class="section-meta">
          <div>${STATE.lang==="fr"?"ENTRÉES":"ENTRIES"} :: <span class="v">${pad(e.items.length,2)}</span></div>
          <div>${STATE.lang==="fr"?"VOL":"VOL"} :: <span class="v">001</span></div>
        </div>
      </header>
      <div class="exp-grid">
        ${e.items.map((it,i)=>`
          <article class="exp-card ${i===0?'open':''}" data-i="${i}">
            <div class="ph">${expPortrait(i)}</div>
            <div>
              <div class="exp-head">
                <div>
                  <div style="display:flex; gap:10px; align-items: baseline;">
                    <span class="exp-no">${pad(i+1,2)}</span>
                    <h3 class="exp-co">${esc(it.company)}</h3>
                  </div>
                  <div class="exp-loc">// ${esc(t(it.location))}</div>
                </div>
                <div class="exp-period">${esc(t(it.period))}</div>
              </div>
              <p class="exp-role">▸ ${esc(t(it.role))}</p>
              <div class="body">
                <ul>${t(it.bullets).map(b => `<li>${esc(b)}</li>`).join("")}</ul>
                <div class="exp-tags">${it.tags.map(tg => `<span class="tag-chip">${esc(tg)}</span>`).join("")}</div>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
  $$("#screen-experience .exp-card").forEach(c => c.addEventListener("click", () => c.classList.toggle("open")));
}

function expPortrait(i) {
  const variants = [
    { fg: "#FF1B8C", bg: "#F2EDDC", glyph: "M" },
    { fg: "#0A0A0A", bg: "#C7FF00", glyph: "I" },
    { fg: "#0A0A0A", bg: "#F2EDDC", glyph: "B" },
  ];
  const v = variants[i % variants.length];
  return `
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="exph-${i}" patternUnits="userSpaceOnUse" width="5" height="5">
          <rect width="5" height="5" fill="${v.fg}"/>
          <circle cx="2.5" cy="2.5" r="2.0" fill="${v.bg}"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="${v.bg}"/>
      <circle cx="100" cy="110" r="80" fill="${v.fg}"/>
      <circle cx="100" cy="110" r="80" fill="url(#exph-${i})" opacity="0.55"/>
      <text x="100" y="135" text-anchor="middle" font-family="Major Mono Display, monospace"
        font-size="100" font-weight="800" fill="${v.bg}">${v.glyph}</text>
    </svg>
  `;
}

// =================================================================
// PROJECTS SCREEN — collage
// =================================================================
function renderProjects() {
  const p = i18n.projects;
  const layout = ["lg", "md", "sm", "sm", "sm", "wd"];
  const treatments = ["halftone-pink", "dither-bw", "rgb-stack", "halftone-acid", "threshold", "halftone-mixed"];
  $("#screen-projects").innerHTML = `
    <div class="section">
      <header class="section-head">
        <div>
          <div class="section-kicker">
            <span class="pink">▸</span>
            <span>DIMENSION_03</span>
            <span class="acid">// COLLAGE</span>
          </div>
          <h2 class="section-title" data-text="${esc(t(p.title))}">${esc(t(p.title))}</h2>
        </div>
        <div class="section-meta">
          <div>${STATE.lang==="fr"?"ÉCLATS":"SHARDS"} :: <span class="v">${pad(p.items.length,2)}</span></div>
          <div>${STATE.lang==="fr"?"TAPER POUR OUVRIR":"TAP TO OPEN"}</div>
        </div>
      </header>
      <div class="proj-collage">
        ${p.items.map((it,i)=>`
          <article class="pcard ${layout[i]}" data-i="${i}">
            <div class="pc-year">${esc(it.year)}</div>
            <div class="pc-thumb">${projThumb(it, treatments[i])}
              <div class="pc-label">SHARD_${pad(i+1,3)}</div>
            </div>
            ${it.award ? `<div class="pc-award">★ ${esc(t(it.award))}</div>` : ""}
            <h3 class="pc-name">${esc(it.name)}</h3>
            <p class="pc-desc">${esc(t(it.desc))}</p>
            <div class="pc-tags">${it.tags.map(tg=>`<span class="tag-chip">${esc(tg)}</span>`).join("")}</div>
            ${it.video ? `<div class="yt"><iframe src="${esc(it.video)}" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>` : ""}
            <a class="pc-out" href="${esc(it.link)}" target="_blank" rel="noopener">${i18n.hud.viewProject[STATE.lang]} →</a>
          </article>
        `).join("")}
      </div>
    </div>
  `;
  $$("#screen-projects .pcard").forEach(c => c.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    c.classList.toggle("open");
  }));
}

function projThumb(it, treatment) {
  const name = it.name.toUpperCase();
  switch(treatment) {
    case "halftone-pink":  return halftoneThumb(name, "#FF1B8C", "#F2EDDC");
    case "dither-bw":      return ditherThumb(name, "#0A0A0A", "#F2EDDC");
    case "rgb-stack":      return rgbStackThumb(name);
    case "halftone-acid":  return halftoneThumb(name, "#C7FF00", "#0A0A0A");
    case "threshold":      return thresholdThumb(name);
    case "halftone-mixed": return mixedThumb(name);
    default: return halftoneThumb(name, "#FF1B8C", "#F2EDDC");
  }
}
function thresholdThumb(text) {
  return `
    <svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="th-${slug(text)}">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="${(text.length*5)%99}"/>
          <feDisplacementMap in="SourceGraphic" scale="10"/>
        </filter>
      </defs>
      <rect width="320" height="130" fill="#F2EDDC"/>
      <g filter="url(#th-${slug(text)})">
        <circle cx="100" cy="65" r="50" fill="#0A0A0A"/>
        <circle cx="220" cy="40" r="28" fill="#0A0A0A"/>
        <rect x="180" y="80" width="120" height="40" fill="#0A0A0A"/>
      </g>
      <text x="50%" y="60%" text-anchor="middle" font-family="Major Mono Display, monospace"
        font-size="32" font-weight="800" fill="#FF1B8C" letter-spacing="0.02em">${esc(text)}</text>
    </svg>
  `;
}
function mixedThumb(text) {
  return `
    <svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="130" fill="#F2EDDC"/>
      <defs>
        <pattern id="mx-${slug(text)}" patternUnits="userSpaceOnUse" width="6" height="6">
          <rect width="6" height="6" fill="#FF1B8C"/>
          <circle cx="3" cy="3" r="2" fill="#F2EDDC"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="160" height="130" fill="url(#mx-${slug(text)})"/>
      <rect x="160" y="0" width="160" height="130" fill="#C7FF00"/>
      <text x="50%" y="55%" text-anchor="middle" font-family="Major Mono Display, monospace"
        font-size="34" font-weight="800" fill="#0A0A0A" letter-spacing="0.02em" style="paint-order: stroke" stroke="#F2EDDC" stroke-width="4">${esc(text)}</text>
    </svg>
  `;
}

// =================================================================
// SKILLS SCREEN
// =================================================================
function renderSkills() {
  const s = i18n.skills;
  $("#screen-skills").innerHTML = `
    <div class="section">
      <header class="section-head">
        <div>
          <div class="section-kicker">
            <span class="pink">▸</span>
            <span>DIMENSION_04</span>
            <span class="acid">// ${STATE.lang==="fr"?"PILE":"STACK"}</span>
          </div>
          <h2 class="section-title" data-text="${esc(t(s.title))}">${esc(t(s.title))}</h2>
        </div>
        <div class="section-meta">
          <div>${STATE.lang==="fr"?"ENTRÉES":"ENTRIES"} :: <span class="v">${pad(s.groups.reduce((a,g)=>a+g.items.length,0),2)}</span></div>
          <div>${STATE.lang==="fr"?"GROUPES":"GROUPS"} :: <span class="v">${pad(s.groups.length,2)}</span></div>
        </div>
      </header>
      <div class="skills-grid">
        ${s.groups.map(g => `
          <section class="sk-card">
            <h3>// <span class="pink">${esc(t(g.label))}</span></h3>
            <div class="sk-list">
              ${g.items.map(k => {
                const lvl = 55 + (k.length * 13) % 45;
                return `<div class="sk-item"><span>${esc(k)}</span><span class="bar" style="--lvl:${lvl}%"></span></div>`;
              }).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </div>
  `;
}

// =================================================================
// EDUCATION SCREEN
// =================================================================
function renderEducation() {
  const e = i18n.education;
  $("#screen-education").innerHTML = `
    <div class="section">
      <header class="section-head">
        <div>
          <div class="section-kicker">
            <span class="pink">▸</span>
            <span>DIMENSION_05</span>
            <span class="acid">// ${STATE.lang==="fr"?"CARTE":"MAP"}</span>
          </div>
          <h2 class="section-title" data-text="${esc(t(e.title))}">${esc(t(e.title))}</h2>
        </div>
        <div class="section-meta">
          <div>${STATE.lang==="fr"?"SOMMETS":"PEAKS"} :: <span class="v">${pad(e.items.length,2)}</span></div>
          <div>FR / JP</div>
        </div>
      </header>
      <div class="edu-wrap">
        <div class="edu-map">${asciiMap()}
          <div class="pin" style="left: 22%; top: 44%;"><div class="dot"></div><div class="lab">BERGERAC</div></div>
          <div class="pin" style="left: 27%; top: 50%;"><div class="dot"></div><div class="lab">TOULOUSE</div></div>
          <div class="pin" style="left: 76%; top: 48%;"><div class="dot"></div><div class="lab">TOKYO ⛩</div></div>
        </div>
        <div class="edu-list">
          ${e.items.map((it,i)=>`
            <article class="edu-entry ${i===0?'open':''}" data-i="${i}">
              <div class="eh">
                <div>
                  <div class="es">[${pad(i+1,2)}] ${esc(it.school)}</div>
                  <div class="ed">${esc(t(it.degree))} — ${esc(t(it.location))}</div>
                </div>
                <div class="ep">${esc(it.period)}</div>
              </div>
              <div class="eb">${esc(t(it.body))}</div>
            </article>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  $$("#screen-education .edu-entry").forEach(le => le.addEventListener("click", () => le.classList.toggle("open")));
}

function asciiMap() {
  return [
    "                                                                                ",
    "       .--.   .--..--                                                           ",
    "      /    `_/    .                  .--.                                      ",
    "     .             `--._     .--.   /    `--.                                  ",
    "     |   N. AMERICA    `---.'    `-'        `-.                                ",
    "      `-.                                      `.    .---.       .            ",
    "         `-.        .---.   .--.--.             `.--'     `.    .--.          ",
    "            `.    .'     `-'  EUROPE `..        .'           `--'    `--.     ",
    "              `--'  ATL.            ASIA  `--.'                       `.     ",
    "                        \\__.--.   /                                    `.    ",
    "                           .---.--'  .--.    .---..--..--.                `.  ",
    "                          /        _'    `--'    '         `-..__.        | ",
    "                         .  AFRICA |                              `-._   _' ",
    "                         |          `.   .__                          `-'   ",
    "                          `.          `-'   `.                              ",
    "                            `--.            .--..                           ",
    "                                 `-.       /     `-.    OCEANIA            ",
    "                                    `.    /         `-.                    ",
    "                                      `--'             `--.                ",
    "                                                                            ",
  ].join("\n");
}

// =================================================================
// LANG + CLOCK + DOCK
// =================================================================
function setLang(l) {
  STATE.lang = l;
  localStorage.setItem("hr_lang", l);
  $("#lang-en").classList.toggle("active", l === "en");
  $("#lang-fr").classList.toggle("active", l === "fr");
  renderAll();
}

function renderAll() {
  renderHub();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
}

function startClock() {
  const tick = () => {
    const d = new Date();
    $("#clock").textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);
}

// --- boot ---
renderAll();
startClock();

$("#lang-en").addEventListener("click", () => setLang("en"));
$("#lang-fr").addEventListener("click", () => setLang("fr"));
$$(".dock-btn").forEach(b => b.addEventListener("click", () => warp(b.dataset.target)));

window.addEventListener("keydown", (e) => {
  if (e.key === "1") warp("hub");
  if (e.key === "2") warp("experience");
  if (e.key === "3") warp("projects");
  if (e.key === "4") warp("skills");
  if (e.key === "5") warp("education");
});

updateDock();
