"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getCourseById, getVideoMeta, CourseDetail } from "@/data/coursesData";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Users,
  Globe2,
  CheckCircle2,
  Play,
  ArrowRight,
  BookOpen,
  LayoutGrid,
  UserCheck,
  Zap,
  ShieldCheck,
  Clock,
  Video,
  Award,
  ChevronDown,
  MessageCircle,
  Sparkles,
  FileCheck,
  Check,
  ExternalLink,
  X
} from "lucide-react";

export default function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { language } = useLanguage();
  const isEn = language === "en";

  const course: CourseDetail = getCourseById(id);
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "instructor">("overview");
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEnrollSuccess, setIsEnrollSuccess] = useState(false);

  const toggleModule = (modNum: number) => {
    setExpandedModule(expandedModule === modNum ? null : modNum);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans text-slate-800">
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-0 pb-20">
        
        {/* TOP HERO HEADER WITH GRID PATTERN */}
        <div className="relative bg-gradient-to-b from-[#e8f7f0]/60 via-[#f2faf6]/40 to-slate-50/50 border-b border-emerald-100/60 pb-10 pt-5 sm:pt-6">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,135,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,135,68,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6 font-medium">
              <Link href="/" className="hover:text-[#008744] transition-colors">
                {isEn ? "Home" : "হোম"}
              </Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-[#008744] transition-colors">
                {isEn ? "Courses" : "কোর্সসমূহ"}
              </Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold truncate max-w-[200px]">
                {course.title[isEn ? "en" : "bn"]}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* TOP HEADER LEFT DETAILS */}
              <div className="lg:col-span-8 space-y-5">
                
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="bg-[#008744] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-xs">
                    {course.badge[isEn ? "en" : "bn"]}
                  </span>
                  <span className="bg-white/90 text-slate-700 border border-slate-200 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-2xs">
                    {course.mode[isEn ? "en" : "bn"]}
                  </span>
                </div>

                {/* Main Course Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-slate-900 tracking-tight leading-[1.18]">
                  {course.title[isEn ? "en" : "bn"]}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {course.overview[isEn ? "en" : "bn"]}
                </p>

                {/* Meta Cards Row (Ratings, Enrolled, Languages) */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  
                  {/* Rating Badge */}
                  <div className="bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl flex items-center space-x-1.5 text-xs font-bold text-amber-800 shadow-2xs">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400" />
                      ))}
                    </div>
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal">({course.ratingsCount} {isEn ? "ratings" : "রেটিং"})</span>
                  </div>

                  {/* Enrolled Badge */}
                  <div className="bg-emerald-50 border border-emerald-200/80 px-3.5 py-2 rounded-xl flex items-center space-x-2 text-xs font-bold text-[#008744] shadow-2xs">
                    <Users size={15} />
                    <span>{course.enrolledCount} {isEn ? "students enrolled" : "শিক্ষার্থী এনরোল করেছেন"}</span>
                  </div>

                  {/* Language Badge */}
                  <div className="bg-purple-50 border border-purple-200/80 px-3.5 py-2 rounded-xl flex items-center space-x-2 text-xs font-bold text-purple-700 shadow-2xs">
                    <Globe2 size={15} />
                    <span>{course.languages[isEn ? "en" : "bn"]}</span>
                  </div>
                </div>

                {/* Instructor Capsule */}
                <div className="pt-2">
                  <div className="inline-flex items-center space-x-2.5 bg-white border border-slate-200/90 rounded-full px-4 py-1.5 shadow-2xs">
                    <span className="text-xs text-slate-500 font-medium">
                      {isEn ? "Instructed by" : "ইনস্ট্রাক্টর:"}
                    </span>
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      {course.instructor.name}
                      {course.instructor.verified && (
                        <CheckCircle2 size={14} className="text-[#008744] fill-emerald-100" />
                      )}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* MAIN 2-COLUMN SECTION: CONTENT TABS + STICKY SIDEBAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: TABS & DETAILS (8 COLS ON LG) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* TABS NAVIGATION BAR */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-1.5 flex items-center space-x-1 shadow-2xs">
                
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "overview"
                      ? "bg-[#008744] text-white shadow-md shadow-emerald-700/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <LayoutGrid size={16} />
                  <span>{isEn ? "Course Overview" : "কোর্স ওভারভিউ"}</span>
                </button>

                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "curriculum"
                      ? "bg-[#008744] text-white shadow-md shadow-emerald-700/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <BookOpen size={16} />
                  <span>{isEn ? "Curriculum" : "কারিকুলাম"}</span>
                </button>

                <button
                  onClick={() => setActiveTab("instructor")}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "instructor"
                      ? "bg-[#008744] text-white shadow-md shadow-emerald-700/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <UserCheck size={16} />
                  <span>{isEn ? "Instructor" : "ইনস্ট্রাক্টর"}</span>
                </button>

              </div>

              {/* TAB CONTENT 1: COURSE OVERVIEW */}
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* Section: Course Details */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-6 bg-[#008744] rounded-full"></div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {isEn ? "Course Details" : "কোর্স ডিটেইলস"}
                      </h2>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {course.fullDescription[isEn ? "en" : "bn"]}
                    </p>
                  </div>

                  {/* Section: Core Value Proposition */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-6 bg-[#DE1F26] rounded-full"></div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {isEn ? "Core Value Proposition" : "কোরের বিশেষ বৈশিষ্ট্যসমূহ"}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.coreValues.map((item) => (
                        <div
                          key={item.id}
                          className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-slate-200/70 hover:border-emerald-300 transition-all space-y-2 group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#008744]/10 text-[#008744] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CheckCircle2 size={20} />
                          </div>
                          <h3 className="font-bold text-slate-900 text-base">
                            {item.title[isEn ? "en" : "bn"]}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.desc[isEn ? "en" : "bn"]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section: Learning Outcomes */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-6 bg-[#008744] rounded-full"></div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {isEn ? "What You Will Learn" : "আপনি যা যা শিখবেন"}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.learningOutcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                          <Check className="text-[#008744] w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">
                            {outcome[isEn ? "en" : "bn"]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB CONTENT 2: CURRICULUM */}
              {activeTab === "curriculum" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {isEn ? "Course Modules & Schedule" : "কোর্স কারিকুলাম ও মডিউলসমূহ"}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {course.curriculum.length} {isEn ? "Comprehensive Modules" : "টি বিস্তৃত মডিউল"} • {course.classesCount[isEn ? "en" : "bn"]}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {course.curriculum.map((mod) => {
                      const isExpanded = expandedModule === mod.moduleNumber;
                      return (
                        <div
                          key={mod.moduleNumber}
                          className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                        >
                          <button
                            onClick={() => toggleModule(mod.moduleNumber)}
                            className="w-full flex items-center justify-between p-4 sm:p-5 bg-slate-50/70 hover:bg-slate-100/70 text-left transition-colors cursor-pointer"
                          >
                            <div className="flex items-center space-x-3 pr-4">
                              <span className="w-8 h-8 rounded-lg bg-[#008744]/10 text-[#008744] text-xs font-black flex items-center justify-center flex-shrink-0">
                                #{mod.moduleNumber}
                              </span>
                              <div>
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                                  {mod.title[isEn ? "en" : "bn"]}
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  {mod.duration[isEn ? "en" : "bn"]} • {mod.topics.length} {isEn ? "Lessons" : "টি লেসন"}
                                </p>
                              </div>
                            </div>
                            <ChevronDown
                              size={18}
                              className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                                isExpanded ? "rotate-180 text-[#008744]" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-white border-t border-slate-100 p-4 sm:p-5 space-y-2.5"
                              >
                                {mod.topics.map((topic, tIdx) => (
                                  <div key={tIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 py-1">
                                    <div className="w-2 h-2 rounded-full bg-[#008744] mt-2 flex-shrink-0"></div>
                                    <span className="font-medium">{topic[isEn ? "en" : "bn"]}</span>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* TAB CONTENT 3: INSTRUCTOR */}
              {activeTab === "instructor" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-emerald-200 shadow-md flex-shrink-0"
                    />

                    <div className="space-y-3 text-center sm:text-left flex-1">
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                            {course.instructor.name}
                          </h2>
                          {course.instructor.verified && (
                            <CheckCircle2 size={18} className="text-[#008744] fill-emerald-100" />
                          )}
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-[#008744] mt-0.5">
                          {course.instructor.designation[isEn ? "en" : "bn"]}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {course.instructor.bio[isEn ? "en" : "bn"]}
                      </p>

                      <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                        <Award size={14} className="text-[#008744]" />
                        <span>{course.instructor.experience}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STUDENT REVIEWS SECTION */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">
                    {isEn ? "Student Reviews & Ratings" : "শিক্ষার্থীদের মতামত ও রিভিউ"}
                  </h2>
                  <span className="text-xs font-bold text-[#008744] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    ★ {course.rating}.0 / 5.0
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <img src={rev.avatar} alt={rev.name} className="w-9 h-9 rounded-full object-cover" />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{rev.name}</h4>
                            <p className="text-[10px] text-slate-500">{rev.role[isEn ? "en" : "bn"]}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} size={11} className="fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic">
                        "{rev.comment[isEn ? "en" : "bn"]}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: STICKY SIDEBAR CARD (4 COLS ON LG) */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                
                {/* Media Preview Thumbnail */}
                <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden group">
                  <img
                    src={course.image}
                    alt={course.title[isEn ? "en" : "bn"]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="w-14 h-14 rounded-full bg-white/90 text-[#008744] flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white transition-all cursor-pointer"
                    >
                      <Play size={24} className="ml-1 fill-[#008744]" />
                    </button>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {isEn ? "Preview Course" : "কোর্স প্রিভিউ"}
                  </span>
                </div>

                {/* Price & CTA Section */}
                <div className="p-6 space-y-6">
                  
                  {/* Price Row */}
                  <div className="flex items-baseline space-x-3">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      {course.fee}
                    </span>
                    {course.originalFee && (
                      <span className="text-sm font-semibold text-slate-400 line-through">
                        {course.originalFee}
                      </span>
                    )}
                  </div>

                  {/* Main CTA Button - Direct WhatsApp Enrollment */}
                  <a
                    href={course.whatsappLink || `https://wa.me/8801995852964?text=${encodeURIComponent(isEn ? `Hello, I want to enroll in "${course.title.en}" course.` : `হ্যালো, আমি "${course.title.bn}" কোর্সে ভর্তি হতে চাই।`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#008744] via-emerald-600 to-[#056839] hover:from-[#007038] hover:to-[#04522d] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 transition-all flex items-center justify-center space-x-2.5 cursor-pointer group"
                  >
                    <MessageCircle size={20} className="text-white fill-white/20 group-hover:scale-110 transition-transform" />
                    <span>{isEn ? "Enroll via WhatsApp" : "এই কোর্সে ভর্তি হন (WhatsApp)"}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-[11px] text-center text-slate-500 font-medium">
                    {isEn ? "⚡ Instant 1-on-1 counselor admission assistance" : "⚡ সরাসরি হোয়াটসঅ্যাপে কাউন্সেলরের সাথে কথা বলে ভর্তি নিশ্চিত করুন"}
                  </p>

                  {/* Included Items Checklist */}
                  <div className="border-t border-slate-100 pt-5 space-y-3.5">
                    <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">
                      {isEn ? "What is Included:" : "কোর্সের সাথে যা যা পাবেন:"}
                    </h3>

                    <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-700">
                      {course.includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle2 size={16} className="text-[#008744] flex-shrink-0" />
                          <span>{item[isEn ? "en" : "bn"]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </main>

      {/* VIDEO PREVIEW MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (() => {
          const videoMeta = getVideoMeta(course.videoUrl);
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-5 py-4 bg-slate-900 border-b border-slate-800 text-white">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DE1F26] animate-pulse"></span>
                    <h3 className="text-sm sm:text-base font-bold truncate max-w-[280px] sm:max-w-md">
                      {course.title[isEn ? "en" : "bn"]}
                    </h3>
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
                      onClick={() => setIsVideoModalOpen(false)}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Video Player Container */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  <iframe
                    src={videoMeta.embedUrl}
                    title={course.title.en}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-slate-950 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">
                        {isEn ? "Course Tuition:" : "কোর্স ফি:"}
                      </span>
                      <span className="text-lg font-black text-emerald-400">
                        {course.fee}
                      </span>
                    </div>
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
                      href={`https://wa.me/8801995852964?text=Hello%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title[isEn ? "en" : "bn"])}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-900/30"
                    >
                      <MessageCircle size={14} />
                      <span>{isEn ? "Enroll via WhatsApp" : "ভর্তি নিশ্চিত করুন"}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
