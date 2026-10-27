import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-stone-300 selection:text-black">
      {/* Interactive Liquid Blob Cursor */}
      <Cursor />

      {/* Persistent Navigation Bar */}
      <Navbar lenisRef={lenisRef} />

      {/* Main Portfolio Sections */}
      <main className="w-full relative z-10 flex flex-col">
        {/* Hero Section (White card with rounded bottom) */}
        <Hero />

        {/* Works / Bento Grid Section (Black background) */}
        <Works />

        {/* About Me Section (White card with rounded corners) */}
        <About />

        {/* Experience Section (Black background with SVG timeline curve) */}
        <Experience />

        {/* Contact Section (Black card with neon flicker heading) */}
        <Contact />
      </main>
    </div>
  );
}
