"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants, Transition } from "framer-motion";
import { ArrowRight, Rocket, Cpu, Users, LineChart, BookOpen, Award, Play, Star } from "lucide-react";
import {
  RiCodeSSlashLine,
  RiCpuLine,
  RiDatabase2Line,
  RiStackLine
} from "react-icons/ri";
import RobotCanvas from "./RobotCanvas";
import Link from "next/link";

const SparkleIcon = ({ size = 24, className, style }: { size?: number | string; className?: string; style?: React.CSSProperties }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const Typewriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex] || "";
    const typingSpeed = isDeleting ? 28 : 65;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2200);
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
    <div className="inline-flex items-center h-[40px] bg-white/90 backdrop-blur-md border border-[#008744]/25 rounded-full px-3.5 shadow-[0_2px_12px_rgba(0,135,68,0.06)] select-none transition-all duration-150">
      <div className="w-5 h-5 rounded-md bg-[#008744]/10 flex items-center justify-center mr-2 flex-shrink-0">
        <Cpu size={13} className="text-[#008744]" />
      </div>
      <div className="flex items-center whitespace-nowrap">
        <span className="text-[#08121a] font-medium text-[14px] sm:text-[15px] tracking-wide whitespace-nowrap leading-none subpixel-antialiased">
          {currentText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] h-[13px] bg-gradient-to-b from-[#DE1F26] to-[#008744] inline-block ml-1 -translate-y-[1.5px] flex-shrink-0 rounded-full"
        />
      </div>
    </div>
  );
};

const Counter = ({ end, suffix = "", duration = 2.0 }: { end: number, suffix?: string, duration?: number }) => {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };
    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [end, duration]);

  const formattedCount = useMemo(() => {
    return count.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US');
  }, [count, language]);

  return <span>{formattedCount}{suffix}</span>;
};

const heroBackgroundBubbles = [
  { id: 1, left: "7%", bottom: "15%", size: 8, color: "#DE1F26", duration: 13, delay: 0, xOffset: 12 },
  { id: 2, left: "15%", bottom: "25%", size: 10, color: "#008744", duration: 15, delay: 3, xOffset: -10 },
  { id: 3, left: "35%", bottom: "20%", size: 7, color: "#EF4444", duration: 14, delay: 1.5, xOffset: 14 },
  { id: 4, left: "65%", bottom: "18%", size: 9, color: "#10B981", duration: 16, delay: 5, xOffset: -12 },
  { id: 5, left: "85%", bottom: "22%", size: 8, color: "#DE1F26", duration: 13.5, delay: 2.5, xOffset: 10 },
  { id: 6, left: "10%", bottom: "70%", size: 11, color: "#DE1F26", duration: 10.5, delay: 0.5, xOffset: 15 },
  { id: 7, left: "24%", bottom: "76%", size: 9, color: "#008744", duration: 12, delay: 4, xOffset: -12 },
  { id: 8, left: "80%", bottom: "72%", size: 10, color: "#10B981", duration: 11.5, delay: 2, xOffset: 10 },
];

interface FloatingShapeItem {
  id: string;
  icon: React.ComponentType<{ size?: number | string; className?: string; style?: React.CSSProperties }>;
  color: string;
  style: React.CSSProperties;
  size: number;
  opacity: number;
  animate: any;
  transition: Transition;
}

