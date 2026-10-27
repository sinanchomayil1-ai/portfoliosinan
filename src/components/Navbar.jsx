import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ lenisRef }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If past hero section (approx 90% of window height)
      if (window.scrollY > window.innerHeight * 0.85) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, target) => {
    e.preventDefault();
    if (lenisRef?.current) {
      if (target === 'top') {
        lenisRef.current.scrollTo(0);
      } else {
        lenisRef.current.scrollTo(target);
      }
    } else {
      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Work', href: '#projects', delay: 0.1 },
    { label: 'About', href: '#profile', delay: 0.2 },
    { label: 'Experience', href: '#experience', delay: 0.3 },
    { label: 'Contact', href: '#contact', delay: 0.4 },
  ];

  return (
    <nav
      className={`fixed select-none w-full flex justify-between items-center py-5 md:py-7 lg:py-7 px-3 sm:px-6 md:px-7 lg:px-10 font-bold z-30 transition-all duration-300 font-inter ${
        isScrolled ? 'bg-black/80 backdrop-blur-md text-white' : 'bg-white text-black'
      }`}
    >
      <div className="relative inline-block">
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          href="#"
          onClick={(e) => scrollTo(e, 'top')}
          className={`text-base sm:text-lg tracking-tighter cursor-pointer relative px-2 sm:px-4 py-1 rounded-xl overflow-hidden transition-colors ${
            isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
          }`}
        >
          Home
        </motion.a>
      </div>

      <div className="flex gap-1 sm:gap-3 md:gap-5 lg:gap-6 text-base">
        {navItems.map((item) => (
          <div key={item.label} className="relative inline-block">
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className={`text-xs sm:text-sm cursor-pointer relative z-10 px-1.5 sm:px-4 py-1 rounded-xl transition-colors overflow-hidden ${
                isScrolled ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
              }`}
            >
              {item.label}
            </motion.a>
          </div>
        ))}
      </div>
    </nav>
  );
}
