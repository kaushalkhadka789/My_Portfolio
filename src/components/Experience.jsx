import React from 'react';
import SectionLabel from './ui/SectionLabel';
import ScrollReveal from './ui/ScrollReveal';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern (MERN Stack)',
      company: 'Code IT Appsware',
      timeline: 'June 2025 – September 2025',
      location: 'Ithari, Nepal',
      bullets: [
        'Developed financial, ecommerce, and content management web applications using React.js, Node.js, Express.js, and MongoDB.',
        'Built responsive frontend interfaces, RESTful APIs, and secure JWT-based authentication.',
        'Worked in a fast-paced Agile team to architect the NepFund crowdfunding platform with campaign management and payment simulations.',
        'Optimized system performance by resolving database query bottlenecks and improving API response times.',
        'Presented completed project architectures, system logic, and interactive modules to key stakeholders.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-stark-black overflow-hidden border-t border-gray-muted/10">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <ScrollReveal>
            <SectionLabel text="My Professional Path" />
            <h2 className="font-heading text-4xl md:text-5xl font-black text-warm-white tracking-widest leading-tight mt-2">
              Work Experience
            </h2>
            <div className="w-24 h-[4px] bg-signal-red mt-6 mx-auto" />
          </ScrollReveal>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 sm:pl-16">
          
          {/* Vertical Timeline Drawing Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-[15px] sm:left-[31px] top-2 w-[2px] bg-signal-red origin-top"
          />

          {/* Timeline Item */}
          {experiences.map((exp, index) => (
            <div key={exp.role} className="relative mb-12">
              
              {/* Red pulsing timeline dot */}
              <div className="absolute left-[-25px] sm:left-[-41px] top-1.5 z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                  className="w-5 h-5 bg-stark-black border-2 border-signal-red flex items-center justify-center relative shadow-[0_0_15px_rgba(217,28,28,0.5)]"
                >
                  <span className="w-2 h-2 bg-signal-red animate-ping absolute" />
                  <span className="w-2 h-2 bg-signal-red" />
                </motion.div>
              </div>

              {/* Content Card */}
              <ScrollReveal delay={0.1} y={40}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 bg-dark-card border-2 border-gray-muted/10 hover:border-signal-red/50 transition-all duration-300 relative text-left group"
                >
                  {/* Floating calendar pill */}
                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-label uppercase tracking-widest text-signal-red mb-4">
                    <span className="flex items-center gap-2 px-3 py-1 bg-signal-red/10 border border-signal-red/30">
                      <Calendar size={14} /> {exp.timeline}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-muted">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-warm-white tracking-widest mb-2 group-hover:text-signal-red transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-label uppercase tracking-widest text-gray-muted mb-6">
                    <Building size={14} className="text-signal-red" />
                    <span>{exp.company}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bIndex) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * bIndex, duration: 0.4 }}
                        key={bIndex}
                        className="flex items-start gap-4 text-sm md:text-base text-gray-muted leading-relaxed font-body"
                      >
                        <span className="w-2 h-2 bg-signal-red shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                </motion.div>
              </ScrollReveal>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
