"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  CreditCard, ShieldCheck, Zap, CheckCircle2, 
  ArrowRight, Landmark, RefreshCw, Sparkles, Lock
} from "lucide-react";

export default function HomePaymentSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const paymentOptions = [
    {
      id: "emi",
      badge: isEn ? "FLEXIBLE LEARNING" : "সহজ কিস্তি",
      title: isEn ? "0% Interest EMI Installments" : "০% সুদে মাসিক কিস্তি সুবিধা",
      desc: isEn 
        ? "Pay in 3 or 6 monthly installments with zero hidden charges. Start your training immediately with your first installment."
        : "কোনো অতিরিক্ত চার্জ ছাড়াই ৩ বা ৬ মাসের সহজ কিস্তিতে কোর্স ফি পরিশোধ করুন। প্রথম কিস্তি দিয়েই ক্লাস শুরু করুন।",
      features: [
        isEn ? "3 to 6 Months Equal Installments" : "৩ থেকে ৬ মাসের সমান কিস্তি",
        isEn ? "0% Interest on Leading Credit Cards" : "শীর্ষ ক্রেডিট কার্ডে ০% ইন্টারেস্ট",
        isEn ? "Instant Automated Processing" : "তাৎক্ষণিক স্বয়ংক্রিয় প্রসেসিং",
        isEn ? "No Heavy Upfront Burden" : "এককালীন কোনো বাড়তি চাপ নেই"
      ],
      popular: false,
      accent: "border-slate-200"
    },
    {
      id: "upfront",
      badge: isEn ? "BEST VALUE (15% OFF)" : "সর্বোত্তম ডিল (১৫% ছাড়)",
      title: isEn ? "One-Time Upfront Payment" : "এককালীন সম্পূর্ণ পরিশোধ",
      desc: isEn 
        ? "Pay the full course tuition upfront and unlock an instant 15% scholarship discount along with lifetime premium access."
        : "এককালীন পরিশোধে পাচ্ছেন বিশেষ ১৫% স্কলারশিপ ডিসকাউন্ট এবং লাইফটাইম কোর্স রিসোর্স ও প্রজেক্ট সাপোর্ট।",
      features: [
        isEn ? "Instant 15% Tuition Scholarship" : "তাৎক্ষণিক ১৫% ফি ডিসকাউন্ট",
        isEn ? "Lifetime Access to Syllabus Updates" : "সিলেবাস আপডেটের লাইফটাইম অ্যাক্সেস",
        isEn ? "Priority 1-on-1 Mentorship Queue" : "অগ্রাধিকারভিত্তিক ১-অন-১ মেন্টরশিপ",
        isEn ? "7-Day 100% Money-Back Guarantee" : "৭ দিনের মানি-ব্যাক গ্যারান্টি"
      ],
      popular: true,
      accent: "border-[#008744]"
    },
    {
      id: "corporate",
      badge: isEn ? "TEAM & ENTERPRISE" : "কর্পোরেট ও টিম",
      title: isEn ? "Corporate / Employer Sponsorship" : "কর্পোরেট স্পনসরশিপ ও ট্রেনিং",
      desc: isEn 
        ? "Upskill your software engineering team with custom enterprise curriculum, progress reports, and tax-deductible invoicing."
        : "আপনার কোম্পানির সফটওয়্যার টিমের দক্ষতা বৃদ্ধিতে কাস্টমাইজড ট্রেনিং ও ভ্যাট-চালান সুবিধা।",
      features: [
        isEn ? "Customized Team Curriculum" : "কোম্পানির জন্য কাস্টম সিলেবাস",
        isEn ? "Dedicated Batch & Flexible Timing" : "ডেডিকেটেড ব্যাচ ও ফ্লেক্সিবল সময়",
        isEn ? "Comprehensive Attendance & ROI Reports" : "প্রগ্রেস ও এআই অডিট রিপোর্ট",
        isEn ? "Official VAT Invoice & Tax Clearance" : "অফিসিয়াল ভ্যাট চালান ও ইনভয়েস"
      ],
      popular: false,
      accent: "border-slate-200"
    }
  ];

  const paymentGateways = [
    { name: "bKash", type: "MFS", color: "#DE105C" },
    { name: "Nagad", type: "MFS", color: "#F7931E" },
    { name: "Rocket", type: "MFS", color: "#8C3494" },
    { name: "Visa", type: "Card", color: "#1A1F71" },
    { name: "MasterCard", type: "Card", color: "#EB001B" },
    { name: "Amex", type: "Card", color: "#2E77BC" },
    { name: "Bank Transfer", type: "EFT / RTGS", color: "#008744" }
  ];

  return (
    <section id="payment" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: FinTech & Trust Centered Badge */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2.5 shadow-2xs"
          >
            <Lock size={11} className="text-[#008744]" />
            <span>{isEn ? "TRANSPARENT & SECURE ADMISSION" : "সহজ ও নিরাপদ ভর্তি প্রক্রিয়া"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl font-black text-[#08121a] tracking-tight leading-tight"
          >
            {isEn ? (
              <>
                Enrollment & <span className="text-[#008744]">Payment</span> <span className="text-[#DE1F26]">Options</span>
              </>
            ) : (
              <>
                ভর্তি ও সহজ <span className="text-[#008744]">পেমেন্ট</span> <span className="text-[#DE1F26]">মাধ্যমসমূহ</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed"
          >
            {isEn 
              ? "Multiple flexible payment methods designed so financial barriers never stand between you and your tech future."
              : "আপনার সুবিধার্থে রয়েছে এককালীন বিশেষ ছাড় এবং ০% ইন্টারেস্টে সহজ কিস্তি সুবিধা।"}
          </motion.p>
        </div>

        {/* 3 PAYMENT PLANS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {paymentOptions.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`bg-white rounded-2xl p-5 sm:p-6 border-2 ${plan.accent} ${
                plan.popular ? "shadow-[0_15px_35px_rgba(0,135,68,0.1)] relative" : "shadow-xs"
              } flex flex-col justify-between transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#008744] to-emerald-600 text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full tracking-wider shadow-sm">
                  {isEn ? "RECOMMENDED" : "জনপ্রিয় পছন্দ"}
                </div>
              )}

              <div>
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded mb-2">
                  {plan.badge}
                </span>
                <h3 className="font-extrabold text-[#08121a] text-lg sm:text-xl mb-1.5">
                  {plan.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {plan.desc}
                </p>

                <ul className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-[#008744] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
                  plan.popular
                    ? "bg-[#008744] hover:bg-[#007038] text-white shadow-sm"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                <span>{isEn ? "Apply with this Plan" : "এই প্ল্যানে ভর্তি হন"}</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SUPPORTED GATEWAYS STRIP & SECURITY BADGES */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#008744] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-extrabold text-[#08121a] text-xs">{isEn ? "256-Bit SSL Encrypted Checkout" : "২৫৬-বিট এসএসএল নিরাপদ পেমেন্ট"}</p>
              <p className="text-[11px] text-slate-500">{isEn ? "Official bank & MFS automated confirmation" : "বিকাশ, নগদ ও ব্যাংক মাধ্যমে তাৎক্ষণিক কনফার্মেশন"}</p>
            </div>
          </div>

          {/* Gateway Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {paymentGateways.map((gw, gIdx) => (
              <span key={gIdx} className="bg-white border border-slate-200 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-2xs">
                {gw.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
