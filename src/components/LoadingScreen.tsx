"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    setShouldRender(true);

    // Simulate loading progress
    let startTimestamp: number;
    const duration = 2500; // 2.5 seconds loading time

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smoother progress (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setPercentage(Math.floor(easeProgress * 100));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Loading complete
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasVisited", "true");
        }, 400); // slight delay at 100%
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050b14] overflow-hidden"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
          
          {/* Animated Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#00a884]/20 via-cyan-500/10 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Percentage Text */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter"
            >
              {percentage}%
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 md:w-96 h-1.5 bg-white/10 rounded-full mt-8 overflow-hidden relative">
              {/* Animated Progress Bar */}
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00a884] to-cyan-400 rounded-full"
                style={{ width: `${percentage}%` }}
                layout
              />
              {/* Glow on the tip of the progress bar */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px]"
                style={{ left: `calc(${percentage}% - 8px)` }}
              />
            </div>

            {/* Branding / Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex items-center space-x-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#00a884] animate-ping" />
              <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">Initializing System</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
