"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, Globe, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Dark Theme (Hidden on Mobile, Not Sticky) */}
      <div className="hidden lg:block bg-[#111827] py-2.5 px-4 sm:px-8 text-xs text-gray-300 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

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

          {/* Right: Socials, Lang, Auth */}
          <div className="flex items-center space-x-4">

            {/* Social Icons in Circles */}
            <div className="flex items-center space-x-2">
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3b5998] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 group-hover:text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 group-hover:text-white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="text-gray-300 group-hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e1306c] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>

            <div className="h-5 w-[1px] bg-gray-700 mx-1 hidden sm:block"></div>

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

            {/* Language Switcher Toggle */}
            <div
              className="flex items-center space-x-1.5 cursor-pointer group bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-colors"
              onClick={toggleLanguage}
            >
              <Globe size={14} className="text-[#34d399] group-hover:text-white transition-colors" />
              <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                {language === "en" ? "EN" : "BN"}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Main Nav (Sticky & Premium) */}
      <header className="w-full bg-white/85 backdrop-blur-xl sticky top-0 z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto py-3.5 px-4 sm:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            {/* Mobile Logo */}
            <img src="/logo/us software logo.png" alt="US Software LTD" className="lg:hidden h-9 w-auto object-contain" />
            {/* Desktop Logo */}
            <img src="/logo/logo.png" alt="US Software LTD" className="hidden lg:block h-12 w-auto object-contain" />
          </div>

          {/* Right Side: Nav & CTA */}
          <div className="flex items-center space-x-4 lg:space-x-10">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8 text-[15px] font-bold text-gray-700">
              <Link href="/" className="text-[#00a884] border-b-2 border-[#00a884] pb-1">
                {t.header.home}
              </Link>

              <Link href="#" className="hover:text-[#00a884] hover:-translate-y-0.5 pb-1 transition-all">{t.header.services}</Link>
              <Link href="#" className="hover:text-[#00a884] hover:-translate-y-0.5 pb-1 transition-all">{t.header.solutions}</Link>
              <Link href="#" className="hover:text-[#00a884] hover:-translate-y-0.5 pb-1 transition-all">{t.header.company}</Link>
              <Link href="#" className="hover:text-[#00a884] hover:-translate-y-0.5 pb-1 transition-all">{t.header.portfolio}</Link>
              <Link href="/canvas" className="hover:text-[#00a884] hover:-translate-y-0.5 pb-1 transition-all">Canvas</Link>
              <Link href="#" className="hover:text-[#00a884] hover:-translate-y-0.5 pb-1 transition-all">{t.header.contact}</Link>
            </nav>

            {/* CTA Button (Premium Style) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-[#00a884] to-[#008f6f] text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-[0_5px_15px_rgba(0,168,132,0.3)] hover:shadow-[0_8px_25px_rgba(0,168,132,0.4)] transition-all"
            >
              {t.header.getQuote}
            </motion.button>
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[#0b2b46] p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 space-y-4 text-base font-bold text-gray-700">
                <Link href="/" className="text-[#00a884]" onClick={() => setIsMobileMenuOpen(false)}>{t.header.home}</Link>

                <Link href="#" className="hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.header.services}</Link>
                <Link href="#" className="hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.header.solutions}</Link>
                <Link href="#" className="hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.header.company}</Link>
                <Link href="#" className="hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.header.portfolio}</Link>
                <Link href="/canvas" className="hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Canvas</Link>
                <Link href="#" className="hover:text-[#00a884] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.header.contact}</Link>
                
                {/* Mobile CTA and Toggles */}
                <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-semibold text-sm">Language:</span>
                    <div
                      className="flex items-center space-x-1.5 cursor-pointer bg-gray-100 px-4 py-2 rounded-full"
                      onClick={toggleLanguage}
                    >
                      <Globe size={16} className="text-[#00a884]" />
                      <span className="font-bold text-gray-700">{language === "en" ? "English" : "Bengali"}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#00a884] to-[#008f6f] text-white px-8 py-3 rounded-full font-bold text-base shadow-[0_5px_15px_rgba(0,168,132,0.3)] mt-2">
                    {t.header.getQuote}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
