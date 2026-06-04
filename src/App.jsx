import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import TickerTape from './components/ui/TickerTape';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Fade out loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Custom lagging cursor for desktop */}
      <CustomCursor />

      {/* ── Global SVG Grain Noise ── */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
        style={{ opacity: 0.045 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="global-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#global-grain)" />
      </svg>

      {/* Modern Loader Splash screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.3, 0, 0, 1] }}
            className="fixed inset-0 z-[9998] bg-stark-black flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Spinning monogram */}
              <motion.div
                initial={{ scale: 0.8, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-20 h-20 rounded-full border border-signal-red/40 flex items-center justify-center bg-stark-black shadow-[0_0_40px_rgba(217,28,28,0.15)] relative"
              >
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-warm-white/20 animate-spin duration-10000" />
                <span className="font-heading text-2xl font-black text-signal-red select-none animate-pulse tracking-widest mt-1">
                  &lt;KK/&gt;
                </span>
              </motion.div>

              {/* Staggered progress hint bar */}
              <div className="w-48 h-[1px] bg-warm-white/10 relative overflow-hidden rounded-full mt-2">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-signal-red to-transparent"
                />
              </div>
              <span className="font-label text-[11px] uppercase tracking-[0.25em] text-gray-muted animate-pulse">
                Assembling Portfolio
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col min-h-screen relative"
        >
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <TickerTape />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
