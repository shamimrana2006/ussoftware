"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, Globe, User, Menu, X, LayoutGrid, ChevronDown, BookOpen, Code, Cpu, Cloud, Layers, Sparkles, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NavItem = ({ href, active, children }: { href: string, active?: boolean, children: React.ReactNode }) => (
  <Link href={href} className="relative group px-2.5 xl:px-3.5 py-2 flex items-center justify-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] whitespace-nowrap">
    <span className={`relative z-10 font-semibold text-[13.5px] xl:text-[14.5px] transition-colors duration-200 ${active ? "text-[#00a884]" : "text-gray-600 group-hover:text-[#0b2b46]"}`}>
      {children}
    </span>
    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-t-full transition-all duration-200 ${active ? "w-3/4 bg-[#00a884] opacity-100 shadow-[0_0_8px_rgba(0,168,132,0.5)]" : "w-0 bg-[#00a884]/40 opacity-0 group-hover:w-1/2 group-hover:opacity-100"}`} />
  </Link>
);

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close category dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
    { title: language === "bn" ? "ওয়েব ও ফুল-স্ট্যাক" : "Web & Full-Stack", icon: Code, color: "text-emerald-500", desc: "React, Next.js, Node.js" },
    { title: language === "bn" ? "সফটওয়্যার ইঞ্জিনিয়ারিং" : "Software Engineering", icon: Cpu, color: "text-blue-500", desc: "Data Structures & Architecture" },
    { title: language === "bn" ? "এআই ও ডাটা সায়েন্স" : "AI & Machine Learning", icon: Sparkles, color: "text-purple-500", desc: "LLMs, Python, Neural Networks" },
    { title: language === "bn" ? "ক্লাউড ও ডেভঅপ্স" : "Cloud & DevOps", icon: Cloud, color: "text-cyan-500", desc: "AWS, Docker, Kubernetes" },
    { title: language === "bn" ? "ইউআই/ইউএক্স ডিজাইন" : "UI/UX & Product Design", icon: Layers, color: "text-orange-500", desc: "Figma, Design Systems" },
  ];

  return (
    <>
      {/* Top Bar - Dark Theme (Hidden on small screens) */}
      <div className="hidden lg:block bg-[#111827] py-2.5 sm:py-3 text-xs text-gray-300 border-b border-gray-800/80">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Left: Contact Info in Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors cursor-pointer">
              <Phone size={14} className="text-[#34d399]" />
              <span className="font-medium">+880 1712-34578</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors cursor-pointer">
              <Mail size={14} className="text-orange-400" />
              <span className="font-medium">info@ussoftwareltd.com</span>
            </div>
          </div>

          {/* Right: Socials & Auth */}
          <div className="flex items-center space-x-4">
            {/* Social Icons in Circles */}
            <div className="flex items-center space-x-2">
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3b5998] transition-colors group" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 group-hover:text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors group" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 group-hover:text-white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] transition-colors group" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="text-gray-300 group-hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e1306c] transition-colors group" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>

            {/* Login / Register */}
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1.5 bg-transparent hover:bg-white/10 text-gray-200 px-3 py-1.5 rounded-full transition-colors border border-transparent hover:border-white/10">
                <User size={14} className="text-gray-400" />
                <span className="font-medium">Login</span>
              </button>
              <button className="bg-[#34d399] hover:bg-[#10b981] text-[#064e3b] px-4 py-1.5 rounded-full font-bold shadow-md transition-colors">
                Register
              </button>
            </div>

            <div className="h-5 w-[1px] bg-gray-700 mx-1 hidden sm:block"></div>

            {/* Language Switcher Pill (Top Bar only) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 cursor-pointer bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-full transition-all duration-200 group select-none shadow-sm"
              title="Change Language / ভাষা পরিবর্তন"
            >
              <Globe size={13} className="text-[#34d399] group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-bold text-[11px] text-gray-200 group-hover:text-white transition-colors">
                {language === "en" ? "EN" : "বাংলা"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Nav Bar */}
      <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/60 py-2.5" : "bg-white/75 backdrop-blur-md border-b border-gray-100 py-3 sm:py-3.5"}`}>
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center transition-all duration-300">
          
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <img src="/logo/logo.png" alt="US Software LTD" className="h-7 sm:h-8 lg:h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Center: Main Navigation Links (Desktop/Laptop) */}
          <nav className="hidden lg:flex space-x-0.5 xl:space-x-1 items-center mx-2">
            <NavItem href="/" active>{t.header.home}</NavItem>
            <NavItem href="#courses">{t.header.courses || "Courses"}</NavItem>
            <NavItem href="#projects">{t.header.projects || "Projects"}</NavItem>
            <NavItem href="#mentors">{t.header.mentors || "Mentors"}</NavItem>
            <NavItem href="#about">{t.header.about || "About"}</NavItem>
            <NavItem href="#contact">{t.header.contact || "Contact"}</NavItem>
            <NavItem href="#certification">{t.header.certification || "Certification"}</NavItem>
            <NavItem href="/canvas">
              <span className="flex items-center gap-1">
                {t.header.canvas || "Canvas"}
                <span className="text-[9px] bg-emerald-500/10 text-emerald-600 font-bold px-1.5 py-0.5 rounded-md">3D</span>
              </span>
            </NavItem>
          </nav>

          {/* Right Side: Category Dropdown & Get Course CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            
            {/* Category Dropdown (Desktop & Tablet) */}
            <div className="relative hidden md:block" ref={categoryRef}>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 sm:py-2 rounded-xl border transition-all duration-200 text-xs sm:text-sm font-semibold shadow-sm cursor-pointer whitespace-nowrap ${
                  isCategoryOpen 
                    ? "bg-[#00a884]/10 border-[#00a884] text-[#00a884]" 
                    : "bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-700 hover:border-slate-300"
                }`}
              >
                <LayoutGrid size={15} className="text-[#00a884]" />
                <span>{t.header.category || "Category"}</span>
                <ChevronDown size={13} className={`text-slate-400 transition-transform duration-200 ${isCategoryOpen ? "rotate-180 text-[#00a884]" : ""}`} />
              </button>

              {/* Category Dropdown Menu */}
              <AnimatePresence>
                {isCategoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-200/80 p-2 z-50 overflow-hidden"
                  >
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                      {language === "bn" ? "শীর্ষ ক্যাটাগরি" : "Top Categories"}
                    </div>
                    {categories.map((cat, idx) => {
                      const Icon = cat.icon;
                      return (
                        <Link
                          key={idx}
                          href="#courses"
                          onClick={() => setIsCategoryOpen(false)}
                          className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-[#00a884]/10 transition-colors">
                            <Icon size={16} className={cat.color} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800 group-hover:text-[#00a884] transition-colors">{cat.title}</div>
                            <div className="text-[11px] text-slate-400">{cat.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button: Get Course */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#00a884] hover:bg-[#009473] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,168,132,0.25)] hover:shadow-[0_6px_20px_rgba(0,168,132,0.35)] transition-all duration-200 flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap cursor-pointer"
            >
              <BookOpen size={15} className="hidden sm:inline" />
              <span>{t.header.getCourse || "Get Course"}</span>
            </motion.button>

            {/* Mobile Hamburger Menu Toggle */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-[#0b2b46] p-2 sm:p-2.5 focus:outline-none bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav Drawer / Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100 overflow-hidden shadow-xl"
            >
              <div className="max-w-[96rem] mx-auto px-4 sm:px-6 py-4 space-y-2.5 text-[15px] font-semibold text-gray-700">
                
                {/* Mobile Category Accordion */}
                <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/50 mb-2">
                  <button
                    onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:text-[#00a884]"
                  >
                    <span className="flex items-center space-x-2">
                      <LayoutGrid size={16} className="text-[#00a884]" />
                      <span>{t.header.category || "Category"}</span>
                    </span>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${isMobileCategoryOpen ? "rotate-180 text-[#00a884]" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileCategoryOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-3 pb-2.5 space-y-1.5 border-t border-slate-100 pt-2"
                      >
                        {categories.map((cat, idx) => {
                          const Icon = cat.icon;
                          return (
                            <Link
                              key={idx}
                              href="#courses"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-white text-xs font-medium text-slate-700 hover:text-[#00a884] transition-colors"
                            >
                              <Icon size={14} className={cat.color} />
                              <span>{cat.title}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Links */}
                <Link href="/" className="block py-2 text-[#00a884] font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.header.home}
                </Link>
                <Link href="#courses" className="block py-2 hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.header.courses || "Courses"}
                </Link>
                <Link href="#projects" className="block py-2 hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.header.projects || "Projects"}
                </Link>
                <Link href="#mentors" className="block py-2 hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.header.mentors || "Mentors"}
                </Link>
                <Link href="#about" className="block py-2 hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.header.about || "About"}
                </Link>
                <Link href="#contact" className="block py-2 hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.header.contact || "Contact"}
                </Link>
                <Link href="#certification" className="block py-2 hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.header.certification || "Certification"}
                </Link>
                <Link href="/canvas" className="flex items-center justify-between py-2 hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="flex items-center gap-1.5">
                    <Box size={16} className="text-[#00a884]" />
                    <span>{t.header.canvas || "Canvas"}</span>
                  </span>
                  <span className="text-[10px] bg-gradient-to-r from-[#00a884] to-cyan-500 text-white font-bold px-2 py-0.5 rounded-full">3D Hub</span>
                </Link>
                
                {/* Mobile Bottom CTA & Contacts */}
                <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col space-y-2.5">
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-xs font-semibold text-gray-500">Language / ভাষা:</span>
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-lg text-xs font-bold text-[#0b2b46] transition-colors"
                    >
                      <Globe size={13} className="text-[#00a884]" />
                      <span>{language === "en" ? "English" : "বাংলা"}</span>
                    </button>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#00a884] to-[#008f6f] text-white py-3 rounded-xl font-bold text-sm shadow-[0_4px_14px_rgba(0,168,132,0.3)] flex items-center justify-center space-x-2">
                    <BookOpen size={16} />
                    <span>{t.header.getCourse || "Get Course"}</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Phone size={12} className="text-[#00a884]" /> +880 1712-34578
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail size={12} className="text-orange-400" /> info@ussoftwareltd.com
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
