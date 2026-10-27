import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Sparkles } from 'lucide-react';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
    }
  };

  const skillPills = [
    { name: "Power BI", bg: "bg-yellow-100 text-yellow-900" },
    { name: "Tableau", bg: "bg-blue-100 text-blue-900" },
    { name: "Excel & Power Query", bg: "bg-emerald-100 text-emerald-900" },
    { name: "DAX", bg: "bg-stone-200 text-stone-900" },
    { name: "Data Storytelling", bg: "bg-orange-100 text-orange-900" },
    { name: "KPI & Metrics Tracking", bg: "bg-red-100 text-red-900" },
    { name: "Python (Pandas, NumPy)", bg: "bg-sky-100 text-sky-900" },
    { name: "SQL & MySQL", bg: "bg-indigo-100 text-indigo-900" },
    { name: "ETL & Data Wrangling", bg: "bg-teal-100 text-teal-900" },
    { name: "Machine Learning & AI", bg: "bg-purple-100 text-purple-900" },
    { name: "Deep Learning & NLP", bg: "bg-pink-100 text-pink-900" },
    { name: "Feature Engineering", bg: "bg-cyan-100 text-cyan-900" },
    { name: "Statistics & Probability", bg: "bg-green-100 text-green-900" },
    { name: "Prompt Engineering", bg: "bg-violet-100 text-violet-900" },
    { name: "Git & GitHub", bg: "bg-gray-100 text-gray-900" },
  ];

  return (
    <div
      id="profile"
      className="px-6 md:px-7 lg:px-10 py-10 rounded-3xl md:rounded-4xl w-full bg-white text-black select-none"
    >
      {/* Giant Typography Header */}
      <div className="w-full overflow-x-hidden hide-scrollbar">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px] text-stone-800 font-bold px-3"
        >
          About
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ transformOrigin: 'left bottom' }}
          className="font-playfair text-[220px] sm:text-[300px] md:text-[350px] lg:text-[400px] text-stone-800 leading-none -mt-8 font-bold"
        >
          Me.
        </motion.h2>
      </div>

      {/* Narrative & Skills Content */}
      <div className="font-inter text-sm sm:text-base md:text-lg space-y-16 sm:space-y-20 md:space-y-28 py-6 sm:py-12 md:pb-16 lg:pb-20">
        
        {/* Who Am I */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4 md:space-y-7"
        >
          <h3 className="font-semibold text-stone-700 text-lg md:text-xl">
            Who Am I
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-stone-600 font-semibold md:text-base">
            I'm <span className="font-bold text-black">Mohammed Sinan C</span>. A passionate{' '}
            <span className="font-bold text-black">Data Analyst</span> based in Malappuram, Kerala, India. I specialize in turning complex raw data into clear, actionable business insights through robust analytics, dashboard development, and report automation.
            <br className="hidden sm:block" />
            Currently delivering data-driven decision intelligence as a{' '}
            <span className="font-bold text-black">Data Analyst Intern at TechnoDot Academy</span>, with prior software engineering roots as a{' '}
            <span className="font-bold text-black">Junior Software Developer at Region Technologies</span>.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4 md:space-y-7"
        >
          <h3 className="font-semibold text-stone-700 text-lg md:text-xl">
            What I Do
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-semibold md:text-base leading-relaxed">
            I bridge the gap between technical datasets and executive business strategy. I architect data cleaning pipelines, design intuitive KPI dashboards, write high-performance SQL, and build machine learning workflows to forecast trends and uncover opportunities.
            <br className="hidden sm:block" />
            My core toolkit spans:
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {skillPills.map((skill, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${skill.bg} transition-transform hover:scale-105 cursor-default`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Outside the Terminal */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4 md:space-y-7"
        >
          <h3 className="font-semibold text-stone-700 text-lg md:text-xl">
            Outside the Terminal{' '}
            <span className="italic text-sm text-stone-500 font-normal">
              (analytical perspective)
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-semibold md:text-base leading-loose">
            When I'm away from spreadsheets and Jupyter notebooks, I stay engaged with advancements in prompt engineering, deep learning vision models, and applied AI tools. I enjoy reading data science publications, exploring algorithmic puzzles, and following international tech trends. I believe every dataset holds an untold narrative waiting for the right perspective.
          </p>
        </motion.div>

        {/* Education & Languages Highlights */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-200"
        >
          {/* Education */}
          <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-stone-200 rounded-xl text-stone-800">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg">Education</h4>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-stone-800 text-sm md:text-base">
                Computer Science
              </p>
              <p className="text-xs md:text-sm text-stone-600">
                Majlis Arts & Science College (Autonomous), Valanchery, Kerala
              </p>
              <p className="text-xs text-stone-500 font-medium">Graduation: 07/2026</p>
            </div>
          </div>

          {/* Languages */}
          <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-stone-200 rounded-xl text-stone-800">
                <Languages className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg">Languages</h4>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["English", "Hindi", "Arabic", "Malayalam"].map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border border-stone-300 text-stone-800 text-xs md:text-sm font-semibold rounded-lg shadow-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-xs text-stone-500 pt-1">
              Fluent communication across multinational and cross-functional teams.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
