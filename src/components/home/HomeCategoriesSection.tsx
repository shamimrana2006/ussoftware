"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Code2, Cpu, Cloud, Shield, Smartphone, Palette, 
  ArrowUpRight, Database, Terminal, Layers, GraduationCap, Megaphone, Briefcase
} from "lucide-react";

export default function HomeCategoriesSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const categories = [
    {
      id: "web",
      title: isEn ? "Programming & Web" : "প্রোগ্রামিং ও ওয়েব",
      desc: isEn 
        ? "React 19, MERN Stack, Python Django, WordPress, PHP Laravel & Shopify."
        : "রিঅ্যাক্ট ১৯, মার্ন স্ট্যাক, পাইথন জ্যাঙ্গো, ওয়ার্ডপ্রেস, পিএইচপি লারাভেল ও শপিফাই।",
      icon: Code2,
      count: isEn ? "6 Programs" : "৬টি প্রোগ্রাম",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      iconColor: "text-[#008744]",
      iconBg: "bg-emerald-50 border-emerald-200/70",
      accent: "#008744",
      skills: ["React & Next.js", "MERN Stack", "Python Django", "PHP & Laravel"]
    },
    {
      id: "marketing",
      title: isEn ? "Digital Marketing & CPA" : "ডিজিটাল মার্কেটিং ও সিপিএ",
      desc: isEn 
        ? "Performance SEO, Meta Advantage+ AI Ads, Google PMax, CPA Funnels & Upwork Freelancing."
        : "এসইও, মেটা এআই অ্যাডস, গুগল পারফরম্যান্স ম্যাক্স, সিপিএ ট্রাফিক ও ফ্রিল্যান্সিং ক্যারিয়ার।",
      icon: Megaphone,
      count: isEn ? "3 Programs" : "৩টি প্রোগ্রাম",
      gradient: "from-red-500/10 via-rose-500/5 to-transparent",
      iconColor: "text-[#DE1F26]",
      iconBg: "bg-red-50 border-red-200/70",
      accent: "#DE1F26",
      skills: ["Technical SEO", "Meta AI Ads", "CPA Networks", "Freelancing"]
    },
    {
      id: "creative",
      title: isEn ? "Design, Motion & UX/UI" : "ডিজাইন, মোশন ও ইউআই/ইউএক্স",
      desc: isEn 
        ? "Photoshop & Illustrator with AI, Premiere Pro, After Effects VFX & Figma Design Systems."
        : "ফটোশপ, ইলাস্ট্রেটর, এআই জেনারেটিভ আর্ট, প্রিমিয়ার প্রো, আফটার ইফেক্টস ও ফিগমা ইউআই/ইউএক্স।",
      icon: Palette,
      count: isEn ? "3 Programs" : "৩টি প্রোগ্রাম",
      gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border-purple-200/70",
      accent: "#9333ea",
      skills: ["Adobe Suite", "Generative AI", "Motion Graphics", "Figma UX/UI"]
    },
    {
      id: "software",
      title: isEn ? "App & Software Development" : "অ্যাপ ও সফটওয়্যার ডেভেলপমেন্ট",
      desc: isEn 
        ? "Cross-Platform Flutter 3.x, Native Android Studio, Java/Kotlin & Firebase Integration."
        : "ক্রস-প্ল্যাটফর্ম ফ্লাটার অ্যাপ, নেটিভ অ্যান্ড্রয়েড স্টুডিও, জাভা/কটলিন ও ফায়ারবেস।",
      icon: Smartphone,
      count: isEn ? "2 Programs" : "২টি প্রোগ্রাম",
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-200/70",
      accent: "#2563eb",
      skills: ["Flutter & Dart", "Android Studio", "Java/Kotlin", "Firebase"]
    },
    {
      id: "cloud",
      title: isEn ? "Networking & Infrastructure" : "নেটওয়ার্কিং ও ইনফ্রাস্ট্রাকচার",
      desc: isEn 
        ? "Cisco CCNA (200-301), CompTIA A+ IT Support, MikroTik RouterOS, Linux Administration & Windows Server Active Directory."
        : "সিসকো সিসিএনএ, কম্পটিয়া এ+ আইটি সাপোর্ট, মাইক্রোটিক রাউটারওএস, লিনাক্স এবং উইন্ডোজ সার্ভার অ্যাডমিনিস্ট্রেশন।",
      icon: Cloud,
      count: isEn ? "5 Programs" : "৫টি প্রোগ্রাম",
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-200/70",
      accent: "#2563eb",
      skills: ["Cisco CCNA", "CompTIA A+", "MikroTik MTCNA", "Linux (RHCSA)", "Windows Server AD"]
    },
    {
      id: "security",
      title: isEn ? "Security" : "সিকিউরিটি",
      desc: isEn 
        ? "Ethical Hacking & Pentesting, Cyber Security SOC Analyst & Cloud Computing."
        : "ইথিক্যাল হ্যাকিং, সাইবার সিকিউরিটি এসওসি অ্যানালিস্ট ও ক্লাউড কম্পিউটিং।",
      icon: Shield,
      count: isEn ? "3 Programs" : "৩টি প্রোগ্রাম",
      gradient: "from-rose-500/10 via-red-500/5 to-transparent",
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50 border-rose-200/70",
      accent: "#e11d48",
      skills: ["Ethical Hacking", "Cyber Security", "SOC Analyst", "Cloud Computing"]
    },
    {
      id: "diploma",
      title: isEn ? "Professional Diploma Programs" : "প্রফেশনাল ডিপ্লোমা প্রোগ্রাম",
      desc: isEn 
        ? "6-Month Career Diplomas with Dual Certification & 100% Job Placement Support."
        : "৬ মাস মেয়াদী ইন্ডাস্ট্রি-স্ট্যান্ডার্ড ডিপ্লোমা ও শতভাগ জব প্লেসমেন্ট সাপোর্ট।",
      icon: GraduationCap,
      count: isEn ? "6 Programs" : "৬টি ডিপ্লোমা প্রোগ্রাম",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      iconColor: "text-[#008744]",
      iconBg: "bg-emerald-50 border-emerald-200/70",
      accent: "#008744",
      skills: ["Full Stack Web", "AI & Data Science", "Cyber Security", "Digital Marketing", "Graphic & UI/UX", "Network & Cloud"]
    },
    {
      id: "others",
      title: isEn ? "Others" : "অন্যান্য",
      desc: isEn 
        ? "PMP Project Management Professional & Software Testing SQA Automation."
        : "পিএমপি প্রজেক্ট ম্যানেজমেন্ট ও সফটওয়্যার টেস্টিং এবং এসকিউএ অটোমেশন।",
      icon: Briefcase,
      count: isEn ? "2 Programs" : "২টি প্রোগ্রাম",
      gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-200/70",
      accent: "#d97706",
      skills: ["PMP Certification", "Agile & Scrum", "Software Testing", "SQA Automation"]
    }
  ];

  return (
    <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#08121a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: Centered Modern Pill Header with Dual Tone Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3.5 shadow-xs"
          >
            <Layers size={13} className="text-[#008744]" />
            <span>{isEn ? "DISCOVER YOUR PATH" : "আপনার পছন্দের ডোমেন বেছে নিন"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl font-black text-[#08121a] tracking-tight leading-tight"
          >
            {isEn ? (
              <>
                Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">Course Categories</span>
              </>
            ) : (
              <>
                কোর্স <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">ক্যাটাগরি এক্সপ্লোর করুন</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            {isEn 
              ? "Comprehensive tech disciplines tailored for market demand, freelance mastery, and international placement."
              : "আন্তর্জাতিক জব মার্কেট ও ফ্রিল্যান্সিংয়ের চাহিদা অনুযায়ী সাজানো ইন-ডিমান্ড টেকনোলজি ট্র্যাক।"}
          </motion.p>
        </div>

        {/* CATEGORIES GRID: 3-column responsive layout (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative bg-slate-50/70 hover:bg-white rounded-xl p-5 sm:p-5.5 border border-slate-200/80 hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:scale-104 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* ANIMATED ROUNDED CONTINUOUS LEFT & BOTTOM GRADIENT BORDER WITH CORNER CURVE */}
                <div 
                  className="absolute -inset-[1.5px] rounded-[14px] pointer-events-none z-20 transition-all duration-500 opacity-0 group-hover:opacity-100 p-[2px]"
                  style={{
                    background: `linear-gradient(135deg, transparent 12%, ${cat.accent} 35%, #10B981 55%, #06b6d4 75%, transparent 95%)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                  }}
                />
                <div>
                  {/* Top row: Icon & Count Badge */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon Container with Animated Rising Liquid Bubbles */}
                    <div className={`relative w-11 h-11 rounded-xl ${cat.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-2xs`}>
                      {/* Bubble 1 */}
                      <motion.span
                        animate={{
                          y: [12, -20],
                          x: [0, 2.5, -2, 0],
                          opacity: [0, 0.75, 0],
                          scale: [0.4, 1, 0.5]
                        }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                        className="absolute left-2 bottom-0 w-1.5 h-1.5 rounded-full pointer-events-none"
                        style={{ backgroundColor: cat.accent }}
                      />
                      {/* Bubble 2 */}
                      <motion.span
                        animate={{
                          y: [14, -22],
                          x: [0, -3, 2, 0],
                          opacity: [0, 0.8, 0],
                          scale: [0.3, 1.2, 0.4]
                        }}
                        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                        className="absolute right-2.5 bottom-0 w-2 h-2 rounded-full pointer-events-none"
                        style={{ backgroundColor: cat.accent }}
                      />
                      {/* Bubble 3 */}
                      <motion.span
                        animate={{
                          y: [10, -18],
                          x: [0, 3, -1.5, 0],
                          opacity: [0, 0.65, 0],
                          scale: [0.5, 0.9, 0.3]
                        }}
                        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
                        className="absolute left-4 bottom-0.5 w-1 h-1 rounded-full pointer-events-none"
                        style={{ backgroundColor: cat.accent }}
                      />

                      <Icon size={20} className={`${cat.iconColor} relative z-10 group-hover:rotate-6 transition-transform duration-300`} />
                    </div>
                    <span className="text-[11px] font-bold bg-white text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                      {cat.count}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-extrabold text-[#08121a] text-base sm:text-lg mb-1.5 group-hover:text-[#008744] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                {/* Skills tags & Link */}
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-medium bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200/80">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Animated Slow Circular Border Fill Button (Z-Index Top & Always Visible) */}
                  <div className="relative w-9 h-9 flex items-center justify-center ml-2 flex-shrink-0">
                    {/* SVG Circular Border with Z-INDEX TOP, Sleek Thin Stroke, and Radiant Gradient */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-20" viewBox="0 0 36 36">
                      <defs>
                        <linearGradient id={`btn-grad-${cat.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#008744" />
                          <stop offset="50%" stopColor={cat.accent || "#10B981"} />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      {/* Background track circle */}
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                      {/* Animated progressive fill stroke (Ultra-Thin & Radiant Gradient) */}
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke={`url(#btn-grad-${cat.id})`}
                        strokeWidth="1.2"
                        strokeDasharray="100.5"
                        strokeDashoffset="100.5"
                        strokeLinecap="round"
                        className="transition-all duration-700 ease-out group-hover:[stroke-dashoffset:0]"
                      />
                    </svg>

                    {/* Button Link */}
                    <Link 
                      href={`/courses?category=${cat.id}`}
                      className="w-6.5 h-6.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-slate-200/90 group-hover:text-slate-900 flex items-center justify-center transition-all duration-300 z-10 shadow-2xs group-hover:scale-110"
                      aria-label={`Explore ${cat.title}`}
                    >
                      <ArrowUpRight 
                        size={13} 
                        className="transition-transform duration-300 ease-out group-hover:rotate-90" 
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
