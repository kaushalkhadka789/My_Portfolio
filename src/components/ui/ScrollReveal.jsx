import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, duration = 0.7, y = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1] // Custom easeOut-like cubic bezier
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