const heroFloatingShapes: FloatingShapeItem[] = [
  {
    id: "center-sparkle-star",
    icon: SparkleIcon,
    color: "#DE1F26",
    style: { top: "13%", left: "51%" },
    size: 38,
    opacity: 0.24,
    animate: { y: [0, 12, 0], x: [0, -5, 0], rotate: [0, 360, 0], scale: [0.9, 1.12, 0.9] },
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
  },
  {
    id: "tr-sparkle-star",
    icon: SparkleIcon,
    color: "#008744",
    style: { top: "6%", right: "13%" },
    size: 36,
    opacity: 0.24,
    animate: { y: [0, -12, 0], rotate: [0, 360, 0], scale: [1, 1.15, 1] },
    transition: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
  },
  {
    id: "bl-stack-big",
    icon: RiStackLine,
    color: "#008744",
    style: { bottom: "10%", left: "8%" },
    size: 50,
    opacity: 0.28,
    animate: { y: [0, 12, 0], rotate: [0, -35, 0], scale: [1, 1.08, 1] },
    transition: { duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
  },
  {
    id: "cb-code-accent",
    icon: RiCodeSSlashLine,
    color: "#DE1F26",
    style: { bottom: "23%", left: "47%" },
    size: 28,
    opacity: 0.28,
    animate: { y: [0, -10, 0], rotate: [-15, 15, -15], scale: [0.9, 1.15, 0.9] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
  },
  {
    id: "mr-cpu-accent",
    icon: RiCpuLine,
    color: "#008744",
    style: { top: "43%", right: "9%" },
    size: 26,
    opacity: 0.28,
    animate: { y: [0, -10, 0], scale: [1, 1.2, 1] },
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
  },
  {
    id: "br-db-accent",
    icon: RiDatabase2Line,
    color: "#DE1F26",
    style: { bottom: "8%", right: "16%" },
    size: 28,
    opacity: 0.26,
    animate: { y: [0, -10, 0], scale: [1, 1.15, 1] },
    transition: { duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
  },
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
      className="relative overflow-hidden bg-gradient-to-br from-[#fcfdfd] via-[#f5f9f7] to-[#edf4f0] pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-36 flex items-center"
    >
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#008744]/10 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse duration-[9000ms]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#DE1F26]/7 via-rose-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] bg-[#008744]/5 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />

      {/* Waves */}
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

          <motion.path
            d="M-80,140 C300,60 580,240 880,120 C1180,20 1360,180 1520,100"
            stroke="url(#heroWaveTop)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="5 7"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M-80,240 C220,120 420,380 720,260 C1020,140 1220,350 1520,230"
            stroke="url(#heroWaveRed)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -140] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
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

      {/* Floating Bubbles */}
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
            className="absolute pointer-events-none transform-gpu"
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-center">
        <div className="relative w-full max-w-[88rem] h-full px-4 sm:px-6 lg:px-10">
          {heroFloatingShapes.map((shape) => {
            const IconComp = shape.icon;
            return (
              <motion.div
                key={shape.id}
                style={{
                  position: "absolute",
                  ...shape.style,
                  color: shape.color,
                  opacity: shape.opacity,
                }}
                animate={shape.animate}
                transition={shape.transition}
                className="pointer-events-none transform-gpu select-none"
              >
                <IconComp size={shape.size} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,18,26,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(8,18,26,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center relative z-10">

        {/* LEFT COMPONENT: AI Video Hub */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[450px] w-full flex items-center justify-center order-2 lg:order-1 mt-4 lg:mt-0">
          <div className="relative w-full max-w-[460px] xl:max-w-[500px] aspect-[16/10] flex items-center justify-center">
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
              <div className="absolute -top-12 -left-10 w-64 h-64 bg-[#DE1F26]/16 rounded-full blur-[65px] animate-pulse duration-[6000ms] transform-gpu" />
              <div className="absolute -bottom-12 -right-10 w-72 h-72 bg-[#008744]/20 rounded-full blur-[70px] animate-pulse duration-[7000ms] transform-gpu" />
              <div className="w-full h-full bg-gradient-to-tr from-white/70 via-slate-50/50 to-emerald-50/40 rounded-[28px] border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-md rotate-[-2.5deg] -translate-y-2 -translate-x-1.5 absolute transform-gpu">
                <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#DE1F26]/35 to-transparent"></div>
                <div className="absolute inset-x-8 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#008744]/35 to-transparent"></div>
              </div>
            </div>

            {/* 3D Animated Robot Mascot */}
            <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-24 -left-16 sm:-left-24 lg:-left-36 z-40 w-44 h-44 sm:w-56 sm:h-56 lg:w-[350px] lg:h-[350px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)] pointer-events-none transform-gpu">
              <RobotCanvas />
            </div>

            {/* Floating Review Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="absolute -top-6 sm:-top-8 -right-4 sm:-right-8 lg:-right-10 z-30 bg-white/95 backdrop-blur-xl border border-[#DE1F26]/30 p-2.5 sm:p-3 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex items-center gap-3 scale-[0.85] sm:scale-95 lg:scale-100 origin-top-right cursor-default transition-shadow hover:shadow-[0_20px_45px_rgba(222,31,38,0.2)] transform-gpu"
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

            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 w-full h-full bg-gradient-to-br from-[#08121a] to-[#04090e] rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-700/50 overflow-hidden flex transform-gpu"
            >
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
        <motion.div className="space-y-4 sm:space-y-5 relative z-30 order-1 lg:order-2 lg:pl-4 xl:pl-6" variants={containerVariants} initial="hidden" animate="visible">
          
          <div className="absolute inset-0 pointer-events-none z-[-1] overflow-visible">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-gradient-to-tr from-[#008744]/20 via-[#DE1F26]/12 to-transparent rounded-full blur-[60px]"
            />
          </div>

          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#008744]/10 via-[#DE1F26]/10 to-transparent border border-[#008744]/25 rounded-full px-3 py-0.5 shadow-xs">
            <Rocket size={12} className="text-[#DE1F26]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#08121a] uppercase tracking-wider">{t.hero.badge}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-xl sm:text-2xl lg:text-[26px] xl:text-[30px] font-bold text-[#08121a] leading-tight tracking-tight flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="inline-block font-bold whitespace-nowrap">{t.hero.title1}</span>
            <span className="relative inline-block font-bold whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE1F26] via-rose-500 to-[#008744]">
                {t.hero.title2}
              </span>
              <svg className="absolute w-full h-[8px] bottom-[-2px] left-0 text-[#008744]/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                <motion.path
                  d="M2,10 Q100,0 198,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <Typewriter words={t.hero.typingWords} />
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 font-normal text-[13px] sm:text-[14px] max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-0.5">
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-[#08121a] hover:bg-[#DE1F26] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1.5 shadow-[0_6px_14px_rgba(8,18,26,0.15)] hover:shadow-[0_8px_18px_rgba(222,31,38,0.28)] transition-all overflow-hidden cursor-pointer tracking-wide"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">{t.hero.ourServices}</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-[#08121a] border border-gray-300 hover:border-[#008744] hover:text-[#008744] px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1.5 shadow-2xs hover:shadow-[0_6px_14px_rgba(0,135,68,0.1)] transition-all cursor-pointer tracking-wide"
              >
                <span>{t.hero.contactUs}</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={itemVariants} className="pt-4 border-t border-gray-200/80 mt-1 flex flex-wrap gap-2 sm:gap-3">
            
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group flex items-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-xl p-2.5 px-3.5 rounded-xl border border-slate-200/80 hover:border-[#008744] hover:shadow-[0_10px_22px_rgba(0,135,68,0.15)] transition-all duration-150 cursor-pointer min-w-[135px] sm:min-w-[145px]"
            >
              <div className="w-9 h-9 rounded-lg bg-[#008744]/10 text-[#008744] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#008744] group-hover:text-white transition-all duration-150 flex-shrink-0">
                <BookOpen size={16} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08121a] group-hover:text-[#008744] leading-none tabular-nums tracking-tight transition-colors">
                  <Counter end={43} suffix="+" />
                </h3>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1 whitespace-nowrap">
                  {t.hero.stats.courses.title}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group flex items-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-xl p-2.5 px-3.5 rounded-xl border border-slate-200/80 hover:border-[#DE1F26] hover:shadow-[0_10px_22px_rgba(222,31,38,0.15)] transition-all duration-150 cursor-pointer min-w-[145px] sm:min-w-[155px]"
            >
              <div className="w-9 h-9 rounded-lg bg-[#DE1F26]/10 text-[#DE1F26] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#DE1F26] group-hover:text-white transition-all duration-150 flex-shrink-0">
                <Users size={16} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08121a] group-hover:text-[#DE1F26] leading-none tabular-nums tracking-tight transition-colors">
                  <Counter end={4700} suffix="+" />
                </h3>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1 whitespace-nowrap">
                  {t.hero.stats.students.title}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group flex items-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-xl p-2.5 px-3.5 rounded-xl border border-slate-200/80 hover:border-[#008744] hover:shadow-[0_10px_22px_rgba(0,135,68,0.15)] transition-all duration-150 cursor-pointer min-w-[145px] sm:min-w-[155px]"
            >
              <div className="w-9 h-9 rounded-lg bg-[#008744]/10 text-[#008744] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#008744] group-hover:text-white transition-all duration-150 flex-shrink-0">
                <LineChart size={16} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08121a] group-hover:text-[#008744] leading-none tabular-nums tracking-tight transition-colors">
                  <Counter end={70} suffix="%" />
                </h3>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1 whitespace-nowrap">
                  {t.hero.stats?.placement?.title || "Placement Rate"}
                </p>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008744] via-[#DE1F26] to-transparent opacity-80" />
        <div className="absolute -top-[2px] left-1/4 right-1/4 h-[4px] bg-gradient-to-r from-transparent via-[#008744] via-[#DE1F26] to-transparent blur-[3px] opacity-60" />
      </div>
    </section>
  );
}
