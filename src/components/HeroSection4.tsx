"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Laptop, Network, Play, Star, Sparkles, TrendingUp, Cpu, Layout, Smartphone, Globe } from "lucide-react";

export default function HeroSection4() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marqueeLogos = [
    { name: "React", icon: <Code size={24} /> },
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "Python", icon: <Terminal size={24} /> },
    { name: "AWS", icon: <Cloud size={24} /> },
    { name: "Docker", icon: <Box size={24} /> },
    { name: "Figma", icon: <PenTool size={24} /> },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-100 pt-24 pb-20 lg:pt-32 lg:pb-32 min-h-screen flex items-center">
      
      {/* Animated Organic Blobs Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ["40% 60% 70% 30%", "30% 70% 50% 50%", "40% 60% 70% 30%"] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[#00a884]/20 to-blue-400/20 blur-[80px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          borderRadius: ["60% 40% 30% 70%", "50% 50% 70% 30%", "60% 40% 30% 70%"] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/20 to-pink-400/20 blur-[80px] pointer-events-none"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex flex-col lg:flex-row items-stretch gap-6 relative z-10">
        
        {/* LEFT COMPONENT: Text & CTA inside Bento */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 bg-white/80 backdrop-blur-xl rounded-[40px] p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white flex flex-col justify-center relative overflow-hidden"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs self-start mb-8 uppercase tracking-widest px-4 py-2 rounded-full">
            <Sparkles size={14} className="text-[#00a884]" />
            <span>{language === 'en' ? 'Premium IT Education' : 'প্রিমিয়াম আইটি শিক্ষা'}</span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0f172a] leading-[1.05] tracking-tight mb-6">
            {language === 'en' ? 'Transform Your' : 'আপনার ক্যারিয়ার'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a884] to-[#3b82f6]">
               {language === 'en' ? 'Career with Us.' : 'পরিবর্তন করুন।'}
            </span>
          </h1>

          <p className="text-slate-600 text-lg font-medium max-w-md mb-10 leading-relaxed">
            {language === 'en' 
              ? 'Join the top 1% of developers. We focus on real-world skills, industry-level projects, and guarantee job placements.' 
              : 'সেরা ১% ডেভেলপারদের সাথে যুক্ত হোন। আমরা রিয়েল-ওয়ার্ল্ড স্কিল ও প্রোজেক্টের ওপর জোর দিই যা চাকরির নিশ্চয়তা দেয়।'}
          </p>

          <div className="flex flex-wrap gap-4 mt-auto">
            <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(15,23,42,0.2)]">
              <span>{language === 'en' ? 'Explore Programs' : 'প্রোগ্রাম দেখুন'}</span>
              <ArrowRight size={18} />
            </button>
            <button className="bg-white hover:bg-slate-50 text-[#0f172a] border-2 border-slate-200 hover:border-[#00a884] px-8 py-4 rounded-2xl font-bold transition-all flex items-center space-x-2">
              <Play size={18} className="text-[#00a884]" fill="currentColor"/>
              <span>Intro</span>
            </button>
          </div>
        </motion.div>

        {/* RIGHT COMPONENT: Dense Bento Grid */}
        <div className="flex-[1.2] grid grid-cols-2 grid-rows-3 gap-6 h-auto lg:h-[650px]">
          
          {/* Top Left: Practical Learning (Large) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-[#00a884] to-[#008f6f] rounded-[32px] p-8 shadow-xl text-white flex flex-col relative overflow-hidden group/card"
          >
            <div className="absolute -right-10 -bottom-10 w-48 h-48 border-[30px] border-white/10 rounded-full group-hover/card:scale-125 transition-transform duration-700" />
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-auto group-hover/card:bg-white/30 transition-colors">
              <Laptop size={28} className="text-white" />
            </div>
            
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-2 leading-tight">{language === 'en' ? '100% Practical' : 'প্র্যাকটিক্যাল'} <br/> Learning</h3>
              <p className="text-white/80 font-medium text-sm">{language === 'en' ? 'Build 10+ real-world applications.' : '১০+ রিয়েল-ওয়ার্ল্ড অ্যাপ্লিকেশন তৈরি করুন।'}</p>
            </div>
          </motion.div>

          {/* Top Right: Success Profile */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="col-span-2 sm:col-span-1 row-span-1 bg-white/90 backdrop-blur-md rounded-[32px] p-6 shadow-sm border border-white flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
               <div className="flex items-center space-x-3">
                 <img src="https://i.pravatar.cc/150?img=68" alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-100" />
                 <div>
                   <p className="text-slate-800 font-bold text-sm">Sarah Jenkins</p>
                   <p className="text-[#00a884] text-[10px] font-bold uppercase tracking-wider">Hired at Google</p>
                 </div>
               </div>
               <div className="flex text-yellow-400">
                 <Star size={12} fill="currentColor" />
                 <Star size={12} fill="currentColor" />
                 <Star size={12} fill="currentColor" />
                 <Star size={12} fill="currentColor" />
                 <Star size={12} fill="currentColor" />
               </div>
            </div>
            <p className="text-slate-500 text-xs italic">"The curriculum is exactly what tech giants are looking for right now."</p>
          </motion.div>

          {/* Middle Right: Course Progress Radial */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="col-span-2 sm:col-span-1 row-span-1 bg-[#0f172a] rounded-[32px] p-6 shadow-xl flex items-center justify-between overflow-hidden relative"
          >
            <div className="absolute -left-10 top-0 w-32 h-32 bg-blue-500/20 blur-[30px] rounded-full"></div>
            <div>
              <p className="text-slate-400 text-xs font-semibold mb-1 uppercase tracking-widest">Placement Rate</p>
              <h3 className="text-white text-3xl font-black">94<span className="text-blue-500">%</span></h3>
            </div>
            
            {/* Custom Radial SVG */}
            <div className="relative w-16 h-16">
              {mounted && (
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-700"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <motion.path
                    className="text-blue-500"
                    strokeDasharray="100, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 6 }} // 94%
                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                  />
                </svg>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                 <TrendingUp size={16} className="text-blue-400" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Full: Tech Marquee */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="col-span-2 row-span-1 bg-white/90 backdrop-blur-md rounded-[32px] shadow-sm border border-white flex flex-col justify-center overflow-hidden py-4"
          >
             <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Technologies We Master</p>
             
             {/* Infinite Marquee */}
             <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 px-6">
                  {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((tech, i) => (
                    <div key={i} className="flex items-center space-x-2 text-slate-700 opacity-60 hover:opacity-100 hover:text-[#00a884] transition-colors cursor-pointer">
                      {tech.icon}
                      <span className="font-bold text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
                {/* Gradient Fades for Marquee edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Dummy Icon components for Marquee since some lucide-react imports might not exist in the exact version
function Server(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>}
function Terminal(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>}
function Cloud(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>}
function Box(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>}
function PenTool(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>}
