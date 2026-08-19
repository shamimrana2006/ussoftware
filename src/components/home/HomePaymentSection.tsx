"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Lock } from "lucide-react";

export default function HomePaymentSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const paymentOptions = [
    {
      id: "emi",
      badge: isEn ? "Monthly Plan" : "মাসিক প্ল্যান",
      title: isEn ? "0% Interest EMI" : "০% সুদে মাসিক কিস্তি",
      highlightTag: isEn ? "0% Fee" : "০% বাড়তি ফি",
      desc: isEn 
        ? "Pay in 3 or 6 equal monthly installments with zero interest or hidden charges."
        : "কোনো অতিরিক্ত চার্জ ছাড়াই ৩ বা ৬ মাসের সমান কিস্তিতে কোর্স ফি পরিশোধ করুন।",
      features: [
        isEn ? "3 to 6 equal installments" : "৩ থেকে ৬ মাসের সমান কিস্তি",
        isEn ? "Available on top credit cards" : "শীর্ষ ক্রেডিট কার্ডে সহজ সুবিধা",
        isEn ? "Instant batch access" : "তাৎক্ষণিক ব্যাচ অ্যাক্টিভেশন",
        isEn ? "Zero upfront pressure" : "এককালীন কোনো বাড়তি চাপ নেই"
      ],
      popular: false,
      ctaText: isEn ? "Select EMI Plan" : "ইএমআই বেছে নিন"
    },
    {
      id: "upfront",
      badge: isEn ? "Recommended" : "জনপ্রিয় পছন্দ",
      title: isEn ? "Full Upfront Payment" : "এককালীন সম্পূর্ণ পরিশোধ",
      highlightTag: isEn ? "15% Off" : "১৫% ছাড়",
      desc: isEn 
        ? "Pay full tuition in advance and receive an instant 15% scholarship discount."
        : "এককালীন পরিশোধে পাচ্ছেন তাৎক্ষণিক ১৫% স্কলারশিপ ডিসকাউন্ট সুবিধা।",
      features: [
        isEn ? "Instant 15% scholarship discount" : "তাৎক্ষণিক ১৫% ফি স্কলারশিপ",
        isEn ? "Lifetime resource access" : "কোর্স রিসোর্সের লাইফটাইম অ্যাক্সেস",
        isEn ? "Priority mentor support" : "অগ্রাধিকারভিত্তিক মেন্টর সাপোর্ট",
        isEn ? "7-day money-back guarantee" : "৭ দিনের মানি-ব্যাক গ্যারান্টি"
      ],
      popular: true,
      ctaText: isEn ? "Enroll with 15% Off" : "১৫% ছাড়ে ভর্তি হন"
    },
    {
      id: "corporate",
      badge: isEn ? "For Enterprise" : "টিম ও কোম্পানি",
      title: isEn ? "Corporate Sponsorship" : "কর্পোরেট স্পনসরশিপ",
      highlightTag: isEn ? "VAT Invoice" : "ভ্যাট চালান",
      desc: isEn 
        ? "Upskill your team with custom curriculum, schedule, and official VAT invoice."
        : "কোম্পানির সফটওয়্যার টিমের জন্য কাস্টম সিলেবাস, ফ্লেক্সিবল সময় ও ভ্যাট চালান সুবিধা।",
      features: [
        isEn ? "Customized team curriculum" : "কাস্টমাইজড টিম সিলেবাস",
        isEn ? "Flexible batch schedule" : "সুবিধাজনক ক্লাস সময়সূচি",
        isEn ? "Detailed attendance & reports" : "অগ্রগতি ও উপস্থিতি রিপোর্ট",
        isEn ? "Official VAT tax invoice" : "অফিসিয়াল ভ্যাট চালান ও ইনভয়েস"
      ],
      popular: false,
      ctaText: isEn ? "Contact for Teams" : "কর্পোরেট যোগাযোগ"
    }
  ];

  const paymentGateways = ["bKash", "Nagad", "Rocket", "Visa", "MasterCard", "Amex", "Bank Transfer"];

  return (
    <section id="payment" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
            <Lock size={12} className="text-[#008744]" />
            <span>{isEn ? "Flexible & Secure Admission" : "সহজ ও নিরাপদ ভর্তি প্রক্রিয়া"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isEn ? (
              <>
                Enrollment & <span className="text-[#008744]">Payment</span> <span className="text-[#DE1F26]">Options</span>
              </>
            ) : (
              <>
                ভর্তি ও সহজ <span className="text-[#008744]">পেমেন্ট</span> <span className="text-[#DE1F26]">মাধ্যমসমূহ</span>
              </>
            )}
          </h2>

          <p className="mt-2 text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            {isEn 
              ? "Choose the plan that suits you best with zero hidden charges."
              : "আপনার সুবিধাজনক প্ল্যানটি বেছে নিন, কোনো গোপন চার্জ ছাড়াই।"}
          </p>
        </div>

        {/* 3 Simple Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10 items-stretch">
          {paymentOptions.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? "bg-white border-2 border-[#008744] shadow-sm relative"
                  : "bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white"
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    plan.popular ? "text-[#008744]" : "text-slate-500"
                  }`}>
                    {plan.badge}
                  </span>

                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    plan.popular
                      ? "bg-emerald-50 text-[#008744] border border-emerald-200"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}>
                    {plan.highlightTag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {plan.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Clean Feature List */}
                <div className="pt-4 border-t border-slate-200/60 mb-6">
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check size={14} className="text-[#008744] flex-shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href="/contact"
                  className={`w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    plan.popular
                      ? "bg-[#008744] hover:bg-[#007038] text-white shadow-xs"
                      : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-300"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Minimalist Payment Gateways Bar */}
        <div className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#008744]" />
            <span className="font-semibold text-slate-800">
              {isEn ? "100% Secure & Verified Checkout" : "১০০% নিরাপদ ও স্বচ্ছ পেমেন্ট"}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {paymentGateways.map((gw, idx) => (
              <span 
                key={idx} 
                className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700"
              >
                {gw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
