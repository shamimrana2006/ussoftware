"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, ExternalLink, Sparkles, Layers, Cpu, Smartphone, 
  Cloud, X, Star, Zap, Eye,
  Terminal, Activity, Radio
} from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: "all", name: isEn ? "All Deployments" : "সকল প্রজেক্ট", icon: Layers },
    { id: "ai", name: isEn ? "AI & Autonomous Systems" : "এআই ও অটোনোমাস এজেন্টস", icon: Cpu },
    { id: "web", name: isEn ? "Enterprise SaaS & Web" : "এন্টারপ্রাইজ SaaS ও ওয়েব", icon: Code2 },
    { id: "cloud", name: isEn ? "Cloud & DevOps Platforms" : "ক্লাউড ও ডেভঅপ্স প্ল্যাটফর্ম", icon: Cloud },
    { id: "mobile", name: isEn ? "Cross-Platform Mobile" : "মোবাইল অ্যাপস", icon: Smartphone },
  ];

  const flagshipProject = {
    id: "ai-nexus",
    category: "ai",
    title: isEn ? "NexusAI — Enterprise Autonomous Workflow Orchestration" : "নেক্সাস এআই — এন্টারপ্রাইজ স্বয়ংক্রিয় ওয়ার্কফ্লো প্ল্যাটফর্ম",
    desc: isEn ? "A distributed multi-agent system executing automated financial audits, code analysis, and document intelligence using LangChain, Qdrant vector memory, and streaming WebSockets." : "একটি মাল্টি-এজেন্ট প্ল্যাটফর্ম যা জটিল ডাটা পাইপলাইন, কোড জেনারেশন ও ফিন্যান্সিয়াল এনালাইসিস স্বয়ংক্রিয়ভাবে সম্পাদন করে।",
    badge: isEn ? "Flagship Production System" : "ফ্ল্যাগশিপ প্রোডাকশন সিস্টেম",
    badgeColor: "bg-[#DE1F26]",
    authors: isEn ? "Built by AI Fellowship Cohort 4" : "এআই ফেলোশিপ ব্যাচ ৪ এর শিক্ষার্থী",
    stars: 245,
    users: "18,500+ Active Users",
    latency: "45ms Query Latency",
    reliability: "99.99% Uptime",
    techStack: ["Next.js 15", "Python", "FastAPI", "LangChain", "Qdrant Vector DB", "Docker", "Tailwind CSS"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    caseStudy: isEn ? "Eliminated manual data reconciliation by 85% across 4 enterprise financial institutions. Built with distributed event streaming, fault-tolerant agent rollback, and real-time token telemetry." : "ম্যানুয়াল ডাটা প্রসেসিং সময় ৮৫% কমিয়ে এনেছে। এতে রয়েছে রিয়েল-টাইম ওয়েব-সকেট স্ট্রিমিং ও ভেক্টর সার্চ।"
  };

  const bentoProjects = [
    {
      id: "cloud-pulse",
      category: "cloud",
      title: isEn ? "CloudPulse Observability" : "ক্লাউডপাল্স অবজারভেবিলিটি",
      desc: isEn ? "Multi-cloud Kubernetes cluster telemetry, automated pod auto-scaler, and sub-second Prometheus anomaly detection." : "কুবারনেটিস ক্লাস্টারের জন্য রিয়েল-টাইম সার্ভার মনিটরিং, অ্যানোমালি ডিটেকশন ও স্বয়ংক্রিয় অটো-স্কেলিং প্ল্যাটফর্ম।",
      badge: "Cloud SaaS",
      badgeColor: "bg-[#008744]",
      color: "from-[#008744] to-emerald-800",
      accentBorder: "hover:border-[#008744]/80 hover:shadow-[0_20px_50px_rgba(0,135,68,0.18)]",
      authors: isEn ? "DevOps Platform Team" : "ডেভঅপ্স ইঞ্জিনিয়ারিং টিম",
      stars: 120,
      techStack: ["Go", "Kubernetes", "Prometheus", "Grafana", "Terraform", "React"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      caseStudy: isEn ? "Monitors over 500+ microservices with sub-second latency alerts and predictive metric modeling using Go and eBPF." : "৫০০+ মাইক্রোসার্ভিস ইন্সট্যান্স সাব-সেকেন্ড অ্যালার্টের সাথে ২৪/৭ ট্র্যাক করতে সক্ষম।"
    },
    {
      id: "pay-sphere",
      category: "web",
      title: isEn ? "PaySphere Global Escrow" : "পে-স্ফিয়ার গ্লোবাল এসক্রো",
      desc: isEn ? "High-concurrency multi-currency payment engine with automated double-entry ledger and fraud prevention." : "মাল্টি-কারেন্সি পেআউট, অটোমেটেড ইনভয়েস ও ফ্রড ডিটেকশন সমন্বিত একটি হাই-স্পিড পেমেন্ট প্রসেসিং গেটওয়ে।",
      badge: "FinTech Pro",
      badgeColor: "bg-[#DE1F26]",
      color: "from-[#DE1F26] to-rose-800",
      accentBorder: "hover:border-[#DE1F26]/80 hover:shadow-[0_20px_50px_rgba(222,31,38,0.18)]",
      authors: isEn ? "Full-Stack Cohort 7" : "ফুল-স্ট্যাক ব্যাচ ৭",
      stars: 210,
      techStack: ["Next.js 15", "Node.js", "PostgreSQL", "Prisma", "Redis", "Stripe API"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      caseStudy: isEn ? "Processes over 10,000+ daily transactions with 99.99% reliability using pessimistic locking on transactions." : "প্রতিদিন ১০,০০০+ ট্রানজাকশন নিখুঁতভাবে প্রসেস করে।"
    },
    {
      id: "med-link",
      category: "mobile",
      title: isEn ? "MedLink Telemedicine" : "মেডলিংক টেলিমেডিসিন",
      desc: isEn ? "Cross-platform encrypted WebRTC consultation and digital prescription delivery on iOS and Android." : "ডাক্তার ও রোগীদের মধ্যে সরাসরি এনক্রিপ্টেড ভিডিও কনসালটেশন ও ডিজিটাল প্রেসক্রিপশন ডেলিভারি অ্যাপ।",
      badge: "Mobile App",
      badgeColor: "bg-[#008744]",
      color: "from-[#008744] to-teal-800",
      accentBorder: "hover:border-[#008744]/80 hover:shadow-[0_20px_50px_rgba(0,135,68,0.18)]",
      authors: isEn ? "Mobile Fellowship Cohort 2" : "মোবাইল ফেলোশিপ ব্যাচ ২",
      stars: 185,
      techStack: ["Flutter", "Dart", "WebRTC", "Firebase", "Riverpod", "Node.js"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      caseStudy: isEn ? "Provides HIPAA-compliant end-to-end encrypted video calling and instant doctor appointment booking." : "আইওএস ও অ্যান্ড্রয়েডে এন্ড-টু-এন্ড এনক্রিপ্টেড ভিডিও কল ও ইনস্ট্যান্ট বুকিং।"
    },
    {
      id: "code-arena",
      category: "web",
      title: isEn ? "CodeArena Cloud IDE" : "কোড এরিনা ক্লাউড কম্পাইলার",
      desc: isEn ? "In-browser collaborative code editor with real-time cursor sync and instant compilation in 20+ languages." : "ব্রাউজারে রিয়েল-টাইম কোড শেয়ারিং, ২০+ ভাষায় ইনস্ট্যান্ট কম্পাইলেশন ও এআই অ্যাসিস্ট্যান্ট প্ল্যাটফর্ম।",
      badge: "Developer Tool",
      badgeColor: "bg-[#DE1F26]",
      color: "from-[#DE1F26] to-rose-700",
      accentBorder: "hover:border-[#DE1F26]/80 hover:shadow-[0_20px_50px_rgba(222,31,38,0.18)]",
      authors: isEn ? "Open Source Team" : "ওপেন সোর্স কোর টিম",
      stars: 310,
      techStack: ["Next.js", "Monaco Editor", "Docker Sandbox", "WebSockets", "Go", "Redis"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      caseStudy: isEn ? "Executes isolated sandbox code in lightweight secure micro-containers within 200ms of user submission." : "২০০ মিলিসেকেন্ডের মধ্যে যেকোনো প্রোগ্রামিং ল্যাঙ্গুয়েজের কোড ক্লাউড স্যান্ডবক্সে রান করায়।"
    }
  ];

  const filteredBento = bentoProjects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow pt-6 pb-24">
        
        {/* PROJECTS INTERACTIVE TERMINAL HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#08121a] via-[#0b1e19] to-[#050b10] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800">
          <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-[#008744]/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-[#DE1F26]/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

          <div className="max-w-[96rem] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-[#008744]/15 border border-[#008744]/35 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-emerald-300"
                >
                  <Terminal size={14} className="text-[#DE1F26]" />
                  <span>{t.projectsPage?.badge || "STUDENT & PRODUCTION SHOWCASE"}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-6"
                >
                  {t.projectsPage?.title || "Real Software Built by Our Engineers"}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
                >
                  {t.projectsPage?.subtitle || "Discover enterprise systems, SaaS platforms, and AI applications created by our graduates and engineering team."}
                </motion.p>

                {/* Metric Chips */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="flex flex-wrap items-center gap-3 text-xs font-mono"
                >
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center space-x-2 text-emerald-300">
                    <Radio size={14} className="animate-pulse text-[#008744]" />
                    <span>120+ Active Deployments</span>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center space-x-2 text-rose-300">
                    <Zap size={14} className="text-[#DE1F26]" />
                    <span>100K+ RPS Throughput</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Interactive Live Terminal Simulator (5 Cols) */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#08121a]/95 backdrop-blur-2xl rounded-3xl p-6 border border-slate-700/80 shadow-2xl space-y-4 font-mono text-xs text-slate-300 relative overflow-hidden"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-[#DE1F26] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#008744] inline-block" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-sans font-bold">us-software-production ~ bash</span>
                    <span className="text-[10px] text-[#008744] font-bold">● LIVE</span>
                  </div>

                  {/* Terminal Logs */}
                  <div className="space-y-2.5 pt-1 text-[11px] sm:text-xs">
                    <div className="text-slate-400">
                      <span className="text-[#008744] font-bold">$</span> git push origin main --tags
                    </div>
                    <div className="text-rose-300">
                      &gt; Compiling Next.js 15 Turbopack bundle...
                    </div>
                    <div className="text-emerald-300">
                      &gt; Initializing Qdrant vector embeddings (1536 dim)...
                    </div>
                    <div className="text-[#008744] font-bold flex items-center gap-1.5">
                      <span>✓</span>
                      <span>Deployment verified across 4 AWS clusters (45ms)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-slate-400">
                      Status: 0 errors • 100% test coverage • 99.99% SLA
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* CATEGORY SELECTOR */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 -mt-7 relative z-20">
          <div className="bg-white/95 backdrop-blur-2xl p-2 sm:p-3 rounded-2xl border border-slate-200 shadow-[0_12px_35px_rgba(0,0,0,0.06)] flex items-center overflow-x-auto no-scrollbar gap-2 sm:gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#08121a] text-white shadow-md shadow-[#08121a]/25 ring-2 ring-[#008744]/40"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-[#008744]" : "text-slate-500"} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* BENTO SHOWCASE SECTION */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16 space-y-8">
          
          {/* 1. LARGE FLAGSHIP BENTO CARD (NexusAI) */}
          {(activeCategory === "all" || activeCategory === "ai") && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-gradient-to-br from-[#08121a] via-[#0b1e19] to-[#050b10] text-white rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#DE1F26]/80 hover:shadow-[0_24px_60px_rgba(222,31,38,0.2)] transition-all duration-150 relative overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#008744]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left info 7 cols */}
                <div className="lg:col-span-7">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white bg-[#DE1F26] shadow-sm">
                      {flagshipProject.badge}
                    </span>
                    <span className="text-xs text-rose-300 font-mono font-bold flex items-center gap-1">
                      <Star size={13} className="fill-[#DE1F26] text-[#DE1F26]" />
                      <span>{flagshipProject.stars} Stars</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 leading-tight tracking-tight">
                    {flagshipProject.title}
                  </h2>
                  <div className="text-xs font-mono text-[#008744] font-bold mb-4">{flagshipProject.authors}</div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {flagshipProject.desc}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {flagshipProject.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-mono font-bold bg-white/10 text-white px-3 py-1 rounded-xl border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="bg-[#008744] hover:bg-[#007038] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-[#008744]/30 flex items-center space-x-2 transition-all cursor-pointer"
                    >
                      <Eye size={15} />
                      <span>{isEn ? "Read Architecture Study" : "কেস স্টাডি দেখুন"}</span>
                    </button>
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-bold text-xs border border-white/20 flex items-center space-x-1.5 transition-all"
                    >
                      <span>{isEn ? "Launch Live App" : "লাইভ অ্যাপ"}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Right Metrics Display 5 cols */}
                <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Telemetry Metrics</span>
                    <Activity size={14} />
                  </div>
                  
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400 font-mono">Active Production Users</div>
                    <div className="text-2xl font-black text-white mt-0.5">{flagshipProject.users}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 bg-black/40 rounded-xl border border-white/5">
                      <div className="text-[10px] text-slate-400 font-mono">Vector Latency</div>
                      <div className="text-lg font-black text-[#008744] mt-0.5">{flagshipProject.latency}</div>
                    </div>
                    <div className="p-3.5 bg-black/40 rounded-xl border border-white/5">
                      <div className="text-[10px] text-slate-400 font-mono">Uptime SLA</div>
                      <div className="text-lg font-black text-rose-300 mt-0.5">{flagshipProject.reliability}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. MEDIUM BENTO GRID (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredBento.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
                whileHover={{ y: -7, scale: 1.015, transition: { duration: 0.15, ease: "easeOut" } }}
                className={`group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_rgba(0,0,0,0.1)] ${project.accentBorder} transition-all duration-150 flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white ${project.badgeColor} shadow-sm`}>
                      {project.badge}
                    </span>
                    <div className="flex items-center space-x-1 text-xs font-mono font-bold text-slate-500">
                      <Star size={13} className="text-[#DE1F26] fill-[#DE1F26]" />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#08121a] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#008744] mb-3">{project.authors}</div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-5 font-normal">
                    {project.desc}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-slate-700 hover:text-[#008744] flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Eye size={15} />
                    <span>{isEn ? "Case Study" : "কেস স্টাডি"}</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="GitHub Code"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#008744] hover:bg-[#007038] text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md shadow-[#008744]/20 flex items-center space-x-1.5 transition-all"
                    >
                      <span>{isEn ? "Live Demo" : "লাইভ ডেমো"}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

        {/* CASE STUDY MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
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
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center space-x-2 text-xs font-bold text-[#008744] uppercase tracking-wider mb-2">
                  <Sparkles size={15} />
                  <span>{isEn ? "Architecture & Production Case Study" : "আর্কিটেকচার ও কেস স্টাডি"}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {selectedProject.title}
                </h3>
                <div className="text-xs font-bold text-slate-400 mb-4">{selectedProject.authors}</div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm text-slate-700 leading-relaxed mb-6">
                  {selectedProject.caseStudy}
                </div>

                {/* Tech Stack in Modal */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {isEn ? "Technologies Leveraged" : "ব্যবহৃত টেকনোলজি"}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech: string, i: number) => (
                      <span key={i} className="bg-[#008744]/10 text-[#008744] text-xs font-bold px-3 py-1 rounded-xl border border-[#008744]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Footer */}
                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>{isEn ? "View Repository" : "গিটহাব রিপোজিটরি"}</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#008744] hover:bg-[#009473] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-[#008744]/25 transition-all"
                  >
                    <span>{isEn ? "Open Live Application" : "লাইভ অ্যাপ দেখুন"}</span>
                    <ExternalLink size={15} />
                  </a>
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
