"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Star, Clock, Users, BookOpen,
  ArrowRight, MessageCircle, CheckCircle2,
  Code2, Cpu, Cloud, Smartphone, Shield,
  Palette, Megaphone, Database, Award, Layers, GraduationCap,
  Play, X, Zap, ExternalLink, Globe2
} from "lucide-react";

import { coursesData, getVideoMeta } from "@/data/coursesData";

export default function HomeCoursesSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideoCourse, setSelectedVideoCourse] = useState<any>(null);

  const categories = [
    { id: "all", label: isEn ? "All Flagship Courses" : "জনপ্রিয় কোর্সসমূহ", icon: Layers },
    { id: "web", label: isEn ? "Programming & Web" : "প্রোগ্রামিং ও ওয়েব", icon: Code2 },
    { id: "marketing", label: isEn ? "Digital Marketing & CPA" : "ডিজিটাল মার্কেটিং ও সিপিএ", icon: Megaphone },
    { id: "creative", label: isEn ? "Design & UI/UX" : "গ্রাফিক্স ও ইউআই/ইউএক্স", icon: Palette },
    { id: "software", label: isEn ? "App & Software" : "অ্যাপ ও সফটওয়্যার", icon: Smartphone },
    { id: "cloud", label: isEn ? "Networking & IT" : "নেটওয়ার্কিং ও আইটি", icon: Cloud },
    { id: "diploma", label: isEn ? "Diploma" : "ডিপ্লোমা", icon: GraduationCap },
  ];

  const allCourses = useMemo(() => {
    return coursesData.map((course) => ({
      id: course.id,
      category: course.category,
      categoryName: course.categoryLabel[isEn ? "en" : "bn"],
      title: course.title[isEn ? "en" : "bn"],
      mode: course.mode[isEn ? "en" : "bn"],
      modeType: course.modeType,
      rating: course.rating,
      duration: course.duration[isEn ? "en" : "bn"],
      enrolled: course.enrolledCount,
      fee: course.fee,
      originalFee: course.originalFee || "20,000৳",
      tags: [course.categoryLabel[isEn ? "en" : "bn"], course.mode[isEn ? "en" : "bn"]],
      thumbnail: course.image,
      videoUrl: course.videoUrl,
      accentColor: course.category === "marketing" ? "#DE1F26" : "#008744"
    }));
  }, [isEn]);

  const FEATURED_COURSE_IDS = ["1", "14", "3", "6", "8", "13"];

  const filteredCourses = useMemo(() => {
    if (activeCategory === "all") {
      return FEATURED_COURSE_IDS
        .map(id => allCourses.find(c => c.id === id))
        .filter(Boolean) as typeof allCourses;
    }
    if (activeCategory === "diploma") {
      return allCourses;
    }
    const list = allCourses.filter(c => c.category === activeCategory);
    return list.slice(0, 6);
  }, [allCourses, activeCategory]);

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

        {/* 4. WORLD-CLASS PREMIUM COURSE CARDS (3-Column Layout for 6 Featured Courses) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 max-w-7xl mx-auto"
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
                    className="relative h-40 sm:h-44 w-full overflow-hidden cursor-pointer group/thumb select-none"
                  >
                    {/* Thumbnail Image with Scale-Up on hover */}
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover/thumb:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Subtle dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/40 transition-colors duration-300" />

                    {/* Floating Mode Badge & Rating on Thumbnail */}
                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider shadow-md text-white ${
                        course.modeType === "offline" ? "bg-[#008744]" : "bg-[#DE1F26]"
                      }`}>
                        {course.mode}
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                      <div className="flex items-center gap-0.5 bg-white/95 text-slate-900 px-1.5 py-0.5 rounded text-[10px] font-bold shadow-md">
                        <Star size={10} className="fill-amber-400 text-amber-400" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Play Button in Center (Hidden by default, appears on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/90 group-hover/thumb:bg-[#008744] text-[#008744] group-hover/thumb:text-white backdrop-blur-md border border-white/50 shadow-xl opacity-0 group-hover/thumb:opacity-100 transform scale-75 group-hover/thumb:scale-100 transition-all duration-300 flex items-center justify-center pl-0.5">
                        <Play size={16} className="fill-current" />
                      </div>
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
        {selectedVideoCourse && (() => {
          const videoMeta = getVideoMeta(selectedVideoCourse.videoUrl);
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#DE1F26] animate-ping" />
                    <h4 className="text-sm font-bold truncate max-w-[280px] sm:max-w-md">
                      {selectedVideoCourse.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    {videoMeta.directUrl && (
                      <a
                        href={videoMeta.directUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-semibold transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>{videoMeta.isFacebook ? (isEn ? "Open in Facebook" : "ফেসবুকে দেখুন") : (isEn ? "Watch on YouTube" : "ভিডিও লিংক")}</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedVideoCourse(null)}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Close video modal"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Video Player */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  <iframe
                    src={videoMeta.embedUrl}
                    title={selectedVideoCourse.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Modal Footer with Direct Enroll Action */}
                <div className="px-6 py-4 bg-slate-950 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{isEn ? "Course Tuition:" : "কোর্স ফি:"}</span>
                    <span className="text-lg font-black text-emerald-400">{selectedVideoCourse.fee}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {videoMeta.directUrl && (
                      <a
                        href={videoMeta.directUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5"
                      >
                        <ExternalLink size={14} />
                        <span>{videoMeta.isFacebook ? (isEn ? "Watch on Facebook" : "ফেসবুক ভিডিও") : (isEn ? "Direct Link" : "ভিডিও লিংক")}</span>
                      </a>
                    )}
                    <Link
                      href={`/courses/${selectedVideoCourse.id}`}
                      onClick={() => setSelectedVideoCourse(null)}
                      className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-colors"
                    >
                      <span>{isEn ? "Enroll in this Program" : "এই প্রোগ্রামে ভর্তি হন"}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
