'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const techLogos = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

export default function TechStackSection() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <section className="py-20 bg-[#0b2b46] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-4"
        >
          {isEn ? "Technologies We Use" : "আমাদের ব্যবহৃত প্রযুক্তি"}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {isEn 
            ? "We leverage the latest and most powerful technologies to build robust, scalable, and secure applications."
            : "আমরা আধুনিক এবং শক্তিশালী প্রযুক্তি ব্যবহার করে সেরা মানের অ্যাপ্লিকেশন তৈরি করি।"}
        </motion.p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-x-hidden w-full group">
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...techLogos, ...techLogos].map((tech, index) => (
            <div key={index} className="mx-10 flex flex-col items-center justify-center min-w-[100px]">
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 hover:bg-white/10 transition-colors cursor-pointer border border-white/10 mb-3">
                <img src={tech.url} alt={tech.name} className="w-12 h-12 object-contain filter drop-shadow-md" />
              </div>
              <span className="text-gray-300 font-medium text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient Edges for smooth fade out */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0b2b46] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0b2b46] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
