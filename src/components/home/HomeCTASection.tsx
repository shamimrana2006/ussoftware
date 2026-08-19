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
    <section id="cta" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#008744]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#DE1F26]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* RADIANT LIGHT CTA CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-emerald-50/70 via-white to-red-50/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 border border-emerald-100/90 shadow-[0_20px_50px_rgba(0,135,68,0.06)] overflow-hidden text-center text-slate-900"
        >
          {/* Ambient Glow Orbs in Brand Red & Green */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#008744]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#DE1F26]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Grid Pattern Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,135,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,135,68,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-70" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#008744] mb-4 shadow-xs"
            >
              <Rocket size={13} className="text-[#DE1F26]" />
              <span>{isEn ? "NEW BATCH ENROLLMENT OPEN" : "নতুন ব্যাচে সীমিত আসনে ভর্তি চলছে"}</span>
            </motion.div>

            {/* SECTION HEADING: Light Theme Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3.5"
            >
              {isEn ? (
                <>
                  Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">Learning Journey</span> Today
                </>
              ) : (
                <>
                  আজই শুরু করুন আপনার <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">লার্নিং জার্নি</span>
                </>
              )}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-8 max-w-xl mx-auto"
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
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8"
            >
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008744] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-md shadow-emerald-700/15 hover:shadow-lg transition-all group"
              >
                <span>{isEn ? "Browse All Programs" : "সবগুলো কোর্স দেখুন"}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <PhoneCall size={15} className="text-[#DE1F26]" />
                <span>{isEn ? "Book Free Counseling" : "ফ্রি ক্যারিয়ার কাউন্সেলিং"}</span>
              </Link>
            </motion.div>

            {/* Trust Checklist footer */}
            <div className="pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#008744]" />
                <span>{isEn ? "100% Live Interactive" : "১০০% লাইভ ক্লাস"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#008744]" />
                <span>{isEn ? "1-on-1 Dedicated Mentors" : "১-অন-১ মেন্টর"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#008744]" />
                <span>{isEn ? "120+ Hiring Network" : "১২০+ হায়ারার্স"}</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
