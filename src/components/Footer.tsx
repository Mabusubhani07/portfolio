"use client";

import React, { useEffect, useState } from "react";
import { formatTimeIST } from "@/lib/utils";
import { ArrowUp, Clock, Globe } from "lucide-react";

export function Footer() {
  const [timeIST, setTimeIST] = useState<string>("");

  useEffect(() => {
    // Initial clock setup
    setTimeIST(formatTimeIST());

    const interval = setInterval(() => {
      setTimeIST(formatTimeIST());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 px-6 md:px-12 max-w-7xl mx-auto text-xs font-mono">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 hairline-b">
        {/* Left: Live Bengaluru Local Time */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-neutral-500 uppercase tracking-widest text-[11px]">
            <Clock className="w-3.5 h-3.5 text-[#1E3A2F]" />
            <span>Bengaluru Local Time</span>
          </div>
          <div className="text-sm md:text-base font-medium text-neutral-900 tabular-nums">
            {timeIST ? `${timeIST} IST` : "Loading IST..."}
          </div>
          <p className="text-[11px] text-neutral-500">
            Karnataka, India · UTC+05:30
          </p>
        </div>

        {/* Center: Monogram & Philosophy */}
        <div className="text-left md:text-center space-y-1">
          <div className="font-display text-xl text-neutral-900 font-normal">
            D Mabusubhani
          </div>
          <p className="text-[11px] text-neutral-500 uppercase tracking-wider">
            Software Engineer · AI/ML Builder · Class of 2029
          </p>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors uppercase tracking-wider text-[11px]"
            data-cursor-label="Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Colophon */}
      <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-neutral-500 text-[11px]">
        <div>
          © {new Date().getFullYear()} D Mabusubhani. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Mabusubhani07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/d-mabusubhani-25a815371"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/DMabusubhani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LeetCode
          </a>
          <a
            href="https://medium.com/@01.mabhusubhani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            Medium
          </a>
          <a
            href="/assets/resume.pdf"
            download
            className="hover:text-neutral-900 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
