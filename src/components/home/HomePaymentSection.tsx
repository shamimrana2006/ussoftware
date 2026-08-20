"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Copy, Check, ShieldCheck, CreditCard } from "lucide-react";

export default function HomePaymentSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    const cleanNumber = text.replace(/[-\s]/g, "");
    navigator.clipboard.writeText(cleanNumber);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  const paymentMethods = [
    {
      id: "bkash",
      name: "bKash",
      banglaName: "বিকাশ",
      accountType: isEn ? "Personal" : "পার্সোনাল",
      number: "01322 896396",
      rawNumber: "01322896396",
      numberColor: "text-[#E2136E]",
      bgAccent: "hover:border-[#E2136E]/40 hover:shadow-[#E2136E]/10",
      badgeColor: "bg-[#E2136E]/10 text-[#E2136E] border-[#E2136E]/20",
      iconBg: "bg-[#fdebf3]",
      imageSrc: "/payments logos/bkash bangla.png",
    },
    {
      id: "nagad",
      name: "Nagad",
      banglaName: "নগদ",
      accountType: isEn ? "Personal" : "পার্সোনাল",
      number: "01322 896396",
      rawNumber: "01322896396",
      numberColor: "text-[#F7941D]",
      bgAccent: "hover:border-[#F7941D]/40 hover:shadow-[#F7941D]/10",
      badgeColor: "bg-[#F7941D]/10 text-[#F7941D] border-[#F7941D]/20",
      iconBg: "bg-[#fef4ea]",
      imageSrc: "/payments logos/nagad.png",
    },
    {
      id: "rocket",
      name: "Rocket",
      banglaName: "রকেট",
      accountType: isEn ? "Personal" : "পার্সোনাল",
      number: "01322 896396",
      rawNumber: "01322896396",
      numberColor: "text-[#8C3494]",
      bgAccent: "hover:border-[#8C3494]/40 hover:shadow-[#8C3494]/10",
      badgeColor: "bg-[#8C3494]/10 text-[#8C3494] border-[#8C3494]/20",
      iconBg: "bg-[#fbf0fc]",
      imageSrc: "/payments logos/rocket.webp",
    },
  ];

  return (
    <section id="payment" className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#008744] text-xs sm:text-sm font-semibold mb-3.5 tracking-wide shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#008744]" />
            <span className={isEn ? "font-outfit uppercase tracking-wider text-[11px] font-bold" : "font-baloo font-bold"}>
              {isEn ? "Official Payment Methods" : "অফিসিয়াল পেমেন্ট নম্বর"}
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight ${isEn ? "font-outfit" : "font-baloo"}`}>
            {isEn ? "Fast & Secure Payment" : "পেমেন্ট মাধ্যমসমূহ"}
          </h2>
          <p className={`mt-2.5 text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed ${isEn ? "font-sans" : "font-hind"}`}>
            {isEn
              ? "Click on any number below to copy and complete your fee payment via mobile banking."
              : "নিচের যেকোনো নম্বরে ক্লিক করে নম্বরটি কপি করুন এবং সেন্ড মানি করে ভর্তি সম্পন্ন করুন।"}
          </p>
        </div>

        {/* Payment Number Cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-6 max-w-4xl mx-auto">
          {paymentMethods.map((method) => {
            const isCopied = copiedId === method.id;
            return (
              <div
                key={method.id}
                onClick={() => handleCopy(method.rawNumber, method.id)}
                className={`group bg-white border rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 min-w-[290px] sm:min-w-[320px] flex-1 max-w-md shadow-sm transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isCopied
                    ? "border-emerald-500 ring-2 ring-emerald-500/25 shadow-lg shadow-emerald-500/10 -translate-y-0.5"
                    : `border-slate-200/90 ${method.bgAccent} hover:shadow-xl hover:-translate-y-1`
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCopy(method.rawNumber, method.id);
                  }
                }}
                title={isEn ? `Click to copy ${method.name} number` : `${isEn ? method.name : method.banglaName} নম্বর কপি করতে ক্লিক করুন`}
              >
                {/* Left side: Logo + Brand name + Number */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-13 h-13 rounded-2xl p-2 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs ${method.iconBg}`}
                  >
                    <Image
                      src={method.imageSrc}
                      alt={method.name}
                      width={48}
                      height={48}
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-bold text-slate-800 tracking-wide ${isEn ? "font-poppins" : "font-baloo"}`}>
                        {isEn ? method.name : method.banglaName}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${method.badgeColor} ${isEn ? "font-poppins uppercase tracking-wider" : "font-baloo"}`}>
                        {method.accountType}
                      </span>
                    </div>
                    
                    {/* Modern Poppins Number */}
                    <span
                      className={`text-xl sm:text-[23px] font-extrabold font-poppins tracking-[0.03em] block tabular-nums ${method.numberColor} transition-all duration-200 group-hover:scale-[1.02] origin-left`}
                    >
                      {method.number}
                    </span>
                  </div>
                </div>

                {/* Right side: Copy Status Button */}
                <div className="flex items-center flex-shrink-0 pl-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(method.rawNumber, method.id);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-2xs ${
                      isCopied
                        ? "bg-emerald-500 text-white shadow-emerald-500/25 scale-105"
                        : "bg-slate-100/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white"
                    }`}
                    aria-label="Copy number"
                  >
                    {isCopied ? (
                      <>
                        <Check size={15} className="stroke-[3]" />
                        <span className={isEn ? "font-outfit font-bold" : "font-baloo font-bold"}>
                          {isEn ? "Copied" : "কপি হয়েছে"}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} className="stroke-[2.2]" />
                        <span className={`hidden sm:inline ${isEn ? "font-outfit" : "font-baloo"}`}>
                          {isEn ? "Copy" : "কপি"}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reference & Cards Hint */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-100/70 border border-slate-200/80 text-slate-600 text-xs sm:text-sm font-medium shadow-2xs">
            <CreditCard className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className={isEn ? "font-outfit font-medium" : "font-hind"}>
              {isEn ? (
                <>
                  <strong className="text-slate-800 font-bold">Reference:</strong> Your Name + Course Name
                </>
              ) : (
                <>
                  <strong className="text-slate-800 font-bold">রেফারেন্স:</strong> আপনার নাম + কোর্স নাম
                </>
              )}
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <Image
              src="/payments logos/visa-card-and-mastercard-logo-png-28.png"
              alt="Visa and Mastercard"
              width={64}
              height={24}
              className="h-5 w-auto object-contain"
            />
            <span className={`text-xs text-slate-500 font-medium ${isEn ? "font-outfit" : "font-hind"}`}>
              {isEn ? "Cards Accepted" : "কার্ড পেমেন্ট সুবিধা"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

