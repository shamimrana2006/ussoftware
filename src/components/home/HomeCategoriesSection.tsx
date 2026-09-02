"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Code2, Cpu, Cloud, Shield, Smartphone, Palette, 
  ArrowUpRight, Database, Terminal, Layers, GraduationCap, Megaphone
} from "lucide-react";

export default function HomeCategoriesSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const categories = [
    {
      id: "web",
      title: isEn ? "Programming & Web" : "প্রোগ্রামিং ও ওয়েব",
      desc: isEn 
        ? "React 19, Next.js 15, Node.js, Express, MongoDB, Python & Clean Architecture."
        : "রিঅ্যাক্ট ১৯, নেক্সট.জেএস ১৫, নোড.জেএস, মঙ্গোডিবি, পাইথন ও আধুনিক সফটওয়্যার আর্কিটেকচার।",
      icon: Code2,
      count: isEn ? "4 Programs" : "৪টি প্রোগ্রাম",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      iconColor: "text-[#008744]",
      iconBg: "bg-emerald-50 border-emerald-200/70",
      accent: "#008744",
      skills: ["React & Next.js", "Node & Express", "MongoDB", "Shopify Liquid"]
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
      title: isEn ? "App & Enterprise Systems" : "অ্যাপ ও এন্টারপ্রাইজ সফটওয়্যার",
      desc: isEn 
        ? "Cross-Platform Flutter 3.x, C# ASP.NET Core 8 Web API, SQL Server & SAP ERP Systems."
        : "ক্রস-প্ল্যাটফর্ম ফ্লাটার অ্যাপ, সি-শার্প এএসপি.নেট কোর ও এসএপি (SAP) এন্টারপ্রাইজ সিস্টেম।",
      icon: Smartphone,
      count: isEn ? "3 Programs" : "৩টি প্রোগ্রাম",
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-200/70",
      accent: "#2563eb",
      skills: ["Flutter & Dart", "ASP.NET Core", "SQL Server", "SAP ERP"]
    },
    {
      id: "cloud",
      title: isEn ? "Networking & Infrastructure" : "নেটওয়ার্কিং ও ইনফ্রাস্ট্রাকচার",
      desc: isEn 
        ? "Computer Networking, Cisco Routing & Switching, MikroTik RouterOS, VPNs & Security."
        : "কম্পিউটার নেটওয়ার্কিং, সিসকো সুইচিং ও রাউটিং, মাইক্রোটিক ব্যান্ডউইথ ও নেটওয়ার্ক সিকিউরিটি।",
      icon: Cloud,
      count: isEn ? "1 Program" : "১টি প্রোগ্রাম",
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-200/70",
      accent: "#2563eb",
      skills: ["Cisco CCNA", "MikroTik", "TCP/IP Subnetting", "VPN Security"]
    },
    {
      id: "diploma",
      title: isEn ? "Professional Diploma Programs" : "প্রফেশনাল ডিপ্লোমা প্রোগ্রাম",
      desc: isEn 
        ? "Comprehensive career tracks covering Web, Marketing, Design, App Development & Networking."
        : "ওয়েব, মার্কেটিং, ডিজাইন, অ্যাপ ডেভেলপমেন্ট ও নেটওয়ার্কিং সহ সকল ডোমেনের পূর্ণাঙ্গ কোর্স।",
      icon: GraduationCap,
      count: isEn ? "All Programs" : "সকল কোর্স",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      iconColor: "text-[#008744]",
      iconBg: "bg-emerald-50 border-emerald-200/70",
      accent: "#008744",
      skills: ["All Disciplines", "Job Placement", "Live Projects", "Certificate"]
    }
  ];

  return (
    <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#08121a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: Centered Modern Pill Header with Dual Tone Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2.5 shadow-xs"
          >
            <Layers size={11} className="text-[#008744]" />
            <span>{isEn ? "DISCOVER YOUR PATH" : "আপনার পছন্দের ডোমেন বেছে নিন"}</span>
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
                Explore <span className="text-[#008744]">Course</span> <span className="text-[#DE1F26]">Categories</span>
              </>
            ) : (
              <>
                কোর্স <span className="text-[#008744]">ক্যাটাগরি</span> <span className="text-[#DE1F26]">এক্সপ্লোর করুন</span>
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
