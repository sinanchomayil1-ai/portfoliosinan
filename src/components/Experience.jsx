import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';

export default function Experience() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const pathSpring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 15,
    mass: 1,
  });

  const circleX = useMotionValue(25);
  const circleY = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = pathSpring.on("change", (latest) => {
      if (pathRef.current && containerHeight > 0) {
        try {
          const totalLength = pathRef.current.getTotalLength();
          const clamped = Math.max(0, Math.min(1, latest));
          const point = pathRef.current.getPointAtLength(clamped * totalLength);
          circleX.set(point.x);
          circleY.set(point.y);
        } catch (e) {
          // fallback
        }
      }
    });
    return () => unsubscribe();
  }, [pathSpring, containerHeight, circleX, circleY]);

  const curveD = `M 25 0 C 80 ${0.2 * containerHeight}, -30 ${0.4 * containerHeight}, 25 ${0.5 * containerHeight} C 80 ${0.7 * containerHeight}, -30 ${0.9 * containerHeight}, 25 ${containerHeight}`;

  const experiences = [
    {
      id: 1,
      role: "Data Analyst Intern",
      company: "TechnoDot Academy, Kinfra, Kakkanchery",
      date: "07/2026 – Present",
      bullets: [
        "Cleaned and validated large datasets to ensure data integrity, consistency, and analytical accuracy.",
        "Engineered executive reports and dynamic interactive dashboards utilizing Excel, Power BI, Python, and Tableau.",
        "Delivered actionable data-driven insights and KPI tracking to support high-stakes business decision-making."
      ]
    },
    {
      id: 2,
      role: "Junior Software Developer",
      company: "Region Technologies, Calicut, Kerala",
      date: "08/2025 – 03/2026",
      bullets: [
        "Supported software development life-cycle, functional testing, debugging, and application maintenance.",
        "Collaborated closely with cross-functional team members to rapidly identify and resolve technical issues.",
        "Enhanced application responsiveness, database performance, and algorithmic reliability.",
        "Contributed to delivering robust, user-friendly software solutions in agile development sprints."
      ]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 12, mass: 1 },
    },
  };

  return (
    <div
      id="experience"
      className="px-6 md:px-7 lg:px-10 py-10 sm:py-16 md:py-20 w-full text-white bg-black select-none"
    >
      {/* Title */}
      <div className="w-full overflow-x-hidden hide-scrollbar mb-10 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50, rotate: -2, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="font-playfair text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px] text-stone-200 font-bold px-3"
        >
          Experience.
        </motion.h2>
      </div>

      {/* Experience Timeline Grid */}
      <div className="px-0 md:px-6">
        <div ref={containerRef} className="relative flex min-h-[400px]">
          {/* Animated SVG Path & Traveling Glowing Circle */}
          <div className="absolute left-0 top-0 bottom-0 w-[50px] md:w-[80px]">
            {containerHeight > 0 && (
              <svg
                width="100%"
                height={containerHeight}
                className="overflow-visible"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                {/* Background track line */}
                <path
                  d={curveD}
                  fill="transparent"
                  stroke="#292524"
                  strokeWidth="2"
                />

                {/* Drawn active progress line */}
                <motion.path
                  ref={pathRef}
                  d={curveD}
                  fill="transparent"
                  stroke="#a8a29e"
                  strokeWidth="2"
                  style={{ pathLength: pathSpring }}
                />

                {/* Traveling glowing circle */}
                <motion.circle
                  cx={circleX}
                  cy={circleY}
                  r="6"
                  fill="#f5f5f4"
                  className="shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                />
              </svg>
            )}
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 flex-1 ml-16 sm:ml-20 md:ml-28 pb-6 pt-4">
            {experiences.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px", once: true }}
                className="border-b border-stone-800/80 pb-10 last:border-b-0"
              >
                <h3 className="font-inter text-xl sm:text-2xl md:text-3xl font-bold text-stone-100 mb-2">
                  {item.role}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mt-2 mb-4">
                  <p className="font-inter text-sm sm:text-base md:text-lg text-stone-400 font-medium">
                    {item.company}
                  </p>
                  <p className="font-inter text-xs sm:text-sm md:text-base text-stone-500 font-semibold px-4 py-2 bg-stone-900/80 rounded-full w-fit cursor-default border border-stone-800">
                    {item.date}
                  </p>
                </div>

                <ul className="list-disc list-inside space-y-2 font-inter text-xs sm:text-sm text-stone-300">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
