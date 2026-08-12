"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ChevronRight, Terminal, Sparkles, Shield, Code, Database, Server, Cpu, Box, Cloud } from "lucide-react";

export default function HeroSection3() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("server.js");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#030712] pt-24 pb-20 lg:pt-32 lg:pb-32 min-h-screen flex items-center border-b border-white/5">
      
      {/* Dark Mode Mesh & Glow Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00a884]/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none animate-pulse duration-[5000ms]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      
      {/* Cyber Grid with animated gradient mask */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Dark Tech Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md cursor-default"
          >
            <Sparkles size={14} className="text-[#00a884]" />
            <span className="text-xs font-mono text-[#00a884] uppercase tracking-widest">{language === 'en' ? 'Next-Gen IT Training' : 'নেক্সট-জেন আইটি ট্রেনিং'}</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Code Your <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a884] via-[#34d399] to-[#3b82f6]">
                Digital Future.
              </span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -right-6 bottom-2 w-4 h-12 bg-[#00a884]"
              ></motion.span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl font-light max-w-lg leading-relaxed">
            {language === 'en' ? 'Immersive, project-based training for ambitious developers and engineers. Master the skills that tech companies are hiring for right now.' : 'উচ্চাকাঙ্ক্ষী ডেভেলপার এবং ইঞ্জিনিয়ারদের জন্য প্রোজেক্ট-ভিত্তিক ট্রেনিং। বর্তমান টেক কোম্পানিগুলোতে চাহিদা আছে এমন স্কিলগুলো আয়ত্ত করুন।'}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group bg-gradient-to-r from-[#00a884] to-[#008f6f] text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-2 shadow-[0_0_20px_rgba(0,168,132,0.4)] hover:shadow-[0_0_30px_rgba(0,168,132,0.6)] transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
              <span className="relative z-10">{language === 'en' ? 'Start Learning' : 'শুরু করুন'}</span>
              <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40 px-8 py-4 rounded-xl font-bold flex items-center space-x-2 transition-all">
              <Terminal size={18} className="text-gray-400 group-hover:text-[#3b82f6] transition-colors" />
              <span>{language === 'en' ? 'View Syllabus' : 'সিলেবাস দেখুন'}</span>
            </button>
          </div>

          <div className="pt-8 border-t border-white/10 flex space-x-10">
             <div>
                <p className="text-3xl font-black text-white">50<span className="text-[#00a884]">+</span></p>
                <p className="text-[10px] text-gray-500 font-mono mt-1 tracking-widest">ADVANCED COURSES</p>
             </div>
             <div>
                <p className="text-3xl font-black text-white">92<span className="text-[#3b82f6]">%</span></p>
                <p className="text-[10px] text-gray-500 font-mono mt-1 tracking-widest">PLACEMENT RATE</p>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Cyber Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative w-full h-[550px] perspective-1000"
        >
          {/* Main Floating Terminal Window */}
          <div className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(0,168,132,0.15)] overflow-hidden flex flex-col group z-10">
            
            {/* Terminal Header Tabs */}
            <div className="h-12 bg-black/40 border-b border-white/10 flex items-center px-4 overflow-x-auto no-scrollbar">
              <div className="flex space-x-2 mr-6">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
              </div>
              
              <div className="flex space-x-1 h-full pt-2">
                <button 
                  onClick={() => setActiveTab("server.js")}
                  className={`px-4 py-2 text-xs font-mono rounded-t-lg border-t border-x transition-colors ${activeTab === 'server.js' ? 'bg-[#0f172a] border-white/10 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                >
                  server.js
                </button>
                <button 
                  onClick={() => setActiveTab("terminal")}
                  className={`px-4 py-2 text-xs font-mono rounded-t-lg border-t border-x transition-colors flex items-center ${activeTab === 'terminal' ? 'bg-[#0f172a] border-white/10 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                >
                  <Terminal size={12} className="mr-2" /> bash
                </button>
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm text-gray-300 flex-1 relative overflow-hidden">
              
              {activeTab === "server.js" && (
                <div className="space-y-1">
                  <p><span className="text-purple-400">import</span> express <span className="text-purple-400">from</span> <span className="text-green-300">'express'</span>;</p>
                  <p><span className="text-purple-400">import</span> cors <span className="text-purple-400">from</span> <span className="text-green-300">'cors'</span>;</p>
                  <br/>
                  <p><span className="text-blue-400">const</span> app = <span className="text-yellow-200">express</span>();</p>
                  <p>app.<span className="text-yellow-200">use</span>(cors());</p>
                  <p>app.<span className="text-yellow-200">use</span>(express.<span className="text-yellow-200">json</span>());</p>
                  <br/>
                  <p>app.<span className="text-yellow-200">get</span>(<span className="text-green-300">'/api/status'</span>, (req, res) =&gt; {'{'}</p>
                  <p className="pl-4">res.<span className="text-yellow-200">json</span>({'{'} status: <span className="text-green-300">'Systems Online'</span>, uptime: <span className="text-orange-300">99.99</span> {'}'});</p>
                  <p>{'}'});</p>
                  <br/>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    app.<span className="text-yellow-200">listen</span>(<span className="text-orange-300">8080</span>, () =&gt; {'{'}</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="pl-4">
                    <span className="text-blue-400">console</span>.<span className="text-yellow-200">log</span>(<span className="text-green-300">"🚀 Server running on port 8080"</span>);
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>{'}'});</motion.p>
                </div>
              )}

              {activeTab === "terminal" && (
                <div className="space-y-3">
                  <p><span className="text-[#00a884]">user@us-software</span>:<span className="text-blue-400">~/project</span>$ npm run build</p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-gray-400">&gt; next build</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-green-400">✓ Compiled successfully</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-blue-400">  Route (app)                              Size     First Load JS</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="text-gray-300">┌ ○ /                                      5.4 kB         82.1 kB</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="text-gray-300">├ ○ /courses                               3.2 kB         79.9 kB</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} className="text-gray-300">└ ○ /contact                               1.8 kB         78.5 kB</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="text-green-400 mt-2">✓ Build passing. Ready for deployment.</motion.p>
                  <motion.div 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-[#00a884] inline-block mt-2"
                  ></motion.div>
                </div>
              )}

              {/* Glowing Line inside terminal */}
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00a884] to-transparent opacity-50"></div>
            </div>
          </div>

          {/* Floating Isometric Cards */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotateZ: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-1/4 bg-[#1e293b]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center space-x-4 z-20"
          >
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
              <Code size={24} className="text-blue-400" />
            </div>
            <div>
               <p className="text-white font-bold text-sm">React Engine</p>
               <div className="flex items-center mt-1 space-x-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 <p className="text-gray-400 text-[10px]">Optimal Performance</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10], rotateZ: [2, -2, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-1/4 bg-[#1e293b]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center space-x-4 z-20"
          >
            <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
              <Cloud size={24} className="text-purple-400" />
            </div>
            <div>
               <p className="text-white font-bold text-sm">Cloud Native</p>
               <div className="flex items-center mt-1 space-x-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 <p className="text-gray-400 text-[10px]">AWS Scalable</p>
               </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
