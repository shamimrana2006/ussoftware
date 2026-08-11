"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe2, Cloud, Megaphone, BrainCircuit, Rocket, Cpu, Users, LineChart } from "lucide-react";

const Typewriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2000);
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
    <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-[#00a884]/30 rounded-lg px-3 h-[40px] shadow-sm min-w-[240px]">
      <Cpu size={16} className="text-[#00a884] mr-2" />
      <span className="text-[#0b2b46] font-mono font-semibold text-base">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-[6px] h-[18px] bg-[#00a884] inline-block ml-1 rounded-full"
      />
    </div>
  );
};

const Counter = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
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

  // Track mouse position globally
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth springs for fluid motion
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  // Calculate 3D Rotations (Tilt) based on global mouse position
  const rotateX = useTransform(smoothY, [0, windowSize.height], [15, -15]);
  const rotateY = useTransform(smoothX, [0, windowSize.width], [-15, 15]);

  // Extra dramatic 3D effect for the logo
  const logoRotateX = useTransform(smoothY, [0, windowSize.height], [30, -30]);
  const logoRotateY = useTransform(smoothX, [0, windowSize.width], [-30, 30]);

  // Reflective Light (Glare) positioning
  const glareX = useTransform(smoothX, [0, windowSize.width], [100, -100]);
  const glareY = useTransform(smoothY, [0, windowSize.height], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden bg-[#f4fcf9] pt-12 lg:pt-14 pb-12 lg:pb-16 flex">

      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00a884]/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <motion.div className="space-y-5 relative z-30" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-1.5 bg-white border border-[#00a884]/30 rounded-full px-3 py-1 shadow-sm">
            <Rocket size={14} className="text-[#00a884]" />
            <span className="text-xs font-medium text-[#00a884]">{t.hero.badge}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-extrabold text-[#0b2b46] leading-[1.1]">
            {t.hero.title1} <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">{t.hero.title2}</span>
              <svg className="absolute w-full h-[10px] bottom-[-2px] left-0 text-[#f97316]" viewBox="0 0 200 12" preserveAspectRatio="none">
                <motion.path
                  d="M2,10 Q100,0 198,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <Typewriter words={t.hero.typingWords} />
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-700 font-medium text-base max-w-md leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="bg-white border border-[#00a884]/20 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1.5 text-xs text-gray-500 mb-1.5">
                <Cpu size={14} className="text-[#00a884]" />
                <span>{t.hero.stats.courses.title}</span>
              </div>
              <h3 className="text-xl font-black text-[#0b2b46]"><Counter end={50} suffix="+" /></h3>
              <p className="text-[11px] text-gray-400">{t.hero.stats.courses.desc}</p>
            </div>
            <div className="bg-white border border-[#f97316]/20 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1.5 text-xs text-gray-500 mb-1.5">
                <Users size={14} className="text-[#f97316]" />
                <span>{t.hero.stats.students.title}</span>
              </div>
              <h3 className="text-xl font-black text-[#0b2b46]"><Counter end={6200} suffix="+" /></h3>
              <p className="text-[11px] text-gray-400">{t.hero.stats.students.desc}</p>
            </div>
            <div className="bg-white border border-[#3b82f6]/20 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1.5 text-xs text-gray-500 mb-1.5">
                <LineChart size={14} className="text-[#3b82f6]" />
                <span>{t.hero.stats.placement.title}</span>
              </div>
              <h3 className="text-xl font-black text-[#0b2b46]"><Counter end={92} suffix="%" /></h3>
              <p className="text-[11px] text-gray-400">{t.hero.stats.placement.desc}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-3">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-[#00a884] hover:bg-[#008f6f] text-white px-6 py-2.5 rounded-xl font-bold flex items-center space-x-2 shadow-xl shadow-[#00a884]/30 transition-all text-sm"
            >
              <span>{t.hero.ourServices}</span>
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-[#00a884] border border-[#00a884]/30 px-6 py-2.5 rounded-xl font-bold flex items-center space-x-2 shadow-sm transition-all text-sm"
            >
              <span>{t.hero.contactUs}</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Full 3D Interactive Zone */}
        <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center pointer-events-none perspective-[1500px] transform-style-3d">

          {/* Elegant 3D Concentric Circle Floor (Podium) matching Image */}
          <motion.div
            className="absolute w-[800px] h-[800px] flex items-center justify-center transform-style-3d"
            style={{ rotateX: 81, y: 200, z: -200, scale: 0.7 }}
          >
            {/* Deep Shadow Base removed as requested */}

            {/* STAIR 1: The Base Thick Foundation */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`base-${i}`} className={`absolute inset-[0%] rounded-full bg-[#020617] border border-[#0f172a] ${i === 9 ? 'bg-gradient-to-tr from-[#020617] to-[#0f172a] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] border-[#1e293b]' : ''}`} style={{ transform: `translateZ(${-100 + (i * 2)}px)` }}></div>
            ))}

            {/* STAIR 2: Cyan Neon Glowing Step */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`cyan-${i}`} className={`absolute inset-[3%] rounded-full bg-[#083344] border border-[#164e63] ${i === 7 ? 'bg-[#082f49] shadow-[0_0_50px_#06b6d4,inset_0_0_40px_#22d3ee] border-[#22d3ee] border-[2px]' : ''}`} style={{ transform: `translateZ(${-80 + (i * 2)}px)` }}></div>
            ))}

            {/* INTERLOCKING ROTATING STAIRS */}

            {/* STAIR 3: Middle Dark Platform (Slow Clockwise) */}
            <motion.div animate={{ rotateZ: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`mid-${i}`} className={`absolute inset-[6%] rounded-full bg-[#0f172a] border border-[#1e293b] ${i === 9 ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[#334155] shadow-[inset_0_0_40px_rgba(0,0,0,0.7)]' : ''}`} style={{ transform: `translateZ(${-65 + (i * 2)}px)` }}>
                  {i === 9 && (
                    <>
                      <div className="absolute top-[-2px] left-1/4 w-[60px] h-[4px] bg-[#06b6d4]/80 shadow-[0_0_15px_#06b6d4] rotate-[-20deg]"></div>
                      <div className="absolute bottom-[-2px] right-1/4 w-[60px] h-[4px] bg-[#06b6d4]/80 shadow-[0_0_15px_#06b6d4] rotate-[-20deg]"></div>
                    </>
                  )}
                </div>
              ))}
            </motion.div>

            {/* STAIR 4: Purple Neon Step with Visible Nodes (Medium Anti-Clockwise) */}
            <motion.div animate={{ rotateZ: [0, -360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={`purple-${i}`} className={`absolute inset-[9%] rounded-full bg-[#3b0764] border border-[#581c87] ${i === 7 ? 'bg-[#2e1065] shadow-[0_0_50px_#a855f7,inset_0_0_40px_#c084fc] border-[#c084fc] border-[2px]' : ''}`} style={{ transform: `translateZ(${-45 + (i * 2)}px)` }}>
                  {i === 7 && (
                    <>
                      <div className="absolute top-[-4px] left-1/2 w-[40px] h-[8px] bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_40px_#c084fc] -translate-x-1/2"></div>
                      <div className="absolute bottom-[-4px] left-1/2 w-[40px] h-[8px] bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_40px_#c084fc] -translate-x-1/2"></div>
                      <div className="absolute left-[-4px] top-1/2 h-[40px] w-[8px] bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_40px_#c084fc] -translate-y-1/2"></div>
                      <div className="absolute right-[-4px] top-1/2 h-[40px] w-[8px] bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_40px_#c084fc] -translate-y-1/2"></div>
                    </>
                  )}
                </div>
              ))}
            </motion.div>

            {/* STAIR 5: Top Metallic Premium Surface (Fast Clockwise) */}
            <motion.div animate={{ rotateZ: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={`top-${i}`} className={`absolute inset-[12%] rounded-full bg-[#94a3b8] border border-[#64748b] ${i === 7 ? 'bg-gradient-to-br from-[#ffffff] via-[#f1f5f9] to-[#e2e8f0] shadow-[inset_0_0_50px_rgba(255,255,255,1),0_0_50px_rgba(15,23,42,0.5)] border-2 border-[#cbd5e1]' : ''}`} style={{ transform: `translateZ(${-30 + (i * 2)}px)` }}>
                  {i === 7 && (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                      {/* Floor Grooves */}
                      <div className="absolute w-[85%] h-[85%] rounded-full border-[2px] border-dashed border-[#94a3b8]/50 shadow-[inset_0_0_20px_rgba(148,163,184,0.1)]"></div>
                      <div className="absolute w-[85%] h-[85%] rounded-full border-[3px] border-transparent border-t-[#64748b] border-b-[#64748b] opacity-60"></div>
                      <div className="absolute w-[65%] h-[65%] rounded-full border-[3px] border-dashed border-[#cbd5e1]/80 shadow-[0_0_30px_rgba(148,163,184,0.2)]"></div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* STAIR 6: Giant Glassy Top Pillar (Very Fast Anti-Clockwise) */}
            <motion.div animate={{ rotateZ: [0, -360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={`pillar-${i}`} className={`absolute inset-[15%] rounded-full ${i === 19 ? 'bg-gradient-to-br from-[#cffafe]/90 via-[#06b6d4]/40 to-transparent backdrop-blur-2xl shadow-[inset_0_0_40px_rgba(34,211,238,0.8),0_15px_40px_rgba(6,182,212,0.5)] border-2 border-[#67e8f9]' : 'bg-[#06b6d4]/[0.05] border border-[#22d3ee]/30'}`} style={{ transform: `translateZ(${-15 + (i * 2)}px)` }}>
                  {i === 19 && (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                      {/* Center Hologram Core Area Moved to Top */}
                      <div className="absolute w-[60%] h-[60%] rounded-full bg-gradient-to-b from-[#f8fafc]/90 to-[#f1f5f9]/90 border-[4px] border-dashed border-[#a855f7] shadow-[0_15px_40px_rgba(168,85,247,0.4)] flex items-center justify-center">
                        <div className="w-[70%] h-[70%] rounded-full border-[3px] border-dashed border-[#06b6d4] animate-pulse"></div>

                        {/* Sci-fi HUD Rings to make rotation visible */}
                        <div className="absolute w-[130%] h-[130%] rounded-full border-[3px] border-transparent border-t-[#22d3ee] border-b-[#22d3ee]"></div>
                        <div className="absolute w-[160%] h-[160%] rounded-full border-[2px] border-transparent border-l-[#a855f7] border-r-[#a855f7]"></div>
                      </div>

                      {/* 4 Glowing Tracking Nodes on the edge of the pillar */}
                      <div className="absolute top-[-3px] left-1/2 w-[30px] h-[6px] bg-white rounded-full shadow-[0_0_15px_#22d3ee] -translate-x-1/2"></div>
                      <div className="absolute bottom-[-3px] left-1/2 w-[30px] h-[6px] bg-white rounded-full shadow-[0_0_15px_#22d3ee] -translate-x-1/2"></div>
                      <div className="absolute left-[-3px] top-1/2 h-[30px] w-[6px] bg-white rounded-full shadow-[0_0_15px_#22d3ee] -translate-y-1/2"></div>
                      <div className="absolute right-[-3px] top-1/2 h-[30px] w-[6px] bg-white rounded-full shadow-[0_0_15px_#22d3ee] -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Stationary Reflection Glare removed as per request */}
          </motion.div>

          {/* Main 3D Container tracking mouse */}
          <motion.div
            style={{ rotateX, rotateY, scale: 0.7 }}
            className="absolute w-full h-full flex items-center justify-center transform-style-3d"
          >
            {/* Central Moderately Extruded Logo Card */}
            <motion.div
              style={{ rotateX: logoRotateX, rotateY: logoRotateY }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-50 w-[200px] h-[200px] transform-style-3d translate-z-[100px]"
            >
              {/* Elegant Thick Glass Extrusion Layers */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-[28px] border border-white/30 translate-z-[-15px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[28px] border border-white/50 translate-z-[-8px]"></div>

              {/* Main Glass Front Layer */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white/90 rounded-[28px] shadow-[inset_0_0_15px_rgba(255,255,255,0.7)] flex items-center justify-center overflow-hidden">
                {/* Reflective Glare */}
                <motion.div
                  style={{ x: glareX, y: glareY }}
                  className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/80 to-transparent rotate-45 pointer-events-none"
                />
              </div>

              {/* 3D Extruded Cropped Logo */}
              <div className="absolute inset-0 flex items-center justify-center transform-style-3d pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                  <img
                    key={`logo-ext-${i}`}
                    src="/logo/us software logo.png"
                    alt="US Logo"
                    className={`absolute w-[130px] h-[130px] object-cover object-left ${i === 14 ? 'drop-shadow-[0_15px_20px_rgba(0,168,132,0.6)]' : 'brightness-0 invert opacity-[0.4] blur-[0.5px]'}`}
                    style={{ transform: `translateZ(${8 + i * 2}px)` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* 3D CIRCUIT TRACKS & LASERS (Single Box per Track with Drop Shadow & Radius) */}
            <div 
              className="absolute inset-0 pointer-events-none transform-style-3d z-30"
              style={{ transform: "translateZ(20px)" }}
            >
              {/* 1. Web Dev (Emerald Green) */}
              <motion.div 
                className="absolute top-[25%] left-[15%] w-[35%] h-[25%] border-t-[2px] border-r-[2px] border-[#10b981]/50 rounded-tr-[25px] drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                animate={{ y: [-15, 20, -15], x: [-5, 5, -5] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              >
                <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_15px_4px_#10b981]"
                  animate={{ top: ['100%', '0%', '0%', '0%'], left: ['100%', '100%', '0%', '0%'], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.9, 1] }}
                  style={{ x: "-50%", y: "-50%" }}
                />
              </motion.div>

              {/* 2. Cyber Security (Rose/Pink) */}
              <motion.div 
                className="absolute top-[20%] left-[50%] w-[35%] h-[30%] border-t-[2px] border-l-[2px] border-[#f43f5e]/50 rounded-tl-[25px] drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" 
                animate={{ y: [-20, 15, -20] }} 
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-[#f43f5e] shadow-[0_0_15px_4px_#f43f5e]"
                  animate={{ top: ['100%', '0%', '0%', '0%'], left: ['0%', '0%', '100%', '100%'], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.9, 1], delay: 0.5 }}
                  style={{ x: "-50%", y: "-50%" }}
                />
              </motion.div>

              {/* 3. Cloud Solutions (Cyan/Aqua) */}
              <motion.div 
                className="absolute top-[50%] left-[20%] w-[30%] h-[25%] border-b-[2px] border-r-[2px] border-[#06b6d4]/50 rounded-br-[25px] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
                animate={{ y: [15, -15, 15], x: [5, -5, 5] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-[#06b6d4] shadow-[0_0_15px_4px_#06b6d4]"
                  animate={{ top: ['0%', '100%', '100%', '100%'], left: ['100%', '100%', '0%', '0%'], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.9, 1], delay: 1 }}
                  style={{ x: "-50%", y: "-50%" }}
                />
              </motion.div>

              {/* 4. AI & Machine Learning (Vivid Purple) */}
              <motion.div 
                className="absolute top-[50%] left-[50%] w-[40%] h-[2px] bg-[#a855f7]/50 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
                animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }} 
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-[#a855f7] shadow-[0_0_15px_4px_#a855f7]"
                  animate={{ top: ['0%', '0%'], left: ['0%', '100%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear", times: [0, 0.9, 1], delay: 0.2 }}
                  style={{ x: "-50%", y: "-50%" }}
                />
              </motion.div>

              {/* 5. Digital Marketing (Yellow/Gold) */}
              <motion.div 
                className="absolute top-[50%] left-[50%] w-[30%] h-[25%] border-b-[2px] border-l-[2px] border-[#eab308]/50 rounded-bl-[25px] drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" 
                animate={{ y: [-15, 20, -15], rotateZ: [-2, 2, -2] }} 
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-[#eab308] shadow-[0_0_15px_4px_#eab308]"
                  animate={{ top: ['0%', '100%', '100%', '100%'], left: ['0%', '0%', '100%', '100%'], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.9, 1], delay: 0.8 }}
                  style={{ x: "-50%", y: "-50%" }}
                />
              </motion.div>
            </div>

            {/* FLOATING FEATURE CARDS WITH REFINED GLASS EXTRUSION */}

            {/* 1. Web Development */}
            <motion.div
              animate={{ y: [-15, 20, -15], x: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="absolute left-[0%] top-[20%] z-40 transform-style-3d translate-z-[60px]"
            >
              {/* Elegant Thick Glass Block */}
              <div className="absolute inset-0 bg-[#00a884]/10 backdrop-blur-xl rounded-2xl border border-[#00a884]/20 translate-z-[-16px] shadow-xl"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 translate-z-[-8px]"></div>

              <div className="relative bg-white/90 backdrop-blur-xl border border-white/80 shadow-md rounded-2xl p-3 pr-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a884] to-[#008f6f] flex items-center justify-center shadow-inner">
                  <Globe2 size={24} className="text-white" />
                </div>
                <span className="font-extrabold text-[#0b2b46] text-sm leading-tight">Web <br /> Development</span>
              </div>
            </motion.div>

            {/* 2. Cloud Solutions */}
            <motion.div
              animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-[5%] top-[70%] z-30 transform-style-3d translate-z-[40px]"
            >
              <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-xl rounded-2xl border border-blue-500/20 translate-z-[-16px] shadow-xl"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 translate-z-[-8px]"></div>

              <div className="relative bg-white/90 backdrop-blur-xl border border-white/80 shadow-md rounded-2xl p-3 pr-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-inner">
                  <Cloud size={24} className="text-white" />
                </div>
                <span className="font-extrabold text-[#0b2b46] text-sm leading-tight">Cloud <br /> Solutions</span>
              </div>
            </motion.div>

            {/* 3. Cyber Security */}
            <motion.div
              animate={{ y: [-20, 15, -20] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-[0%] top-[15%] z-30 transform-style-3d translate-z-[80px]"
            >
              <div className="absolute inset-0 bg-red-500/10 backdrop-blur-xl rounded-2xl border border-red-500/20 translate-z-[-16px] shadow-xl"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 translate-z-[-8px]"></div>

              <div className="relative bg-white/90 backdrop-blur-xl border border-white/80 shadow-md rounded-2xl p-3 pr-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-inner">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <span className="font-extrabold text-[#0b2b46] text-sm leading-tight">Cyber <br /> Security</span>
              </div>
            </motion.div>

            {/* 4. AI & Machine Learning */}
            <motion.div
              animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-[-10%] top-[45%] z-50 transform-style-3d translate-z-[120px]"
            >
              <div className="absolute inset-0 bg-indigo-500/20 backdrop-blur-xl rounded-2xl border border-indigo-500/30 translate-z-[-20px] shadow-[0_20px_40px_rgba(79,70,229,0.3)]"></div>
              <div className="absolute inset-0 bg-indigo-900/50 backdrop-blur-xl rounded-2xl border border-indigo-700/40 translate-z-[-10px]"></div>

              <div className="relative bg-indigo-950/90 backdrop-blur-2xl border border-indigo-400/50 shadow-[0_0_25px_rgba(99,102,241,0.4)] rounded-2xl p-3 pr-6 flex items-center space-x-4 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                  <BrainCircuit size={24} className="text-white animate-pulse" />
                </div>
                <span className="font-extrabold text-white text-sm leading-tight">AI & Machine <br /> Learning</span>
              </div>
            </motion.div>

            {/* 5. Digital Marketing */}
            <motion.div
              animate={{ y: [-15, 20, -15], rotateZ: [-2, 2, -2] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-[5%] top-[70%] z-20 transform-style-3d translate-z-[50px]"
            >
              <div className="absolute inset-0 bg-orange-500/10 backdrop-blur-xl rounded-2xl border border-orange-500/20 translate-z-[-16px] shadow-xl"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 translate-z-[-8px]"></div>

              <div className="relative bg-white/90 backdrop-blur-xl border border-white/80 shadow-md rounded-2xl p-3 pr-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-inner">
                  <Megaphone size={24} className="text-white" />
                </div>
                <span className="font-extrabold text-[#0b2b46] text-sm leading-tight">Digital <br /> Marketing</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
