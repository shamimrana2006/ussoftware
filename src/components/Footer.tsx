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
  Globe,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
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
      {/* 2. MAIN 5-COLUMN FOOTER SECTION WITH LIVELY MICRO-ANIMATIONS */}
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Column 1: Brand Logo, Description & Magnetic Social Icons (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" onClick={handleHomeClick} className="inline-flex items-center space-x-2 group">
              <img
                src="/logo/logo.png"
                alt="US Software LTD"
                className="h-11 sm:h-13 lg:h-14 xl:h-[60px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
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
                href="https://youtube.com/@ussoftwareltd"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#FF0000] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(255,0,0,0.4)]"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.943-.997 1.687-1.94 1.94C17.82 19.9 12 19.9 12 19.9s-5.82 0-7.603-.458c-.943-.253-1.686-.997-1.94-1.94C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.943.997-1.687 1.94-1.94C6.18 4.1 12 4.1 12 4.1s5.82 0 7.603.458c.943.253 1.686.997 1.94 1.94zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                href="https://linkedin.com/company/ussoftwareltd"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(10,102,194,0.4)]"
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
                href="https://instagram.com/ussoftwareltd"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-[0_6px_16px_rgba(225,48,108,0.4)]"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
                <FaWhatsapp size={14} />
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
                <span>Metro Shopping Mall, Mirpur Road, Dhanmondi, Dhaka 1205</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM MINIMALIST COPYRIGHT & UTILITY BAR */}
        <div className="pt-8 mt-10 border-t border-slate-200/80 flex flex-col lg:flex-row justify-between items-center gap-5 text-xs text-slate-500 font-medium">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-slate-800 font-bold">US Software LTD</span>.{" "}
              {isEn ? "All rights reserved." : "সর্বস্বত্ব সংরক্ষিত।"}
            </p>

            <div className="hidden sm:block text-slate-300">•</div>

            {/* Interactive Smooth Language Switcher */}
            <div className="inline-flex items-center space-x-2 bg-slate-100/90 border border-slate-200/90 rounded-full p-1 shadow-2xs">
              <div className="flex items-center space-x-1 pl-2 pr-1 text-slate-500">
                <Globe size={13} className="text-[#008744]" />
                <span className="text-[11px] font-bold text-slate-600">
                  {isEn ? "Language" : "ভাষা"}:
                </span>
              </div>
              
              <div className="relative flex items-center bg-slate-200/80 p-0.5 rounded-full text-xs font-bold">
                {/* Sliding indicator */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  className={`absolute top-0.5 bottom-0.5 rounded-full bg-white shadow-xs ${
                    language === "en" ? "left-0.5 w-10" : "left-[43px] w-12"
                  }`}
                />
                
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`relative z-10 w-10 py-1 rounded-full text-[11px] font-black transition-colors cursor-pointer text-center ${
                    language === "en" ? "text-[#008744]" : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("bn")}
                  className={`relative z-10 w-12 py-1 rounded-full text-[11px] font-black transition-colors cursor-pointer text-center ${
                    language === "bn" ? "text-[#008744]" : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-label="বাংলা ভাষায় পরিবর্তন করুন"
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>

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


