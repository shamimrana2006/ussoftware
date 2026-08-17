"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Zap, Trophy, Users, Award, 
  Briefcase, CheckCircle2, ArrowRight, Star, HeartHandshake, Headphones
} from "lucide-react";

export default function HomeBenefitsSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const benefits = [
    {
      icon: Briefcase,
      title: isEn ? "100% Production-Grade Projects" : "১০০% প্রোডাকশন-গ্রেড লাইভ প্রজেক্ট",
      desc: isEn 
        ? "Work on distributed SaaS platforms, scalable microservices, and real customer-facing codebases, not toy dummy tutorials."
        : "কোনো ডামি টিউটোরিয়াল নয়—সরাসরি রিয়েল ক্লায়েন্ট সিস্টেম ও বড় স্কেলের মাইক্রোসার্ভিসেস প্রজেক্টে কাজ করার অভিজ্ঞতা।",
      accent: "border-[#008744]",
      iconBg: "bg-emerald-50 text-[#008744]",
    },
    {
      icon: Users,
      title: isEn ? "1-on-1 Senior Tech Mentorship" : "সিনিয়র ইঞ্জিনিয়ারদের ১-অন-১ মেন্টরশিপ",
      desc: isEn 
        ? "Weekly code reviews, 1-on-1 architecture consultations, and career guidance directly from lead engineers at top tech companies."
        : "টপ গ্লোবাল টেক কোম্পানিতে কর্মরত লিড ইঞ্জিনিয়ারদের কাছ থেকে সাপ্তাহিক কোড রিভিউ ও ক্যারিয়ার কাউন্সেলিং।",
      accent: "border-[#DE1F26]",
      iconBg: "bg-red-50 text-[#DE1F26]",
    },
    {
      icon: Award,
      title: isEn ? "Globally Recognized Certification" : "আন্তর্জাতিক মানসম্পন্ন সার্টিফিকেট",
      desc: isEn 
        ? "ISO-standard verified credentials with unique online verification IDs and LinkedIn portfolio showcase integration."
        : "অনলাইনে ভেরিফিকেশনযোগ্য কিউআর কোডসহ আইএসও স্ট্যান্ডার্ড পেশাদার সার্টিফিকেট যা সিভিতে বাড়তি গুরুত্ব যোগ করে।",
      accent: "border-[#008744]",
      iconBg: "bg-emerald-50 text-[#008744]",
    },
    {
      icon: HeartHandshake,
      title: isEn ? "Dedicated Placement Network" : "১২০+ টেক পার্টনার প্লেসমেন্ট নেটওয়ার্ক",
      desc: isEn 
        ? "Direct interview access with 120+ tech partner companies, resume screening, mock technical interviews, and salary negotiation prep."
        : "মক টেকনিক্যাল ইন্টারভিউ, সিভি অপ্টিমাইজেশন ও শীর্ষস্থানীয় সফটওয়্যার কোম্পানিতে সরাসরি ইন্টারভিউয়ের সুযোগ।",
      accent: "border-[#DE1F26]",
      iconBg: "bg-red-50 text-[#DE1F26]",
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Asymmetrical Layout: Left Feature Narrative & Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Section Title & Visual Story (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* SECTION HEADER: Creative Tag with Shield */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 bg-[#008744]/10 text-[#008744] border border-[#008744]/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2.5"
              >
                <ShieldCheck size={13} />
                <span>{isEn ? "THE US SOFTWARE ADVANTAGE" : "আমাদের বিশেষত্ব ও সুবিধা"}</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-2xl sm:text-3xl font-black text-[#08121a] tracking-tight leading-tight mb-3"
              >
                {isEn ? (
                  <>
                    Why <span className="text-[#008744]">Choose</span> <span className="text-[#DE1F26]">Us</span>
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
                className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5"
              >
                {isEn 
                  ? "We don't teach passive theory. We immerse you in actual software engineering lifecycles with enterprise standards, code reviews, and career placement."
                  : "আমরা শুধু বইয়ের থিওরি পড়াই না। আন্তর্জাতিক সফটওয়্যার ইন্ডাস্ট্রির বাস্তব কাজের পরিবেশ, কোড রিভিউ এবং প্রজেক্ট পরিচালনার মাধ্যমে আপনাকে চাকরির জন্য ১০০% প্রস্তুত করি।"}
              </motion.p>
            </div>

            {/* Trust Metric Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#008744] to-emerald-400 text-white flex items-center justify-center font-black text-base shadow-sm">
                  92%
                </div>
                <div>
                  <p className="font-extrabold text-[#08121a] text-xs">{isEn ? "Hiring Success Rate" : "প্লেসমেন্ট সাফল্যের হার"}</p>
                  <p className="text-[11px] text-slate-500">{isEn ? "Within 6 months of graduation" : "কোর্স সম্পন্ন করার ৬ মাসের মধ্যে"}</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#DE1F26] hover:underline"
              >
                <span>{isEn ? "Learn Story" : "আমাদের গল্প"}</span>
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 4 Feature Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-300 border-l-4 ${benefit.accent} flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-9 h-9 rounded-lg ${benefit.iconBg} flex items-center justify-center mb-3`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-[#08121a] text-sm sm:text-base mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 size={12} className="text-[#008744]" />
                    <span>{isEn ? "Industry Standard" : "ইন্ডাস্ট্রি ভেরিফাইড"}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
