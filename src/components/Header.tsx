"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { Phone, Mail, Globe, User, Menu, X, LayoutGrid, ChevronDown, BookOpen, Code, Cpu, Cloud, Layers, Sparkles, Box, Orbit, Bot, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavItem = ({ href, active, children }: NavItemProps) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
    const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
    setMouseOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  // Base neutral shape is a handsome rounded square / squircle (14px)
  // When hovering, corners warp into organic liquid waves
  const baseR = 14;
  const tl = isHovered ? Math.max(6, Math.min(22, baseR + mouseOffset.x * 1.4 - mouseOffset.y * 1.2)) : baseR;
  const tr = isHovered ? Math.max(6, Math.min(22, baseR - mouseOffset.x * 1.4 - mouseOffset.y * 1.2)) : baseR;
  const br = isHovered ? Math.max(6, Math.min(22, baseR - mouseOffset.x * 1.4 + mouseOffset.y * 1.2)) : baseR;
  const bl = isHovered ? Math.max(6, Math.min(22, baseR + mouseOffset.x * 1.4 + mouseOffset.y * 1.2)) : baseR;

  const squircleFluidRadius = `${tl}px ${tr}px ${br}px ${bl}px`;

  return (
    <Link
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group px-3.5 xl:px-4 py-2 flex items-center justify-center transition-all duration-200 whitespace-nowrap rounded-xl select-none"
    >
      {/* 3D Liquid Water Droplet Capsule with Rounded Squircle Base (Active Item) */}
      {active && (
        <motion.div
          layoutId="hyperRealisticWaterDroplet"
          animate={{
            x: mouseOffset.x,
            y: mouseOffset.y,
            scaleX: isHovered ? 1 + Math.abs(mouseOffset.x) * 0.015 : 1,
            scaleY: isHovered ? 1 + Math.abs(mouseOffset.y) * 0.015 : 1,
            skewX: -mouseOffset.x * 0.65,
            skewY: mouseOffset.y * 0.45,
            rotateZ: mouseOffset.x * 0.5,
            borderRadius: squircleFluidRadius,
          }}
          transition={{ type: "spring", stiffness: 340, damping: 22, mass: 0.8 }}
          className="absolute inset-0 bg-gradient-to-b from-white/95 via-slate-100/80 to-slate-200/70 border border-slate-200/90 shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(255,255,255,0.9)] backdrop-blur-2xl overflow-hidden -z-0"
        >
          {/* 1. Fluid Liquid Ripple Wave Internal Displacement Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" preserveAspectRatio="none" viewBox="0 0 100 40">
            <motion.path
              animate={{
                d: isHovered
                  ? `M 0,20 Q ${25 + mouseOffset.x * 0.8},${14 + mouseOffset.y * 0.6} ${50 + mouseOffset.x * 0.4},20 T 100,20 L 100,40 L 0,40 Z`
                  : "M 0,20 Q 25,17 50,20 T 100,20 L 100,40 L 0,40 Z"
              }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              fill="rgba(255,255,255,0.75)"
            />
          </svg>

          {/* 2. Main Curved Water Droplet Top Glass Highlight (Meniscus) */}
          <motion.div
            animate={{
              x: -mouseOffset.x * 0.4,
              y: -mouseOffset.y * 0.4,
              scaleX: isHovered ? 1 + mouseOffset.x * 0.02 : 1
            }}
            className="absolute top-[2px] left-2 right-2 h-[40%] rounded-t-[12px] bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"
          />

          {/* 3. Distinct 3D Specular Light Reflection Dots */}
          <motion.div
            animate={{
              x: mouseOffset.x * 0.6,
              y: mouseOffset.y * 0.6,
              scale: isHovered ? 1.15 : 1
            }}
            className="absolute top-[3px] left-3.5 w-3.5 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,1)] pointer-events-none"
          />
          <motion.div
            animate={{
              x: mouseOffset.x * 0.6,
              y: mouseOffset.y * 0.6,
              scale: isHovered ? 1.15 : 1
            }}
            className="absolute top-[4px] right-3.5 w-2 h-1.5 rounded-full bg-white/90 shadow-[0_0_4px_rgba(255,255,255,0.8)] pointer-events-none"
          />

          {/* 4. Dynamic Liquid Caustic Shimmer Wave (Light Reflection Sweep) */}
          <motion.div
            animate={{ x: ["-140%", "240%"] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 w-3/4 bg-gradient-to-r from-transparent via-white/90 to-transparent skew-x-[-25deg] pointer-events-none"
          />

          {/* 5. Bottom Light Concentration Focus Arc (White Glass Glow) */}
          <div className="absolute bottom-[2px] left-4 right-4 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_8px_rgba(255,255,255,1)] pointer-events-none" />
        </motion.div>
      )}

      {/* Inactive Hover Liquid Squircle Preview (Wobbles smoothly with mouse) */}
      {!active && isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mouseOffset.x * 0.85,
            y: mouseOffset.y * 0.85,
            skewX: -mouseOffset.x * 0.5,
            skewY: mouseOffset.y * 0.35,
            rotateZ: mouseOffset.x * 0.4,
            borderRadius: squircleFluidRadius,
          }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 320, damping: 20, mass: 0.8 }}
          className="absolute inset-0 bg-white/75 backdrop-blur-xl border border-slate-200/80 shadow-[inset_0_1.5px_1px_white] overflow-hidden -z-0 pointer-events-none"
        >
          {/* Specular highlight on hover droplet */}
          <div className="absolute top-1 left-3 w-3 h-1 rounded-full bg-white shadow-[0_0_4px_white]" />
        </motion.div>
      )}

      {/* Typography with gentle fluid wave reaction */}
      <motion.span
        animate={{
          x: mouseOffset.x * 0.25,
          y: mouseOffset.y * 0.25,
          skewX: -mouseOffset.x * 0.2
        }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className={`relative z-10 text-[13.5px] xl:text-[14px] transition-colors duration-200 ${active
          ? "text-[#08121a] font-black tracking-tight"
          : "text-slate-600 font-semibold group-hover:text-[#08121a]"
          }`}
      >
        {children}
      </motion.span>
    </Link>
  );
};

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUniverseOpen, setIsUniverseOpen] = useState(false);
  const [isMobileUniverseOpen, setIsMobileUniverseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const universeRef = useRef<HTMLDivElement>(null);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close universe dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (universeRef.current && !universeRef.current.contains(event.target as Node)) {
        setIsUniverseOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const universePages = [
    {
      title: language === "bn" ? "৩ডি সাইবার ক্যানভাস" : "3D Cyber Canvas",
      href: "/canvas",
      icon: Box,
      iconColor: "text-[#008744]",
      iconBg: "bg-emerald-50/80 text-[#008744] group-hover:bg-emerald-100",
      desc: language === "bn" ? "ইন্টারঅ্যাক্টিভ ৩ডি টেক হাব" : "Interactive 3D Tech Lab",
    },
    {
      title: language === "bn" ? "এআই নিউরাল ইউনিভার্স" : "AI Neural Universe",
      href: "/canvas?universe=ai",
      icon: Sparkles,
      iconColor: "text-[#DE1F26]",
      iconBg: "bg-rose-50/80 text-[#DE1F26] group-hover:bg-rose-100",
      desc: language === "bn" ? "জেনারেটিভ এআই ম্যাট্রিক্স" : "Generative AI & Neural Matrix",
    },
    {
      title: language === "bn" ? "কোয়ান্টাম রিয়েলম ৩ডি" : "Quantum Realm 3D",
      href: "/canvas?universe=quantum",
      icon: Orbit,
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-50/80 text-cyan-600 group-hover:bg-cyan-100",
      desc: language === "bn" ? "সাব-অ্যাটমিক পার্টিকল কসমস" : "Subatomic Particle Space",
    },
  ];

  const navLinks = [
    { href: "/", label: t.header.home },
    { href: "/courses", label: t.header.courses || "Courses" },
    { href: "/projects", label: t.header.projects || "Projects" },
    { href: "/mentors", label: t.header.mentors || "Mentors" },
    { href: "/about", label: t.header.about || "About" },
    { href: "/contact", label: t.header.contact || "Contact" },
    { href: "/certification", label: t.header.certification || "Certification" },
  ];

  return (
    <>
      {/* Top Bar - Dark Theme (Hidden on small screens) */}
      <div className="hidden lg:block bg-[#08121a] py-2.5 sm:py-3 text-xs text-gray-300 border-b border-gray-800/80">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Left: Contact Info in Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors cursor-pointer">
              <Phone size={14} className="text-[#008744]" />
              <span className="font-medium">+880 1712-34578</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors cursor-pointer">
              <Mail size={14} className="text-[#DE1F26]" />
              <span className="font-medium">info@ussoftwareltd.com</span>
            </div>
          </div>

          {/* Right: Socials & Auth */}
          <div className="flex items-center space-x-4">
            {/* Social Icons in Circles */}
            <div className="flex items-center space-x-2">
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DE1F26] transition-colors group" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 group-hover:text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DE1F26] transition-colors group" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 group-hover:text-white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#008744] transition-colors group" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="text-gray-300 group-hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DE1F26] transition-colors group" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>

            {/* Login / Register */}
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1.5 bg-transparent hover:bg-white/10 text-gray-200 px-3 py-1.5 rounded-full transition-colors border border-transparent hover:border-white/10 cursor-pointer">
                <User size={14} className="text-gray-400" />
                <span className="font-medium">Login</span>
              </button>
              <button className="bg-[#008744] hover:bg-[#007038] text-white px-4 py-1.5 rounded-full font-bold shadow-md transition-colors cursor-pointer">
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
              <Globe size={13} className="text-[#008744] group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-bold text-[11px] text-gray-200 group-hover:text-white transition-colors">
                {language === "en" ? "EN" : "বাংলা"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Nav Bar */}
      <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/70 py-2.5" : "bg-white/85 backdrop-blur-md border-b border-gray-100 py-3 sm:py-3.5"}`}>
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center transition-all duration-300">

          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <img src="/logo/logo.png" alt="US Software LTD" className="h-7 sm:h-8 lg:h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Center: Clean Seamless Navigation Track (NO background container) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 mx-2 relative">
            {navLinks.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                active={isLinkActive(item.href)}
              >
                {item.label}
              </NavItem>
            ))}
          </nav>

          {/* Right Side: US Universe Dropdown + Get Course CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">

            {/* US Universe Dropdown (Desktop & Tablet) - CLICK ONLY */}
            <div className="relative hidden md:block" ref={universeRef}>
              <button
                onClick={() => setIsUniverseOpen(!isUniverseOpen)}
                className={`group relative flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all duration-150 text-xs font-semibold cursor-pointer whitespace-nowrap select-none ${isUniverseOpen
                  ? "bg-slate-100/90 border-slate-300 text-[#DE1F26] shadow-xs"
                  : "bg-transparent hover:bg-slate-100/70 border-slate-200/70 hover:border-slate-300 text-slate-700 hover:text-slate-900"
                  }`}
              >
                <Orbit
                  size={14}
                  className={`text-[#DE1F26] transition-transform duration-300 ${isUniverseOpen ? "rotate-180" : "group-hover:rotate-45"
                    }`}
                />
                <span className="font-semibold">{language === "bn" ? "ইউএস ইউনিভার্স" : "US Universe"}</span>
                <ChevronDown
                  size={12}
                  className={`text-slate-400 transition-transform duration-150 ${isUniverseOpen ? "rotate-180 text-[#DE1F26]" : ""
                    }`}
                />
              </button>

              {/* Ultra-Simple Compact US Universe Dropdown Menu */}
              <AnimatePresence>
                {isUniverseOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-1.5 w-56 sm:w-60 bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-200/80 p-1.5 z-50 overflow-hidden"
                  >
                    <div className="space-y-0.5">
                      {universePages.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setIsUniverseOpen(false)}
                            className="flex items-center space-x-2.5 px-2.5 py-2 rounded-lg transition-colors duration-150 group hover:bg-slate-100/80"
                          >
                            <div
                              className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${item.iconBg}`}
                            >
                              <Icon size={14} className={item.iconColor} />
                            </div>
                            <span className="text-xs font-semibold text-slate-700 group-hover:text-[#DE1F26] transition-colors truncate">
                              {item.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button: Get Course */}
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#008744] to-[#056839] hover:from-[#007038] hover:to-[#04522d] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,135,68,0.3)] hover:shadow-[0_6px_20px_rgba(0,135,68,0.45)] transition-all duration-200 flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap cursor-pointer"
              >
                <BookOpen size={15} className="hidden sm:inline" />
                <span>{t.header.getCourse || "Get Course"}</span>
              </motion.button>
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-[#08121a] p-2 sm:p-2.5 focus:outline-none bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
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
              <div className="max-w-[96rem] mx-auto px-4 sm:px-6 py-4 space-y-1.5 text-[15px] font-semibold text-gray-700">

                {/* Mobile US Universe Accordion */}
                <div className="border border-slate-200/70 rounded-xl overflow-hidden bg-transparent mb-2">
                  <button
                    onClick={() => setIsMobileUniverseOpen(!isMobileUniverseOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#DE1F26]"
                  >
                    <span className="flex items-center space-x-2">
                      <Orbit size={16} className="text-[#DE1F26]" />
                      <span>{language === "bn" ? "ইউএস ইউনিভার্স" : "US Universe"}</span>
                    </span>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${isMobileUniverseOpen ? "rotate-180 text-[#DE1F26]" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileUniverseOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-2 pb-2 space-y-1 border-t border-slate-100 pt-1.5"
                      >
                        {universePages.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg bg-transparent hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors border border-transparent hover:border-slate-200/80"
                            >
                              <div className="flex items-center space-x-2 min-w-0">
                                <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                                  <Icon size={13} className={item.iconColor} />
                                </div>
                                <span className="truncate text-xs font-medium">{item.title}</span>
                              </div>
                              <ArrowRight size={12} className="text-slate-300" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Navigation Links with 3D Water Droplet Squircle */}
                {navLinks.map((item) => {
                  const active = isLinkActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 ${active
                        ? "bg-gradient-to-b from-white to-slate-100 text-[#08121a] font-extrabold shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1.5px_1px_white] border border-slate-300/80"
                        : "text-slate-600 hover:text-[#08121a] hover:bg-slate-50"
                        }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-[#08121a]" />
                      )}
                    </Link>
                  );
                })}

                {/* Mobile Bottom CTA & Contacts */}
                <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col space-y-2.5">
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-xs font-semibold text-gray-500">Language / ভাষা:</span>
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-lg text-xs font-bold text-[#08121a] transition-colors cursor-pointer"
                    >
                      <Globe size={13} className="text-[#008744]" />
                      <span>{language === "en" ? "English" : "বাংলা"}</span>
                    </button>
                  </div>

                  <Link href="/courses" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#008744] to-[#056839] text-white py-3 rounded-xl font-bold text-sm shadow-[0_4px_14px_rgba(0,135,68,0.3)] flex items-center justify-center space-x-2 cursor-pointer">
                      <BookOpen size={16} />
                      <span>{t.header.getCourse || "Get Course"}</span>
                    </button>
                  </Link>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Phone size={12} className="text-[#008744]" /> +880 1712-34578
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail size={12} className="text-[#DE1F26]" /> info@ussoftwareltd.com
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
