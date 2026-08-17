"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Star, Quote, Award, TrendingUp, CheckCircle2, Building2 } from "lucide-react";

export default function HomeSuccessSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const successStories = [
    {
      id: 1,
      name: isEn ? "Mahmudul Hasan" : "মাহমুদুল হাসান",
      role: isEn ? "Full-Stack Software Engineer" : "ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার",
      company: "Brain Station 23",
      track: isEn ? "Next.js & Microservices Track" : "নেক্সট.জেএস ও মাইক্রোসার্ভিসেস",
      story: isEn 
        ? "Before joining US Software, I struggled with complex backend architecture. The 1-on-1 mentor reviews and live project capstones gave me the exact skills needed to crack the interview at Brain Station 23."
        : "ইউএস সফটওয়্যারের মাইক্রোসার্ভিসেস ও নেক্সট.জেএস কোর্স এবং মেন্টরদের সরাসরি গাইডলাইনের কারণে আমি ব্রেন স্টেশন ২৩-এ ফুল-স্ট্যাক ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার শুরু করতে পেরেছি।",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      salaryBoost: isEn ? "+140% Salary Boost" : "১৪০% স্যালারি বৃদ্ধি",
      rating: 5
    },
    {
      id: 2,
      name: isEn ? "Nusrat Jahan" : "নুসরাত জাহান",
      role: isEn ? "Generative AI Developer" : "জেনারেটিভ এআই ডেভেলপার",
      company: "Augmedix AI Team",
      track: isEn ? "AI & Autonomous Agents Track" : "এআই ও অটোনোমাস এজেন্টস",
      story: isEn 
        ? "The curriculum was 100% hands-on. We built production-level RAG vector search pipelines and fine-tuned open-source LLMs. Today I work on health-tech AI systems."
        : "হাতে-কলমে ভেক্টর ডাটাবেস ও র‍্যাগ পাইপলাইন তৈরি শেখার মাধ্যমে অগমেডিক্সের এআই টিমে যোগ দিতে পেরেছি। কোর্সটির প্রজেক্টগুলো অসাধারণ ছিল।",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
      salaryBoost: isEn ? "International Offer" : "আন্তর্জাতিক অফার",
      rating: 5
    },
    {
      id: 3,
      name: isEn ? "Sabbir Ahmed" : "সাব্বির আহমেদ",
      role: isEn ? "DevOps & Cloud Engineer" : "ডেভঅপ্স ও ক্লাউড ইঞ্জিনিয়ার",
      company: "Kona Software Lab",
      track: isEn ? "Cloud Architecture Masterclass" : "ক্লাউড আর্কিটেকচার মাস্টারক্লাস",
      story: isEn 
        ? "Kubernetes and Terraform were intimidating to me until I experienced the real infrastructure labs here. The mock interviews gave me immense confidence."
        : "এডব্লিউএস, কুবারনেটিস ও টেরাফর্ম ল্যাবগুলো আমার টেকনিক্যাল ভিত্তি অত্যন্ত শক্ত করেছে। কোর্স চলাকালীনই আমি জবের অফার পাই।",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      salaryBoost: isEn ? "Direct Placement" : "সরাসরি প্লেসমেন্ট",
      rating: 5
    }
  ];

  return (
    <section id="success" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: Testimonial Header with Star Cluster */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2.5 shadow-2xs"
          >
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-amber-400" />
              ))}
            </div>
            <span>{isEn ? "4.95/5 AVERAGE ALUMNI RATING" : "৪.৯৫/৫ শিক্ষার্থী সন্তুষ্টি"}</span>
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
                Student <span className="text-[#008744]">Success</span> <span className="text-[#DE1F26]">Stories</span>
              </>
            ) : (
              <>
                সফল শিক্ষার্থীদের <span className="text-[#008744]">অনুপ্রেরণামূলক</span> <span className="text-[#DE1F26]">গল্প</span>
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
              ? "Read how our graduates transformed their careers and secured engineering roles at top tech companies."
              : "আমাদের প্রাক্তন শিক্ষার্থীরা কীভাবে নিজেদের প্রস্তুত করে শীর্ষস্থানীয় সফটওয়্যার কোম্পানিতে স্থান করে নিয়েছেন তাদের বাস্তব অভিজ্ঞতা।"}
          </motion.p>
        </div>

        {/* STORIES CARDS GRID: 3-column responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {successStories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Row: Stars & Placement Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <TrendingUp size={10} />
                    {story.salaryBoost}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4 italic relative">
                  "{story.story}"
                </p>
              </div>

              {/* Author & Placement Details */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <img 
                  src={story.avatar} 
                  alt={story.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#008744]/30" 
                />
                <div className="min-w-0">
                  <h4 className="font-extrabold text-[#08121a] text-xs sm:text-sm truncate">{story.name}</h4>
                  <p className="text-[11px] font-semibold text-[#008744] truncate">{story.role}</p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <Building2 size={10} className="text-slate-400" />
                    <span>{story.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
