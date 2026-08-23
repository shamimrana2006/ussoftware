"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HouseCanvas from "@/components/HouseCanvas";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target, Compass, ShieldCheck,
  Globe, Building2, Users,
  HeartHandshake, Lightbulb, Rocket,
  Code2, Check, ArrowRight, Sparkles,
  TrendingUp, Award, Laptop, Briefcase,
  GraduationCap, CheckCircle2, Star, Quote,
  Calendar, Clock, Layers, Zap,
  Monitor, Cpu
} from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function AboutPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [selectedMilestone, setSelectedMilestone] = useState(4); // Default to 2026

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  ];



  const milestones = [
    {
      year: "2000",
      badge: "Inception",
      title: isEn ? "Foundation & Early IT Solutions" : "প্রতিষ্ঠা ও প্রাথমিক আইটি সলিউশন",
      desc: isEn
        ? "Established with a visionary goal to pioneer enterprise software development, corporate IT infrastructure, and digital skills in Bangladesh."
        : "বাংলাদেশে সফটওয়্যার ডেভেলপমেন্ট ও ডিজিটাল স্কিল অগ্রযাত্রার স্বপ্ন নিয়ে ২০০০ সালে যাত্রা শুরু।",
      highlight: isEn ? "Founded in Dhaka • 5 Enterprise Clients" : "ঢাকায় যাত্রা শুরু • প্রাথমিক এন্টারপ্রাইজ প্রজেক্ট"
    },
    {
      year: "2008",
      badge: "Offshore Growth",
      title: isEn ? "Offshore Software & ERP Systems" : "অফশোর সফটওয়্যার ও এন্টারপ্রাইজ সেবা",
      desc: isEn
        ? "Expanded operations to deliver custom ERPs, high-concurrency database architectures, and web applications for international clients."
        : "আন্তর্জাতিক ক্লায়েন্টদের জন্য কাস্টম ইআরপি, ডাটাবেস ও ওয়েব অ্যাপ্লিকেশন ডেলিভারি শুরু।",
      highlight: isEn ? "Global Contracts in UK & North America" : "যুক্তরাজ্য ও উত্তর আমেরিকায় ক্লায়েন্ট নেটওয়ার্ক"
    },
    {
      year: "2015",
      badge: "Academy Launch",
      title: isEn ? "Career Academy & 1-on-1 Mentorship" : "একাডেমি ও ক্যারিয়ার ট্রেনিং বিভাগ",
      desc: isEn
        ? "Launched professional career bootcamps with 1-on-1 industry mentorship to bridge the gap between academic theory and real software engineering."
        : "একাডেমিক শিক্ষার সাথে ইন্ডাস্ট্রির দূরত্বের অবসান ঘটাতে প্রফেশনাল একাডেমি ও মেন্টরশিপ প্রোগ্রাম প্রতিষ্ঠা।",
      highlight: isEn ? "Trained 1,500+ Developers in First 3 Years" : "প্রথম ৩ বছরে ১,৫০০+ ডেভেলপারকে প্রশিক্ষণ"
    },
    {
      year: "2020",
      badge: "Cloud & NSDA",
      title: isEn ? "Remote Mentorship & Cloud Labs" : "রিমোট মেন্টরশিপ ও ক্লাউড ল্যাব",
      desc: isEn
        ? "Scaled nationwide remote learning infrastructure, NSDA certified curriculum, and multi-cloud Kubernetes training environments."
        : "সারাদেশে লাইভ ১-অন-১ মেন্টরশিপ, এনএসডিএ সার্টিফাইড কারিকুলাম ও ক্লাউড ল্যাব বিস্তার।",
      highlight: isEn ? "NSDA Certified Training Partner" : "এনএসডিএ জাতীয় সার্টিফিকেশন পার্টনার"
    },
    {
      year: "2026",
      badge: "AI & 26th Year",
      title: isEn ? "26+ Years of Excellence & AI Hub" : "২৬+ বছরের গৌরব ও এআই টেক হাব",
      desc: isEn
        ? "Over 5,800+ engineers graduated, 150+ live client deployments, and South Asia's leading Generative AI & Cloud engineering talent pipeline."
        : "২৬ বছরের সফল অগ্রযাত্রা, ৫,৮০০+ গ্র্যাজুয়েট ও দক্ষিণ এশিয়ার অন্যতম শীর্ষ এআই ও ক্লাউড টেক ইকোসিস্টেম।",
      highlight: isEn ? "92% Placement Rate Across 14+ Global Hubs" : "৯২% প্লেসমেন্ট রেট সহ দক্ষিণ এশিয়ার শীর্ষ টেক হাব"
    }
  ];

  const leaders = [
    {
      name: isEn ? "Engr. M. A. Rahman" : "ইঞ্জি. এম. এ. রহমান",
      role: isEn ? "Chairman & Chief Advisor" : "চেয়ারম্যান ও প্রধান উপদেষ্টা",
      qualification: "M.Sc. in CSE (BUET), 26+ Years in Enterprise Telecom & IT",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      quote: isEn
        ? "Since 2000, our single-minded mission has been to build an internationally competitive tech ecosystem that propels Bangladesh into a global digital leader."
        : "২০০০ সাল থেকে আমাদের একমাত্র ব্রত হলো একটি আন্তর্জাতিক মানের প্রযুক্তি ইকোসিস্টেম গড়ে তোলা যা বাংলাদেশকে বিশ্বমঞ্চে টেক লিডার হিসেবে প্রতিষ্ঠিত করবে।",
      bio: isEn
        ? "Pioneered national software initiatives and enterprise cloud architectures. Leads US Software's strategic growth and international university partnerships since inception in 2000."
        : "২০০০ সাল থেকে জাতীয় আইটি প্রজেক্ট ও এন্টারপ্রাইজ ক্লাউড আর্কিটেকচারের পথিকৃৎ। ইউএস সফটওয়্যারের আন্তর্জাতিক পার্টনারশিপের নেতৃত্ব দিচ্ছেন।"
    },
    {
      name: isEn ? "Mohammad Shafiul Alam" : "মোহাম্মদ শফিউল আলম",
      role: isEn ? "Managing Director & CEO" : "ব্যবস্থাপনা পরিচালক (MD) ও সিইও",
      qualification: "B.Sc. in Software Eng., Ex-Tech Lead at Global FinTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      quote: isEn
        ? "We don't teach from theoretical slides. Every student builds production-grade software that solves real client pain points."
        : "আমরা থিওরিটিক্যাল স্লাইড থেকে পড়াই না। প্রতিটি শিক্ষার্থী এমন সফটওয়্যার বানায় যা বাস্তব ক্লায়েন্ট সমস্যার সমাধান করে।",
      bio: isEn
        ? "Over 16 years of executive leadership in software product engineering, tech mentorship, and job placement pipelines across North America and South Asia."
        : "সফটওয়্যার প্রোডাক্ট ইঞ্জিনিয়ারিং, মেন্টরশিপ ও আন্তর্জাতিক রিমোট জব প্লেসমেন্টে ১৬ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন লিডার।"
    },
    {
      name: isEn ? "Dr. Ariful Islam" : "ড. আরিফুল ইসলাম",
      role: isEn ? "Chief Technology Officer (CTO)" : "চিফ টেকনোলজি অফিসার (CTO)",
      qualification: "Ph.D. in Artificial Intelligence & Distributed Systems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
      quote: isEn
        ? "Empowering youth with cutting-edge Generative AI and Cloud engineering ensures our graduates lead the next decade of tech disruption."
        : "জেনারেটিভ এআই ও ক্লাউড ইঞ্জিনিয়ারিংয়ে শিক্ষার্থীদের দক্ষ করে তোলাই আগামী দশকের জন্য তাদের প্রস্তুত করার চাবিকাঠি।",
      bio: isEn
        ? "Renowned AI scientist and author of 15+ peer-reviewed IEEE papers on autonomous agents, LLM architectures, and computer vision systems."
        : "খ্যাতনামা এআই বিজ্ঞানী এবং অটোনোমাস এজেন্টস ও এলএলএম আর্কিটেকচারের ওপর ১৫+ আইইইই গবেষণা পেপারের লেখক।"
    }
  ];

  const campusFacilities = [
    {
      title: isEn ? "High-Performance AI & Cloud Labs" : "হাই-পারফরম্যান্স এআই ও ক্লাউড ল্যাব",
      desc: isEn ? "Equipped with dedicated workstation GPUs, dual-monitor desks, and multi-cloud Kubernetes sandbox servers." : "ডেডিকেটেড জিপিইউ ওয়ার্কস্টেশন, ডুয়াল-মনিটর সেটআপ ও কুবারনেটিস ক্লাউড সার্ভার সমন্বিত আধুনিক ল্যাব।",
      icon: Cpu,
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: isEn ? "Collaborative Open Studio & Coworking" : "ওপেন কো-ওয়ার্কিং স্টুডিও ও ব্রেনস্টর্মিং জোন",
      desc: isEn ? "Spacious interactive open spaces designed for sprint planning, agile standups, and peer code reviews." : "স্প্রিন্ট প্ল্যানিং, এজাইল স্ট্যান্ডআপ ও পিয়ার কোড রিভিউয়ের জন্য উন্মুক্ত কোলাবোরেটিভ জোন।",
      icon: Users,
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: isEn ? "Audio-Visual Masterclass Studio" : "অডিও-ভিজ্যুয়াল মাস্টারক্লাস স্টুডিও",
      desc: isEn ? "Studio-grade acoustics and 4K live streaming broadcast setups for global webinars and mentor keynotes." : "আন্তর্জাতিক ওয়েবিনার ও লাইভ মেন্টরশিপের জন্য ৪কে লাইভ ব্রডকাস্ট অডিও-ভিজ্যুয়াল স্টুডিও।",
      icon: Monitor,
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans select-none">
      <Header />

      <main className="flex-grow">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION: FULL-WIDTH 3D HOUSE (HOME.GLB) WITH CLEAN FLOATING TEXT   */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f7fa] via-[#eef5f8] to-[#f8fafc] pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-18 lg:pb-20 border-b border-slate-200/70 min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center justify-center">
          
          {/* Subtle Vertical Center Sky Panel */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[480px] bg-gradient-to-b from-[#eaf4f0]/60 via-[#f0f8f4]/20 to-transparent pointer-events-none rounded-b-[4rem]" />

          {/* FULL-WIDTH INTERACTIVE 3D HOUSE CANVAS (Z-INDEX 10) */}
          <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto">
            <HouseCanvas className="w-full h-full" />
          </div>

          {/* OVERLAY CONTENT (Z-INDEX 20, POINTER-EVENTS-NONE, INNER POINTER-EVENTS-AUTO) */}
          <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-20 pointer-events-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center justify-between">
              
              {/* ========================================================================= */}
              {/* LEFT COLUMN: EFFORTLESS HEADLINE & CTA (CLEAN FLOATING TEXT)             */}
              {/* ========================================================================= */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 space-y-4 text-left pointer-events-auto max-w-lg"
              >
                
                {/* Headline: US Software [avatars] software solutions for your career and business */}
                <h1 className="tracking-tight leading-[1.08]">
                  <span className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#253858] inline-flex items-center gap-2 flex-wrap">
                    <span>{isEn ? "US Software" : "ইউএস সফটওয়্যার"}</span>
                    {/* Avatar Pill Asset */}
                    <img
                      src="/images/hero-avatars-pill.png"
                      alt="Student Avatars"
                      className="inline-block h-7 sm:h-8 object-contain align-middle rounded-full shadow-2xs"
                    />
                  </span>
                  <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#253858]">
                    {isEn ? "software solutions" : "সফটওয়্যার সলিউশন"}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#899bb1]">
                    {isEn ? "for your career" : "আপনার ক্যারিয়ার"}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#253858]">
                    {isEn ? "and business" : "ও বিজনেসের জন্য"}
                  </div>
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] text-[#64748b] font-normal leading-relaxed">
                  {isEn
                    ? "Professional software engineering, AI development, and digital skill training for your career and business with US Software."
                    : "প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিং, এআই ও আইটি ক্যারিয়ার প্রশিক্ষণ। রিয়েল প্রজেক্ট ও ১-অন-১ মেন্টরশিপের মাধ্যমে আপনার ক্যারিয়ার গড়ে তুলুন।"}
                </p>

                {/* Green Pill CTA Button */}
                <div className="pt-1">
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 bg-[#188c59] hover:bg-[#137349] text-white px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm shadow-[0_6px_20px_rgba(24,140,89,0.3)] transition-all cursor-pointer hover:scale-105"
                  >
                    <span>{isEn ? "Get a quote" : "কোর্সগুলো দেখুন"}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </motion.div>

              {/* CENTER COLUMN: CLEAR OPENING TO VIEW AND INTERACT WITH 3D HOUSE (3 COLS) */}
              <div className="hidden lg:block lg:col-span-3 pointer-events-none" />

              {/* ========================================================================= */}
              {/* RIGHT COLUMN: 85k+ CARD & STACKED METRICS (4 COLS - GLASS CARD)           */}
              {/* ========================================================================= */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-4 space-y-3 text-left pointer-events-auto flex flex-col items-start lg:items-end"
              >
                
                {/* Top Neumorphic 85k+ Happy Students Card */}
                <div className="bg-white/85 backdrop-blur-md rounded-3xl p-5 shadow-[0_20px_45px_rgba(0,0,0,0.06)] border border-white/90 w-full max-w-[240px] hover:shadow-xl transition-shadow">
                  <img
                    src="/images/hero-card-avatars.png"
                    alt="Happy Students"
                    className="h-6 sm:h-7 object-contain mb-2.5"
                  />
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#253858] tracking-tight leading-none mb-1">
                    85k+
                  </div>
                  <div className="text-[11px] font-bold text-[#899bb1]">
                    {isEn ? "Happy Customers & Students" : "সন্তুষ্ট শিক্ষার্থী ও ক্লায়েন্ট"}
                  </div>
                </div>

                {/* Metric 1: 4.5+ Stars */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/90 shadow-sm w-full max-w-[240px]">
                  <div className="text-2xl font-extrabold text-[#253858] tracking-tight">
                    4.5+ Stars
                  </div>
                  <div className="text-[11px] text-[#899bb1] font-medium">
                    {isEn ? "By 2000+ tech graduates" : "২,০০০+ গ্র্যাজুয়েটের রিভিউ"}
                  </div>
                </div>

                {/* Metric 2: A+ Rating */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/90 shadow-sm w-full max-w-[240px]">
                  <div className="text-2xl font-extrabold text-[#253858] tracking-tight">
                    A+ Rating
                  </div>
                  <div className="text-[11px] text-[#899bb1] font-medium">
                    {isEn ? "Better for business & career" : "ক্যারিয়ার ও বিজনেসের জন্য শীর্ষ মান"}
                  </div>
                </div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. DEDICATED SEPARATE MISSION & VISION SECTIONS                           */}
        {/* ========================================================================= */}
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 space-y-12">

          {/* SECTION A: OUR MISSION (LIGHT MINT PRECISION CARD) */}
          <div className="bg-[#edf9f6] border-2 border-[#aeead9] rounded-3xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left 7 Cols */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-[#008744]/15 border border-[#008744]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#008744]">
                  <Target size={14} className="text-[#008744]" />
                  <span>{isEn ? "OUR MISSION" : "আমাদের মিশন"}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {isEn
                    ? "Empowering Youth with Production-Grade Engineering Skills"
                    : "প্র্যাকটিক্যাল আইটি ট্রেনিংয়ের মাধ্যমে দক্ষ জনশক্তি গড়ে তোলা"}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {isEn
                    ? "To empower individuals with practical, industry-grade technology training, real client project mastery, and dedicated 1-on-1 mentorship — bridging the divide between academic theory and high-paying global IT careers."
                    : "আমাদের মিশন হলো শিক্ষার্থীদের তাত্ত্বিক পড়াশোনার গণ্ডি পেরিয়ে রিয়েল ক্লায়েন্ট প্রজেক্ট ও ১-অন-১ মেন্টরশিপের মাধ্যমে আন্তর্জাতিক মানের দক্ষ ইঞ্জিনিয়ার হিসেবে প্রস্তুত করা, যাতে তারা গ্লোবাল মার্কেটে শীর্ষ পদে ক্যারিয়ার গড়তে পারেন।"}
                </p>

                {/* 4 Mission Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#008744] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "100% Practical Client Labs" : "১০০% প্র্যাকটিক্যাল ক্লায়েন্ট ল্যাব"}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#008744] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "1-on-1 Senior Mentorship" : "১-অন-১ এক্সপার্ট মেন্টরশিপ"}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#008744] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "Direct Job Placement Pipeline" : "সরাসরি জব প্লেসমেন্ট সাপোর্ট"}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#008744] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "NSDA & Global Standards" : "এনএসডিএ ও আন্তর্জাতিক কারিকুলাম"}</span>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Visual Badge Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#aeead9] shadow-sm text-center max-w-sm w-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#008744] text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#008744]/25">
                    <Target size={30} />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">100%</div>
                  <div className="text-xs font-extrabold text-[#008744] uppercase tracking-wider mb-2">
                    {isEn ? "Production Realism" : "প্র্যাকটিক্যাল কোডিং ফোকাস"}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {isEn
                      ? "Zero dummy projects. Every student builds enterprise microservices with real-time architecture standards."
                      : "কোনো ডামি প্রজেক্ট নয়, প্রতিটি শিক্ষার্থী তৈরি করে লাইভ স্কেলেবল সিস্টেম।"}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION B: OUR VISION 2030 (LIGHT AMBER CARD) */}
          <div className="bg-[#fff7f5] border-2 border-[#fed7aa] rounded-3xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left 5 Cols: Visual Vision Target Graphic */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#fed7aa] shadow-sm text-center max-w-sm w-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#ea580c]/25">
                    <Compass size={30} />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">50,000+</div>
                  <div className="text-xs font-extrabold text-[#ea580c] uppercase tracking-wider mb-2">
                    {isEn ? "Engineers by 2030" : "২০৩০ সালের লক্ষ্যমাত্রা"}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {isEn
                      ? "Creating South Asia's most competent talent ecosystem in Artificial Intelligence, Cloud DevOps, and Full-Stack Engineering."
                      : "দক্ষিণ এশিয়ার শীর্ষস্থানীয় সফটওয়্যার ও এআই ট্যালেন্ট পাইপলাইন তৈরি করা।"}
                  </p>
                </div>
              </div>

              {/* Right 7 Cols: Vision Content */}
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-1.5 bg-[#ea580c]/15 border border-[#ea580c]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#ea580c]">
                  <Compass size={14} className="text-[#ea580c]" />
                  <span>{isEn ? "OUR VISION 2030" : "আমাদের ভিশন ২০৩০"}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {isEn
                    ? "Leading South Asia's Digital Disruption & Global Remote Economy"
                    : "২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার শীর্ষ টেক পাওয়ারহাউজ হওয়া"}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {isEn
                    ? "To stand as South Asia's premier digital innovation and skill development powerhouse, producing 50,000+ elite engineers, AI specialists, and tech entrepreneurs by 2030."
                    : "আমাদের ভিশন হলো ২০৩০ সালের মধ্যে ৫০,০০০+ আন্তর্জাতিক মানের সফটওয়্যার ইঞ্জিনিয়ার, এআই বিশেষজ্ঞ ও টেক উদ্যোক্তা তৈরি করে বিশ্বমানের ডিজিটাল লিডার হিসেবে বাংলাদেশকে প্রতিষ্ঠিত করা।"}
                </p>

                {/* 4 Vision Milestones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#ea580c] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "Global AI & Cloud R&D Hub" : "গ্লোবাল এআই ও ক্লাউড গবেষণা ল্যাব"}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#ea580c] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "Silicon Valley Remote Placement" : "সিলিকন ভ্যালি রিমোট প্লেসমেন্ট"}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#ea580c] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "Nationwide Zero Skill-Gap" : "দক্ষতা বৈষম্যহীন ডিজিটাল বাংলাদেশ"}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white/90 border border-slate-200/80 p-3 rounded-xl shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#ea580c] flex-shrink-0 mt-0.5" />
                    <span>{isEn ? "Tech Entrepreneurship Hub" : "টেক উদ্যোক্তা ইনকিউবেশন হাব"}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. LIGHT TIMELINE STEPPER (2000 - 2026)                                   */}
        {/* ========================================================================= */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 py-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block mb-1">
              {isEn ? "26-YEAR HISTORIC TIMELINE" : "২০০০ সাল থেকে ঐতিহাসিক অগ্রযাত্রা"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {isEn ? "The US Software Journey (2000 - 2026)" : "২৬ বছরের গৌরবময় মাইলফলক"}
            </h2>
          </div>

          {/* Stepper Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {milestones.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${selectedMilestone === idx
                    ? "bg-[#008744] text-white shadow-md shadow-[#008744]/25 scale-105"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs"
                  }`}
              >
                <span>{m.year}</span>
                <span className="text-[10px] opacity-75 font-normal">({m.badge})</span>
              </button>
            ))}
          </div>

          {/* Active Milestone Card in Light Style */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3 pb-3 border-b border-slate-100">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#008744] tracking-tight">
                  {milestones[selectedMilestone].year}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                  {milestones[selectedMilestone].title}
                </h3>
              </div>
              <div className="bg-[#edf9f6] border border-[#aeead9] px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#008744]">
                {milestones[selectedMilestone].highlight}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {milestones[selectedMilestone].desc}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. EXECUTIVE LEADERSHIP (LIGHT CARDS)                                     */}
        {/* ========================================================================= */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 py-16 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block mb-1">
              {isEn ? "EXECUTIVE LEADERSHIP" : "ব্যবস্থাপনা ও পরিচালনা পরিষদ"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {isEn ? "Message from Leadership" : "নেতৃত্বের বার্তা ও পরিচিতি"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              {isEn ? "Guiding 26+ years of tech mentorship and software excellence" : "২০০০ সাল থেকে ইউএস সফটওয়্যার লিমিটেডের দূরদর্শী নেতৃত্ব ও দিকনির্দেশকবৃন্দ"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leaders.map((ldr, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#008744]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={ldr.avatar}
                      alt={ldr.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-[#008744]/30 shadow-md"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">{ldr.name}</h3>
                      <div className="text-xs font-bold text-[#008744] mt-0.5">{ldr.role}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{ldr.qualification}</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 mb-4 relative">
                    <Quote size={16} className="text-[#008744] mb-1 opacity-70" />
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{ldr.quote}"
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {ldr.bio}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">US Software Limited (Est. 2000)</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-[#0A66C2] hover:text-white text-slate-600 transition-colors"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CAMPUS & HIGH-TECH FACILITIES SHOWCASE                                 */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-t border-slate-200/80">
          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block mb-1">
                {isEn ? "WORLD-CLASS INFRASTRUCTURE" : "বিশ্বমানের ল্যাব ও ক্যাম্পাস"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {isEn ? "Campus & Innovation Facilities" : "আমাদের ক্যাম্পাস ও প্রযুক্তিগত সুবিধা"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {campusFacilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-video overflow-hidden">
                        <img src={fac.img} alt={fac.title} className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3 bg-[#008744] text-white p-2 rounded-xl shadow-md">
                          <Icon size={16} />
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-base font-black text-slate-900 mb-2 leading-snug">{fac.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">{fac.desc}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#008744]">
                      <span>{isEn ? "Available for Students" : "শিক্ষার্থীদের জন্য উন্মুক্ত"}</span>
                      <CheckCircle2 size={15} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. BOTTOM CTA: JOIN US SOFTWARE                                           */}
        {/* ========================================================================= */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <div className="bg-gradient-to-r from-[#eef9f5] via-[#f5fbf8] to-[#eef9f5] border border-[#bce8d9] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block mb-2">
                {isEn ? "TRANSFORM YOUR CAREER" : "আপনার ভবিষ্যৎ তৈরি করুন"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
                {isEn ? "Ready to Build Your Tech Career?" : "আপনার টেক ক্যারিয়ার শুরু করতে প্রস্তুত?"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {isEn
                  ? "Join thousands of successful graduates working at top software firms worldwide. Start learning from industry leaders today."
                  : "দেশ-বিদেশের শীর্ষ সফটওয়্যার কোম্পানিতে কর্মরত হাজার হাজার সফল গ্র্যাজুয়েটের অংশ হোন। আজই আপনার পছন্দের কোর্সে যুক্ত হোন।"}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/courses"
                  className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-3.5 rounded-xl font-bold text-xs shadow-md shadow-[#008744]/25 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>{isEn ? "Explore Courses" : "সকল কোর্স দেখুন"}</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="https://wa.me/8801712345678?text=Hello%2C%20I%20want%20to%20learn%20more%20about%20US%20Software"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200/90 px-6 py-3.5 rounded-xl font-bold text-xs shadow-2xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <FaWhatsapp size={15} className="text-[#25D366]" />
                  <span>{isEn ? "WhatsApp Admissions Desk" : "হোয়াটসঅ্যাপে পরামর্শ নিন"}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
