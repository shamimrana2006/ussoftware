'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.65, // Snappy, fast, and responsive smooth scroll (reduced from sluggish 1.2s)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.15,
      touchMultiplier: 1.5,
      infinite: false,
    });

    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationId);
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
