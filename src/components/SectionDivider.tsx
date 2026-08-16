"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, type Variants } from "framer-motion";
import { Code2, Users, Award, Briefcase, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function SectionDivider() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const features = [
    {
      icon: Code2,
      color: "from-emerald-500 to-green-700",
      badge: isEn ? "Practical" : "প্র্যাকটিক্যাল",
      title: t.featuresBar?.feature1?.title || "Real-World Projects",
      desc: t.featuresBar?.feature1?.desc || "Build production-grade applications",
      lineGrad: "from-transparent via-emerald-400 via-[#008744] to-transparent",
      hoverShadow: "group-hover:shadow-[0_16px_35px_rgba(0,135,68,0.16)]",
      accentBg: "group-hover:bg-emerald-500/[0.02]",
      accentText: "group-hover:text-[#008744]",
      accentCheck: "group-hover:text-[#008744]",
      accentBadge: "group-hover:bg-emerald-500/10 group-hover:text-[#008744] group-hover:border-emerald-500/30",
      iconGlow: "group-hover:shadow-[0_8px_20px_rgba(0,135,68,0.35)]",
      spotlight: "bg-emerald-500/10",
    },
    {
      icon: Users,
      color: "from-[#DE1F26] to-rose-700",
      badge: isEn ? "1-on-1" : "১-অন-১",
      title: t.featuresBar?.feature2?.title || "Senior Mentorship",
      desc: t.featuresBar?.feature2?.desc || "1-on-1 guidance from tech leaders",
      lineGrad: "from-transparent via-red-400 via-[#DE1F26] to-transparent",
      hoverShadow: "group-hover:shadow-[0_16px_35px_rgba(222,31,38,0.16)]",
      accentBg: "group-hover:bg-red-500/[0.02]",
      accentText: "group-hover:text-[#DE1F26]",
      accentCheck: "group-hover:text-[#DE1F26]",
      accentBadge: "group-hover:bg-red-500/10 group-hover:text-[#DE1F26] group-hover:border-red-500/30",
      iconGlow: "group-hover:shadow-[0_8px_20px_rgba(222,31,38,0.35)]",
      spotlight: "bg-red-500/10",
    },
    {
      icon: Award,
      color: "from-[#008744] to-teal-800",
      badge: isEn ? "Verified" : "ভেরিফাইড",
      title: t.featuresBar?.feature3?.title || "Global Certification",
      desc: t.featuresBar?.feature3?.desc || "Industry-recognized credentials",
      lineGrad: "from-transparent via-emerald-400 via-[#008744] to-transparent",
      hoverShadow: "group-hover:shadow-[0_16px_35px_rgba(0,135,68,0.16)]",
      accentBg: "group-hover:bg-emerald-500/[0.02]",
      accentText: "group-hover:text-[#008744]",
      accentCheck: "group-hover:text-[#008744]",
      accentBadge: "group-hover:bg-emerald-500/10 group-hover:text-[#008744] group-hover:border-emerald-500/30",
      iconGlow: "group-hover:shadow-[0_8px_20px_rgba(0,135,68,0.35)]",
      spotlight: "bg-emerald-500/10",
    },
    {
      icon: Briefcase,
      color: "from-rose-500 to-[#DE1F26]",
      badge: isEn ? "Career" : "ক্যারিয়ার",
      title: t.featuresBar?.feature4?.title || "Career Placement",
      desc: t.featuresBar?.feature4?.desc || "Direct access to 120+ tech partners",
      lineGrad: "from-transparent via-rose-400 via-[#DE1F26] to-transparent",
      hoverShadow: "group-hover:shadow-[0_16px_35px_rgba(222,31,38,0.16)]",
      accentBg: "group-hover:bg-red-500/[0.02]",
      accentText: "group-hover:text-[#DE1F26]",
      accentCheck: "group-hover:text-[#DE1F26]",
      accentBadge: "group-hover:bg-red-500/10 group-hover:text-[#DE1F26] group-hover:border-red-500/30",
      iconGlow: "group-hover:shadow-[0_8px_20px_rgba(222,31,38,0.35)]",
      spotlight: "bg-red-500/10",
    },
  ];

  const lineAnimationVariants: Variants = {
    rest: { 
      scaleX: 0, 
      opacity: 0, 
      transition: { duration: 0.2, ease: "easeOut" } 
    },
    hover: { 
      scaleX: 1, 
      opacity: 1, 
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="relative z-30 -mt-10 sm:-mt-14 lg:-mt-16 select-none">
      {/* Main Container */}
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Floating Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={{
                  rest: { y: 0, scale: 1 },
                  hover: { 
                    y: -7, 
                    scale: 1.02,
                    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className={`group relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/70 shadow-[0_8px_25px_rgba(0,0,0,0.05)] ${item.hoverShadow} ${item.accentBg} transition-all duration-150 flex flex-col justify-between cursor-pointer overflow-hidden`}
              >
                {/* 1. TOP BORDER: EXPANDS FROM CENTER WITH 0 OPACITY FADED EDGES */}
                <motion.div
                  variants={lineAnimationVariants}
                  style={{ transformOrigin: "center" }}
                  className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${item.lineGrad} z-20 pointer-events-none`}
                />

                {/* 2. BOTTOM BORDER: EXPANDS FROM CENTER WITH 0 OPACITY FADED EDGES */}
                <motion.div
                  variants={lineAnimationVariants}
                  style={{ transformOrigin: "center" }}
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${item.lineGrad} z-20 pointer-events-none`}
                />

                {/* Subtle Radial Spotlight Glow on Hover */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${item.spotlight} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`} />

                {/* Diagonal Shimmer Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 ease-out pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 group-hover:rotate-2 ${item.iconGlow} transition-all duration-150`}>
                      <Icon size={21} />
                    </div>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100/90 text-slate-600 border border-slate-200/60 flex items-center gap-1 ${item.accentBadge} transition-all duration-150`}>
                      <Sparkles size={11} className="transition-transform group-hover:rotate-12 duration-150" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Title & Arrow */}
                  <h3 className={`text-base sm:text-lg font-bold text-slate-800 ${item.accentText} transition-colors duration-150 leading-snug mb-1.5 flex items-center justify-between`}>
                    <span>{item.title}</span>
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-current translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-150" />
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 group-hover:text-slate-600 leading-relaxed font-normal transition-colors duration-150">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Active Status Accent */}
                <div className="pt-3 mt-4 border-t border-slate-100/90 flex items-center justify-between text-[11px] font-medium text-slate-400 relative z-10">
                  <span className={`flex items-center gap-1.5 text-[#008744] ${item.accentCheck} font-semibold transition-colors duration-150`}>
                    <CheckCircle2 size={13} className="group-hover:scale-110 transition-transform duration-150" />
                    <span>{isEn ? "Included" : "অন্তর্ভুক্ত"}</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider group-hover:text-slate-600 transition-colors duration-150">
                    US SOFTWARE
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
