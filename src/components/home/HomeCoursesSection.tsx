"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Star, Clock, Users, BookOpen,
  ArrowRight, MessageCircle, CheckCircle2,
  Code2, Cpu, Cloud, Smartphone, Shield,
  Palette, Megaphone, Database, Award, Layers,
  Play, X, Zap
} from "lucide-react";

export default function HomeCoursesSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideoCourse, setSelectedVideoCourse] = useState<any>(null);

  const categories = [
    { id: "all", label: isEn ? "All Tracks" : "সকল কোর্স", icon: Layers },
    { id: "programming", label: isEn ? "Full-Stack Web" : "ফুল-স্ট্যাক ওয়েব", icon: Code2 },
    { id: "ai", label: isEn ? "AI & Agents" : "এআই ও এজেন্টস", icon: Cpu },
    { id: "devops", label: isEn ? "Cloud & DevOps" : "ক্লাউড ও ডেভঅপ্স", icon: Cloud },
    { id: "mobile", label: isEn ? "Mobile Apps" : "মোবাইল অ্যাপস", icon: Smartphone },
    { id: "cyber", label: isEn ? "Cyber Security" : "সাইবার সিকিউরিটি", icon: Shield },
    { id: "design", label: isEn ? "UI/UX Design" : "ইউআই/ইউএক্স", icon: Palette },
    { id: "marketing", label: isEn ? "Digital Marketing" : "ডিজিটাল মার্কেটিং", icon: Megaphone },
    { id: "database", label: isEn ? "Database" : "ডাটাবেস", icon: Database },
  ];

  const allCourses = [
    {
      id: "fs-nextjs",
      category: "programming",
      categoryName: isEn ? "Full-Stack Engineering" : "ফুল-স্ট্যাক ওয়েব",
      title: isEn ? "Enterprise Full-Stack Web Development with Next.js 15" : "এন্টারপ্রাইজ ফুল-স্ট্যাক ওয়েব ইঞ্জিনিয়ারিং (নেক্সট.জেএস ১৫)",
      mode: isEn ? "Hybrid / Offline" : "হাইব্রিড / অফলাইন",
      modeType: "offline",
      rating: 5.0,
      duration: isEn ? "6 Months" : "৬ মাস",
      enrolled: isEn ? "85+ Enrolled" : "৮৫+ শিক্ষার্থী",
      fee: "25,000৳",
      originalFee: "35,000৳",
      tags: ["Next.js 15", "TypeScript", "PostgreSQL"],
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
      accentColor: "#008744",
    },
    {
      id: "ai-llm",
      category: "ai",
      categoryName: isEn ? "Generative AI & LLMs" : "জেনারেটিভ এআই ও এজেন্টস",
      title: isEn ? "Generative AI, Multi-Agent Systems & RAG Pipelines" : "জেনারেটিভ এআই, অটোনোমাস এজেন্টস ও র‍্যাগ পাইপলাইন",
      mode: isEn ? "Online Live" : "অনলাইন লাইভ",
      modeType: "online",
      rating: 5.0,
      duration: isEn ? "5 Months" : "৫ মাস",
      enrolled: isEn ? "70+ Enrolled" : "৭০+ শিক্ষার্থী",
      fee: "28,000৳",
      originalFee: "40,000৳",
      tags: ["LangChain", "Vector DBs", "PyTorch"],
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
      accentColor: "#DE1F26",
    },
    {
      id: "devops-aws",
      category: "devops",
      categoryName: isEn ? "Cloud & DevOps" : "ক্লাউড ও ডেভঅপ্স",
      title: isEn ? "AWS Cloud Infrastructure, Kubernetes & GitOps CI/CD" : "এডব্লিউএস ক্লাউড আর্কিটেকচার, কুবারনেটিস ও সিআই/সিডি",
      mode: isEn ? "Hybrid / Offline" : "হাইব্রিড / অফলাইন",
      modeType: "offline",
      rating: 5.0,
      duration: isEn ? "4.5 Months" : "৪.৫ মাস",
      enrolled: isEn ? "60+ Enrolled" : "৬০+ শিক্ষার্থী",
      fee: "26,000৳",
      originalFee: "36,000৳",
      tags: ["AWS", "Kubernetes", "Docker"],
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
      accentColor: "#008744",
    },
    {
      id: "mobile-flutter",
      category: "mobile",
      categoryName: isEn ? "Mobile Apps" : "মোবাইল অ্যাপস",
      title: isEn ? "Cross-Platform Mobile App Engineering with Flutter 3.x" : "ক্রস-প্ল্যাটফর্ম ফ্লাটার অ্যাপ ইঞ্জিনিয়ারিং (আইওএস ও অ্যান্ড্রয়েড)",
      mode: isEn ? "Online Live" : "অনলাইন লাইভ",
      modeType: "online",
      rating: 5.0,
      duration: isEn ? "5 Months" : "৫ মাস",
      enrolled: isEn ? "90+ Enrolled" : "৯০+ শিক্ষার্থী",
      fee: "22,000৳",
      originalFee: "30,000৳",
      tags: ["Flutter", "Dart 3", "Riverpod"],
      thumbnail: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/1gDhl4leEzA?autoplay=1",
      accentColor: "#DE1F26",
    },
    {
      id: "cyber-sec",
      category: "cyber",
      categoryName: isEn ? "Cybersecurity" : "সাইবার সিকিউরিটি",
      title: isEn ? "Ethical Hacking, Penetration Testing & SOC Defense" : "এথিক্যাল হ্যাকিং, পেনেট্রেশন টেস্টিং ও এসওসি ডিফেন্স",
      mode: isEn ? "Hybrid / Offline" : "হাইব্রিড / অফলাইন",
      modeType: "offline",
      rating: 5.0,
      duration: isEn ? "4 Months" : "৪ মাস",
      enrolled: isEn ? "45+ Enrolled" : "৪৫+ শিক্ষার্থী",
      fee: "24,000৳",
      originalFee: "34,000৳",
      tags: ["Kali Linux", "OWASP", "SOC"],
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA?autoplay=1",
      accentColor: "#008744",
    },
    {
      id: "digital-mkt",
      category: "marketing",
      categoryName: isEn ? "Digital Growth" : "ডিজিটাল মার্কেটিং",
      title: isEn ? "Performance Digital Marketing, SEO Growth & Funnels" : "পারফরম্যান্স ডিজিটাল মার্কেটিং, এসইও ও গ্রোথ ফানেল",
      mode: isEn ? "Hybrid / Offline" : "হাইব্রিড / অফলাইন",
      modeType: "offline",
      rating: 5.0,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "120+ Enrolled" : "১২০+ শিক্ষার্থী",
      fee: "15,000৳",
      originalFee: "22,000৳",
      tags: ["Technical SEO", "Meta Ads", "Analytics"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
      accentColor: "#008744",
    },
    {
      id: "uiux-design",
      category: "design",
      categoryName: isEn ? "Product Design" : "প্রোডাক্ট ডিজাইন",
      title: isEn ? "Enterprise UI/UX Design & Design Systems in Figma" : "প্রোডাক্ট ডিজাইন (ইউআই/ইউএক্স) ও ফিগমা ডিজাইন সিস্টেমস",
      mode: isEn ? "Online Live" : "অনলাইন লাইভ",
      modeType: "online",
      rating: 5.0,
      duration: isEn ? "3.5 Months" : "৩.৫ মাস",
      enrolled: isEn ? "65+ Enrolled" : "৬৫+ শিক্ষার্থী",
      fee: "18,000৳",
      originalFee: "25,000৳",
      tags: ["Figma", "Design System", "UX Research"],
      thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1",
      accentColor: "#DE1F26",
    },
    {
      id: "db-postgresql",
      category: "database",
      categoryName: isEn ? "Database Systems" : "ডাটাবেস আর্কিটেকচার",
      title: isEn ? "High-Scale PostgreSQL, Redis Caching & Query Optimization" : "হাই-স্কেল পোস্টগ্রেসকিউএল ও রেডিস ক্যাশিং আর্কিটেকচার",
      mode: isEn ? "Online Live" : "অনলাইন লাইভ",
      modeType: "online",
      rating: 5.0,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "40+ Enrolled" : "৪০+ শিক্ষার্থী",
      fee: "16,000৳",
      originalFee: "24,000৳",
      tags: ["PostgreSQL", "Redis", "Query Tuning"],
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/qw--VYLpxG4?autoplay=1",
      accentColor: "#008744",
    }
  ];

  const filteredCourses = useMemo(() => {
    if (activeCategory === "all") return allCourses;
    return allCourses.filter(c => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#008744]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#DE1F26]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* 1. TOP ELEGANT HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-emerald-50/80 border border-[#008744]/20 text-[#008744] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2.5 shadow-2xs"
          >
            <Sparkles size={11} className="text-[#008744]" />
            <span>{isEn ? "FLAGSHIP TECH CURRICULUM" : "শীর্ষস্থানীয় প্রফেশনাল প্রোগ্রামসমূহ"}</span>
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
                Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">Featured Courses</span>
              </>
            ) : (
              <>
                আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">জনপ্রিয় কোর্সসমূহ</span>
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
              ? "Architected by senior engineers from global tech companies. Hands-on production codebases, 1-on-1 code reviews, and direct hiring placement."
              : "আন্তর্জাতিক সফটওয়্যার ইন্ডাস্ট্রির লিড ইঞ্জিনিয়ারদের সরাসরি তত্ত্বাবধানে প্রস্তুত করা বাস্তবমুখী ও ক্যারিয়ার-উপযোগী সিলেবাস।"}
          </motion.p>
        </div>

        {/* 3. SLEEK CATEGORY TABS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 max-w-5xl mx-auto"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-[#08121a] text-white shadow-sm scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-[#08121a]"
                  }`}
              >
                <Icon size={12} className={isActive ? "text-[#008744]" : "text-slate-400"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 4. WORLD-CLASS PREMIUM COURSE CARDS (4-Column Layout) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-slate-200/90 shadow-[0_3px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,135,68,0.1)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden group relative"
              >
                {/* ANIMATED ROUNDED CORNER GRADIENT BORDER */}
                <div
                  className="absolute -inset-[1.5px] rounded-[14px] pointer-events-none z-20 transition-all duration-500 opacity-0 group-hover:opacity-100 p-[2px]"
                  style={{
                    background: course.accentColor === "#DE1F26"
                      ? "linear-gradient(135deg, transparent 12%, #DE1F26 35%, #f43f5e 55%, #f97316 75%, transparent 95%)"
                      : "linear-gradient(135deg, transparent 12%, #008744 35%, #10B981 55%, #06b6d4 75%, transparent 95%)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                  }}
                />

                <div>
                  {/* Cinematic Video Thumbnail Area (Compact Height) */}
                  <div
                    onClick={() => setSelectedVideoCourse(course)}
                    className="relative h-32 sm:h-36 w-full overflow-hidden cursor-pointer group/thumb"
                  >
                    {/* Thumbnail Image with Scale-Up on hover */}
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08121a]/85 via-[#08121a]/20 to-black/25" />

                    {/* Floating Mode Badge & Rating on Thumbnail */}
                    <div className="absolute top-2 inset-x-2 flex items-center justify-between z-10 pointer-events-none">
                      <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        {course.mode}
                      </span>

                      <div className="flex items-center gap-0.5 bg-black/60 backdrop-blur-md border border-white/20 px-1.5 py-0.5 rounded-full text-[10px] font-bold text-amber-400 shadow-xs">
                        <Star size={10} className="fill-amber-400" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Glowing Glass Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-md border border-white/40 group-hover/thumb:bg-[#008744] text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover/thumb:scale-115 pl-0.5">
                        <Play size={14} className="fill-current" />
                      </div>
                    </div>

                    {/* Duration chip on thumbnail bottom */}
                    <div className="absolute bottom-2 left-2 z-10 pointer-events-none flex items-center gap-1 text-white/90 text-[10px] font-medium bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                      <Clock size={10} className="text-emerald-400" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Card Body Area (Compact) */}
                  <div className="p-3.5 sm:p-4">
                    {/* Domain Category line */}
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#008744] mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
                      <span>{course.categoryName}</span>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-bold text-[#08121a] text-xs sm:text-[13.5px] leading-snug group-hover:text-[#008744] transition-colors mb-2.5 line-clamp-2 min-h-[2.4rem]">
                      {course.title}
                    </h3>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Divider & Pricing / Action Row */}
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm sm:text-base font-black text-[#08121a]">{course.fee}</span>
                          <span className="text-[10px] text-slate-400 line-through">{course.originalFee}</span>
                        </div>
                      </div>

                      <Link
                        href={`/courses/${course.id}`}
                        className="inline-flex items-center gap-1 bg-[#08121a] hover:bg-[#008744] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold shadow-2xs transition-colors group/btn"
                      >
                        <span>{isEn ? "Details" : "বিস্তারিত"}</span>
                        <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 5. BOTTOM "VIEW ALL COURSES ->" BUTTON */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#08121a] hover:bg-[#008744] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all group"
          >
            <span>{isEn ? "Explore All Courses & Syllabi" : "সকল কোর্স ও পূর্ণাঙ্গ সিলেবাস দেখুন"}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 text-[#008744] group-hover:text-white transition-all" />
          </Link>
        </div>

      </div>

      {/* 6. INTERACTIVE VIDEO PREVIEW MODAL */}
      <AnimatePresence>
        {selectedVideoCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DE1F26] animate-ping" />
                  <h4 className="text-sm font-bold text-white truncate max-w-[280px] sm:max-w-md">
                    {selectedVideoCourse.title}
                  </h4>
                </div>

                <button
                  onClick={() => setSelectedVideoCourse(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close video modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* 16:9 Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={selectedVideoCourse.videoUrl}
                  title={selectedVideoCourse.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer with Direct Enroll Action */}
              <div className="px-6 py-4 bg-slate-900 flex items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">{isEn ? "Course Tuition:" : "কোর্স ফি:"}</span>
                  <span className="text-lg font-black text-emerald-400">{selectedVideoCourse.fee}</span>
                </div>

                <Link
                  href={`/courses?course=${selectedVideoCourse.id}`}
                  onClick={() => setSelectedVideoCourse(null)}
                  className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-colors"
                >
                  <span>{isEn ? "Enroll in this Program" : "এই প্রোগ্রামে ভর্তি হন"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
