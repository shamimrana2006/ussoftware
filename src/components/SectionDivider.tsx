"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Code2, Users, Award, Briefcase, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function SectionDivider() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const features = [
    {
      icon: Code2,
      color: "from-emerald-500 to-teal-600",
      badge: isEn ? "Practical" : "প্র্যাকটিক্যাল",
      title: t.featuresBar?.feature1?.title || "Real-World Projects",
      desc: t.featuresBar?.feature1?.desc || "Build production-grade applications",
    },
    {
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      badge: isEn ? "1-on-1" : "১-অন-১",
      title: t.featuresBar?.feature2?.title || "Senior Mentorship",
      desc: t.featuresBar?.feature2?.desc || "1-on-1 guidance from tech leaders",
    },
    {
      icon: Award,
      color: "from-purple-500 to-pink-600",
      badge: isEn ? "Verified" : "ভেরিফাইড",
      title: t.featuresBar?.feature3?.title || "Global Certification",
      desc: t.featuresBar?.feature3?.desc || "Industry-recognized credentials",
    },
    {
      icon: Briefcase,
      color: "from-amber-500 to-orange-600",
      badge: isEn ? "Career" : "ক্যারিয়ার",
      title: t.featuresBar?.feature4?.title || "Career Placement",
      desc: t.featuresBar?.feature4?.desc || "Direct access to 120+ tech partners",
    },
  ];

  return (
    <div className="relative z-30 -mt-10 sm:-mt-14 lg:-mt-16 select-none">
      {/* Main Container */}
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Floating Feature Cards Grid (No background border or lines) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={21} />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100/90 text-slate-600 flex items-center gap-1 group-hover:bg-[#00a884]/10 group-hover:text-[#00a884] transition-colors">
                      <Sparkles size={11} className="text-[#00a884]" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[#0b2b46] transition-colors leading-snug mb-1.5 flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#00a884] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Active Status Accent */}
                <div className="pt-3 mt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 size={13} />
                    <span className="font-semibold">{isEn ? "Included" : "অন্তর্ভুক্ত"}</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider">US SOFTWARE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
