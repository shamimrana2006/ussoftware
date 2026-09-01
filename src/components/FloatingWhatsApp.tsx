"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "8801995852964";
  const defaultMessage = encodeURIComponent(
    language === "bn"
      ? "হ্যালো ইউএস সফটওয়্যার লিমিটেড, আমি আপনাদের কোর্স এবং ট্রেনিং প্রোগ্রাম সম্পর্কে জানতে চাই।"
      : "Hello US Software LTD, I would like to know more about your courses and training programs."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on Hover */}
      <div
        className={`absolute right-16 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3"
        }`}
      >
        <span>
          {language === "bn"
            ? "হোয়াটসঅ্যাপে যোগাযোগ করুন"
            : "Chat on WhatsApp"}
        </span>
        {/* Tooltip arrow */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900/90 rotate-45 border-r border-t border-white/10" />
      </div>

      {/* Ripple Ambient Ping */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping duration-1000 pointer-events-none" />

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#1ebd59] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40"
      >
        <FaWhatsapp className="w-8 h-8 drop-shadow-sm" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full shadow-xs" />
      </a>
    </div>
  );
}
