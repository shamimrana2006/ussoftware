"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, Wifi, Zap, Activity } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const statusMessages = useMemo(
    () => [
      { text: "INITIALIZING CORE SYSTEMS...", icon: Cpu },
      { text: "PRELOADING 3D ENGINE & SHADERS...", icon: Zap },
      { text: "ESTABLISHING SECURE PROTOCOLS...", icon: ShieldCheck },
      { text: "OPTIMIZING GRAPHICS PIPELINE...", icon: Activity },
      { text: "LAUNCHING US SOFTWARE EXPERIENCE...", icon: Wifi },
      { text: "SYSTEM READY. WELCOME.", icon: Zap },
    ],
    []
  );

  const infinityPath = "M 120,60 C 150,15 210,15 210,60 C 210,105 150,105 120,60 C 90,15 30,15 30,60 C 30,105 90,105 120,60 Z";

  useEffect(() => {
    setIsClient(true);
    // Prevent background scrolling while loading screen is active
    document.body.style.overflow = "hidden";

    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 1800; // 1.8s optimal duration: snappy, responsive, never feels frozen

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Multi-stage fluid progression for natural pacing
      let curvedProgress: number;
      if (rawProgress < 0.3) {
        // Fast initial boot (0% -> 38%)
        curvedProgress = (rawProgress / 0.3) * 0.38;
      } else if (rawProgress < 0.7) {
        // Steady asset load (38% -> 76%)
        curvedProgress = 0.38 + ((rawProgress - 0.3) / 0.4) * 0.38;
      } else if (rawProgress < 0.92) {
        // Smooth transition (76% -> 95%)
        curvedProgress = 0.76 + ((rawProgress - 0.7) / 0.22) * 0.19;
      } else {
        // Decisive finish to 100%
        curvedProgress = 0.95 + ((rawProgress - 0.92) / 0.08) * 0.05;
      }

      const currentPercent = Math.min(Math.round(curvedProgress * 100), 100);
      setProgress(currentPercent);

      // Update status message dynamically
      if (currentPercent < 22) {
        setStatusIndex(0);
      } else if (currentPercent < 45) {
        setStatusIndex(1);
      } else if (currentPercent < 70) {
        setStatusIndex(2);
      } else if (currentPercent < 90) {
        setStatusIndex(3);
      } else if (currentPercent < 100) {
        setStatusIndex(4);
      } else {
        setStatusIndex(5);
      }

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Brief satisfying pause at 100%
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 260);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isClient) return null;

  const CurrentIcon = statusMessages[statusIndex]?.icon || Zap;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#040810] select-none overflow-hidden p-6"
        >
          {/* Angled 3D Perspective Animated Cyber Grid */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:900px] flex items-center justify-center">
            <motion.div
              initial={{ 
                opacity: 0, 
                rotateX: 75, 
                rotateZ: -20, 
                scale: 1.9,
                y: 80 
              }}
              animate={{ 
                opacity: 0.85, 
                rotateX: [60, 54, 60], 
                rotateZ: [-18, -12, -18], 
                scale: [1.65, 1.75, 1.65],
                y: 0 
              }}
              transition={{ 
                opacity: { duration: 1, ease: "easeOut" },
                y: { duration: 1.2, ease: "easeOut" },
                rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute w-[200vw] h-[200vh] origin-center animate-grid-move"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 168, 132, 0.18) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 168, 132, 0.18) 1px, transparent 1px),
                  linear-gradient(rgba(6, 182, 212, 0.10) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6, 182, 212, 0.10) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px, 60px 60px, 300px 300px, 300px 300px",
                transformStyle: "preserve-3d",
              }}
            />
          </div>

          {/* Vignette & Soft Gradient Fade for Seamless Cyber Vibe */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#040810]/70 to-[#040810] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-transparent to-[#040810] pointer-events-none opacity-80" />

          {/* Central Ambient Glow */}
          <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-[#00a884]/15 via-cyan-500/10 to-transparent rounded-full blur-[90px] pointer-events-none animate-pulse" />

          {/* MAIN CENTER CONTAINER */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full">
            {/* Clean Logo (No background circle rings) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="bg-[#07131e]/80 backdrop-blur-xl px-7 py-3 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,168,132,0.18)]">
                <img
                  src="/logo/logo.png"
                  alt="US Software Logo"
                  className="w-[120px] sm:w-[145px] h-auto object-contain drop-shadow-[0_2px_10px_rgba(0,168,132,0.35)]"
                />
              </div>
            </motion.div>

            {/* INFINITY (∞) ANIMATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ 
                opacity: 1, 
                scale: [0.97, 1.03, 0.97],
              }}
              transition={{ 
                opacity: { duration: 0.6 },
                scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-48 sm:w-60 md:w-64 h-24 sm:h-28 flex items-center justify-center my-1"
            >
              <svg
                viewBox="0 0 240 120"
                className="w-full h-full overflow-visible drop-shadow-[0_0_18px_rgba(0,168,132,0.5)]"
              >
                <defs>
                  {/* Neon Infinity Gradient */}
                  <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00a884" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>

                  {/* Laser Tip Glow Filter */}
                  <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Base Dim Track */}
                <path
                  d={infinityPath}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Glowing Active Neon Loop Stroke */}
                <motion.path
                  d={infinityPath}
                  fill="none"
                  stroke="url(#infinityGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="140 280"
                  animate={{
                    strokeDashoffset: [0, -420],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Second Counter-Flow Neon Trail for Rich Continuous Movement */}
                <motion.path
                  d={infinityPath}
                  fill="none"
                  stroke="#00ffff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="60 360"
                  animate={{
                    strokeDashoffset: [-210, -630],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  opacity={0.85}
                />

                {/* Orbiting Energy Light Dot 1 */}
                <circle r="4" fill="#ffffff" filter="url(#neonGlow)">
                  <animateMotion
                    path={infinityPath}
                    dur="2.2s"
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>

                {/* Orbiting Energy Light Dot 2 (Opposite Phase) */}
                <circle r="3.5" fill="#00a884" filter="url(#neonGlow)">
                  <animateMotion
                    path={infinityPath}
                    dur="2.2s"
                    repeatCount="indefinite"
                    keyPoints="0.5;1;0.5"
                    keyTimes="0;0.5;1"
                    calcMode="linear"
                  />
                </circle>
              </svg>
            </motion.div>

            {/* Glowing Digital Percentage Counter */}
            <div className="flex items-baseline justify-center space-x-1 my-1">
              <motion.span
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 font-mono"
              >
                {progress}
              </motion.span>
              <span className="text-xl sm:text-2xl font-mono text-[#00a884] font-bold">
                %
              </span>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-64 sm:w-80 md:w-96 mt-3 flex flex-col items-center">
              <div className="w-full h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden relative p-[1px]">
                {/* Progress Track */}
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00a884] via-emerald-400 to-cyan-400 rounded-full relative"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                >
                  {/* Glowing Laser Scan on top of the bar */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.7)_50%,transparent_100%)] animate-shimmer" />
                </motion.div>
              </div>

              {/* Progress Stage Markers */}
              <div className="w-full flex justify-between items-center mt-2 px-1 text-[9px] font-mono tracking-wider">
                <span className={progress >= 25 ? "text-emerald-400 font-bold" : "text-gray-600"}>BOOT</span>
                <span className={progress >= 50 ? "text-emerald-400 font-bold" : "text-gray-600"}>ASSETS</span>
                <span className={progress >= 75 ? "text-emerald-400 font-bold" : "text-gray-600"}>RENDER</span>
                <span className={progress >= 100 ? "text-cyan-400 font-bold" : "text-gray-600"}>READY</span>
              </div>
            </div>

            {/* DYNAMIC STATUS BADGE */}
            <div className="mt-5 flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
              <CurrentIcon className="w-3.5 h-3.5 text-[#00a884] animate-spin-slow" />
              <span className="text-[11px] font-mono tracking-wider text-gray-300 uppercase">
                {statusMessages[statusIndex]?.text}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
