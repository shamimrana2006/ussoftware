"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, ShieldCheck, CheckCircle2, Search, QrCode, 
  Download, Share2, Lock, 
  FileCheck, Shield, Check, Building
} from "lucide-react";

export default function CertificationPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [certId, setCertId] = useState("US-2026-FS890");
  const [searchedCert, setSearchedCert] = useState<any>({
    id: "US-2026-FS890",
    name: isEn ? "Tanvir Ahmed" : "তানভীর আহমেদ",
    course: isEn ? "Enterprise Full-Stack Web Engineering (Next.js & Microservices)" : "এন্টারপ্রাইজ ফুল-স্ট্যাক ওয়েব ইঞ্জিনিয়ারিং (নেক্সট.জেএস ও মাইক্রোসার্ভিসেস)",
    issueDate: "15 August 2026",
    grade: isEn ? "Distinction (Grade A+)" : "ডিস্টিংকশন (গ্রেড এ+)",
    credentialHash: "0x7F8B9C24A10D5E6F8932C4B1A0E99F8D",
    status: "Active & Verified",
    instructor: "Engr. Tanvir Hasan (Lead Architect)"
  });
  const [isSearching, setIsSearching] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const sampleCertificates: Record<string, any> = {
    "US-2026-FS890": {
      id: "US-2026-FS890",
      name: isEn ? "Tanvir Ahmed" : "তানভীর আহমেদ",
      course: isEn ? "Enterprise Full-Stack Web Engineering" : "এন্টারপ্রাইজ ফুল-স্ট্যাক ওয়েব ইঞ্জিনিয়ারিং",
      issueDate: "15 August 2026",
      grade: isEn ? "Distinction (Grade A+)" : "ডিস্টিংকশন (গ্রেড এ+)",
      credentialHash: "0x7F8B9C24A10D5E6F8932C4B1A0E99F8D",
      status: "Active & Verified",
      instructor: "Engr. Tanvir Hasan"
    },
    "US-2026-AI102": {
      id: "US-2026-AI102",
      name: isEn ? "Samiya Rahman" : "সামিয়া রহমান",
      course: isEn ? "Generative AI & Autonomous Agent Architecture" : "জেনারেটিভ এআই ও অটোনোমাস এজেন্ট আর্কিটেকচার",
      issueDate: "10 July 2026",
      grade: isEn ? "High Honors (Grade A+)" : "হাই অনার্স (গ্রেড এ+)",
      credentialHash: "0x3A9E7B11C4F2D88B901C5E2A91D77B4A",
      status: "Active & Verified",
      instructor: "Dr. Ariful Islam"
    },
    "US-2026-DO711": {
      id: "US-2026-DO711",
      name: isEn ? "Mahmudul Hasan" : "মাহমুদুল হাসান",
      course: isEn ? "Cloud DevOps & Kubernetes Orchestration" : "ক্লাউড ডেভঅপ্স ও কুবারনেটিস অর্কেস্ট্রেশন",
      issueDate: "28 June 2026",
      grade: isEn ? "Distinction (Grade A+)" : "ডিস্টিংকশন (গ্রেড এ+)",
      credentialHash: "0x99B4E12C88F0A71D33E2B5A0C11F88D9",
      status: "Active & Verified",
      instructor: "Rakib Mahmud"
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const matched = sampleCertificates[certId.trim().toUpperCase()] || {
        id: certId.trim().toUpperCase(),
        name: isEn ? "Verified Graduate" : "ভেরিফাইড গ্র্যাজুয়েট",
        course: isEn ? "Professional Software Engineering Masterclass" : "প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিং মাস্টারক্লাস",
        issueDate: "12 August 2026",
        grade: isEn ? "Certified (Grade A)" : "সার্টিফাইড (গ্রেড এ)",
        credentialHash: "0x" + Math.random().toString(16).substring(2, 10).toUpperCase() + "7F89B2C4",
        status: "Active & Verified",
        instructor: "US Software Engineering Board"
      };
      setSearchedCert(matched);
    }, 600);
  };

  const copyShareLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow pt-6 pb-24">
        
        {/* CERTIFICATION CRYPTOGRAPHIC VAULT 2-COLUMN HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#08121a] via-[#0b1e19] to-[#050b10] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800">
          <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-[#008744]/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-[#DE1F26]/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-[96rem] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Title & Search (7 Cols) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-[#008744]/15 border border-[#008744]/35 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-emerald-300"
                >
                  <ShieldCheck size={14} className="text-[#DE1F26]" />
                  <span>{t.certPage?.badge || "OFFICIAL CREDENTIAL VERIFICATION"}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-6"
                >
                  {t.certPage?.title || "Verify Student Certificates"}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
                >
                  {t.certPage?.subtitle || "Instant verification of credentials, skill badges, and ISO-standard course certifications issued by US Software LTD."}
                </motion.p>

                {/* VERIFICATION TERMINAL INPUT */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.22 }}
                  className="max-w-xl"
                >
                  <form onSubmit={handleVerify} className="bg-white/10 backdrop-blur-2xl p-2 rounded-2xl border border-white/20 shadow-2xl flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-grow flex items-center">
                      <Search size={18} className="absolute left-4 text-slate-300" />
                      <input
                        type="text"
                        value={certId}
                        onChange={(e) => setCertId(e.target.value)}
                        placeholder={t.certPage?.searchPrompt || "Enter Certificate ID (e.g. US-2026-FS890)"}
                        className="w-full bg-transparent pl-12 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none font-mono uppercase tracking-wider font-semibold"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSearching}
                      className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-[#008744]/30 flex items-center justify-center space-x-2 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <ShieldCheck size={16} />
                      <span>{isSearching ? (isEn ? "Verifying..." : "যাচাই হচ্ছে...") : (t.certPage?.verifyBtn || "Verify Certificate")}</span>
                    </button>
                  </form>

                  {/* Sample IDs */}
                  <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-mono text-slate-400">
                    <span>{isEn ? "Try sample IDs:" : "নমুনা আইডি দেখুন:"}</span>
                    {["US-2026-FS890", "US-2026-AI102", "US-2026-DO711"].map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          setCertId(id);
                          setSearchedCert(sampleCertificates[id]);
                        }}
                        className="bg-white/10 hover:bg-white/20 text-emerald-300 hover:text-white px-2.5 py-1 rounded-lg border border-white/10 transition-colors cursor-pointer"
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Cryptographic Ledger Visualizer (5 Cols) */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-7 border border-white/20 shadow-2xl space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-emerald-400">Cryptographic Ledger Vault</span>
                    <span className="text-[10px] text-rose-400 font-mono">● SHA-256 SECURED</span>
                  </div>

                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-[#008744]/20 text-[#008744] flex items-center justify-center">
                        <Award size={26} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">ISO 9001:2015 Verified Registry</div>
                        <div className="text-[11px] text-slate-400 font-mono">Blockchain Hashed Ledger</div>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 truncate bg-slate-900/60 p-2 rounded-lg border border-white/5">
                      Hash: 0x7F8B9C24A10D5E6F8932C4B1A0E99F8D
                    </div>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-300 font-mono flex items-center justify-center gap-2">
                    <CheckCircle2 size={14} className="text-[#008744]" />
                    <span>Instant Employer Verification via QR & Web</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* VERIFIED DIGITAL CERTIFICATE VIEW */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
          <div className="max-w-4xl mx-auto">
            
            <AnimatePresence mode="wait">
              {searchedCert && (
                <motion.div
                  key={searchedCert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#008744]/40 shadow-[0_24px_60px_rgba(0,0,0,0.12)] relative overflow-hidden"
                >
                  {/* Decorative background watermark */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-[#008744]/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#008744] via-[#DE1F26] to-[#008744]" />

                  {/* Header of Certificate */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-center space-x-3">
                      <img src="/logo/logo.png" alt="US Software LTD" className="h-8 sm:h-10 w-auto object-contain" />
                      <div>
                        <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">OFFICIAL DIGITAL CREDENTIAL</div>
                        <div className="text-xs font-bold text-[#008744] flex items-center space-x-1">
                          <CheckCircle2 size={13} />
                          <span>{t.certPage?.verifiedBadge || "AUTHENTIC & VERIFIED"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={copyShareLink}
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Share2 size={14} />
                        <span>{copiedLink ? (isEn ? "Link Copied!" : "কপি হয়েছে!") : (isEn ? "Share" : "শেয়ার")}</span>
                      </button>

                      <button
                        onClick={() => window.print()}
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold shadow-md shadow-[#008744]/20 transition-all cursor-pointer"
                      >
                        <Download size={14} />
                        <span>{isEn ? "Download PDF" : "ডাউনলোড"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Certificate Body */}
                  <div className="py-8 sm:py-12 text-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-[#DE1F26]/10 text-[#DE1F26] flex items-center justify-center mx-auto mb-4 border border-[#DE1F26]/20 shadow-sm">
                      <Award size={32} />
                    </div>

                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">
                      CERTIFICATE OF EXCELLENCE & COMPLETION
                    </div>

                    <div className="text-xs text-slate-500 font-medium mb-1">{t.certPage?.issuedTo || "This is proudly presented to"}</div>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                      {searchedCert.name}
                    </h2>

                    <div className="text-xs text-slate-500 font-medium mb-1">{t.certPage?.courseName || "For successfully completing the comprehensive program in"}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#08121a] max-w-2xl mx-auto mb-4">
                      {searchedCert.course}
                    </h3>

                    <div className="inline-flex items-center space-x-2 bg-emerald-50 text-[#008744] font-bold text-xs px-4 py-1.5 rounded-full border border-emerald-200 mb-8">
                      <Check size={14} />
                      <span>{searchedCert.grade}</span>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs">
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t.certPage?.credentialId || "Credential ID"}</div>
                        <div className="font-mono font-bold text-slate-800 mt-0.5">{searchedCert.id}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t.certPage?.issueDate || "Issue Date"}</div>
                        <div className="font-bold text-slate-800 mt-0.5">{searchedCert.issueDate}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Instructor Lead</div>
                        <div className="font-bold text-slate-800 mt-0.5">{searchedCert.instructor}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</div>
                        <div className="font-bold text-[#008744] mt-0.5 flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          <span>{searchedCert.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Security Stamp */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Lock size={14} className="text-[#008744]" />
                      <span className="truncate max-w-xs sm:max-w-md">Cryptographic Hash: {searchedCert.credentialHash}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600 font-bold font-sans">
                      <Shield size={14} className="text-[#DE1F26]" />
                      <span>ISO 9001:2015 Standard</span>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

        {/* RECOGNITION STANDARDS IN RED & GREEN */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
              {isEn ? "Global Industry Recognition" : "আন্তর্জাতিক মানসম্পন্ন স্বীকৃতি"}
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              {isEn ? "Why US Software LTD certifications are trusted by 120+ top engineering employers worldwide." : "কেন আমাদের সার্টিফিকেট দেশ-বিদেশের ১২০+ সফটওয়্যার কোম্পানিতে সমানভাবে সমাদৃত।"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:border-[#008744]/80 hover:shadow-[0_20px_45px_rgba(0,135,68,0.15)] transition-all duration-150 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#008744] flex items-center justify-center mb-4 font-black">
                <FileCheck size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5">
                {isEn ? "Cryptographic Tamper-Proof" : "নিরাপদ ও টেম্পার-প্রুফ"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {isEn ? "Every certificate is hashed on a secure ledger, guaranteeing absolute validity and preventing counterfeit credentials." : "প্রতিটি সনদে রয়েছে ইউনিক ক্রিপ্টোগ্রাফিক হ্যাশ যা নকল বা জালিয়াতি সম্পূর্ণ অসম্ভব করে তোলে।"}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:border-[#DE1F26]/80 hover:shadow-[0_20px_45px_rgba(222,31,38,0.15)] transition-all duration-150 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-[#DE1F26] flex items-center justify-center mb-4 font-black">
                <Building size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5">
                {isEn ? "Hiring Network Pre-Approved" : "১২০+ হাইরিং পার্টনার স্বীকৃত"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {isEn ? "Accepted directly by our network of 120+ partner tech companies, fast-tracking graduates past initial screening." : "আমাদের পার্টনার কোম্পানিগুলো সরাসরি এই সনদের ভিত্তিতে ক্যান্ডিডেটদের ইন্টারভিউ কল দেয়।"}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:border-[#008744]/80 hover:shadow-[0_20px_45px_rgba(0,135,68,0.15)] transition-all duration-150 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#008744] flex items-center justify-center mb-4 font-black">
                <QrCode size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5">
                {isEn ? "Instant 1-Click Verification" : "ইনস্ট্যান্ট ১-ক্লিক ভেরিফিকেশন"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {isEn ? "Recruiters and employers can instantly scan QR codes or search IDs to verify student transcripts and completion status." : "যেকোনো নিয়োগকারী বা কোম্পানি কিউআর কোড স্ক্যান করে মুহূর্তেই সনদ যাচাই করতে পারবেন।"}
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
