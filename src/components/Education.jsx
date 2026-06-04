import React from 'react';
import SectionLabel from './ui/SectionLabel';
import ScrollReveal from './ui/ScrollReveal';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: 'BSc (Hons) Computing',
      school: 'Itahari International College',
      timeline: '2023 – Present',
      location: 'Itahari, Nepal',
      icon: GraduationCap,
      description: 'Acquiring deep foundations in advanced software engineering, database management structures, system design, operating systems, and computational theory.',
      website: 'https://iic.edu.np/',
      logo: 'https://iic.edu.np/image/iic-logo.svg',
      logoFallback: null,
    },
    {
      degree: '+2 Science',
      school: 'Sushma Godawari College',
      timeline: '2019 – 2021',
      location: 'Itahari, Nepal',
      icon: School,
      description: 'Focused study in high-level mathematics, physics, and computer science, developing analytical capabilities and early computing logical foundations.',
      website: 'https://www.godawari.edu.np/',
      logo: 'https://www.godawari.edu.np/assets/photo/Sushma.png',
      logoFallback: null,
    }
  ];

  return (
    <section id="education" className="relative py-24 bg-stark-black text-warm-white overflow-hidden border-t border-gray-muted/10">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <ScrollReveal>
            <SectionLabel text="Educational Foundation" />
            <h2 className="font-heading text-4xl md:text-5xl font-black text-warm-white tracking-widest leading-tight mt-2">
              Education & Degrees
            </h2>
            <div className="w-24 h-[4px] bg-signal-red mt-6 mx-auto" />
          </ScrollReveal>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <ScrollReveal key={edu.degree} delay={0.2 * index} y={40}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 bg-dark-card border-l-4 border-l-signal-red border border-gray-muted/10 shadow-2xl text-left relative flex flex-col justify-between h-full transition-all duration-300 hover:border-signal-red/50 group"
                >
                  <div>
                    {/* Logo + Timeline row */}
                    <div className="flex justify-between items-start mb-6">
                      {/* College Logo */}
                      <a href={edu.website} target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <div className="w-14 h-14 bg-white rounded-lg overflow-hidden flex items-center justify-center p-1 shadow-md border border-gray-muted/10 group-hover:ring-2 group-hover:ring-signal-red transition-all">
                          <img
                            src={edu.logo}
                            alt={`${edu.school} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              if (edu.logoFallback && e.target.src !== edu.logoFallback) {
                                e.target.src = edu.logoFallback;
                              } else {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<span class="text-signal-red"><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M22 10v6M2 10l10-5 10 5-10 5z'/><path d='M6 12v5c3 3 9 3 12 0v-5'/></svg></span>`;
                              }
                            }}
                          />
                        </div>
                      </a>

                      {/* Timeline tag */}
                      <span className="flex items-center gap-2 font-label tracking-widest text-[11px] uppercase text-signal-red px-3 py-1 bg-signal-red/10 border border-signal-red/20">
                        <Calendar size={14} /> {edu.timeline}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-widest text-warm-white mb-2 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="font-label tracking-widest uppercase text-sm font-semibold text-gray-muted mb-4">{edu.school}</p>
                    
                    <p className="text-base font-body text-gray-muted leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  </div>

                  {/* Footer: location + visit link */}
                  <div className="flex items-center justify-between mt-auto border-t border-gray-muted/10 pt-6">
                    <div className="flex items-center gap-2 font-label tracking-widest uppercase text-[11px] text-gray-muted">
                      <MapPin size={14} className="text-signal-red" /> {edu.location}
                    </div>
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-label tracking-widest uppercase text-[11px] text-signal-red hover:text-warm-white transition-colors group/link"
                    >
                      Visit Website
                      <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;
