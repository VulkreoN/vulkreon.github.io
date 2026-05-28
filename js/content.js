// Bilingual content for the portfolio

export const i18n = {
  nav: {
    home:       { fr: "Accueil",        en: "Home" },
    experience: { fr: "Expériences",    en: "Experience" },
    projects:   { fr: "Projets",        en: "Projects" },
    skills:     { fr: "Compétences",    en: "Skills" },
    education:  { fr: "Formation",      en: "Education" },
  },
  hud: {
    viewProject: { fr: "VOIR LE PROJET", en: "VIEW PROJECT" },
  },

  home: {
    role: { fr: "Développeur logiciel", en: "Software developer" },
  },

  experience: {
    title: { fr: "EXPÉRIENCES",  en: "EXPERIENCE" },
    items: [
      {
        company: "Medinbox",
        location:{ fr: "Toulouse, France", en: "Toulouse, France" },
        role:    { fr: "Stagiaire R&D — Intelligence Artificielle", en: "R&D Intern — Artificial Intelligence" },
        period:  { fr: "Avr — Août 2023", en: "Apr — Aug 2023" },
        bullets: {
          fr: [
            "Solutions d'IA pour l'analyse de vidéos chirurgicales : reconnaissance et masquage de l'identité des patients en computer vision.",
            "Pipeline ASR (Whisper ré-entraîné) pour extraire métadonnées : interlocuteurs, tags, résumé.",
            "Site vitrine (C# ASP.NET + Angular) intégrant un chatbot pour vulgariser les opérations."
          ],
          en: [
            "AI for surgical video analysis: patient identity recognition and masking via computer vision.",
            "ASR pipeline (re-trained Whisper) extracting metadata: speakers, tags, summary.",
            "Marketing site (C# ASP.NET + Angular) with a chatbot to explain operations to users."
          ]
        },
        tags: ["Python", "PyTorch", "Whisper", "C#", "ASP.NET", "Angular"]
      },
      {
        company: "ISEG",
        location:{ fr: "Toulouse, France", en: "Toulouse, France" },
        role:    { fr: "Formateur — Spring Code Camp", en: "Trainer — Spring Code Camp" },
        period:  { fr: "Mars — Avr 2023",   en: "Mar — Apr 2023" },
        bullets: {
          fr: [
            "Bootcamp de deux semaines initiant les étudiants à la méthodologie Epitech.",
            "Enseignement des bases du web (HTML, CSS, PHP, SQL) — projet final e-commerce.",
            "Accompagnement quotidien, revues de difficultés, sessions de notation individuelles."
          ],
          en: [
            "Two-week bootcamp introducing students to the Epitech methodology.",
            "Teaching the web stack (HTML, CSS, PHP, SQL) — final project was an e-commerce site.",
            "Daily mentoring, code reviews, individual grading sessions."
          ]
        },
        tags: ["HTML", "CSS", "PHP", "SQL", "Teaching"]
      },
      {
        company: "BPCE-IT",
        location:{ fr: "Toulouse, France", en: "Toulouse, France" },
        role:    { fr: "Stagiaire Développeur Client Lourd C#", en: "Intern — Desktop Developer C#" },
        period:  { fr: "Juil — Déc 2021",  en: "Jul — Dec 2021" },
        bullets: {
          fr: [
            "Refonte complète et autonome de l'application interne « Power10 » en C# WPF.",
            "Collaboration directe avec le support IT pour définir besoins et fonctionnalités.",
            "Modernisation de l'interface et amélioration de l'expérience utilisateur."
          ],
          en: [
            "Solo rebuild of the internal \"Power10\" desktop application in C# WPF.",
            "Worked directly with IT support to define requirements and features.",
            "Modernized the interface and improved overall UX."
          ]
        },
        tags: ["C#", "WPF", ".NET", "UX"]
      }
    ]
  },

  projects: {
    title: { fr: "PROJETS",  en: "PROJECTS" },
    items: [
      {
        name: "Laval Game Jam",
        year: "2022",
        award:{ fr: "1ᵉʳ prix", en: "1st prize" },
        desc: {
          fr: "RPG en monde ouvert développé en 48h sur le thème de l'accessibilité. Réalité augmentée sur Hololens 2 : sorts lancés via suivi du regard, gestes et voix.",
          en: "Open-world RPG built in 48h on the theme of accessibility. AR on Hololens 2: spells cast via gaze tracking, gestures and voice."
        },
        tags: ["Unity", "C#", "AR", "Hololens 2", "Game Jam"],
        link: "https://github.com/VulkreoN/Laval-Game-Jam",
        video:"https://www.youtube.com/embed/0iO2uH7ddG0?si=ztlWOmw7lgiFR0rX"
      },
      {
        name: "Epitech RPG",
        year: "2021",
        desc: {
          fr: "RPG 2D complet en C : moteur maison, système de quêtes, combats au tour, dialogues.",
          en: "Full 2D RPG in C: custom engine, quest system, turn-based combat, dialogues."
        },
        tags: ["C", "CSFML", "Game Dev"],
        link: "https://github.com/VulkreoN/Epitech-RPG"
      },
      {
        name: "MyDexPoGo",
        year: "2022",
        desc: {
          fr: "Application mobile cross-platform répertoriant tous les Pokémon de Pokémon Go et leurs variations, statistiques incluses.",
          en: "Cross-platform mobile app listing every Pokémon Go form with its variations and stats."
        },
        tags: ["Flutter", "Dart", "Mobile", "API"],
        link: "https://github.com/VulkreoN/pokedex-GO"
      },
      {
        name: "R-Type",
        year: "2022",
        desc: {
          fr: "Shoot-em-up coopératif à 4 joueurs basé sur le classique R-Type. C++ orienté performance et réseau.",
          en: "Cooperative 4-player shoot-em-up based on the classic R-Type. C++ focused on performance and networking."
        },
        tags: ["C++", "Networking", "SFML"],
        link: "https://github.com/VulkreoN/R-Type"
      },
      {
        name: "Arcade",
        year: "2021",
        desc: {
          fr: "Borne d'arcade logicielle en C++ : chargement dynamique de jeux et de bibliothèques graphiques (SFML, SDL2, NCURSES).",
          en: "Software arcade machine in C++: dynamic loading of games and graphic libraries (SFML, SDL2, NCURSES)."
        },
        tags: ["C++", "Dynamic Loading", "Game Dev"],
        link: "https://github.com/VulkreoN/Arcade-Epi"
      },
      {
        name: "Area",
        year: "2023",
        desc: {
          fr: "Tableau de bord web interactif connectant des services tiers via widgets personnalisables.",
          en: "Interactive web dashboard connecting third-party services through customizable widgets."
        },
        tags: ["React", "Node.js", "API"],
        link: "https://github.com/VulkreoN/Area"
      }
    ]
  },

  skills: {
    title: { fr: "COMPÉTENCES", en: "SKILLS" },
    groups: [
      {
        label: { fr: "Langages", en: "Languages" },
        items: ["C#","C++","Dart","GLSL","Java","JavaScript","Kotlin","PHP","Python","SQL","Shell","Swift"]
      },
      {
        label: { fr: "Frameworks", en: "Frameworks" },
        items: ["Angular","ASP.NET","SFML","Flutter","Next.js","Node.js","OpenGL","PyTorch","React Native","SDL2","TensorFlow","Three.js","Unity","Vue.js"]
      },
      {
        label: { fr: "Outils & Plateformes", en: "Tools & Platforms" },
        items: ["Apache","AWS","Azure","Confluence","Docker","Figma","Firebase","Git","Hololens 2","Jenkins","Jira","Kubernetes","Makefile","MySQL","Nginx","PostgreSQL"]
      }
    ]
  },

  education: {
    title: { fr: "FORMATION", en: "EDUCATION" },
    items: [
      {
        school: "EPITECH",
        location:{ fr: "Toulouse, France", en: "Toulouse, France" },
        degree:  { fr: "Master en Technologies de l'Information", en: "Master in Information Technology" },
        period:  "2020 — 2025",
        body:    {
          fr: "Cursus intensif en 5 ans basé sur la pédagogie par projets : forte expertise technique, grande capacité d'adaptation, innovation et travail d'équipe complexe.",
          en: "Intensive 5-year program based on project pedagogy: deep technical expertise, strong adaptability, innovation, and complex teamwork."
        }
      },
      {
        school: "Shibaura Institute of Technology",
        location:{ fr: "Tokyo, Japon",  en: "Tokyo, Japan" },
        degree:  { fr: "Échange Universitaire", en: "Exchange Semester" },
        period:  "2024",
        body:    {
          fr: "Semestre dans une des principales universités technologiques du Japon. Cours d'ingénierie et de technologies émergentes. Immersion linguistique et culturelle intensive.",
          en: "Semester at one of Japan's leading technology universities. Engineering and emerging-tech courses. Intensive language and cultural immersion."
        }
      },
      {
        school: "Lycée Maine de Biran",
        location:{ fr: "Bergerac, France", en: "Bergerac, France" },
        degree:  { fr: "Baccalauréat STI2D — Option SIN — Mention Bien", en: "STI2D Baccalaureate — SIN option — with honors" },
        period:  "2020",
        body:    {
          fr: "Première approche solide de l'informatique, de l'électronique et des réseaux.",
          en: "Solid first grounding in computer science, electronics and networking."
        }
      }
    ]
  },

  contact: {
    email:    "hakim.redjem@epitech.eu",
    linkedin: "https://www.linkedin.com/in/hakim-redjem",
    github:   "https://github.com/VulkreoN",
  }
};
