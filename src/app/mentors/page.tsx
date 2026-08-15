"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Star, Award, Briefcase, Sparkles, CheckCircle2, 
  Calendar, MessageSquare, X, ArrowRight, 
  Zap, Code2, Cpu, Cloud, Shield, Check, Clock, Globe2
} from "lucide-react";

const LinkedinIcon = ({ size = 15, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 15, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function MentorsPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [activeSpecialty, setActiveSpecialty] = useState("all");
  const [selectedMentorForBooking, setSelectedMentorForBooking] = useState<any>(null);
  const [bookingStep, setBookingStep] = useState(1);

  const specialties = [
    { id: "all", name: isEn ? "All Faculty" : "সকল মেন্টর" },
    { id: "arch", name: isEn ? "System Architecture" : "সিস্টেম আর্কিটেকচার" },
    { id: "ai", name: isEn ? "AI & LLM Research" : "এআই ও এলএলএম রিসার্চ" },
    { id: "devops", name: isEn ? "Cloud & DevOps" : "ক্লাউড ও ডেভঅপ্স" },
    { id: "security", name: isEn ? "Cyber Security" : "সাইবার সিকিউরিটি" },
    { id: "mobile", name: isEn ? "Mobile & UX" : "মোবাইল ও ইউএক্স" },
  ];

  const mentors = [
    {
      id: "tanvir-hasan",
      name: isEn ? "Tanvir Hasan" : "তানভীর হাসান",
      role: isEn ? "Principal Software Architect" : "প্রিন্সিপাল সফটওয়্যার আর্কিটেক্ট",
      companyBadge: "Ex-Grab • Lead Architect",
      companyColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
      specialty: "arch",
      experience: isEn ? "11+ Years Experience" : "১১+ বছর অভিজ্ঞতা",
      mentees: "850+ Mentees",
      rating: 4.98,
      nextSlot: isEn ? "Next Slot: Today 7:00 PM" : "পরবর্তী স্লট: আজ সন্ধ্যা ৭টা",
      bio: isEn ? "Specializes in high-throughput distributed microservices, Event-Driven Architecture, PostgreSQL query optimization, and Next.js at scale." : "ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসেস, ইভেন্ট-ড্রিভেন আর্কিটেকচার ও হাই-কনকারেন্সি ডাটাবেস অপ্টিমাইজেশনে বিশেষজ্ঞ।",
      accentGrad: "from-emerald-500 to-teal-700",
      hoverBorder: "hover:border-emerald-400/80 hover:shadow-[0_24px_50px_rgba(16,185,129,0.15)]",
      skills: ["System Architecture", "Next.js", "Go", "PostgreSQL", "Kafka", "Redis"],
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "ariful-islam",
      name: isEn ? "Dr. Ariful Islam" : "ড. আরিফুল ইসলাম",
      role: isEn ? "Senior AI Research Scientist" : "সিনিয়র এআই রিসার্চ সায়েন্টিস্ট",
      companyBadge: "PhD in ML • AI Research Lead",
      companyColor: "bg-purple-500/10 text-purple-700 border-purple-500/30",
      specialty: "ai",
      experience: isEn ? "9+ Years Experience" : "৯+ বছর অভিজ্ঞতা",
      mentees: "620+ Mentees",
      rating: 4.99,
      nextSlot: isEn ? "Next Slot: Tomorrow 5:00 PM" : "পরবর্তী স্লট: আগামীকাল বিকাল ৫টা",
      bio: isEn ? "Pioneering research in autonomous LLM multi-agent frameworks, RAG pipeline evaluation, model fine-tuning, and PyTorch production deployments." : "জেনারেটিভ এআই, অটোনোমাস মাল্টি-এজেন্ট ফ্রেমওয়ার্ক ও লার্জ ল্যাঙ্গুয়েজ মডেল গবেষণায় বিশেষজ্ঞ।",
      accentGrad: "from-purple-500 to-indigo-700",
      hoverBorder: "hover:border-purple-400/80 hover:shadow-[0_24px_50px_rgba(168,85,247,0.15)]",
      skills: ["Generative AI", "PyTorch", "LangChain", "Vector DBs", "Model Fine-Tuning", "Python"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "rakib-mahmud",
      name: isEn ? "Rakib Mahmud" : "রাকিব মাহমুদ",
      role: isEn ? "Head of Cloud & Platform DevOps" : "হেড অব ক্লাউড ও প্ল্যাটফর্ম ডেভঅপ্স",
      companyBadge: "AWS Solutions Architect Pro",
      companyColor: "bg-cyan-500/10 text-cyan-700 border-cyan-500/30",
      specialty: "devops",
      experience: isEn ? "8+ Years Experience" : "৮+ বছর অভিজ্ঞতা",
      mentees: "490+ Mentees",
      rating: 4.94,
      nextSlot: isEn ? "Next Slot: Saturday 8:00 PM" : "পরবর্তী স্লট: শনিবার রাত ৮টা",
      bio: isEn ? "Expert in orchestrating multi-region Kubernetes clusters, GitOps pipelines with ArgoCD, Terraform automation, and 24/7 observability." : "এডব্লিউএস ক্লাউড, কুবারনেটিস ক্লাস্টার অর্কেস্ট্রেশন ও অটোমেটেড সিআই/সিডি পাইপলাইনে দক্ষ।",
      accentGrad: "from-cyan-500 to-blue-700",
      hoverBorder: "hover:border-cyan-400/80 hover:shadow-[0_24px_50px_rgba(6,182,212,0.15)]",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Prometheus", "Linux"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "faisal-ahmed",
      name: isEn ? "Faisal Ahmed" : "ফয়সাল আহমেদ",
      role: isEn ? "Cyber Security & Red Team Lead" : "সাইবার সিকিউরিটি ও রেড টিম লিড",
      companyBadge: "CEH • OSCP Certified Consultant",
      companyColor: "bg-rose-500/10 text-rose-700 border-rose-500/30",
      specialty: "security",
      experience: isEn ? "10+ Years Experience" : "১০+ বছর অভিজ্ঞতা",
      mentees: "380+ Mentees",
      rating: 4.96,
      nextSlot: isEn ? "Next Slot: Monday 6:00 PM" : "পরবর্তী স্লট: সোমবার সন্ধ্যা ৬টা",
      bio: isEn ? "Specialized in ethical hacking, vulnerability assessments, zero-trust cloud security frameworks, and defensive security postures." : "এথিক্যাল হ্যাকিং, পেনিট্রেশন টেস্টিং ও এন্টারপ্রাইজ সিকিউরিটি আর্কিটেকচারে বিশেষজ্ঞ।",
      accentGrad: "from-rose-500 to-red-700",
      hoverBorder: "hover:border-rose-400/80 hover:shadow-[0_24px_50px_rgba(244,63,94,0.15)]",
      skills: ["Ethical Hacking", "OWASP", "Penetration Testing", "SOC Operations", "Threat Intelligence"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "shamim-reza",
      name: isEn ? "Shamim Reza" : "শামীম রেজা",
      role: isEn ? "Staff Mobile Engineer" : "স্টাফ মোবাইল ইঞ্জিনিয়ার",
      companyBadge: "10M+ App Downloads on Stores",
      companyColor: "bg-blue-500/10 text-blue-700 border-blue-500/30",
      specialty: "mobile",
      experience: isEn ? "7+ Years Experience" : "৭+ বছর অভিজ্ঞতা",
      mentees: "540+ Mentees",
      rating: 4.91,
      nextSlot: isEn ? "Next Slot: Sunday 7:00 PM" : "পরবর্তী স্লট: রবিবার সন্ধ্যা ৭টা",
      bio: isEn ? "Architecting high-performance mobile apps with Flutter, Clean Architecture, WebRTC video engines, and seamless offline synchronization." : "ফ্লাটার, ক্লিন আর্কিটেকচার ও হাই-পারফরম্যান্স মোবাইল অ্যাপ্লিকেশন তৈরিতে বিশেষজ্ঞ।",
      accentGrad: "from-blue-500 to-indigo-600",
      hoverBorder: "hover:border-blue-400/80 hover:shadow-[0_24px_50px_rgba(59,130,246,0.15)]",
      skills: ["Flutter", "Dart", "Clean Architecture", "Firebase", "WebRTC", "GraphQL"],
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "nabila-chowdhury",
      name: isEn ? "Nabila Chowdhury" : "নাবিলা চৌধুরী",
      role: isEn ? "Lead Product Designer & Strategist" : "লিড প্রোডাক্ট ডিজাইনার ও স্ট্র্যাটেজিস্ট",
      companyBadge: "Ex-FinTech Lead • Design Systems",
      companyColor: "bg-amber-500/10 text-amber-700 border-amber-500/30",
      specialty: "mobile",
      experience: isEn ? "6+ Years Experience" : "৬+ বছর অভিজ্ঞতা",
      mentees: "420+ Mentees",
      rating: 4.93,
      nextSlot: isEn ? "Next Slot: Thursday 6:00 PM" : "পরবর্তী স্লট: বৃহস্পতিবার সন্ধ্যা ৬টা",
      bio: isEn ? "Specializes in scalable enterprise design systems in Figma, micro-animations, user journey psychology, and developer design token handoffs." : "ফিগমা ডিজাইন সিস্টেম, ইউজার সাইকোলজি ও ইন্টারেক্টিভ প্রোটোটাইপিংয়ে অভিজ্ঞ।",
      accentGrad: "from-amber-500 to-orange-600",
      hoverBorder: "hover:border-amber-400/80 hover:shadow-[0_24px_50px_rgba(245,158,11,0.15)]",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Design Tokens"],
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    }
  ];

  const filteredMentors = mentors.filter(
    (m) => activeSpecialty === "all" || m.specialty === activeSpecialty
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow pt-6 pb-24">
        
        {/* MENTORS EXECUTIVE 2-COLUMN HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#061828] via-[#0b2b46] to-[#04121e] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800">
          <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-[96rem] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-amber-300"
                >
                  <Award size={14} className="text-amber-400" />
                  <span>{t.mentorsPage?.badge || "ELITE TECH LEADERSHIP"}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-6"
                >
                  {t.mentorsPage?.title || "Learn from Senior Industry Engineers"}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
                >
                  {t.mentorsPage?.subtitle || "Our mentors work at top global technology companies, bringing real-world architecture and practices directly to you."}
                </motion.p>

                {/* Faculty Highlight Chips */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="flex flex-wrap items-center gap-3 text-xs font-mono"
                >
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center space-x-2 text-emerald-300">
                    <CheckCircle2 size={14} />
                    <span>1-on-1 Code Reviews</span>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center space-x-2 text-amber-300">
                    <Star size={14} className="fill-amber-300" />
                    <span>4.98★ Average Mentee Rating</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Interactive Faculty Cluster (5 Cols) */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-7 border border-white/20 shadow-2xl space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-amber-400">Executive Faculty Council</span>
                    <span className="text-[10px] text-emerald-400 font-mono">● SLOTS ACTIVE</span>
                  </div>

                  {/* Faculty Avatars Preview List */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-2.5 bg-black/30 rounded-2xl border border-white/5">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Mentor" className="w-10 h-10 rounded-xl object-cover" />
                      <div className="flex-grow">
                        <div className="text-xs font-bold text-white">Tanvir Hasan</div>
                        <div className="text-[11px] text-emerald-400 font-mono">Ex-Grab • Principal Architect</div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-mono">Available</span>
                    </div>

                    <div className="flex items-center space-x-3 p-2.5 bg-black/30 rounded-2xl border border-white/5">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Mentor" className="w-10 h-10 rounded-xl object-cover" />
                      <div className="flex-grow">
                        <div className="text-xs font-bold text-white">Dr. Ariful Islam</div>
                        <div className="text-[11px] text-purple-400 font-mono">PhD AI • Senior Researcher</div>
                      </div>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md font-mono">Available</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-400 font-mono">
                    Direct access to mock interviews & system design reviews
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* SPECIALTY FILTER BAR */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 -mt-7 relative z-20">
          <div className="bg-white/95 backdrop-blur-2xl p-2 sm:p-3 rounded-2xl border border-slate-200 shadow-[0_12px_35px_rgba(0,0,0,0.06)] flex items-center overflow-x-auto no-scrollbar gap-2 sm:gap-3">
            {specialties.map((spec) => {
              const isActive = activeSpecialty === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveSpecialty(spec.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#00a884] text-white shadow-md shadow-[#00a884]/25 ring-2 ring-[#00a884]/30"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  {spec.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* MENTORS 3D PROFILE CARDS */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMentors.map((mentor, idx) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.018, transition: { duration: 0.15, ease: "easeOut" } }}
                className={`group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] ${mentor.hoverBorder} transition-all duration-150 flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  {/* Top Avatar & Social Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="relative">
                      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${mentor.accentGrad} opacity-30 group-hover:opacity-75 blur-sm transition-opacity duration-300`} />
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md relative z-10"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full text-xs font-bold text-amber-700">
                        <Star size={13} className="fill-amber-500 text-amber-500" />
                        <span>{mentor.rating}</span>
                      </div>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                        <LinkedinIcon size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Company Tag */}
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-lg border mb-3 ${mentor.companyColor}`}>
                    {mentor.companyBadge}
                  </span>

                  {/* Name & Role */}
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0b2b46] transition-colors leading-snug">
                    {mentor.name}
                  </h3>
                  <div className="text-xs font-bold text-[#00a884] mb-3">{mentor.role}</div>

                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-5 font-normal">
                    {mentor.bio}
                  </p>

                  {/* Next Slot Chip */}
                  <div className="flex items-center space-x-1.5 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-5">
                    <Clock size={13} className="text-[#00a884]" />
                    <span>{mentor.nextSlot}</span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.skills.map((skill, i) => (
                      <span key={i} className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200/40">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Booking Action */}
                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">{mentor.mentees}</span>

                  <button
                    onClick={() => {
                      setSelectedMentorForBooking(mentor);
                      setBookingStep(1);
                    }}
                    className="bg-[#00a884] hover:bg-[#009473] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-[#00a884]/20 flex items-center space-x-1.5 transition-all cursor-pointer"
                  >
                    <Calendar size={14} />
                    <span>{isEn ? "Book 1-on-1" : "সেশন বুক করুন"}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 1-ON-1 BOOKING MODAL */}
        <AnimatePresence>
          {selectedMentorForBooking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMentorForBooking(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
              >
                <button
                  onClick={() => setSelectedMentorForBooking(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                {bookingStep === 1 ? (
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <img src={selectedMentorForBooking.avatar} alt={selectedMentorForBooking.name} className="w-14 h-14 rounded-2xl object-cover" />
                      <div>
                        <h3 className="text-lg font-black text-slate-900">{selectedMentorForBooking.name}</h3>
                        <div className="text-xs font-bold text-[#00a884]">{selectedMentorForBooking.role}</div>
                      </div>
                    </div>

                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {isEn ? "Select Session Topic" : "সেশনের বিষয় নির্বাচন করুন"}
                    </div>
                    <div className="space-y-2 mb-6 text-xs font-bold">
                      <button className="w-full text-left p-3 rounded-xl border border-[#00a884] bg-emerald-50 text-emerald-800 flex items-center justify-between">
                        <span>{isEn ? "Architecture & Code Review (45 Mins)" : "আর্কিটেকচার ও কোড রিভিউ (৪৫ মিনিট)"}</span>
                        <CheckCircle2 size={16} className="text-[#00a884]" />
                      </button>
                      <button className="w-full text-left p-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center justify-between">
                        <span>{isEn ? "Career Guidance & Mock Interview (45 Mins)" : "ক্যারিয়ার গাইডেন্স ও মক ইন্টারভিউ (৪৫ মিনিট)"}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setBookingStep(2)}
                      className="w-full bg-[#00a884] hover:bg-[#009473] text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-[#00a884]/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    >
                      <Calendar size={16} />
                      <span>{isEn ? "Confirm 1-on-1 Slot" : "সেশন কনফার্ম করুন"}</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      {isEn ? "Session Confirmed!" : "সেশন কনফার্ম হয়েছে!"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {isEn ? `Your 1-on-1 mentorship session with ${selectedMentorForBooking.name} has been booked. Meeting link sent to your email.` : `${selectedMentorForBooking.name}-এর সাথে আপনার মেন্টরশিপ সেশন বুক করা হয়েছে। মিটিংস লিংক আপনার ইমেইলে পাঠানো হয়েছে।`}
                    </p>
                    <button
                      onClick={() => setSelectedMentorForBooking(null)}
                      className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
                    >
                      {isEn ? "Done" : "ঠিক আছে"}
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}
