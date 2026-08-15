"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Cloud, Megaphone, Rocket, Cpu, Users, LineChart, Activity, Zap, CheckCircle2, BookOpen, Award, MonitorPlay, Video, Briefcase, GraduationCap, Code, Network, PenTool, Lock, Pause, Volume2, Maximize, Bot, Braces, Play } from "lucide-react";
import RobotCanvas from "./RobotCanvas";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] pt-6 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-24 flex items-center min-h-[90vh]">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00a884]/20 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">

        {/* LEFT COMPONENT: AI Video Hub Design */}
        <div className="relative h-[340px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center order-2 lg:order-1 mt-6 lg:mt-0">

          {/* Orbital Rings Background - Premium Upgrade */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Inner dashed ring */}
            <div className="w-[350px] h-[350px] rounded-full border-[1.5px] border-cyan-400/20 border-dashed absolute animate-[spin_40s_linear_infinite]"></div>
            {/* Middle solid ring */}
            <div className="w-[500px] h-[500px] rounded-full border border-blue-500/10 absolute"></div>
            {/* Outer dashed ring */}
            <div className="w-[700px] h-[700px] rounded-full border border-purple-400/15 border-dashed absolute animate-[spin_60s_linear_infinite_reverse]"></div>

            {/* Glowing Orbiting Orbs */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[500px] h-[500px]">
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_20px_8px_rgba(168,85,247,0.4)]"></div>
            </motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[700px] h-[700px]">
              <div className="absolute top-[20%] right-[-10px] w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_8px_rgba(34,211,238,0.4)]"></div>
              <div className="absolute bottom-10 left-20 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"></div>
            </motion.div>
          </div>

          {/* Premium Floating Badges */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[25%] sm:top-[30%] -left-[5%] sm:-left-[10%] lg:-left-[15%] z-30 bg-[#0f172a]/80 backdrop-blur-xl border border-cyan-500/30 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center scale-[0.8] sm:scale-100 origin-left"
          >
            <Braces size={22} className="text-cyan-400 mr-3" />
            <span className="font-mono font-bold text-base tracking-wide">Clean Code</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-[5%] right-[5%] sm:right-[10%] lg:right-[15%] z-30 bg-white/10 backdrop-blur-xl border border-white/20 text-slate-800 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center space-x-2 sm:space-x-3 scale-[0.8] sm:scale-100 origin-bottom-right"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="font-bold text-sm tracking-wider">Live Sync Active</span>
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
            className="relative z-20 w-[95%] max-w-[580px] aspect-[16/10] bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-700/50 overflow-hidden flex"
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
                className="absolute inset-0 flex items-center justify-center bg-[#0f172a]/40 cursor-pointer group rounded-[24px] z-20"
                onClick={handlePlayVideo}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]">
                  <Play size={36} className="text-white ml-2" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Optional: Add a subtle inner shadow or border overlay over the video if desired */}
            <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10 pointer-events-none z-10"></div>

          </motion.div>

        </div>

        {/* RIGHT COMPONENT: Text & CTA (Swapped Order) */}
        <motion.div className="space-y-7 relative z-30 order-1 lg:order-2 lg:pl-10" variants={containerVariants} initial="hidden" animate="visible">
          
          {/* Animated Background Floating Shapes (Stars, Rounded Squares, Circles, Rings, Diamonds) */}
          <div className="absolute inset-0 pointer-events-none z-[-1] overflow-visible">
            {/* Center Ambient Glow */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-gradient-to-tr from-[#00a884]/30 via-cyan-400/20 to-blue-500/20 rounded-full blur-[60px]"
            />

            {/* Floating Shape 1: Sparkle Star (Top Right) */}
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-8%] right-[5%] drop-shadow-[0_0_12px_rgba(0,168,132,0.4)]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#00a884" fillOpacity="0.45" stroke="#00a884" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 2: Rounded Square (Top Right Corner) */}
            <motion.div
              animate={{ y: [0, 16, 0], x: [0, -8, 0], rotate: [20, 80, 20] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[10%] right-[-5%] drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 3: Neon Glowing Ring (Right Center) */}
            <motion.div
              animate={{ y: [0, -14, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[36%] right-[-2%] drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="#06b6d4" strokeWidth="2" strokeOpacity="0.55"/>
              </svg>
            </motion.div>

            {/* Floating Shape 4: Purple Sparkle Star (Center Right) */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -180, -360], scale: [0.9, 1.25, 0.9] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-[52%] right-[18%] drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#a855f7" fillOpacity="0.4" stroke="#a855f7" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 5: Glowing Solid Circle Dot (Bottom Right) */}
            <motion.div
              animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-[10%] right-[6%] drop-shadow-[0_0_12px_rgba(0,168,132,0.5)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" fill="#00a884" fillOpacity="0.6"/>
                <circle cx="12" cy="12" r="11" stroke="#00a884" strokeWidth="1" strokeOpacity="0.3"/>
              </svg>
            </motion.div>

            {/* Floating Shape 6: Rounded Square (Bottom Center) */}
            <motion.div
              animate={{ y: [0, 14, 0], rotate: [0, 90, 180], scale: [1, 0.85, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[-4%] right-[32%] drop-shadow-[0_0_10px_rgba(139,92,246,0.35)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="#8b5cf6" fillOpacity="0.25" stroke="#8b5cf6" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 7: Tech Plus Marker (Top Middle) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-[2%] left-[45%] drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 4V20M4 12H20" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.55"/>
              </svg>
            </motion.div>

            {/* Floating Shape 8: Cyan Diamond (Center Left) */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [45, 135, 45], scale: [1, 1.15, 1] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-[65%] left-[14%] drop-shadow-[0_0_10px_rgba(6,182,212,0.35)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" transform="rotate(45 12 12)" fill="#06b6d4" fillOpacity="0.25" stroke="#06b6d4" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 9: Blue Sparkle Star (Left Middle) */}
            <motion.div
              animate={{ y: [0, 16, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute top-[38%] left-[-4%] drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#3b82f6" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Floating Shape 10: Dashed Orbit Ring (Top Left) */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-[-6%] left-[6%] drop-shadow-[0_0_8px_rgba(0,168,132,0.3)]"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#00a884" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.45"/>
              </svg>
            </motion.div>
          </div>

          {/* Top Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00a884]/10 to-transparent border border-[#00a884]/20 rounded-full px-4 py-1.5 shadow-sm">
            <Rocket size={14} className="text-[#00a884]" />
            <span className="text-xs font-bold text-[#0b2b46] uppercase tracking-wider">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-[#0b2b46] leading-tight tracking-tight flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-block">{t.hero.title1}</span>
            <span className="relative inline-block">
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

      {/* Premium Multi-Layer Glowing Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00a884] via-cyan-400 to-transparent opacity-80" />
        <div className="absolute -top-[2px] left-1/4 right-1/4 h-[4px] bg-gradient-to-r from-transparent via-[#00a884] via-cyan-400 to-transparent blur-[3px] opacity-60" />
      </div>
    </section>
  );
}
