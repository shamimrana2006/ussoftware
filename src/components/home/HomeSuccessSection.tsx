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
    },
    {
      id: 4,
      name: isEn ? "Tariqul Islam" : "তারিকুল ইসলাম",
      role: isEn ? "Mobile App Engineer" : "মোবাইল অ্যাপ ইঞ্জিনিয়ার",
      company: "Pathao R&D",
      track: isEn ? "Cross-Platform Flutter & iOS" : "ফ্লাটার ও আইওএস ডেভেলপমেন্ট",
      story: isEn 
        ? "The hands-on mobile app projects and state management labs prepared me for high-scale app architecture. I joined Pathao right after finishing the capstone project!"
        : "ফ্লাটার ও স্টেট ম্যানেজমেন্টের বাস্তবমুখী প্রজেক্টগুলোর কারণে পাঠাও-এর আরএন্ডডি টিমে মোবাইল অ্যাপ ইঞ্জিনিয়ার হিসেবে কাজের সুযোগ পেয়েছি।",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      salaryBoost: isEn ? "+120% Salary Boost" : "১২০% স্যালারি বৃদ্ধি",
      rating: 5
    },
    {
      id: 5,
      name: isEn ? "Farhana Akhtar" : "ফারহানা আক্তার",
      role: isEn ? "Cyber Security SOC Analyst" : "সাইবার সিকিউরিটি বিশ্লেষক",
      company: "TigerIT Bangladesh",
      track: isEn ? "Ethical Hacking & SOC Security" : "ইথিক্যাল হ্যাকিং ও সিকিউরিটি",
      story: isEn 
        ? "SIEM configuration and penetration testing labs gave me real industry exposure. The mentors guided me through vendor certifications step-by-step."
        : "সিকিউরিটি অপারেশন সেন্টার (SOC) ও পেনটেস্টিং ল্যাবগুলোর ট্রেনিং আমার সিকিউরিটি ক্যারিয়ারের মূল ভিত্তি গড়ে দিয়েছে।",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      salaryBoost: isEn ? "Certified Security Analyst" : "সার্টিফাইড সিকিউরিটি অ্যানালিস্ট",
      rating: 5
    },
    {
      id: 6,
      name: isEn ? "Asif Mahmud" : "আসিফ মাহমুদ",
      role: isEn ? "Senior UI/UX Designer" : "সিনিয়র ইউআই/ইউএক্স ডিজাইনার",
      company: "Kaz Software",
      track: isEn ? "Design Systems & Product Design" : "ডিজাইন সিস্টেমস ও প্রোডাক্ট ডিজাইন",
      story: isEn 
        ? "Building design systems and interactive Figma prototypes under senior leads boosted my portfolio. Now I handle US client design projects remotely!"
        : "ডিজাইন সিস্টেমস ও ইউজার রিসার্চের রিয়েল প্রজেক্টগুলো আমার পোর্টফোলিওকে সমৃদ্ধ করেছে। আন্তর্জাতিক ক্লায়েন্টদের সাথে রিমোট কাজ করছি।",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200",
      salaryBoost: isEn ? "Remote US Client Role" : "রিমোট ইউএস ক্যারিয়ার",
      rating: 5
    }
  ];

  return (
    <section id="success" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: Testimonial Header with Star Cluster */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3.5 shadow-xs"
          >
            <div className="flex items-center gap-0.5 text-amber-400">
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
            className="text-3xl sm:text-4xl font-black text-[#08121a] tracking-tight leading-tight"
          >
            {isEn ? (
              <>
                Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">Success Stories</span>
              </>
            ) : (
              <>
                সফল শিক্ষার্থীদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-emerald-600 to-[#DE1F26]">অনুপ্রেরণামূলক গল্প</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
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
