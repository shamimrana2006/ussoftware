"use client";

import React, { useState, useEffect } from "react";
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

// Reusable Smooth Typewriter Effect with Looping Sentences
function TypewriterText({
  texts,
  typingSpeed = 35,
  deletingSpeed = 18,
  pauseDelay = 2600,
  className = "",
  cursorColor = "text-emerald-500",
}: {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  className?: string;
  cursorColor?: string;
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setTextIndex(0);
    setCurrentText("");
    setIsDeleting(false);
  }, [texts]);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const activeText = texts[textIndex % texts.length] || "";

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < activeText.length) {
        timer = setTimeout(() => {
          setCurrentText(activeText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(activeText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        className={`inline-block font-black ml-0.5 ${cursorColor}`}
      >
        |
      </motion.span>
    </span>
  );
}

// Reusable Smooth Incrementing Number Counter with Looping Animation
function AnimatedCounter({
  target,
  duration = 1800,
  pauseDelay = 3800,
  prefix = "",
  suffix = "",
  formatWithCommas = false,
  className = "",
}: {
  target: number;
  duration?: number;
  pauseDelay?: number;
  prefix?: string;
  suffix?: string;
  formatWithCommas?: boolean;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;
    let startTime: number | null = null;
    let isRunning = true;

    const runCountAnimation = () => {
      startTime = null;

      const step = (timestamp: number) => {
        if (!isRunning) return;
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Smooth easeOutCubic curve
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * target);
        
        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
          // Wait pauseDelay then repeat smoothly
          timeoutId = setTimeout(() => {
            if (isRunning) {
              setCount(0);
              runCountAnimation();
            }
          }, pauseDelay);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    runCountAnimation();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [target, duration, pauseDelay]);

  const displayCount = formatWithCommas
    ? count.toLocaleString()
    : count.toString();

  return (
    <span className={className}>
      {prefix}{displayCount}{suffix}
    </span>
  );
}

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
              {/* LEFT COLUMN: BOLD, ANIMATED & ULTRA-PREMIUM HEADLINE & CTA               */}
              {/* ========================================================================= */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 space-y-4 text-left pointer-events-auto max-w-xl"
              >
                
                {/* Top Glowing Heritage Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md border border-emerald-300/80 text-[#008744] px-4 py-1.5 rounded-full text-xs font-black shadow-xs"
                >
                  <Sparkles size={13} className="text-[#DE1F26] animate-pulse" />
                  <span>{isEn ? "26+ YEARS OF ENTERPRISE & IT LEADERSHIP" : "২০০০ সাল থেকে প্রযুক্তি উদ্ভাবন ও অগ্রযাত্রা"}</span>
                </motion.div>

                {/* Animated Ultra-Premium Headline */}
                <h1 className="tracking-tight leading-[1.05] space-y-1.5">
                  {/* Line 1: Next-Gen Software Solutions */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-black text-slate-900 tracking-tight"
                  >
                    {isEn ? "Next-Gen Software" : "নেক্সট-জেন সফটওয়্যার"}
                  </motion.div>

                  {/* Line 2: & AI Innovations (with Premium Gradient) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-black bg-gradient-to-r from-[#008744] via-[#059669] to-[#0284c7] bg-clip-text text-transparent tracking-tight drop-shadow-xs"
                  >
                    {isEn ? "& AI Innovations" : "ও এআই ইনোভেশন"}
                  </motion.div>

                  {/* Line 3: Empowering Global Careers */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-bold text-slate-400 tracking-tight"
                  >
                    {isEn ? "for Global Careers" : "উন্নত ক্যারিয়ার"}
                  </motion.div>

                  {/* Line 4: with US Software + Avatars Pill */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-black text-[#0f172a] tracking-tight flex items-center gap-3 flex-wrap"
                  >
                    <span>{isEn ? "with US Software" : "ও ইউএস সফটওয়্যার"}</span>
                    {/* Floating Avatar Pill Asset */}
                    <motion.img
                      src="/images/hero-avatars-pill.png"
                      alt="Student Avatars"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="inline-block h-8 sm:h-9 object-contain align-middle rounded-full shadow-xs border border-white"
                    />
                  </motion.div>
                </h1>

                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg pt-1"
                >
                  {isEn
                    ? "We engineer high-performance software systems and empower tech leaders through real-world client labs and 1-on-1 industry mentorship."
                    : "আমরা তৈরি করি হাই-পারফরম্যান্স সফটওয়্যার সলিউশন এবং রিয়েল-ওয়ার্ল্ড ক্লায়েন্ট প্রজেক্ট ও ১-অন-১ মেন্টরশিপের মাধ্যমে আন্তর্জাতিক মানের দক্ষ আইটি প্রফেশনাল গড়ে তুলি।"}
                </motion.p>

                {/* Clean, Elegant & Ultra-Premium CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-2 flex items-center gap-3.5 flex-wrap"
                >
                  {/* Primary Lush Emerald Button */}
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#008744] to-[#007038] hover:from-[#007038] hover:to-[#005a2d] text-white px-7 sm:px-8 py-3.5 rounded-full font-black text-sm sm:text-[15px] shadow-[0_8px_25px_rgba(0,135,68,0.35)] hover:shadow-[0_12px_32px_rgba(0,135,68,0.45)] transition-all cursor-pointer hover:scale-105 active:scale-98 group"
                  >
                    <span>{isEn ? "Get a quote" : "কোর্সগুলো দেখুন"}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>

                  {/* Secondary White Glass Contact Button */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-slate-800 border border-slate-200/90 hover:border-slate-300 px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-[15px] shadow-2xs hover:shadow-md transition-all cursor-pointer hover:scale-105 active:scale-98"
                  >
                    <span>{isEn ? "Contact Us" : "যোগাযোগ করুন"}</span>
                  </Link>
                </motion.div>

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
        {/* 2. DEDICATED REDESIGNED MISSION & VISION SHOWCASES                        */}
        {/* ========================================================================= */}
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 space-y-16">

          {/* ========================================================================= */}
          {/* SECTION A: OUR MISSION (MASSIVE TITLE & LUSH EMERALD CYBER-GLASS)         */}
          {/* ========================================================================= */}
          <div className="relative bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] border-2 border-emerald-300/80 rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,135,68,0.08)] overflow-hidden">
            {/* Background Watermark Outline Typography */}
            <div className="absolute right-4 -bottom-6 select-none pointer-events-none text-slate-900/[0.03] font-black text-8xl sm:text-9xl lg:text-[180px] tracking-tighter leading-none">
              MISSION
            </div>

            {/* Glowing Corner Aura */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

              {/* Left 7 Cols: Mission Content */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Massive Section Title */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#008744]/10 border border-[#008744]/30 px-4 py-1.5 rounded-full text-xs font-black text-[#008744] mb-3">
                    <Target size={15} className="text-[#008744]" />
                    <span>{isEn ? "CORE PURPOSE & PURPOSE" : "মূল উদ্দেশ্য ও অঙ্গীকার"}</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                    <span className="text-[#008744] block sm:inline mr-3">{isEn ? "OUR" : "আমাদের"}</span>
                    <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                      {isEn ? "MISSION" : "মিশন"}
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg font-bold text-slate-700 mt-2">
                    {isEn
                      ? "Empowering Youth with Production-Grade Engineering Skills"
                      : "প্র্যাকটিক্যাল আইটি ট্রেনিংয়ের মাধ্যমে বিশ্বমানের দক্ষ জনশক্তি গড়ে তোলা"}
                  </p>
                </div>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  {isEn
                    ? "To empower individuals with practical, industry-grade technology training, real client project mastery, and dedicated 1-on-1 mentorship — bridging the divide between academic theory and high-paying global IT careers."
                    : "আমাদের মিশন হলো শিক্ষার্থীদের তাত্ত্বিক পড়াশোনার গণ্ডি পেরিয়ে রিয়েল ক্লায়েন্ট প্রজেক্ট ও ১-অন-১ মেন্টরশিপের মাধ্যমে আন্তর্জাতিক মানের দক্ষ ইঞ্জিনিয়ার হিসেবে প্রস্তুত করা, যাতে তারা গ্লোবাল মার্কেটে শীর্ষ পদে ক্যারিয়ার গড়তে পারেন।"}
                </p>

                {/* 4 Animated Mission Checkpoints Cards with Pure Smooth Hover Gradient (No Scale Up) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-emerald-200/90 hover:border-[#008744] hover:shadow-[0_8px_25px_rgba(0,135,68,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Emerald -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#008744]/20 via-emerald-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-emerald-100/80 text-[#008744] flex items-center justify-center flex-shrink-0 group-hover:bg-[#008744] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <CheckCircle2 size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#005a2d] transition-colors">{isEn ? "100% Practical Client Labs" : "১০০% প্র্যাকটিক্যাল ক্লায়েন্ট ল্যাব"}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-emerald-200/90 hover:border-[#008744] hover:shadow-[0_8px_25px_rgba(0,135,68,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Emerald -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#008744]/20 via-emerald-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-emerald-100/80 text-[#008744] flex items-center justify-center flex-shrink-0 group-hover:bg-[#008744] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <Users size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#005a2d] transition-colors">{isEn ? "1-on-1 Senior Mentorship" : "১-অন-১ এক্সপার্ট মেন্টরশিপ"}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-emerald-200/90 hover:border-[#008744] hover:shadow-[0_8px_25px_rgba(0,135,68,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Emerald -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#008744]/20 via-emerald-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-emerald-100/80 text-[#008744] flex items-center justify-center flex-shrink-0 group-hover:bg-[#008744] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <Rocket size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#005a2d] transition-colors">{isEn ? "Direct Job Placement Pipeline" : "সরাসরি জব প্লেসমেন্ট সাপোর্ট"}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-emerald-200/90 hover:border-[#008744] hover:shadow-[0_8px_25px_rgba(0,135,68,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Emerald -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#008744]/20 via-emerald-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-emerald-100/80 text-[#008744] flex items-center justify-center flex-shrink-0 group-hover:bg-[#008744] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <Award size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#005a2d] transition-colors">{isEn ? "NSDA & Global ISO Standard" : "এনএসডিএ ও আন্তর্জাতিক কারিকুলাম"}</span>
                  </motion.div>
                </div>

              </div>

              {/* Right 5 Cols: Animated 3D Perspective Stat Showcase */}
              <div className="lg:col-span-5 flex justify-center [perspective:1200px]">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateX: [0, 5, 0],
                    rotateY: [0, -6, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 0,
                    rotateY: 0,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/95 backdrop-blur-xl rounded-[32px] p-8 sm:p-10 border-2 border-emerald-200 shadow-[0_25px_60px_rgba(0,135,68,0.18)] text-center max-w-sm w-full relative [transform-style:preserve-3d] group cursor-pointer"
                >
                  {/* 3D Floating Corner Glow Rings */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200/60 rounded-full blur-2xl -z-10 animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-200/40 rounded-full blur-2xl -z-10" />

                  {/* 3D Floating Orbit Icon Sphere */}
                  <div className="relative w-24 h-24 mx-auto mb-6 [transform:translateZ(40px)]">
                    {/* Pulsing Rotating Orbit Rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      className="absolute -inset-3 rounded-full border-2 border-dashed border-emerald-400/60 pointer-events-none"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      className="absolute -inset-1.5 rounded-full border border-emerald-300/40 pointer-events-none"
                    />
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#008744] via-[#10b981] to-[#047857] text-white flex items-center justify-center shadow-[0_12px_30px_rgba(0,135,68,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Target size={44} className="stroke-[2.5] drop-shadow-md" />
                    </div>
                  </div>

                  {/* 3D Depth Metric Value with Smooth Repeating Increment Animation */}
                  <div className="[transform:translateZ(35px)] space-y-2">
                    <div className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                      <AnimatedCounter target={100} suffix="%" duration={1800} pauseDelay={3800} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-[#008744] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                      <Sparkles size={13} className="text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
                      <span>{isEn ? "Production Realism" : "প্র্যাকটিক্যাল কোডিং ফোকাস"}</span>
                    </div>
                  </div>

                  {/* Animated Smooth Repeating Typewriter Description */}
                  <div className="min-h-[72px] sm:min-h-[80px] flex items-center justify-center mt-4 [transform:translateZ(20px)]">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                      <TypewriterText
                        texts={
                          isEn
                            ? [
                                "Zero dummy projects. Every student builds enterprise microservices with real-time architecture standards.",
                                "100% practical live coding labs with dedicated 1-on-1 industry mentorship.",
                                "Direct corporate job placement pipeline connecting talent to global tech careers."
                              ]
                            : [
                                "কোনো ডামি প্রজেক্ট নয়, প্রতিটি শিক্ষার্থী তৈরি করে লাইভ স্কেলেবল সিস্টেম ও প্রোডাকশন প্রজেক্ট।",
                                "১০০% লাইভ কোডিং ল্যাব এবং ডেডিকেটেড ১-অন-১ এক্সপার্ট মেন্টরশিপ।",
                                "সরাসরি ইন্ডাস্ট্রি জব প্লেসমেন্ট সাপোর্ট ও আন্তর্জাতিক ক্যারিয়ারের নিশ্চয়তা।"
                              ]
                        }
                        typingSpeed={30}
                        deletingSpeed={15}
                        pauseDelay={2800}
                        cursorColor="text-emerald-500"
                      />
                    </p>
                  </div>

                  {/* Floating 3D Badge */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-black text-[#008744] [transform:translateZ(30px)]">
                    <CheckCircle2 size={15} />
                    <span>{isEn ? "ISO 9001:2015 Verified Quality" : "আইএসও সার্টিফাইড আন্তর্জাতিক মান"}</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION B: OUR VISION 2030 (MASSIVE TITLE & SUNSET CORAL CYBER-GLASS)      */}
          {/* ========================================================================= */}
          <div className="relative bg-gradient-to-br from-[#fff7ed] via-white to-[#fef2f2] border-2 border-orange-200/90 rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_rgba(234,88,12,0.08)] overflow-hidden">
            {/* Background Watermark Outline Typography */}
            <div className="absolute left-4 -bottom-6 select-none pointer-events-none text-slate-900/[0.03] font-black text-8xl sm:text-9xl lg:text-[180px] tracking-tighter leading-none">
              VISION
            </div>

            {/* Glowing Corner Aura */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

              {/* Left 5 Cols: Animated 3D Perspective Stat Showcase */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 [perspective:1200px]">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateX: [0, -5, 0],
                    rotateY: [0, 6, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6.5,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 0,
                    rotateY: 0,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/95 backdrop-blur-xl rounded-[32px] p-8 sm:p-10 border-2 border-orange-200 shadow-[0_25px_60px_rgba(234,88,12,0.18)] text-center max-w-sm w-full relative [transform-style:preserve-3d] group cursor-pointer"
                >
                  {/* 3D Floating Corner Glow Rings */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-orange-200/60 rounded-full blur-2xl -z-10 animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl -z-10" />

                  {/* 3D Floating Orbit Icon Sphere */}
                  <div className="relative w-24 h-24 mx-auto mb-6 [transform:translateZ(40px)]">
                    {/* Pulsing Rotating Orbit Rings */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      className="absolute -inset-3 rounded-full border-2 border-dashed border-orange-400/60 pointer-events-none"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      className="absolute -inset-1.5 rounded-full border border-orange-300/40 pointer-events-none"
                    />
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#c2410c] text-white flex items-center justify-center shadow-[0_12px_30px_rgba(234,88,12,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Compass size={44} className="stroke-[2.5] drop-shadow-md" />
                    </div>
                  </div>

                  {/* 3D Depth Metric Value with Smooth Repeating Increment Animation */}
                  <div className="[transform:translateZ(35px)] space-y-2">
                    <div className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                      <AnimatedCounter target={50000} suffix="+" formatWithCommas={true} duration={2000} pauseDelay={3800} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-orange-100/90 text-[#ea580c] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                      <Rocket size={13} className="text-[#ea580c] animate-bounce" />
                      <span>{isEn ? "Engineers by 2030" : "২০৩০ সালের লক্ষ্যমাত্রা"}</span>
                    </div>
                  </div>

                  {/* Animated Smooth Repeating Typewriter Description */}
                  <div className="min-h-[72px] sm:min-h-[80px] flex items-center justify-center mt-4 [transform:translateZ(20px)]">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                      <TypewriterText
                        texts={
                          isEn
                            ? [
                                "Creating South Asia's most competent talent ecosystem in Artificial Intelligence, Cloud DevOps, and Full-Stack Engineering.",
                                "Empowering 50,000+ elite engineers, AI specialists, and tech entrepreneurs by 2030.",
                                "Accelerating remote Silicon Valley placement and tech startup incubation."
                              ]
                            : [
                                "দক্ষিণ এশিয়ার শীর্ষস্থানীয় সফটওয়্যার, এআই ও ক্লাউড কম্পিউটিং ট্যালেন্ট পাইপলাইন তৈরি করা।",
                                "২০৩০ সালের মধ্যে ৫০,০০০+ আন্তর্জাতিক মানের সফটওয়্যার ইঞ্জিনিয়ার ও এআই লিডার তৈরি করা।",
                                "সিলিকন ভ্যালি রিমোট ক্যারিয়ার ও বিশ্বমানের টেক ইকোসিস্টেম গড়ে তোলা।"
                              ]
                        }
                        typingSpeed={30}
                        deletingSpeed={15}
                        pauseDelay={2800}
                        cursorColor="text-orange-500"
                      />
                    </p>
                  </div>

                  {/* Floating 3D Badge */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-black text-[#ea580c] [transform:translateZ(30px)]">
                    <Globe size={15} />
                    <span>{isEn ? "Global Remote Career Acceleration" : "আন্তর্জাতিক রিমোট ক্যারিয়ার অগ্রগতি"}</span>
                  </div>
                </motion.div>
              </div>

              {/* Right 7 Cols: Vision Content */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                
                {/* Massive Section Title */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#ea580c]/10 border border-[#ea580c]/30 px-4 py-1.5 rounded-full text-xs font-black text-[#ea580c] mb-3">
                    <Compass size={15} className="text-[#ea580c]" />
                    <span>{isEn ? "FUTURE ROADMAP & GOALS" : "ভবিষ্যৎ লক্ষ্য ও রোডম্যাপ"}</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                    <span className="text-[#ea580c] block sm:inline mr-3">{isEn ? "OUR" : "আমাদের"}</span>
                    <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                      {isEn ? "VISION 2030" : "ভিশন ২০৩০"}
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg font-bold text-slate-700 mt-2">
                    {isEn
                      ? "Leading South Asia's Digital Disruption & Global Remote Economy"
                      : "২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার শীর্ষ টেক পাওয়ারহাউজ হওয়া"}
                  </p>
                </div>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  {isEn
                    ? "To stand as South Asia's premier digital innovation and skill development powerhouse, producing 50,000+ elite engineers, AI specialists, and tech entrepreneurs by 2030."
                    : "আমাদের ভিশন হলো ২০৩০ সালের মধ্যে ৫০,০০০+ আন্তর্জাতিক মানের সফটওয়্যার ইঞ্জিনিয়ার, এআই বিশেষজ্ঞ ও টেক উদ্যোক্তা তৈরি করে বিশ্বমানের ডিজিটাল লিডার হিসেবে বাংলাদেশকে প্রতিষ্ঠিত করা।"}
                </p>

                {/* 4 Animated Vision Milestone Cards with Pure Smooth Hover Gradient (No Scale Up) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-orange-200/90 hover:border-[#ea580c] hover:shadow-[0_8px_25px_rgba(234,88,12,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Orange -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/20 via-orange-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-orange-100/80 text-[#ea580c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ea580c] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <Cpu size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#9a3412] transition-colors">{isEn ? "Global AI & Cloud R&D Hub" : "গ্লোবাল এআই ও ক্লাউড ল্যাব"}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-orange-200/90 hover:border-[#ea580c] hover:shadow-[0_8px_25px_rgba(234,88,12,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Orange -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/20 via-orange-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-orange-100/80 text-[#ea580c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ea580c] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <Globe size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#9a3412] transition-colors">{isEn ? "Silicon Valley Remote Placement" : "সিলিকন ভ্যালি রিমোট ক্যারিয়ার"}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-orange-200/90 hover:border-[#ea580c] hover:shadow-[0_8px_25px_rgba(234,88,12,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Orange -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/20 via-orange-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-orange-100/80 text-[#ea580c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ea580c] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <Zap size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#9a3412] transition-colors">{isEn ? "Nationwide Zero Skill-Gap" : "দক্ষতা বৈষম্যহীন বাংলাদেশ"}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center gap-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-xs border border-orange-200/90 hover:border-[#ea580c] hover:shadow-[0_8px_25px_rgba(234,88,12,0.15)] p-4 rounded-2xl transition-all cursor-pointer group select-none overflow-hidden"
                  >
                    {/* Reversed Pure Hover Gradient Fill: Left Solid Orange -> Right Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/20 via-orange-100/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 w-9 h-9 rounded-xl bg-orange-100/80 text-[#ea580c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ea580c] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                      <Rocket size={19} />
                    </div>
                    <span className="relative z-10 font-bold text-slate-900 group-hover:text-[#9a3412] transition-colors">{isEn ? "Tech Incubation Ecosystem" : "উদ্যোক্তা ইনকিউবেশন হাব"}</span>
                  </motion.div>
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
