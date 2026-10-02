"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, BookOpen, Code2, ExternalLink } from "lucide-react";

interface Article {
  title: string;
  topic: string;
  date: string;
  readTime: string;
  summary: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "Engineering Cryptographic Integrity for Digital Evidence Chains",
    topic: "Systems & Security",
    date: "2026",
    readTime: "6 min read",
    summary:
      "A technical examination of SHA-256 document hashing, immutable logging, and establishing admissible chains of custody in modern web applications.",
    url: "https://medium.com/@01.mabhusubhani",
  },
  {
    title: "Bridging Natural-Language Retrieval with Relational Investigation Workspaces",
    topic: "Applied AI",
    date: "2026",
    readTime: "8 min read",
    summary:
      "Architectural patterns for marrying strict relational database schemas with LLM-assisted semantic search and multi-document timeline extraction.",
    url: "https://medium.com/@01.mabhusubhani",
  },
  {
    title: "Algorithmic Precision in Practice: From Coursework to Systems",
    topic: "Software Engineering",
    date: "2025",
    readTime: "5 min read",
    summary:
      "Reflections from Semester 3 on transitioning algorithmic problem-solving in Java and C into production-grade deterministic software.",
    url: "https://medium.com/@01.mabhusubhani",
  },
];

export function Writing() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".writing-reveal", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="writing"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500 dark:text-neutral-400">
          05 / Writing & Problem Solving
        </span>
        <span className="mono-tag text-neutral-400 dark:text-neutral-600">
          Publications & Algorithms
        </span>
      </div>

      <div className="pt-12 pb-14 space-y-4 max-w-3xl">
        <h2 className="writing-reveal font-display text-4xl sm:text-5xl md:text-6xl text-neutral-950 dark:text-[#EAE7E0] font-normal leading-[1.05]">
          Thinking in public, grounded in engineering.
        </h2>
        <p className="writing-reveal text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          Technical essays documenting system design considerations, cryptographic integrity, and algorithmic patterns. Published regularly on Medium.
        </p>
      </div>

      {/* Grid: Articles List on Left, LeetCode Problem Solving on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
        {/* Left Column: Medium Articles List */}
        <div className="lg:col-span-8 divide-y divide-neutral-200 dark:divide-neutral-800 hairline-t hairline-b">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="writing-reveal group block py-8 px-2 transition-all hover:bg-neutral-100/40 dark:hover:bg-neutral-900/30"
              data-cursor="open"
              data-cursor-label="Medium"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                <span className="text-[#1E3A2F] dark:text-[#44725E] font-medium">
                  {article.topic}
                </span>
                <div className="flex items-center gap-4">
                  <span>{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-6 mt-1">
                <h3 className="font-display text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-100 font-normal group-hover:italic group-hover:translate-x-1 transition-all duration-300">
                  {article.title}
                </h3>
                <span className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center shrink-0 group-hover:bg-[#141414] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3 max-w-2xl">
                {article.summary}
              </p>
            </a>
          ))}

          <div className="writing-reveal pt-6 pb-2">
            <a
              href="https://medium.com/@01.mabhusubhani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-[#1E3A2F] dark:hover:text-[#44725E] link-draw"
            >
              <span>View all articles on Medium (@01.mabhusubhani)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: LeetCode & Problem Solving Feature Box */}
        <div className="lg:col-span-4">
          <div className="writing-reveal border border-neutral-300 dark:border-neutral-800 rounded-sm bg-neutral-100/60 dark:bg-neutral-900/50 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between hairline-b pb-4">
              <span className="mono-tag text-[#1E3A2F] dark:text-[#44725E]">
                Problem Solving
              </span>
              <Code2 className="w-4 h-4 text-neutral-500" />
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-2xl text-neutral-950 dark:text-neutral-100 font-normal">
                Algorithmic Foundations
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Active problem solving focused on Data Structures, Algorithms, time-space efficiency, and deterministic complexity across Java, C, and Python.
              </p>
            </div>

            <div className="p-4 rounded bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>Profile Handle</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">DMabusubhani</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>Primary Languages</span>
                <span className="text-neutral-900 dark:text-neutral-100">Java · C · Python</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>Core Topics</span>
                <span className="text-neutral-900 dark:text-neutral-100">Trees, Graphs, DP</span>
              </div>
            </div>

            <a
              href="https://leetcode.com/u/DMabusubhani/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-neutral-400 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 text-xs font-mono uppercase tracking-wider transition-colors"
              data-cursor="open"
              data-cursor-label="LeetCode"
            >
              <span>Explore LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
