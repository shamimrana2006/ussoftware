"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Terminal, Monitor, Layout, Cpu, Users, Star } from "lucide-react";

export default function HeroSection5() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 min-h-screen flex items-center justify-center">
      
      {/* Animated Liquid Background SVG */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[#00a884]/10">
          <motion.path 
            animate={{ 
              d: [
                "M0,50 C20,60 40,30 60,50 C80,70 100,40 100,50 L100,100 L0,100 Z",
                "M0,50 C20,30 40,70 60,40 C80,20 100,60 100,50 L100,100 L0,100 Z",
                "M0,50 C20,60 40,30 60,50 C80,70 100,40 100,50 L100,100 L0,100 Z"
              ] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full fill-blue-500/5 -scale-x-100">
          <motion.path 
            animate={{ 
              d: [
                "M0,60 C30,40 50,80 70,50 C90,20 100,60 100,60 L100,100 L0,100 Z",
                "M0,60 C20,80 40,30 70,60 C80,70 100,40 100,60 L100,100 L0,100 Z",
                "M0,60 C30,40 50,80 70,50 C90,20 100,60 100,60 L100,100 L0,100 Z"
              ] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Main Typography */}
        <div className="relative z-20 mix-blend-difference mb-10 w-full flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-black text-white leading-[0.9] tracking-tighter uppercase"
          >
            {language === 'en' ? 'Shape The' : 'ভবিষ্যত'} <br />
            <span className="text-[#00a884]">{language === 'en' ? 'Future.' : 'গড়ুন'}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-400 mt-6 max-w-xl text-lg font-medium mix-blend-difference"
          >
            {language === 'en' 
              ? 'Join a vibrant community of creators, engineers, and innovators. We don’t just teach code; we forge the next generation of tech leaders.' 
              : 'ক্রিয়েটর, ইঞ্জিনিয়ার এবং ইনোভেটরদের প্রাণবন্ত কমিউনিটিতে যোগ দিন। আমরা শুধু কোড শেখাই না; আমরা আগামী দিনের টেক লিডার তৈরি করি।'}
          </motion.p>
        </div>

        {/* Floating Abstract Images / Cards */}
        <div className="relative w-full max-w-4xl h-[400px] mt-10">
           
           {/* Center Mask Reveal Image */}
           <motion.div 
             initial={{ clipPath: "inset(100% 0 0 0)" }}
             animate={{ clipPath: "inset(0% 0 0 0)" }}
             transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[350px] bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl z-10"
           >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700 cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                 <div className="text-left">
                   <h3 className="text-white font-bold text-2xl">Collaborative Learning</h3>
                   <p className="text-gray-300">Real-world team projects</p>
                 </div>
              </div>
           </motion.div>

           {/* Floating Rotating Badge (Bottom Right) */}
           <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 1, type: "spring" }}
             className="absolute -bottom-10 right-10 lg:right-20 z-30 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-2"
           >
              <div className="relative w-full h-full">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border border-dashed border-[#00a884] rounded-full absolute inset-0"
                ></motion.div>
                {mounted && (
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" style={{ animationDuration: '15s' }}>
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[11px] font-black uppercase tracking-[0.2em] fill-[#0f172a]">
                      <textPath href="#circlePath" startOffset="0%">
                         Top Rated IT Institute 2024 • Top Rated IT Institute 2024 • 
                      </textPath>
                    </text>
                  </svg>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                   <Star size={24} className="text-[#00a884]" fill="currentColor" />
                </div>
              </div>
           </motion.div>

           {/* Floating Skill Tags */}
           <motion.div 
             animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-10 left-10 lg:left-0 z-20 bg-white px-6 py-3 rounded-full shadow-xl border border-gray-100 flex items-center space-x-2"
           >
             <Code size={18} className="text-blue-500" />
             <span className="font-bold text-[#0f172a]">Full Stack Dev</span>
           </motion.div>

           <motion.div 
             animate={{ y: [15, -15, 15], rotate: [5, -5, 5] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute top-20 right-10 lg:-right-10 z-20 bg-white px-6 py-3 rounded-full shadow-xl border border-gray-100 flex items-center space-x-2"
           >
             <Layout size={18} className="text-purple-500" />
             <span className="font-bold text-[#0f172a]">UI/UX Design</span>
           </motion.div>

           <motion.div 
             animate={{ y: [-10, 10, -10], x: [-10, 10, -10] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
             className="absolute bottom-10 left-10 lg:-left-20 z-20 bg-white px-6 py-3 rounded-full shadow-xl border border-gray-100 flex items-center space-x-2"
           >
             <Cpu size={18} className="text-red-500" />
             <span className="font-bold text-[#0f172a]">AI & Machine Learning</span>
           </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex space-x-6"
        >
          <button className="bg-[#0f172a] hover:bg-black text-white px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_20px_40px_rgba(15,23,42,0.3)]">
             {language === 'en' ? 'Start Your Journey' : 'যাত্রা শুরু করুন'}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
