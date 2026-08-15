"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Clock, Users, Star, ArrowRight, CheckCircle2, 
  Sparkles, Code2, Cpu, Cloud, Shield, Smartphone, Layers, 
  Search, ChevronDown, Check, X, Award, Zap, Briefcase, 
  PlayCircle, Flame, ArrowUpRight, CheckCheck, Compass
} from "lucide-react";

export default function CoursesPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<any>(null);
  const [isEnrollSuccess, setIsEnrollSuccess] = useState(false);

  const categories = [
    { id: "all", name: isEn ? "All Tracks" : "সকল ট্র্যাক", icon: Layers, count: "6 Programs" },
    { id: "web", name: isEn ? "Full-Stack Web" : "ফুল-স্ট্যাক ওয়েব", icon: Code2, count: "2 Programs" },
    { id: "ai", name: isEn ? "AI & Agents" : "এআই ও এজেন্টস", icon: Cpu, count: "1 Program" },
    { id: "cloud", name: isEn ? "DevOps & Cloud" : "ডেভঅপ্স ও ক্লাউড", icon: Cloud, count: "1 Program" },
    { id: "cyber", name: isEn ? "Cyber Security" : "সাইবার সিকিউরিটি", icon: Shield, count: "1 Program" },
    { id: "mobile", name: isEn ? "Mobile Apps" : "মোবাইল অ্যাপস", icon: Smartphone, count: "1 Program" },
  ];

  const courses = [
    {
      id: "fs-nextjs",
      category: "web",
      title: isEn ? "Enterprise Full-Stack Web Engineering" : "এন্টারপ্রাইজ ফুল-স্ট্যাক ওয়েব ইঞ্জিনিয়ারিং",
      subtitle: isEn ? "React 19 • Next.js 15 • TypeScript • Microservices • PostgreSQL" : "রিঅ্যাক্ট ১৯ • নেক্সট.জেএস ১৫ • টাইপস্ক্রিপ্ট • মাইক্রোসার্ভিসেস",
      desc: isEn ? "Build high-throughput distributed web systems, optimize PostgreSQL indexing, implement Redis caching pipelines, and deploy with Docker on AWS." : "রিঅ্যাক্ট, নেক্সট.জেএস, টাইপস্ক্রিপ্ট, পোস্টগ্রেসকিউএল ও মাইক্রোসার্ভিসেস আর্কিটেকচার দিয়ে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি শিখুন।",
      instructor: {
        name: isEn ? "Tanvir Hasan" : "তানভীর হাসান",
        role: isEn ? "Lead Architect (Ex-Grab)" : "লিড আর্কিটেক্ট (সাবেক গ্র্যাব)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
      },
      rating: 4.95,
      reviewsCount: 340,
      duration: isEn ? "6 Months" : "৬ মাস",
      hours: "140+ Hours",
      projectsCount: 12,
      level: isEn ? "Beginner to Advanced" : "বিগিনার থেকে এডভান্সড",
      badge: isEn ? "Flagship Track" : "ফ্ল্যাগশিপ ট্র্যাক",
      badgeColor: "bg-emerald-500",
      accentGrad: "from-emerald-500 via-teal-500 to-cyan-600",
      hoverBorder: "hover:border-emerald-400/80 hover:shadow-[0_22px_50px_rgba(16,185,129,0.15)]",
      tags: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis", "Kafka"],
      price: isEn ? "$280 / ৳25,000" : "৳২৫,০০০",
      syllabus: [
        { module: "Module 1", title: isEn ? "Modern TypeScript 5.x & Advanced Architecture Patterns" : "এডভান্সড টাইপস্ক্রিপ্ট ৫.এক্স ও ডিজাইন প্যাটার্নস" },
        { module: "Module 2", title: isEn ? "Production Next.js 15 Server Components & Dynamic Caching" : "নেক্সট.জেএস ১৫ সার্ভার কম্পোনেন্টস ও ক্যাশিং স্ট্র্যাটেজি" },
        { module: "Module 3", title: isEn ? "PostgreSQL High-Concurrency Tuning, ORMs & Indexing" : "পোস্টগ্রেসকিউএল ডাটাবেস ডিজাইন, ওআরএম ও অপ্টিমাইজেশন" },
        { module: "Module 4", title: isEn ? "Microservices, Secure Auth & Redis Message Queues" : "মাইক্রোসার্ভিসেস, সিকিউর অথেনটিকেশন ও রেডিস কিউ" },
        { module: "Module 5", title: isEn ? "Automated CI/CD, Multi-Stage Docker & AWS Deployment" : "সিআই/সিডি পাইপলাইন, ডকার ও এডব্লিউএস ডেপ্লয়মেন্ট" }
      ]
    },
    {
      id: "ai-llm",
      category: "ai",
      title: isEn ? "Generative AI, LLMs & Autonomous Agents" : "জেনারেটিভ এআই, এলএলএম ও অটোনোমাস এজেন্টস",
      subtitle: isEn ? "PyTorch • LangChain • Vector DBs • RAG • Multi-Agent Systems" : "পাইথর্চ • ল্যাংচেন • ভেক্টর ডাটাবেস • র‍্যাগ পাইপলাইন",
      desc: isEn ? "Develop autonomous AI agents with tools, build enterprise-grade RAG systems with vector similarity search, and fine-tune open-weights models." : "পাইথর্চ, ল্যাংচেন, র‍্যাগ পাইপলাইন ও ফাইন-টিউনিং দিয়ে স্বয়ংক্রিয় এআই এজেন্ট ও বুদ্ধিমান সিস্টেম তৈরি করুন।",
      instructor: {
        name: isEn ? "Dr. Ariful Islam" : "ড. আরিফুল ইসলাম",
        role: isEn ? "Senior AI Research Scientist" : "সিনিয়র এআই রিসার্চ সায়েন্টিস্ট",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      },
      rating: 4.98,
      reviewsCount: 280,
      duration: isEn ? "5 Months" : "৫ মাস",
      hours: "120+ Hours",
      projectsCount: 8,
      level: isEn ? "Intermediate to Pro" : "ইন্টারমিডিয়েট থেকে প্রো",
      badge: isEn ? "AI Frontier" : "এআই ফ্রন্টিয়ার",
      badgeColor: "bg-purple-500",
      accentGrad: "from-purple-500 via-indigo-500 to-blue-600",
      hoverBorder: "hover:border-purple-400/80 hover:shadow-[0_22px_50px_rgba(168,85,247,0.15)]",
      tags: ["Python", "PyTorch", "LangChain", "Vector DBs", "RAG", "CrewAI", "Fine-Tuning"],
      price: isEn ? "$320 / ৳28,000" : "৳২৮,০০০",
      syllabus: [
        { module: "Module 1", title: isEn ? "Deep Learning Fundamentals & Neural Architectures" : "ডিপ লার্নিং ও নিউরাল নেটওয়ার্ক ফাউন্ডেশন" },
        { module: "Module 2", title: isEn ? "Transformers, Attention Mechanisms & LLM Internals" : "ট্রান্সফরমার আর্কিটেকচার ও এলএলএম মেকানিজম" },
        { module: "Module 3", title: isEn ? "Enterprise RAG with Hybrid Vector Indexing (Qdrant, Pinecone)" : "ভেক্টর ডাটাবেস ও প্রোডাকশন র‍্যাগ পাইপলাইন" },
        { module: "Module 4", title: isEn ? "Autonomous Multi-Agent Orchestration (CrewAI & LangGraph)" : "অটোনোমাস মাল্টি-এজেন্ট ফ্রেমওয়ার্ক ও টুল কলিং" },
        { module: "Module 5", title: isEn ? "Model Quantization, LoRA Fine-Tuning & Cloud Scaling" : "মডেল ফাইন-টিউনিং, কোয়ান্টাইজেশন ও ক্লাউড স্কেলিং" }
      ]
    },
    {
      id: "devops-aws",
      category: "cloud",
      title: isEn ? "Cloud Architecture & DevOps Masterclass" : "ক্লাউড আর্কিটেকচার ও ডেভঅপ্স মাস্টারক্লাস",
      subtitle: isEn ? "AWS • Kubernetes • Docker • Terraform • GitOps • Prometheus" : "এডব্লিউএস • কুবারনেটিস • ডকার • টেরাফর্ম • গিটঅপ্স",
      desc: isEn ? "Architect resilient multi-region cloud infrastructure on AWS, automate Kubernetes clusters, write Terraform scripts, and set up Prometheus monitoring." : "এডব্লিউএস ক্লাউড আর্কিটেকচার, কুবারনেটিস ক্লাস্টার ম্যানেজমেন্ট, টেরাফর্ম ও গিটঅপ্স পাইপলাইন আয়ত্ত করুন।",
      instructor: {
        name: isEn ? "Rakib Mahmud" : "রাকিব মাহমুদ",
        role: isEn ? "Head of Cloud & Platform" : "হেড অব ক্লাউড ও প্ল্যাটফর্ম",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      rating: 4.92,
      reviewsCount: 190,
      duration: isEn ? "4.5 Months" : "৪.৫ মাস",
      hours: "110+ Hours",
      projectsCount: 10,
      level: isEn ? "Intermediate" : "ইন্টারমিডিয়েট",
      badge: isEn ? "High Placement" : "উচ্চ প্লেসমেন্ট",
      badgeColor: "bg-cyan-500",
      accentGrad: "from-cyan-500 via-blue-500 to-indigo-600",
      hoverBorder: "hover:border-cyan-400/80 hover:shadow-[0_22px_50px_rgba(6,182,212,0.15)]",
      tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Prometheus", "Linux"],
      price: isEn ? "$300 / ৳26,000" : "৳২৬,০০০",
      syllabus: [
        { module: "Module 1", title: isEn ? "Linux Internals, Networking Protocols & Shell Automation" : "লিনাক্স ইন্টারনালস ও নেটওয়ার্কিং প্রোটোকল" },
        { module: "Module 2", title: isEn ? "Docker Multi-Stage Builds & Container Security" : "ডকার ও মাল্টি-স্টেজ কন্টেইনারাইজেশন" },
        { module: "Module 3", title: isEn ? "Production Kubernetes (EKS), Ingress & Helm Charts" : "কুবারনেটিস প্রোডাকশন ক্লাস্টার ও হেলম চার্টস" },
        { module: "Module 4", title: isEn ? "Terraform Infrastructure as Code (IaC) on AWS" : "টেরাফর্ম দিয়ে ক্লাউড ইনফ্রাস্ট্রাকচার কোডিং" },
        { module: "Module 5", title: isEn ? "24/7 Observability with Prometheus, Grafana & Loki" : "প্রমিথিউস ও গ্রাফানা দিয়ে সিস্টেম মনিটরিং" }
      ]
    },
    {
      id: "mobile-flutter",
      category: "mobile",
      title: isEn ? "Cross-Platform Mobile App Engineering" : "ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ ইঞ্জিনিয়ারিং",
      subtitle: isEn ? "Flutter • Dart 3 • Clean Architecture • Riverpod • WebRTC" : "ফ্লাটার • ডার্ট ৩ • ক্লিন আর্কিটেকচার • রিভারপড",
      desc: isEn ? "Build production mobile apps for iOS & Android with smooth 60fps animations, Riverpod state management, offline SQLite sync, and WebRTC engines." : "ফ্লাটার ও ডার্ট দিয়ে চমৎকার ইউআই এবং পারফরম্যান্স সম্পন্ন আইওএস ও অ্যান্ড্রয়েড অ্যাপ তৈরি করুন।",
      instructor: {
        name: isEn ? "Shamim Reza" : "শামীম রেজা",
        role: isEn ? "Staff Mobile Engineer" : "স্টাফ মোবাইল ইঞ্জিনিয়ার",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
      },
      rating: 4.90,
      reviewsCount: 220,
      duration: isEn ? "5 Months" : "৫ মাস",
      hours: "115+ Hours",
      projectsCount: 9,
      level: isEn ? "Beginner to Pro" : "বিগিনার থেকে প্রো",
      badge: isEn ? "Certified" : "সার্টিফাইড",
      badgeColor: "bg-blue-500",
      accentGrad: "from-blue-500 via-indigo-500 to-violet-600",
      hoverBorder: "hover:border-blue-400/80 hover:shadow-[0_22px_50px_rgba(59,130,246,0.15)]",
      tags: ["Flutter", "Dart", "Clean Architecture", "Riverpod", "Firebase", "WebRTC"],
      price: isEn ? "$260 / ৳22,000" : "৳২২,০০০",
      syllabus: [
        { module: "Module 1", title: isEn ? "Dart 3.x Deep Dive, Pattern Matching & OOP" : "ডার্ট ৩.এক্স ও অবজেক্ট ওরিয়েন্টেড ডিজাইন" },
        { module: "Module 2", title: isEn ? "Flutter UI Engine, Complex Custom Painters & Curves" : "ফ্লাটার ইউআই, ফ্লুইড অ্যানিমেশন ও লেআউট" },
        { module: "Module 3", title: isEn ? "State Management with Riverpod 2.x & Clean Architecture" : "রিভারপড স্টেট ম্যানেজমেন্ট ও ক্লিন আর্কিটেকচার" },
        { module: "Module 4", title: isEn ? "REST APIs, GraphQL, Local SQLite & Offline-First Sync" : "রেস্ট এপিআই, গ্রাফকিউএল ও অফলাইন ডাটাবেস" },
        { module: "Module 5", title: isEn ? "App Store & Google Play Publishing & CI Pipelines" : "অ্যাপ স্টোর ও গুগল প্লে স্টোর পাবলিশিং" }
      ]
    },
    {
      id: "cyber-security",
      category: "cyber",
      title: isEn ? "Ethical Hacking & Defensive Security" : "এথিক্যাল হ্যাকিং ও ডিফেন্সিভ সাইবার সিকিউরিটি",
      subtitle: isEn ? "Penetration Testing • OWASP Top 10 • Metasploit • SOC" : "পেনিট্রেশন টেস্টিং • ওওয়াস্প • মেটাস্প্লয়েট • এসওসি",
      desc: isEn ? "Master offensive penetration testing, analyze network packets with Wireshark, exploit web vulnerabilities, and configure defensive SOC monitoring." : "পেনিট্রেশন টেস্টিং, নেটওয়ার্ক ডিফেন্স, ওয়েব ভালনারেবিলিটি অ্যাসেসমেন্ট ও সিকিউর কোডিং স্ট্র্যাটেজি শিখুন।",
      instructor: {
        name: isEn ? "Faisal Ahmed" : "ফয়সাল আহমেদ",
        role: isEn ? "CEH, OSCP Red Team Lead" : "সিইএইচ, ওএসিসিপি রেড টিম লিড",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
      },
      rating: 4.96,
      reviewsCount: 160,
      duration: isEn ? "5.5 Months" : "৫.৫ মাস",
      hours: "130+ Hours",
      projectsCount: 7,
      level: isEn ? "Intermediate to Advanced" : "ইন্টারমিডিয়েট থেকে এডভান্সড",
      badge: isEn ? "Specialized" : "স্পেশালাইজড",
      badgeColor: "bg-red-500",
      accentGrad: "from-red-500 via-rose-500 to-pink-600",
      hoverBorder: "hover:border-red-400/80 hover:shadow-[0_22px_50px_rgba(239,68,68,0.15)]",
      tags: ["Kali Linux", "Wireshark", "Burp Suite", "OWASP", "Metasploit", "SOC"],
      price: isEn ? "$330 / ৳29,000" : "৳২৯,০০০",
      syllabus: [
        { module: "Module 1", title: isEn ? "Network Protocols, Port Scanning & Wireshark Analysis" : "নেটওয়ার্ক প্রোটোকল ও প্যাকেট অ্যানালাইসিস" },
        { module: "Module 2", title: isEn ? "OWASP Top 10 Web Vulnerability Exploitation" : "ওওয়াস্প টপ ১০ ওয়েব সিকিউরিটি ভালনারেবিলিটি" },
        { module: "Module 3", title: isEn ? "Network Penetration Testing & Privilege Escalation" : "পেনিট্রেশন টেস্টিং মেথডোলজি ও টুলস" },
        { module: "Module 4", title: isEn ? "SOC Operations, SIEM Configuration & Threat Hunting" : "এসওসি অপারেশনস ও থ্রেট হান্টিং" }
      ]
    },
    {
      id: "uiux-design",
      category: "web",
      title: isEn ? "Advanced UI/UX & Design Systems" : "এডভান্সড ইউআই/ইউএক্স ও ডিজাইন সিস্টেমস",
      subtitle: isEn ? "Figma • Design Tokens • User Research • Interactive Prototyping" : "ফিগা • ডিজাইন টোকেনস • ইউজার রিসার্চ • প্রোটোটাইপিং",
      desc: isEn ? "Master user research methodologies, Figma auto-layout, interactive variables, scalable design tokens, and smooth developer handoffs." : "ফিগমায় প্রফেশনাল ডিজাইন সিস্টেম, মাইক্রো-ইন্টারঅ্যাকশন, ইউজার রিসার্চ ও প্রোটোটাইপিং শিখুন।",
      instructor: {
        name: isEn ? "Nabila Chowdhury" : "নাবিলা চৌধুরী",
        role: isEn ? "Lead Product Designer" : "লিড প্রোডাক্ট ডিজাইনার",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
      },
      rating: 4.88,
      reviewsCount: 180,
      duration: isEn ? "4 Months" : "৪ মাস",
      hours: "90+ Hours",
      projectsCount: 6,
      level: isEn ? "All Levels" : "সকল স্তরের জন্য",
      badge: isEn ? "Creative" : "ক্রিয়েটিভ",
      badgeColor: "bg-amber-500",
      accentGrad: "from-amber-500 via-orange-500 to-rose-600",
      hoverBorder: "hover:border-amber-400/80 hover:shadow-[0_22px_50px_rgba(245,158,11,0.15)]",
      tags: ["Figma", "Design Systems", "User Personas", "Prototyping", "Design Tokens"],
      price: isEn ? "$220 / ৳18,000" : "৳১৮,০০০",
      syllabus: [
        { module: "Module 1", title: isEn ? "Design Thinking, User Personas & Journey Mapping" : "ডিজাইন থিংকিং ও ইউজার জার্নি ম্যাপিং" },
        { module: "Module 2", title: isEn ? "Figma Auto Layout, Variables & Component Sets" : "ফিগা অটো-লেআউট ও কম্পোনেন্ট ভ্যারিয়েবলস" },
        { module: "Module 3", title: isEn ? "Building Scalable Enterprise Design Systems" : "স্কেলেবল এন্টারপ্রাইজ ডিজাইন সিস্টেম তৈরি" },
        { module: "Module 4", title: isEn ? "High-Fidelity Interactive Prototyping & Handoff" : "ইন্টারেক্টিভ প্রোটোটাইপিং ও ডেভেলপার হ্যান্ডঅফ" }
      ]
    }
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = activeCategory === "all" || c.category === activeCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow pt-6 pb-24">
        
        {/* COURSES INTERACTIVE 2-COLUMN HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#071726] via-[#0b2b46] to-[#04101c] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800">
          {/* Ambient Cyber Beams */}
          <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-emerald-500/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-[96rem] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline & Search (7 Cols) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-[#34d399]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#34d399] animate-ping" />
                  <span>{isEn ? "Live Engineering Cohorts Open" : "লাইভ ইঞ্জিনিয়ারিং ব্যাচে ভর্তি চলছে"}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-6"
                >
                  {t.coursesPage?.title || "Explore Our Professional Tech Programs"}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
                >
                  {t.coursesPage?.subtitle || "Practical, project-centric courses designed and taught by senior software engineers."}
                </motion.p>

                {/* Live Interactive Search */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.22 }}
                  className="max-w-xl"
                >
                  <div className="relative flex items-center bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-1.5 shadow-2xl focus-within:border-[#00a884] focus-within:ring-2 focus-within:ring-[#00a884]/40 transition-all">
                    <Search size={20} className="ml-3.5 text-slate-300 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.coursesPage?.searchPlaceholder || "Search courses (e.g. Next.js, AI, Python)..."}
                      className="w-full bg-transparent pl-3 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none font-normal"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")} className="mr-2 text-slate-400 hover:text-white p-1">
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Interactive Live Cohort Hub Card (5 Cols) */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-7 border border-white/20 shadow-2xl space-y-5 text-left relative overflow-hidden"
                >
                  {/* Top Highlight Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1.5">
                      <Flame size={14} />
                      <span>{isEn ? "Upcoming Live Batch" : "আসন্ন লাইভ ব্যাচ"}</span>
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Batch #12</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">{isEn ? "Fall 2026 Engineering Cohort" : "ফল ২০২৬ ইঞ্জিনিয়ারিং কোহর্ট"}</h3>
                    <p className="text-xs text-slate-300 mt-1 font-normal leading-relaxed">
                      {isEn ? "Interactive live weekend & weekday evening sessions with 1-on-1 code reviews." : "সরাসরি সিনিয়র ইঞ্জিনিয়ারদের সাথে লাইভ ক্লাস ও কোড রিভিউ।"}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-black/30 rounded-2xl border border-white/5">
                      <div className="text-[11px] text-slate-400">{isEn ? "Live Project Modules" : "রিয়েল প্রজেক্ট"}</div>
                      <div className="text-lg font-black text-[#34d399] mt-0.5">12+ Projects</div>
                    </div>
                    <div className="p-3 bg-black/30 rounded-2xl border border-white/5">
                      <div className="text-[11px] text-slate-400">{isEn ? "Placement Support" : "প্লেসমেন্ট সাপোর্ট"}</div>
                      <div className="text-lg font-black text-cyan-300 mt-0.5">120+ Partners</div>
                    </div>
                  </div>

                  {/* Student Avatars & Mentorship Seal */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <img className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Student" />
                        <img className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Student" />
                        <img className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="Student" />
                      </div>
                      <span className="font-bold text-slate-300">6,200+ Alumni</span>
                    </div>
                    <span className="text-amber-400 font-bold font-mono">4.95 ★★★★★</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* CATEGORY TRACKS NAVIGATOR */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 -mt-7 relative z-20">
          <div className="bg-white/95 backdrop-blur-2xl p-2 sm:p-3 rounded-2xl border border-slate-200 shadow-[0_12px_35px_rgba(0,0,0,0.06)] flex items-center overflow-x-auto no-scrollbar gap-2 sm:gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#00a884] text-white shadow-md shadow-[#00a884]/25 ring-2 ring-[#00a884]/30"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  <Icon size={16} />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${isActive ? "bg-black/20 text-white" : "bg-slate-200 text-slate-600"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* COURSE GRID CARDS */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>{isEn ? "Featured Engineering Tracks" : "প্রফেশনাল ইঞ্জিনিয়ারিং ট্র্যাকস"}</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                  {filteredCourses.length}
                </span>
              </h2>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <Search size={40} className="mx-auto text-slate-300 mb-3" />
              <h3 className="text-lg font-bold text-slate-700">{isEn ? "No programs found" : "কোনো কোর্স পাওয়া যায়নি"}</h3>
              <p className="text-sm text-slate-400 mt-1">{isEn ? "Try searching for a different keyword or category" : "অন্য কোনো কি-ওয়ার্ড দিয়ে সার্চ করে দেখুন"}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.018, 
                    transition: { duration: 0.15, ease: "easeOut" } 
                  }}
                  className={`group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] ${course.hoverBorder} transition-all duration-150 overflow-hidden flex flex-col justify-between cursor-pointer`}
                >
                  {/* Glowing Top Accent Strip */}
                  <div className={`h-2 w-full bg-gradient-to-r ${course.accentGrad}`} />

                  {/* Header Content */}
                  <div className="p-6 sm:p-7">
                    
                    {/* Top Row: Badge & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white ${course.badgeColor} shadow-sm`}>
                        {course.badge}
                      </span>
                      <div className="flex items-center space-x-1.5 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full text-xs font-bold text-amber-700">
                        <Star size={13} className="fill-amber-500 text-amber-500" />
                        <span>{course.rating}</span>
                        <span className="text-[10px] text-amber-600/70 font-normal">({course.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0b2b46] transition-colors leading-snug mb-1.5">
                      {course.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#00a884] mb-3">
                      {course.subtitle}
                    </div>

                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-5 font-normal">
                      {course.desc}
                    </p>

                    {/* Instructor Row */}
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-5">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-10 h-10 rounded-xl object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-800">{course.instructor.name}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{course.instructor.role}</div>
                      </div>
                    </div>

                    {/* Info Metrics */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium mb-5">
                      <div className="flex items-center space-x-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <Clock size={14} className="text-[#00a884]" />
                        <span>{course.duration} ({course.hours})</span>
                      </div>
                      <div className="flex items-center space-x-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <Briefcase size={14} className="text-blue-500" />
                        <span>{course.projectsCount} {isEn ? "Live Projects" : "প্রজেক্ট"}</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {course.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] font-semibold bg-slate-100 group-hover:bg-slate-200/70 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/50 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Footer Action Strip */}
                  <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{isEn ? "Total Tuition" : "কোর্স ফি"}</div>
                      <div className="text-lg font-black text-slate-900">{course.price}</div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedCourseForModal(course)}
                        className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#00a884] bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-sm cursor-pointer"
                      >
                        {isEn ? "Syllabus" : "সিলেবাস"}
                      </button>

                      <button
                        onClick={() => {
                          setSelectedCourseForModal(course);
                          setIsEnrollSuccess(false);
                        }}
                        className="bg-[#00a884] hover:bg-[#009473] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-[#00a884]/25 flex items-center space-x-1.5 transition-all cursor-pointer"
                      >
                        <span>{isEn ? "Enroll" : "ভর্তি হন"}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* SYLLABUS & ENROLL MODAL */}
        <AnimatePresence>
          {selectedCourseForModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCourseForModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
              >
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center space-x-2 text-xs font-bold text-[#00a884] uppercase tracking-wider mb-2">
                  <BookOpen size={15} />
                  <span>{isEn ? "Course Syllabus & Overview" : "কোর্স সিলেবাস ও বিস্তারিত"}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  {selectedCourseForModal.title}
                </h3>
                <div className="text-xs font-mono text-[#00a884] font-bold mb-3">{selectedCourseForModal.subtitle}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {selectedCourseForModal.desc}
                </p>

                {/* Modules List */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {isEn ? "What You Will Master" : "কারিকুলাম মডিউলসমূহ"}
                  </div>
                  {selectedCourseForModal.syllabus.map((mod: any, i: number) => (
                    <div key={i} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-[11px] font-mono font-bold text-slate-400">{mod.module}</div>
                        <div className="text-sm font-bold text-slate-800">{mod.title}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modal Footer */}
                <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{isEn ? "Investment / Tuition" : "মোট কোর্স ফি"}</div>
                    <div className="text-xl font-black text-white">{selectedCourseForModal.price}</div>
                  </div>

                  {isEnrollSuccess ? (
                    <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm bg-emerald-500/20 px-4 py-2.5 rounded-xl border border-emerald-500/30">
                      <CheckCircle2 size={18} />
                      <span>{isEn ? "Enrollment Requested!" : "আবেদন সফল হয়েছে!"}</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEnrollSuccess(true)}
                      className="w-full sm:w-auto bg-[#00a884] hover:bg-[#009473] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#00a884]/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    >
                      <Zap size={16} />
                      <span>{isEn ? "Proceed to Admission" : "ভর্তি নিশ্চিত করুন"}</span>
                    </button>
                  )}
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
