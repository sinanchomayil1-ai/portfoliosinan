import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const name = "Mohammed Sinan C";
  const roles = [
    "Data Analyst",
    "BI & Dashboard Specialist",
    "Data Storyteller & Visualizer",
    "Python & SQL Developer",
    "Machine Learning & AI Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="w-full py-10 select-none sm:py-5 md:py-0 h-screen px-6 md:px-7 rounded-b-3xl flex-col md:rounded-b-4xl lg:px-10 flex items-start justify-between bg-white relative overflow-hidden"
    >
      {/* Easter Egg */}
      <motion.p
        variants={itemVariants}
        whileHover={{ scale: 1.05, color: '#78716c' }}
        transition={{ duration: 0.2 }}
        className="text-xs text-stone-400 select-none cursor-default pt-2 sm:pt-4"
      >
        Easter egg : You are not supposed to see this bruh 🤫
      </motion.p>

      {/* Center Hero Name & Title */}
      <div className="flex w-full items-center justify-center my-auto">
        <motion.div
          variants={itemVariants}
          className="space-y-1 sm:space-y-2 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-inter text-base font-bold text-stone-700"
          >
            Hello, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl text-stone-800 font-bold flex flex-wrap justify-center"
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block cursor-default select-none"
                whileHover={{ scale: 1.5, y: -6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 14 }}
                style={{
                  marginRight: char === ' ' ? '0.5rem' : '0.02em',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-inter text-sm sm:text-base md:text-lg text-stone-500 font-semibold mt-2 sm:mt-4"
          >
            A Data Analyst
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Rotating Role Carousel */}
      <motion.div variants={itemVariants} className="w-full flex py-8 sm:py-10">
        <div className="relative h-8 flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
              exit={{ y: -20, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
              className="font-inter text-lg md:text-xl whitespace-nowrap font-semibold text-stone-600 absolute"
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
