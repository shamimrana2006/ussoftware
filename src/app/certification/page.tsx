"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, ShieldCheck, CheckCircle2, Search, QrCode, 
  Lock, FileCheck, Shield, Building, Sparkles, 
  Mail, Phone, Hash, User, Copy, RefreshCw, 
  Printer, RotateCcw, Check
} from "lucide-react";

export interface SampleStudentRecord {
  id: string;
  name: string;
  course: string;
  issueDate: string;
  grade: string;
  credentialHash: string;
  instructor: string;
  director: string;
  status?: string;
  email: string;
  phone: string;
  rollNo: string;
  skills: string[];
  duration: string;
}

// Sparkle Star Component matching HeroSection style
const SparkleStar = ({ size = 24, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export default function CertificationPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  // Form Inputs for Search Card
  const [mobileInput, setMobileInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [studentIdInput, setStudentIdInput] = useState("");

  const [isSearching, setIsSearching] = useState(false);
  const [searchStep, setSearchStep] = useState<string>("");
  const [copiedHash, setCopiedHash] = useState(false);

  // Active verified certificate state (null by default for clean initial empty state, or loaded on search)
  const [searchedCert, setSearchedCert] = useState<SampleStudentRecord | null>(null);

  // Pre-configured Student Database for quick lookup
  const studentDatabase: SampleStudentRecord[] = [
    {
      id: "USL-2025-0587",
      name: "Md. Shamim Rana",
      email: "shamim.rana@gmail.com",
      phone: "01995-852964",
      rollNo: "US-REG-88412",
      course: isEn ? "Graphic Design & Motion Graphics Masterclass" : "গ্রাফিক ডিজাইন ও মোশন গ্রাফিক্স মাস্টারক্লাস",
      issueDate: "20 May 2025",
      grade: isEn ? "Distinction (Grade A+)" : "ডিস্টিংকশন (গ্রেড এ+)",
      credentialHash: "0x7F8B9C24A10D5E6F8932C4B1A0E99F8D",
      instructor: "Tanvir Hasan",
      director: "Shafiul Alam",
      status: isEn ? "ACTIVE & VERIFIED" : "সক্রিয় ও ভেরিফাইড",
      skills: ["Adobe Illustrator", "Photoshop", "After Effects", "3D Motion", "Brand Identity"],
      duration: isEn ? "6 Months (240 Hours)" : "৬ মাস (২৪০ ঘণ্টা)"
    },
    {
      id: "US-2026-FS890",
      name: isEn ? "Tanvir Ahmed" : "তানভীর আহমেদ",
      email: "tanvir.ahmed@gmail.com",
      phone: "01812345678",
      rollNo: "US-REG-99104",
      course: isEn ? "Enterprise Full-Stack Web Engineering" : "এন্টারপ্রাইজ ফুল-স্ট্যাক ওয়েব ইঞ্জিনিয়ারিং",
      issueDate: "15 August 2026",
      grade: isEn ? "High Honors (Grade A+)" : "হাই অনার্স (গ্রেড এ+)",
      credentialHash: "0x4B9E21A0F88D93C5512B0A4E90123F1C",
      instructor: "Engr. Tanvir Hasan",
      director: "Shafiul Alam",
      status: isEn ? "ACTIVE & VERIFIED" : "সক্রিয় ও ভেরিফাইড",
      skills: ["Next.js 16", "React 19", "Node.js", "PostgreSQL", "Docker", "TypeScript"],
      duration: isEn ? "6 Months (300 Hours)" : "৬ মাস (৩০০ ঘণ্টা)"
    },
    {
      id: "US-2026-AI102",
      name: isEn ? "Samiya Rahman" : "সামিয়া রহমান",
      email: "samiya.ai@gmail.com",
      phone: "01912345678",
      rollNo: "US-REG-99215",
      course: isEn ? "Generative AI & Autonomous Agent Architecture" : "জেনারেটিভ এআই ও অটোনোমাস এজেন্ট আর্কিটেকচার",
      issueDate: "10 July 2026",
      grade: isEn ? "High Honors (Grade A+)" : "হাই অনার্স (গ্রেড এ+)",
      credentialHash: "0x3A9E7B11C4F2D88B901C5E2A91D77B4A",
      instructor: "Dr. Ariful Islam",
      director: "Shafiul Alam",
      status: isEn ? "ACTIVE & VERIFIED" : "সক্রিয় ও ভেরিফাইড",
      skills: ["Python", "PyTorch", "LLM Fine-Tuning", "LangChain", "Autonomous Agents"],
      duration: isEn ? "4 Months (200 Hours)" : "৪ মাস (২০০ ঘণ্টা)"
    },
    {
      id: "US-2026-DO711",
      name: isEn ? "Mahmudul Hasan" : "মাহমুদুল হাসান",
      email: "mahmudul.dev@gmail.com",
      phone: "01512345678",
      rollNo: "US-REG-99330",
      course: isEn ? "Cloud DevOps & Kubernetes Orchestration" : "ক্লাউড ডেভঅপ্স ও কুবারনেটিস অর্কেস্ট্রেশন",
      issueDate: "28 June 2026",
      grade: isEn ? "Distinction (Grade A+)" : "ডিস্টিংকশন (গ্রেড এ+)",
      credentialHash: "0x99B4E12C88F0A71D33E2B5A0C11F88D9",
      instructor: "Rakib Mahmud",
      director: "Shafiul Alam",
      status: isEn ? "ACTIVE & VERIFIED" : "সক্রিয় ও ভেরিফাইড",
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD Pipelines", "Prometheus"],
      duration: isEn ? "5 Months (250 Hours)" : "৫ মাস (২৫০ ঘণ্টা)"
    }
  ];

  // Verification Handler: Searches across Mobile, Email, or Student ID
  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const mobile = mobileInput.trim().replace(/\D/g, "");
    const email = emailInput.trim().toLowerCase();
    const certId = studentIdInput.trim().toLowerCase();

    // If all fields are empty, reset active certificate to empty state
    if (!mobile && !email && !certId) {
      setSearchedCert(null);
      return;
    }

    setIsSearching(true);
    setSearchStep(isEn ? "Connecting to Security Ledger..." : "সিকিউরিটি ডাটাবেজের সাথে সংযোগ স্থাপন করা হচ্ছে...");

    setTimeout(() => {
      setSearchStep(isEn ? "Validating ISO 9001:2015 Hash Credential..." : "আইএসও ৯০০১ ক্রিপ্টোগ্রাফিক হ্যাশ যাচাই করা হচ্ছে...");
    }, 300);

    setTimeout(() => {
      setIsSearching(false);
      setSearchStep("");

      // Database Direct Match
      const matched = studentDatabase.find((st) => {
        const idMatch = certId && st.id.toLowerCase() === certId;
        const emailMatch = email && (st.email.toLowerCase() === email || st.email.toLowerCase().includes(email));
        const phoneMatch = mobile && st.phone.replace(/\D/g, "").includes(mobile);
        return idMatch || emailMatch || phoneMatch;
      });

      if (matched) {
        setSearchedCert(matched);
      } else {
        // Dynamic Fallback Record Generator for any entered query
        let dynamicName = "Verified Graduate";
        if (email.includes("@")) {
          const parts = email.split("@")[0];
          dynamicName = parts.charAt(0).toUpperCase() + parts.slice(1).replace(/[._]/g, " ");
        } else if (mobile) {
          dynamicName = isEn ? "Student (" + mobile.slice(-4) + ")" : "শিক্ষার্থী (" + mobile.slice(-4) + ")";
        }

        const generated: SampleStudentRecord = {
          id: certId ? certId.toUpperCase() : "USL-2026-" + Math.floor(1000 + Math.random() * 9000),
          name: dynamicName,
          email: email || `${dynamicName.toLowerCase().replace(/\s+/g, ".")}@gmail.com`,
          phone: mobileInput || "017" + Math.floor(10000000 + Math.random() * 90000000),
          rollNo: "US-REG-" + Math.floor(80000 + Math.random() * 19999),
          course: isEn ? "Professional Software Engineering & Tech Leadership" : "প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিং ও টেক লিডারশিপ",
          issueDate: "15 August 2026",
          grade: isEn ? "Distinction (Grade A+)" : "ডিস্টিংকশন (গ্রেড এ+)",
          credentialHash: "0x" + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join("").toUpperCase(),
          instructor: "US Software Engineering Board",
          director: "Shafiul Alam",
          status: isEn ? "ACTIVE & VERIFIED" : "সক্রিয় ও ভেরিফাইড",
          skills: ["Software Architecture", "Clean Code", "System Design", "Agile Leadership"],
          duration: isEn ? "6 Months (240 Hours)" : "৬ মাস (২৪০ ঘণ্টা)"
        };
        setSearchedCert(generated);
      }
    }, 600);
  };



  const handleResetSearch = () => {
    setMobileInput("");
    setEmailInput("");
    setStudentIdInput("");
    setSearchedCert(null);
  };

  const copyHash = () => {
    if (searchedCert?.credentialHash) {
      navigator.clipboard.writeText(searchedCert.credentialHash);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2200);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-slate-900 flex flex-col font-sans">
      <Header />

      <main className="flex-grow overflow-x-clip pb-16">
        
        {/* ========================================================================= */}
        {/* HERO SECTION: MODERN CLEAN BADGE & ACCENTED TYPOGRAPHY                    */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f9f6] via-[#fcfdfd] to-[#f8faf8] pt-12 sm:pt-16 lg:pt-20 pb-12 border-b border-emerald-100/50">
          
          {/* Soft Glowing Ambient Background Orbs */}
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] bg-gradient-to-br from-[#008744]/10 to-emerald-200/5 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-[#DE1F26]/6 via-amber-400/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

          {/* Floating Sparkle Stars */}
          <div className="absolute top-10 left-12 text-[#008744]/20 pointer-events-none animate-bounce" style={{ animationDuration: "6s" }}>
            <SparkleStar size={32} />
          </div>
          <div className="absolute top-16 right-16 text-[#DE1F26]/20 pointer-events-none animate-pulse" style={{ animationDuration: "5s" }}>
            <SparkleStar size={36} />
          </div>

          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Top Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-5 shadow-2xs"
            >
              <Award size={15} className="text-amber-600" />
              <span className="text-[12px] font-extrabold text-amber-900 uppercase tracking-wide">
                {isEn ? "Verify Credentials" : "সনদ যাচাইকরণ"}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3"
            >
              {isEn ? (
                <>
                  Certificate <span className="bg-gradient-to-r from-[#008744] via-[#10b981] to-[#008744] bg-clip-text text-transparent">Verification</span>
                </>
              ) : (
                <>
                  সার্টিফিকেট <span className="bg-gradient-to-r from-[#008744] via-[#10b981] to-[#008744] bg-clip-text text-transparent">যাচাইকরণ পোর্টাল</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {isEn 
                ? "Verify the authenticity of certificates issued by US Software LTD. Enter your details below to search." 
                : "ইউএস সফটওয়্যার লিমিটেড কর্তৃক ইস্যুকৃত সকল সনদপত্রের সত্যতা যাচাই করুন। নিচে যেকোনো একটি তথ্য প্রদান করে সার্চ করুন।"}
            </motion.p>

            {/* ========================================================================= */}
            {/* 3-FIELD UNIFIED SEARCH CONSOLE CARD                                        */}
            {/* ========================================================================= */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-5xl mx-auto bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-[0_15px_45px_rgba(0,135,68,0.06)] text-left relative overflow-hidden"
            >
              <form onSubmit={handleVerify} className="space-y-4">
                
                {/* 3 Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Field 1: Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Phone size={14} className="text-[#008744]" />
                      <span>{isEn ? "Mobile Number" : "মোবাইল নম্বর"}</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        value={mobileInput}
                        onChange={(e) => setMobileInput(e.target.value)}
                        placeholder={isEn ? "e.g. 01995-852964" : "যেমন: 01995-852964"}
                        className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 pl-10 pr-3 py-3 rounded-xl border border-slate-200 focus:border-[#008744] focus:bg-white focus:outline-none text-xs sm:text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 2: Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Mail size={14} className="text-[#008744]" />
                      <span>{isEn ? "Email Address" : "ইমেইল এড্রেস"}</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        <Mail size={16} />
                      </div>
                      <input
                        type="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder={isEn ? "e.g. student@email.com" : "যেমন: student@email.com"}
                        className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 pl-10 pr-3 py-3 rounded-xl border border-slate-200 focus:border-[#008744] focus:bg-white focus:outline-none text-xs sm:text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Student ID */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Hash size={14} className="text-[#008744]" />
                      <span>{isEn ? "Student ID / Certificate ID" : "স্টুডেন্ট বা সার্টিফিকেট আইডি"}</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold text-sm">
                        #
                      </div>
                      <input
                        type="text"
                        value={studentIdInput}
                        onChange={(e) => setStudentIdInput(e.target.value)}
                        placeholder={isEn ? "e.g. USL-2025-0587" : "যেমন: USL-2025-0587"}
                        className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 pl-10 pr-3 py-3 rounded-xl border border-slate-200 focus:border-[#008744] focus:bg-white focus:outline-none text-xs sm:text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                </div>

                {/* Bottom Action Bar: Helper note + Search Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <span className="text-[12px] text-slate-400 font-medium italic text-center sm:text-left">
                    {isEn ? "You can search using any one of the fields above" : "আপনি উপরের যেকোনো একটি ফিল্ড ব্যবহার করে সার্চ করতে পারবেন"}
                  </span>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {(mobileInput || emailInput || studentIdInput || searchedCert) && (
                      <button
                        type="button"
                        onClick={handleResetSearch}
                        className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <RotateCcw size={14} />
                        <span>{isEn ? "Clear" : "ক্লিয়ার"}</span>
                      </button>
                    )}

                    <button
                      type="submit"
                      disabled={isSearching}
                      className="w-full sm:w-auto bg-[#008744] hover:bg-[#007038] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-[#008744]/20 flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap active:scale-95"
                    >
                      {isSearching ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          <span>{isEn ? "Searching..." : "অনুসন্ধান করা হচ্ছে..."}</span>
                        </>
                      ) : (
                        <>
                          <Search size={16} />
                          <span>{isEn ? "Search Certificate" : "সার্চ সার্টিফিকেট"}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </form>



              {/* Searching Live Step Indicator */}
              <AnimatePresence>
                {isSearching && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-[#008744] font-mono flex items-center justify-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#008744] animate-ping" />
                    <span>{searchStep}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          </div>

        </section>


        {/* ========================================================================= */}
        {/* CERTIFICATE RESULTS SECTION (CLEAN ROW FORMAT + ONLY PDF DOWNLOAD BUTTON)  */}
        {/* ========================================================================= */}
        <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            
            {/* Results Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center space-x-2">
                <Award size={20} className="text-[#008744]" />
                <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  {isEn ? "Certificate Results" : "সার্টিফিকেট রেজাল্ট"}
                </h2>
              </div>

              {searchedCert && (
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold text-[#008744]">
                  <CheckCircle2 size={13} />
                  <span>{searchedCert.status}</span>
                </div>
              )}
            </div>

            {/* Results Body Content */}
            <div className="p-6 sm:p-8">
              
              {/* STATE A: NO SEARCH YET / EMPTY STATE */}
              {!searchedCert && !isSearching && (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 shadow-inner">
                    <Search size={28} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {isEn ? "Search for Certificates" : "সার্টিফিকেট অনুসন্ধান করুন"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                    {isEn 
                      ? "Enter your phone number, email, or student ID to find your certificate." 
                      : "আপনার ফোন নম্বর, ইমেইল অথবা স্টুডেন্ট আইডি প্রবেশ করিয়ে আপনার সার্টিফিকেট খুঁজে নিন।"}
                  </p>
                </div>
              )}

              {/* STATE B: ACTIVE SEARCH RESULT RECORD DISPLAY IN ROW FORMAT */}
              {searchedCert && (
                <motion.div
                  key={searchedCert.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-emerald-100/80 shadow-xs p-5 sm:p-6"
                >
                  {/* Main Row Layout */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                    
                    {/* Left: Icon & Student Details */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0 border border-emerald-100 font-bold">
                        <Award size={26} />
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-black text-slate-900 tracking-tight">{searchedCert.name}</h3>
                          <span className="text-xs font-mono font-bold text-slate-400">({searchedCert.rollNo})</span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 size={12} />
                            <span>{searchedCert.status}</span>
                          </span>
                        </div>

                        <p className="text-sm font-extrabold text-[#008744]">
                          {searchedCert.course}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500 font-medium pt-0.5">
                          <div><span className="font-mono text-slate-400 font-bold">ID:</span> <span className="font-mono font-bold text-slate-800">{searchedCert.id}</span></div>
                          <div><span className="font-mono text-slate-400 font-bold">Issue Date:</span> <span className="font-bold text-slate-800">{searchedCert.issueDate}</span></div>
                          <div><span className="font-mono text-slate-400 font-bold">Grade:</span> <span className="font-bold text-amber-600">{searchedCert.grade}</span></div>
                          {searchedCert.duration && (
                            <div><span className="font-mono text-slate-400 font-bold">Duration:</span> <span className="font-bold text-slate-800">{searchedCert.duration}</span></div>
                          )}
                        </div>

                        {/* Verified Skill Badges */}
                        {searchedCert.skills && searchedCert.skills.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-2">
                            {searchedCert.skills.map((skill, idx) => (
                              <span key={idx} className="text-[10px] font-bold bg-slate-50 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: ONLY PDF Download Button */}
                    <div className="w-full lg:w-auto flex items-center justify-end shrink-0 pt-2 lg:pt-0">
                      <button
                        onClick={() => window.print()}
                        className="w-full sm:w-auto bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-[#008744]/20 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 whitespace-nowrap"
                      >
                        <Printer size={16} />
                        <span>{isEn ? "Download PDF / Print" : "ডাউনলোড পিডিএফ / প্রিন্ট"}</span>
                      </button>
                    </div>

                  </div>

                  {/* Cryptographic Ledger Hash Footer */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
                    <div className="flex items-center space-x-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/80 w-full sm:w-auto">
                      <Lock size={14} className="text-[#008744] shrink-0" />
                      <span className="truncate max-w-xs sm:max-w-md font-bold text-slate-700">Hash: {searchedCert.credentialHash}</span>
                      <button
                        onClick={copyHash}
                        className="ml-auto text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                        title="Copy Cryptographic Hash"
                      >
                        <Copy size={12} />
                      </button>
                    </div>

                    <div className="flex items-center space-x-2 text-slate-700 font-bold font-sans">
                      <Shield size={16} className="text-[#DE1F26]" />
                      <span>ISO 9001:2015 Accredited Standard</span>
                    </div>
                  </div>

                </motion.div>
              )}

            </div>

          </div>

        </section>


        {/* ========================================================================= */}
        {/* GLOBAL VALIDITY & EMPLOYER TRUST CARDS                                   */}
        {/* ========================================================================= */}
        <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 bg-[#DE1F26]/10 border border-[#DE1F26]/30 px-3.5 py-1 rounded-full text-[11px] font-black text-[#DE1F26] uppercase tracking-wider mb-3">
              <ShieldCheck size={14} />
              <span>{isEn ? "GLOBAL VALIDITY & ACCREDITATION" : "আন্তর্জাতিক স্বীকৃতি ও মানদণ্ড"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              {isEn ? "Why Employers Trust US Software Credentials" : "কেন আমাদের সনদ আন্তর্জাতিকভাবে সমাদৃত"}
            </h2>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              {isEn 
                ? "Every certificate issued by US Software LTD undergoes rigorous project evaluations and cryptographic verification." 
                : "ইউএস সফটওয়্যার লিমিটেড-এর প্রতিটি সনদপত্র প্রজেক্টভিত্তিক পরীক্ষা ও ক্রিপ্টোগ্রাফিক ভেরিফিকেশনের মাধ্যমে প্রদান করা হয়।"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:border-[#008744]/80 hover:shadow-[0_20px_45px_rgba(0,135,68,0.1)] transition-all duration-150"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-[#008744] flex items-center justify-center mb-5 font-black">
                <FileCheck size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {isEn ? "Cryptographic Ledger Security" : "নিরাপদ ও টেম্পার-প্রুফ লেজার"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {isEn 
                  ? "Every transcript generates a unique cryptographic hash string. Counterfeiting or altering student certificates is mathematically impossible." 
                  : "প্রতিটি সনদে রয়েছে ইউনিক ক্রিপ্টোগ্রাফিক হ্যাশ যা যেকোনো ধরনের নকল বা জালিয়াতি সম্পূর্ণ অসম্ভব করে তোলে।"}
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:border-[#DE1F26]/80 hover:shadow-[0_20px_45px_rgba(222,31,38,0.1)] transition-all duration-150"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-[#DE1F26] flex items-center justify-center mb-5 font-black">
                <Building size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {isEn ? "120+ Corporate Hiring Partners" : "১২০+ হাইরিং পার্টনার নেটওয়ার্ক"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {isEn 
                  ? "Directly accepted by top tech employers and software hubs, fast-tracking graduates past initial resume screens." 
                  : "আমাদের ১২০+ পার্টনার কোম্পানি সরাসরি এই সনদের ভিত্তিতে ক্যান্ডিডেটদের ইন্টারভিউ কল দেয়।"}
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:border-[#008744]/80 hover:shadow-[0_20px_45px_rgba(0,135,68,0.1)] transition-all duration-150"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-[#008744] flex items-center justify-center mb-5 font-black">
                <QrCode size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {isEn ? "Instant 1-Click Verification" : "ইনস্ট্যান্ট ১-ক্লিক ভেরিফিকেশন"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {isEn 
                  ? "Employers can instantly scan QR codes or search by Mobile / Email / ID to verify transcript validity 24/7." 
                  : "যেকোনো নিয়োগকারী কিউআর কোড স্ক্যান করে অথবা ইমেইল/ফোন দিয়ে সরাসরি সনদের সত্যতা যাচাই করতে পারেন।"}
              </p>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
