import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';
import ScrollReveal from './ui/ScrollReveal';
import { Award, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-stark-black text-warm-white overflow-hidden border-t border-gray-muted/10">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column - Graphic/Avatar Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <ScrollReveal delay={0.1} y={60} className="relative">

              {/* Offset Red Drop Shadow Block */}
              <div className="absolute inset-0 bg-signal-red translate-x-4 translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

              {/* Photo Frame Card */}
              <div className="w-[300px] h-[380px] md:w-[320px] md:h-[420px] bg-stark-black border-2 border-stark-black relative z-10 overflow-hidden shadow-2xl group">
                {/* Profile Image with subtle zoom on hover */}
                <img
                  src="/kaushal-khadka.jpg"
                  alt="Kaushal Khadka"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating overlay details at the bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stark-black via-stark-black/90 to-transparent p-6 pt-20 text-left">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-heading text-2xl font-bold tracking-widest text-warm-white">Kaushal Khadka</p>
                      <p className="text-xs text-signal-red font-label tracking-widest uppercase mt-1">Full Stack Developer</p>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-signal-red flex items-center justify-center bg-signal-red/10 text-signal-red shrink-0">
                      <Award size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute top-12 left-[-15%] md:left-[-10%] bg-dark-card border border-signal-red/20 shadow-xl px-5 py-4 z-20 flex items-center gap-4 select-none"
              >
                <div className="w-10 h-10 border border-signal-red flex items-center justify-center text-signal-red bg-signal-red/5">
                  <Briefcase size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-gray-muted font-label uppercase tracking-widest leading-none">Experience</p>
                  <p className="text-base font-bold text-warm-white mt-1">1.5+ Year</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-12 right-[-15%] md:right-[-10%] bg-dark-card border border-signal-red/20 shadow-xl px-5 py-4 z-20 flex items-center gap-4 select-none"
              >
                <div className="w-10 h-10 border border-signal-red flex items-center justify-center text-signal-red bg-signal-red/5">
                  <GraduationCap size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-gray-muted font-label uppercase tracking-widest leading-none">Projects</p>
                  <p className="text-base font-bold text-warm-white mt-1">15+</p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column - Text Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <ScrollReveal delay={0.2}>
              <SectionLabel text="About Me" />
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-warm-white tracking-widest leading-tight mt-2 mb-6">
                Full Stack Developer <br /> with a passion for <br /> building things that matter.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base text-gray-muted leading-relaxed mb-6 font-body">
                I'm Kaushal Khadka, a BSc (Hons) Computing graduate from Ithari International College with a strong passion for designing and building scalable, high-performance web applications. I specialize in full-stack development using the MERN stack, secure RESTful API architecture, and creating intuitive user experiences through clean, maintainable, and efficient code.
                <br /><br />
                Driven by a continuous desire to learn and innovate, I enjoy transforming complex business requirements into practical digital solutions that deliver real value. My technical interests extend beyond application development into system architecture, cloud technologies, microservices, and modern software engineering practices.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <ScrollReveal delay={0.4} y={30}>
                <div className="p-6 bg-dark-card border border-gray-muted/10 flex gap-4 hover:border-signal-red transition-all duration-300">
                  <div className="w-10 h-10 border border-signal-red flex items-center justify-center text-signal-red shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading text-xl font-bold tracking-widest text-warm-white mb-1">Education</h3>
                    <p className="text-sm font-semibold text-gray-muted">BSc Hons Computing</p>
                    <p className="text-xs text-signal-red mt-1 font-label tracking-wider uppercase">Ithari Int'l College</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5} y={30}>
                <div className="p-6 bg-dark-card border border-gray-muted/10 flex gap-4 hover:border-signal-red transition-all duration-300">
                  <div className="w-10 h-10 border border-signal-red flex items-center justify-center text-signal-red shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading text-xl font-bold tracking-widest text-warm-white mb-1">Experience</h3>
                    <p className="text-sm font-semibold text-gray-muted">Full Stack Intern</p>
                    <p className="text-xs text-signal-red mt-1 font-label tracking-wider uppercase">Code IT Appsware</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
