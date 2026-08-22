"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Award, CheckCircle2, 
  Calendar, X, Clock, ArrowLeft,
  Briefcase, CheckSquare, Sparkles,
  GraduationCap, BookOpen, Users,
  Check, ArrowRight, ShieldCheck,
  Video, Code2, Globe2
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { mentorsData } from "@/data/mentorsData";

const LinkedinIcon = ({ size = 15, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function MentorDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { language } = useLanguage();
  const isEn = language === "en";

  const mentor = mentorsData.find((m) => m.id === resolvedParams.id);

  if (!mentor) {
    notFound();
  }

  const [selectedTopic, setSelectedTopic] = useState("code-review");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(mentor.nextSlot);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const topics = [
    { id: "code-review", label: isEn ? "Architecture & Code Review (45 Mins)" : "আর্কিটেকচার ও কোড রিভিউ (৪৫ মিনিট)" },
    { id: "mock-interview", label: isEn ? "Live Mock Interview & Screening (45 Mins)" : "লাইভ মক ইন্টারভিউ ও স্ক্রিনিং (৪৫ মিনিট)" },
    { id: "career-guidance", label: isEn ? "Career Guidance & Tech Roadmap (45 Mins)" : "ক্যারিয়ার গাইডেন্স ও রোডম্যাপ (৪৫ মিনিট)" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans select-none">
      <Header />

      <main className="flex-grow pt-6 pb-20">
        
        {/* TOP BREADCRUMB & BACK NAV */}
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mb-6">
          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#008744] bg-white border border-slate-200/90 px-3.5 py-2 rounded-xl shadow-2xs transition-all hover:shadow-xs group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#008744]" />
            <span>{isEn ? "Back to All Mentors" : "সকল মেন্টর তালিকায় ফিরে যান"}</span>
          </Link>
        </div>

        {/* HERO PROFILE CARD */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
            {/* Ambient Brand Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#008744]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8 relative z-10">
              
              {/* Avatar & Badges (Natural width, zero empty space) */}
              <div className="w-full sm:w-60 md:w-64 flex-shrink-0 flex flex-col items-center sm:items-start">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 border-2 border-slate-200/80 shadow-md w-full aspect-square">
                  <img
                    src={mentor.avatar}
                    alt={isEn ? mentor.name : mentor.nameBn}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-black text-[#008744] flex items-center gap-1 shadow-2xs">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span>{mentor.rating}</span>
                  </div>
                </div>

                {/* Quick Social & WhatsApp Links matching avatar width */}
                <div className="flex items-center gap-2 w-full mt-3">
                  {mentor.socialLinks.linkedin && (
                    <a
                      href={mentor.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] text-slate-600 border border-slate-200/60 transition-colors shadow-2xs flex-shrink-0"
                      title="LinkedIn Profile"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  )}

                  <a
                    href={`https://wa.me/8801712345678?text=Hello%2C%20I%20want%20to%20consult%20with%20mentor%20${encodeURIComponent(mentor.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 text-xs font-bold transition-colors shadow-2xs text-center whitespace-nowrap"
                  >
                    <FaWhatsapp size={15} className="text-[#25D366]" />
                    <span>{isEn ? "WhatsApp Direct" : "হোয়াটসঅ্যাপ হেল্প"}</span>
                  </a>
                </div>
              </div>

              {/* Main Info (Fills entire remaining space) */}
              <div className="flex-grow space-y-3.5 w-full">
                
                {/* Department Badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#eaf8f4] border border-[#a6e7d8] px-3.5 py-1 rounded-full text-xs font-bold text-[#008744]">
                  <Sparkles size={12} className="text-[#008744]" />
                  <span>{isEn ? mentor.department : mentor.departmentBn}</span>
                </div>

                {/* Name */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  {isEn ? mentor.name : mentor.nameBn}
                </h1>

                {/* Role */}
                <div className="text-sm sm:text-base font-bold text-[#0d9488] sm:text-[#008744]">
                  {isEn ? mentor.role : mentor.roleBn}
                </div>

                {/* Training Experience */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-xl w-fit">
                  <CheckSquare size={16} className="text-[#008744] flex-shrink-0" />
                  <span>{isEn ? mentor.trainingExp : mentor.trainingExpBn}</span>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl font-normal">
                  {isEn ? mentor.bio : mentor.bioBn}
                </p>

                {/* Metric Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 text-center">
                    <div className="text-base font-black text-slate-900">{mentor.rating} / 5.0</div>
                    <div className="text-[11px] font-semibold text-slate-500">{isEn ? `${mentor.reviewsCount} Reviews` : `${mentor.reviewsCount}টি রিভিউ`}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 text-center">
                    <div className="text-base font-black text-[#008744]">{mentor.menteesCount}</div>
                    <div className="text-[11px] font-semibold text-slate-500">{isEn ? "Trained & Mentored" : "শিক্ষার্থী সংখ্যা"}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 text-center">
                    <div className="text-base font-black text-slate-900">{isEn ? "1-on-1 Live" : "১-অন-১ লাইভ"}</div>
                    <div className="text-[11px] font-semibold text-slate-500">{isEn ? "Google Meet / Zoom" : "স্ক্রিন-শেয়ারিং"}</div>
                  </div>
                  <div className="p-3 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 text-center">
                    <div className="text-base font-black text-[#008744]">{isEn ? "Next Slot" : "পরবর্তী স্লট"}</div>
                    <div className="text-[11px] font-bold text-emerald-800">{isEn ? mentor.nextSlot : mentor.nextSlotBn}</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* MAIN BODY GRID: LEFT DETAILS (8 COLS) + RIGHT STICKY BOOKING (4 COLS) */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT 8 COLUMNS: EXPERIENCE, SKILLS, EDUCATION, COURSES */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* 1. Work Experience Section */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
                <div className="flex items-center gap-2 text-base font-black text-slate-900 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]"></span>
                  <span>{isEn ? "Work Experience & Industry Leadership" : "কর্ম অভিজ্ঞতা ও ইন্ডাস্ট্রি লিডারশিপ"}</span>
                </div>

                <div className="space-y-3.5">
                  {(isEn ? mentor.workExperiences : mentor.workExperiencesBn).map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Briefcase size={16} />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">{exp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Technical Skills Matrix */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
                <div className="flex items-center gap-2 text-base font-black text-slate-900 mb-5">
                  <Code2 size={18} className="text-[#008744]" />
                  <span>{isEn ? "Technical Skills & Competencies" : "প্রযুক্তিগত দক্ষতা ও এক্সপার্টাইজ"}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {mentor.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold bg-[#edf9f6] text-[#008744] border border-[#aeead9] px-3.5 py-1.5 rounded-xl shadow-2xs hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Education & Certifications */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
                <div className="flex items-center gap-2 text-base font-black text-slate-900 mb-5">
                  <GraduationCap size={18} className="text-[#008744]" />
                  <span>{isEn ? "Education & Professional Certifications" : "শিক্ষাগত যোগ্যতা ও পেশাদার সার্টিফিকেশন"}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mentor.education.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs font-bold text-[#008744] mb-1">{edu.year}</div>
                      <div className="text-xs sm:text-sm font-black text-slate-900 mb-1">{edu.degree}</div>
                      <div className="text-xs text-slate-500 font-medium">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Courses Taught by Mentor */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
                <div className="flex items-center gap-2 text-base font-black text-slate-900 mb-5">
                  <BookOpen size={18} className="text-[#008744]" />
                  <span>{isEn ? "Courses Taught by this Mentor" : "এই মেন্টরের পরিচালিত কোর্সসমূহ"}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mentor.coursesTaught.map((course, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2 py-0.5 rounded-md">Live Bootcamp</span>
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                            <Star size={12} className="fill-amber-400 text-amber-400" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900 mb-1 leading-snug">{course.title}</h4>
                        <div className="text-xs text-slate-500">{course.students}</div>
                      </div>

                      <Link
                        href="/courses"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#008744] hover:text-[#007038] mt-4"
                      >
                        <span>{isEn ? "Explore Course" : "কোর্স বিস্তারিত"}</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT 4 COLUMNS: STICKY 1-ON-1 BOOKING WIDGET */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-md shadow-slate-200/50">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-black text-slate-900">{isEn ? "Book 1-on-1 Session" : "১-অন-১ সেশন বুক করুন"}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{isEn ? "Personalized video consultation" : "ব্যক্তিগত ভিডিও পরামর্শ"}</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#008744] animate-pulse"></span>
                </div>

                {/* Topic Selector */}
                <div className="mb-4">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    {isEn ? "Select Session Topic" : "সেশনের বিষয়"}
                  </label>
                  <div className="space-y-2">
                    {topics.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTopic(t.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                          selectedTopic === t.id
                            ? "bg-emerald-50 text-[#008744] border-[#008744] shadow-2xs"
                            : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50"
                        }`}
                      >
                        <span className="line-clamp-1">{t.label}</span>
                        {selectedTopic === t.id && <Check size={14} className="text-[#008744] stroke-[3] flex-shrink-0 ml-1" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div className="mb-5">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    {isEn ? "Available Slots" : "ফাঁকা সময়সূচী"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["7:00 PM", "8:30 PM", "9:30 PM"].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 rounded-xl text-xs font-bold text-center border cursor-pointer transition-all ${
                          selectedTimeSlot === slot
                            ? "bg-[#008744] text-white border-[#008744] shadow-2xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-[#008744] hover:bg-[#007038] text-white py-3 rounded-xl font-bold text-xs shadow-md shadow-[#008744]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Calendar size={14} />
                    <span>{isEn ? "Confirm 1-on-1 Booking" : "সেশন নিশ্চিত করুন"}</span>
                  </button>

                  <a
                    href={`https://wa.me/8801712345678?text=Hello%2C%20I%20want%20to%20book%20a%20mentorship%20session%20with%20${encodeURIComponent(mentor.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                  >
                    <FaWhatsapp size={15} />
                    <span>{isEn ? "Direct Chat on WhatsApp" : "হোয়াটসঅ্যাপে সরাসরি যোগাযোগ"}</span>
                  </a>
                </div>

                {/* Guarantee Features */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#008744]" />
                    <span>{isEn ? "45-Min Google Meet with live screen share" : "৪৫ মিনিটের লাইভ স্ক্রিন-শেয়ারিং সেশন"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#008744]" />
                    <span>{isEn ? "Full video recording & code notes provided" : "সম্পূর্ণ সেশন রেকর্ডিং ও কোড নোটস প্রদান"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#008744]" />
                    <span>{isEn ? "100% Satisfaction & Career Mentorship" : "১০০% প্র্যাকটিক্যাল ক্যারিয়ার পরামর্শ"}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* BOOKING CONFIRMATION MODAL */}
        <AnimatePresence>
          {isBookingModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsBookingModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#008744] flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {isEn ? "Session Confirmed!" : "সেশন সফলভাবে নিশ্চিত হয়েছে!"}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {isEn
                    ? `Your 1-on-1 session with ${mentor.name} is booked for ${selectedTimeSlot}. Meeting link and calendar invite have been sent to your email.`
                    : `${mentor.name}-এর সাথে আপনার সেশন ${selectedTimeSlot} সময়ে শিডিউল করা হয়েছে। গুগল মিট লিংক আপনার ইমেইলে পাঠানো হয়েছে।`}
                </p>

                <div className="flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/8801712345678?text=Hello%2C%20I%20just%20booked%20a%20session%20with%20${encodeURIComponent(mentor.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <FaWhatsapp size={14} />
                    <span>{isEn ? "WhatsApp Support" : "হোয়াটসঅ্যাপ সাপোর্ট"}</span>
                  </a>

                  <button
                    onClick={() => setIsBookingModalOpen(false)}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                  >
                    {isEn ? "Done" : "সম্পন্ন"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}
