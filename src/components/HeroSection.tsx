"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Cloud, Megaphone, Rocket, Cpu, Users, LineChart, Activity, Zap, CheckCircle2, BookOpen, Award, MonitorPlay, Video, Briefcase, GraduationCap, Code, Network, PenTool, Lock, Pause, Volume2, Maximize, Bot, Braces, Play } from "lucide-react";
import RobotCanvas from "./RobotCanvas";
import Link from "next/link";

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
    <div className="inline-flex items-center bg-white/70 backdrop-blur-md border border-[#008744]/25 rounded-full px-4 py-1.5 shadow-[0_4px_15px_rgba(0,135,68,0.1)] min-w-[260px]">
      <Cpu size={16} className="text-[#008744] mr-2" />
      <span className="text-[#08121a] font-mono font-bold text-[15px]">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-[8px] h-[18px] bg-gradient-to-b from-[#DE1F26] to-[#008744] inline-block ml-1.5 rounded-full"
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fcfdfd] via-[#f5f9f7] to-[#edf4f0] pt-6 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-24 flex items-center min-h-[90vh]">
      {/* Dynamic Background Mesh Gradients in Red & Green */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#008744]/18 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#DE1F26]/12 via-rose-500/8 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] bg-[#008744]/8 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,18,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(8,18,26,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">

        {/* LEFT COMPONENT: AI Video Hub Design */}
        <div className="relative h-[340px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center order-2 lg:order-1 mt-6 lg:mt-0">

          {/* Orbital Rings Background - Red & Green Cyber Aesthetics */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Inner dashed ring */}
            <div className="w-[350px] h-[350px] rounded-full border-[1.5px] border-[#008744]/25 border-dashed absolute animate-[spin_40s_linear_infinite]"></div>
            {/* Middle solid ring */}
            <div className="w-[500px] h-[500px] rounded-full border border-[#DE1F26]/15 absolute"></div>
            {/* Outer dashed ring */}
            <div className="w-[700px] h-[700px] rounded-full border border-[#008744]/20 border-dashed absolute animate-[spin_60s_linear_infinite_reverse]"></div>

            {/* Glowing Orbiting Orbs in Brand Red & Green */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[500px] h-[500px]">
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#DE1F26] rounded-full shadow-[0_0_20px_8px_rgba(222,31,38,0.5)]"></div>
            </motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[700px] h-[700px]">
              <div className="absolute top-[20%] right-[-10px] w-5 h-5 bg-[#008744] rounded-full shadow-[0_0_20px_8px_rgba(0,135,68,0.5)]"></div>
              <div className="absolute bottom-10 left-20 w-3 h-3 bg-[#DE1F26] rounded-full shadow-[0_0_15px_5px_rgba(222,31,38,0.5)]"></div>
            </motion.div>
          </div>

          {/* Premium Floating Badges */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[25%] sm:top-[30%] -left-[5%] sm:-left-[10%] lg:-left-[15%] z-30 bg-[#08121a]/85 backdrop-blur-xl border border-[#DE1F26]/40 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex items-center scale-[0.8] sm:scale-100 origin-left"
          >
            <Braces size={22} className="text-[#DE1F26] mr-3" />
            <span className="font-mono font-bold text-base tracking-wide">Clean Code</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-[5%] right-[5%] sm:right-[10%] lg:right-[15%] z-30 bg-white/85 backdrop-blur-xl border border-[#008744]/30 text-slate-800 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center space-x-2 sm:space-x-3 scale-[0.8] sm:scale-100 origin-bottom-right"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008744] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#008744]"></span>
            </div>
            <span className="font-bold text-sm tracking-wider text-slate-900">Live Sync Active</span>
          </motion.div>

          {/* 3D Animated Robot Mascot from GLB */}
          <div className="absolute bottom-[2%] -left-[5%] sm:left-[-15%] lg:-left-[25%] z-40 w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)]">
            <RobotCanvas />
          </div>

          {/* Main Dark Glass Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-20 w-[95%] max-w-[580px] aspect-[16/10] bg-gradient-to-br from-[#08121a] to-[#04090e] rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-700/50 overflow-hidden flex"
          >
            {/* Actual Video Element */}
            <video
              ref={videoRef}
              poster="/video/thumbnail.jpeg"
              className="w-full h-full object-cover rounded-[24px]"
              controls={isVideoPlaying}
              playsInline
              preload="metadata"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            >
              <source src="/video/us software video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay */}
            {!isVideoPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-[#08121a]/40 cursor-pointer group rounded-[24px] z-20"
                onClick={handlePlayVideo}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/25 group-hover:scale-110 group-hover:bg-[#008744]/20 transition-all duration-300 shadow-[0_0_40px_rgba(0,135,68,0.4)] group-hover:shadow-[0_0_50px_rgba(222,31,38,0.5)]">
                  <Play size={36} className="text-white ml-2" fill="currentColor" />
                </div>
              </div>
            )}

            <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10 pointer-events-none z-10"></div>
          </motion.div>

        </div>

        {/* RIGHT COMPONENT: Text & CTA */}
        <motion.div className="space-y-7 relative z-30 order-1 lg:order-2 lg:pl-10" variants={containerVariants} initial="hidden" animate="visible">
          
          {/* Animated Background Floating Shapes in Red & Green */}
          <div className="absolute inset-0 pointer-events-none z-[-1] overflow-visible">
            {/* Center Ambient Glow */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-gradient-to-tr from-[#008744]/30 via-[#DE1F26]/20 to-transparent rounded-full blur-[60px]"
            />

            {/* Floating Shape 1: Sparkle Star (Top Right) */}
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-8%] right-[5%] drop-shadow-[0_0_12px_rgba(0,135,68,0.4)]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#008744" fillOpacity="0.45" stroke="#008744" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 2: Red Rounded Square */}
            <motion.div
              animate={{ y: [0, 16, 0], x: [0, -8, 0], rotate: [20, 80, 20] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[10%] right-[-5%] drop-shadow-[0_0_12px_rgba(222,31,38,0.35)]"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#DE1F26" fillOpacity="0.25" stroke="#DE1F26" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 3: Neon Green Ring */}
            <motion.div
              animate={{ y: [0, -14, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[36%] right-[-2%] drop-shadow-[0_0_10px_rgba(0,135,68,0.4)]"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="#008744" strokeWidth="2" strokeOpacity="0.55"/>
              </svg>
            </motion.div>

            {/* Floating Shape 4: Red Sparkle Star */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -180, -360], scale: [0.9, 1.25, 0.9] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-[52%] right-[18%] drop-shadow-[0_0_10px_rgba(222,31,38,0.4)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#DE1F26" fillOpacity="0.4" stroke="#DE1F26" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 5: Green Solid Dot */}
            <motion.div
              animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-[10%] right-[6%] drop-shadow-[0_0_12px_rgba(0,135,68,0.5)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" fill="#008744" fillOpacity="0.6"/>
                <circle cx="12" cy="12" r="11" stroke="#008744" strokeWidth="1" strokeOpacity="0.3"/>
              </svg>
            </motion.div>

            {/* Floating Shape 6: Red Diamond */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [45, 135, 45], scale: [1, 1.15, 1] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-[65%] left-[14%] drop-shadow-[0_0_10px_rgba(222,31,38,0.35)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" transform="rotate(45 12 12)" fill="#DE1F26" fillOpacity="0.25" stroke="#DE1F26" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 7: Green Dashed Orbit */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-[-6%] left-[6%] drop-shadow-[0_0_8px_rgba(0,135,68,0.3)]"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#008744" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.45"/>
              </svg>
            </motion.div>
          </div>

          {/* Top Badge in Red & Green Accent */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#008744]/10 via-[#DE1F26]/10 to-transparent border border-[#008744]/25 rounded-full px-4 py-1.5 shadow-sm">
            <Rocket size={14} className="text-[#DE1F26]" />
            <span className="text-xs font-bold text-[#08121a] uppercase tracking-wider">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-[#08121a] leading-tight tracking-tight flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-block">{t.hero.title1}</span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE1F26] via-rose-500 to-[#008744]">
                {t.hero.title2}
              </span>
              <svg className="absolute w-full h-[12px] bottom-[-4px] left-0 text-[#008744]/40" viewBox="0 0 200 12" preserveAspectRatio="none">
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
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-[#08121a] hover:bg-[#DE1F26] text-white px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 shadow-[0_10px_20px_rgba(8,18,26,0.2)] hover:shadow-[0_10px_25px_rgba(222,31,38,0.35)] transition-all overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">{t.hero.ourServices}</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-[#08121a] border-2 border-gray-200 hover:border-[#008744] hover:text-[#008744] px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 shadow-sm hover:shadow-[0_8px_20px_rgba(0,135,68,0.15)] transition-all cursor-pointer"
              >
                <span>{t.hero.contactUs}</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Bar with Red and Green Balanced Accents */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200/80 mt-4 flex flex-wrap gap-3 sm:gap-4">
            
            {/* Stat 1: Courses (Green) */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group flex items-center space-x-3.5 bg-white/80 hover:bg-white backdrop-blur-xl p-3 px-4 rounded-2xl border border-slate-200/80 hover:border-[#008744] hover:shadow-[0_12px_28px_rgba(0,135,68,0.18)] transition-all duration-150 cursor-pointer min-w-[150px] sm:min-w-[160px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#008744]/10 text-[#008744] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#008744] group-hover:text-white transition-all duration-150 flex-shrink-0">
                <BookOpen size={18} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#08121a] group-hover:text-[#008744] leading-none tabular-nums font-mono transition-colors">
                  <Counter end={43} suffix="+" />
                </h3>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1 whitespace-nowrap">
                  {t.hero.stats.courses.title}
                </p>
              </div>
            </motion.div>

            {/* Stat 2: Students (Red) */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group flex items-center space-x-3.5 bg-white/80 hover:bg-white backdrop-blur-xl p-3 px-4 rounded-2xl border border-slate-200/80 hover:border-[#DE1F26] hover:shadow-[0_12px_28px_rgba(222,31,38,0.18)] transition-all duration-150 cursor-pointer min-w-[165px] sm:min-w-[175px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#DE1F26]/10 text-[#DE1F26] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#DE1F26] group-hover:text-white transition-all duration-150 flex-shrink-0">
                <Users size={18} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#08121a] group-hover:text-[#DE1F26] leading-none tabular-nums font-mono transition-colors">
                  <Counter end={4700} suffix="+" />
                </h3>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1 whitespace-nowrap">
                  {t.hero.stats.students.title}
                </p>
              </div>
            </motion.div>

            {/* Stat 3: Placement Rate (Green) */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group flex items-center space-x-3.5 bg-white/80 hover:bg-white backdrop-blur-xl p-3 px-4 rounded-2xl border border-slate-200/80 hover:border-[#008744] hover:shadow-[0_12px_28px_rgba(0,135,68,0.18)] transition-all duration-150 cursor-pointer min-w-[165px] sm:min-w-[175px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#008744]/10 text-[#008744] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#008744] group-hover:text-white transition-all duration-150 flex-shrink-0">
                <LineChart size={18} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#08121a] group-hover:text-[#008744] leading-none tabular-nums font-mono transition-colors">
                  <Counter end={70} suffix="%" />
                </h3>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1 whitespace-nowrap">
                  Placement Rate
                </p>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

      {/* Premium Multi-Layer Glowing Bottom Border in Green & Red */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008744] via-[#DE1F26] to-transparent opacity-80" />
        <div className="absolute -top-[2px] left-1/4 right-1/4 h-[4px] bg-gradient-to-r from-transparent via-[#008744] via-[#DE1F26] to-transparent blur-[3px] opacity-60" />
      </div>
    </section>
  );
}
