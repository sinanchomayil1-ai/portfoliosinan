import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Github, Linkedin, Download, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const email = "mohammedsinan_c@outlook.com";
  const phone = "+91 9539778302";
  const phoneTel = "+919539778302";
  const github = "https://github.com/mohammedsinan-c";
  const linkedin = "https://linkedin.com/in/mohammedsinan-c";
  const resume = "/files/Mohammed_Sinan_C_Resume.pdf";
  const location = "Malappuram, Kerala, India";

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 py-10 sm:py-16 md:py-24 lg:py-28 md:px-7 space-y-16 md:space-y-24 lg:px-10 text-white rounded-3xl md:rounded-4xl bg-black select-none border-t border-stone-900"
    >
      {/* Neon Flicker Heading */}
      <h2 className="flicker text-[75px] sm:text-[130px] md:text-[180px] lg:text-[200px] leading-none md:leading-tight text-center font-playfair font-normal">
        Where to find me.
      </h2>

      {/* Main Mail & Interaction Section */}
      <div className="space-y-10 sm:space-y-16 md:space-y-20 text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium text-stone-300">
          Just drop a mail at :
        </p>

        <div className="space-y-8 md:space-y-12">
          {/* Big Email */}
          <a
            href={`mailto:${email}`}
            className="inline-block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold font-playfair text-white hover:text-stone-300 transition-colors"
          >
            {email}
          </a>

          {/* Location indicator */}
          <div className="flex items-center justify-center gap-2 text-stone-400 font-inter text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5 text-stone-500" />
            <span>{location}</span>
          </div>

          {/* Social and Action Buttons */}
          <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-10 pt-2">
            
            {/* Phone Call Button */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`tel:${phoneTel}`}
              className="flex font-semibold transition-all duration-200 ease-out items-center gap-2 rounded-2xl py-2 px-4 hover:scale-105 text-xs sm:text-sm bg-green-900 hover:bg-green-700 text-white shadow-lg"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phone}</span>
            </a>

            {/* GitHub Profile */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={github}
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full hover:scale-110 transition-all duration-200 ease-out bg-stone-900 hover:bg-stone-700 text-white border border-stone-800"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* LinkedIn Profile */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={linkedin}
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full hover:scale-110 transition-all duration-200 ease-out bg-blue-900 hover:bg-blue-700 text-white border border-blue-800"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Download Resume */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={resume}
              download="Mohammed_Sinan_C_Resume.pdf"
              title="Download My Resume"
              aria-label="Download Resume"
              className="p-2.5 rounded-full hover:scale-110 transition-all duration-200 ease-out bg-orange-900 hover:bg-orange-700 text-white border border-orange-800"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Thank you closing note */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center pt-10 sm:pt-12 md:pt-14 lg:pt-16 font-playfair text-stone-400">
        Thank you for checking out
      </p>
    </motion.div>
  );
}
