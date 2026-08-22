"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowUp,
  ArrowRight,
  Code2,
  Terminal,
  Zap,
  Heart,
  Send,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const isEn = language === "en";

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.5, immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const footerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3D Motion Values triggered on WHOLE FOOTER hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 28, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 28, mass: 0.5 });

  // Extremely Subtle & Gentle Tilt Angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2.5deg", "-2.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);
  const cardTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], [-2, 2]);
  const cardTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], [-2, 2]);

  const handleFooterMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleFooterMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 500);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.5, immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleFooterMouseMove}
      onMouseLeave={handleFooterMouseLeave}
      style={{ fontFamily: "var(--font-hind), sans-serif" }}
      className="relative bg-gradient-to-b from-[#f8fafc] via-[#f5f9f7] to-[#eef5f1] text-slate-700 pt-8 sm:pt-12 overflow-hidden select-none border-t border-slate-200/60"
    >
      {/* Ambient Infinite Floating Color Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.35, 0.7, 0.35]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-96 h-96 bg-[#008744]/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1], 
          x: [0, -25, 0],
          y: [0, 25, 0],
          opacity: [0.25, 0.55, 0.25]
        }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-[#DE1F26]/8 rounded-full blur-[120px] pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(#0087440d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 1. TOP CUTE & COMPACT 3D HANGING/SWINGING CARD WITH INFINITE FLOAT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 [perspective:1400px]">
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            rotateX,
            rotateY,
            x: cardTranslateX,
            transformStyle: "preserve-3d",
          }}
          className="relative rounded-[28px] p-[2px] overflow-hidden group/card shadow-[0_16px_40px_rgba(0,135,68,0.16)] hover:shadow-[0_22px_55px_rgba(0,135,68,0.30)] transition-shadow duration-300"
        >
          {/* CONTINUOUS INFINITE SHIMMER LIGHT BEAM */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-20"
          />

          {/* ANIMATED GLOWING BORDER */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-[#008744] via-emerald-300 via-[#DE1F26] to-[#008744] bg-[length:200%_200%] opacity-40 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Static Border Fallback */}
          <div className="absolute inset-0 rounded-[28px] border border-white/35 group-hover/card:opacity-0 transition-opacity pointer-events-none" />

          {/* Card Inner Content */}
          <div className="relative rounded-[26px] bg-gradient-to-r from-[#008744] via-[#056839] to-[#034d28] text-white py-5 px-6 sm:py-6 sm:px-8 overflow-hidden">
            {/* Ambient Corner Soft Glows */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#DE1F26]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div
              style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
              className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6"
            >
              {/* Left Side: Super Cute Friendly Mascot & Speech Bubble */}
              <div
                style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
                className="flex items-center space-x-3.5 flex-shrink-0"
              >
                {/* Cute Floating Bot Mascot */}
                <motion.div
                  animate={{
                    y: [-3, 3, -3],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-white via-slate-100 to-emerald-100 p-1 shadow-lg flex items-center justify-center flex-shrink-0 cursor-pointer"
                >
                  {/* Little Antenna Dot */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-300 animate-ping opacity-80" />
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-400" />

                  {/* Robot Screen Face */}
                  <div className="w-full h-full bg-[#081520] rounded-xl flex flex-col items-center justify-center p-1 relative overflow-hidden">
                    {/* Glowing Eyes */}
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scaleY: [1, 1, 0.1, 1] }}
                        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.85, 0.9, 1] }}
                        className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
                      />
                      <motion.div
                        animate={{ scaleY: [1, 1, 0.1, 1] }}
                        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.85, 0.9, 1] }}
                        className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
                      />
                    </div>
                    {/* Tiny Smile */}
                    <div className="w-2.5 h-1 border-b-2 border-emerald-400/80 rounded-full mt-1" />
                  </div>
                </motion.div>

                {/* Cute Text & Pill Tag */}
                <div>
                  <div className="inline-flex items-center space-x-1 bg-white/20 border border-white/30 text-emerald-100 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    <Sparkles size={10} className="text-yellow-300" />
                    <span>{isEn ? "STAY SMART" : "স্মার্ট থাকুন"}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight mt-0.5 flex items-center gap-1.5">
                    <span>{isEn ? "Join 6,200+ Developers" : "৬,২০০+ ডেভেলপারদের সাথে যুক্ত হন"}</span>
                    <motion.span
                      animate={{ rotate: [0, 20, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  </h3>
                  <p className="text-[11px] text-emerald-100 font-medium">
                    {isEn ? "Get tech insights & exclusive perks" : "টেক টিপস ও স্কলারশিপ আপডেট পান"}
                  </p>
                </div>
              </div>

              {/* Right Side: Cute Compact Pill Input Bar */}
              <div
                style={{ transform: "translateZ(30px)" }}
                className="w-full sm:w-auto flex-1 max-w-sm"
              >
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center space-x-1.5 bg-white/25 border border-white/40 text-white px-3.5 py-2 rounded-full backdrop-blur-md font-bold text-xs shadow-xs"
                  >
                    <CheckCircle2 size={14} className="text-emerald-300" />
                    <span>{isEn ? "Welcome aboard! 🎉" : "যুক্ত হওয়ার জন্য ধন্যবাদ! 🎉"}</span>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="relative flex items-center bg-white/20 hover:bg-white/25 focus-within:bg-white/30 border border-white/35 rounded-full p-1 backdrop-blur-md shadow-inner transition-all"
                  >
                    <div className="pl-3 pr-1.5 text-white/80 flex items-center pointer-events-none">
                      <Mail size={14} />
                    </div>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isEn ? "Your email..." : "আপনার ইমেইল..."}
                      required
                      className="w-full bg-transparent text-white placeholder-white/70 text-xs font-medium outline-none pr-20"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-1 top-1 bottom-1 bg-white hover:bg-emerald-50 text-[#008744] hover:text-[#056839] px-3.5 sm:px-4 rounded-full font-black text-[11px] shadow-sm transition-all flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
                    >
                      <span>{isSubmitting ? "..." : isEn ? "Join" : "যুক্ত হন"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. MAIN 5-COLUMN FOOTER SECTION WITH LIVELY MICRO-ANIMATIONS */}
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Column 1: Brand Logo, Description & Magnetic Social Icons (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" onClick={handleHomeClick} className="inline-flex items-center space-x-2 group">
              <img
                src="/logo/logo.png"
                alt="US Software LTD"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              {isEn
                ? "US Software LTD is an enterprise software engineering company and premier IT academy delivering smart, scalable, and secure software solutions."
                : "ইউএস সফটওয়্যার লিমিটেড একটি এন্টারপ্রাইজ সফটওয়্যার ইঞ্জিনিয়ারিং প্রতিষ্ঠান এবং প্রিমিয়ার আইটি একাডেমি, যা বাস্তবমুখী প্রযুক্তি শিক্ষা প্রদান করে।"}
            </p>

            {/* Magnetic Animated Social Icons Row */}
            <div className="flex items-center space-x-2.5 pt-2">
              <motion.a
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(24,119,242,0.4)]"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-700 text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#DE1F26] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(222,31,38,0.4)]"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#0077B5] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(0,119,181,0.4)]"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                href="https://wa.me/880171234578"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(37,211,102,0.4)]"
                aria-label="WhatsApp"
              >
                <Phone size={13} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Company (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-slate-900 text-sm font-bold tracking-tight flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
              <span>{isEn ? "Company" : "কোম্পানি"}</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {[
                { name: isEn ? "About Us" : "আমাদের সম্পর্কে", href: "/about" },
                { name: isEn ? "Services" : "সেবাসমূহ", href: "/courses" },
                { name: isEn ? "Community" : "কমিউনিটি", href: "/projects" },
                { name: isEn ? "Testimonial" : "টেস্টিমোনিয়াল", href: "/about" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#008744] transition-all flex items-center group/link font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#008744] mr-2 opacity-0 -ml-3 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                    <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support / Programs (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-slate-900 text-sm font-bold tracking-tight flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE1F26]" />
              <span>{isEn ? "Support" : "প্রোগ্রামসমূহ"}</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {[
                { name: isEn ? "Help Center" : "হেল্প সেন্টার", href: "/contact" },
                { name: isEn ? "Full-Stack Web" : "ফুল-স্ট্যাক ওয়েব", href: "/courses" },
                { name: isEn ? "AI & Agents" : "এআই ও এজেন্টস", href: "/courses" },
                { name: isEn ? "Feedback" : "ফিডব্যাক", href: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#008744] transition-all flex items-center group/link font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#008744] mr-2 opacity-0 -ml-3 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                    <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-slate-900 text-sm font-bold tracking-tight flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
              <span>{isEn ? "Links" : "কুইক লিংকস"}</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {[
                { name: isEn ? "Courses" : "সকল কোর্স", href: "/courses" },
                { name: isEn ? "Become Teacher" : "মেন্টরশিপ", href: "/mentors" },
                { name: isEn ? "Verification" : "সার্টিফিকেট যাচাই", href: "/certification" },
                { name: isEn ? "3D Canvas" : "৩ডি ক্যানভাস", href: "/canvas" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#008744] transition-all flex items-center group/link font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#008744] mr-2 opacity-0 -ml-3 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                    <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us with Live Beacon (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-slate-900 text-sm font-bold tracking-tight flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{isEn ? "Contact Us" : "যোগাযোগ"}</span>
            </h4>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#008744] flex items-center justify-center flex-shrink-0">
                  <Phone size={13} />
                </div>
                <a href="tel:+880171234578" className="hover:text-[#008744] font-semibold transition-colors">
                  +880 1712-34578
                </a>
              </li>

              <li className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-rose-50 text-[#DE1F26] flex items-center justify-center flex-shrink-0">
                  <Mail size={13} />
                </div>
                <a
                  href="mailto:support@ussoftwareltd.com"
                  className="hover:text-[#DE1F26] font-semibold transition-colors truncate text-xs"
                >
                  support@ussoftwareltd.com
                </a>
              </li>

              <li className="flex items-start space-x-2 pt-1 text-slate-500 text-[11px] leading-relaxed">
                <MapPin size={13} className="text-slate-400 shrink-0 mt-0.5" />
                <span>Level 7, Innovation Tower, Panthapath, Dhaka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM MINIMALIST COPYRIGHT BAR */}
        <div className="pt-10 mt-10 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-slate-800 font-bold">US Software LTD</span>.{" "}
            {isEn ? "All rights reserved." : "সর্বস্বত্ব সংরক্ষিত।"}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-500 font-medium">
            <Link href="/about" className="hover:text-[#008744] transition-colors">
              {isEn ? "Privacy Policy" : "গোপনীয়তা নীতি"}
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/about" className="hover:text-[#008744] transition-colors">
              {isEn ? "Terms of Use" : "ব্যবহারের শর্তাবলী"}
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/about" className="hover:text-[#008744] transition-colors">
              {isEn ? "Legal" : "আইনি তথ্য"}
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/courses" className="hover:text-[#008744] transition-colors">
              {isEn ? "Site Map" : "সাইট ম্যাপ"}
            </Link>
          </div>

          {/* Animated Back to Top Magnetic Pill */}
          <motion.button
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 hover:text-[#008744] px-3.5 py-1.5 rounded-full shadow-xs transition-all cursor-pointer font-bold text-xs group"
            title={isEn ? "Back to Top" : "উপরে যান"}
          >
            <span>{isEn ? "Back to Top" : "উপরে যান"}</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ArrowUp size={12} className="text-[#008744]" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}


