"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Star, Users, MapPin, Briefcase, GraduationCap, Clock, MonitorPlay, Activity } from "lucide-react";

export default function HeroSection2() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } },
  };

  const studentAvatars = [
    "https://i.pravatar.cc/150?img=11",
    "https://i.pravatar.cc/150?img=32",
    "https://i.pravatar.cc/150?img=47",
    "https://i.pravatar.cc/150?img=12",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 lg:pt-32 pb-20 lg:pb-32 min-h-screen flex items-center">
      
      {/* Animated Background Mesh & Grids */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00a884]/10 via-[#3b82f6]/5 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10000ms] -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />
      
      {/* Animated Matrix Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Text & CTA */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          className="flex flex-col items-start text-left space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a884] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00a884]"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700">{language === 'en' ? 'Admissions Open - Fall 2024' : 'ভর্তি চলছে - ফল ২০২৪'}</span>
            <ArrowRight size={14} className="text-gray-400" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0b2b46] leading-[1.05] tracking-tight">
            {language === 'en' ? 'Command Your' : 'নিয়ন্ত্রণ করুন'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a884] via-[#00c698] to-[#3b82f6]">
              {language === 'en' ? 'IT Career.' : 'আপনার আইটি ক্যারিয়ার'}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-lg font-medium leading-relaxed">
            {language === 'en' ? 'Step into our command center. Access industry-leading curriculum, live mentors, and real-world projects designed to get you hired.' : 'আমাদের কমান্ড সেন্টারে প্রবেশ করুন। চাকরি পাওয়ার জন্য ডিজাইন করা সিলেবাস, লাইভ মেন্টর এবং রিয়েল-ওয়ার্ল্ড প্রজেক্টের অ্যাক্সেস পান।'}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#0b2b46] hover:bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold text-[15px] shadow-[0_15px_30px_rgba(11,43,70,0.2)] hover:shadow-[0_20px_40px_rgba(11,43,70,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center space-x-2">
              <span>{t.hero.ourServices}</span>
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-white border border-gray-200 hover:border-gray-300 text-[#0b2b46] px-8 py-4 rounded-xl font-bold text-[15px] shadow-sm transition-all">
              <Play size={18} className="text-[#00a884] group-hover:scale-110 transition-transform" fill="currentColor" />
              <span>{language === 'en' ? 'Watch Intro' : 'ভিডিও দেখুন'}</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="pt-8 flex items-center space-x-6 text-gray-500 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={16} className="text-yellow-500" fill="currentColor" />
              <span>4.9/5 Student Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Dashboard Layout */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
          className="relative h-full min-h-[550px] w-full"
        >
          {/* Main Container */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl rounded-[32px] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col p-6 space-y-6">
            
            {/* Top Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Live Placement Tracker */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0b2b46] to-[#1e293b] rounded-2xl p-5 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00a884]/20 rounded-full blur-[20px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-white font-bold text-sm flex items-center space-x-2">
                    <Briefcase size={16} className="text-[#00a884]" />
                    <span>Live Placements</span>
                  </h3>
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                
                <div className="space-y-3 relative z-10">
                  {[
                    { role: "Frontend Dev", company: "TechNova", time: "2m ago" },
                    { role: "MERN Stack", company: "WebFlow Inc", time: "15m ago" }
                  ].map((job, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg p-2 text-xs">
                      <div>
                        <p className="text-white font-semibold">{job.role}</p>
                        <p className="text-gray-400 text-[10px]">{job.company}</p>
                      </div>
                      <span className="text-[#00a884] font-mono text-[10px]">{job.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Active Classes */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#0b2b46] font-bold text-sm flex items-center space-x-2">
                    <MonitorPlay size={16} className="text-blue-500" />
                    <span>Live Classes</span>
                  </h3>
                  <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-gray-800 font-bold text-sm mb-1">Advanced React Patterns</p>
                  <p className="text-gray-500 text-xs mb-3 flex items-center"><Clock size={12} className="mr-1"/> Started 10 mins ago</p>
                  
                  <div className="flex items-center space-x-2 mt-auto">
                    <div className="flex -space-x-2">
                      {studentAvatars.map((src, i) => (
                        <img key={i} src={src} className="w-6 h-6 rounded-full border-2 border-white" alt="student" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">+124 watching</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row - Performance Chart */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-[#0b2b46] font-bold text-sm flex items-center space-x-2">
                    <Activity size={16} className="text-purple-500" />
                    <span>Avg. Student Success Rate</span>
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">Last 6 months performance</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-[#00a884]">98.5%</p>
                  <p className="text-green-500 text-[10px] font-bold flex items-center justify-end"><ArrowRight size={10} className="-rotate-45 mr-1"/> +2.4%</p>
                </div>
              </div>

              {/* Animated Line Chart SVG */}
              <div className="relative h-24 w-full mt-auto">
                {mounted && (
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 30">
                    {/* Grid lines */}
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                    
                    {/* Gradient Fill under line */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00a884" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#00a884" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,25 Q15,20 25,22 T50,15 T75,8 T100,2 L100,30 L0,30 Z"
                      fill="url(#chartGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    
                    {/* Actual Data Line */}
                    <motion.path
                      d="M0,25 Q15,20 25,22 T50,15 T75,8 T100,2"
                      fill="none"
                      stroke="#00a884"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                    
                    {/* Data Points */}
                    {[
                      { x: 25, y: 22 },
                      { x: 50, y: 15 },
                      { x: 75, y: 8 },
                      { x: 100, y: 2 },
                    ].map((pt, i) => (
                      <motion.circle 
                        key={i}
                        cx={pt.x} 
                        cy={pt.y} 
                        r="2" 
                        fill="#fff" 
                        stroke="#0b2b46" 
                        strokeWidth="1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.5 + (i * 0.1) }}
                      />
                    ))}
                  </svg>
                )}
              </div>
            </motion.div>

          </div>

          {/* Floating UI Element overlapping container */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-[25%] bg-white rounded-xl p-3 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center space-x-3 z-20"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <GraduationCap size={20} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Expert Mentors</p>
              <p className="text-[#0b2b46] font-black text-sm">24/7 Support</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
