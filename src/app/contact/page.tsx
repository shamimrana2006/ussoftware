"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, 
  ChevronDown, HelpCircle, 
  MessageCircle, ArrowRight, Sparkles,
  ExternalLink, Compass, Building2, Star
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/ussoftwareltd",
      hoverClass: "hover:bg-[#1877F2] hover:text-white text-slate-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@ussoftwareltd",
      hoverClass: "hover:bg-[#FF0000] hover:text-white text-slate-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.943-.997 1.687-1.94 1.94C17.82 19.9 12 19.9 12 19.9s-5.82 0-7.603-.458c-.943-.253-1.686-.997-1.94-1.94C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.943.997-1.687 1.94-1.94C6.18 4.1 12 4.1 12 4.1s5.82 0 7.603.458c.943.253 1.686.997 1.94 1.94zM10 15.5l6-3.5-6-3.5v7z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ussoftwareltd",
      hoverClass: "hover:bg-[#0A66C2] hover:text-white text-slate-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/8801712345678",
      hoverClass: "hover:bg-[#008744] hover:text-white text-slate-600",
      icon: <FaWhatsapp size={15} />
    }
  ];

  const faqs = [
    {
      q: isEn ? "How do I apply or book a counseling session?" : "কোর্সে কীভাবে ভর্তি হব বা কাউন্সিলিং সেশন বুক করব?",
      a: isEn 
        ? "Fill out the contact form on this page or message us directly on WhatsApp (+880 1712-34578). Our lead academic advisor will connect with you within 15 minutes to guide you on syllabus, prerequisites, and schedules." 
        : "এই পেইজের ফর্মটি পূরণ করুন অথবা সরাসরি আমাদের হোয়াটসঅ্যাপে (+৮৮০ ১৭১২-৩৪৫৭৮) মেসেজ দিন। আমাদের সিনিয়র কাউন্সিলর ১৫ মিনিটের মধ্যে যোগাযোগ করে সম্পূর্ণ ভর্তি গাইডলাইন ও সময়সূচি জানিয়ে দেবেন।"
    },
    {
      q: isEn ? "Are courses held online, offline, or hybrid?" : "ক্লাসগুলো কি সরাসরি অফলাইনে হয় নাকি অনলাইনে?",
      a: isEn 
        ? "We provide both interactive offline batches at our Panthapath Dhaka Campus and 100% live online interactive batches. All students get lifetime LMS recordings and repository access." 
        : "আমাদের পান্থপথ ঢাকা ক্যাম্পাসে সরাসরি অফলাইন ক্লাস এবং দূরবর্তী শিক্ষার্থীদের জন্য ১০০% লাইভ অনলাইন ক্লাসের ব্যবস্থা রয়েছে। সব ক্লাসের রেকর্ডিং ও সোর্স কোড লাইফটাইম অ্যাক্সেস পাবেন।"
    },
    {
      q: isEn ? "How does the job placement & internship assistance work?" : "প্লেসমেন্ট সাপোর্ট ও ইন্টার্নশিপ সুবিধা কীভাবে কাজ করে?",
      a: isEn 
        ? "We partner with 120+ software companies. Graduates completing capstone enterprise projects receive direct interview referrals, resume optimization, and mock technical defense coaching." 
        : "১২০+ শীর্ষ সফটওয়্যার পার্টনার প্রতিষ্ঠানের সাথে আমাদের সরাসরি প্লেসমেন্ট নেটওয়ার্ক রয়েছে। সফল শিক্ষার্থীদের সরাসরি ইন্টারভিউ রেফারেল ও পেইড ইন্টার্নশিপ সুযোগ প্রদান করা হয়।"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Header />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: BRAND ACCENTED & COMPACT                                 */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 bg-gradient-to-b from-white via-slate-50/60 to-[#f8fafc] border-b border-slate-200/70 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#08121a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#008744]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#DE1F26]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008744]/10 to-[#DE1F26]/10 border border-[#008744]/25 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#08121a] mb-4 shadow-2xs"
            >
              <Sparkles size={13} className="text-[#008744] animate-pulse" />
              <span>{isEn ? "US SOFTWARE LIMITED • ADMISSIONS & INQUIRY HUB" : "ইউএস সফটওয়্যার লিমিটেড • যোগাযোগ ও তথ্যকেন্দ্র"}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08121a] tracking-tight leading-[1.18] mb-4"
            >
              {isEn ? (
                <>
                  Connect with <span className="text-[#008744]">US Software</span> & Elevate Your <span className="text-[#DE1F26]">Tech Career</span>
                </>
              ) : (
                <>
                  আপনার স্বপ্নের <span className="text-[#008744]">টেক ক্যারিয়ার</span> গড়তে আমাদের সাথে <span className="text-[#DE1F26]">যোগাযোগ করুন</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8"
            >
              {isEn
                ? "Visit our Panthapath campus, send an inquiry through our direct concierge form, or connect with our lead engineering counselors."
                : "আমাদের ঢাকা ক্যাম্পাসে সরাসরি চলে আসুন, ফর্মের মাধ্যমে তথ্য পাঠান অথবা আমাদের সিনিয়র ইঞ্জিনিয়ারদের সাথে সরাসরি কথা বলুন।"}
            </motion.p>

            {/* 4 Trust & Direct Action Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto pt-5 border-t border-slate-200/60"
            >
              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/90 hover:bg-emerald-50/80 backdrop-blur-sm border border-slate-200/80 hover:border-emerald-300 rounded-xl py-2.5 px-3 shadow-2xs transition-all group cursor-pointer"
              >
                <FaWhatsapp size={15} className="text-[#008744] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#008744] transition-colors">{isEn ? "WhatsApp Desk" : "হোয়াটসঅ্যাপ হেল্পলাইন"}</span>
              </a>

              <a
                href="tel:+8801712345678"
                className="flex items-center justify-center gap-2 bg-white/90 hover:bg-red-50/80 backdrop-blur-sm border border-slate-200/80 hover:border-red-300 rounded-xl py-2.5 px-3 shadow-2xs transition-all group cursor-pointer"
              >
                <Phone size={14} className="text-[#DE1F26] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#DE1F26] transition-colors">{isEn ? "Admissions Hotline" : "ভর্তি সংক্রান্ত হেল্পলাইন"}</span>
              </a>

              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-xl py-2.5 px-3 shadow-2xs">
                <Building2 size={14} className="text-[#008744] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{isEn ? "Panthapath, Dhaka" : "পান্থপথ, ঢাকা"}</span>
              </div>

              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-xl py-2.5 px-3 shadow-2xs">
                <Star size={14} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{isEn ? "4.9/5 Rating" : "৪.৯/৫ রেটিং"}</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTACT SECTION: MASTER CARD                                      */}
      {/* ========================================================================= */}
      <main className="flex-grow py-12 sm:py-16 select-none">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 space-y-14 sm:space-y-16">
          
          {/* THE MASTER CARD (WITH US SOFTWARE GREEN & RED BRAND ACCENTS) */}
          <div className="max-w-5xl mx-auto rounded-[36px] sm:rounded-[44px] bg-white border border-slate-100 p-6 sm:p-10 lg:p-12 shadow-[0_12px_35px_rgba(0,0,0,0.03)] relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* LEFT SIDE: "Let's talk" + FORM INPUTS (6 COLS) */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                
                {/* Title in US Software Green */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#008744] tracking-tight leading-none mb-3 flex items-center gap-2">
                  <span>{isEn ? "Let's talk" : "কথা বলুন আমাদের সাথে"}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DE1F26] inline-block animate-pulse" />
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md font-normal mb-8">
                  {isEn 
                    ? "To request a course roadmap, admission info, or custom software solutions, contact us directly or fill out the form and we will get back to you promptly."
                    : "কোর্সে ভর্তি, ক্যারিয়ার পরামর্শ বা সফটওয়্যার ডেভেলপমেন্ট সেবা সংক্রান্ত তথ্যের জন্য ফর্মটি পূরণ করুন, আমরা দ্রুত যোগাযোগ করব।"}
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center bg-[#f4f6fa] rounded-3xl p-6 border border-emerald-100"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#008744] flex items-center justify-center mx-auto mb-3 shadow-inner">
                      <CheckCircle2 size={30} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">
                      {isEn ? "Message Received!" : "বার্তাটি সফলভাবে পৌঁছেছে!"}
                    </h3>
                    <p className="text-xs text-slate-500 mb-5 font-normal">
                      {isEn ? "Our counseling team will get back to you promptly." : "আমাদের প্রতিনিধি খুব দ্রুত আপনার সাথে যোগাযোগ করবেন।"}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      {isEn ? "Send Another Message" : "আরেকটি বার্তা পাঠান"}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isEn ? "Your Name *" : "আপনার নাম *"}
                        className="w-full bg-[#f4f6fa] text-slate-900 text-sm font-semibold rounded-2xl px-5 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#008744]/30 border border-transparent focus:border-[#008744] transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isEn ? "Your Email Address *" : "আপনার ইমেইল এড্রেস *"}
                        className="w-full bg-[#f4f6fa] text-slate-900 text-sm font-semibold rounded-2xl px-5 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#008744]/30 border border-transparent focus:border-[#008744] transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={isEn ? "How can we help you? *" : "কীভাবে আপনাকে সাহায্য করতে পারি? *"}
                        className="w-full bg-[#f4f6fa] text-slate-900 text-sm font-semibold rounded-2xl px-5 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#008744]/30 border border-transparent focus:border-[#008744] transition-all placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#008744] hover:bg-[#007038] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base py-4 rounded-2xl shadow-[0_8px_20px_rgba(0,135,68,0.25)] transition-all cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>{isEn ? "Sending Message..." : "বার্তা পাঠানো হচ্ছে..."}</span>
                      ) : (
                        <>
                          <span>{isEn ? "Send Message" : "বার্তা পাঠান"}</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>

              {/* RIGHT SIDE: 3D ANIMATED ILLUSTRATION IN US SOFTWARE BRAND COLORS (6 COLS) */}
              <div className="lg:col-span-6 flex flex-col justify-between items-center lg:items-start pl-0 lg:pl-4 space-y-6">
                
                {/* 3D ILLUSTRATION COMPONENT IN US SOFTWARE COLORS */}
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[220px] sm:h-[240px] mx-auto flex items-center justify-center select-none pointer-events-none">
                  
                  {/* Floating Notification Bell Icon in Emerald Green (Top Left) */}
                  <motion.div
                    animate={{ 
                      y: [-4, 6, -4],
                      rotate: [-8, 8, -8]
                    }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-2 left-8 w-11 h-11 rounded-full bg-[#008744] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,135,68,0.4)] z-30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </motion.div>

                  {/* Floating Red Chat Bubble Icon in US Software Red (Middle Left) */}
                  <motion.div
                    animate={{ 
                      y: [6, -6, 6],
                      scale: [0.96, 1.04, 0.96]
                    }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="absolute top-16 left-0 w-11 h-11 rounded-2xl bg-[#DE1F26] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(222,31,38,0.4)] z-30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </motion.div>

                  {/* Floating Red Paper Plane in US Software Red (Top Right) */}
                  <motion.div
                    animate={{ 
                      y: [4, -8, 4],
                      x: [-2, 4, -2],
                      rotate: [10, 22, 10]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1 right-4 text-[#DE1F26] z-30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="m21.426 11.074-18-8A1 1 0 0 0 2.08 4.373l3.528 7.054a1 1 0 0 1 0 .894L2.08 19.375a1 1 0 0 0 1.346 1.3l18-8a1 1 0 0 0 0-1.601z"/>
                    </svg>
                  </motion.div>

                  {/* Floating Confetti: US Software Red Dot (Top) */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 left-36 w-3 h-3 rounded-full bg-[#DE1F26]"
                  />

                  {/* Floating Confetti: Amber Dot (Bottom Left) */}
                  <motion.div
                    animate={{ scale: [0.9, 1.2, 0.9] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute bottom-6 left-12 w-4 h-4 rounded-full bg-[#f59e0b]"
                  />

                  {/* Floating Confetti: US Software Green Dot (Right) */}
                  <motion.div
                    animate={{ y: [3, -4, 3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-12 right-0 w-3 h-3 rounded-full bg-[#008744]"
                  />

                  {/* Floating Confetti: Green Ring Donut (Right) */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-10 right-4 w-5 h-5 rounded-full border-[3px] border-[#008744]"
                  />

                  {/* Floating Confetti: Red Accent Dot (Bottom Right) */}
                  <div className="absolute bottom-6 right-12 w-2.5 h-2.5 rounded-full bg-[#DE1F26]" />

                  {/* MAIN 3D ENVELOPE WITH LETTER IN US SOFTWARE GREEN (CENTER) */}
                  <motion.div
                    animate={{ 
                      y: [-4, 4, -4]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex flex-col items-center z-20"
                  >
                    {/* White Emerging Letter */}
                    <motion.div
                      animate={{ y: [-3, 1, -3] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-40 sm:w-44 h-26 bg-white/95 rounded-2xl shadow-lg border border-slate-100 p-3 space-y-2 -mb-8 z-10"
                    >
                      <div className="w-20 h-1.5 rounded-full bg-[#008744]/70" />
                      <div className="w-full h-1 rounded-full bg-slate-200" />
                      <div className="w-4/5 h-1 rounded-full bg-slate-200" />
                      <div className="w-2/3 h-1 rounded-full bg-slate-200" />
                    </motion.div>

                    {/* US Software Green Open Envelope Box */}
                    <div className="w-48 sm:w-52 h-26 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#008744] via-emerald-600 to-[#007038] shadow-[0_15px_35px_rgba(0,135,68,0.35)] relative overflow-hidden flex items-center justify-center text-white border border-[#007038]">
                      {/* V-Shape Envelope Flap */}
                      <div className="absolute top-0 inset-x-0 h-12 bg-[#007038] [clip-path:polygon(0_0,100%_0,50%_100%)] opacity-90" />
                    </div>
                  </motion.div>

                </div>

                {/* CONTACT DETAILS LIST (US SOFTWARE BRAND ACCENTS) */}
                <div className="space-y-4 text-sm sm:text-base text-slate-700 w-full pl-2 font-medium">
                  <div className="flex items-center space-x-3.5">
                    <MapPin size={18} className="text-[#008744] flex-shrink-0" />
                    <span className="font-bold text-slate-800">Panthapath, Dhanmondi, Dhaka, Bangladesh</span>
                  </div>

                  <div className="flex items-center space-x-3.5">
                    <Phone size={18} className="text-[#DE1F26] flex-shrink-0" />
                    <span className="font-bold text-slate-800">{isEn ? "Open to Connect • +880 1712-34578" : "যোগাযোগের জন্য উন্মুক্ত • +৮৮০ ১৭১২-৩৪৫৭৮"}</span>
                  </div>

                  <div className="flex items-center space-x-3.5">
                    <Mail size={18} className="text-[#008744] flex-shrink-0" />
                    <span className="font-bold text-slate-800 font-mono">info@ussoftwareltd.com</span>
                  </div>
                </div>

                {/* SOCIAL MEDIA CIRCULAR ICONS (BOTTOM RIGHT) */}
                <div className="flex items-center space-x-3 pl-2 pt-2">
                  {socialLinks.map((social, sIdx) => (
                    <a
                      key={sIdx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className={`w-10 h-10 rounded-full bg-[#edf2f7] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 cursor-pointer ${social.hoverClass}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* 3. ROW: GOOGLE MAP (LEFT COLUMN) & FAQ ACCORDION (RIGHT COLUMN)           */}
          {/* ========================================================================= */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: GOOGLE MAP & LOCATION (6 COLS) */}
            <div className="lg:col-span-6 rounded-[36px] bg-white border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6">
              
              {/* Map Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#008744] flex items-center justify-center border border-emerald-100 shadow-xs">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      {isEn ? "U S Software Limited Campus" : "ইউএস সফটওয়্যার লিমিটেড ক্যাম্পাস"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                      {isEn ? "Panthapath, Dhanmondi, Dhaka" : "পান্থপথ, ধানমন্ডি, ঢাকা"}
                    </p>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="flex items-center space-x-2 self-start sm:self-auto">
                  {socialLinks.map((social, sIdx) => (
                    <a
                      key={sIdx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all shadow-2xs hover:scale-105 ${social.hoverClass}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="w-full h-[320px] sm:h-[360px] rounded-3xl overflow-hidden relative border border-slate-200 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26029.645132847898!2d90.36776395155285!3d23.741634842481364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bb51884d03%3A0xa8faf6fd1f993941!2sU%20S%20Software%20Limited!5e0!3m2!1sen!2sbd!4v1787391961224!5m2!1sen!2sbd" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full absolute inset-0"
                  title="U S Software Limited Google Map Location"
                />

                {/* Floating Overlay Badge on Map */}
                <div className="absolute top-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] pointer-events-auto">
                  <div className="flex items-center space-x-1.5 text-[#008744] font-extrabold text-xs sm:text-sm">
                    <Building2 size={15} className="text-[#DE1F26]" />
                    <span>U S Software Limited</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {isEn ? "Level 7, Innovation Tower" : "লেভেল ৭, ইনোভেশন টাওয়ার"}
                  </p>
                </div>
              </div>

              {/* Map Bottom Footer Actions */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <MapPin size={17} className="text-[#008744] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {isEn ? "Panthapath, Dhaka-1205" : "পান্থপথ, ধানমন্ডি, ঢাকা"}
                  </span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <a
                    href="https://wa.me/8801712345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 bg-emerald-50 hover:bg-emerald-100 text-[#008744] border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    <FaWhatsapp size={15} />
                    <span>{isEn ? "Location Chat" : "হোয়াটসঅ্যাপ"}</span>
                  </a>

                  <a
                    href="https://maps.google.com/?cid=12176461947230493057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 bg-[#008744] hover:bg-[#007038] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    <span>{isEn ? "Directions" : "ম্যাপে যান"}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: FAQ ACCORDION (6 COLS) */}
            <div className="lg:col-span-6 rounded-[36px] bg-white border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6">
              
              {/* FAQ Header */}
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#008744] uppercase tracking-wider mb-1">
                    <HelpCircle size={14} />
                    <span>{isEn ? "GOT QUESTIONS?" : "সাধারণ জিজ্ঞাসা"}</span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900">
                    {isEn ? "Frequently Asked Questions" : "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী"}
                  </h3>
                </div>
                <span className="text-xs font-extrabold text-[#008744] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  {faqs.length} {isEn ? "FAQs" : "প্রশ্ন"}
                </span>
              </div>

              {/* Accordion Questions List */}
              <div className="space-y-3.5 flex-grow">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50/80 rounded-2xl border border-slate-200/80 overflow-hidden transition-all hover:border-[#008744]/50 shadow-2xs"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4.5 sm:p-5 text-left flex items-center justify-between font-extrabold text-slate-900 text-base sm:text-lg cursor-pointer hover:text-[#008744] transition-colors"
                      >
                        <span className="pr-3 leading-snug">{faq.q}</span>
                        <ChevronDown size={20} className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-[#008744]" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-5 pb-5 pt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal border-t border-slate-200/60 bg-white/90"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Support Callout */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600">
                <span>{isEn ? "Need custom help?" : "আরও কিছু জানতে চান?"}</span>
                <a 
                  href="https://wa.me/8801712345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-extrabold text-[#008744] hover:underline inline-flex items-center gap-1.5"
                >
                  <FaWhatsapp size={16} />
                  <span>{isEn ? "Live Chat Counselor" : "কাউন্সিলর চ্যাট"}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
