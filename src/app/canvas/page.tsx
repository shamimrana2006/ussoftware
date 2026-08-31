"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Globe2, Cloud, BrainCircuit, Rocket, Cpu } from "lucide-react";

export default function CanvasPage() {
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

  const baseScale = windowSize.width < 1024 ? 0.55 : 0.7;

  // Calculate 3D Rotations (Tilt) based on global mouse position
  const rotateX = useTransform(smoothY, [0, windowSize.height], [20, -20]);
  const rotateY = useTransform(smoothX, [0, windowSize.width], [-35, 35]);

  const logoRotateX = useTransform(smoothY, [0, windowSize.height], [15, -15]);
  const logoRotateY = useTransform(smoothX, [0, windowSize.width], [-15, 15]);

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
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow pt-8 pb-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fcf9] via-[#f2f8f5] to-[#ebf4ef] pt-12 lg:pt-14 pb-12 lg:pb-16 flex">
          {/* Background Decorative Gradients in Red & Green */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#008744]/12 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#DE1F26]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div className="space-y-5 relative z-30" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-1.5 bg-white border border-[#008744]/30 rounded-full px-3 py-1 shadow-sm">
                <Rocket size={14} className="text-[#DE1F26]" />
                <span className="text-xs font-bold text-[#008744]">3D Canvas View</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-black text-[#08121a] leading-[1.1]">
                Immersive <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE1F26] via-rose-500 to-[#008744]">
                    3D Experience
                  </span>
                  <svg className="absolute w-full h-[10px] bottom-[-2px] left-0 text-[#008744]/50" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <motion.path d="M2,10 Q100,0 198,8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }} />
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-gray-700 font-medium text-base max-w-md leading-relaxed">
                Explore our interactive 3D platform showcasing the depth of our digital solutions.
              </motion.p>
            </motion.div>

            {/* Right Content - Full 3D Interactive Zone */}
            <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center pointer-events-none perspective-[1500px] transform-style-3d overflow-visible">

              {/* Elegant 3D Concentric Circle Floor (Podium) */}
              <motion.div
                className="absolute w-[800px] h-[800px] flex items-center justify-center transform-style-3d"
                style={{ rotateX: 81, y: windowSize.width < 1024 ? 100 : 200, z: -200, scale: baseScale }}
              >
                {/* STAIR 1 */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`base-${i}`} className={`absolute inset-[0%] rounded-full bg-[#020617] border border-[#0f172a] ${i === 3 ? 'bg-gradient-to-tr from-[#020617] to-[#0f172a] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] border-[#1e293b]' : ''}`} style={{ transform: `translateZ(${-100 + (i * 6)}px)` }}></div>
                ))}

                {/* STAIR 2 (Green) */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`green-${i}`} className={`absolute inset-[3%] rounded-full bg-[#062414] border border-[#008744] ${i === 2 ? 'bg-[#031c0e] shadow-[0_0_50px_#008744,inset_0_0_40px_#10b981] border-[#10b981] border-[2px]' : ''}`} style={{ transform: `translateZ(${-76 + (i * 6)}px)` }}></div>
                ))}

                {/* STAIR 3 */}
                <motion.div animate={{ rotateZ: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d will-change-transform">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={`mid-${i}`} className={`absolute inset-[6%] rounded-full bg-[#0f172a] border border-[#1e293b] ${i === 3 ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[#334155] shadow-[inset_0_0_40px_rgba(0,0,0,0.7)]' : ''}`} style={{ transform: `translateZ(${-58 + (i * 5)}px)` }}>
                      {i === 3 && (
                        <>
                          <div className="absolute top-[-2px] left-1/4 w-[60px] h-[4px] bg-[#008744]/80 shadow-[0_0_15px_#008744] rotate-[-20deg]"></div>
                          <div className="absolute bottom-[-2px] right-1/4 w-[60px] h-[4px] bg-[#008744]/80 shadow-[0_0_15px_#008744] rotate-[-20deg]"></div>
                        </>
                      )}
                    </div>
                  ))}
                </motion.div>

                {/* STAIR 4 (Red) */}
                <motion.div animate={{ rotateZ: [0, -360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d will-change-transform">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={`red-${i}`} className={`absolute inset-[9%] rounded-full bg-[#380608] border border-[#DE1F26] ${i === 2 ? 'bg-[#290305] shadow-[0_0_50px_#DE1F26,inset_0_0_40px_#ef4444] border-[#ef4444] border-[2px]' : ''}`} style={{ transform: `translateZ(${-38 + (i * 5)}px)` }}>
                      {i === 2 && (
                        <>
                          <div className="absolute top-[-4px] left-1/2 w-[40px] h-[8px] bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_40px_#DE1F26] -translate-x-1/2"></div>
                          <div className="absolute bottom-[-4px] left-1/2 w-[40px] h-[8px] bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_40px_#DE1F26] -translate-x-1/2"></div>
                        </>
                      )}
                    </div>
                  ))}
                </motion.div>

                {/* STAIR 5 */}
                <motion.div animate={{ rotateZ: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d will-change-transform">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={`top-${i}`} className={`absolute inset-[12%] rounded-full bg-[#94a3b8] border border-[#64748b] ${i === 2 ? 'bg-gradient-to-br from-[#ffffff] via-[#f1f5f9] to-[#e2e8f0] shadow-[inset_0_0_50px_rgba(255,255,255,1),0_0_50px_rgba(15,23,42,0.5)] border-2 border-[#cbd5e1]' : ''}`} style={{ transform: `translateZ(${-23 + (i * 5)}px)` }}>
                      {i === 2 && (
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                          <div className="absolute w-[85%] h-[85%] rounded-full border-[2px] border-dashed border-[#94a3b8]/50 shadow-[inset_0_0_20px_rgba(148,163,184,0.1)]"></div>
                          <div className="absolute w-[85%] h-[85%] rounded-full border-[3px] border-transparent border-t-[#008744] border-b-[#DE1F26] opacity-60"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>

                {/* STAIR 6 (Pillar) */}
                <motion.div animate={{ rotateZ: [0, -360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 transform-style-3d will-change-transform">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={`pillar-${i}`} className={`absolute inset-[15%] rounded-full ${i === 4 ? 'bg-gradient-to-br from-[#d1fae5]/90 via-[#008744]/40 to-transparent backdrop-blur-md shadow-[inset_0_0_40px_rgba(16,185,129,0.8),0_15px_40px_rgba(0,135,68,0.5)] border-2 border-[#10b981]' : 'bg-[#008744]/[0.05] border border-[#10b981]/30'}`} style={{ transform: `translateZ(${-8 + (i * 8)}px)` }}>
                      {i === 4 && (
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                          <div className="absolute w-[60%] h-[60%] rounded-full bg-gradient-to-b from-[#f8fafc]/90 to-[#f1f5f9]/90 border-[4px] border-dashed border-[#DE1F26] shadow-[0_15px_40px_rgba(222,31,38,0.4)] flex items-center justify-center">
                            <div className="w-[70%] h-[70%] rounded-full border-[3px] border-dashed border-[#008744] animate-pulse"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Main 3D Container tracking mouse */}
              <motion.div
                style={{ rotateX, rotateY, scale: baseScale }}
                className="absolute w-full h-full flex items-center justify-center transform-style-3d will-change-transform"
              >
                {/* Central Moderately Extruded Logo Card */}
                <motion.div
                  style={{ rotateX: logoRotateX, rotateY: logoRotateY }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-50 w-[200px] h-[200px] transform-style-3d translate-z-[100px]"
                >
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-[28px] border border-white/30 translate-z-[-15px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"></div>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[28px] border border-white/50 translate-z-[-8px]"></div>

                  <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white/90 rounded-[28px] shadow-[inset_0_0_15px_rgba(255,255,255,0.7)] flex items-center justify-center overflow-hidden">
                    <motion.div style={{ x: glareX, y: glareY }} className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/80 to-transparent rotate-45 pointer-events-none" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center transform-style-3d pointer-events-none">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <img key={`logo-ext-${i}`} src="/logo/us software logo.png" alt="US Logo" className={`absolute w-[165px] h-[165px] object-cover object-left ${i === 3 ? 'drop-shadow-[0_15px_20px_rgba(0,135,68,0.6)]' : 'brightness-0 invert opacity-[0.4] blur-[0.5px]'}`} style={{ transform: `translateZ(${8 + i * 8}px)` }} />
                    ))}
                  </div>

                  {/* Laser Scanner Layer */}
                  <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none" style={{ transform: "translateZ(1px)" }}>
                    <motion.div className="absolute left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-[#DE1F26]/20 to-[#DE1F26]/40 border-b-2 border-[#DE1F26] z-10 flex flex-col justify-end pointer-events-none" animate={{ top: ['-50%', '110%', '-50%'] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}>
                      <div className="absolute bottom-0 w-full h-[2px] bg-rose-200 shadow-[0_0_20px_4px_#DE1F26]"></div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* 3D CIRCUIT TRACKS */}
                <div className="absolute inset-0 pointer-events-none transform-style-3d z-30" style={{ transform: "translateZ(20px)" }}>
                  <motion.div className="absolute top-[25%] left-[15%] w-[35%] h-[25%] border-t-[2px] border-r-[2px] border-[#008744]/50 rounded-tr-[25px] drop-shadow-[0_0_8px_rgba(0,135,68,0.8)]" animate={{ y: [-15, 20, -15], x: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}>
                    <motion.div className="absolute w-3 h-3 rounded-full bg-[#008744] shadow-[0_0_15px_4px_#008744]" animate={{ top: ['100%', '0%', '0%', '0%'], left: ['100%', '100%', '0%', '0%'], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.9, 1] }} style={{ x: "-50%", y: "-50%" }} />
                  </motion.div>
                  <motion.div className="absolute top-[20%] left-[50%] w-[35%] h-[30%] border-t-[2px] border-l-[2px] border-[#DE1F26]/50 rounded-tl-[25px] drop-shadow-[0_0_8px_rgba(222,31,38,0.8)]" animate={{ y: [-20, 15, -20] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                    <motion.div className="absolute w-3 h-3 rounded-full bg-[#DE1F26] shadow-[0_0_15px_4px_#DE1F26]" animate={{ top: ['100%', '0%', '0%', '0%'], left: ['0%', '0%', '100%', '100%'], opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.9, 1], delay: 0.5 }} style={{ x: "-50%", y: "-50%" }} />
                  </motion.div>
                </div>

                {/* FLOATING FEATURE CARDS */}
                <motion.div animate={{ y: [-15, 20, -15], x: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }} className="absolute left-[0%] top-[20%] z-40 transform-style-3d translate-z-[60px]">
                  <div className="absolute inset-0 bg-[#008744]/20 rounded-2xl border border-[#008744]/20 translate-z-[-16px] shadow-xl"></div>
                  <div className="absolute inset-0 bg-white/60 rounded-2xl border border-white/50 translate-z-[-8px]"></div>
                  <div className="relative bg-white/90 backdrop-blur-md border border-white/80 shadow-md rounded-2xl p-3 pr-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008744] to-[#056839] flex items-center justify-center shadow-inner">
                      <Globe2 size={24} className="text-white" />
                    </div>
                    <span className="font-extrabold text-[#08121a] text-sm leading-tight">Web <br /> Development</span>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [15, -15, 15], x: [5, -5, 5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute left-[5%] top-[70%] z-30 transform-style-3d translate-z-[40px]">
                  <div className="absolute inset-0 bg-[#DE1F26]/20 rounded-2xl border border-[#DE1F26]/20 translate-z-[-16px] shadow-xl"></div>
                  <div className="absolute inset-0 bg-white/60 rounded-2xl border border-white/50 translate-z-[-8px]"></div>
                  <div className="relative bg-white/90 backdrop-blur-md border border-white/80 shadow-md rounded-2xl p-3 pr-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DE1F26] to-rose-700 flex items-center justify-center shadow-inner">
                      <Cloud size={24} className="text-white" />
                    </div>
                    <span className="font-extrabold text-[#08121a] text-sm leading-tight">Cloud <br /> Solutions</span>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [-20, 15, -20] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute right-[0%] top-[15%] z-30 transform-style-3d translate-z-[80px]">
                  <div className="absolute inset-0 bg-[#008744]/20 rounded-2xl border border-[#008744]/20 translate-z-[-16px] shadow-xl"></div>
                  <div className="absolute inset-0 bg-white/60 rounded-2xl border border-white/50 translate-z-[-8px]"></div>
                  <div className="relative bg-white/90 backdrop-blur-md border border-white/80 shadow-md rounded-2xl p-3 pr-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008744] to-[#056839] flex items-center justify-center shadow-inner">
                      <ShieldCheck size={24} className="text-white" />
                    </div>
                    <span className="font-extrabold text-[#08121a] text-sm leading-tight">Cyber <br /> Security</span>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute right-[-10%] top-[45%] z-50 transform-style-3d translate-z-[120px]">
                  <div className="absolute inset-0 bg-[#DE1F26]/30 rounded-2xl border border-[#DE1F26]/30 translate-z-[-20px] shadow-[0_20px_40px_rgba(222,31,38,0.3)]"></div>
                  <div className="absolute inset-0 bg-[#380608]/60 rounded-2xl border border-[#DE1F26]/40 translate-z-[-10px]"></div>
                  <div className="relative bg-[#200305]/90 backdrop-blur-md border border-[#DE1F26]/50 shadow-[0_0_25px_rgba(222,31,38,0.4)] rounded-2xl p-3 pr-6 flex items-center space-x-4 overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DE1F26] to-rose-700 flex items-center justify-center shadow-[0_0_15px_rgba(222,31,38,0.6)]">
                      <BrainCircuit size={24} className="text-white animate-pulse" />
                    </div>
                    <span className="font-extrabold text-white text-sm leading-tight">AI & Machine <br /> Learning</span>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
