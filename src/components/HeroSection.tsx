"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Cloud, Megaphone, Rocket, Cpu, Users, LineChart, Activity, Zap, CheckCircle2, BookOpen, Award, MonitorPlay, Video, Briefcase, GraduationCap, Code, Network, PenTool, Lock, Pause, Volume2, Maximize, Bot, Braces, Play, Star, Sparkles } from "lucide-react";
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
    <div className="inline-flex items-center w-[290px] sm:w-[320px] h-[42px] bg-white/85 backdrop-blur-md border border-[#008744]/25 rounded-full px-4 shadow-[0_4px_15px_rgba(0,135,68,0.08)] select-none">
      <Cpu size={16} className="text-[#008744] mr-2.5 flex-shrink-0" />
      <div className="flex items-center min-w-0 flex-1">
        <span className="text-[#08121a] font-normal text-[15px] sm:text-[16px] tracking-wide whitespace-nowrap overflow-hidden">
          {currentText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-[2.5px] h-[16px] bg-gradient-to-b from-[#DE1F26] to-[#008744] inline-block ml-1 flex-shrink-0 rounded-full"
        />
      </div>
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

const heroBackgroundBubbles = [
  // Lower & mid floating bubbles
  { id: 1, left: "7%", bottom: "15%", size: 8, color: "#DE1F26", duration: 13, delay: 0, xOffset: 12 },
  { id: 2, left: "15%", bottom: "25%", size: 10, color: "#008744", duration: 15, delay: 3, xOffset: -10 },
  { id: 3, left: "35%", bottom: "20%", size: 7, color: "#EF4444", duration: 14, delay: 1.5, xOffset: 14 },
  { id: 4, left: "65%", bottom: "18%", size: 9, color: "#10B981", duration: 16, delay: 5, xOffset: -12 },
  { id: 5, left: "85%", bottom: "22%", size: 8, color: "#DE1F26", duration: 13.5, delay: 2.5, xOffset: 10 },
  
  // Upper area floating bubbles (clearly visible in top region)
  { id: 6, left: "10%", bottom: "70%", size: 11, color: "#DE1F26", duration: 10.5, delay: 0.5, xOffset: 15 },
  { id: 7, left: "24%", bottom: "76%", size: 9, color: "#008744", duration: 12, delay: 4, xOffset: -12 },
  { id: 8, left: "80%", bottom: "72%", size: 10, color: "#10B981", duration: 11.5, delay: 2, xOffset: 10 },
];

export default function HeroSection() {
  const { t, language } = useLanguage();

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
    <section 
      style={{ fontFamily: "var(--font-baloo), var(--font-hind), sans-serif" }}
      className="relative overflow-hidden bg-gradient-to-br from-[#fcfdfd] via-[#f5f9f7] to-[#edf4f0] pt-6 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-24 flex items-center min-h-[90vh]"
    >
      {/* Dynamic Soft Background Mesh Gradients in Red & Green (Low Opacity) */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#008744]/10 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse duration-[9000ms]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#DE1F26]/7 via-rose-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] bg-[#008744]/5 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />

      {/* Animated Subtle Flowing Cyber Wave Lines (3 Harmonious Layers) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <svg className="w-full h-full min-h-[600px] opacity-25" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWaveRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DE1F26" stopOpacity="0" />
              <stop offset="25%" stopColor="#DE1F26" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#008744" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#008744" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroWaveGreen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#008744" stopOpacity="0" />
              <stop offset="35%" stopColor="#008744" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#DE1F26" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#DE1F26" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroWaveTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#008744" stopOpacity="0" />
              <stop offset="30%" stopColor="#DE1F26" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#008744" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#DE1F26" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Wave 1: Upper flowing arc */}
          <motion.path
            d="M-80,140 C300,60 580,240 880,120 C1180,20 1360,180 1520,100"
            stroke="url(#heroWaveTop)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="5 7"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />

          {/* Wave 2: Middle sweeping wave */}
          <motion.path
            d="M-80,240 C220,120 420,380 720,260 C1020,140 1220,350 1520,230"
            stroke="url(#heroWaveRed)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -140] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Wave 3: Lower undulating wave */}
          <motion.path
            d="M-80,380 C280,480 540,210 840,350 C1140,490 1280,230 1520,340"
            stroke="url(#heroWaveGreen)"
            strokeWidth="1.3"
            fill="none"
            strokeDasharray="4 6"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Ambient Rising Glowing Bubbles (With Distinct Upper Floating Bubbles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {heroBackgroundBubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            style={{
              left: bubble.left,
              bottom: bubble.bottom,
              width: bubble.size,
              height: bubble.size,
              backgroundColor: bubble.color,
              borderRadius: "50%",
              boxShadow: `0 0 12px ${bubble.color}75`,
            }}
            animate={{
              y: [0, -100, -220],
              x: [0, bubble.xOffset, -bubble.xOffset, bubble.xOffset * 0.5, 0],
              opacity: [0, 0.45, 0.6, 0.25, 0],
              scale: [0.5, 1.15, 0.95, 0.75, 0.3],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
            className="absolute pointer-events-none"
          />
        ))}
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,18,26,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(8,18,26,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">

        {/* LEFT COMPONENT: AI Video Hub Design */}
        <div className="relative h-[340px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center order-2 lg:order-1 mt-6 lg:mt-0">

          {/* Centralized Video Hub Container */}
          <div className="relative w-[95%] max-w-[580px] aspect-[16/10] flex items-center justify-center">

            {/* Modern Layered Tech Aura & Glass Backplate */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
              {/* Ambient Vibrant Glow Dispersions in Red & Green */}
              <div className="absolute -top-12 -left-10 w-64 h-64 bg-[#DE1F26]/16 rounded-full blur-[65px] animate-pulse duration-[6000ms]" />
              <div className="absolute -bottom-12 -right-10 w-72 h-72 bg-[#008744]/20 rounded-full blur-[70px] animate-pulse duration-[7000ms]" />

              {/* Layered 3D Frosted Glass Back-Plate behind Video */}
              <div className="w-full h-full bg-gradient-to-tr from-white/70 via-slate-50/50 to-emerald-50/40 rounded-[28px] border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-md rotate-[-2.5deg] -translate-y-2 -translate-x-1.5 absolute">
                {/* Subtle top edge brand highlight */}
                <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#DE1F26]/35 to-transparent"></div>
                <div className="absolute inset-x-8 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#008744]/35 to-transparent"></div>
              </div>

              {/* Tech Corner Crosshair Markers */}
              <div className="w-[104%] h-[104%] absolute flex flex-col justify-between p-1 select-none pointer-events-none">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#DE1F26]/40 font-bold">＋</span>
                  <span className="text-[#008744]/40 font-bold">＋</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#008744]/40 font-bold">＋</span>
                  <span className="text-[#DE1F26]/40 font-bold">＋</span>
                </div>
              </div>

              {/* Subtle Tech Dot Matrix Grid (Top Right) */}
              <div className="absolute -top-4 -right-4 grid grid-cols-4 gap-1.5 opacity-25">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#008744]" />
                ))}
              </div>

              {/* Subtle Tech Dot Matrix Grid (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 grid grid-cols-4 gap-1.5 opacity-25">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#DE1F26]" />
                ))}
              </div>
            </div>

            {/* 3D Animated Robot Mascot from GLB */}
            <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-24 -left-16 sm:-left-24 lg:-left-36 z-40 w-44 h-44 sm:w-56 sm:h-56 lg:w-[350px] lg:h-[350px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)] pointer-events-none">
              <RobotCanvas />
            </div>

            {/* Card 1: Right-Side Floating Feature (Shifted Outward) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="absolute -top-6 sm:-top-8 -right-10 sm:-right-16 lg:-right-24 z-30 bg-white/95 backdrop-blur-xl border border-[#DE1F26]/30 p-2.5 sm:p-3 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex items-center gap-3 scale-[0.85] sm:scale-95 lg:scale-100 origin-top-right cursor-default transition-shadow hover:shadow-[0_20px_45px_rgba(222,31,38,0.2)]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#DE1F26] to-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(222,31,38,0.35)]">
                <Award size={22} />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-slate-800 ml-1">4.9/5</span>
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-slate-900 mt-0.5 tracking-tight">
                  {language === 'bn' ? 'বাস্তব প্রজেক্ট ও পোর্টফোলিও' : '100% Job-Ready Projects'}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  {language === 'bn' ? '৫০+ রিয়েল-ওয়ার্ল্ড প্রজেক্টস' : '50+ Practical Deliverables'}
                </p>
              </div>
            </motion.div>

            {/* Main Dark Glass Video Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 w-full h-full bg-gradient-to-br from-[#08121a] to-[#04090e] rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-700/50 overflow-hidden flex"
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

        </div>

        {/* RIGHT COMPONENT: Text & CTA */}
        <motion.div className="space-y-7 relative z-30 order-1 lg:order-2 lg:pl-10" variants={containerVariants} initial="hidden" animate="visible">
          
          {/* Animated Background Floating Shapes in Red & Green (Low Opacity & Clean) */}
          <div className="absolute inset-0 pointer-events-none z-[-1] overflow-visible">
            {/* Center Ambient Glow */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-gradient-to-tr from-[#008744]/20 via-[#DE1F26]/12 to-transparent rounded-full blur-[60px]"
            />

            {/* Floating Shape 1: Sparkle Star (Top Right of Title) */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-3%] right-[18%] sm:right-[22%]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#008744" fillOpacity="0.18" stroke="#008744" strokeWidth="1.5" strokeOpacity="0.28"/>
              </svg>
            </motion.div>

            {/* Floating Shape 2: Red Rounded Square (Beside Title Line 1) */}
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -6, 0], rotate: [20, 80, 20] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[8%] right-[8%] sm:right-[12%]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#DE1F26" fillOpacity="0.1" stroke="#DE1F26" strokeWidth="1.5" strokeOpacity="0.2"/>
              </svg>
            </motion.div>

            {/* Floating Shape 3: Neon Green Ring (Beside Title Line 2) */}
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[26%] right-[4%] sm:right-[8%]"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="#008744" strokeWidth="1.5" strokeOpacity="0.22"/>
              </svg>
            </motion.div>

            {/* Floating Shape 4: Red Sparkle Star (Beside Subtitle) */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -180, -360], scale: [0.9, 1.2, 0.9] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-[42%] right-[10%] sm:right-[14%]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#DE1F26" fillOpacity="0.15" stroke="#DE1F26" strokeWidth="1.5" strokeOpacity="0.22"/>
              </svg>
            </motion.div>

            {/* Floating Shape 5: Green Solid Dot (Near Action Buttons) */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-[60%] right-[10%] sm:right-[14%]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" fill="#008744" fillOpacity="0.25"/>
                <circle cx="12" cy="12" r="11" stroke="#008744" strokeWidth="1" strokeOpacity="0.15"/>
              </svg>
            </motion.div>

            {/* Floating Shape 6: Red Diamond (Near Left Content) */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [45, 135, 45], scale: [1, 1.15, 1] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-[56%] left-[2%]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" transform="rotate(45 12 12)" fill="#DE1F26" fillOpacity="0.1" stroke="#DE1F26" strokeWidth="1.5" strokeOpacity="0.2"/>
              </svg>
            </motion.div>

            {/* Floating Shape 7: Green Dashed Orbit (Near Top Badge) */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-[-3%] left-[1%]"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#008744" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.2"/>
              </svg>
            </motion.div>
          </div>

          {/* Top Badge in Red & Green Accent */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#008744]/10 via-[#DE1F26]/10 to-transparent border border-[#008744]/25 rounded-full px-4 py-1.5 shadow-sm">
            <Rocket size={14} className="text-[#DE1F26]" />
            <span className="text-xs font-normal text-[#08121a] uppercase tracking-wider">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#08121a] leading-tight tracking-tight flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-block font-bold">{t.hero.title1}</span>
            <span className="relative inline-block font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE1F26] via-rose-500 to-[#008744]">
                {t.hero.title2}
              </span>
              <svg className="absolute w-full h-[12px] bottom-[-4px] left-0 text-[#008744]/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                <motion.path
                  d="M2,10 Q100,0 198,8"
                  stroke="currentColor"
                  strokeWidth="3.5"
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
          <motion.p variants={itemVariants} className="text-gray-600 font-normal text-[16px] sm:text-[17px] max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-[#08121a] hover:bg-[#DE1F26] text-white px-8 py-3.5 rounded-full font-normal sm:font-medium flex items-center space-x-2 shadow-[0_10px_20px_rgba(8,18,26,0.18)] hover:shadow-[0_10px_25px_rgba(222,31,38,0.35)] transition-all overflow-hidden cursor-pointer tracking-wide"
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
                className="bg-white text-[#08121a] border-2 border-gray-200 hover:border-[#008744] hover:text-[#008744] px-8 py-3.5 rounded-full font-normal sm:font-medium flex items-center space-x-2 shadow-sm hover:shadow-[0_8px_20px_rgba(0,135,68,0.15)] transition-all cursor-pointer tracking-wide"
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
                <h3 className="text-2xl sm:text-3xl font-bold text-[#08121a] group-hover:text-[#008744] leading-none tabular-nums tracking-tight transition-colors">
                  <Counter end={43} suffix="+" />
                </h3>
                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mt-1 whitespace-nowrap">
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
                <h3 className="text-2xl sm:text-3xl font-bold text-[#08121a] group-hover:text-[#DE1F26] leading-none tabular-nums tracking-tight transition-colors">
                  <Counter end={4700} suffix="+" />
                </h3>
                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mt-1 whitespace-nowrap">
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
                <h3 className="text-2xl sm:text-3xl font-bold text-[#08121a] group-hover:text-[#008744] leading-none tabular-nums tracking-tight transition-colors">
                  <Counter end={70} suffix="%" />
                </h3>
                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mt-1 whitespace-nowrap">
                  {t.hero.stats?.placement?.title || "Placement Rate"}
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
