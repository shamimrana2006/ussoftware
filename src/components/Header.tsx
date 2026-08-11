"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, Globe, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Dark Theme */}
      <div className="bg-[#111827] py-2.5 px-4 sm:px-8 text-xs text-gray-300 border-b border-gray-800">
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

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-8 flex justify-between items-center bg-white">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src="/logo/logo.png" alt="US Software LTD" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm font-bold text-gray-700">
          <Link href="#" className="text-[#00a884] border-b-2 border-[#00a884] pb-1">
            {t.header.home}
          </Link>
          <Link href="#" className="hover:text-[#00a884] pb-1 transition-colors">{t.header.services}</Link>
          <Link href="#" className="hover:text-[#00a884] pb-1 transition-colors">{t.header.solutions}</Link>
          <Link href="#" className="hover:text-[#00a884] pb-1 transition-colors">{t.header.company}</Link>
          <Link href="#" className="hover:text-[#00a884] pb-1 transition-colors">{t.header.portfolio}</Link>
          <Link href="#" className="hover:text-[#00a884] pb-1 transition-colors">{t.header.contact}</Link>
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#00a884] text-white px-7 py-2.5 rounded-md font-bold text-sm shadow-lg shadow-[#00a884]/20 hover:bg-[#008f6f] transition-colors"
        >
          {t.header.getQuote}
        </motion.button>
      </div>
    </header>
  );
}
