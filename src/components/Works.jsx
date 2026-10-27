import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Works() {
  const titleLetters = "My Works.".split("");

  const projects = [
    {
      id: "fracture-detection",
      gridClass: "md:col-span-7 md:row-span-2",
      title: "Fracture Detection System – AI Diagnostic Vision",
      description: "An AI-powered computer vision & deep learning pipeline analyzing medical X-ray radiographs to localize and detect bone fractures, assisting healthcare practitioners with 96.8% diagnostic precision.",
      cover: "/images/fracturecover.svg",
      tags: [
        { name: "Python", color: "bg-blue-900" },
        { name: "Deep Learning", color: "bg-purple-900" },
        { name: "PyTorch", color: "bg-orange-900" },
        { name: "OpenCV", color: "bg-cyan-900" },
        { name: "Image Processing", color: "bg-emerald-900" },
        { name: "Statistics", color: "bg-gray-900" },
      ],
      github: "https://github.com/mohammedsinan-c/fracture-detection-system",
      live: "https://github.com/mohammedsinan-c/fracture-detection-system",
      bullets: null,
    },
    {
      id: "bi-kpi-dashboard",
      gridClass: "md:col-span-5 md:row-span-2",
      title: "Executive Business Intelligence & KPI Suite",
      description: "Interactive executive dashboards engineered with Power BI, Tableau, and DAX. Converts multi-channel operational and sales data into real-time KPI metrics, revenue forecasts, and actionable insights.",
      cover: "/images/powerbicover.svg",
      tags: [
        { name: "Power BI", color: "bg-yellow-900" },
        { name: "Tableau", color: "bg-blue-900" },
        { name: "DAX", color: "bg-gray-900" },
        { name: "Power Query", color: "bg-emerald-900" },
        { name: "Excel", color: "bg-green-900" },
        { name: "KPI Tracking", color: "bg-red-900" },
      ],
      github: "https://github.com/mohammedsinan-c/powerbi-executive-analytics",
      live: "https://github.com/mohammedsinan-c/powerbi-executive-analytics",
      bullets: null,
    },
    {
      id: "etl-pipeline",
      gridClass: "md:col-span-5 md:row-span-1",
      title: "Automated Data Ingestion & ETL Pipeline",
      description: "Production data cleaning, schema validation, and wrangling pipeline processing raw database transactions into clean, analysis-ready data marts.",
      cover: "/images/etlcover.svg",
      tags: [
        { name: "Python (Pandas)", color: "bg-blue-900" },
        { name: "SQL / MySQL", color: "bg-cyan-900" },
        { name: "ETL Automation", color: "bg-emerald-900" },
        { name: "Data Wrangling", color: "bg-yellow-900" },
      ],
      github: "https://github.com/mohammedsinan-c/automated-etl-pipeline",
      live: "https://github.com/mohammedsinan-c/automated-etl-pipeline",
      bullets: [
        "Automated data cleaning & validation across 500k+ records",
        "Optimized MySQL relational schemas & star-schema staging",
        "Accelerated recurring executive report generation by 75%"
      ],
    },
    {
      id: "predictive-analytics",
      gridClass: "md:col-span-7 md:row-span-1",
      title: "Predictive Customer Churn & LTV Modeling",
      description: "Supervised machine learning framework and interactive Tableau storyboard identifying customer attrition indicators and behavioral retention cohorts.",
      cover: "/images/churncover.svg",
      tags: [
        { name: "Machine Learning", color: "bg-purple-900" },
        { name: "Tableau", color: "bg-blue-900" },
        { name: "Feature Engineering", color: "bg-amber-900" },
        { name: "Statistics & Probability", color: "bg-emerald-900" },
      ],
      github: "https://github.com/mohammedsinan-c/customer-churn-analytics",
      live: "https://github.com/mohammedsinan-c/customer-churn-analytics",
      bullets: [
        "Feature engineering & hypothesis testing over customer metrics",
        "Predictive classification models achieving 92.4% ROC-AUC",
        "Dynamic Tableau storyboards mapping high-risk customer segments"
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="px-4 sm:px-6 md:px-7 bg-black lg:px-10 py-12 sm:py-16 md:py-20 space-y-8 md:space-y-16 w-full"
    >
      {/* Title with letter entrance */}
      <div className="relative">
        <h2 className="font-thin text-7xl sm:text-8xl md:text-9xl text-white font-playfair flex flex-wrap">
          {titleLetters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: [0.42, 0, 0.58, 1]
              }}
              className="relative inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Bento Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 grid-flow-row-dense auto-rows-[350px] md:auto-rows-[300px]"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.gridClass} h-full w-full`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 0.99 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className="group relative overflow-hidden bg-stone-900 rounded-none w-full h-full flex flex-col justify-end cursor-pointer font-playfair border border-stone-800/60"
            >
              {/* Background Cover Image with Hover Zoom */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <img
                  src={project.cover}
                  alt={project.title}
                  loading="lazy"
                  className="object-cover w-full h-full opacity-60 group-hover:opacity-40 group-hover:grayscale transition-all duration-500"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

              {/* Card Foreground Content */}
              <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col h-full justify-end">
                <div className="flex flex-col gap-3 mb-4">
                  {/* Action Link Icons */}
                  <div className="flex gap-3 justify-start">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/10 backdrop-blur-md hover:bg-white/30 transition-all duration-300 transform hover:scale-110 text-white rounded-none"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/10 backdrop-blur-md hover:bg-white/30 transition-all duration-300 transform hover:scale-110 text-white rounded-none"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-white tracking-wide font-medium">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {project.bullets ? (
                    <div className="space-y-2 font-inter">
                      <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="line-clamp-2">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base text-gray-200 line-clamp-3 font-inter">
                      {project.description}
                    </p>
                  )}

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs text-white ${tag.color} font-inter font-medium rounded-none`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
