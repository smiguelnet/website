import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, animate, useTransform } from 'motion/react';
import {
  Terminal,
  Cpu,
  Globe,
  Mail,
  Linkedin,
  Github,
  FileDown,
  ExternalLink,
  Code2,
  ShieldCheck,
  ChevronRight,
  Command,
  Activity,
  Zap,
  GraduationCap,
  Award,
  FlaskConical,
  Menu,
  X,
  CalendarDays,
  MapPin,
} from 'lucide-react';
import { RESUME_DATA } from './constants';

const Counter = ({
  value,
  duration = 2,
  delay = 0,
}: {
  value: number;
  duration?: number;
  delay?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest).toLocaleString());
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      delay,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', v => setDisplayValue(v));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, duration, delay, count, rounded]);

  return <span>{displayValue}</span>;
};

const TerminalLine = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className='font-mono text-sm text-emerald-400 mb-1'
  >
    <span className='text-emerald-600 mr-2'>$</span>
    {text}
  </motion.div>
);

interface SkillBadgeProps {
  name: string;
  key?: any;
}

const SkillBadge = ({ name }: SkillBadgeProps) => (
  <span className='px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-mono text-emerald-400'>
    {name}
  </span>
);

interface MetricGaugeProps {
  label: string;
  value: number;
  suffix: string;
  delay?: number;
  key?: any;
}

const MetricGauge = ({ label, value, suffix, delay = 0 }: MetricGaugeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className='relative flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-emerald-500/[0.02] border border-white/5 hover:border-emerald-500/40 shadow-[0_0_0_rgba(81,192,12,0)] hover:shadow-[0_0_24px_rgba(81,192,12,0.18)] transition-all group overflow-hidden'
    >
      {/* Background Glow Effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/[0.02] to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      {/* Blueprint Grid Pattern */}
      <div
        className='absolute inset-0 opacity-[0.03] pointer-events-none'
        style={{
          backgroundImage: 'radial-gradient(#51c00c 0.5px, transparent 0.5px)',
          backgroundSize: '12px 12px',
        }}
      />

      {/* Animated Light Sweep */}
      <motion.div
        animate={{
          left: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
          delay: delay * 2,
        }}
        className='absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-500/[0.05] to-transparent -skew-x-12 pointer-events-none'
      />

      <div className='relative mb-6'>
        {/* Subtle Glow behind number */}
        <div className='absolute inset-0 rounded-full bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, type: 'spring', stiffness: 100 }}
          className='relative z-20 flex flex-col items-center'
        >
          <span className='text-3xl md:text-4xl font-bold text-white tracking-tighter group-hover:text-emerald-400 transition-colors duration-500'>
            <Counter value={value} delay={delay + 0.5} />
            {suffix}
          </span>
        </motion.div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ delay: delay + 0.8 }}
        className='relative z-10 w-full min-h-[3.4rem] flex items-center justify-center text-center text-[11px] sm:text-xs uppercase tracking-[0.14em] text-emerald-400 font-bold leading-snug group-hover:opacity-100 group-hover:text-white transition-all'
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

