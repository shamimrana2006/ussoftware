"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Sparkles, Users, Award, 
  Briefcase, CheckCircle2, ArrowRight, Star, 
  HeartHandshake, TrendingUp, Check, Laptop, Code2
} from "lucide-react";

export default function HomeBenefitsSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const benefits = [
    {
      number: "01",
      icon: Briefcase,
      iconBg: "bg-emerald-50 text-[#008744] border-emerald-200/80",
      title: isEn ? "Production-Grade Projects" : "প্রোডাকশন-গ্রেড লাইভ প্রজেক্ট",
      desc: isEn 
        ? "Work on real-world enterprise architectures, scalable cloud microservices, and client systems—not toy tutorials."
        : "কোনো ডামি প্রজেক্ট নয়—সরাসরি বড় স্কেলের মাইক্রোসার্ভিসেস, ক্লাউড আর্কিটেকচার ও রিয়েল ক্লায়েন্ট সিস্টেমে কাজ করুন।",
      tags: [
        isEn ? "Full SaaS Systems" : "কম্প্লিট সাশ আর্কিটেকচার",
        isEn ? "Docker & CI/CD Pipelines" : "ডকার ও সিআই/সিডি পাইপলাইন",
        isEn ? "Production Codebase" : "প্রোডাকশন-রেডি কোডবেস"
      ]
    },
    {
      number: "02",
      icon: Users,
      iconBg: "bg-red-50 text-[#DE1F26] border-red-200/80",
      title: isEn ? "1-on-1 Senior Mentorship" : "সিনিয়র ইঞ্জিনিয়ারদের ১-অন-১ মেন্টরশিপ",
      desc: isEn 
        ? "Weekly code reviews, system design critiques, and career roadmaps directly from lead engineers at top tech companies."
        : "টপ গ্লোবাল ও লোকাল টেক কোম্পানিতে কর্মরত লিড ইঞ্জিনিয়ারদের কাছ থেকে সাপ্তাহিক কোড রিভিউ ও ক্যারিয়ার গাইডেন্স।",
      tags: [
        isEn ? "Weekly 1-on-1 Code Reviews" : "সাপ্তাহিক ১-অন-১ কোড রিভিউ",
        isEn ? "System Architecture Advice" : "সিস্টেম আর্কিটেকচার গাইড",
        isEn ? "Direct Mentor Q&A" : "সরাসরি মেন্টর সাপোর্ট"
      ]
    },
    {
      number: "03",
      icon: Award,
      iconBg: "bg-emerald-50 text-[#008744] border-emerald-200/80",
      title: isEn ? "ISO Verified Certification" : "আইএসও সার্টিফাইড ভেরিফিকেশন",
      desc: isEn 
        ? "Internationally recognized verifiable credentials with unique QR verification IDs and LinkedIn portfolio showcase."
        : "অনলাইনে ভেরিফিকেশনযোগ্য কিউআর কোডসহ আন্তর্জাতিক মানের সার্টিফিকেট যা আপনার প্রোফাইলকে অন্যদের থেকে এগিয়ে রাখবে।",
      tags: [
        isEn ? "Online QR Verification" : "অনলাইন কিউআর ভেরিফিকেশন",
        isEn ? "LinkedIn Integrated" : "লিঙ্কডইন ইন্টিগ্রেশন",
        isEn ? "Industry Standard Credential" : "আন্তর্জাতিক মানসম্পন্ন"
      ]
    },
    {
      number: "04",
      icon: HeartHandshake,
      iconBg: "bg-red-50 text-[#DE1F26] border-red-200/80",
      title: isEn ? "120+ Placement Network" : "১২০+ টেক পার্টনার প্লেসমেন্ট",
      desc: isEn 
        ? "Direct interview referrals, resume optimization, mock technical architecture interviews, and salary negotiation support."
        : "মক ইন্টারভিউ, সিভি অপ্টিমাইজেশন ও শীর্ষস্থানীয় ১২০+ সফটওয়্যার প্রতিষ্ঠানে সরাসরি ইন্টারভিউয়ের সুযোগ।",
      tags: [
        isEn ? "Direct Company Referrals" : "সরাসরি ইন্টারভিউ রেফারেল",
        isEn ? "Mock Tech Interviews" : "মক টেকনিক্যাল ইন্টারভিউ",
        isEn ? "Salary Negotiation Prep" : "স্যালারি নেগোসিয়েশন সাপোর্ট"
      ]
    }
  ];

  const stats = [
    { value: "94%", label: isEn ? "Placement Success Rate" : "প্লেসমেন্ট সাফল্যের হার" },
    { value: "120+", label: isEn ? "Hiring Tech Partners" : "হায়ারিং পার্টনার প্রতিষ্ঠান" },
    { value: "1:1", label: isEn ? "Dedicated Mentorship" : "ডেডিকেটেড মেন্টর সাপোর্ট" },
    { value: "6,200+", label: isEn ? "Engineers Graduated" : "সফল গ্র্যাজুয়েট শিক্ষার্থী" }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#008744]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#DE1F26]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#008744]/10 border border-[#008744]/20 text-[#008744] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs"
          >
            <ShieldCheck size={13} className="text-[#DE1F26]" />
            <span>{isEn ? "THE US SOFTWARE ADVANTAGE" : "আমাদের বিশেষত্ব ও সুবিধা"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#08121a] tracking-tight leading-tight"
          >
            {isEn ? (
              <>
                Why <span className="text-[#008744]">Choose</span> <span className="text-[#DE1F26]">US Software</span>
              </>
            ) : (
              <>
                কেন <span className="text-[#008744]">ইউএস সফটওয়্যার</span> <span className="text-[#DE1F26]">বেছে নেবেন?</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-3 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto"
          >
            {isEn 
              ? "We don't teach passive theory. We immerse you in actual software engineering lifecycles with enterprise standards and 1-on-1 mentorship."
              : "আমরা শুধু বইয়ের থিওরি নয়, আন্তর্জাতিক সফটওয়্যার ইন্ডাস্ট্রির বাস্তব কাজের পরিবেশ ও প্রজেক্টের মাধ্যমে আপনাকে চাকরির জন্য প্রস্তুত করি।"}
          </motion.p>
        </div>

        {/* 4 BENEFIT CARDS (2x2 GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,135,68,0.08)] flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${benefit.iconBg} transition-transform group-hover:scale-105`}>
                      <Icon size={20} />
                    </div>

                    <span className="inline-block text-sm font-black text-slate-300 group-hover:text-[#008744] group-hover:scale-150 group-hover:-rotate-12 transition-all duration-300 origin-center select-none font-mono">
                      {benefit.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-[#08121a] text-lg sm:text-xl mb-2.5 group-hover:text-[#008744] transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-5">
                    {benefit.desc}
                  </p>
                </div>

                {/* Feature Chips / Tags */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {benefit.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-md"
                    >
                      <Check size={11} className="text-[#008744] stroke-[3]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST STATS & CTA STRIP WITH INFINITE ANIMATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          {/* Infinite Ambient Light Beam Sweep */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-500/[0.07] to-transparent pointer-events-none skew-x-12"
          />

          {/* 4 Animated Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-auto flex-1 relative z-10">
            {stats.map((stat, sIdx) => (
              <div key={sIdx} className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5 mb-1">
                  <motion.span 
                    animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2, delay: sIdx * 0.3 }}
                    className={`w-2 h-2 rounded-full ${sIdx % 2 === 0 ? "bg-[#008744]" : "bg-[#DE1F26]"}`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {sIdx === 0 ? "Verified" : sIdx === 1 ? "Network" : sIdx === 2 ? "Support" : "Alumni"}
                  </span>
                </div>

                <motion.p 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: sIdx * 0.4 }}
                  className="text-2xl sm:text-3xl font-black text-[#08121a] tracking-tight"
                >
                  <span className={sIdx % 2 === 0 ? "text-[#008744]" : "text-[#DE1F26]"}>
                    {stat.value}
                  </span>
                </motion.p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Animated Action Link */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end relative z-10">
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#008744] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all group"
            >
              <span>{isEn ? "Explore Programs" : "কোর্সগুলো দেখুন"}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight size={15} />
              </motion.div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
