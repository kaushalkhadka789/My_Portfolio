import React, { useState, useMemo } from 'react';
import SectionLabel from './ui/SectionLabel';
import ScrollReveal from './ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Flame, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const VISIBLE_DEFAULT = 4;

/* ─── Data ────────────────────────────────────────────────── */
const projects = [
  {
    name: 'NepFund Crowdfunding Platform',
    description:
      'A robust crowdfunding and fundraising platform built for Nepal using the MERN stack. Enables social impact campaigns to accept donations, track goals with real-time progress bars, and present analytics. Integrated with a simulated Khalti payment gateway, interactive donation feeds, and an organizer dashboard for seamless campaign tracking.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    features: ['Payment Sandbox', 'Real-time Feeds', 'Organizer Dashboard'],
    category: 'Full Stack',
    github: 'https://github.com/kaushalkhadka789/kaushal-khadka-Nepfund',
    demo: 'https://nepfund-s4n8.onrender.com/',
    icon: '🌱',
    featured: true,
    timeline: 'Aug – Sep 2025',
  },
  {
    name: 'AutoParts Hub — Vehicle e-Commerce',
    description: 'A robust full-stack vehicle auto parts e-commerce and inventory management system built with ASP.NET Core and C#. The platform enables users to browse vehicle parts, filter products by vehicle make and model, manage shopping carts, and place orders efficiently. It includes secure authentication and authorization, inventory tracking, and an administrative dashboard for product and order management.',
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'Bootstrap', 'JWT Authentication'],
    features: ['Parts Catalog', 'Inventory Management', 'Cart & Order Processing'],
    category: 'Full Stack',
    github: 'https://github.com/kaushalkhadka789/Vehicle',
    demo: '',
    icon: '🚗',
    featured: true,
    timeline: 'Oct – Nov 2025'
  },
  {
    name: 'Book Store — Full Stack eCommerce Platform',
    description: 'A full-stack online bookstore application built with React, Node.js, Express.js, and MySQL. The platform allows users to browse books, search products dynamically, manage shopping carts, and place orders through a responsive interface. Features include secure authentication, RESTful API integration, database-driven inventory management, and an intuitive user experience for both customers and administrators.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'CSS'],
    features: ['Book Catalog', 'Cart Management', 'Order Processing'],
    category: 'Full Stack',
    github: 'https://github.com/Kaushal55555/book-store',
    demo: '',
    icon: '📚',
    featured: true,
    timeline: '2025'
  },
  {
    name: 'Learning Management System (LMS)',
    description: 'A full-stack Learning Management System built using the MERN stack, designed to provide a complete e-learning experience for students and administrators. The platform supports secure user authentication, course management, student enrollment, progress tracking, and interactive learning workflows through a modern responsive interface.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'Tailwind CSS'],
    features: ['Course Management', 'Student Enrollment', 'Progress Tracking'],
    category: 'Full Stack',
    github: 'https://github.com/Kaushal55555/Learning-Management-System',
    demo: '',
    icon: '🎓',
    featured: true,
    timeline: '2025'
  },
  {
    name: 'Foodie — Online Food Ordering Platform',
    description: 'A full-stack food ordering and restaurant management web application built with modern web technologies. The platform allows users to browse food items, explore restaurant menus, place orders, and manage their accounts through a responsive and user-friendly interface. Features include dynamic product listings, secure authentication, cart functionality, and efficient order management workflows.',
    tags: ['React.js', 'Type Script', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Authentication'],
    features: ['Food Catalog', 'Cart & Ordering System', 'User Authentication'],
    category: 'Full Stack',
    github: 'https://github.com/kaushalkhadka789/Foodie',
    demo: '',
    icon: '🍔',
    featured: true,
    timeline: '2025'
  },
];

