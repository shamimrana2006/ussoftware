"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Star, Users, Award, CheckCircle2,
  Sparkles, ArrowRight, X, ExternalLink,
  Code2, Cpu, Smartphone, Cloud, Layers
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const GithubIcon = ({ size = 15, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectsPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [activeTab, setActiveTab] = useState<"all" | "stories" | "projects" | "feedback">("all");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const videoStories = [
    {
      id: "story-1",
      title: isEn ? "From Student to Professional - Sarah's Journey" : "শিক্ষার্থী থেকে প্রফেশনাল — সারাহর সাফল্যের গল্প",
      studentName: isEn ? "Sarah Khan" : "সারাহ খান",
      role: isEn ? "Frontend Engineer at Brain Station 23" : "ফ্রন্টএন্ড ইঞ্জিনিয়ার, ব্রেন স্টেশন ২৩",
      course: isEn ? "Full-Stack Web Development" : "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: isEn ? "Success Story" : "সাফল্যের গল্প",
      duration: "4:35 Min",
      highlight: isEn ? "Landed full-time job within 2 months of graduation" : "কোর্স শেষ হওয়ার ২ মাসের মধ্যেই ফুল-টাইম চাকরি লাভ"
    },
    {
      id: "story-2",
      title: isEn ? "Career Transformation - John's Success Story" : "ক্যারিয়ার পরিবর্তন — জন তানভীরের গল্প",
      studentName: isEn ? "Tanvir Ahmed" : "তানভীর আহমেদ",
      role: isEn ? "Software Engineer at Shohoz" : "সফটওয়্যার ইঞ্জিনিয়ার, সহজ",
      course: isEn ? "MERN Stack Mastery" : "মার্ন স্ট্যাক মাস্টারক্লাস",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: isEn ? "Success Story" : "সাফল্যের গল্প",
      duration: "5:12 Min",
      highlight: isEn ? "Transitioned from non-CS background to senior engineer" : "নন-সিএস ব্যাকগ্রাউন্ড থেকে সফল ইঞ্জিনিয়ার"
    },
    {
      id: "story-3",
      title: isEn ? "Web Development Journey & Placement" : "ওয়েব ডেভেলপমেন্ট জার্নি ও জব প্লেসমেন্ট",
      studentName: isEn ? "Rifat Hassan" : "রিফাত হাসান",
      role: isEn ? "React Developer at Optimizely" : "রিঅ্যাক্ট ডেভেলপার, অপটিমাইজলি",
      course: isEn ? "Enterprise Next.js & TypeScript" : "এন্টারপ্রাইজ নেক্সট.জেএস ও টাইপস্ক্রিপ্ট",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: isEn ? "Success Story" : "সাফল্যের গল্প",
      duration: "6:20 Min",
      highlight: isEn ? "Built 5 enterprise production applications" : "৫টি লাইভ এন্টারপ্রাইজ প্রজেক্ট তৈরি করেছেন"
    },
    {
      id: "story-4",
      title: isEn ? "Learning to Earning - Maria's Experience" : "লার্নিং টু আর্নিং — মারিয়ার অভিজ্ঞতা",
      studentName: isEn ? "Maria Akter" : "মারিয়া আক্তার",
      role: isEn ? "Product Designer at Pathao" : "প্রোডাক্ট ডিজাইনার, পাঠাও",
      course: isEn ? "UI/UX & Design Systems" : "ইউআই/ইউএক্স ও ডিজাইন সিস্টেম",
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: isEn ? "Success Story" : "সাফল্যের গল্প",
      duration: "3:50 Min",
      highlight: isEn ? "Top Rated UI Designer on Dribbble & Upwork" : "টপ রেটেড ডিজাইনার অন ড্রিবল ও আপওয়ার্ক"
    },
    {
      id: "story-5",
      title: isEn ? "Internship to Full-time - David's Progress" : "ইন্টার্নশিপ থেকে ফুল-টাইম — ডেভিডের অগ্রগতি",
      studentName: isEn ? "David Hossain" : "ডেভিড হোসেন",
      role: isEn ? "DevOps Engineer at Grameenphone" : "ডেভঅপ্স ইঞ্জিনিয়ার, গ্রামীণফোন",
      course: isEn ? "Cloud Architecture & Kubernetes" : "ক্লাউড আর্কিটেকচার ও কুবারনেটিস",
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: isEn ? "Success Story" : "সাফল্যের গল্প",
      duration: "4:45 Min",
      highlight: isEn ? "Received 3 job offers during internship phase" : "ইন্টার্ন চলাকালীন ৩টি ফুল-টাইম অফার লাভ"
    },
    {
      id: "story-6",
      title: isEn ? "Freelancing Success & Global Clients" : "ফ্রিল্যান্সিং সফলতা ও গ্লোবাল ক্লায়েন্টস",
      studentName: isEn ? "Karim Uddin" : "করিম উদ্দিন",
      role: isEn ? "Top Rated Plus Freelancer on Upwork" : "টপ রেটেড প্লাস ফ্রিল্যান্সার, আপওয়ার্ক",
      course: isEn ? "Full-Stack Web Development" : "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: isEn ? "Success Story" : "সাফল্যের গল্প",
      duration: "5:40 Min",
      highlight: isEn ? "Earned $30,000+ within first 12 months" : "প্রথম ১২ মাসে $৩০,০০০+ আয় অর্জন"
    }
  ];

  const clientProjects = [
    {
      id: "nexus-ai",
      title: isEn ? "NexusAI — Multi-Agent Intelligence Platform" : "নেক্সাস এআই — মাল্টি-এজেন্ট ইন্টেলিজেন্স প্ল্যাটফর্ম",
      desc: isEn 
        ? "Autonomous distributed multi-agent system automating financial document audits, fraud detection, and real-time ledger intelligence." 
        : "একটি মাল্টি-এজেন্ট প্ল্যাটফর্ম যা জটিল ডাটা পাইপলাইন, কোড জেনারেশন ও ফিন্যান্সিয়াল এনালাইসিস স্বয়ংক্রিয়ভাবে সম্পাদন করে।",
      badge: "Flagship AI",
      authors: isEn ? "AI Fellowship Cohort 4" : "এআই ফেলোশিপ ব্যাচ ৪ এর শিক্ষার্থী",
      stars: 345,
      tech: ["Next.js 15", "Python", "LangChain", "Qdrant", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "cloud-pulse",
      title: isEn ? "CloudPulse Observability Engine" : "ক্লাউডপাল্স অবজারভেবিলিটি ইঞ্জিন",
      desc: isEn 
        ? "Kubernetes cluster telemetry dashboard with automated horizontal autoscaling and sub-second Prometheus anomaly detection." 
        : "কুবারনেটিস ক্লাস্টারের জন্য রিয়েল-টাইম সার্ভার মনিটরিং, অ্যানোমালি ডিটেকশন ও স্বয়ংক্রিয় অটো-স্কেলিং প্ল্যাটফর্ম।",
      badge: "DevOps SaaS",
      authors: isEn ? "DevOps Platform Team" : "ডেভঅপ্স ইঞ্জিনিয়ারিং টিম",
      stars: 215,
      tech: ["Go", "Kubernetes", "Prometheus", "Grafana", "React"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "paysphere-escrow",
      title: isEn ? "PaySphere Global Escrow Engine" : "পে-স্ফিয়ার গ্লোবাল পেমেন্ট ইঞ্জিন",
      desc: isEn 
        ? "High-concurrency multi-currency payment platform with double-entry automated ledgers, pessimistic transaction locks, and anti-fraud webhooks." 
        : "মাল্টি-কারেন্সি পেআউট, অটোমেটেড ইনভয়েস ও ফ্রড ডিটেকশন সমন্বিত একটি হাই-স্পিড পেমেন্ট গেটওয়ে।",
      badge: "FinTech",
      authors: isEn ? "Full-Stack Cohort 7" : "ফুল-স্ট্যাক ব্যাচ ৭ এর শিক্ষার্থী",
      stars: 280,
      tech: ["Next.js 15", "Node.js", "PostgreSQL", "Prisma", "Stripe API"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "medlink-telehealth",
      title: isEn ? "MedLink Telemedicine & E-Prescription" : "মেডলিংক টেলিমেডিসিন ও প্রেসক্রিপশন",
      desc: isEn 
        ? "HIPAA-compliant end-to-end encrypted WebRTC audio/video consultations and digital prescription dispatch on iOS & Android." 
        : "ডাক্তার ও রোগীদের মধ্যে সরাসরি এনক্রিপ্টেড ভিডিও কনসালটেশন ও ডিজিটাল প্রেসক্রিপশন ডেলিভারি অ্যাপ।",
      badge: "Mobile App",
      authors: isEn ? "Mobile Fellowship Cohort 2" : "মোবাইল ফেলোশিপ ব্যাচ ২",
      stars: 190,
      tech: ["Flutter 3.x", "Dart", "WebRTC", "Firebase", "Node.js"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    }
  ];

  const studentFeedbacks = [
    {
      id: "feedback-1",
      name: isEn ? "Tariqul Islam" : "তারিকুল ইসলাম",
      role: isEn ? "Software Engineer at Therap BD" : "সফটওয়্যার ইঞ্জিনিয়ার, থেরাপ বিডি",
      course: isEn ? "Enterprise Full-Stack Track" : "এন্টারপ্রাইজ ফুল-স্ট্যাক ট্র্যাক",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      feedback: isEn 
        ? "The project-based curriculum at US Software was the turning point of my career. Building real-world distributed architectures and 1-on-1 code reviews with mentors helped me crack technical interviews effortlessly." 
        : "ইউএস সফটওয়্যারের প্রজেক্ট-ভিত্তিক ট্রেনিং আমার ক্যারিয়ারের মোড় ঘুরিয়ে দিয়েছে। ১-অন-১ কোড রিভিউ ও রিয়েল-ওয়ার্ল্ড প্রজেক্ট করার কারণে ইন্টারভিউতে সহজেই সাফল্য পেয়েছি।",
      badge: isEn ? "Placed at Therap BD" : "থেরাপ বিডিতে কর্মরত"
    },
    {
      id: "feedback-2",
      name: isEn ? "Farzana Yasmin" : "ফারজানা ইয়াসমিন",
      role: isEn ? "UI/UX Designer at Optimizely" : "ইউআই/ইউএক্স ডিজাইনার, অপটিমাইজলি",
      course: isEn ? "Design Systems & Interaction" : "ডিজাইন সিস্টেম ও ইন্টারঅ্যাকশন",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      feedback: isEn 
        ? "The design system course is unmatched in quality. Creating scalable Figma token frameworks and conducting real usability testing made my portfolio stand out among hundreds of candidates." 
        : "ফিগমায় এন্টারপ্রাইজ ডিজাইন সিস্টেম ও প্রোটোটাইপিং শেখার অভিজ্ঞতা ছিল অসাধারণ। আমার প্রজেক্ট পোর্টফোলিও দেখেই ক্লায়েন্ট সরাসরি অফার করে।",
      badge: isEn ? "Placed at Optimizely" : "অপটিমাইজলিতে কর্মরত"
    },
    {
      id: "feedback-3",
      name: isEn ? "Arifur Rahman" : "আরিফুর রহমান",
      role: isEn ? "AI Engineer at Silicon Valley Startup" : "এআই ইঞ্জিনিয়ার, সিলিকন ভ্যালি স্টার্টআপ",
      course: isEn ? "Generative AI & LLM Agents" : "জেনারেটিভ এআই ও এলএলএম এজেন্টস",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      feedback: isEn 
        ? "From LangChain RAG pipelines to fine-tuning open-source models, the level of technical depth taught by our mentors was world-class. Secured a remote international AI role right after completing the capstone." 
        : "লার্জ ল্যাঙ্গুয়েজ মডেল ফাইন-টিউনিং এবং এজেনটিক ওয়ার্কফ্লোর ওপর এমন গভীর টেকনিক্যাল জ্ঞান বাংলাদেশের আর কোথাও পাইনি। কোর্স শেষেই রিমোট জব পেয়েছি।",
      badge: isEn ? "Remote AI Engineer ($3.5k/mo)" : "রিমোট এআই ইঞ্জিনিয়ার"
    },
    {
      id: "feedback-4",
      name: isEn ? "Shahriar Kabir" : "শাহরিয়ার কবির",
      role: isEn ? "DevOps Specialist at Brain Station 23" : "ডেভঅপ্স স্পেশালিস্ট, ব্রেন স্টেশন ২৩",
      course: isEn ? "Cloud Engineering & Kubernetes" : "ক্লাউড ইঞ্জিনিয়ারিং ও কুবারনেটিস",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      feedback: isEn 
        ? "Hands-on multi-cloud deployment with Terraform and ArgoCD gave me practical skills that usually take years on the job. The mock defense session prepared me perfectly for my lead role." 
        : "টেরাফর্ম, কুবারনেটিস ও সিআই/সিডি অটোমেশনের প্র্যাকটিক্যাল ল্যাবগুলো আমাকে জবের প্রথম দিন থেকেই প্রোডাকশনে কাজ করার আত্মবিশ্বাস দিয়েছে।",
      badge: isEn ? "Placed at Brain Station 23" : "ব্রেন স্টেশন ২৩ এ কর্মরত"
    },
    {
      id: "feedback-5",
      name: isEn ? "Sadia Rahman" : "সাদিয়া রহমান",
      role: isEn ? "Growth Marketer & Media Buyer" : "গ্রোথ মার্কেটার ও মিডিয়া বায়ার",
      course: isEn ? "Advanced Performance Marketing" : "অ্যাডভান্সড পারফরম্যান্স মার্কেটিং",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      feedback: isEn 
        ? "Managing live ad budgets during the course taught me real conversion mechanics. Today I manage high-ticket international e-commerce ad accounts with consistent 4x+ ROAS." 
        : "লাইভ অ্যাড বাজেট ম্যানেজ করে ক্যাম্পেইন অপ্টিমাইজেশন শেখার কারণে এখন আন্তর্জাতিক ই-কমার্স ক্লায়েন্টদের সফলভাবে পরিচালনা করতে পারছি।",
      badge: isEn ? "Top Rated Freelancer" : "টপ রেটেড ফ্রিল্যান্সার"
    },
    {
      id: "feedback-6",
      name: isEn ? "Zubair Ahmed" : "জুবায়ের আহমেদ",
      role: isEn ? "Flutter App Engineer at Shohoz" : "ফ্লাটার অ্যাপ ইঞ্জিনিয়ার, সহজ",
      course: isEn ? "Cross-Platform Mobile Mastery" : "ক্রস-প্ল্যাটফর্ম মোবাইল মাস্টারি",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      feedback: isEn 
        ? "Clean Architecture, Riverpod state management, and real-time WebRTC audio/video integration were taught systematically. The placement team connected me directly with tech recruiters." 
        : "ক্লিন আর্কিটেকচার ও রিয়েল-টাইম মোবাইল অ্যাপ ডেভেলপমেন্টের ওপর অসাধারণ গাইডলাইন পেয়েছি। ইন্টারভিউতে সরাসরি সিলেকশন পেয়েছি।",
      badge: isEn ? "Placed at Shohoz" : "সহজে কর্মরত"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans select-none">
      <Header />

      <main className="flex-grow">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: MATCHING REFERENCE SCREENSHOT EXACTLY                    */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 bg-gradient-to-b from-[#eaf8f4] via-[#f5fcf9] to-[#f8fafc] border-b border-slate-200/60 overflow-hidden text-center">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#008744_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#008744]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2ed199]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            
            {/* Top Pill Badge: Our Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 bg-[#d8f4ea] border border-[#a4e6cf] px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#008744] mb-3 shadow-2xs"
            >
              <Sparkles size={12} className="text-[#008744]" />
              <span>{isEn ? "Our Success Stories" : "আমাদের সাফল্যের গল্পসমূহ"}</span>
            </motion.div>

            {/* Main Heading: Student Success Stories */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3"
            >
              {isEn ? (
                <>
                  Student <span className="text-[#0d9488] sm:text-[#008744]">Success Stories</span>
                </>
              ) : (
                <>
                  শিক্ষার্থীদের <span className="text-[#0d9488] sm:text-[#008744]">সাফল্যের গল্প</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle from Reference Screenshot */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal"
            >
              {isEn
                ? "At US Software Limited, our students gain more than just skills — they gain opportunities. Through real client project-based training, they graduate fully prepared for real-world challenges."
                : "ইউএস সফটওয়্যার লিমিটেডে শিক্ষার্থীরা শুধু দক্ষতাই অর্জন করেন না, তাদের জন্য তৈরি হয় উজ্জ্বল ভবিষ্যৎ। রিয়েল ক্লায়েন্ট প্রজেক্টভিত্তিক প্রশিক্ষণের মাধ্যমে তারা বাস্তব চ্যালেঞ্জের জন্য সম্পূর্ণ প্রস্তুত হয়ে গ্র্যাজুয়েশন সম্পন্ন করেন।"}
            </motion.p>

            {/* 3 Metric Badges matching Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mt-6"
            >
              <div className="bg-white/95 backdrop-blur-xs p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-black text-slate-900 mb-0.5">
                  <Users size={14} className="text-[#008744]" />
                  <span>4,200+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500">{isEn ? "Successful Students" : "সফল শিক্ষার্থী"}</div>
              </div>

              <div className="bg-white/95 backdrop-blur-xs p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-black text-[#008744] mb-0.5">
                  <Award size={14} className="text-[#008744]" />
                  <span>92%</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500">{isEn ? "Placement Rate" : "প্লেসমেন্ট রেট"}</div>
              </div>

              <div className="bg-white/95 backdrop-blur-xs p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-black text-slate-900 mb-0.5">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span>4.9/5</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500">{isEn ? "Student Rating" : "শিক্ষার্থী রেটিং"}</div>
              </div>
            </motion.div>

            {/* 5-Star Rating Label */}
            <div className="flex items-center justify-center gap-1 mt-4 text-[11px] font-bold text-amber-600">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-700 ml-1 font-extrabold">{isEn ? "500+ Success Stories" : "৫০০+ সাফল্যের গল্প"}</span>
            </div>

            {/* 4 Interactive Tab Switcher Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
              {[
                { id: "all", label: isEn ? "All Sessions" : "সকল সেশন" },
                { id: "stories", label: isEn ? "Student Stories" : "Student Stories" },
                { id: "feedback", label: isEn ? "Student Feedback" : "Student Feedback" },
                { id: "projects", label: isEn ? "Client Projects" : "Client Projects" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#008744] text-white shadow-md shadow-[#008744]/20 scale-105"
                      : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-2xs"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. TAB CONTENT GRIDS                                                      */}
        {/* ========================================================================= */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-16">
          
          {/* SECTION 1: VIDEO SUCCESS STORIES */}
          {(activeTab === "all" || activeTab === "stories") && (
            <div>
              {activeTab === "all" && (
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#008744]"></span>
                      <span>{isEn ? "Student Video Stories" : "শিক্ষার্থীদের ভিডিও সাফল্যের গল্প"}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{isEn ? "Real documentary stories of career transformation" : "বাস্তব ক্যারিয়ার রূপান্তরের গল্প ও অভিজ্ঞতা"}</p>
                  </div>
                  <button onClick={() => setActiveTab("stories")} className="text-xs font-bold text-[#008744] hover:underline flex items-center gap-1 cursor-pointer">
                    <span>{isEn ? "View All Stories" : "সব গল্প দেখুন"}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {videoStories.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => setSelectedVideo(story)}
                    className="group relative bg-[#091b24] rounded-3xl overflow-hidden shadow-lg border border-slate-800/80 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                  >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091b24] via-black/40 to-black/20" />

                      {/* Top Left: Success Story Badge (Orange Pill matching Screenshot) */}
                      <div className="absolute top-3.5 left-3.5 bg-[#f97316] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                        {story.badge}
                      </div>

                      {/* Top Right: Duration */}
                      <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-0.5 rounded-md">
                        {story.duration}
                      </div>

                      {/* Center: Play Button matching Screenshot */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-13 h-13 rounded-full bg-white/30 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-115 group-hover:bg-[#008744] group-hover:border-[#008744] transition-all duration-300">
                          <Play size={20} className="text-white fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#091b24] via-[#091b24]/90 to-transparent">
                        <h3 className="text-white font-black text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-emerald-300 transition-colors">
                          {story.title}
                        </h3>
                        <div className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-between">
                          <span>{story.studentName}</span>
                          <span className="text-[11px] text-emerald-400 font-semibold">{story.course}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom Strip */}
                    <div className="p-3.5 bg-[#08151c] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span className="truncate">{story.highlight}</span>
                      <span className="text-[#008744] font-bold text-[11px] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        Watch <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 2: CLIENT & CAPSTONE PROJECTS */}
          {(activeTab === "all" || activeTab === "projects") && (
            <div>
              {activeTab === "all" && (
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DE1F26]"></span>
                      <span>{isEn ? "Enterprise Client Projects" : "লাইভ এন্টারপ্রাইজ প্রজেক্টস"}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{isEn ? "Production systems engineered by our capstone students" : "শিক্ষার্থীদের তৈরি রিয়েল-ওয়ার্ল্ড প্রোডাকশন অ্যাপ্লিকেশন"}</p>
                  </div>
                  <button onClick={() => setActiveTab("projects")} className="text-xs font-bold text-[#008744] hover:underline flex items-center gap-1 cursor-pointer">
                    <span>{isEn ? "View All Projects" : "সব প্রজেক্ট দেখুন"}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clientProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-video overflow-hidden bg-slate-100">
                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 bg-[#008744] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md shadow-xs">
                          {proj.badge}
                        </span>
                      </div>

                      <div className="p-5">
                        <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1.5 leading-snug">{proj.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">{proj.desc}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {proj.tech.slice(0, 3).map((t, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="truncate max-w-[150px]">{proj.authors}</span>
                      <div className="flex items-center gap-2">
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="p-1 rounded-lg hover:bg-slate-200 text-slate-600" title="GitHub Code">
                          <GithubIcon size={14} />
                        </a>
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="p-1 rounded-lg hover:bg-emerald-100 text-[#008744]" title="Live Preview">
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: WRITTEN STUDENT FEEDBACK */}
          {(activeTab === "all" || activeTab === "feedback") && (
            <div>
              {activeTab === "all" && (
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span>{isEn ? "Student Feedback & Reviews" : "শিক্ষার্থীদের লিখিত রিভিউ ও মতামত"}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{isEn ? "Genuine reviews from alumni placed at top tech companies" : "টপ টেক কোম্পানিতে প্লেসমেন্ট পাওয়া শিক্ষার্থীদের মতামত"}</p>
                  </div>
                  <button onClick={() => setActiveTab("feedback")} className="text-xs font-bold text-[#008744] hover:underline flex items-center gap-1 cursor-pointer">
                    <span>{isEn ? "View All Feedback" : "সব রিভিউ দেখুন"}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {studentFeedbacks.map((fb) => (
                  <div
                    key={fb.id}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,135,68,0.08)] hover:border-[#008744]/40 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Avatar & Rating */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={fb.avatar}
                            alt={fb.name}
                            className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-xs"
                          />
                          <div>
                            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">{fb.name}</h4>
                            <div className="text-[11px] font-bold text-[#008744]">{fb.role}</div>
                          </div>
                        </div>

                        <div className="flex items-center text-amber-400">
                          {[...Array(fb.rating)].map((_, i) => (
                            <Star key={i} size={12} className="fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Verified Placement Badge */}
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#edf9f6] text-[#008744] border border-[#aeead9] px-2.5 py-0.5 rounded-lg mb-3">
                        <CheckCircle2 size={12} />
                        <span>{fb.badge}</span>
                      </div>

                      {/* Feedback Quote */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal italic relative">
                        "{fb.feedback}"
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{fb.course}</span>
                      <span className="text-[#008744] font-bold">Verified Graduate</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>

        {/* ========================================================================= */}
        {/* 3. BOTTOM CTA: YOUR SUCCESS STORY COULD BE NEXT                           */}
        {/* ========================================================================= */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mb-16">
          <div className="bg-gradient-to-r from-[#eef9f5] via-[#f5fbf8] to-[#eef9f5] border border-[#bce8d9] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block mb-2">
                {isEn ? "START YOUR JOURNEY" : "আপনার যাত্রা শুরু করুন"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
                {isEn ? "Your Success Story Could Be Next!" : "আপনার সাফল্যের গল্পটি হতে পারে পরবর্তী!"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {isEn
                  ? "Join us today and start your career transformation journey with our expert-led courses, real-world client projects, and dedicated 1-on-1 mentorship."
                  : "আমাদের প্রফেশনাল কোর্স ও ১-অন-১ মেন্টরশিপের সাথে আজই যুক্ত হোন এবং আপনার টেক ক্যারিয়ারকে নিয়ে যান এক অনন্য উচ্চতায়।"}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/courses"
                  className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md shadow-[#008744]/25 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>{isEn ? "Explore All Courses" : "সকল কোর্স দেখুন"}</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="https://wa.me/8801712345678?text=Hello%2C%20I%20want%20to%20learn%20about%20your%20courses%20and%20placement"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200/90 px-6 py-3 rounded-xl font-bold text-xs shadow-2xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <FaWhatsapp size={15} className="text-[#25D366]" />
                  <span>{isEn ? "WhatsApp Admissions Desk" : "হোয়াটসঅ্যাপে পরামর্শ নিন"}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. VIDEO PLAYER MODAL                                                     */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-800 relative"
              >
                <div className="flex items-center justify-between p-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#008744]"></span>
                    <h3 className="text-sm font-bold text-white truncate max-w-lg">{selectedVideo.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="relative aspect-video bg-black">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
                  <span>{selectedVideo.studentName} • {selectedVideo.role}</span>
                  <span className="text-emerald-400 font-semibold">{selectedVideo.course}</span>
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
