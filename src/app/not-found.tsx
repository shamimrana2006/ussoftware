"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RobotCanvas from "@/components/RobotCanvas";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Users,
  Award,
  Phone,
  Search,
  ArrowRight,
  Sparkles,
  Compass,
  AlertTriangle,
  Terminal,
  HelpCircle,
  Globe,
  CornerUpLeft,
  RefreshCw,
  ShieldCheck
} from "lucide-react";

export default function NotFound() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const notFound = t.notFound;

  const [searchQuery, setSearchQuery] = useState("");

  const allNavLinks = [
    {
      id: "courses",
      title: notFound.links.courses,
      path: "/courses",
      icon: BookOpen,
      badge: isEn ? "50+ Courses" : "৫০+ কোর্স",
      color: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "hover:border-emerald-500/50",
      iconColor: "text-emerald-600 bg-emerald-100",
    },
    {
      id: "services",
      title: notFound.links.services,
      path: "/#services",
      icon: Briefcase,
      badge: isEn ? "Enterprise Tech" : "এন্টারপ্রাইজ টেক",
      color: "from-blue-500/20 via-indigo-500/10 to-transparent",
      borderColor: "hover:border-blue-500/50",
      iconColor: "text-blue-600 bg-blue-100",
    },
    {
      id: "mentors",
      title: notFound.links.mentors,
      path: "/mentors",
      icon: Users,
      badge: isEn ? "1-on-1 Experts" : "১-অন-১ এক্সপার্ট",
      color: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "hover:border-purple-500/50",
      iconColor: "text-purple-600 bg-purple-100",
    },
    {
      id: "certification",
      title: notFound.links.certification,
      path: "/certification",
      icon: Award,
      badge: isEn ? "ISO 9001:2015" : "আইএসও সার্টিফাইড",
      color: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderColor: "hover:border-amber-500/50",
      iconColor: "text-amber-600 bg-amber-100",
    },
    {
      id: "projects",
      title: notFound.links.projects,
      path: "/projects",
      icon: Globe,
      badge: isEn ? "150+ Portfolio" : "১৫০+ পোর্টফোলিও",
      color: "from-cyan-500/20 via-sky-500/10 to-transparent",
      borderColor: "hover:border-cyan-500/50",
      iconColor: "text-cyan-600 bg-cyan-100",
    },
    {
      id: "contact",
      title: notFound.links.contact,
      path: "/contact",
      icon: Phone,
      badge: isEn ? "24/7 Support" : "২৪/৭ সাপোর্ট",
      color: "from-rose-500/20 via-red-500/10 to-transparent",
      borderColor: "hover:border-rose-500/50",
      iconColor: "text-rose-600 bg-rose-100",
    },
  ];

  const filteredLinks = allNavLinks.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans select-none overflow-x-hidden">
      <Header />

      <main className="flex-grow relative z-10 py-8 sm:py-14">
        {/* Ambient Radial Background Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-400/15 via-teal-300/10 to-rose-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* 1. TOP CENTERED ALERT BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-xl border border-rose-200 text-rose-600 px-4 py-2 rounded-full text-xs font-black shadow-[0_4px_20px_rgba(222,31,38,0.08)] mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DE1F26]"></span>
            </span>
            <span className="tracking-wider uppercase text-[11px] font-extrabold text-slate-800">
              {notFound.badge}
            </span>
            <AlertTriangle size={14} className="text-[#DE1F26] animate-pulse" />
          </motion.div>

          {/* 2. MASSIVE CENTERED 404 GLOW TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative inline-block mb-4"
          >
            <div className="text-8xl sm:text-[140px] lg:text-[180px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-teal-600 to-[#DE1F26] drop-shadow-sm select-none">
              404
            </div>
            
            {/* Spinning Compass Radar Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none opacity-20">
              <Compass className="w-32 h-32 sm:w-44 sm:h-44 text-emerald-600 animate-spin" style={{ animationDuration: '24s' }} />
            </div>
          </motion.div>

          {/* 3. CENTER STAGE 3D ROBOT CANVAS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg h-[360px] sm:h-[440px] relative mb-8"
          >
            <div className="w-full h-full bg-gradient-to-b from-white/95 via-slate-50/90 to-emerald-50/50 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,135,68,0.12)] p-4 flex flex-col items-center justify-center overflow-hidden relative group">
              
              {/* Outer Orbit Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-emerald-300/60 rounded-full animate-spin pointer-events-none" style={{ animationDuration: "25s" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-emerald-200/30 rounded-full pointer-events-none" />

              {/* 3D Robot Canvas */}
              <div className="w-full h-full relative z-10">
                <RobotCanvas />
              </div>

              {/* Floating Tooltip Pill */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-300/80 text-slate-800 px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center gap-2"
              >
                <Sparkles size={14} className="text-[#008744] animate-spin" style={{ animationDuration: '4s' }} />
                <span>{notFound.robotHint}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* 4. CENTERED TITLE & SUBTITLE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 max-w-2xl mx-auto mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {notFound.title}
            </h1>
            <p className="text-base sm:text-lg font-medium text-slate-600 leading-relaxed">
              {notFound.subtitle}
            </p>
          </motion.div>

          {/* 5. CENTERED PRIMARY ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3.5 flex-wrap mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 bg-[#008744] hover:bg-[#007038] text-white px-8 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
            >
              <CornerUpLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>{notFound.backHome}</span>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-slate-300 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-2xs transition-all duration-200 cursor-pointer"
            >
              <BookOpen size={17} className="text-[#008744]" />
              <span>{notFound.exploreCourses}</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-2xs transition-all duration-200 cursor-pointer"
            >
              <Phone size={16} className="text-rose-500" />
              <span>{notFound.contactSupport}</span>
            </Link>
          </motion.div>

          {/* 6. CENTERED SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-xl mb-10"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={notFound.searchPlaceholder}
                className="w-full bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl pl-11 pr-16 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#008744]/30 focus:border-[#008744] shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* 7. CENTERED CYBER DIAGNOSTIC TERMINAL */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="w-full max-w-xl bg-slate-900 text-slate-300 rounded-2xl p-4 border border-slate-800 font-mono text-xs shadow-inner space-y-2 mb-14 text-left"
          >
            <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <Terminal size={13} className="text-emerald-400" />
                <span>USL_CYBER_ROUTER v4.0.4</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ONLINE
              </span>
            </div>
            <div className="text-slate-400 flex items-center justify-between">
              <span>&gt; Request Status:</span>
              <span className="text-rose-400 font-bold">404 NOT_FOUND</span>
            </div>
            <div className="text-slate-400 flex items-center justify-between">
              <span>&gt; Resolution Action:</span>
              <span className="text-emerald-400">REROUTING TO VALID DESTINATIONS</span>
            </div>
          </motion.div>

          {/* 8. CENTERED QUICK NAVIGATION CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full pt-8 border-t border-slate-200/80 space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  <Compass className="text-[#008744]" size={22} />
                  <span>{notFound.quickNavTitle}</span>
                </h2>
                <p className="text-xs sm:text-sm font-medium text-slate-500">
                  {notFound.quickNavDesc}
                </p>
              </div>
              {searchQuery && (
                <span className="text-xs font-bold bg-emerald-100 text-[#008744] px-3 py-1 rounded-full">
                  {filteredLinks.length} {isEn ? "Results Found" : "টি রেজাল্ট পাওয়া গেছে"}
                </span>
              )}
            </div>

            {/* Quick Links Card Grid (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <AnimatePresence mode="popLayout">
                {filteredLinks.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Link
                        href={item.path}
                        className={`group relative flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md ${item.borderColor} transition-all duration-300 overflow-hidden cursor-pointer block`}
                      >
                        {/* Ambient Card Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                        <div className="flex items-center gap-3.5 relative z-10">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#008744] transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-[11px] font-semibold text-slate-500">
                              {item.badge}
                            </span>
                          </div>
                        </div>

                        <div className="relative z-10 text-slate-400 group-hover:text-[#008744] group-hover:translate-x-1 transition-all">
                          <ArrowRight size={18} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {filteredLinks.length === 0 && (
              <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium">
                <HelpCircle className="mx-auto mb-2 text-slate-400" size={32} />
                <p>{isEn ? "No matching pages found for your search query." : "আপনার সার্চের সাথে কোনো পেইজ মেলেনি।"}</p>
              </div>
            )}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
