"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Target, Compass, ShieldCheck, 
  Globe, Building2, 
  HeartHandshake, Lightbulb, Rocket,
  Code2, Check
} from "lucide-react";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const milestones = [
    {
      year: "2018",
      title: isEn ? "Foundation & Tech Lab" : "প্রতিষ্ঠা ও টেক ল্যাব স্থাপন",
      desc: isEn ? "Started as an enterprise software engineering firm delivering custom microservices and web platforms for international clients." : "গ্লোবাল ক্লায়েন্টদের জন্য এন্টারপ্রাইজ সফটওয়্যার ডেভেলপমেন্ট দিয়ে আমাদের যাত্রা শুরু।"
    },
    {
      year: "2020",
      title: isEn ? "Academy & Training Division" : "একাডেমি ও প্রফেশনাল ট্রেনিং শুরু",
      desc: isEn ? "Launched industry-grade bootcamps with 1-on-1 senior mentorship to bridge academic theory and production software engineering." : "একাডেমিক থিওরি ও রিয়েল-লাইফ সফটওয়্যার ইঞ্জিনিয়ারিংয়ের পার্থক্য দূর করতে প্রফেশনাল ট্রেনিং শুরু।"
    },
    {
      year: "2022",
      title: isEn ? "120+ Hiring Partners Network" : "১২০+ হাইরিং পার্টনার নেটওয়ার্ক",
      desc: isEn ? "Established direct hiring pipelines with top FinTech, SaaS, and IT consultancies across South Asia, Europe, and North America." : "শীর্ষস্থানীয় দেশি ও আন্তর্জাতিক সফটওয়্যার কোম্পানির সাথে সরাসরি প্লেসমেন্ট নেটওয়ার্ক গড়ে তোলা।"
    },
    {
      year: "2024",
      title: isEn ? "AI Research & Cloud Platform Lab" : "এআই রিসার্চ ও ক্লাউড ল্যাব",
      desc: isEn ? "Integrated Generative AI, autonomous agents, and multi-cloud Kubernetes into our production software workflows." : "জেনারেটিভ এআই, অটোনোমাস এজেন্টস ও কুবারনেটিস ক্লাউড প্রযুক্তি কারিকুলাম ও সার্ভিসে অন্তর্ভুক্ত।"
    },
    {
      year: "2026",
      title: isEn ? "Global Tech Talent Ecosystem" : "গ্লোবাল টেক ইকোসিস্টেম",
      desc: isEn ? "Over 6,200+ engineers trained, 120+ enterprise apps deployed worldwide with a 98% hiring success rate." : "৬,২০০+ গ্র্যাজুয়েট ডেভেলপার ও বিশ্বজুড়ে ১২০+ সফল সফটওয়্যার প্রোডাকশন ডেলিভারি।"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      color: "from-[#DE1F26] to-rose-700",
      hoverBorder: "hover:border-[#DE1F26]/80 hover:shadow-[0_20px_45px_rgba(222,31,38,0.15)]",
      title: isEn ? "Innovation First" : "উদ্ভাবনী চিন্তা",
      desc: isEn ? "We adopt bleeding-edge technology, from React 19 to autonomous LLM frameworks, building future-proof systems." : "সর্বাধুনিক টেকনোলজি প্রয়োগ করে আধুনিক ও টেকসই সফটওয়্যার সমাধান তৈরি করা।"
    },
    {
      icon: Target,
      color: "from-[#008744] to-emerald-700",
      hoverBorder: "hover:border-[#008744]/80 hover:shadow-[0_20px_45px_rgba(0,135,68,0.15)]",
      title: isEn ? "Production Realism" : "প্র্যাকটিক্যাল কোডিং",
      desc: isEn ? "No toy projects. Everything we teach and build is production-grade, scalable, and follows clean architecture principles." : "কোনো ডামি প্রজেক্ট নয়, সবকিছুই প্রোডাকশন কোয়ালিটি ও ক্লিন আর্কিটেকচার অনুযায়ী তৈরি।"
    },
    {
      icon: ShieldCheck,
      color: "from-[#DE1F26] to-rose-700",
      hoverBorder: "hover:border-[#DE1F26]/80 hover:shadow-[0_20px_45px_rgba(222,31,38,0.15)]",
      title: isEn ? "Integrity & Quality" : "সততা ও গুণমান",
      desc: isEn ? "We uphold the highest code quality standards, thorough automated testing, and zero-trust cloud security." : "উচ্চমানের কোড কোয়ালিটি, টেস্ট-ড্রিভেন ডেভেলপমেন্ট ও সর্বোচ্চ সিকিউরিটি মান বজায় রাখা।"
    },
    {
      icon: HeartHandshake,
      color: "from-[#008744] to-teal-700",
      hoverBorder: "hover:border-[#008744]/80 hover:shadow-[0_20px_45px_rgba(0,135,68,0.15)]",
      title: isEn ? "Lifelong Mentorship" : "আজীবন মেন্টরশিপ",
      desc: isEn ? "Our commitment doesn't end at graduation. We guide engineers through their entire career progression." : "কোর্স শেষেই শেষ নয়, ক্যারিয়ারের প্রতিটি ধাপে শিক্ষার্থী ও ক্লায়েন্টদের সার্বক্ষণিক গাইডেন্স।"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow pt-6 pb-24">
        
        {/* ABOUT INNOVATION LAB 2-COLUMN HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#08121a] via-[#0b1e19] to-[#050b10] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800">
          <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-[#008744]/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-[#DE1F26]/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-[96rem] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-[#008744]/15 border border-[#008744]/35 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-[#008744]"
                >
                  <Rocket size={14} className="text-[#DE1F26]" />
                  <span className="text-emerald-300">{t.aboutPage?.badge || "ABOUT US SOFTWARE LTD"}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-6"
                >
                  {t.aboutPage?.title || "Empowering Future Tech Leaders"}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
                >
                  {t.aboutPage?.subtitle || "We bridge the gap between academic theory and real-world software engineering with immersive learning and elite development services."}
                </motion.p>

                {/* Core Pillars Chips */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="flex flex-wrap items-center gap-3 text-xs font-mono"
                >
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 text-emerald-300 flex items-center space-x-2">
                    <Check size={14} />
                    <span>Production Engineering</span>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 text-rose-300 flex items-center space-x-2">
                    <Globe size={14} />
                    <span>Global Placements</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Interactive Innovation Ecosystem Card (5 Cols) */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-7 border border-white/20 shadow-2xl space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-emerald-400">Engineering Ecosystem</span>
                    <span className="text-[10px] text-slate-300 font-mono">EST. 2018</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 bg-black/30 rounded-2xl border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400">Global Corporate Partners</div>
                        <div className="text-xl font-black text-white mt-0.5">120+ Companies</div>
                      </div>
                      <Building2 className="text-[#008744]" size={24} />
                    </div>

                    <div className="p-3.5 bg-black/30 rounded-2xl border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400">Software Applications Deployed</div>
                        <div className="text-xl font-black text-rose-300 mt-0.5">100+ Systems</div>
                      </div>
                      <Code2 className="text-[#DE1F26]" size={24} />
                    </div>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-300 font-mono flex items-center justify-center gap-2">
                    <ShieldCheck size={14} className="text-[#008744]" />
                    <span>ISO 9001:2015 Certified Software Quality</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* METRICS STATS RIBBON IN RED & GREEN */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-[0_12px_35px_rgba(0,0,0,0.06)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#008744]">6,200+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">{isEn ? "Graduated Engineers" : "গ্র্যাজুয়েট ডেভেলপার"}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#DE1F26]">120+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">{isEn ? "Hiring Tech Partners" : "হাইরিং পার্টনার্স"}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#008744]">100+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">{isEn ? "Enterprise Deployments" : "সফল প্রজেক্ট ডেলিভারি"}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#DE1F26]">98%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">{isEn ? "Satisfaction Rate" : "সন্তুষ্টির হার"}</div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION DUAL 3D CARDS */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_rgba(0,135,68,0.15)] hover:border-[#008744]/80 transition-all duration-150 relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#008744] to-emerald-700 flex items-center justify-center text-white shadow-md mb-6">
                <Target size={26} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{t.aboutPage?.mission || "Our Mission"}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {isEn 
                  ? "To democratize elite software engineering knowledge, empowering every passionate learner with real-world architectural tools, production skills, and direct placement opportunities in the global tech ecosystem."
                  : "আমাদের লক্ষ্য হলো শিক্ষার্থীদের কাছে বিশ্বমানের সফটওয়্যার ইঞ্জিনিয়ারিং জ্ঞান সহজলভ্য করা এবং আন্তর্জাতিক ইন্ডাস্ট্রির জন্য দক্ষ ও আত্মবিশ্বাসী সফটওয়্যার ইঞ্জিনিয়ার গড়ে তোলা।"
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_rgba(222,31,38,0.15)] hover:border-[#DE1F26]/80 transition-all duration-150 relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DE1F26] to-rose-700 flex items-center justify-center text-white shadow-md mb-6">
                <Compass size={26} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{t.aboutPage?.vision || "Our Vision"}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {isEn 
                  ? "To become the premier global innovation and talent powerhouse that produces top 1% engineers capable of building scalable, reliable, and intelligent systems for modern enterprises."
                  : "ভবিষ্যতের ডিজিটাল বিশ্বের নেতৃত্ব দিতে সক্ষম এমন শীর্ষ ১% সফটওয়্যার ইঞ্জিনিয়ার ও টেক লিডার তৈরি করার মাধ্যমে একটি গ্লোবাল ইনোভেশন হাব হিসেবে প্রতিষ্ঠিত হওয়া।"
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES GRID WITH GLOW BORDERS */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">{t.aboutPage?.coreValues || "Core Values"}</h2>
            <p className="text-sm text-slate-500 font-normal">
              {isEn ? "The principles that define our engineering culture and student success." : "যেসব নীতি ও মূল্যবোধ আমাদের প্রতিটি পদক্ষেপে পরিচালিত করে।"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -7, scale: 1.02, transition: { duration: 0.15 } }}
                  className={`bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm ${val.hoverBorder} transition-all duration-150 flex flex-col justify-between cursor-pointer`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.color} flex items-center justify-center text-white shadow-md mb-4`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* JOURNEY MILESTONE TIMELINE */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">{t.aboutPage?.ourStory || "Our Journey"}</h2>
            <p className="text-sm text-slate-500 font-normal">
              {isEn ? "How we grew from an engineering consultancy into an international learning powerhouse." : "একটি সফটওয়্যার কনসালটেন্সি থেকে আন্তর্জাতিক লার্নিং হাব হয়ে ওঠার গল্প।"}
            </p>
          </div>

          <div className="relative border-l-2 border-[#008744]/30 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#008744] border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-150" />
                
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm group-hover:border-[#008744]/60 group-hover:shadow-[0_12px_30px_rgba(0,135,68,0.12)] transition-all duration-150">
                  <span className="text-xs font-mono font-black text-[#008744] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
