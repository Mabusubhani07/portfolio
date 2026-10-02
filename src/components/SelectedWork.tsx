"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Shield, FileCheck, Search, Key, Database, Cpu } from "lucide-react";

export function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".work-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
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
      id="work"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Tag */}
      <div className="flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500 dark:text-neutral-400">
          02 / Selected Work
        </span>
        <span className="mono-tag text-neutral-400 dark:text-neutral-600">
          Flagship Architecture
        </span>
      </div>

      {/* Intro Header */}
      <div className="pt-12 pb-10 space-y-4 max-w-3xl">
        <h2 className="work-reveal font-display text-4xl sm:text-5xl md:text-6xl text-neutral-950 dark:text-[#EAE7E0] font-normal leading-[1.05]">
          A secure, verifiable platform built for digital evidence integrity.
        </h2>
        <p className="work-reveal text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          Designed from first principles to enforce non-repudiation, tamper-evident document versioning, and accelerated forensic discovery without sacrificing evidentiary admissibility.
        </p>
      </div>

      {/* DIEMP Platform Preview Showcase */}
      <div className="work-reveal pb-14">
        <Link
          href="/project/diemp"
          className="group block relative w-full overflow-hidden rounded-sm border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 transition-all duration-500 hover:border-neutral-500 dark:hover:border-neutral-700 shadow-sm hover:shadow-md"
          data-cursor="view"
          data-cursor-label="Case Study"
        >
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] max-h-[460px] overflow-hidden">
            <Image
              src="/assets/diemp-preview.png"
              alt="DIEMP: Digital Investigation & Evidence Management Platform Interface"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-neutral-50/90 dark:bg-[#161719]/90 hairline-t text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
              <span className="font-medium text-neutral-900 dark:text-neutral-200">
                Fig. 02 — DIEMP Unified Case Ecosystem
              </span>
              <span className="hidden sm:inline text-neutral-400">
                (Citizen to Justice Workflow)
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-[#1E3A2F] dark:group-hover:text-[#44725E] transition-colors">
              <span>Explore Architecture & Walkthrough</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>

      {/* Editorial Feature Box for DIEMP */}
      <div
        className="work-reveal relative group border border-neutral-300 dark:border-neutral-800 rounded-sm bg-neutral-100/60 dark:bg-neutral-900/50 p-6 md:p-12 transition-all duration-500 hover:border-neutral-500 dark:hover:border-neutral-700"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Feature Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 hairline-b text-xs font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
            <span className="font-medium text-neutral-900 dark:text-neutral-200">
              Flagship Project
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>Security · Digital Forensics · Systems</span>
            <span className="hidden sm:inline">2025 — 2026</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A2F] dark:text-[#44725E] font-medium">
                Digital Investigation & Evidence Management Platform
              </span>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-neutral-950 dark:text-neutral-100 tracking-tight font-normal">
                DIEMP Workspace
              </h3>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              A comprehensive case-centric investigation workspace engineered to address the critical challenges of evidence custody, tamper risks, and forensic record management. Combines strict SHA-256 cryptographic verification with conversational AI-assisted summarization and natural-language search.
            </p>

            {/* Core Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono tracking-wide text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
                <span>SHA-256 Evidence Integrity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
                <span>Role-Based Access Control</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
                <span>Tamper-Evident Audit Trails</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
                <span>Natural-Language Search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
                <span>AI-Assisted Summarization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
                <span>Document Version Control</span>
              </div>
            </div>

            {/* Link CTA */}
            <div className="pt-4">
              <Link
                href="/project/diemp"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#141414] text-[#F4F1EA] dark:bg-[#EAE7E0] dark:text-[#121314] text-xs font-mono tracking-wider uppercase transition-transform hover:-translate-y-0.5 group-hover:shadow-lg"
                data-cursor="view"
                data-cursor-label="Case Study"
              >
                <span>Read Comprehensive Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Schematic Mockup */}
          <div className="lg:col-span-5">
            <Link
              href="/project/diemp"
              className="block group/card border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#151618] rounded-sm p-6 space-y-6 shadow-sm hover:shadow-md transition-shadow"
              data-cursor="view"
              data-cursor-label="View"
            >
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-neutral-500 hairline-b pb-4">
                <span>System Manifest</span>
                <span className="text-[#1E3A2F] dark:text-[#44725E]">Verified Architecture</span>
              </div>

              {/* Schematic Breakdown */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-900 dark:text-neutral-100">
                    <span className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#44725E]" />
                      Ingestion & Hashing
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500">SHA-256</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                    Deterministic hashing on upload; instantaneous discrepancy alert on bitwise drift.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-900 dark:text-neutral-100">
                    <span className="flex items-center gap-2">
                      <Key className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#44725E]" />
                      RBAC & Chain of Custody
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500">Strict Auth</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                    Granular investigator, supervisor, and auditor permissions with signed immutable logs.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-900 dark:text-neutral-100">
                    <span className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#44725E]" />
                      Applied AI Synthesis
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500">LLM APIs</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                    Semantic document retrieval and multi-document timeline extraction for case officers.
                  </p>
                </div>
              </div>

              {/* Stack tags */}
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono uppercase text-neutral-600 dark:text-neutral-400">
                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Next.js</span>
                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">TypeScript</span>
                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Prisma</span>
                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">SHA-256</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
