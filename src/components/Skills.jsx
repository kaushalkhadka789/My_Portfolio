import React, { useState } from 'react';
import SectionLabel from './ui/SectionLabel';
import ScrollReveal from './ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Layout, Wrench,
  Server, Zap, GitBranch, Share2, Route, Lock, Grid, Users, Network,
  Atom, Compass, Palette, Braces, Sparkles,
  GitFork, Terminal, Lightbulb,
} from 'lucide-react';

const LEVEL_CONFIG = {
  Expert: { percentage: 95 },
  Advanced: { percentage: 78 },
  Intermediate: { percentage: 62 },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const categories = [
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  const skillData = {
    backend: [
      { name: 'Backend Development', level: 'Expert', icon: Server },
      { name: 'API Development', level: 'Expert', icon: Share2 },
      { name: 'Database Management', level: 'Advanced', icon: Database },
      { name: 'Authentication & Security', level: 'Advanced', icon: Lock },
      { name: 'Server-Side Architecture', level: 'Advanced', icon: Grid },
      { name: 'Performance Optimization', level: 'Intermediate', icon: Zap },
    ],
    frontend: [
      { name: 'Frontend Development', level: 'Expert', icon: Layout },
      { name: 'Responsive Web Design', level: 'Expert', icon: Palette },
      { name: 'UI Development', level: 'Expert', icon: Atom },
      { name: 'Interactive User Experiences', level: 'Advanced', icon: Sparkles },
      { name: 'Modern JavaScript', level: 'Expert', icon: Braces },
    ],
    tools: [
      { name: 'Version Control', level: 'Expert', icon: GitFork },
      { name: 'Development Tools', level: 'Expert', icon: Terminal },
      { name: 'Debugging & Testing', level: 'Advanced', icon: Wrench },
      { name: 'Problem Solving', level: 'Expert', icon: Lightbulb },
      { name: 'Software Development Practices', level: 'Advanced', icon: GitBranch },
    ],
  };

  const gridV = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const cardV = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
  };

  return (
    <section id="skills" className="relative py-28 bg-[#080808] overflow-hidden">

      {/* Red vertical accent bar */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-signal-red" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <ScrollReveal>
            <SectionLabel text="Professional Skills" />
            <h2 className="font-heading text-warm-white tracking-widest mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              SKILLS &amp; <span className="text-signal-red">TECHNOLOGIES</span>
            </h2>
            <div className="mt-5 w-16 h-1 bg-signal-red mx-auto" />
          </ScrollReveal>
        </div>

        {/* Tab Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#111] border border-[#222]">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className="relative flex items-center gap-2.5 px-6 py-3.5 transition-all duration-200"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="skillTabBg"
                        className="absolute inset-0 bg-signal-red"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon
                      size={14}
                      style={{ position: 'relative', zIndex: 1 }}
                      className={isActive ? 'text-stark-black' : 'text-gray-muted'}
                    />
                    <span
                      style={{ position: 'relative', zIndex: 1 }}
                      className={`font-label tracking-widest uppercase text-sm font-bold ${isActive ? 'text-stark-black' : 'text-gray-muted'}`}
                    >
                      {cat.label}
                    </span>
                    <span
                      style={{ position: 'relative', zIndex: 1 }}
                      className={`font-label text-xs px-1.5 py-0.5 font-bold ${isActive ? 'bg-stark-black text-signal-red' : 'bg-[#222] text-gray-muted'}`}
                    >
                      {skillData[cat.id].length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div style={{ minHeight: '300px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={gridV}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {skillData[activeTab].map((skill) => {
                const SkillIcon = skill.icon;
                const lvl = LEVEL_CONFIG[skill.level] ?? LEVEL_CONFIG.Advanced;

                return (
                  <motion.div
                    key={skill.name}
                    variants={cardV}
                    whileHover={{ y: -3 }}
                    className="flex flex-col p-5 bg-[#111] border border-[#222] hover:border-signal-red/60 transition-colors group"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      {/* Red icon box */}
                      <div className="w-10 h-10 bg-signal-red flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <SkillIcon size={18} className="text-stark-black" />
                      </div>
                      <div>
                        <p className="font-heading text-base text-warm-white tracking-widest">{skill.name}</p>
                        <p className="font-label text-[10px] tracking-widest uppercase text-signal-red mt-0.5">{skill.level}</p>
                      </div>
                    </div>

                    {/* Progress bar track */}
                    <div className="w-full h-[3px] bg-[#222] overflow-hidden">
                      <motion.div
                        className="h-full bg-signal-red"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lvl.percentage}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="font-label text-[10px] text-gray-muted">{lvl.percentage}%</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;