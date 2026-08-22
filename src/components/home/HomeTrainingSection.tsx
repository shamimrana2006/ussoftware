"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Code2, Trophy, 
  Terminal, CheckCircle2, Workflow
} from "lucide-react";

export default function HomeTrainingSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const methodologySteps = [
    {
      step: "01",
      title: isEn ? "First-Principles Architecture" : "ফান্ডামেন্টালস ও আর্কিটেকচার",
      subtitle: isEn ? "Deep Core Understanding" : "গভীর মৌলিক ধারণা",
      desc: isEn 
        ? "We deconstruct computing foundations, data structures, concurrency, and system design patterns before touching framework APIs."
        : "সরাসরি ফ্রেমওয়ার্ক শেখার আগে কম্পিউটার সায়েন্সের ফান্ডামেন্টালস, ডাটা স্ট্রাকচার ও সিস্টেম ডিজাইন প্যাটার্ন আয়ত্ত করা।",
      icon: Terminal,
      accent: "text-[#008744]",
      border: "border-[#008744]/40",
      bg: "bg-emerald-50",
      gradient: "from-[#008744] to-emerald-400"
    },
    {
      step: "02",
      title: isEn ? "Daily Live Code & Lab Sprints" : "প্রতিদিনের লাইভ কোডিং ও ল্যাব স্প্রিন্ট",
      subtitle: isEn ? "Hands-On Muscle Memory" : "বাস্তব কোডিং অনুশীলন",
      desc: isEn 
        ? "Interactive daily programming sessions with real-time test suites, automated lint checks, and algorithmic problem-solving."
        : "প্রতিদিনের ক্লাসে স্বয়ংক্রিয় টেস্ট ও টেস্ট-ড্রিভেন ডেভেলপমেন্টের মাধ্যমে কোডিংয়ের ব্যবহারিক দক্ষতা তৈরি।",
      icon: Code2,
      accent: "text-[#DE1F26]",
      border: "border-[#DE1F26]/40",
      bg: "bg-red-50",
      gradient: "from-[#DE1F26] to-rose-400"
    },
    {
      step: "03",
      title: isEn ? "Enterprise Agile Capstones" : "রিয়েল এন্টারপ্রাইজ টিম প্রজেক্ট",
      subtitle: isEn ? "Industry Teamwork Simulation" : "টিমওয়ার্ক ও প্রজেক্ট ম্যানেজমেন্ট",
      desc: isEn 
        ? "Collaborate in Scrum teams using Git branching models, Jira boards, Dockerized microservices, and continuous CI/CD pipelines."
        : "গিট ব্রাঞ্চিং, জিরা ও ডকার ব্যবহারের মাধ্যমে এন্টারপ্রাইজ টিমের মতো যৌথভাবে বড় সাইজের সফটওয়্যার তৈরি।",
      icon: Workflow,
      accent: "text-[#008744]",
      border: "border-[#008744]/40",
      bg: "bg-emerald-50",
      gradient: "from-[#008744] to-teal-400"
    },
    {
      step: "04",
      title: isEn ? "Technical Defense & Placement" : "টেকনিক্যাল ডিফেন্স ও জব প্লেসমেন্ট",
      subtitle: isEn ? "Direct Career Launch" : "চাকরি ও ক্যারিয়ারের শুরু",
      desc: isEn 
        ? "Defend your codebase in front of senior tech leads, undergo rigorous mock architecture interviews, and get referred to hiring partners."
        : "সিনিয়র ইঞ্জিনিয়ারদের সামনে প্রজেক্ট ডিফেন্স, মক টেক ইন্টারভিউ এবং আমাদের ১২০+ পার্টনার কোম্পানিতে সরাসরি ইন্টারভিউ।",
      icon: Trophy,
      accent: "text-[#DE1F26]",
      border: "border-[#DE1F26]/40",
      bg: "bg-red-50",
      gradient: "from-[#DE1F26] to-amber-500"
    }
  ];

  return (
    <section id="training" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: Creative Stepper Badge & Dynamic Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#008744]/15 to-[#DE1F26]/15 border border-[#008744]/30 text-[#08121a] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2.5"
          >
            <Workflow size={12} className="text-[#008744]" />
            <span>{isEn ? "THE 4-PHASE MASTERY FORMULA" : "আমাদের ৪-ধাপের প্রশিক্ষণ পদ্ধতি"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl font-black text-[#08121a] tracking-tight leading-tight"
          >
            {isEn ? (
              <>
                Our <span className="text-[#008744]">Training</span> <span className="text-[#DE1F26]">Methodology</span>
              </>
            ) : (
              <>
                আমাদের বিশেষ <span className="text-[#008744]">প্রশিক্ষণ</span> <span className="text-[#DE1F26]">পদ্ধতি</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed"
          >
            {isEn 
              ? "A structured, rigorous engineering pedagogical framework engineered to transform motivated learners into production-ready software engineers."
              : "শিক্ষার্থীদের আন্তর্জাতিক মানের সফটওয়্যার ইঞ্জিনিয়ার হিসেবে গড়ে তোলার সুসংগঠিত এবং কার্যকরী প্রশিক্ষণ পরিকাঠামো।"}
          </motion.p>
        </div>

        {/* 4-PHASE PROGRESSION GRID: Scale up on hover + Animated Serial Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          
          {/* Connecting Line behind items on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#008744] via-slate-300 to-[#DE1F26] -z-0 transform -translate-y-10 opacity-30" />

          {methodologySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 hover:scale-104 hover:-translate-y-1.5 transition-all duration-300 z-10 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Dual Border Indicator Lines on Hover */}
                {/* 1. Left Border: Bottom to Top increment (Slim 2px) */}
                <div 
                  className={`absolute left-0 bottom-0 top-0 w-[2px] bg-gradient-to-t ${item.gradient} scale-y-0 group-hover:scale-y-100 transition-transform duration-350 ease-out origin-bottom rounded-l-full z-20`}
                />
                {/* 2. Right Border: Top to Bottom increment (Ultra Slim & Smooth 1px) */}
                <div 
                  className={`absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b ${item.gradient} scale-y-0 group-hover:scale-y-100 transition-transform duration-[2000ms] ease-in-out origin-top rounded-r-full z-20 opacity-70`}
                />

                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Animated Step Serial Number */}
                    <div className="relative flex items-center gap-1.5">
                      <motion.span 
                        animate={{ 
                          y: [0, -3, 0],
                          opacity: [0.75, 1, 0.75]
                        }}
                        transition={{ 
                          duration: 3 + idx * 0.4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="inline-block text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-300 group-hover:text-[#008744] group-hover:scale-110 transition-all duration-300 select-none"
                      >
                        {item.step}
                      </motion.span>
                      <motion.span 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 2.5 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#008744] transition-colors"
                      />
                    </div>

                    {/* Icon Box with gentle rotation on hover */}
                    <div className={`w-9 h-9 rounded-lg ${item.bg} border ${item.border} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs`}>
                      <Icon size={18} className={item.accent} />
                    </div>
                  </div>

                  {/* Subtitle & Title */}
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 group-hover:text-slate-600 transition-colors">
                    {item.subtitle}
                  </p>
                  <h3 className="font-bold text-[#08121a] text-sm sm:text-base mb-1.5 leading-snug group-hover:text-[#008744] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-slate-700">
                  <CheckCircle2 size={13} className="text-[#008744] group-hover:scale-115 transition-transform" />
                  <span>{isEn ? "Outcome Verified" : "ফলাফল নিশ্চিত"}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