/* ─── ProjectCard (compact) ───────────────────────────────── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.35, delay: index * 0.07 }}
    className="bg-dark-card border border-signal-red/20 group relative overflow-hidden flex flex-col
               transition-all duration-300 hover:border-signal-red/50
               hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.15)]"
  >
    {/* Top sweep accent */}
    <span className="absolute top-0 left-0 w-0 h-[3px] bg-signal-red transition-all duration-500 group-hover:w-full pointer-events-none" />

    {/* ── Card Header ── */}
    <div className="p-5 pb-3 flex items-start justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-2xl flex-shrink-0 leading-none">{project.icon}</span>
        <div className="min-w-0">
          <h3 className="font-heading text-base md:text-lg font-bold tracking-wide text-warm-white leading-snug line-clamp-1">
            {project.name}
          </h3>
          <span className="text-[10px] font-label tracking-[0.18em] uppercase text-signal-red mt-0.5 block">
            {project.timeline}
          </span>
        </div>
      </div>

      {/* Badges column */}
      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
        {project.featured && (
          <span className="flex items-center gap-1 px-1.5 py-0.5 border border-signal-red/70 text-signal-red text-[9px] font-bold uppercase tracking-widest">
            <Flame size={8} className="animate-pulse" /> Hot
          </span>
        )}
        <span className="px-1.5 py-0.5 bg-signal-red/10 text-signal-red text-[9px] font-label uppercase tracking-widest border border-signal-red/20">
          {project.category}
        </span>
      </div>
    </div>

    {/* ── Description ── */}
    <div className="px-5 pb-4 flex-1">
      <p className="text-sm text-gray-muted leading-relaxed line-clamp-3 font-body">
        {project.description}
      </p>
    </div>

    {/* ── Tech Tags ── */}
    <div className="px-5 pb-4">
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-label text-[10px] tracking-widest uppercase text-signal-red
                       border border-signal-red/20 px-2 py-0.5 bg-signal-red/5
                       transition-colors duration-200 group-hover:border-signal-red/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* ── Footer ── */}
    <div className="px-5 py-3.5 border-t border-gray-muted/10 flex items-center justify-between gap-3 bg-signal-red/[0.025]">
      {/* Feature chips */}
      <div className="flex items-center gap-3 min-w-0 overflow-hidden">
        {project.features.map((feat) => (
          <span
            key={feat}
            className="flex items-center gap-1.5 text-[10px] font-label uppercase tracking-widest text-gray-muted/70 whitespace-nowrap"
          >
            <span className="w-1 h-1 bg-signal-red flex-shrink-0" />
            {feat}
          </span>
        ))}
      </div>

      {/* Link buttons */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 border border-gray-muted/20 flex items-center justify-center
                     text-gray-muted hover:text-signal-red hover:border-signal-red/60
                     transition-all duration-200"
          title="View on GitHub"
        >
          <Github size={14} />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-gray-muted/20 flex items-center justify-center
                       text-gray-muted hover:text-signal-red hover:border-signal-red/60
                       transition-all duration-200"
            title="Live Demo"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ─── Main Section ────────────────────────────────────────── */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState(false);

  // Build filter list with counts
  const filters = useMemo(() => {
    const catMap = {};
    projects.forEach((p) => {
      catMap[p.category] = (catMap[p.category] || 0) + 1;
    });
    return [
      { label: 'All', count: projects.length },
      ...Object.entries(catMap).map(([label, count]) => ({ label, count })),
    ];
  }, []);

  const filtered = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter],
  );

  const visible = expanded ? filtered : filtered.slice(0, VISIBLE_DEFAULT);
  const hiddenCount = filtered.length - VISIBLE_DEFAULT;
  const hasMore = filtered.length > VISIBLE_DEFAULT;

  const handleFilter = (label) => {
    setActiveFilter(label);
    setExpanded(false);
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-stark-black text-warm-white overflow-hidden border-t border-gray-muted/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col items-center mb-14 text-center">
          <ScrollReveal>
            <SectionLabel text="What I've Built" />
            <h2 className="font-heading text-4xl md:text-5xl font-black text-warm-white tracking-widest leading-tight mt-2">
              Featured Projects
            </h2>
            <div className="w-24 h-[4px] bg-signal-red mt-6 mx-auto" />
          </ScrollReveal>
        </div>

        {/* ── Filter Tabs ── */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-2 mb-10 flex-wrap justify-center">
            {filters.map(({ label, count }) => (
              <button
                key={label}
                onClick={() => handleFilter(label)}
                className={`group/btn px-4 py-2 text-[11px] font-label tracking-[0.18em] uppercase border
                            transition-all duration-200 flex items-center gap-2
                            ${activeFilter === label
                    ? 'bg-signal-red text-warm-white border-signal-red'
                    : 'border-gray-muted/25 text-gray-muted hover:border-signal-red/60 hover:text-signal-red'
                  }`}
              >
                {label}
                <span
                  className={`text-[9px] px-1 py-0.5 font-bold transition-colors duration-200
                              ${activeFilter === label
                      ? 'bg-white/20 text-warm-white'
                      : 'bg-gray-muted/10 text-gray-muted group-hover/btn:bg-signal-red/10 group-hover/btn:text-signal-red'
                    }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Project Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Empty state */}
            {visible.length === 0 && (
              <div className="text-center py-20 text-gray-muted font-label tracking-widest uppercase text-sm">
                No projects in this category yet.
              </div>
            )}

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <AnimatePresence>
                {visible.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── Show More / Collapse ── */}
        {hasMore && (
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <button
                onClick={() => setExpanded((e) => !e)}
                className="px-6 py-2.5 border border-gray-muted/25 text-gray-muted font-label tracking-[0.18em]
                           uppercase text-[11px] flex items-center gap-2
                           hover:border-signal-red/60 hover:text-signal-red transition-all duration-200"
              >
                {expanded ? (
                  <><ChevronUp size={13} /> Collapse</>
                ) : (
                  <><ChevronDown size={13} /> Show {hiddenCount} More</>
                )}
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* ── GitHub CTA ── */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <a
              href="https://github.com/kaushalkhadka789"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-signal-red text-signal-red font-label tracking-widest
                         uppercase text-sm font-bold flex items-center gap-3
                         transition-colors hover:bg-signal-red hover:text-warm-white active:scale-95"
            >
              More on GitHub <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Projects;