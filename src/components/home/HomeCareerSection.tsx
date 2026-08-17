"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, TrendingUp, DollarSign, CheckCircle2, 
  ArrowRight, Briefcase, ChevronRight, Zap, Target
} from "lucide-react";

export default function HomeCareerSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [activePathIndex, setActivePathIndex] = useState(0);

  const careerPaths = [
    {
      id: "fullstack",
      title: isEn ? "Full-Stack Web Architect" : "ফুল-স্ট্যাক ওয়েব আর্কিটেক্ট",
      salary: isEn ? "$65,000 – $140,000 / yr" : "৳৭০,০০০ – ৳২,৫০,০০০ / মাস",
      demand: isEn ? "Extremely High (98%)" : "সর্বোচ্চ চাহিদা (৯৮%)",
      summary: isEn 
        ? "Design and scale end-to-end web applications, master React/Next.js frontends, microservices APIs, and cloud database optimization."
        : "সম্পূর্ণ ওয়েব সিস্টেম আর্কিটেকচার, ফ্রন্টএন্ড, ব্যাকএন্ড এপিআই ও ক্লাউড ডাটাবেস সমন্বয়ে হাই-স্কেল সফটওয়্যার ডিজাইন।",
      roadmap: [
        { stage: "01", title: isEn ? "Frontend Mastery" : "ফ্রন্টএন্ড দক্ষতা", desc: "React 19, Next.js 15, TypeScript & Tailwind" },
        { stage: "02", title: isEn ? "Backend & Microservices" : "ব্যাকএন্ড আর্কিটেকচার", desc: "Node.js, PostgreSQL, Redis & Kafka" },
        { stage: "03", title: isEn ? "DevOps & Cloud" : "ক্লাউড ডেপ্লয়মেন্ট", desc: "Docker, AWS ECS, CI/CD & Observability" },
        { stage: "04", title: isEn ? "Lead Architect Placement" : "চাকরি ও পদোন্নতি", desc: "Technical Interviews & Staff Engineer Roles" }
      ],
      hiringRoles: isEn 
        ? ["Senior Full-Stack Engineer", "Frontend Tech Lead", "Backend Systems Engineer", "Solutions Architect"]
        : ["সিনিয়র ফুল-স্ট্যাক ইঞ্জিনিয়ার", "ফ্রন্টএন্ড টেক লিড", "ব্যাকএন্ড সিস্টেম ইঞ্জিনিয়ার", "সলিউশন আর্কিটেক্ট"]
    },
    {
      id: "ai",
      title: isEn ? "AI & Agentic Systems Engineer" : "এআই ও এজেন্টস ইঞ্জিনিয়ার",
      salary: isEn ? "$80,000 – $160,000 / yr" : "৳৮৫,০০০ – ৳৩,০০,০০০ / মাস",
      demand: isEn ? "Fastest Growing (+140%)" : "দ্রুততম ক্রমবর্ধমান (+১৪০%)",
      summary: isEn 
        ? "Build intelligent autonomous agent workflows, fine-tune LLMs, design hybrid vector search RAG pipelines, and integrate AI into products."
        : "স্বয়ংক্রিয় এআই এজেন্ট, লার্জ ল্যাঙ্গুয়েজ মডেল ফাইন-টিউনিং, ভেক্টর সার্চ র‍্যাগ পাইপলাইন ও এআই প্রোডাক্ট তৈরি।",
      roadmap: [
        { stage: "01", title: isEn ? "Python & Neural Fundamentals" : "পাইথন ও এআই ফাউন্ডেশন", desc: "PyTorch, Transformers & Embedding Vectors" },
        { stage: "02", title: isEn ? "RAG & Vector Pipelines" : "র‍্যাগ ও ভেক্টর ডাটাবেস", desc: "LangChain, LlamaIndex, Qdrant & Hybrid Search" },
        { stage: "03", title: isEn ? "Autonomous Agents" : "মাল্টি-এজেন্ট সিস্টেমস", desc: "CrewAI, LangGraph & Tool Calling" },
        { stage: "04", title: isEn ? "AI Product Deployment" : "এআই ক্যারিয়ার প্লেসমেন্ট", desc: "Production Inference & AI Engineer Roles" }
      ],
      hiringRoles: isEn 
        ? ["Generative AI Engineer", "LLM Applications Architect", "Machine Learning Specialist", "AI Research Associate"]
        : ["জেনারেটিভ এআই ইঞ্জিনিয়ার", "এলএলএম আর্কিটেক্ট", "মেশিন লার্নিং স্পেশালিস্ট", "এআই রিসার্চার"]
    },
    {
      id: "devops",
      title: isEn ? "Cloud & Platform DevOps Engineer" : "ক্লাউড ও প্ল্যাটফর্ম ডেভঅপ্স ইঞ্জিনিয়ার",
      salary: isEn ? "$75,000 – $150,000 / yr" : "৳৭৫,০০০ – ৳২,৮০,০০০ / মাস",
      demand: isEn ? "Critical Need (95%)" : "জরুরি চাহিদা (৯৫%)",
      summary: isEn 
        ? "Automate enterprise infrastructure on AWS/GCP, orchestrate Kubernetes clusters, build zero-downtime CI/CD pipelines."
        : "এডব্লিউএস/জিসিপি ক্লাউড আর্কিটেকচার, কুবারনেটিস অটোমেশন, টেরাফর্ম ও জিরো-ডাউনটাইম সিআই/সিডি পাইপলাইন পরিচালনা।",
      roadmap: [
        { stage: "01", title: isEn ? "Linux & Networking" : "লিনাক্স ও নেটওয়ার্কিং", desc: "Bash Scripting, Protocols & Security" },
        { stage: "02", title: isEn ? "Containers & Orchestration" : "কুবারনেটিস ও ডকার", desc: "Multi-Stage Docker, K8s & Helm Charts" },
        { stage: "03", title: isEn ? "Infrastructure as Code" : "টেরাফর্ম ও সিআই/সিডি", desc: "Terraform, GitHub Actions & ArgoCD" },
        { stage: "04", title: isEn ? "Platform SRE Career" : "ক্লাউড আর্কিটেক্ট প্লেসমেন্ট", desc: "Site Reliability & Cloud Operations" }
      ],
      hiringRoles: isEn 
        ? ["Cloud Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Platform Engineer"]
        : ["ক্লাউড আর্কিটেক্ট", "ডেভঅপ্স ইঞ্জিনিয়ার", "এসআরই স্পেশালিস্ট", "প্ল্যাটফর্ম ইঞ্জিনিয়ার"]
    },
    {
      id: "mobile",
      title: isEn ? "Mobile Applications Engineer" : "মোবাইল অ্যাপ্লিকেশন ইঞ্জিনিয়ার",
      salary: isEn ? "$60,000 – $130,000 / yr" : "৳৬৫,০০০ – ৳২,২০,০০০ / মাস",
      demand: isEn ? "Very High (90%)" : "উচ্চ চাহিদা (৯০%)",
      summary: isEn 
        ? "Craft high-performance iOS and Android apps with Flutter, clean architecture, responsive fluid animations, and real-time backend sync."
        : "ফ্লাটার ও ডার্ট দিয়ে চমৎকার পারফরম্যান্স সম্পন্ন আইওএস ও অ্যান্ড্রয়েড অ্যাপ এবং রিয়েল-টাইম ডাটাবেস সিঙ্ক।",
      roadmap: [
        { stage: "01", title: isEn ? "Dart & Modern Flutter" : "ডার্ট ও ফ্লাটার ইউআই", desc: "Widgets, Animations & Clean UI Layouts" },
        { stage: "02", title: isEn ? "State Management" : "স্টেট ম্যানেজমেন্ট", desc: "Riverpod, Bloc & Clean Architecture" },
        { stage: "03", title: isEn ? "Offline & Device APIs" : "ডাটাবেস ও হার্ডওয়্যার এপিআই", desc: "SQLite, Firebase, WebRTC & Push Notifications" },
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
      <div className="absolute inset-0 bg-[radial-gradient(#08121a_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: Terminal / Blueprint Inspired Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#DE1F26] bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-md mb-2.5"
          >
            <Compass size={12} className="animate-spin duration-[10000ms]" />
            <span>{isEn ? "> ROADMAP TO HIGH-INCOME TECH CAREERS" : "> হাই-স্যালারি আইটি ক্যারিয়ার রোডম্যাপ"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl font-black text-[#08121a] tracking-tight leading-tight"
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
            className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed"
          >
            {isEn 
              ? "See your exact trajectory from foundational engineering to high-paying international remote & onsite roles."
              : "বিগিনার লেভেল থেকে শুরু করে আন্তর্জাতিক মানের সফটওয়্যার ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার গড়ার স্পষ্ট রোডম্যাপ।"}
          </motion.p>
        </div>

        {/* INTERACTIVE CAREER SELECTOR TABS */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-6">
          {careerPaths.map((path, idx) => {
            const isActive = activePathIndex === idx;
            return (
              <button
                key={path.id}
                onClick={() => setActivePathIndex(idx)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg font-bold text-xs transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isActive 
                    ? "bg-[#08121a] text-white shadow-sm scale-105" 
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                <Target size={12} className={isActive ? "text-[#008744]" : "text-slate-400"} />
                <span>{path.title}</span>
              </button>
            );
          })}
        </div>

        {/* ROADMAP SHOWCASE CONTAINER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            {/* Top Row: Path Overview & Salary Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start border-b border-slate-800 pb-5 mb-5">
              <div className="lg:col-span-8">
                <span className="inline-block bg-[#008744]/20 text-[#008744] border border-[#008744]/40 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                  {isEn ? "Selected Career Domain" : "নির্বাচিত ক্যারিয়ার ডোমেন"}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5">
                  {currentPath.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {currentPath.summary}
                </p>
              </div>

              <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5 flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{isEn ? "Market Compensation" : "গড় বেতন স্কেল"}</p>
                  <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">{currentPath.salary}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{isEn ? "Industry Demand" : "বর্তমান চাহিদা"}</p>
                  <p className="text-xs font-bold text-rose-400 mt-0.5">{currentPath.demand}</p>
                </div>
              </div>
            </div>

            {/* Middle Row: 4-Stage Progressive Roadmap */}
            <div className="mb-6">
              <h4 className="text-[11px] font-bold font-mono uppercase tracking-widest text-slate-400 mb-3.5 flex items-center gap-1.5">
                <Zap size={12} className="text-[#DE1F26]" />
                <span>{isEn ? "ENGINEERING MASTERY ROADMAP" : "ধাপে ধাপে শেখার পূর্ণাঙ্গ রোডম্যাপ"}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {currentPath.roadmap.map((step, sIdx) => (
                  <div 
                    key={sIdx}
                    className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-5 relative flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-lg bg-[#008744]/20 border border-[#008744]/40 text-[#008744] font-black text-xs flex items-center justify-center font-mono">
                        {step.stage}
                      </span>
                      {sIdx < 3 && (
                        <ChevronRight size={16} className="text-slate-600 hidden lg:block" />
                      )}
                    </div>
                    <h5 className="font-bold text-white text-base mb-1.5">{step.title}</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Career Placement Roles & CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-auto">
                <p className="text-xs font-mono text-slate-400 uppercase mb-2">{isEn ? "Target Job Titles" : "টার্গেট পজিশনসমূহ"}:</p>
                <div className="flex flex-wrap gap-2">
                  {currentPath.hiringRoles.map((role, rIdx) => (
                    <span key={rIdx} className="text-xs font-medium bg-slate-800 text-slate-200 px-3 py-1 rounded-full border border-slate-700">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/courses"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008744] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all flex-shrink-0"
              >
                <span>{isEn ? "Enroll in this Track" : "এই ট্র্যাকে ভর্তি শুরু করুন"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
