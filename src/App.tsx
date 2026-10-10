import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from 'lucide-react';
import { portfolio, skills, type Copy, type Project, type Language, type SkillCategory, type TimelineMode } from './content';
import './index.css';

type Theme = 'light' | 'dark';

function ExternalLink({ href, children, className = '', 'aria-label': ariaLabel }: { href: string; children: ReactNode; className?: string; 'aria-label'?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function GitHubMark() {
  return <Github aria-hidden="true" size={18} strokeWidth={1.8} />;
}

function LinkedInMark() {
  return <Linkedin aria-hidden="true" size={18} strokeWidth={1.8} />;
}

function SocialLinks({ footer = false, copy }: { footer?: boolean; copy: Copy }) {
  return (
    <div className="social-row" data-testid={footer ? 'social-links-footer' : 'social-links-hero'}>
      <ExternalLink href="https://github.com/tahaachraf" className="social-link" aria-label={copy.social.github}>
        <GitHubMark />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/taha-achraf-fadhloune-b70a57171/" className="social-link" aria-label={copy.social.linkedin}>
        <LinkedInMark />
      </ExternalLink>
      <a className="social-link" href="mailto:taha.achraf041@gmail.com" aria-label={copy.social.email}>
        <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
      </a>
    </div>
  );
}

function Nav({
  theme,
  language,
  copy,
  onThemeToggle,
  onLanguageChange,
}: {
  theme: Theme;
  language: Language;
  copy: Copy;
  onThemeToggle: () => void;
  onLanguageChange: (language: Language) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = copy.nav.links;
  const themeLabel = `${copy.nav.themeSwitch} ${theme === 'dark' ? copy.nav.lightMode : copy.nav.darkMode}`;

  return (
    <nav className="site-nav" aria-label={copy.nav.ariaLabel}>
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)} data-testid="link-brand">
        <span className="brand-mark">T</span>
        <span>Taha<span style={{ color: 'hsl(var(--primary))' }}>.</span></span>
      </a>
      <ul id="main-menu" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href} onClick={() => setMenuOpen(false)} data-testid={`link-nav-${href.slice(1)}`}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={themeLabel} aria-pressed={theme === 'dark'} title={themeLabel} data-testid="button-theme-toggle">
          {theme === 'dark' ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
        </button>
        <div className="language-switch" role="group" aria-label={copy.nav.languageLabel} data-testid="language-switch">
          {(['fr', 'en'] as const).map((option) => (
            <button
              className="language-option"
              key={option}
              type="button"
              aria-label={`${copy.nav.languageLabel}: ${copy.nav.languageNames[option]}`}
              aria-pressed={language === option}
              title={copy.nav.languageNames[option]}
              onClick={() => {
                onLanguageChange(option);
                setMenuOpen(false);
              }}
              data-testid={`button-language-${option}`}
            >
              <span className="language-name">{copy.nav.languageNames[option]}</span>
              <span className="language-code" aria-hidden="true">{option.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <a className="nav-cta" href="#contact" data-testid="link-nav-contact-cta">{copy.nav.cta} <ArrowUpRight aria-hidden="true" size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="main-menu" aria-label={menuOpen ? copy.nav.menuClose : copy.nav.menuOpen} data-testid="button-mobile-menu">
          {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        </button>
      </div>
    </nav>
  );
}

function Hero({ roles, copy }: { roles: string[]; copy: Copy }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const finished = !deleting && text === current;
    const empty = deleting && text === '';
    const timeout = window.setTimeout(() => {
      if (finished) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, finished ? 1800 : deleting ? 45 : 80);
    return () => window.clearTimeout(timeout);
  }, [deleting, roleIndex, roles, text]);

  return (
    <header className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker reveal"><span className="live-dot" /> 👋 {copy.hero.greeting}</div>
          <h1 className="display reveal delay-1">Taha Achraf<br /><em>Fadhloune</em></h1>
          <div className="eyebrow reveal delay-2" aria-live="polite" data-testid="text-typed-role">{text}<span aria-hidden="true">▌</span></div>
          <p className="hero-lede reveal delay-2">
            {copy.hero.ledePrefix} <strong>{copy.hero.ledeMarketing}</strong> {copy.hero.ledeConjunction} <strong>{copy.hero.ledeDevelopment}</strong>
            {copy.hero.ledeSuffix}
            <br /><strong>{copy.hero.experience}</strong>
          </p>
          <div className="hero-actions reveal delay-3">
            <a className="button-primary" href="#projects" data-testid="link-hero-projects">{copy.hero.viewProjects} <ArrowRight aria-hidden="true" size={16} /></a>
            <a className="button-ghost" href="#contact" data-testid="link-hero-contact">{copy.hero.contact} <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
          <SocialLinks copy={copy} />
        </div>
        <div className="hero-art" aria-label={copy.hero.portraitAlt}>
          <div className="art-orbit" aria-hidden="true" />
          <div className="availability-pill"><span className="live-dot" />{copy.hero.availability}</div>
          <div className="portrait-frame">
            <img src={`${import.meta.env.BASE_URL}taha-portrait.png`} alt={copy.hero.portraitAlt} data-testid="img-portrait" />
          </div>
          <div className="hero-note"><strong>5+</strong>{copy.hero.yearsNote[0]}<br />{copy.hero.yearsNote[1]}</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label={copy.hero.scrollLabel} data-testid="link-scroll-about"><ArrowDown aria-hidden="true" size={14} /> {copy.hero.scroll}</a>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="display">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About({ copy }: { copy: Copy }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} />
            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.map((segment, segmentIndex) =>
                    segment.strong
                      ? <strong key={segmentIndex}>{segment.text}</strong>
                      : <span key={segmentIndex}>{segment.text}</span>,
                  )}
                </p>
              ))}
            </div>
            <div className="about-signature">{copy.about.signature}</div>
            <div className="stat-strip">
              {copy.about.stats.map(([value, label]) => (
                <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
          <div className="highlight-list">
            {copy.about.highlights.map((highlight, index) => (
              <article className="highlight" key={highlight.title}>
                <div className="highlight-icon" aria-hidden="true">{['📣', '💻', '⚙️'][index]}</div>
                <div><h3>{highlight.title}</h3><p>{highlight.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ copy, language }: { copy: Copy; language: Language }) {
  const [category, setCategory] = useState<SkillCategory>('all');
  const categories: SkillCategory[] = ['all', 'marketing', 'frontend', 'backend', 'tools', 'design'];
  const visibleSkills = useMemo(() => category === 'all' ? skills : skills.filter((skill) => skill.category === category), [category]);

  return (
    <section className="section section-tinted" id="skills">
      <div className="container">
        <SectionHeading eyebrow={copy.skills.eyebrow} title={copy.skills.title} description={copy.skills.description} />
        <div className="tabs" role="tablist" aria-label={copy.skills.filterLabel}>
          {categories.map((item) => (
            <button key={item} className="tab" type="button" role="tab" aria-selected={category === item} onClick={() => setCategory(item)} data-testid={`button-skill-filter-${item}`}>
              {copy.skills.filters[item]}
            </button>
          ))}
        </div>
        <div className="skills-grid" data-testid="grid-skills">
          {visibleSkills.map((skill) => (
            <article className="skill" key={skill.name} data-testid={`card-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{language === 'en' && skill.name === 'Langage C' ? 'C language' : skill.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 800;

function MockVisual() {
  return (
    <div className="browser">
      <div className="browser-bar"><span className="browser-dot" /><span className="browser-dot" /><span className="browser-dot" /></div>
      <div className="mock-ui">
        <div className="mock-side"><div className="mock-line" /><div className="mock-line short" /><div className="mock-line" /><div className="mock-line short" /></div>
        <div className="mock-main"><div className="mock-line" /><div className="mock-panels"><div className="mock-panel" /><div className="mock-panel" /></div><div className="mock-line short" /></div>
      </div>
    </div>
  );
}

function ProjectVisual({ tone, title, demo }: { tone: string; title: string; demo?: Project['demo'] }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || !demo) return;
    const update = () => setScale(box.clientWidth / PREVIEW_WIDTH);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(box);
    return () => observer.disconnect();
  }, [demo]);

  if (!demo) {
    return <div className={`project-visual tone-${tone}`} aria-hidden="true"><MockVisual /></div>;
  }

  return (
    <a className={`project-visual project-preview tone-${tone}`} href={demo.href} target="_blank" rel="noreferrer" aria-label={demo.open} data-testid={`link-preview-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
      <div className="preview-fallback" aria-hidden="true"><MockVisual /></div>
      <div className="preview-viewport" ref={boxRef} aria-hidden="true">
        <iframe
          src={demo.href}
          title={title}
          loading="lazy"
          tabIndex={-1}
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          style={{ width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT, transform: `scale(${scale})` }}
        />
      </div>
      <span className="preview-badge"><span className="live-dot" />{demo.label} <ArrowUpRight aria-hidden="true" size={13} /></span>
    </a>
  );
}

function Projects({ copy, projects }: { copy: Copy; projects: Project[] }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow={copy.projects.eyebrow} title={copy.projects.title} description={copy.projects.description} />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={project.className} key={project.title} data-testid={`card-project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
              <ProjectVisual tone={project.tone} title={project.title} demo={project.demo} />
              <div className="project-body">
                <div className="project-meta"><span>{project.featured}</span><ArrowUpRight aria-hidden="true" size={15} /></div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  {project.demo && <ExternalLink href={project.demo.href} className="project-link project-link-demo">{project.demo.label} <ArrowUpRight aria-hidden="true" size={14} /></ExternalLink>}
                  {project.links.map((link) => <ExternalLink key={link.href} href={link.href} className="project-link">{link.label} <ArrowUpRight aria-hidden="true" size={14} /></ExternalLink>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({
  copy,
  experiences,
  education,
}: {
  copy: Copy;
  experiences: typeof portfolio.fr.experiences;
  education: typeof portfolio.fr.education;
}) {
  const [mode, setMode] = useState<TimelineMode>('exp');
  const items = mode === 'exp' ? experiences : education;
  return (
    <section className="section section-tinted" id="experience">
      <div className="container">
        <SectionHeading eyebrow={copy.timeline.eyebrow} title={copy.timeline.title} description={copy.timeline.description} />
        <div className="tabs" role="tablist" aria-label={`${copy.timeline.experienceLabel} / ${copy.timeline.educationLabel}`}>
          <button className="tab" type="button" role="tab" aria-selected={mode === 'exp'} onClick={() => setMode('exp')} data-testid="button-timeline-experience">{copy.timeline.experienceTab}</button>
          <button className="tab" type="button" role="tab" aria-selected={mode === 'edu'} onClick={() => setMode('edu')} data-testid="button-timeline-education">{copy.timeline.educationTab}</button>
        </div>
        <div className="timeline" data-testid={`timeline-${mode}`}>
          {items.map((item, index) => (
            <article className="timeline-item" key={`${item.role}-${item.period}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-date">{item.period}</div>
              <h3 className="timeline-role">{item.role}</h3>
              <div className="timeline-company">{item.company}</div>
              {item.bullets.length > 0 && <ul className="timeline-list">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              {item.tags.length > 0 && <div className="tag-list" style={{ marginTop: '14px', marginBottom: 0 }}>{item.tags.map((tag) => <span className="tag" key={`${index}-${tag}`}>{tag}</span>)}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ copy }: { copy: Copy }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} />
          <p>{copy.contact.description}</p>
          <h3 className="display" style={{ position: 'relative', margin: '0 auto 12px', fontSize: '1.55rem' }}>{copy.contact.greeting}</h3>
          <div className="contact-info">
            <a href="mailto:taha.achraf041@gmail.com" data-testid="link-contact-email"><Mail aria-hidden="true" size={16} /> {copy.contact.email} · taha.achraf041@gmail.com</a>
            <a href="tel:+21697290752" data-testid="link-contact-phone"><Phone aria-hidden="true" size={16} /> {copy.contact.phone} · +216 97 290 752</a>
            <span><MapPin aria-hidden="true" size={16} /> {copy.contact.location} · {copy.contact.locationText}</span>
          </div>
          <div style={{ marginTop: '28px' }}>
            <a className="button-primary" href="mailto:taha.achraf041@gmail.com" data-testid="link-contact-message">{copy.contact.sendMessage} <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
          <SocialLinks footer copy={copy} />
        </div>
      </div>
    </section>
  );
}

function Footer({ copy }: { copy: Copy }) {
  return (
    <footer>
      <div className="container">
        <span>{copy.footer.madeWith} <strong>❤️</strong> {copy.footer.by}</span>
        <span>{copy.footer.location}</span>
      </div>
    </footer>
  );
}

function getInitialTheme(): Theme {
  const saved = window.localStorage.getItem('taha-portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialLanguage(): Language {
  const saved = window.localStorage.getItem('taha-portfolio-language');
  return saved === 'en' ? 'en' : 'fr';
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());
  const { copy, roles, experiences, education, projects } = portfolio[language];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('taha-portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.metaDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', copy.pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', copy.metaDescription);
    window.localStorage.setItem('taha-portfolio-language', language);
  }, [copy, language]);

  return (
    <div className="site-shell">
      <Nav
        theme={theme}
        language={language}
        copy={copy}
        onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero key={language} roles={roles} copy={copy} />
        <About copy={copy} />
        <Skills copy={copy} language={language} />
        <Projects copy={copy} projects={projects} />
        <Timeline copy={copy} experiences={experiences} education={education} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}

export default App;