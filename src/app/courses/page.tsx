"use client";

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Star, Clock, Users, BookOpen, 
  ArrowRight, MessageCircle, CheckCircle2,
  Code2, Cpu, Cloud, Smartphone, ShieldCheck, 
  Palette, Megaphone, Database, Award, Layers,
  Search, Filter, LayoutGrid, ListFilter,
  AlignJustify, X, Zap, Check, Bot, Globe2,
  TrendingUp, TrendingDown, Video, Server, Briefcase, GraduationCap,
  Calendar, DollarSign, Play, ChevronDown, ChevronUp, ArrowUpDown, ExternalLink
} from "lucide-react";
import { COMPANY_STATS } from "@/data/companyStats";
import { coursesData, getVideoMeta } from "@/data/coursesData";

function CoursesContent() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMode, setSelectedMode] = useState<"all" | "online" | "offline">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<any>(null);
  const [selectedVideoCourse, setSelectedVideoCourse] = useState<any>(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
    { id: "all", label: isEn ? "All Categories" : "সকল কোর্স", icon: Layers, iconColor: "text-[#008744]" },
    { id: "web", label: isEn ? "Programming" : "প্রোগ্রামিং", icon: Code2, iconColor: "text-[#008744]" },
    { id: "marketing", label: isEn ? "Digital Marketing & CPA" : "ডিজিটাল মার্কেটিং ও সিপিএ", icon: TrendingUp, iconColor: "text-[#DE1F26]" },
    { id: "creative", label: isEn ? "Creative, UI/UX & Motion" : "গ্রাফিক্স, ইউআই/ইউএক্স ও মোশন", icon: Palette, iconColor: "text-emerald-600" },
    { id: "software", label: isEn ? "App, .NET & SAP" : "অ্যাপ, ডটনেট ও এসএপি", icon: Smartphone, iconColor: "text-purple-600" },
    { id: "cloud", label: isEn ? "Networking & IT" : "নেটওয়ার্কিং ও আইটি", icon: Server, iconColor: "text-blue-600" },
    { id: "diploma", label: isEn ? "Diploma" : "ডিপ্লোমা", icon: GraduationCap, iconColor: "text-amber-500" },
  ];

  const iconMap: Record<string, any> = {
    diploma: GraduationCap,
    web: Code2,
    marketing: TrendingUp,
    creative: Palette,
    software: Smartphone,
    cloud: Server,
  };

  const allCourses = useMemo(() => {
    return coursesData.map((course) => {
      const catObj = categories.find((c) => c.id === course.category);
      const catLabel = catObj ? catObj.label : course.categoryLabel[isEn ? "en" : "bn"];

      return {
        id: course.id,
        slug: course.slug,
        category: course.category,
        categoryLabel: catLabel,
        catIcon: iconMap[course.category] || BookOpen,
        title: course.title[isEn ? "en" : "bn"],
        mode: course.mode[isEn ? "en" : "bn"],
        modeType: course.modeType,
        rating: course.rating,
        duration: course.duration[isEn ? "en" : "bn"],
        enrolled: course.enrolledCount,
        fee: course.fee,
        rawFee: course.rawFee,
        bannerTitle: course.title.en,
        bgGradient: "from-[#081b29] via-[#0d2a42] to-[#081b29]",
        illustration: course.category === "web" ? "💻" : course.category === "marketing" ? "📢" : course.category === "creative" ? "🎨" : course.category === "software" ? "📱" : "🌐",
        image: course.image,
        videoUrl: course.videoUrl,
        whatsappLink: course.whatsappLink || `https://wa.me/8801995852964?text=${encodeURIComponent(`আমি "${course.title.en}" কোর্সটি করতে চাই।`)}`,
        desc: course.overview[isEn ? "en" : "bn"]
      };
    });
  }, [isEn, categories]);

  // Handle URL query parameters from homepage navigation
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Filtering & Sorting
  const filteredCourses = useMemo(() => {
    let result = allCourses.filter((course) => {
      const matchCategory = activeCategory === "all" || activeCategory === "diploma" || course.category === activeCategory;
      const matchMode = selectedMode === "all" || course.modeType === selectedMode;
      const matchSearch = searchQuery.trim() === "" || 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchMode && matchSearch;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.rawFee - b.rawFee);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.rawFee - a.rawFee);
    }

    return result;
  }, [allCourses, activeCategory, selectedMode, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      {/* COURSES PAGE HERO SECTION */}
      <section className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 bg-gradient-to-b from-white via-slate-50/60 to-[#f8fafc] border-b border-slate-200/70 overflow-hidden select-none">
        {/* Ambient background glows & grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#08121a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#008744]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#DE1F26]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008744]/10 to-[#DE1F26]/10 border border-[#008744]/25 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#08121a] mb-4 shadow-2xs"
            >
              <Sparkles size={13} className="text-[#008744] animate-pulse" />
              <span>{isEn ? "INDUSTRY-ACCREDITED TECH PROGRAMS" : "আন্তর্জাতিক মানসম্পন্ন প্রফেশনাল কোর্সসমূহ"}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08121a] tracking-tight leading-[1.18] mb-4"
            >
              {isEn ? (
                <>
                  Master In-Demand <span className="text-[#008744]">Tech Skills</span> & Launch Your <span className="text-[#DE1F26]">Global Career</span>
                </>
              ) : (
                <>
                  ক্যারিয়ার শুরু করুন <span className="text-[#008744]">ইন-ডিমান্ড টেকনোলজিতে</span> — প্রফেশনাল <span className="text-[#DE1F26]">কোর্স প্রোগ্রাম</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8"
            >
              {isEn
                ? `Explore ${COMPANY_STATS.coursesCountFormatted} industry-aligned engineering bootcamps, hands-on live project tracks, and 1-on-1 mentorship designed to take you from fundamentals to enterprise production-ready.`
                : `${COMPANY_STATS.coursesCountBn} প্রফেশনাল লাইভ কোর্স, এন্টারপ্রাইজ প্রজেক্ট ও শীর্ষ ইঞ্জিনিয়ারদের মেন্টরশিপের মাধ্যমে আন্তর্জাতিক জব মার্কেট ও ফ্রিল্যান্সিংয়ের জন্য প্রস্তুত হোন।`}
            </motion.p>

            {/* Quick Filter Pill Tags (Popular Topics) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-6"
            >
              <span className="text-[11px] font-bold text-slate-500 mr-1 hidden sm:inline-block">
                {isEn ? "Popular Topics:" : "জনপ্রিয় টপিকস:"}
              </span>
              {[
                { label: isEn ? "All" : "সকল", cat: "all" },
                { label: isEn ? "AI & Machine Learning" : "এআই ও মেশিন লার্নিং", cat: "ai" },
                { label: isEn ? "Full-Stack Web" : "ফুল-স্ট্যাক ওয়েব", cat: "web" },
                { label: isEn ? "Cyber Security" : "সাইবার সিকিউরিটি", cat: "cyber" },
                { label: isEn ? "UI/UX Design" : "ইউআই/ইউএক্স ডিজাইন", cat: "uiux" },
                { label: isEn ? "DevOps & Cloud" : "ক্লাউড ডেভঅপ্স", cat: "cloud" },
              ].map((topic, tIdx) => (
                <button
                  key={tIdx}
                  onClick={() => {
                    setActiveCategory(topic.cat);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs border ${
                    activeCategory === topic.cat
                      ? "bg-[#08121a] text-white border-slate-800 shadow-xs scale-105"
                      : "bg-white hover:bg-slate-100/90 text-slate-700 border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </motion.div>

            {/* 4 Feature Badges / Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto pt-5 border-t border-slate-200/60"
            >
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl py-2.5 px-3 shadow-2xs">
                <BookOpen size={14} className="text-[#008744] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{isEn ? `${COMPANY_STATS.coursesCountFormatted} Live Tracks` : `${COMPANY_STATS.coursesCountBn} লাইভ ট্র্যাক`}</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl py-2.5 px-3 shadow-2xs">
                <Star size={14} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{isEn ? "4.9/5 Rating" : "৪.৯/৫ রেটিং"}</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl py-2.5 px-3 shadow-2xs">
                <TrendingUp size={14} className="text-[#DE1F26] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{isEn ? `${COMPANY_STATS.placementRateFormatted} Placement Rate` : `${COMPANY_STATS.placementRateBn} প্লেসমেন্ট রেট`}</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl py-2.5 px-3 shadow-2xs">
                <Award size={14} className="text-[#008744] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{isEn ? "ISO Verified" : "আইএসও ভেরিফায়েড"}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-grow py-8 sm:py-12 select-none">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* MAIN LAYOUT: LEFT SIDEBAR (SEARCH + CATEGORIES) & RIGHT CONTENT (CONTROLS + COURSE GRID) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT SIDEBAR: Search & Categories (Sticky on Desktop) */}
            <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-[74px] space-y-4 max-h-[calc(100vh-6.5rem)] overflow-y-auto overflow-x-hidden pr-0.5 z-20 shadow-[0_-24px_0_0_#f8fafc]">
              
              {/* Search Input Box */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-2.5 shadow-2xs focus-within:border-[#008744] focus-within:ring-2 focus-within:ring-[#008744]/15 transition-all">
                <div className="relative flex items-center">
                  <Search size={15} className="text-slate-400 ml-2.5 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isEn ? "Search courses..." : "কোর্স খুঁজুন..."}
                    className="w-full pl-2.5 pr-8 py-1 text-xs text-slate-800 placeholder-slate-400 outline-none bg-transparent font-medium"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories Checkbox Panel */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 font-extrabold text-slate-900 text-sm">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#008744] flex items-center justify-center">
                    <Filter size={13} />
                  </div>
                  <span>{isEn ? "Categories" : "ক্যাটাগরি"}</span>
                </div>

                <div className="space-y-1">
                  {categories.map((cat) => {
                    const isChecked = activeCategory === cat.id;
                    const IconComponent = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left cursor-pointer group ${
                          isChecked 
                            ? "bg-emerald-50/90 text-[#008744] font-bold border border-emerald-200 shadow-2xs" 
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {/* Custom Checkbox */}
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked 
                              ? "bg-[#008744] border-[#008744] text-white" 
                              : "border-slate-300 bg-white group-hover:border-slate-400"
                          }`}>
                            {isChecked && <Check size={11} className="stroke-[3]" />}
                          </div>

                          <span className="truncate">{cat.label}</span>
                        </div>

                        {/* Distinct Thematic Icon */}
                        <IconComponent size={13} className={`flex-shrink-0 ${isChecked ? "text-[#008744]" : cat.iconColor}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT AREA: TOP CONTROLS & COURSE CARDS GRID */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              
              {/* 1. Top Filter / Control Bar (Sticky on Scroll with Upward Gap Seal) */}
              <div className="sticky top-[58px] sm:top-[64px] lg:top-[66px] z-30 bg-[#f8fafc] pt-2 pb-2 shadow-[0_-24px_0_0_#f8fafc]">
                <div className="bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Left: Count & Mode Tabs */}
                  <div className="flex items-center flex-wrap gap-3 w-full sm:w-auto">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl">
                      <Sparkles size={13} className="text-[#DE1F26]" />
                      <span>
                        <strong className="text-[#008744] font-black">{filteredCourses.length}</strong> {isEn ? "courses found" : "টি কোর্স পাওয়া গেছে"}
                      </span>
                    </div>

                    {/* Mode Pills: All, Online, Offline (Brand Styled) */}
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                      {(["all", "online", "offline"] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setSelectedMode(mode)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                            selectedMode === mode
                              ? "bg-[#008744] text-white shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {mode === "all" ? (isEn ? "All" : "সকল") : mode === "online" ? (isEn ? "Online" : "অনলাইন") : (isEn ? "Offline" : "অফলাইন")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right: Sort By Dropdown & View Mode Toggle */}
                  <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                    {/* Custom Styled Sort Dropdown */}
                    <div className="relative" ref={sortRef}>
                      <button
                        type="button"
                        onClick={() => setIsSortOpen(!isSortOpen)}
                        className={`flex items-center gap-2 bg-white border text-xs font-semibold px-3.5 py-2 rounded-xl transition-all cursor-pointer select-none shadow-2xs ${
                          isSortOpen 
                            ? "border-[#008744] ring-2 ring-[#008744]/15 text-[#008744]" 
                            : "border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900"
                        }`}
                      >
                        <ArrowUpDown size={13} className={isSortOpen ? "text-[#008744]" : "text-slate-400"} />
                        <span className="font-bold">
                          {sortBy === "default" 
                            ? (isEn ? "Sort: Default" : "বাছাই: ডিফল্ট") 
                            : sortBy === "price-low" 
                              ? (isEn ? "Price: Low to High" : "মূল্য: কম-বেশি") 
                              : (isEn ? "Price: High to Low" : "মূল্য: বেশি-কম")}
                        </span>
                        <ChevronDown size={13} className={`text-slate-400 transition-transform duration-200 ${isSortOpen ? "rotate-180 text-[#008744]" : ""}`} />
                      </button>

                      {/* Floating Dropdown Menu */}
                      <AnimatePresence>
                        {isSortOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.96 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute right-0 top-full mt-1.5 w-60 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-slate-200/90 p-1.5 z-50 overflow-hidden"
                          >
                            <div className="px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1 flex items-center justify-between">
                              <span>{isEn ? "Sort Courses" : "কোর্স সাজান"}</span>
                              <Sparkles size={11} className="text-[#DE1F26]" />
                            </div>

                            <div className="space-y-0.5">
                              {[
                                {
                                  id: "default",
                                  label: isEn ? "Default Sorting" : "ডিফল্ট বাছাই",
                                  icon: ArrowUpDown,
                                  badge: isEn ? "Featured" : "ফিচার্ড",
                                  badgeColor: "bg-emerald-50 text-[#008744]",
                                },
                                {
                                  id: "price-low",
                                  label: isEn ? "Price: Low to High" : "মূল্য: কম থেকে বেশি",
                                  icon: TrendingDown,
                                  badge: isEn ? "Lowest" : "সর্বনিম্ন",
                                  badgeColor: "bg-blue-50 text-blue-600",
                                },
                                {
                                  id: "price-high",
                                  label: isEn ? "Price: High to Low" : "মূল্য: বেশি থেকে কম",
                                  icon: TrendingUp,
                                  badge: isEn ? "Premium" : "প্রিমিয়াম",
                                  badgeColor: "bg-amber-50 text-amber-600",
                                },
                              ].map((opt) => {
                                const Icon = opt.icon;
                                const isSelected = sortBy === opt.id;
                                return (
                                  <button
                                    key={opt.id}
                                    type="button"
                                    onClick={() => {
                                      setSortBy(opt.id);
                                      setIsSortOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-all cursor-pointer text-left group ${
                                      isSelected
                                        ? "bg-emerald-50 text-[#008744] font-bold shadow-2xs"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                                        isSelected ? "bg-[#008744] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                                      }`}>
                                        <Icon size={12} />
                                      </div>
                                      <span>{opt.label}</span>
                                    </div>

                                    {isSelected ? (
                                      <Check size={14} className="text-[#008744] stroke-[2.5]" />
                                    ) : (
                                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${opt.badgeColor}`}>
                                        {opt.badge}
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Grid / List icons */}
                    <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                          viewMode === "grid" ? "bg-[#008744] text-white shadow-2xs" : "text-slate-500 hover:text-slate-800"
                        }`}
                        title="Grid View"
                      >
                        <LayoutGrid size={14} />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                          viewMode === "list" ? "bg-[#008744] text-white shadow-2xs" : "text-slate-500 hover:text-slate-800"
                        }`}
                        title="List View"
                      >
                        <AlignJustify size={14} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* 2. Course Cards Container */}
              <div className="relative z-10">

                {filteredCourses.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center shadow-2xs">
                    <Search size={36} className="mx-auto text-slate-300 mb-3" />
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                      {isEn ? "No courses match your filter" : "কোনো কোর্স পাওয়া যায়নি"}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {isEn ? "Try changing your search term or category filter." : "অনুগ্রহ করে অন্য কোনো ক্যাটাগরি বা কি-ওয়ার্ড দিয়ে খুঁজুন।"}
                    </p>
                  </div>
                ) : viewMode === "grid" ? (
                  /* ========================================================================= */
                  /* 1. GRID VIEW: 3-COLUMN RICH VISUAL CARDS                                  */
                  /* ========================================================================= */
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                    {filteredCourses.map((course) => {
                      const CatIcon = course.catIcon;

                      return (
                        <motion.div
                          key={course.id}
                          id={`course-card-${course.id}`}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ y: -4 }}
                          className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-200 shadow-2xs hover:shadow-[0_10px_25px_rgba(0,135,68,0.06)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                        >
                          {/* TOP THUMBNAIL BANNER */}
                          <div 
                            onClick={() => setSelectedVideoCourse(course)}
                            className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer group/thumb select-none"
                            title={isEn ? "Click to watch video preview" : "ভিডিও সিলেবাস দেখতে ক্লিক করুন"}
                          >
                            {/* Clear Background Image with Smooth Scale-Up on hover */}
                            <img 
                              src={course.image} 
                              alt={course.title}
                              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/thumb:scale-108" 
                            />
                            
                            {/* Subtle dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/40 transition-colors duration-300" />

                            {/* Top Badges: Mode & Star Rating */}
                            <div className="absolute top-3 left-3 z-10 pointer-events-none">
                              <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md text-white ${
                                course.modeType === "offline" 
                                  ? "bg-[#008744]" 
                                  : "bg-[#DE1F26]"
                              }`}>
                                {course.mode}
                              </span>
                            </div>

                            <div className="absolute top-3 right-3 z-10 pointer-events-none">
                              <span className="bg-white/95 text-slate-900 text-[11px] font-extrabold px-2 py-1 rounded-md shadow-md flex items-center gap-1">
                                <Star size={11} className="fill-[#F59E0B] text-[#F59E0B]" />
                                <span>{course.rating}</span>
                              </span>
                            </div>

                            {/* CENTER VIDEO PLAY BUTTON (Hidden by default, appears on hover) */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                              <div className="w-12 h-12 rounded-full bg-white/90 group-hover/thumb:bg-[#008744] text-[#008744] group-hover/thumb:text-white backdrop-blur-md border border-white/50 shadow-xl opacity-0 group-hover/thumb:opacity-100 transform scale-75 group-hover/thumb:scale-100 transition-all duration-300 flex items-center justify-center pl-0.5">
                                <Play size={20} className="fill-current" />
                              </div>
                            </div>
                          </div>

                          {/* CARD BODY CONTENT */}
                          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                            <div>
                              {/* Category Tag */}
                              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#008744] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md mb-2">
                                <CatIcon size={12} className="text-[#008744]" />
                                <span>{course.categoryLabel}</span>
                              </div>

                              {/* Course Title */}
                              <h3 className="font-extrabold text-slate-900 text-sm sm:text-[14.5px] leading-snug line-clamp-2 mb-2.5 group-hover:text-[#008744] transition-colors min-h-[2.4rem]">
                                {course.title}
                              </h3>

                              {/* Metadata Row (Duration & Enrolled) */}
                              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-semibold">
                                <div className="flex items-center gap-1">
                                  <Calendar size={13} className="text-[#008744]" />
                                  <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users size={13} className="text-[#DE1F26]" />
                                  <span>{course.enrolled}</span>
                                </div>
                              </div>
                            </div>

                            {/* Price & Rating Row */}
                            <div>
                              <div className="pt-3 border-t border-slate-100 flex items-center justify-between mb-4">
                                <div>
                                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                                    {isEn ? "Course Fee" : "কোর্স ফি"}
                                  </span>
                                  <span className="text-lg sm:text-xl font-black text-[#008744]">
                                    {course.fee}
                                  </span>
                                </div>

                                {/* 5 Stars */}
                                <div className="flex items-center text-[#F59E0B]">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={13} className="fill-[#F59E0B]" />
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons Row */}
                              <div className="flex items-center gap-2">
                                <Link
                                  href={`/courses/${course.id}`}
                                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                                >
                                  <BookOpen size={13} />
                                  <span>{isEn ? "Details" : "বিস্তারিত"}</span>
                                </Link>

                                <a
                                  href={`https://wa.me/8801995852964?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-200 text-[#008744] hover:text-[#007038] text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                                >
                                  <MessageCircle size={13} className="text-[#008744]" />
                                  <span>{isEn ? "Enroll" : "ভর্তি হন"}</span>
                                </a>
                              </div>
                            </div>
                          </div>

                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  /* ========================================================================= */
                  /* 2. LIST/ROW VIEW: COMPACT SIMPLE EXPANDABLE ROWS WITH SMALL BUTTONS       */
                  /* ========================================================================= */
                  <div className="space-y-3">
                    {filteredCourses.map((course) => {
                      const CatIcon = course.catIcon;
                      const isExpanded = expandedRowId === course.id;

                      return (
                        <motion.div
                          key={course.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                            isExpanded 
                              ? "border-emerald-400 shadow-md ring-2 ring-emerald-500/10" 
                              : "border-slate-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-sm"
                          }`}
                        >
                          {/* COMPACT MAIN ROW BAR */}
                          <div 
                            onClick={() => setExpandedRowId(isExpanded ? null : course.id)}
                            className="p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 cursor-pointer select-none group"
                          >
                            {/* Left: Icon, Mode Badge & Course Title */}
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              {/* Category Icon Box */}
                              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/70 text-[#008744] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                <CatIcon size={18} />
                              </div>

                              {/* Title & Metadata */}
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  {/* Mode Badge */}
                                  <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                                    course.modeType === "offline" 
                                      ? "bg-[#008744] text-white" 
                                      : "bg-[#DE1F26] text-white"
                                  }`}>
                                    {course.mode}
                                  </span>
                                  {/* Category Label */}
                                  <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
                                    {course.categoryLabel}
                                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-extrabold text-slate-900 text-sm sm:text-[15px] truncate group-hover:text-[#008744] transition-colors">
                                  {course.title}
                                </h3>
                              </div>
                            </div>

                            {/* Center-Right: Meta Chips & Price */}
                            <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                              {/* Meta Details */}
                              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                                <div className="flex items-center gap-1">
                                  <Calendar size={12} className="text-[#008744]" />
                                  <span className="hidden sm:inline">{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                                  <span>{course.rating}</span>
                                </div>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <span className="text-base sm:text-lg font-black text-[#008744] block leading-none">
                                  {course.fee}
                                </span>
                              </div>

                              {/* Small Compact Action Buttons */}
                              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                                {/* Small Video Preview Button */}
                                <button
                                  type="button"
                                  onClick={() => setSelectedVideoCourse(course)}
                                  className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#008744] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                                  title={isEn ? "Watch preview video" : "ভিডিও প্রিভিউ"}
                                >
                                  <Play size={12} className="fill-current text-[#DE1F26]" />
                                  <span className="hidden lg:inline">{isEn ? "Preview" : "ভিডিও"}</span>
                                </button>

                                {/* Small Enroll Button */}
                                <a
                                  href={`https://wa.me/8801995852964?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-white hover:bg-emerald-50 border border-emerald-300 text-[#008744] hover:text-[#007038] text-xs font-bold flex items-center gap-1 transition-colors"
                                >
                                  <MessageCircle size={12} />
                                  <span>{isEn ? "Enroll" : "ভর্তি"}</span>
                                </a>

                                {/* Small Expand / Collapse Toggle Button */}
                                <button
                                  type="button"
                                  onClick={() => setExpandedRowId(isExpanded ? null : course.id)}
                                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                                    isExpanded 
                                      ? "bg-slate-800 text-white" 
                                      : "bg-[#008744] hover:bg-[#007038] text-white shadow-2xs"
                                  }`}
                                >
                                  <span>{isExpanded ? (isEn ? "Close" : "বন্ধ") : (isEn ? "Details" : "বিস্তারিত")}</span>
                                  {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* EXPANDABLE ACCORDION DRAWER (OPENS WHEN CLICKED) */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="border-t border-slate-100 bg-slate-50/60 p-4 sm:p-6"
                              >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                                  
                                  {/* Left: Thumbnail & Video Trigger */}
                                  <div 
                                    onClick={() => setSelectedVideoCourse(course)}
                                    className={`lg:col-span-4 relative h-32 sm:h-36 rounded-xl bg-gradient-to-br ${course.bgGradient} overflow-hidden p-3.5 flex flex-col justify-between text-white cursor-pointer group/vid shadow-xs`}
                                  >
                                    <img 
                                      src={course.image} 
                                      alt={course.title}
                                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover/vid:opacity-45 group-hover/vid:scale-105 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40" />

                                    <div className="relative z-10 flex justify-between items-center text-xs font-bold">
                                      <span className="bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-xs">
                                        {course.mode}
                                      </span>
                                      <span>★ {course.rating}</span>
                                    </div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                      <div className="w-10 h-10 rounded-full bg-[#008744] text-white flex items-center justify-center shadow-lg group-hover/vid:scale-110 transition-transform pl-0.5">
                                        <Play size={15} className="fill-white" />
                                      </div>
                                    </div>

                                    <div className="relative z-10 text-xs font-bold truncate">
                                      {course.bannerTitle}
                                    </div>
                                  </div>

                                  {/* Right: Description & Comprehensive Details */}
                                  <div className="lg:col-span-8 space-y-3">
                                    <div>
                                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
                                        {course.title}
                                      </h4>
                                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                                        {course.desc}
                                      </p>
                                    </div>

                                    {/* Key Highlights Tags */}
                                    <div className="flex items-center gap-2 flex-wrap text-[11px] font-bold text-slate-700">
                                      <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1 text-[#008744]">
                                        <Calendar size={12} /> {course.duration}
                                      </span>
                                      <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1 text-[#DE1F26]">
                                        <Users size={12} /> {course.enrolled}
                                      </span>
                                      <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1 text-blue-600">
                                        <Award size={12} /> {isEn ? "ISO Verified Certificate" : "আইএসও ভেরিফাইড সার্টিফিকেট"}
                                      </span>
                                      <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1 text-purple-600">
                                        <CheckCircle2 size={12} /> {isEn ? "1-on-1 Mentorship" : "১-অন-১ মেন্টরশিপ সাপোর্ট"}
                                      </span>
                                    </div>

                                    {/* Expanded Action Buttons */}
                                    <div className="pt-2 flex items-center gap-2.5 flex-wrap">
                                      <button
                                        type="button"
                                        onClick={() => setSelectedCourseForModal(course)}
                                        className="px-4 py-2 rounded-xl bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                                      >
                                        <BookOpen size={13} />
                                        <span>{isEn ? "View Complete Curriculum & Syllabus" : "সম্পূর্ণ কারিকুলাম ও সিলেবাস দেখুন"}</span>
                                      </button>

                                      <a
                                        href={`https://wa.me/8801995852964?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-300 text-[#008744] hover:text-[#007038] text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                                      >
                                        <MessageCircle size={13} />
                                        <span>{isEn ? "Enroll via WhatsApp" : "হোয়াটসঅ্যাপে সরাসরি ভর্তি হন"}</span>
                                      </a>
                                    </div>
                                  </div>

                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

            </div>

          </div>

        </div>

      </div>

        {/* DETAILS MODAL */}
        <AnimatePresence>
          {selectedCourseForModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCourseForModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-left"
              >
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-2">
                  <BookOpen size={12} />
                  <span>{selectedCourseForModal.categoryLabel}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {selectedCourseForModal.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {selectedCourseForModal.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">{isEn ? "Duration" : "সময়সীমা"}</span>
                    <span className="font-bold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                      <Calendar size={13} className="text-[#008744]" />
                      {selectedCourseForModal.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{isEn ? "Delivery Mode" : "মাধ্যম"}</span>
                    <span className="font-bold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                      <span className={`w-2 h-2 rounded-full ${selectedCourseForModal.modeType === "offline" ? "bg-[#008744]" : "bg-[#DE1F26]"}`} />
                      {selectedCourseForModal.mode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">{isEn ? "Course Fee" : "কোর্স ফি"}</span>
                    <span className="text-xl sm:text-2xl font-black text-[#008744]">{selectedCourseForModal.fee}</span>
                  </div>

                  <a
                    href={`https://wa.me/8801995852964?text=Hello%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(selectedCourseForModal.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2"
                  >
                    <MessageCircle size={15} />
                    <span>{isEn ? "Enroll via WhatsApp" : "হোয়াটসঅ্যাপে ভর্তি হন"}</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* VIDEO PREVIEW MODAL */}
        <AnimatePresence>
          {selectedVideoCourse && (() => {
            const videoMeta = getVideoMeta(selectedVideoCourse.videoUrl);
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
                onClick={() => setSelectedVideoCourse(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900 text-white">
                    <div className="flex items-center gap-2.5">
                      <Play size={15} className="text-[#008744] fill-[#008744]" />
                      <span className="font-bold text-xs sm:text-sm truncate max-w-[280px] sm:max-w-md">
                        {selectedVideoCourse.title}
                      </span>
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
                        className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                        aria-label="Close modal"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                    <iframe
                      src={videoMeta.embedUrl}
                      title={selectedVideoCourse.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  {/* Modal Footer */}
                  <div className="p-4 sm:p-5 bg-slate-950 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">{isEn ? "Course Tuition" : "কোর্স ফি"}</span>
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
                      <a
                        href={`https://wa.me/8801995852964?text=Hello%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(selectedVideoCourse.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-900/30"
                      >
                        <MessageCircle size={14} />
                        <span>{isEn ? "Enroll Now" : "ভর্তি নিশ্চিত করুন"}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <CoursesContent />
    </Suspense>
  );
}
