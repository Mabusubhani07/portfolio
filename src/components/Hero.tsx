"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-line-inner", {
        y: "115%",
        duration: 1.2,
        stagger: 0.12,
        delay: 0.2,
      }).from(
        ".hero-fade",
        {
          opacity: 0,
          y: 20,
          duration: 0.9,
          stagger: 0.08,
        },
        "-=0.7"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
      id="hero"
    >
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 hairline-b text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E3A2F] dark:bg-[#44725E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E3A2F] dark:bg-[#44725E]"></span>
          </span>
          <span className="text-neutral-900 dark:text-neutral-200 font-medium">
            Open to internships and opportunities
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span>Bengaluru, India</span>
          <span className="hidden sm:inline">12.9716° N, 77.5946° E</span>
          <span className="hidden md:inline">MAHE · 2029</span>
        </div>
      </div>

      {/* Main Grid: Full-Width Editorial Typography */}
      <div className="max-w-5xl my-auto py-12 md:py-20">
        <div className="flex flex-col justify-end">
          <div className="overflow-hidden mb-4">
            <p className="hero-fade text-xs md:text-sm font-mono tracking-[0.24em] uppercase text-neutral-500 dark:text-neutral-400">
              Selected Works & Systems Portfolio
            </p>
          </div>

          <h1
            ref={headlineRef}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-[-0.03em] font-normal text-neutral-950 dark:text-[#EAE7E0]"
          >
            <span className="block overflow-hidden">
              <span className="hero-line-inner block">D Mabusubhani</span>
            </span>
          </h1>

          <div
            ref={subtitleRef}
            className="mt-6 sm:mt-10 max-w-3xl border-l-2 border-[#1E3A2F] dark:border-[#44725E] pl-6 py-1"
          >
            <p className="hero-fade font-sans text-2xl sm:text-3xl md:text-4xl text-neutral-800 dark:text-neutral-200 font-light tracking-tight">
              Software Engineer · AI/ML Builder
            </p>
            <p className="hero-fade mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl">
              Undergraduate engineer at Manipal Institute of Technology (MAHE), crafting deterministic software architectures, secure digital investigation platforms, and applied machine learning tools.
            </p>
          </div>

          {/* Action Row */}
          <div className="hero-fade flex flex-wrap items-center gap-4 mt-10 sm:mt-12 pt-8 hairline-t">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#141414] text-[#F4F1EA] dark:bg-[#EAE7E0] dark:text-[#121314] text-xs font-mono tracking-wider uppercase transition-transform hover:-translate-y-0.5"
              data-cursor="view"
              data-cursor-label="DIEMP"
            >
              <span>Explore Flagship Work</span>
              <span className="text-xs">↓</span>
            </a>

            <a
              href="/assets/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 text-xs font-mono tracking-wider uppercase transition-colors"
              data-cursor="open"
              data-cursor-label="CV"
            >
              <span>Download Resume</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Core Fact Tickers */}
      <div
        ref={metaRef}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 hairline-t text-xs font-mono text-neutral-500 dark:text-neutral-400"
      >
        <div className="flex items-center gap-4">
          <a
            href="#about"
            className="flex items-center gap-2 group text-neutral-800 dark:text-neutral-200 hover:text-[#1E3A2F] dark:hover:text-[#44725E] transition-colors"
          >
            <span className="w-5 h-5 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
              <ArrowDown className="w-3 h-3" />
            </span>
            <span className="uppercase tracking-widest text-[11px]">
              Scroll to explore
            </span>
          </a>
        </div>

        <div className="flex items-center gap-6 sm:gap-10 text-[11px] uppercase tracking-wider">
          <div>
            <span className="text-neutral-400 dark:text-neutral-600 block">Class</span>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">B.Tech 2029</span>
          </div>
          <div className="hairline-l pl-6 sm:pl-10">
            <span className="text-neutral-400 dark:text-neutral-600 block">Stage</span>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">Semester 3</span>
          </div>
          <div className="hairline-l pl-6 sm:pl-10">
            <span className="text-neutral-400 dark:text-neutral-600 block">Focus</span>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">Systems & Applied AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
