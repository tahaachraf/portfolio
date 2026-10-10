export type Language = 'fr' | 'en';
export type SkillCategory = 'all' | 'marketing' | 'frontend' | 'backend' | 'tools' | 'design';
export type TimelineMode = 'exp' | 'edu';

type RichSegment = { text: string; strong?: boolean };
type TimelineItem = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
};
export type Project = {
  className: string;
  tone: string;
  featured: string;
  title: string;
  description: string;
  tags: string[];
  links: Array<{ label: string; href: string }>;
  demo?: { href: string; label: string; open: string };
};

export type Copy = {
  pageTitle: string;
  metaDescription: string;
  nav: {
    ariaLabel: string;
    links: Array<[string, string]>;
    cta: string;
    themeSwitch: string;
    lightMode: string;
    darkMode: string;
    languageLabel: string;
    languageNames: Record<Language, string>;
    menuOpen: string;
    menuClose: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  hero: {
    greeting: string;
    availability: string;
    ledePrefix: string;
    ledeMarketing: string;
    ledeConjunction: string;
    ledeDevelopment: string;
    ledeSuffix: string;
    experience: string;
    yearsNote: string[];
    viewProjects: string;
    contact: string;
    scroll: string;
    scrollLabel: string;
    portraitAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: RichSegment[][];
    signature: string;
    stats: Array<[string, string]>;
    highlights: Array<{ title: string; description: string }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    filterLabel: string;
    filters: Record<SkillCategory, string>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    experienceTab: string;
    educationTab: string;
    experienceLabel: string;
    educationLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    greeting: string;
    email: string;
    phone: string;
    location: string;
    locationText: string;
    sendMessage: string;
  };
  footer: {
    madeWith: string;
    by: string;
    location: string;
  };
};

type LocaleContent = {
  copy: Copy;
  roles: string[];
  experiences: TimelineItem[];
  education: TimelineItem[];
  projects: Project[];
};

export const skills: Array<{ category: Exclude<SkillCategory, 'all'>; icon: string; name: string }> = [
  { category: 'marketing', icon: '🔍', name: 'SEO / SEA' },
  { category: 'marketing', icon: '📊', name: 'Google Analytics' },
  { category: 'marketing', icon: '📣', name: 'Google Ads' },
  { category: 'marketing', icon: '📱', name: 'Social Media' },
  { category: 'marketing', icon: '📧', name: 'Mailchimp' },
  { category: 'marketing', icon: '📨', name: 'Stripo' },
  { category: 'marketing', icon: '⚙️', name: 'Odoo 14/16' },
  { category: 'frontend', icon: '⚛️', name: 'React.js' },
  { category: 'frontend', icon: '🟦', name: 'TypeScript' },
  { category: 'frontend', icon: '🌊', name: 'TailwindCSS' },
  { category: 'frontend', icon: '🌐', name: 'HTML / CSS' },
  { category: 'frontend', icon: '🟨', name: 'JavaScript' },
  { category: 'backend', icon: '🟢', name: 'Node.js' },
  { category: 'backend', icon: '🚂', name: 'Express.js' },
  { category: 'backend', icon: '🍃', name: 'MongoDB' },
  { category: 'backend', icon: '🐘', name: 'SQL / MySQL' },
  { category: 'backend', icon: '🐘', name: 'PHP' },
  { category: 'backend', icon: '🍃', name: 'Spring Boot' },
  { category: 'backend', icon: '🐍', name: 'Python' },
  { category: 'backend', icon: '☕', name: 'Java' },
  { category: 'backend', icon: '🌐', name: 'XML' },
  { category: 'backend', icon: '🔵', name: 'Langage C' },
  { category: 'tools', icon: '🐙', name: 'Git / GitHub' },
  { category: 'tools', icon: '📮', name: 'Postman' },
  { category: 'tools', icon: '🔄', name: 'Agile SCRUM' },
  { category: 'tools', icon: '📱', name: 'Flutter' },
  { category: 'tools', icon: '📊', name: 'Excel / Word' },
  { category: 'tools', icon: '🗄️', name: 'Access' },
  { category: 'design', icon: '🎨', name: 'Photoshop' },
  { category: 'design', icon: '✏️', name: 'Illustrator' },
  { category: 'design', icon: '🖌️', name: 'Canva' },
];

export const portfolio: Record<Language, LocaleContent> = {
  fr: {
    copy: {
      pageTitle: 'Portfolio de Taha Achraf Fadhloune',
      metaDescription: 'Portfolio de Taha Achraf Fadhloune — Marketing Digital & Développeur Full-Stack MERN — Sousse, Tunisie.',
      nav: {
        ariaLabel: 'Navigation principale',
        links: [
          ['Accueil', '#home'],
          ['À propos', '#about'],
          ['Compétences', '#skills'],
          ['Projets', '#projects'],
          ['Parcours', '#experience'],
          ['Contact', '#contact'],
        ],
        cta: 'Parlons-en',
        themeSwitch: 'Activer le thème',
        lightMode: 'clair',
        darkMode: 'sombre',
        languageLabel: 'Choisir la langue',
        languageNames: { fr: 'Français', en: 'Anglais' },
        menuOpen: 'Ouvrir le menu',
        menuClose: 'Fermer le menu',
      },
      social: {
        github: 'GitHub de Taha Achraf Fadhloune',
        linkedin: 'LinkedIn de Taha Achraf Fadhloune',
        email: 'Envoyer un email à Taha Achraf Fadhloune',
      },
      hero: {
        greeting: 'Bonjour, je suis',
        availability: 'Disponible',
        ledePrefix: 'Profil hybride à l’intersection du',
        ledeMarketing: 'Marketing Digital',
        ledeConjunction: 'et du',
        ledeDevelopment: 'Développement Full-Stack MERN',
        ledeSuffix: '. Je conçois des stratégies digitales percutantes ET je sais les implémenter techniquement.',
        experience: '5+ ans d’expérience · Sousse, Tunisie.',
        yearsNote: ['ans à relier idée', 'et exécution'],
        viewProjects: '🚀 Voir mes projets',
        contact: '📬 Me contacter',
        scroll: 'défiler',
        scrollLabel: 'Découvrir la section À propos',
        portraitAlt: 'Portrait professionnel de Taha Achraf Fadhloune',
      },
      about: {
        eyebrow: '01 / À propos',
        title: 'Qui suis-je ?',
        paragraphs: [
          [
            { text: "Titulaire d'une " },
            { text: 'Licence Appliquée en Marketing', strong: true },
            { text: " (ISG Sousse, 2017) et d'une " },
            { text: 'Licence Nationale en Développement des Systèmes d’Information', strong: true },
            { text: ' (ISET Kairouan, 2026), mon double parcours reflète une conviction : les meilleures décisions digitales naissent là où la stratégie marketing rencontre la maîtrise technique.' },
          ],
          [
            { text: "Avec plus de 5 ans d'expérience terrain, j'ai piloté des campagnes SEO/SEA, géré des communautés, créé des newsletters via Odoo 16 et Mailchimp — tout en développant des applications web complètes en stack MERN." },
          ],
        ],
        signature: 'Marketing × code',
        stats: [
          ['5+', 'années d’expérience'],
          ['2', 'licences'],
          ['MERN', 'stack de prédilection'],
          ['🌍', 'Sousse, TN'],
        ],
        highlights: [
          {
            title: 'Marketing Digital & Communication',
            description: 'SEO · SEA · Google Ads · Social Media · Email Marketing · Création graphique',
          },
          {
            title: 'Développement Full-Stack MERN',
            description: 'React.js · Node.js · MongoDB · Express · TypeScript · PHP · SQL',
          },
          {
            title: 'Gestion & Outils métier',
            description: 'Odoo 14/16 · Agile SCRUM · Git · Postman · Word · Excel · PowerPoint',
          },
        ],
      },
      skills: {
        eyebrow: '02 / Compétences',
        title: 'Stack & outils, sans cloison.',
        description: 'Une boîte à outils pensée pour comprendre le problème avant de choisir la technologie.',
        filterLabel: 'Filtrer les compétences',
        filters: {
          all: 'Tout',
          marketing: 'Marketing',
          frontend: 'Front-end',
          backend: 'Back-end',
          tools: 'Outils',
          design: 'Design',
        },
      },
      projects: {
        eyebrow: '03 / Projets',
        title: 'Ce que j’ai construit.',
        description: 'Des projets où la réflexion produit, la qualité d’exécution et l’utilité métier avancent ensemble.',
      },
      timeline: {
        eyebrow: '04 / Parcours',
        title: 'Expérience & formation.',
        description: 'Un parcours construit entre terrain, apprentissage continu et livrables concrets.',
        experienceTab: '💼 Expérience',
        educationTab: '🎓 Formation',
        experienceLabel: 'Expérience',
        educationLabel: 'Formation',
      },
      contact: {
        eyebrow: '05 / Contact',
        title: 'Travaillons ensemble.',
        description: 'Que vous ayez une opportunité, un projet ou simplement une question, ma boîte mail est toujours ouverte.',
        greeting: '👋 Dites-moi bonjour !',
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
        locationText: 'Zaouit Sousse, Tunisie',
        sendMessage: '✉️ Envoyer un message',
      },
      footer: {
        madeWith: 'Fait avec',
        by: 'par Taha Achraf Fadhloune',
        location: 'Sousse, Tunisie · 2026',
      },
    },
    roles: [
      'Marketing Digital ⚡',
      'Développeur Full-Stack 💻',
      'SEO / Google Ads 🔍',
      'Community Manager 📱',
      'Data Analyst Marketing 📊',
    ],
    experiences: [
      {
        period: 'Janv. 2022 — Présent · En poste ✅',
        role: 'Chargé de Marketing Digital',
        company: 'VTU — Vérin Tunisie',
        bullets: [
          'Création et envoi de newsletters via Odoo 16 (Email Marketing) et Mailchimp / Stripo',
          'Gestion des réseaux sociaux, veille concurrentielle, SEO et fiches produit',
          'Gestion des opérations métier sur Odoo 14 et Odoo 16',
        ],
        tags: ['Odoo 16', 'SEO', 'Google Ads', 'Mailchimp'],
      },
      {
        period: 'Déc. 2020 — Déc. 2021',
        role: 'Community Manager',
        company: 'TSA Agence Com',
        bullets: ['Stratégies de communication digitale et campagnes social media', 'Planning, suivi et reporting régulier'],
        tags: ['Social Media', 'Communication'],
      },
      {
        period: 'Juil. — Nov. 2020',
        role: 'Community Manager & Graphic Designer',
        company: 'Université Privée de Sousse',
        bullets: ['Contenus visuels (posts, affiches urbaines) et référencement institutionnel'],
        tags: ['Photoshop', 'Illustrator', 'SEO'],
      },
      {
        period: 'Sept. 2019 — Mars 2020',
        role: 'Chargé de Marketing Digital',
        company: 'Aecor.tn',
        bullets: ['SEO, création de fiches produit, gestion des réseaux sociaux'],
        tags: ['SEO', 'E-commerce'],
      },
      {
        period: 'Avr. — Août 2019',
        role: 'Chargé de Marketing Digital',
        company: 'Web Marketing Tunisie',
        bullets: ['Veille concurrentielle, contenu réseaux sociaux, référencement, contenu graphique'],
        tags: ['SEO/SEA', 'Canva'],
      },
    ],
    education: [
      {
        period: '2023 — 2026',
        role: 'Licence Nationale en Technologie Informatique',
        company: "Développement des Systèmes d'Information — ISET Kairouan",
        bullets: [
          'Stack MERN · PHP · Spring Boot · Python · Java · C · SQL · Agile SCRUM',
          'PFE : Conception et Réalisation de ShopTunisie — Plateforme E-commerce MERN',
        ],
        tags: ['React.js', 'Node.js', 'MongoDB', 'PHP', 'Java'],
      },
      {
        period: '2012 — 2017',
        role: 'Licence Appliquée en Marketing',
        company: 'Institut Supérieur de Gestion de Sousse (ISG)',
        bullets: ['Marketing stratégique · Communication · Gestion de projet · Commerce'],
        tags: [],
      },
      {
        period: '2011 — 2013',
        role: 'BTS Commerce International',
        company: 'Étoile Formation — Sousse',
        bullets: [],
        tags: [],
      },
    ],
    projects: [
      {
        className: 'project-card',
        tone: 'blue',
        featured: '🏆 PFE — ISET Kairouan 2026',
        title: 'ShopTunisie',
        description:
          'Plateforme e-commerce complète basée sur la Stack MERN. API REST sécurisée (JWT + 2FA TOTP), 3 interfaces d’administration multi-rôles, 20 User Stories livrées en 4 sprints Agile SCRUM.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'JWT', 'SCRUM'],
        links: [
          { label: '🐙 Backend', href: 'https://github.com/tahaachraf/pfeBackend' },
          { label: '⚛️ Frontend', href: 'https://github.com/tahaachraf/pfeFrontend' },
        ],
        demo: { href: 'https://tahaachraf.github.io/pfeFrontend/', label: 'Démo live', open: 'Ouvrir la démo de ShopTunisie' },
      },
      {
        className: 'project-card',
        tone: 'coral',
        featured: '🖥️ PFE — Dashboards Admin',
        title: 'AdminSuper Dashboard',
        description:
          'Démo publique du dashboard Super-Admin en lecture seule : le visiteur explore produits, commandes, fournisseurs, utilisateurs et statistiques, sans aucun accès en écriture ni exposition des données stockées en base. Le projet comprend 3 interfaces : Super-Admin, Marketing et Achat.',
        tags: ['React.js', 'TypeScript', 'TailwindCSS', 'shadcn/ui'],
        links: [
          { label: '🛡️ SuperAdmin', href: 'https://github.com/tahaachraf/pfeAdminSup' },
          { label: '📊 Marketing', href: 'https://github.com/tahaachraf/pfeAdminMKG' },
          { label: '🛒 Achat', href: 'https://github.com/tahaachraf/pfeAdminAchat' },
        ],
        demo: { href: 'https://tahaachraf.github.io/superadminget/dashboard', label: 'Démo live (lecture seule)', open: 'Ouvrir la démo du dashboard AdminSuper' },
      },
      {
        className: 'project-card',
        tone: 'mint',
        featured: '📅 Projet académique — 2ème année',
        title: 'Event Management',
        description:
          'Application de gestion d’événements développée en 2ème année. Création, modification et suppression d’événements avec interface utilisateur complète.',
        tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
        links: [{ label: '🐙 Voir sur GitHub', href: 'https://github.com/tahaachraf/event' }],
      },
    ],
  },
  en: {
    copy: {
      pageTitle: 'Portfolio of Taha Achraf Fadhloune',
      metaDescription: 'Portfolio of Taha Achraf Fadhloune — Digital Marketing & MERN Full-Stack Developer — Sousse, Tunisia.',
      nav: {
        ariaLabel: 'Main navigation',
        links: [
          ['Home', '#home'],
          ['About', '#about'],
          ['Skills', '#skills'],
          ['Projects', '#projects'],
          ['Experience', '#experience'],
          ['Contact', '#contact'],
        ],
        cta: 'Let’s talk',
        themeSwitch: 'Switch to',
        lightMode: 'light mode',
        darkMode: 'dark mode',
        languageLabel: 'Choose language',
        languageNames: { fr: 'French', en: 'English' },
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
      },
      social: {
        github: 'Taha Achraf Fadhloune on GitHub',
        linkedin: 'Taha Achraf Fadhloune on LinkedIn',
        email: 'Email Taha Achraf Fadhloune',
      },
      hero: {
        greeting: 'Hello, I’m',
        availability: 'Available for opportunities',
        ledePrefix: 'A hybrid profile at the intersection of',
        ledeMarketing: 'Digital Marketing',
        ledeConjunction: 'and',
        ledeDevelopment: 'MERN Full-Stack Development',
        ledeSuffix: '. I shape impactful digital strategies and know how to build them.',
        experience: '5+ years of experience · Sousse, Tunisia.',
        yearsNote: ['years connecting ideas', 'to execution'],
        viewProjects: '🚀 View my projects',
        contact: '📬 Get in touch',
        scroll: 'scroll',
        scrollLabel: 'Discover the About section',
        portraitAlt: 'Professional portrait of Taha Achraf Fadhloune',
      },
      about: {
        eyebrow: '01 / About',
        title: 'Who am I?',
        paragraphs: [
          [
            { text: 'With an ' },
            { text: 'Applied Bachelor’s Degree in Marketing', strong: true },
            { text: ' (ISG Sousse, 2017) and a ' },
            { text: 'National Bachelor’s Degree in Information Systems Development', strong: true },
            { text: ' (ISET Kairouan, 2026), my dual background reflects a belief: the best digital decisions happen where marketing strategy meets technical expertise.' },
          ],
          [
            { text: 'With more than 5 years of hands-on experience, I have led SEO/SEA campaigns, managed communities and created newsletters with Odoo 16 and Mailchimp — while building complete web applications with the MERN stack.' },
          ],
        ],
        signature: 'Marketing × code',
        stats: [
          ['5+', 'years of experience'],
          ['2', 'degrees'],
          ['MERN', 'go-to stack'],
          ['🌍', 'Sousse, Tunisia'],
        ],
        highlights: [
          {
            title: 'Digital Marketing & Communications',
            description: 'SEO · SEA · Google Ads · Social Media · Email Marketing · Graphic Design',
          },
          {
            title: 'MERN Full-Stack Development',
            description: 'React.js · Node.js · MongoDB · Express · TypeScript · PHP · SQL',
          },
          {
            title: 'Business Operations & Tools',
            description: 'Odoo 14/16 · Agile SCRUM · Git · Postman · Word · Excel · PowerPoint',
          },
        ],
      },
      skills: {
        eyebrow: '02 / Skills',
        title: 'Tools and technology, without silos.',
        description: 'A toolkit built around understanding the problem before choosing the technology.',
        filterLabel: 'Filter skills',
        filters: {
          all: 'All',
          marketing: 'Marketing',
          frontend: 'Front-end',
          backend: 'Back-end',
          tools: 'Tools',
          design: 'Design',
        },
      },
      projects: {
        eyebrow: '03 / Projects',
        title: 'What I’ve built.',
        description: 'Projects where product thinking, execution quality and business value move forward together.',
      },
      timeline: {
        eyebrow: '04 / Career',
        title: 'Experience & education.',
        description: 'A path shaped by hands-on work, continuous learning and practical outcomes.',
        experienceTab: '💼 Experience',
        educationTab: '🎓 Education',
        experienceLabel: 'Experience',
        educationLabel: 'Education',
      },
      contact: {
        eyebrow: '05 / Contact',
        title: 'Let’s work together.',
        description: 'Whether you have an opportunity, a project or just a question, my inbox is always open.',
        greeting: '👋 Say hello!',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationText: 'Zaouit, Sousse, Tunisia',
        sendMessage: '✉️ Send a message',
      },
      footer: {
        madeWith: 'Made with',
        by: 'by Taha Achraf Fadhloune',
        location: 'Sousse, Tunisia · 2026',
      },
    },
    roles: [
      'Digital Marketing ⚡',
      'Full-Stack Developer 💻',
      'SEO / Google Ads 🔍',
      'Community Manager 📱',
      'Marketing Data Analyst 📊',
    ],
    experiences: [
      {
        period: 'Jan. 2022 — Present · Currently employed ✅',
        role: 'Digital Marketing Specialist',
        company: 'VTU — Vérin Tunisie',
        bullets: [
          'Create and send newsletters using Odoo 16 (Email Marketing), Mailchimp and Stripo',
          'Manage social media, competitor research, SEO and product listings',
          'Manage business operations in Odoo 14 and Odoo 16',
        ],
        tags: ['Odoo 16', 'SEO', 'Google Ads', 'Mailchimp'],
      },
      {
        period: 'Dec. 2020 — Dec. 2021',
        role: 'Community Manager',
        company: 'TSA Agence Com',
        bullets: ['Digital communications strategies and social media campaigns', 'Planning, tracking and regular reporting'],
        tags: ['Social Media', 'Communications'],
      },
      {
        period: 'Jul. — Nov. 2020',
        role: 'Community Manager & Graphic Designer',
        company: 'Université Privée de Sousse',
        bullets: ['Created visual content (posts and outdoor posters) and improved institutional search rankings'],
        tags: ['Photoshop', 'Illustrator', 'SEO'],
      },
      {
        period: 'Sept. 2019 — Mar. 2020',
        role: 'Digital Marketing Specialist',
        company: 'Aecor.tn',
        bullets: ['SEO, product listing creation and social media management'],
        tags: ['SEO', 'E-commerce'],
      },
      {
        period: 'Apr. — Aug. 2019',
        role: 'Digital Marketing Specialist',
        company: 'Web Marketing Tunisie',
        bullets: ['Competitor research, social media content, SEO and graphic content'],
        tags: ['SEO/SEA', 'Canva'],
      },
    ],
    education: [
      {
        period: '2023 — 2026',
        role: 'National Bachelor’s Degree in Information Technology',
        company: 'Information Systems Development — ISET Kairouan',
        bullets: [
          'Stack: MERN · PHP · Spring Boot · Python · Java · C · SQL · Agile SCRUM',
          'Graduation project: ShopTunisie — a MERN e-commerce platform',
        ],
        tags: ['React.js', 'Node.js', 'MongoDB', 'PHP', 'Java'],
      },
      {
        period: '2012 — 2017',
        role: 'Applied Bachelor’s Degree in Marketing',
        company: 'Higher Institute of Management of Sousse (ISG)',
        bullets: ['Strategic marketing · Communications · Project management · Commerce'],
        tags: [],
      },
      {
        period: '2011 — 2013',
        role: 'Higher Technician’s Certificate in International Trade',
        company: 'Étoile Formation — Sousse',
        bullets: [],
        tags: [],
      },
    ],
    projects: [
      {
        className: 'project-card',
        tone: 'blue',
        featured: '🏆 Graduation project — ISET Kairouan 2026',
        title: 'ShopTunisie',
        description:
          'A complete e-commerce platform built with the MERN stack. Secure REST API (JWT + TOTP 2FA), three multi-role admin interfaces and 20 user stories delivered across four Agile SCRUM sprints.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'JWT', 'SCRUM'],
        links: [
          { label: '🐙 Backend', href: 'https://github.com/tahaachraf/pfeBackend' },
          { label: '⚛️ Frontend', href: 'https://github.com/tahaachraf/pfeFrontend' },
        ],
        demo: { href: 'https://tahaachraf.github.io/pfeFrontend/', label: 'Live demo', open: 'Open the ShopTunisie demo' },
      },
      {
        className: 'project-card',
        tone: 'coral',
        featured: '🖥️ Graduation project — Admin dashboards',
        title: 'AdminSuper Dashboard',
        description:
          'A public, read-only demo of the Super Admin dashboard: visitors can explore products, orders, suppliers, users and statistics with no write access and no exposure of the data stored in the database. The project includes three interfaces: Super Admin, Marketing and Purchasing.',
        tags: ['React.js', 'TypeScript', 'TailwindCSS', 'shadcn/ui'],
        links: [
          { label: '🛡️ Super Admin', href: 'https://github.com/tahaachraf/pfeAdminSup' },
          { label: '📊 Marketing', href: 'https://github.com/tahaachraf/pfeAdminMKG' },
          { label: '🛒 Purchasing', href: 'https://github.com/tahaachraf/pfeAdminAchat' },
        ],
        demo: { href: 'https://tahaachraf.github.io/superadminget/dashboard', label: 'Live demo (read-only)', open: 'Open the AdminSuper dashboard demo' },
      },
      {
        className: 'project-card',
        tone: 'mint',
        featured: '📅 Academic project — Second year',
        title: 'Event Management',
        description:
          'An event management application built in the second year of study. Create, update and delete events through a complete user interface.',
        tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
        links: [{ label: '🐙 View on GitHub', href: 'https://github.com/tahaachraf/event' }],
      },
    ],
  },
};