import React from 'react';
import { motion } from 'framer-motion';

const TickerTape = () => {
  const words = [
    "MERN STACK DEVELOPER",
    "FULL STACK ARCHITECT",
    "BUILDING SCALABLE SOLUTIONS",
    "PROBLEM SOLVER",
    "DESIGN ENTHUSIAST",
    "MERN STACK DEVELOPER",
    "FULL STACK ARCHITECT",
    "BUILDING SCALABLE SOLUTIONS"
  ];

  return (
    <div className="w-full bg-signal-red overflow-hidden py-3 border-y border-red-800 relative z-20 flex">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12">
            {words.map((word, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="font-heading text-xl md:text-3xl text-stark-black font-black tracking-widest uppercase mt-1">
                  {word}
                </span>
                <span className="w-2 h-2 rounded-full bg-stark-black" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TickerTape;
