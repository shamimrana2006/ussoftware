"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Rocket, ArrowRight, PhoneCall, Sparkles, CheckCircle2, 
  MessageSquare, BookOpen, ShieldCheck, Users
} from "lucide-react";

export default function HomeCTASection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section id="cta" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* RADIANT HERO CTA CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-[#08121a] via-[#0d1e2b] to-[#08121a] rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl overflow-hidden text-center text-white"
        >
          {/* Ambient Glow Orbs in Red & Green */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#008744]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#DE1F26]/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Grid Noise Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#008744]/30 to-[#DE1F26]/30 border border-white/15 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-3 shadow-inner"
            >
              <Rocket size={12} className="text-[#DE1F26]" />
              <span>{isEn ? "NEW BATCH ENROLLMENT OPEN" : "নতুন ব্যাচে সীমিত আসনে ভর্তি চলছে"}</span>
            </motion.div>

            {/* SECTION HEADING: Exact Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3"
            >
              {isEn ? (
                <>
                  Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#DE1F26]">Learning Journey</span> Today
                </>
              ) : (
                <>
                  আজই শুরু করুন আপনার <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#DE1F26]">লার্নিং জার্নি</span>
                </>
              )}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6"
            >
              {isEn 
                ? "Join 6,200+ ambitious developers. Gain production-grade architecture skills, 1-on-1 mentorship, and step directly into high-paying global tech roles."
                : "৬,২০০+ সফল শিক্ষার্থীদের সাথে যোগ দিন। বাস্তবমুখী সফটওয়্যার ইঞ্জিনিয়ারিং শিখে নিজের ভবিষ্যৎকে এগিয়ে নিন।"}
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
            >
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008744] to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all group"
              >
                <span>{isEn ? "Browse All Programs" : "সবগুলো কোর্স দেখুন"}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl backdrop-blur-md transition-all"
              >
                <PhoneCall size={14} className="text-[#DE1F26]" />
                <span>{isEn ? "Book Free Counseling" : "ফ্রি ক্যারিয়ার কাউন্সেলিং"}</span>
              </Link>
            </motion.div>

            {/* Trust Checklist footer */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] text-slate-400">
              <div className="flex items-center gap-1">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>{isEn ? "100% Live Interactive" : "১০০% লাইভ ক্লাস"}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>{isEn ? "1-on-1 Dedicated Mentors" : "১-অন-১ মেন্টর"}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>{isEn ? "120+ Hiring Network" : "১২০+ হায়ারার্স"}</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
