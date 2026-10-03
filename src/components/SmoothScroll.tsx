'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis with fast, crisp, snappy stopping response
    const lenis = new Lenis({
      duration: 0.45, // Snappy & prompt stopping — no lingering drift/float
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fast deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.25, // Fast scroll movement per notch
      touchMultiplier: 1.8, // Responsive touch scrolling
      syncTouch: false,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      window.__lenis = lenis;
    }

    // 2. Continuous Animation Frame
    let animationId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationId = requestAnimationFrame(raf);
    }
    animationId = requestAnimationFrame(raf);

    // 3. Robust page resize trigger
    const triggerResize = () => {
      lenis.resize();
    };

    // 4. ResizeObserver to track dynamic DOM content height changes
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        triggerResize();
      });
      if (document.body) {
        resizeObserver.observe(document.body);
      }
      if (document.documentElement) {
        resizeObserver.observe(document.documentElement);
      }
    }

    // 5. MutationObserver to catch any sudden dynamic additions/removals
    let mutationObserver: MutationObserver | null = null;
    if (typeof MutationObserver !== 'undefined' && document.body) {
      let timeoutId: NodeJS.Timeout | null = null;
      mutationObserver = new MutationObserver(() => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          triggerResize();
        }, 60);
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
      });
    }

    // 6. Window Event Listeners
    window.addEventListener('resize', triggerResize, { passive: true });
    window.addEventListener('load', triggerResize, { passive: true });

    // Handle when user returns to active tab
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        triggerResize();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationId);
      if (resizeObserver) resizeObserver.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      window.removeEventListener('resize', triggerResize);
      window.removeEventListener('load', triggerResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      delete window.__lenis;
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Recalculate dimensions on route transition with staggered checks
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.resize();
      
      const t1 = setTimeout(() => lenisRef.current?.resize(), 50);
      const t2 = setTimeout(() => lenisRef.current?.resize(), 150);
      const t3 = setTimeout(() => lenisRef.current?.resize(), 300);
      const t4 = setTimeout(() => lenisRef.current?.resize(), 600);
      const t5 = setTimeout(() => lenisRef.current?.resize(), 1200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
      };
    }
  }, [pathname]);

  return <>{children}</>;
}
