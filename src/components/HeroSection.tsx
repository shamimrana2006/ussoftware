"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe2, Cloud, Megaphone, BrainCircuit, Rocket, Cpu, Users, LineChart, Activity, Zap, CheckCircle2, BookOpen, Award, MonitorPlay, Video, Briefcase, GraduationCap, Code } from "lucide-react";

const Typewriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(
          isDeleting
            ? word.substring(0, currentText.length - 1)
            : word.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className="inline-flex items-center bg-white/60 backdrop-blur-md border border-[#00a884]/20 rounded-full px-4 py-1.5 shadow-[0_4px_15px_rgba(0,168,132,0.1)] min-w-[260px]">
      <Cpu size={16} className="text-[#00a884] mr-2" />
      <span className="text-[#0b2b46] font-mono font-bold text-[15px]">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-[8px] h-[18px] bg-gradient-to-b from-[#00a884] to-[#008f6f] inline-block ml-1.5 rounded-full"
      />
    </div>
  );
};

const Counter = ({ end, suffix = "", duration = 2.5 }: { end: number, suffix?: string, duration?: number }) => {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  const formattedCount = count.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US');

  return <span>{formattedCount}{suffix}</span>;
};

export default function HeroSection() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] pt-12 lg:pt-20 pb-12 lg:pb-24 flex items-center min-h-[90vh]">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00a884]/20 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">

        {/* LEFT COMPONENT: Cascading Floating Cards Design */}
        <div className="relative h-[500px] lg:h-[650px] w-full flex items-center justify-center order-2 lg:order-1 perspective-1000">

          {/* Background Glows for depth */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00a884]/30 rounded-full blur-[60px]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[70px]"
          />

          {/* Central Main Card - Analytics & Progress */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="absolute z-20 w-[85%] max-w-[400px] bg-white/80 backdrop-blur-2xl rounded-3xl p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-white"
          >
             <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00a884] to-[#008f6f] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00a884]/30">
                    <Activity size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b2b46] text-lg">Overall Progress</h3>
                    <p className="text-xs text-gray-500 font-medium">Batch 2024</p>
                  </div>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full text-green-600 text-xs font-bold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                  Live
                </div>
             </div>

             {/* Circular Progress Rings (Mock SVG) */}
             <div className="flex justify-around items-center py-4">
                <div className="relative w-20 h-20 flex items-center justify-center">
                   <svg className="absolute inset-0 w-full h-full -rotate-90">
                     <circle cx="40" cy="40" r="36" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                     <motion.circle cx="40" cy="40" r="36" fill="none" stroke="#00a884" strokeWidth="6" strokeDasharray="226" initial={{ strokeDashoffset: 226 }} animate={{ strokeDashoffset: 45 }} transition={{ duration: 2, delay: 0.5 }} strokeLinecap="round" />
                   </svg>
                   <span className="font-bold text-[#0b2b46]">80%</span>
                </div>
                <div className="relative w-20 h-20 flex items-center justify-center">
                   <svg className="absolute inset-0 w-full h-full -rotate-90">
                     <circle cx="40" cy="40" r="36" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                     <motion.circle cx="40" cy="40" r="36" fill="none" stroke="#3b82f6" strokeWidth="6" strokeDasharray="226" initial={{ strokeDashoffset: 226 }} animate={{ strokeDashoffset: 20 }} transition={{ duration: 2, delay: 0.7 }} strokeLinecap="round" />
                   </svg>
                   <span className="font-bold text-[#0b2b46]">92%</span>
                </div>
             </div>
             
             <div className="flex justify-around text-xs text-gray-500 font-medium mt-2">
               <span>Coursework</span>
               <span>Placements</span>
             </div>
          </motion.div>

          {/* Floating Top Right Card - Tech Stack / Code */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 1, x: [0, -10, 0], y: [0, 10, 0] }}
            transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, x: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute top-[10%] right-[0%] lg:-right-[5%] z-10 bg-[#0f172a] rounded-2xl p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/10 w-[240px]"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code size={16} className="text-blue-400" />
              <span className="text-gray-300 text-xs font-mono tracking-wider">Next.js Engine</span>
            </div>
            <div className="space-y-3">
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-blue-400"></motion.div>
              </div>
              <div className="w-4/5 bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="h-full bg-purple-400"></motion.div>
              </div>
              <div className="w-3/5 bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} className="h-full bg-green-400"></motion.div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 font-mono">Status</span>
              <span className="text-[10px] text-green-400 font-mono">Compiling...</span>
            </div>
          </motion.div>

          {/* Floating Bottom Left Card - Mentors */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ opacity: { duration: 0.8, delay: 0.4 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, x: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute bottom-[10%] left-[0%] lg:-left-[5%] z-30 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_30px_60px_-15px_rgba(0,168,132,0.15)] border border-gray-100 w-[220px]"
          >
            <div className="flex items-center space-x-3 mb-4">
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                 <Users size={18} className="text-orange-500" />
               </div>
               <div>
                 <p className="text-[#0b2b46] font-bold text-sm">Expert Mentors</p>
                 <p className="text-gray-500 text-[10px]">1-on-1 Guidance</p>
               </div>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg">
               <div className="flex -space-x-2">
                 {["68", "32", "12"].map((num, i) => (
                    <img key={i} src={`https://i.pravatar.cc/150?img=${num}`} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" alt="mentor"/>
                 ))}
               </div>
               <span className="text-[10px] font-bold text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full">Available</span>
            </div>
          </motion.div>

          {/* Small Floating Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 z-0 w-16 h-16 border-2 border-dashed border-[#00a884]/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 z-0 w-12 h-12 border-2 border-blue-400/30 rounded-lg"
          />

        </div>

        {/* RIGHT COMPONENT: Text & CTA (Swapped Order) */}
        <motion.div className="space-y-7 relative z-30 order-1 lg:order-2 lg:pl-10" variants={containerVariants} initial="hidden" animate="visible">

          {/* Top Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00a884]/10 to-transparent border border-[#00a884]/20 rounded-full px-4 py-1.5 shadow-sm">
            <Rocket size={14} className="text-[#00a884]" />
            <span className="text-xs font-bold text-[#0b2b46] uppercase tracking-wider">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-[#0b2b46] leading-[1.05] tracking-tight">
            {t.hero.title1} <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a884] via-[#00c698] to-[#3b82f6]">
                {t.hero.title2}
              </span>
              <svg className="absolute w-full h-[12px] bottom-[-4px] left-0 text-[#00a884]/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                <motion.path
                  d="M2,10 Q100,0 198,8"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants}>
            <Typewriter words={t.hero.typingWords} />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-gray-600 font-medium text-[17px] max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative bg-[#0b2b46] hover:bg-[#1e3a8a] text-white px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 shadow-[0_10px_20px_rgba(11,43,70,0.2)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">{t.hero.ourServices}</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#0b2b46] border-2 border-gray-200 hover:border-[#00a884] hover:text-[#00a884] px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 shadow-sm transition-all"
            >
              <span>{t.hero.contactUs}</span>
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200 mt-4 flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen size={18} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#0b2b46] leading-none"><Counter end={43} suffix="+" /></h3>
                <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">{t.hero.stats.courses.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users size={18} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#0b2b46] leading-none"><Counter end={4700} suffix="+" /></h3>
                <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">{t.hero.stats.students.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LineChart size={18} className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#0b2b46] leading-none"><Counter end={70} suffix="%" /></h3>
                <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">Placement Rate</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
