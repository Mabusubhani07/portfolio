"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const hasSeen = sessionStorage.getItem("dm-preloader-seen");
    if (hasSeen) {
      setShouldRender(false);
      onComplete?.();
      return;
    }

    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Custom ease out quad
      const eased = Math.floor(progress * 100);
      setCount(eased);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem("dm-preloader-seen", "true");
          onComplete?.();
        }, 300);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [onComplete]);

  useEffect(() => {
    if (isFinished) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000); // allow curtain lift animation to finish
      return () => clearTimeout(timer);
    }
  }, [isFinished]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between p-8 md:p-14 bg-[#141414] text-[#F4F1EA] select-none transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-auto ${
        isFinished ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={isFinished}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-xs tracking-widest uppercase font-mono text-[#8C877D]">
        <span>Portfolio · 2026</span>
        <span>Bengaluru, IN</span>
      </div>

      {/* Center Typography */}
      <div className="text-center my-auto">
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl tracking-tight text-[#F4F1EA] italic font-normal">
          D Mabusubhani
        </h1>
        <p className="mt-4 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8C877D] font-mono">
          Software Engineer · AI/ML Builder
        </p>
      </div>

      {/* Bottom Counter and Status */}
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <div className="text-[11px] tracking-widest uppercase font-mono text-[#8C877D]">
            Initialising Environment
          </div>
          <div className="text-xs text-[#EAE7E0]/60">
            Precision & Craft
          </div>
        </div>
        <div className="font-display text-5xl sm:text-7xl tabular-nums tracking-tighter text-[#F4F1EA]">
          {count < 10 ? `00${count}` : count < 100 ? `0${count}` : count}
        </div>
      </div>
    </div>
  );
}
