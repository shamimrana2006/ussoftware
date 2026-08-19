"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, TrendingUp, DollarSign, CheckCircle2, 
  ArrowRight, Briefcase, ChevronRight, Zap, Target,
  Sparkles, Layers, Cpu, Globe, Smartphone, Check
} from "lucide-react";

export default function HomeCareerSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [activePathIndex, setActivePathIndex] = useState(0);

  const careerPaths = [
    {
      id: "fullstack",
      icon: Globe,
      title: isEn ? "Full-Stack Web Architect" : "ফুল-স্ট্যাক ওয়েব আর্কিটেক্ট",
      salary: isEn ? "$65,000 – $140,000 / yr" : "৳৭০,০০০ – ৳২,৫০,০০০ / মাস",
      demand: isEn ? "Extremely High (98%)" : "সর্বোচ্চ চাহিদা (৯৮%)",
      summary: isEn 
        ? "Design and scale end-to-end web applications, master React/Next.js frontends, microservices APIs, and cloud database optimization."
        : "সম্পূর্ণ ওয়েব সিস্টেম আর্কিটেকচার, ফ্রন্টএন্ড, ব্যাকএন্ড এপিআই ও ক্লাউড ডাটাবেস সমন্বয়ে হাই-স্কেল সফটওয়্যার ডিজাইন।",
      roadmap: [
        { stage: "01", title: isEn ? "Frontend Mastery" : "ফ্রন্টএন্ড দক্ষতা", desc: "React 19, Next.js 15, TypeScript & Tailwind CSS" },
        { stage: "02", title: isEn ? "Backend Architecture" : "ব্যাকএন্ড আর্কিটেকচার", desc: "Node.js, PostgreSQL, Redis & Event Kafka" },
        { stage: "03", title: isEn ? "Cloud & DevOps" : "ক্লাউড ডেপ্লয়মেন্ট", desc: "Docker, AWS ECS, CI/CD Pipelines & Observability" },
        { stage: "04", title: isEn ? "Architect Placement" : "চাকরি ও পদোন্নতি", desc: "Technical Architecture Interviews & Lead Roles" }
      ],
      hiringRoles: isEn 
        ? ["Senior Full-Stack Engineer", "Frontend Tech Lead", "Backend Systems Engineer", "Solutions Architect"]
        : ["সিনিয়র ফুল-স্ট্যাক ইঞ্জিনিয়ার", "ফ্রন্টএন্ড টেক লিড", "ব্যাকএন্ড সিস্টেম ইঞ্জিনিয়ার", "সলিউশন আর্কিটেক্ট"]
    },
    {
      id: "ai",
      icon: Cpu,
      title: isEn ? "AI & Agentic Systems Engineer" : "এআই ও এজেন্টস ইঞ্জিনিয়ার",
      salary: isEn ? "$80,000 – $160,000 / yr" : "৳৮৫,০০০ – ৳৩,০০,০০০ / মাস",
      demand: isEn ? "Fastest Growing (+140%)" : "দ্রুততম ক্রমবর্ধমান (+১৪০%)",
      summary: isEn 
        ? "Build intelligent autonomous agent workflows, fine-tune LLMs, design hybrid vector search RAG pipelines, and integrate AI into products."
        : "স্বয়ংক্রিয় এআই এজেন্ট, লার্জ ল্যাঙ্গুয়েজ মডেল ফাইন-টিউনিং, ভেক্টর সার্চ র‍্যাগ পাইপলাইন ও এআই প্রোডাক্ট তৈরি।",
      roadmap: [
        { stage: "01", title: isEn ? "Python & AI Foundations" : "পাইথন ও এআই ফাউন্ডেশন", desc: "PyTorch, Transformers & Embedding Vectors" },
        { stage: "02", title: isEn ? "RAG & Vector Pipelines" : "র‍্যাগ ও ভেক্টর ডাটাবেস", desc: "LangChain, LlamaIndex, Qdrant & Hybrid Search" },
        { stage: "03", title: isEn ? "Autonomous Agents" : "মাল্টি-এজেন্ট সিস্টেমস", desc: "CrewAI, LangGraph & Multi-Tool Calling" },
        { stage: "04", title: isEn ? "AI Product Deployment" : "এআই ক্যারিয়ার প্লেসমেন্ট", desc: "Production Inference & AI Engineer Roles" }
      ],
      hiringRoles: isEn 
        ? ["Generative AI Engineer", "LLM Applications Architect", "Machine Learning Specialist", "AI Research Associate"]
        : ["জেনারেটিভ এআই ইঞ্জিনিয়ার", "এলএলএম আর্কিটেক্ট", "মেশিন লার্নিং স্পেশালিস্ট", "এআই রিসার্চার"]
    },
    {
      id: "devops",
      icon: Layers,
      title: isEn ? "Cloud & DevOps Engineer" : "ক্লাউড ও ডেভঅপ্স ইঞ্জিনিয়ার",
      salary: isEn ? "$75,000 – $150,000 / yr" : "৳৭৫,০০০ – ৳২,৮০,০০০ / মাস",
      demand: isEn ? "Critical Need (95%)" : "জরুরি চাহিদা (৯৫%)",
      summary: isEn 
        ? "Automate enterprise infrastructure on AWS/GCP, orchestrate Kubernetes clusters, build zero-downtime CI/CD pipelines."
        : "এডব্লিউএস/জিসিপি ক্লাউড আর্কিটেকচার, কুবারনেটিস অটোমেশন, টেরাফর্ম ও জিরো-ডাউনটাইম সিআই/সিডি পাইপলাইন পরিচালনা।",
      roadmap: [
        { stage: "01", title: isEn ? "Linux & Networking" : "লিনাক্স ও নেটওয়ার্কিং", desc: "Bash Scripting, Protocols & Security Audits" },
        { stage: "02", title: isEn ? "Containers & K8s" : "কুবারনেটিস ও ডকার", desc: "Multi-Stage Docker, K8s & Helm Charts" },
        { stage: "03", title: isEn ? "Infrastructure as Code" : "টেরাফর্ম ও সিআই/সিডি", desc: "Terraform, GitHub Actions & ArgoCD" },
        { stage: "04", title: isEn ? "Platform SRE Career" : "ক্লাউড আর্কিটেক্ট প্লেসমেন্ট", desc: "Site Reliability & Cloud Operations Roles" }
      ],
      hiringRoles: isEn 
        ? ["Cloud Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Platform Engineer"]
        : ["ক্লাউড আর্কিটেক্ট", "ডেভঅপ্স ইঞ্জিনিয়ার", "এসআরই স্পেশালিস্ট", "প্ল্যাটফর্ম ইঞ্জিনিয়ার"]
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: isEn ? "Mobile Applications Engineer" : "মোবাইল অ্যাপ্লিকেশন ইঞ্জিনিয়ার",
      salary: isEn ? "$60,000 – $130,000 / yr" : "৳৬৫,০০০ – ৳২,২০,০০০ / মাস",
      demand: isEn ? "Very High (90%)" : "উচ্চ চাহিদা (৯০%)",
      summary: isEn 
        ? "Craft high-performance iOS and Android apps with Flutter, clean architecture, responsive fluid animations, and real-time backend sync."
        : "ফ্লাটার ও ডার্ট দিয়ে চমৎকার পারফরম্যান্স সম্পন্ন আইওএস ও অ্যান্ড্রয়েড অ্যাপ এবং রিয়েল-টাইম ডাটাবেস সিঙ্ক।",
      roadmap: [
        { stage: "01", title: isEn ? "Dart & Modern Flutter" : "ডার্ট ও ফ্লাটার ইউআই", desc: "Widgets, Animations & Clean UI Layouts" },
        { stage: "02", title: isEn ? "State Management" : "স্টেট ম্যানেজমেন্ট", desc: "Riverpod, Bloc & Clean Architecture" },
        { stage: "03", title: isEn ? "Offline & Device APIs" : "ডাটাবেস ও হার্ডওয়্যার এপিআই", desc: "SQLite, Firebase, WebRTC & Push Alerts" },
        { stage: "04", title: isEn ? "App Store Publishing" : "অ্যাপ পাবলিশিং ও চাকরি", desc: "CI/CD Deployment & Mobile Tech Lead Roles" }
      ],
      hiringRoles: isEn 
        ? ["Lead Flutter Developer", "Mobile Software Engineer", "iOS/Android Specialist", "App Product Architect"]
        : ["লিড ফ্লাটার ডেভেলপার", "মোবাইল সফটওয়্যার ইঞ্জিনিয়ার", "আইওএস/অ্যান্ড্রয়েড স্পেশালিস্ট", "মোবাইল আর্কিটেক্ট"]
    }
  ];

  const currentPath = careerPaths[activePathIndex];

  return (
    <section id="career" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#DE1F26]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#008744]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-[#008744] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs"
          >
            <Compass size={13} className="text-[#DE1F26]" />
            <span>{isEn ? "CAREER ROADMAP & SALARY INSIGHTS" : "হাই-স্যালারি ক্যারিয়ার রোডম্যাপ"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#08121a] tracking-tight leading-tight"
          >
            {isEn ? (
              <>
                Explore <span className="text-[#008744]">IT Career</span> <span className="text-[#DE1F26]">Paths</span>
              </>
            ) : (
              <>
                আইটি <span className="text-[#008744]">ক্যারিয়ারের</span> <span className="text-[#DE1F26]">সম্ভাবনাময় পথসমূহ</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-3 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto"
          >
            {isEn 
              ? "See your exact trajectory from foundational engineering to high-paying international remote & onsite roles."
              : "বিগিনার লেভেল থেকে শুরু করে আন্তর্জাতিক মানের সফটওয়্যার ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার গড়ার স্পষ্ট রোডম্যাপ।"}
          </motion.p>
        </div>

        {/* INTERACTIVE CAREER SELECTOR TABS */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-10">
          {careerPaths.map((path, idx) => {
            const Icon = path.icon;
            const isActive = activePathIndex === idx;
            return (
              <button
                key={path.id}
                onClick={() => setActivePathIndex(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive 
                    ? "bg-gradient-to-r from-[#008744] to-emerald-600 text-white shadow-md shadow-emerald-700/20 scale-102" 
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
                }`}
              >
                <Icon size={15} className={isActive ? "text-white" : "text-slate-500"} />
                <span>{path.title}</span>
              </button>
            );
          })}
        </div>

        {/* ROADMAP SHOWCASE CONTAINER (LIGHT & CLEAN) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-50/80 via-white to-emerald-50/20 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Top Row: Path Overview & Salary Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-slate-200/80 pb-6 mb-8">
              <div className="lg:col-span-8">
                <span className="inline-block bg-[#008744]/10 text-[#008744] border border-[#008744]/20 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5">
                  {isEn ? "Selected Career Track" : "নির্বাচিত ক্যারিয়ার ট্র্যাক"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#08121a] tracking-tight mb-2">
                  {currentPath.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-2xl">
                  {currentPath.summary}
                </p>
              </div>

              {/* Salary & Demand Metric Cards */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 w-full">
                <div className="bg-white border border-emerald-100 rounded-2xl p-4 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <DollarSign size={13} className="text-[#008744]" />
                    <span>{isEn ? "Avg. Salary" : "গড় বেতন"}</span>
                  </div>
                  <p className="text-sm sm:text-base font-black text-[#008744]">{currentPath.salary}</p>
                </div>

                <div className="bg-white border border-red-100 rounded-2xl p-4 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <TrendingUp size={13} className="text-[#DE1F26]" />
                    <span>{isEn ? "Market Demand" : "চাহিদা"}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-black text-[#DE1F26]">{currentPath.demand}</p>
                </div>
              </div>
            </div>

            {/* Middle Row: 4-Stage Progressive Roadmap Cards */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-3 mb-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-700 flex items-center gap-2">
                  <Zap size={14} className="text-[#DE1F26]" />
                  <span>{isEn ? "ENGINEERING MASTERY ROADMAP" : "ধাপে ধাপে শেখার পূর্ণাঙ্গ রোডম্যাপ"}</span>
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {currentPath.roadmap.map((step, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 text-[#008744] font-black text-xs flex items-center justify-center font-mono">
                          {step.stage}
                        </span>
                        {sIdx < 3 && (
                          <ChevronRight size={16} className="text-slate-300 hidden lg:block" />
                        )}
                      </div>
                      <h5 className="font-extrabold text-[#08121a] text-base mb-1.5">{step.title}</h5>
                      <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Target Job Roles & CTA */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-auto">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-[#008744]" />
                  <span>{isEn ? "Target Job Roles" : "টার্গেট পজিশনসমূহ"}:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentPath.hiringRoles.map((role, rIdx) => (
                    <span 
                      key={rIdx} 
                      className="text-xs font-semibold bg-white text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-2xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/courses"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008744] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/15 hover:shadow-lg transition-all flex-shrink-0 group"
              >
                <span>{isEn ? "Enroll in this Track" : "এই ট্র্যাকে ভর্তি শুরু করুন"}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
