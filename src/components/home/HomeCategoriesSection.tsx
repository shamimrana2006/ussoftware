"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Code2, Cpu, Cloud, Shield, Smartphone, Palette, 
  ArrowUpRight, Database, Terminal, Layers
} from "lucide-react";

export default function HomeCategoriesSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const categories = [
    {
      id: "web",
      title: isEn ? "Full-Stack Web Engineering" : "ফুল-স্ট্যাক ওয়েব ইঞ্জিনিয়ারিং",
      desc: isEn 
        ? "React 19, Next.js 15, Node.js, TypeScript, PostgreSQL & High-scale Microservices."
        : "রিঅ্যাক্ট ১৯, নেক্সট.জেএস ১৫, টাইপস্ক্রিপ্ট, পোস্টগ্রেসকিউএল ও মাইক্রোসার্ভিসেস আর্কিটেকচার।",
      icon: Code2,
      count: isEn ? "4 Programs" : "৪টি প্রোগ্রাম",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      iconColor: "text-[#008744]",
      iconBg: "bg-emerald-50 border-emerald-200/70",
      accent: "#008744",
      skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      id: "ai",
      title: isEn ? "AI & Machine Learning" : "এআই ও মেশিন লার্নিং",
      desc: isEn 
        ? "Generative AI, LLMs, RAG Pipelines, Autonomous Multi-Agent Frameworks & PyTorch."
        : "জেনারেটিভ এআই, লার্জ ল্যাঙ্গুয়েজ মডেলস, র‍্যাগ ও অটোনোমাস মাল্টি-এজেন্ট সিস্টেমস।",
      icon: Cpu,
      count: isEn ? "3 Programs" : "৩টি প্রোগ্রাম",
      gradient: "from-red-500/10 via-rose-500/5 to-transparent",
      iconColor: "text-[#DE1F26]",
      iconBg: "bg-red-50 border-red-200/70",
      accent: "#DE1F26",
      skills: ["LangChain", "Vector DBs", "RAG", "PyTorch"]
    },
    {
      id: "cloud",
      title: isEn ? "DevOps & Cloud Architecture" : "ডেভঅপ্স ও ক্লাউড আর্কিটেকচার",
      desc: isEn 
        ? "AWS Infrastructure, Kubernetes Clusters, Docker, Terraform IaC & GitOps CI/CD."
        : "এডব্লিউএস ক্লাউড ইনফ্রাস্ট্রাকচার, কুবারনেটিস, ডকার ও অটোমেটেড সিআই/সিডি।",
      icon: Cloud,
      count: isEn ? "3 Programs" : "৩টি প্রোগ্রাম",
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-200/70",
      accent: "#2563eb",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform"]
    },
    {
      id: "mobile",
      title: isEn ? "Mobile App Engineering" : "মোবাইল অ্যাপ ইঞ্জিনিয়ারিং",
      desc: isEn 
        ? "Cross-Platform Flutter 3.x, Dart, Clean Architecture, Riverpod & Offline SQLite."
        : "ফ্লাটার ও ডার্ট দিয়ে আইওএস এবং অ্যান্ড্রয়েড উভয় প্ল্যাটফর্মের জন্য প্রোডাকশন অ্যাপ।",
      icon: Smartphone,
      count: isEn ? "2 Programs" : "২টি প্রোগ্রাম",
      gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border-purple-200/70",
      accent: "#9333ea",
      skills: ["Flutter", "Dart", "Clean Arch", "Riverpod"]
    },
    {
      id: "cyber",
      title: isEn ? "Cyber Security & Ethical Hacking" : "সাইবার সিকিউরিটি ও এথিক্যাল হ্যাকিং",
      desc: isEn 
        ? "Network Penetration Testing, SOC Defense, Web App Vulnerabilities & Kali Linux."
        : "নেটওয়ার্ক পেনেট্রেশন টেস্টিং, এসওসি ডিফেন্স ও ওয়েব অ্যাপ্লিকেশন সিকিউরিটি।",
      icon: Shield,
      count: isEn ? "2 Programs" : "২টি প্রোগ্রাম",
      gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-200/70",
      accent: "#d97706",
      skills: ["Ethical Hacking", "SOC", "Kali Linux", "OWASP"]
    },
    {
      id: "uiux",
      title: isEn ? "Product Design (UI/UX)" : "প্রোডাক্ট ডিজাইন (ইউআই/ইউএক্স)",
      desc: isEn 
        ? "Design Systems in Figma, User Research, Prototyping, Usability Testing & Micro-Interactions."
        : "ফিগমায় আধুনিক ডিজাইন সিস্টেম, ইউজার রিসার্চ, প্রোটোটাইপিং ও ইউজেবিলিটি টেস্টিং।",
      icon: Palette,
      count: isEn ? "2 Programs" : "২টি প্রোগ্রাম",
      gradient: "from-emerald-500/10 via-green-500/5 to-transparent",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-200/70",
      accent: "#059669",
      skills: ["Figma", "Design Systems", "Prototyping", "UX Research"]
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
                className="group relative bg-slate-50/70 hover:bg-white rounded-xl p-5 sm:p-5.5 border border-slate-200/80 hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:scale-104 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
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

                  {/* Animated Slow Circular Border Fill Button */}
                  <div className="relative w-8 h-8 flex items-center justify-center ml-2 flex-shrink-0">
                    {/* SVG Circular Border that slowly fills up around the button on hover */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
                      {/* Background track circle */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="1.8"
                      />
                      {/* Animated progressive fill stroke */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        stroke={cat.accent || "#008744"}
                        strokeWidth="2"
                        strokeDasharray="94.2"
                        strokeDashoffset="94.2"
                        strokeLinecap="round"
                        className="transition-all duration-800 ease-out group-hover:[stroke-dashoffset:0]"
                      />
                    </svg>

                    <Link 
                      href={`/courses?category=${cat.id}`}
                      className="w-6.5 h-6.5 rounded-full bg-slate-100 group-hover:bg-[#008744] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-400 z-10 shadow-2xs group-hover:scale-105"
                      aria-label={`Explore ${cat.title}`}
                    >
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
