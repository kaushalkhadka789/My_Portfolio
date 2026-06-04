import React, { useState, useEffect } from 'react';
import {
  Mail, Linkedin, Phone, ArrowRight, Download,
  Code2, Server, Database, Globe, MapPin,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

/* ── Hero slideshow images ─────────────────────────────────
   Add / remove image paths here to control the slideshow.
   All images must be placed inside the /public folder.
────────────────────────────────────────────────────────── */
const PROFILE_IMAGES = [
  '/kaushal-hero.jpg',
];

const SKILL_CHIPS = [
  { Icon: Code2, label: 'React.js' },
  { Icon: Server, label: 'Node.js' },
  { Icon: Database, label: 'MongoDB' },
  { Icon: Globe, label: 'TypeScript' },
];

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.072 } } };
  const letterV = {
    hidden: { y: 72, opacity: 0, skewX: 4 },
    visible: { y: 0, opacity: 1, skewX: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
  };
  const itemV = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
  };

  const nameLetters = 'Kaushal'.split('');
  const surnameLetters = 'Khadka'.split('');

  // Auto-cycle through images every 3.5 seconds
  useEffect(() => {
    if (PROFILE_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % PROFILE_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center bg-stark-black overflow-hidden pt-24 pb-12">



      {/* ── Atmospheric Accents ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-signal-red/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-warm-white/5 blur-[120px] pointer-events-none z-0" />

      {/* ════════════════════════════════════════
          MAIN GRID
      ════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10">

        {/* ╔══════════════════════════════════
            LEFT — Text Content
        ══════════════════════════════════╗ */}
        <motion.div
          variants={containerV}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemV}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-dark-card border border-gray-muted/20 text-signal-red font-label text-[13px] tracking-[0.2em] uppercase mb-8 select-none shadow-lg shadow-black/50"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemV}
            className="text-gray-muted font-label text-base tracking-[0.2em] uppercase mb-2"
          >
            Hi, I'm
          </motion.p>

          {/* ── Name ── */}
          <h1
            className="font-heading leading-[0.9] select-none mb-5 overflow-hidden"
            style={{ fontSize: 'clamp(4rem, 9vw, 6.5rem)' }}
          >
            <span className="inline-block mr-4">
              {nameLetters.map((ch, i) => (
                <motion.span
                  key={i}
                  variants={letterV}
                  className="inline-block text-warm-white hover:text-signal-red transition-colors duration-200"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
            <span className="inline-block">
              {surnameLetters.map((ch, i) => (
                <motion.span
                  key={i}
                  variants={letterV}
                  className="inline-block text-signal-red hover:text-warm-white transition-colors duration-200"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            variants={itemV}
            className="h-[4px] w-24 mb-6 bg-signal-red"
          />

          {/* Typewriter subtitle */}
          <motion.div variants={itemV} className="h-10 flex items-center mb-6">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 2000,
                'React & Node.js Engineer', 2000,
                'RESTful API Architect', 2000,
                'Full Stack Engineer', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-label text-xl md:text-2xl text-warm-white tracking-widest uppercase"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemV}
            className="text-gray-muted text-base md:text-lg max-w-xl leading-[1.8] mb-10"
          >
            I craft high-performance web applications with clean architecture and
            scalable microservice designs. Specializing in the MERN stack, robust REST
            APIs, and pixel-perfect frontends — delivering digital experiences that{' '}
            <span className="text-warm-white font-bold">feel as good as they perform</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemV}
            className="flex flex-wrap gap-4 items-center mb-10 w-full md:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden px-8 py-4 bg-signal-red text-warm-white font-label tracking-widest uppercase text-sm font-bold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-signal-red/20 active:scale-95"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="group px-8 py-4 border-2 border-gray-muted/30 text-warm-white font-label tracking-widest uppercase text-sm font-bold flex items-center justify-center gap-3 transition-colors hover:border-signal-red hover:text-signal-red active:scale-95"
            >
              Download CV
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemV}
            className="flex flex-wrap gap-6 items-center text-sm font-label tracking-wider uppercase text-gray-muted"
          >
            {[
              { href: 'mailto:kaushalkhadka789@gmail.com', Icon: Mail, label: 'kaushalkhadka789@gmail.com' },
              { href: 'https://linkedin.com/in/kaushal-khadka-073a0b347', Icon: Linkedin, label: 'LinkedIn', external: true },
              { href: 'tel:+9779765982062', Icon: Phone, label: '+977 9765982062' },
            ].map(({ href, Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-2 hover:text-signal-red transition-colors"
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform" />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ╔══════════════════════════════════
            RIGHT — Photo Column
        ══════════════════════════════════╗ */}
        <motion.div
          initial={{ opacity: 0, x: 55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.05, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex lg:col-span-5 justify-center items-center relative"
        >
          {/* Offset Red Drop Shadow Block */}
          <div className="absolute w-[340px] h-[450px] bg-signal-red translate-x-6 translate-y-6 z-0 transition-transform duration-500 hover:translate-x-8 hover:translate-y-8" />

          {/* Photo frame */}
          <div className="relative overflow-hidden w-[340px] h-[450px] bg-dark-card border-2 border-stark-black z-10 group">

            {/* Crossfade slideshow */}
            <AnimatePresence mode="sync">
              <motion.img
                key={currentImg}
                src={PROFILE_IMAGES[currentImg]}
                alt="Kaushal Khadka"
                draggable={false}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>

            {/* Info overlay inside photo */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stark-black via-stark-black/80 to-transparent p-6 text-left transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <p className="font-heading text-2xl text-signal-red tracking-widest mb-1">Kaushal Khadka</p>
              <div className="flex items-center gap-2 text-warm-white font-label tracking-widest text-sm">
                <MapPin size={12} className="text-signal-red" />
                Itahari, Nepal
              </div>
            </div>

            {/* Slide indicator dots */}
            {PROFILE_IMAGES.length > 1 && (
              <div className="absolute bottom-3 right-3 flex gap-1.5 z-20">
                {PROFILE_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImg
                      ? 'bg-signal-red scale-125'
                      : 'bg-warm-white/40 hover:bg-warm-white/70'
                      }`}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>


          {/* Floating Skill Chips */}
          <div className="absolute right-[calc(100%-20px)] top-[20%] flex flex-col gap-3 z-20">
            {SKILL_CHIPS.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 bg-dark-card border border-gray-muted/20 shadow-xl px-4 py-3 group hover:border-signal-red/50 transition-colors"
              >
                <Icon size={16} className="text-signal-red group-hover:scale-110 transition-transform" />
                <span className="font-label tracking-widest text-sm text-warm-white uppercase">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;