const InterestCard = ({ interest, delay = 0 }: { interest: string; delay?: number; key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    whileHover={{
      y: -3,
      transition: { type: 'spring', stiffness: 360, damping: 28 },
    }}
    className='relative h-full p-5 rounded-2xl bg-emerald-500/[0.02] border border-white/10 hover:border-emerald-500/35 shadow-[0_0_0_rgba(81,192,12,0)] hover:shadow-[0_0_24px_rgba(81,192,12,0.18)] transition-[border-color,background-color,box-shadow] duration-300 group overflow-hidden flex items-center'
    style={{ willChange: 'transform' }}
  >
    {/* Background Glow Effect */}
    <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/[0.025] to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400' />

    <div className='relative z-10 flex items-center gap-4'>
      <div className='w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-[0_0_14px_rgba(81,192,12,0)] group-hover:shadow-[0_0_14px_rgba(81,192,12,0.35)]'>
        <Zap className='w-5 h-5' />
      </div>
      <p className='text-zinc-300 font-medium leading-snug group-hover:text-white transition-colors duration-300'>
        {interest}
      </p>
    </div>
  </motion.div>
);

const tabs = {
  HOME: 'home',
  QUALIFICATIONS: 'profile',
  RESEARCH: 'research',
  PROFESSIONAL_JOURNEY: 'experience',
} as const;

type TabValue = (typeof tabs)[keyof typeof tabs];

const menuOptions: TabValue[] = [
  tabs.HOME,
  tabs.QUALIFICATIONS,
  tabs.RESEARCH,
  tabs.PROFESSIONAL_JOURNEY,
];

const TAB_LABELS: Record<TabValue, string> = {
  [tabs.HOME]: 'Home',
  [tabs.QUALIFICATIONS]: 'Profile',
  [tabs.RESEARCH]: 'Research',
  [tabs.PROFESSIONAL_JOURNEY]: 'Experience',
};

const SITE_URL = 'https://www.smiguel.net';

const PAGE_SEO: Record<TabValue, { title: string; description: string; path: string }> = {
  [tabs.HOME]: {
    title: 'Sergio Miguel | CTO & Software Architect',
    description:
      "Sergio Miguel's portfolio: AI-driven software architecture, domain design, and delivery acceleration across web, mobile, and cloud.",
    path: '/',
  },
  [tabs.QUALIFICATIONS]: {
    title: 'Profile | Sergio Miguel',
    description:
      'Education, certifications, and technical skills spanning software architecture, cloud, data, and modern engineering.',
    path: '/profile',
  },
  [tabs.RESEARCH]: {
    title: 'Research Projects | Sergio Miguel',
    description:
      'Selected research and applied engineering projects in APIs, mobile platforms, architecture accelerators, and DevOps.',
    path: '/research',
  },
  [tabs.PROFESSIONAL_JOURNEY]: {
    title: 'Experience | Sergio Miguel',
    description:
      'Professional timeline across fintech, blockchain, telecom, and enterprise architecture leadership.',
    path: '/experience',
  },
};

const LEGACY_PATH_TO_TAB: Record<string, TabValue> = {
  '/professional-journey': tabs.PROFESSIONAL_JOURNEY,
  '/projects': tabs.RESEARCH,
  '/expertise': tabs.QUALIFICATIONS,
  '/qualifications': tabs.QUALIFICATIONS,
};

const normalizePath = (pathname: string) => {
  if (!pathname) return '/';
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
};

const getTabFromPath = (pathname: string): TabValue => {
  const normalized = normalizePath(pathname.toLowerCase());
  const matched = Object.entries(PAGE_SEO).find(([, page]) => page.path === normalized)?.[0] as
    | TabValue
    | undefined;
  if (matched) return matched;
  return LEGACY_PATH_TO_TAB[normalized] ?? tabs.HOME;
};

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeTab, setActiveTab] = useState<TabValue>(() =>
    typeof window === 'undefined' ? tabs.HOME : getTabFromPath(window.location.pathname),
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const expertiseSkillGroups = [
    {
      title: 'Core Languages',
      skills: RESUME_DATA.skills.languages,
      levels: [95, 90, 88, 83, 80, 76],
    },
    {
      title: 'Frontend',
      skills: RESUME_DATA.skills.frontend,
      levels: [90, 86, 72, 68],
    },
    {
      title: 'Cloud & DevOps',
      skills: RESUME_DATA.skills.cloud,
      levels: [92, 84, 82, 79],
    },
    {
      title: 'Data Architectures',
      skills: RESUME_DATA.skills.databases,
      levels: [91, 87, 84, 83, 78],
    },
    {
      title: 'Special Ops',
      skills: RESUME_DATA.skills.special,
      levels: [88, 86, 84, 80, 78],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const resolvedTab = getTabFromPath(window.location.pathname);
    const canonicalPath = PAGE_SEO[resolvedTab].path;
    if (normalizePath(window.location.pathname) !== canonicalPath) {
      window.history.replaceState(null, '', canonicalPath);
    }
    setActiveTab(resolvedTab);

    const onPopState = () => {
      setActiveTab(getTabFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const page = PAGE_SEO[activeTab];
    const pageUrl = `${SITE_URL}${page.path === '/' ? '' : page.path}`;

    document.title = page.title;

    const setMeta = (selector: string, attrs: Record<string, string>, content: string) => {
      let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        Object.entries(attrs).forEach(([k, v]) => meta!.setAttribute(k, v));
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    setMeta('meta[name="description"]', { name: 'description' }, page.description);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, page.title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, page.description);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, pageUrl);
    setMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, page.title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, page.description);
    setLink('canonical', pageUrl);
  }, [activeTab]);

  useEffect(() => {
    if (booting) return;
    window.scrollTo(0, 0);
  }, [activeTab, booting]);

  const navigateToTab = (tab: TabValue, replace = false) => {
    setActiveTab(tab);
    const targetPath = PAGE_SEO[tab].path;
    if (normalizePath(window.location.pathname) !== targetPath) {
      if (replace) {
        window.history.replaceState(null, '', targetPath);
      } else {
        window.history.pushState(null, '', targetPath);
      }
    }
  };

  if (booting) {
    return (
      <div className='fixed inset-0 bg-black flex flex-col items-center justify-center p-6 font-mono'>
        <div className='w-full max-w-md'>
          <TerminalLine text='Initializing SérgioOS v20.24...' delay={0.2} />
          <TerminalLine text='Loading 20+ years of experience...' delay={0.5} />
          <TerminalLine text='Bypassing mainframe security...' delay={0.8} />
          <TerminalLine text='Optimizing coffee-to-code ratio...' delay={1.1} />
          <TerminalLine text='Checking for legacy Java 1.3 dependencies...' delay={1.4} />
          <TerminalLine text='System ready. Welcome, Architect.' delay={1.8} />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className='h-1 bg-emerald-500 mt-4 origin-left'
          />
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500/30'>
      {/* Background Grid Effect */}
      <div className='fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none' />

      {/* Header / Top Bar */}
      <header className='sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl'>
        <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
          <button
            onClick={() => navigateToTab(tabs.HOME)}
            className='flex items-center gap-3 hover:opacity-80 transition-opacity text-left'
          >
            <div className='w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0'>
              <Terminal className='w-5 h-5 text-black' />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <h1 className='text-sm font-bold text-white tracking-tight uppercase'>
                  Sergio Miguel
                </h1>
                <span className='hidden sm:inline text-[10px] text-zinc-500 font-mono border border-white/10 px-1.5 rounded'>
                  HANDS-ON ARCHITECT
                </span>
              </div>
              <p className='text-[10px] text-emerald-500 font-mono leading-none'>SMIGUELNET</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className='hidden xl:flex items-center gap-6'>
            {menuOptions.map(tab => (
              <button
                key={tab}
                onClick={() => navigateToTab(tab)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                  activeTab === tab ? 'text-emerald-400' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {TAB_LABELS[tab]}
              </button>
            ))}
          </nav>

          <div className='flex items-center gap-2 xl:gap-4'>
            <div className='hidden xl:flex items-center gap-2'>
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className='p-2 rounded-lg transition-all hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_12px_rgba(81,192,12,0.25)]'
                rel='noopener noreferrer'
                title='Mail to: sergio@smiguel.net'
                aria-label='Email Sergio Miguel'
              >
                <Mail className='w-4 h-4' />
              </a>
              <a
                href={RESUME_DATA.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg transition-all hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_12px_rgba(81,192,12,0.25)]'
                title='Sergio Miguel - LinkedIn'
                aria-label='LinkedIn profile'
              >
                <Linkedin className='w-4 h-4' />
              </a>
              <a
                href={RESUME_DATA.github}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg transition-all hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_12px_rgba(81,192,12,0.25)]'
                title='Sergio Miguel - Github'
                aria-label='GitHub profile'
              >
                <Github className='w-4 h-4' />
              </a>
              <a
                href={RESUME_DATA.resumePdf}
                download='sergiomiguel-resume.pdf'
                className='p-2 rounded-lg transition-all hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_12px_rgba(81,192,12,0.25)]'
                title='Sergio Miguel - Europass CV'
                aria-label='Download Sergio Miguel resume'
              >
                <FileDown className='w-4 h-4' />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='xl:hidden p-2 hover:bg-white/5 rounded-lg transition-colors text-emerald-500'
            >
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='xl:hidden bg-black border-b border-white/5 overflow-hidden'
            >
              <div className='px-6 py-8 flex flex-col gap-6'>
                {menuOptions.map(tab => (
                  <button
                    key={tab}
                    onClick={() => {
                      navigateToTab(tab);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left text-lg font-mono uppercase tracking-widest transition-colors ${
                      activeTab === tab ? 'text-emerald-400' : 'text-zinc-500'
                    }`}
                  >
                    {TAB_LABELS[tab]}
                  </button>
                ))}
                <div className='grid grid-cols-2 gap-3 pt-5 border-t border-white/10'>
                  <a
                    href={`mailto:${RESUME_DATA.email}`}
                    className='flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-zinc-200 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(81,192,12,0.22)]'
                  >
                    <Mail className='w-4 h-4 text-emerald-400 shrink-0' />
                    <span className='font-medium'>Email</span>
                  </a>
                  <a
                    href={RESUME_DATA.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-zinc-200 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(81,192,12,0.22)]'
                  >
                    <Linkedin className='w-4 h-4 text-emerald-400 shrink-0' />
                    <span className='font-medium'>LinkedIn</span>
                  </a>
                  <a
                    href={RESUME_DATA.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-zinc-200 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(81,192,12,0.22)]'
                  >
                    <Github className='w-4 h-4 text-emerald-400 shrink-0' />
                    <span className='font-medium'>GitHub</span>
                  </a>
                  <a
                    href={RESUME_DATA.resumePdf}
                    download='sergiomiguel-resume.pdf'
                    className='flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-zinc-200 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(81,192,12,0.22)]'
                  >
                    <FileDown className='w-4 h-4 text-emerald-400 shrink-0' />
                    <span className='font-medium'>Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className='max-w-6xl mx-auto px-6 py-12 relative'>
        {/* Content Switcher */}
        <AnimatePresence mode='wait'>
          {activeTab === tabs.HOME && (
            <motion.div
              key={tabs.HOME}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='space-y-20'
            >
              {/* Hero Section */}
              <section>
                <div className='grid grid-cols-1 lg:grid-cols-[1.92fr_0.78fr] gap-10 lg:gap-14 items-center'>
                  <div className='space-y-8'>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono'
                    >
                      <Zap className='w-3 h-3' />
                      <span>AI & Architecture Accelerator</span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className='text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9] max-w-4xl'
                    >
                      Accelerating AI-Driven Software Delivery with{' '}
                      <motion.span
                        animate={{
                          textShadow: ['0 0 0px #51c00c', '0 0 10px #51c00c', '0 0 0px #51c00c'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className='text-emerald-500 italic'
                      >
                        Spec-Driven Engineering
                      </motion.span>
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className='text-lg text-zinc-400 max-w-3xl leading-relaxed'
                    >
                      {RESUME_DATA.about}
                    </motion.p>

                    {/* The Quote */}
                    <motion.blockquote
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className='relative max-w-3xl pl-6 md:pl-8 py-1.5 border-l border-emerald-500/40'
                    >
                      <p className='text-base md:text-lg text-zinc-200 leading-relaxed'>
                        <span
                          aria-hidden='true'
                          className='inline-block align-middle leading-none text-2xl md:text-3xl text-emerald-400/75 mr-1'
                        >
                          &ldquo;
                        </span>
                        {RESUME_DATA.quote.text}
                        <span
                          aria-hidden='true'
                          className='inline-block align-middle leading-none text-2xl md:text-3xl text-emerald-400/75 ml-1'
                        >
                          &rdquo;
                        </span>
                      </p>

                      <footer className='mt-3 flex items-center gap-3'>
                        <span className='h-px w-4 bg-gray-500/25' />
                        <cite className='text-[10px] text-emerald-400 font-mono not-italic uppercase tracking-[0.22em]'>
                          {RESUME_DATA.quote.author}
                        </cite>
                      </footer>
                    </motion.blockquote>
                  </div>

                  {/* Profile Widget */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className='relative w-full max-w-[260px] md:max-w-[270px] mx-auto lg:ml-auto group pt-2 pb-3'
                  >
                    <div className='absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_60%_30%,rgba(81,192,12,0.24),transparent_62%)] blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
                    <div className='relative rounded-[2rem] border border-emerald-500/25 bg-gradient-to-br from-emerald-500/[0.12] via-black/75 to-black/60 backdrop-blur-sm px-3 pt-6 pb-11 md:px-4 text-center transition-all duration-300 shadow-[0_0_0_rgba(81,192,12,0)] group-hover:border-emerald-500/45 group-hover:shadow-[0_0_28px_rgba(81,192,12,0.22)]'>
                      <div className='relative mx-auto w-[170px] h-[195px] md:w-[180px] md:h-[200px] lg:w-[190px] lg:h-[218px] rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_18px_rgba(81,192,12,0.2)] transition-all duration-300 group-hover:border-emerald-400/40 group-hover:shadow-[0_0_24px_rgba(81,192,12,0.26)]'>
                        <img
                          src={RESUME_DATA.photo}
                          alt={RESUME_DATA.name}
                          className='w-full h-full max-w-full object-cover'
                          referrerPolicy='no-referrer'
                        />
                        <div className='absolute inset-0 pointer-events-none opacity-[0.05] bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_2px,rgba(16,185,129,0.28)_3px)]' />
                        <motion.div
                          animate={{ top: ['-5%', '105%'], opacity: [0, 0.85, 0] }}
                          transition={{
                            duration: 7,
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: 'linear',
                          }}
                          className='absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_10px_rgba(81,192,12,0.8)] pointer-events-none'
                        />
                      </div>

                      <div className='mt-6 mb-0 flex flex-col items-center'>
                        <p className='text-white font-bold text-[18px] leading-tight uppercase tracking-wide'>
                          Sergio Miguel
                        </p>
                      </div>
                      <div className='absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center gap-2 px-4.5 py-2 rounded-xl border border-emerald-500/40 bg-black shadow-[0_0_14px_rgba(81,192,12,0.2)] whitespace-nowrap'>
                        <MapPin className='w-4.5 h-4 text-emerald-400' />
                        <span className='text-[11px] font-mono uppercase tracking-[0.1em] text-emerald-300 whitespace-nowrap'>
                          {RESUME_DATA.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Areas of Interest - Now on Home */}
              <section className='relative pt-1 border-white/5 overflow-visible'>
                {/* Section Background Glow */}
                <div className='absolute bottom-0 right-0 w-full h-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none' />

                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-12'>
                    <h3 className='text-2xl font-bold text-white uppercase tracking-tighter'>
                      Areas of Interest
                    </h3>
                    <div className='h-px flex-1 bg-white/10' />
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {RESUME_DATA.interests.map((interest, i) => (
                      <InterestCard key={i} interest={interest} delay={i * 0.15} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Line of Research */}
              <section className='pt-1 border-white/5'>
                <div className='flex items-center gap-4 mb-8'>
                  <h3 className='text-2xl font-bold text-white uppercase tracking-tighter'>
                    Line of Research
                  </h3>
                  <div className='h-px flex-1 bg-white/10' />
                </div>
                <div className='relative overflow-hidden p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent'>
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(81,192,12,0.2),transparent_48%)] pointer-events-none' />

                  <div className='relative flex flex-col gap-5 sm:gap-6 mb-8 md:mb-10'>
                    <div>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0'>
                          <FlaskConical className='w-5 h-5' />
                        </div>
                        <p className='text-[12px] pt-1 font-mono uppercase tracking-[0.2em] text-emerald-400'>
                          Research Focus
                        </p>
                      </div>
                      <h4 className='text-3xl sm:text-[2.5rem] lg:text-[3rem] font-bold text-white tracking-tight leading-[1.08]'>
                        {RESUME_DATA.research.title}
                      </h4>
                    </div>
                    <p className='text-base sm:text-lg text-zinc-300 leading-relaxed w-full max-w-none'>
                      {RESUME_DATA.research.description}
                    </p>
                  </div>

                  <div className='relative space-y-4 sm:space-y-5'>
                    {RESUME_DATA.research.phases.map((phase, i) => (
                      <div
                        key={i}
                        className='group rounded-2xl border border-white/10 bg-black/30 p-5 sm:p-6 hover:border-emerald-500/35 hover:bg-emerald-500/[0.04] shadow-[0_0_0_rgba(81,192,12,0)] hover:shadow-[0_0_24px_rgba(81,192,12,0.16)] transition-all duration-300'
                      >
                        <div className='mb-4'>
                          <span className='inline-flex items-center rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-300'>
                            Step {i + 1}
                          </span>
                        </div>
                        <h5 className='text-xl sm:text-2xl font-semibold text-white leading-tight mb-3'>
                          {phase.name}
                        </h5>
                        <p className='text-base text-zinc-400 leading-relaxed'>{phase.details}</p>
                      </div>
                    ))}
                  </div>

                  <div className='relative mt-8 pt-6 border-t border-white/10'>
                    <p className='text-[14px] font-mono uppercase text-emerald-400 mb-2'>
                      Expected Result
                    </p>
                    <h5 className='text-xl sm:text-2xl font-semibold text-white leading-tight mb-3'>
                      {RESUME_DATA.research.expectedResult.title}
                    </h5>
                    <p className='text-base text-zinc-300 leading-relaxed mb-4 max-w-4xl'>
                      {RESUME_DATA.research.expectedResult.details}
                    </p>
                    <p className='text-sm sm:text-base font-mono text-emerald-300/90'>
                      {RESUME_DATA.research.expectedResult.formula}
                    </p>

                    <button
                      onClick={() => navigateToTab(tabs.RESEARCH)}
                      className='mt-10 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(81,192,12,0.3)]'
                    >
                      Research & Projects
                      <ChevronRight className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </section>

              {/* Executive Achievement Dashboard */}
              <section className='relative pt-1 pb-2 border-white/5 overflow-hidden'>
                {/* Section Background Glow */}
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/[0.02] blur-[140px] pointer-events-none' />

                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-12'>
                    <h3 className='text-2xl font-bold text-white uppercase tracking-tighter'>
                      Key Achievements
                    </h3>
                    <div className='h-px flex-1 bg-white/10' />
                  </div>
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                    {RESUME_DATA.achievements.map((achievement, i) => (
                      <MetricGauge
                        key={i}
                        label={achievement.label}
                        value={achievement.value}
                        suffix={achievement.suffix}
                        delay={i * 0.1}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === tabs.PROFESSIONAL_JOURNEY && (
            <motion.section
              key={tabs.PROFESSIONAL_JOURNEY}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className='space-y-10'
            >
              <div className='flex items-center gap-4'>
                <h3 className='text-2xl font-bold text-white uppercase tracking-tight'>
                  Professional Experience Timeline
                </h3>
                <div className='h-px flex-1 bg-white/10' />
              </div>
              <p className='text-zinc-400 max-w-3xl'>
                Career progression across architecture, engineering leadership, fintech, blockchain,
                telecom, and early web product development.
              </p>

              <div className='relative'>
                <div className='absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/70 via-emerald-500/25 to-transparent' />

                <div className='space-y-8'>
                  {RESUME_DATA.experience.map((exp, i) => (
                    <motion.article
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: i * 0.04 }}
                      className='relative pl-12 group'
                    >
                      <div className='absolute left-0 top-5 w-8 h-8 rounded-full border border-emerald-500/40 bg-black/80 text-emerald-300 font-mono text-[10px] flex items-center justify-center shadow-[0_0_14px_rgba(81,192,12,0.35)]'>
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:border-emerald-500/35 shadow-[0_0_0_rgba(81,192,12,0)] hover:shadow-[0_0_24px_rgba(81,192,12,0.14)] transition-all duration-300'>
                        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4'>
                          <div className='space-y-2'>
                            <p className='text-[10px] font-mono uppercase tracking-[0.24em] text-emerald-400'>
                              {exp.company}
                            </p>
                            <h4 className='text-xl font-bold text-white group-hover:text-emerald-300 transition-colors'>
                              {exp.role}
                            </h4>
                          </div>

                          <div className='flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-wider'>
                            <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-black/40 text-zinc-300'>
                              <CalendarDays className='w-3 h-3 text-emerald-400' />
                              {exp.period}
                            </span>
                            {exp.location && (
                              <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-black/40 text-zinc-300'>
                                <MapPin className='w-3 h-3 text-emerald-400' />
                                {exp.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className='text-zinc-300 leading-relaxed'>{exp.description}</p>

                        {exp.highlights && exp.highlights.length > 0 && (
                          <div className='mt-4 space-y-2.5'>
                            {exp.highlights.map((highlight, j) => (
                              <div key={j} className='flex items-start gap-2.5'>
                                <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0' />
                                <p className='text-sm text-zinc-400 leading-relaxed'>{highlight}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className='flex flex-wrap gap-2 mt-5'>
                          {exp.tech.map((t, j) => (
                            <SkillBadge key={j} name={t} />
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === tabs.RESEARCH && (
            <motion.section
              key={tabs.RESEARCH}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className='space-y-8'
            >
              <div>
                <div className='flex items-center gap-4 mb-3'>
                  <h3 className='text-2xl font-bold text-white uppercase tracking-tight'>
                    Research Projects
                  </h3>
                  <div className='h-px flex-1 bg-white/10' />
                </div>
                <p className='text-zinc-400 max-w-3xl leading-relaxed'>
                  Selected initiatives where architecture, product strategy, and execution converge.
                  These projects demonstrate practical research applied to APIs, mobile platforms,
                  and delivery systems.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {RESUME_DATA.projects.map((project, i) => (
                  <article
                    key={i}
                    className='p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 shadow-[0_0_0_rgba(81,192,12,0)] hover:shadow-[0_0_24px_rgba(81,192,12,0.18)] transition-all duration-300 flex flex-col justify-between group'
                  >
                    <div>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500'>
                          <FlaskConical className='w-5 h-5' />
                        </div>
                        <div className='flex gap-2'>
                          {project.links.map((link, j) => (
                            <a
                              key={j}
                              href={link.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='p-2 bg-white/5 rounded-lg hover:bg-emerald-500 hover:text-black transition-all'
                            >
                              <ExternalLink className='w-3 h-3' />
                            </a>
                          ))}
                        </div>
                      </div>
                      <h4 className='text-xl font-bold text-white group-hover:text-emerald-400 transition-colors'>
                        {project.title}
                      </h4>
                      <p className='text-emerald-500 font-mono text-[10px] uppercase tracking-widest mb-4'>
                        {project.subtitle}
                      </p>
                      <p className='text-sm text-zinc-400 leading-relaxed mb-6'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((t, j) => (
                          <span key={j} className='text-[10px] font-mono text-zinc-500'>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='mt-5 pt-4 border-t border-white/10'>
                      <p className='text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2'>
                        Notes
                      </p>
                      <p className='text-xs text-zinc-400 leading-relaxed'>{project.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === tabs.QUALIFICATIONS && (
            <motion.section
              key={tabs.QUALIFICATIONS}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className='grid grid-cols-1 xl:grid-cols-[1.35fr_0.65fr] gap-8'
            >
              {/* Left Column: Education -> Certifications */}
              <div className='space-y-8'>
                <div className='p-8 rounded-3xl bg-white/5 border border-white/10'>
                  <div className='flex items-center gap-4 mb-8'>
                    <GraduationCap className='w-6 h-6 text-emerald-500' />
                    <h3 className='text-2xl font-bold text-white'>Education</h3>
                  </div>
                  <div className='space-y-8'>
                    {RESUME_DATA.education.map((edu, i) => (
                      <div key={i} className='relative pl-6 border-l border-white/10 group'>
                        <div className='absolute -left-1 w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors' />
                        <h4 className='text-lg font-bold text-white'>{edu.degree}</h4>
                        <p className='text-emerald-500 font-mono text-xs'>{edu.institution}</p>
                        <p className='text-zinc-500 text-xs mt-1'>
                          {edu.period} • {edu.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='p-8 rounded-3xl bg-white/5 border border-white/10'>
                  <div className='flex items-center gap-4 mb-8'>
                    <Award className='w-6 h-6 text-emerald-500' />
                    <h3 className='text-2xl font-bold text-white'>Certifications</h3>
                  </div>
                  <div className='grid grid-cols-1 gap-3'>
                    {RESUME_DATA.certifications.map((cert, i) => (
                      <div
                        key={i}
                        className='p-4 rounded-xl bg-black/30 border border-white/5 hover:border-emerald-500/30 shadow-[0_0_0_rgba(81,192,12,0)] hover:shadow-[0_0_24px_rgba(81,192,12,0.18)] transition-all flex items-center gap-4 group'
                      >
                        <div className='w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors'>
                          <ShieldCheck className='w-4 h-4 text-emerald-500' />
                        </div>
                        <span className='text-sm text-zinc-300 leading-tight'>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: All Technical Skills */}
              <div className='p-6 rounded-3xl bg-white/5 border border-white/10 h-fit'>
                <div className='flex items-center gap-4 mb-3'>
                  <Code2 className='w-6 h-6 text-emerald-500' />
                  <h3 className='text-2xl font-bold text-white'>Technical Skills</h3>
                </div>
                <p className='text-xs text-zinc-400'>Skill snapshot with proficiency indicators.</p>

                <div className='space-y-6 mt-6'>
                  {expertiseSkillGroups.map((group, groupIndex) => (
                    <div
                      key={group.title}
                      className='relative space-y-3 p-4 rounded-2xl border border-white/5 bg-gradient-to-br from-emerald-500/[0.06] via-emerald-500/[0.015] to-transparent hover:border-emerald-500/25 shadow-[0_0_0_rgba(81,192,12,0)] hover:shadow-[0_0_20px_rgba(81,192,12,0.12)] transition-all duration-300'
                    >
                      <div className='absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-emerald-500/45' />
                      <p className='text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-300 pl-3'>
                        {group.title}
                      </p>
                      <div className='space-y-2.5'>
                        {group.skills.map((skill, i) => {
                          const level = group.levels[i] ?? 75;
                          return (
                            <div key={skill} className='space-y-1.5'>
                              <div className='flex items-center justify-between gap-3'>
                                <span className='text-xs text-zinc-300 leading-tight'>{skill}</span>
                                <span className='text-[10px] font-mono text-emerald-400 shrink-0'>
                                  {level}%
                                </span>
                              </div>
                              <div className='h-1.5 rounded-full bg-white/10 overflow-hidden'>
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${level}%` }}
                                  viewport={{ once: true, amount: 0.6 }}
                                  transition={{
                                    duration: 0.7,
                                    delay: groupIndex * 0.08 + i * 0.03,
                                    ease: 'easeOut',
                                  }}
                                  className='h-full rounded-full bg-gradient-to-r from-emerald-500/70 to-emerald-300 shadow-[0_0_10px_rgba(81,192,12,0.35)]'
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className='mt-10 border-t border-white/5 bg-black/30'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-emerald-500/[0.03] to-transparent p-8 md:p-10 mb-12'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(81,192,12,0.22),transparent_42%)] pointer-events-none' />
            <div className='relative grid grid-cols-1 md:grid-cols-[1.2fr_auto] gap-8 md:items-center'>
              <div>
                <p className='text-emerald-400 font-mono text-xs mb-3 uppercase tracking-[0.3em]'>
                  Let&apos;s Build
                </p>
                <h3 className='text-3xl md:text-4xl font-bold text-white tracking-tight mb-4'>
                  Ready to turn your next idea into reality?
                </h3>
                <p className='text-zinc-300 max-w-2xl leading-relaxed'>
                  From API architecture to polished web and mobile products, I help teams ship
                  faster with technical depth and pragmatic execution.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row md:flex-col gap-3'>
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className='inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(81,192,12,0.3)]'
                >
                  Start a Project
                  <ChevronRight className='w-4 h-4' />
                </a>
                <a
                  href={RESUME_DATA.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors'
                >
                  Connect on LinkedIn
                  <ExternalLink className='w-4 h-4' />
                </a>
              </div>
            </div>
          </div>

          <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4'>
            <div className='flex items-center gap-2 text-zinc-500 font-mono text-xs'>
              <Command className='w-3 h-3' />
              <span>Sérgio Miguel © {new Date().getFullYear()} • All rights reserved.</span>
            </div>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className='text-xs text-zinc-500 hover:text-emerald-400 transition-colors uppercase tracking-widest'
            >
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
