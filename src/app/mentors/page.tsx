"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Sparkles, Briefcase, CheckSquare,
  ChevronRight, ChevronDown, ChevronUp, Users
} from "lucide-react";
import { mentorsData } from "@/data/mentorsData";

export default function MentorsPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const specialties = [
    { id: "all", name: isEn ? "All Mentors" : "সকল মেন্টর" },
    { id: "web", name: isEn ? "Web Development" : "ওয়েব ডেভেলপমেন্ট" },
    { id: "marketing", name: isEn ? "Digital Marketing" : "ডিজিটাল মার্কেটিং" },
    { id: "graphic", name: isEn ? "Graphic Design" : "গ্রাফিক ডিজাইন" },
    { id: "ux", name: isEn ? "UX/UI Design" : "ইউএক্স/ইউআই ডিজাইন" },
    { id: "ai", name: isEn ? "AI & Automation" : "এআই ও অটোমেশন" },
    { id: "cloud", name: isEn ? "Cloud & DevOps" : "ক্লাউড ও ডেভঅপ্স" },
  ];

  // Filter Mentors
  const filteredMentors = useMemo(() => {
    return mentorsData.filter((m) => {
      const matchesSpecialty = activeSpecialty === "all" || m.specialty === activeSpecialty;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.nameBn.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.roleBn.toLowerCase().includes(q) ||
        m.workExperiences.some((exp) => exp.toLowerCase().includes(q)) ||
        m.workExperiencesBn.some((exp) => exp.toLowerCase().includes(q)) ||
        m.skills.some((s) => s.toLowerCase().includes(q));
      return matchesSpecialty && matchesSearch;
    });
  }, [activeSpecialty, searchQuery]);

  const faqs = [
    {
      q: isEn ? "How do 1-on-1 mentorship sessions work at US Software?" : "ইউএস সফটওয়্যারে ১-অন-১ মেন্টরশিপ কীভাবে পরিচালিত হয়?",
      a: isEn
        ? "Sessions are conducted live via Google Meet or Zoom screen-sharing for 45 minutes. You can share your codebase, review portfolio projects, or conduct mock interview rounds."
        : "সেশনগুলো গুগল মিট বা জুমের মাধ্যমে লাইভ স্ক্রিন-শেয়ারিংয়ের মাধ্যমে ৪৫ মিনিট অনুষ্ঠিত হয়। আপনি কোড রিভিউ, প্রজেক্ট পোর্টফোলিও মূল্যায়ন কিংবা ইন্টারভিউ মক সেশন নিতে পারেন।"
    },
    {
      q: isEn ? "Can I schedule recurring sessions with the department heads?" : "আমি কি ডিপার্টমেন্ট হেডদের সাথে নিয়মিত সেশন নিতে পারব?",
      a: isEn
        ? "Yes! Students enrolled in our Career Bootcamps receive dedicated 1-on-1 mentorship pairing throughout their course duration."
        : "হ্যাঁ! আমাদের প্রফেশনাল বুটক্যাম্পে ভর্তি থাকা শিক্ষার্থীরা কোর্স চলাকালীন নিয়মিত মেন্টরশিপ পেয়ে থাকেন।"
    },
    {
      q: isEn ? "What should I prepare before joining the session?" : "সেশনে যুক্ত হওয়ার আগে কী কী প্রস্তুতি নেওয়া প্রয়োজন?",
      a: isEn
        ? "We recommend preparing your specific questions, portfolio or GitHub repository links beforehand to maximize your 45-minute consultation."
        : "আপনার নির্দিষ্ট প্রশ্নমালা, পোর্টফোলিও বা গিটহাব লিংক আগে থেকেই প্রস্তুত রাখার পরামর্শ দেওয়া হচ্ছে।"
    },
    {
      q: isEn ? "How can I contact the mentorship desk on WhatsApp?" : "মেন্টরশিপ ডেস্কের সাথে হোয়াটসঅ্যাপে যোগাযোগের উপায় কী?",
      a: isEn
        ? "Click any WhatsApp button on the mentor cards to instantly open a direct chat with our academic advising team."
        : "যেকোনো মেন্টর কার্ডের হোয়াটসঅ্যাপ বাটনে ক্লিক করে সরাসরি আমাদের একাডেমিক টিমের সাথে চ্যাট করতে পারেন।"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col select-none font-sans">
      <Header />

      <main className="flex-grow">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION: MATCHING SCREENSHOT EXACTLY                              */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 bg-gradient-to-b from-[#eaf8f4] via-[#f5fcf9] to-[#f8fafc] border-b border-slate-200/60 overflow-hidden text-center">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#008744_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#008744]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2ed199]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

            {/* Top Pill Badge: Expert Instructors */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 bg-[#d8f4ea] border border-[#a4e6cf] px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#008744] mb-3 shadow-2xs"
            >
              <Sparkles size={12} className="text-[#008744]" />
              <span>{isEn ? "Expert Instructors" : "এক্সপার্ট ইন্সট্রাক্টরবৃন্দ"}</span>
            </motion.div>

            {/* Main Heading: Our Mentors */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3"
            >
              {isEn ? (
                <>
                  Our <span className="text-[#0d9488] sm:text-[#008744]">Mentors</span>
                </>
              ) : (
                <>
                  আমাদের <span className="text-[#0d9488] sm:text-[#008744]">মেন্টরবৃন্দ</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle from Screenshot */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal"
            >
              {isEn
                ? "Behind the leading IT skill development platform, masterminds of industry leaders are working. From the management to the expert mentors, highly skilled people are dedicated to yours skill advancement."
                : "দেশের শীর্ষস্থানীয় আইটি স্কিল ডেভেলপমেন্ট প্ল্যাটফর্মের পেছনে কাজ করছেন অভিজ্ঞ ইন্ডাস্ট্রি লিডারগণ। ব্যবস্থাপনা থেকে শুরু করে বিশেষজ্ঞ মেন্টর পর্যন্ত প্রতিটি সদস্য আপনার দক্ষতা বৃদ্ধির জন্য নিবেদিত।"}
            </motion.p>

            {/* Specialty Category Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="flex flex-wrap items-center justify-center gap-2 mt-7"
            >
              {specialties.map((spec) => {
                const isActive = activeSpecialty === spec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setActiveSpecialty(spec.id)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${isActive
                        ? "bg-[#008744] text-white shadow-md shadow-[#008744]/20 scale-105"
                        : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-2xs"
                      }`}
                  >
                    {spec.name}
                  </button>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MENTOR CARDS GRID (EXACT 2-COLUMN LAYOUT WITH HOVER BLACK FADE & DETAILS)*/}
        {/* ========================================================================= */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">

          {/* Quick Search & Count Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#008744] animate-pulse"></span>
              <span>
                <strong className="text-[#008744] font-black">{filteredMentors.length}</strong> {isEn ? "Expert Mentors" : "জন অভিজ্ঞ মেন্টর"}
              </span>
            </div>

            {/* Live Search */}
            <div className="relative flex items-center w-full sm:w-72 bg-white rounded-xl border border-slate-200/90 px-3 py-2 shadow-2xs focus-within:border-[#008744] focus-within:ring-2 focus-within:ring-[#008744]/15 transition-all">
              <Search size={14} className="text-slate-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? "Search mentor, role, or experience..." : "নাম বা অভিজ্ঞতা দিয়ে খুঁজুন..."}
                className="w-full text-xs text-slate-800 placeholder-slate-400 outline-none bg-transparent font-medium"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                  <span className="text-xs font-bold">✕</span>
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredMentors.map((mentor, idx) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#edf9f6] hover:bg-[#e7f7f3] border border-[#aeead9] rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(13,148,136,0.04)] hover:shadow-[0_16px_36px_rgba(13,148,136,0.1)] transition-all duration-200 flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-start">

                  {/* Left: Mentor Photo with 15% Black Fade-in & Scale-Up / Lift Animation on Hover */}
                  <div className="sm:col-span-5 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-slate-200 to-slate-300 border border-slate-300/70 shadow-xs aspect-[4/5] sm:aspect-square group/img">
                      <img
                        src={mentor.avatar}
                        alt={isEn ? mentor.name : mentor.nameBn}
                        className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover/img:scale-110 group-hover/img:-translate-y-2"
                      />

                      {/* Compact Black Gradient Fade ONLY on bottom 30% behind button */}
                      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* "View Details >" Link Button sliding in on hover */}
                      <Link
                        href={`/mentors/${mentor.id}`}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-3 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 bg-white hover:bg-slate-50 text-slate-900 font-black text-xs px-3.5 py-1.5 rounded-lg shadow-lg border border-white/80 flex items-center gap-1 whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-105 z-10"
                      >
                        <span>{isEn ? "View Details" : "View Details"}</span>
                        <ChevronRight size={13} className="text-[#008744] stroke-[2.5]" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Info & Experience Column */}
                  <div className="sm:col-span-7 flex flex-col justify-between">

                    {/* Name (Clickable to Details Page) */}
                    <Link
                      href={`/mentors/${mentor.id}`}
                      className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug hover:text-[#008744] transition-colors block"
                    >
                      {isEn ? mentor.name : mentor.nameBn}
                    </Link>

                    {/* Department / Role in Cyan / Emerald Accent */}
                    <div className="text-xs sm:text-[13px] font-bold text-[#0d9488] sm:text-[#008744] mt-0.5 mb-2.5">
                      {isEn ? mentor.role : mentor.roleBn}
                    </div>

                    {/* Training Experience with Green Check */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-3.5">
                      <CheckSquare size={14} className="text-[#008744] fill-[#008744]/10 flex-shrink-0" />
                      <span>{isEn ? mentor.trainingExp : mentor.trainingExpBn}</span>
                    </div>

                    {/* Work Experience Section with Orange Bullet Indicator */}
                    <div className="mt-0.5">
                      <div className="flex items-center gap-2 text-xs font-black text-slate-900 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#ea580c] inline-block"></span>
                        <span>{isEn ? "Work Experience" : "Work Experience"}</span>
                      </div>

                      <ul className="space-y-1.5">
                        {(isEn ? mentor.workExperiences : mentor.workExperiencesBn).slice(0, 3).map((exp, expIdx) => (
                          <li key={expIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed font-medium">
                            <Briefcase size={14} className="text-[#ea580c] mt-0.5 flex-shrink-0" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FAQ ACCORDION SECTION                                                 */}
        {/* ========================================================================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200/70">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block mb-1">
              {isEn ? "GOT QUESTIONS?" : "সচরাচর জিজ্ঞাসিত প্রশ্ন"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isEn ? "Mentorship FAQs" : "মেন্টরশিপ সংক্রান্ত প্রশ্নোত্তর"}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="font-extrabold text-sm text-slate-900">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-[#008744] flex-shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <div className="px-5 pb-4 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
