"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ShieldCheck, Award, QrCode, CheckCircle2, 
  Rotate3d, Sparkles, ExternalLink, Lock, Check,
  Share2, Download, RefreshCw, Eye
} from "lucide-react";

export interface CertificateData {
  id: string;
  name: string;
  course: string;
  issueDate: string;
  grade: string;
  credentialHash: string;
  instructor: string;
  director: string;
  status?: string;
  email?: string;
  phone?: string;
  rollNo?: string;
  skills?: string[];
  duration?: string;
}

export default function Certificate3DCanvas({
  data,
}: {
  data: CertificateData;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoSpin, setIsAutoSpin] = useState(true);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Periodic 180° Auto-Flip with 2-second pause loop
  useEffect(() => {
    if (!isAutoSpin) return;

    // Flip every 3.4 seconds (1.4s flip + 2.0s reading pause)
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3400);

    return () => clearInterval(interval);
  }, [isAutoSpin]);

  // Interactive 3D Gyroscope Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardContainerRef.current) return;
    const rect = cardContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative w-full py-6 sm:py-10 px-4 flex flex-col items-center justify-center overflow-hidden bg-[#faf7f2] select-none">
      
      {/* Soft Ambient Aurora Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-rose-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Status & Interaction Controls Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between gap-3 mb-6 z-20">
        
        {/* Live 3D Badge */}
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-xs text-xs font-bold text-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <Rotate3d size={14} className="text-[#008744]" />
          <span>Interactive 3D Glass Certificate</span>
        </div>

        {/* Action Buttons: Flip Card & Auto-Rotate Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsAutoSpin(false);
              setIsFlipped((prev) => !prev);
            }}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200/80 shadow-xs flex items-center gap-1.5 transition-all cursor-pointer hover:border-slate-300"
          >
            <Rotate3d size={13} className="text-[#008744]" />
            <span>{isFlipped ? "Show Front Face" : "Show Security Back"}</span>
          </button>

          <button
            onClick={() => setIsAutoSpin((prev) => !prev)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer ${
              isAutoSpin
                ? "bg-[#008744] text-white shadow-emerald-500/20"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            <RefreshCw size={12} className={isAutoSpin ? "animate-spin" : ""} style={{ animationDuration: "3.4s" }} />
            <span>{isAutoSpin ? "Auto Flip: ON" : "Auto Flip: OFF"}</span>
          </button>
        </div>

      </div>

      {/* 3D PERSPECTIVE SCENE WRAPPER */}
      <div
        ref={cardContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped((prev) => !prev)}
        style={{ perspective: 1800 }}
        className="w-full max-w-[820px] aspect-[1.42/1] cursor-pointer relative z-10"
      >
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1], // fluid spring-like cubic ease
          }}
          className="relative w-full h-full rounded-[24px] sm:rounded-[32px] transition-shadow duration-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] hover:shadow-[0_35px_80px_-15px_rgba(0,135,68,0.22)]"
        >

          {/* ================================================================= */}
          {/* FRONT FACE: LUXURY DIGITAL CERTIFICATE OF COMPLETION              */}
          {/* ================================================================= */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[32px] p-4 sm:p-7 md:p-9 bg-gradient-to-br from-[#ffffff] via-[#fffdfa] to-[#fbf7f0] border-[2px] border-[#e2d5c3] flex flex-col justify-between overflow-hidden"
          >
            {/* Dynamic Gold Foil Border & Security Guilloche Lines */}
            <div className="absolute inset-2 sm:inset-3 rounded-[18px] sm:rounded-[24px] border border-[#d4af37]/40 pointer-events-none" />
            <div className="absolute inset-2.5 sm:inset-3.5 rounded-[16px] sm:rounded-[22px] border border-dashed border-[#b8860b]/25 pointer-events-none" />
            
            {/* Corner Luxury Flourishes */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#b8860b] rounded-tl-lg pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#b8860b] rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#b8860b] rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#b8860b] rounded-br-lg pointer-events-none" />

            {/* Top Certificate Header Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#e8ded1] pb-2 sm:pb-3.5">
              
              {/* Logo & Institute Name */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#008744] to-[#005c2e] p-1.5 flex items-center justify-center shadow-sm">
                  <Award className="text-white w-full h-full" />
                </div>
                <div>
                  <div className="text-[12px] sm:text-[15px] font-black tracking-tight text-slate-900 leading-tight">
                    US SOFTWARE LTD.
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-bold tracking-widest text-[#008744] uppercase">
                    Accredited Global Institute
                  </div>
                </div>
              </div>

              {/* Serial Credential Pill */}
              <div className="flex items-center gap-1.5 bg-[#008744]/10 border border-[#008744]/30 px-2.5 sm:px-3.5 py-1 rounded-full text-[9px] sm:text-[11px] font-mono font-bold text-[#008744]">
                <ShieldCheck size={13} />
                <span>VERIFIED #{data.id}</span>
              </div>

            </div>

            {/* Certificate Title & Presentation */}
            <div className="relative z-10 text-center my-auto py-1 sm:py-2">
              
              <div className="inline-block mb-1 sm:mb-2">
                <span className="text-[8px] sm:text-[11px] font-bold tracking-[0.25em] text-[#b8860b] uppercase font-mono bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200/60">
                  ★ OFFICIAL CERTIFICATE OF EXCELLENCE ★
                </span>
              </div>

              <div className="text-[9px] sm:text-[12px] font-medium text-slate-500 italic mb-0.5">
                This prestigious credential is proudly presented to
              </div>

              {/* Recipient Name in Elegant Serif Calligraphy */}
              <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b]">
                {data.name}
              </h2>

              <div className="text-[8px] sm:text-[11px] text-slate-500 max-w-lg mx-auto line-clamp-1 mt-0.5 mb-1.5 sm:mb-2.5">
                for successfully completing the rigorous industry examination & practical capstone projects in
              </div>

              {/* Course Title Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-xl bg-gradient-to-r from-[#008744]/10 via-[#008744]/20 to-[#008744]/10 border border-[#008744]/40 shadow-xs">
                <Sparkles size={13} className="text-[#008744]" />
                <span className="text-[10px] sm:text-[13px] md:text-[14px] font-black text-[#008744] tracking-wide uppercase">
                  {data.course}
                </span>
              </div>

              {/* Verified Software Mastery Skill Badges */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                {["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "InDesign", "3D Blender", "Figma"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-white border border-slate-200/80 text-[8px] sm:text-[10px] font-bold text-slate-700 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* Bottom Certificate Footer: Signatures & Gold Wax Seal */}
            <div className="relative z-10 flex items-end justify-between pt-2 border-t border-[#e8ded1]">
              
              {/* Instructor Signature */}
              <div className="text-center w-28 sm:w-36">
                <div className="font-serif italic text-xs sm:text-base text-slate-800 font-bold border-b border-slate-300 pb-0.5 mb-1 font-['Brush_Script_MT',cursive]">
                  {data.instructor}
                </div>
                <div className="text-[7px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Lead Instructor
                </div>
              </div>

              {/* Official 3D Gold Embossed Wax Seal */}
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#ffd700] via-[#d4af37] to-[#aa8010] p-0.5 shadow-md flex items-center justify-center border-2 border-white">
                  <div className="w-full h-full rounded-full border border-dashed border-amber-900/30 flex flex-col items-center justify-center text-center p-1">
                    <Award size={16} className="text-amber-950 sm:w-5 sm:h-5" />
                    <span className="text-[6px] sm:text-[7px] font-black text-amber-950 tracking-tighter uppercase leading-none mt-0.5">
                      ★ WELL DONE ★
                    </span>
                  </div>
                </div>
                <span className="text-[6px] sm:text-[8px] font-mono font-bold text-amber-800 mt-0.5">
                  OFFICIAL SEAL
                </span>
              </div>

              {/* Director Signature */}
              <div className="text-center w-28 sm:w-36">
                <div className="font-serif italic text-xs sm:text-base text-slate-800 font-bold border-b border-slate-300 pb-0.5 mb-1 font-['Brush_Script_MT',cursive]">
                  {data.director}
                </div>
                <div className="text-[7px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Managing Director
                </div>
              </div>

            </div>

          </div>

          {/* ================================================================= */}
          {/* BACK FACE: HOLOGRAPHIC CRYPTOGRAPHIC SECURITY LEDGER & QR CODE    */}
          {/* ================================================================= */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[32px] p-4 sm:p-7 md:p-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1d] text-white border-[2px] border-emerald-500/30 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            {/* Rainbow Holographic Security Strip */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-cyan-400 to-purple-500 opacity-90 animate-pulse" />

            {/* Back Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-700/60 pb-3 mt-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black tracking-tight text-white">
                    CRYPTOGRAPHIC SECURITY RECORD
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-emerald-400 font-mono">
                    SHA-256 IMMUTABLE VERIFICATION LEDGER
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[9px] sm:text-[11px] font-bold text-emerald-300">
                <CheckCircle2 size={13} />
                <span>100% AUTHENTIC</span>
              </div>
            </div>

            {/* Back Main Security Information */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-auto items-center">
              
              {/* Interactive QR Code Card */}
              <div className="bg-white p-3 rounded-2xl flex flex-col items-center justify-center text-slate-900 shadow-md">
                <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-slate-900 rounded-xl p-1 flex items-center justify-center relative">
                  {/* Stylized QR Matrix */}
                  <div className="w-full h-full grid grid-cols-5 gap-1 p-1 bg-slate-950 rounded-lg">
                    <div className="bg-white rounded-xs col-span-2 row-span-2" />
                    <div className="bg-emerald-400 rounded-xs" />
                    <div className="bg-white rounded-xs col-span-2 row-span-2" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-emerald-400 rounded-xs col-span-3" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-white rounded-xs col-span-2 row-span-2" />
                    <div className="bg-emerald-400 rounded-xs" />
                    <div className="bg-white rounded-xs col-span-2 row-span-2" />
                  </div>
                </div>
                <div className="text-[8px] sm:text-[9px] font-mono font-bold text-slate-600 mt-1.5 text-center">
                  SCAN TO VERIFY LIVE
                </div>
              </div>

              {/* Credential Data Ledger */}
              <div className="sm:col-span-2 space-y-2 text-left bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
                
                <div>
                  <div className="text-[8px] sm:text-[10px] text-slate-400 font-mono uppercase">ISSUED TO CANDIDATE</div>
                  <div className="text-xs sm:text-sm font-bold text-white">{data.name}</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-[8px] sm:text-[10px] text-slate-400 font-mono uppercase">CERTIFICATE ID</div>
                    <div className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400">{data.id}</div>
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[10px] text-slate-400 font-mono uppercase">ISSUE DATE</div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-200">{data.issueDate}</div>
                  </div>
                </div>

                <div>
                  <div className="text-[8px] sm:text-[10px] text-slate-400 font-mono uppercase">CRYPTOGRAPHIC HASH</div>
                  <div className="text-[8px] sm:text-[10px] font-mono text-cyan-300 break-all bg-slate-900/80 px-2 py-1 rounded-md border border-slate-700/80">
                    {data.credentialHash}
                  </div>
                </div>

              </div>

            </div>

            {/* Back Footer */}
            <div className="relative z-10 flex items-center justify-between border-t border-slate-800 pt-2 text-[8px] sm:text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Lock size={12} className="text-emerald-400" />
                <span>Protected by US Software Security Infrastructure</span>
              </div>
              <div className="font-mono text-emerald-400 font-bold">
                VERIFIED REGISTRY • 2026
              </div>
            </div>

          </div>

        </motion.div>
      </div>

      {/* Floating User Hint Below */}
      <div className="mt-4 text-center text-xs font-medium text-slate-500 flex items-center justify-center gap-1.5">
        <Eye size={13} className="text-[#008744]" />
        <span>Click the certificate card anytime or move your mouse to inspect in 3D</span>
      </div>

    </div>
  );
}
