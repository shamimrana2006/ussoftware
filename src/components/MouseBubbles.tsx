"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  size: number;
  burst?: boolean;
  duration?: number;
}

const colors = ["#DE1F26", "#008744", "#EF4444", "#10B981", "#B91C1C", "#056839"];

export default function MouseBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const lastSpawnTime = React.useRef(0);

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnTime.current > 200) {
      lastSpawnTime.current = now;
      const newBubbles = Array.from({ length: 1 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 40 + 20;
        return {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          targetX: e.clientX + Math.cos(angle) * distance,
          targetY: e.clientY + Math.sin(angle) * distance,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 4 + 2,
          duration: 0.9,
        };
      });
      setBubbles((prev) => [...prev.slice(-40), ...newBubbles]);

      setTimeout(() => {
        const ids = newBubbles.map(b => b.id);
        setBubbles((prev) => prev.filter(b => !ids.includes(b.id)));
      }, 900);
    }
  }, []);

  const handleClick = React.useCallback((e: MouseEvent) => {
    const burstBubbles = Array.from({ length: 8 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 40 + 30;
      return {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        targetX: e.clientX + Math.cos(angle) * distance,
        targetY: e.clientY + Math.sin(angle) * distance,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 2,
        burst: true,
        duration: 0.7,
      };
    });
    setBubbles((prev) => [...prev.slice(-30), ...burstBubbles]);

    setTimeout(() => {
      const ids = burstBubbles.map(b => b.id);
      setBubbles((prev) => prev.filter(b => !ids.includes(b.id)));
    }, 700);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [handleMouseMove, handleClick]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0.6, x: b.x, y: b.y, scale: b.burst ? 1.5 : 1 }}
            animate={{
              opacity: 0,
              x: b.targetX,
              y: b.targetY,
              scale: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: b.duration || 1.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: b.size,
              height: b.size,
              backgroundColor: b.color,
              borderRadius: "50%",
              boxShadow: `0 0 10px ${b.color}90`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
