"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Download, Award, ShieldCheck, GraduationCap } from "lucide-react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-animate", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Tag */}
      <div className="flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500">
          01 / About
        </span>
        <span className="mono-tag text-neutral-400">
          Background & Philosophy
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
        {/* Left Column: Framed Photo & Quick Identifiers */}
        <div className="lg:col-span-5 space-y-6">
          <div className="about-animate relative aspect-[3/4] sm:aspect-[4/5] rounded-sm overflow-hidden border border-neutral-300 bg-[#141414] shadow-sm group">
            <Image
              src="/assets/profile.jpg"
              alt="D Mabusubhani"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="about-animate flex items-center justify-between text-[11px] font-mono tracking-wider uppercase text-neutral-500 pt-2">
            <span>D Mabusubhani</span>
            <span>Bengaluru, India</span>
          </div>

          {/* Institutional Card */}
          <div className="about-animate p-5 rounded-sm border border-neutral-200 bg-neutral-100/50 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1E3A2F] font-medium">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Institutional Base</span>
            </div>
            <p className="text-sm font-medium text-neutral-900">
              Manipal Institute of Technology (MAHE), Bengaluru
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Bachelor of Technology (B.Tech) · Current Semester 3 (Sophomore) · Class of 2029
            </p>
          </div>
        </div>

        {/* Right Column: First-Person Human Story & Real Stat Counters */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <h2 className="about-animate font-display text-3xl sm:text-4xl md:text-5xl leading-tight font-normal text-neutral-950">
              Engineering reliable software systems and applied machine learning with deterministic rigor.
            </h2>

            <div className="about-animate space-y-4 text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              <p>
                I am an undergraduate software engineer and AI/ML builder based in Bengaluru, currently in my sophomore year (Semester 3) at the Manipal Institute of Technology (MAHE), graduating in 2029.
              </p>
              <p>
                My work is driven by the conviction that systems under critical demand must prioritize predictability over novelty. I focus on developing clean, verifiable software architectures—from cryptographic evidence preservation to applied natural language workflows.
              </p>
              <p>
                Outside core coursework, I translate complex algorithmic concepts into practical tools, test ideas under pressure in competitive hackathons (clearing Round 1 Coding/DSA and qualifying for Round 2 Case Study Analytics in Adobe University Hackathon, alongside Smart India Hackathon and PowerNext AI), and contribute to social initiatives through community volunteering.
              </p>
            </div>
          </div>

          {/* Real Counters Grid (No made-up metrics or percentages) */}
          <div className="about-animate grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 hairline-t">
            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl text-neutral-950">
                2029
              </div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-500">
                Graduation Year
              </div>
              <p className="text-xs text-neutral-600 pt-1">
                B.Tech at Manipal Institute of Technology (MAHE)
              </p>
            </div>

            <div className="space-y-1 hairline-t sm:hairline-t-0 sm:hairline-l pt-4 sm:pt-0 sm:pl-6">
              <div className="font-display text-4xl sm:text-5xl text-neutral-950">
                03
              </div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-500">
                Hackathons
              </div>
              <p className="text-xs text-neutral-600 pt-1">
                Adobe (Round 2), SIH 2026, PowerNext AI
              </p>
            </div>

            <div className="space-y-1 hairline-t sm:hairline-t-0 sm:hairline-l pt-4 sm:pt-0 sm:pl-6">
              <div className="font-display text-4xl sm:text-5xl text-neutral-950">
                01
              </div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-500">
                Flagship Project
              </div>
              <p className="text-xs text-neutral-600 pt-1">
                <Link href="/project/diemp" className="hover:text-neutral-900 transition-colors">
                  DIEMP: Digital Investigation & Evidence Platform ↗
                </Link>
              </p>
            </div>
          </div>

          {/* Action links */}
          <div className="about-animate flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/assets/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3A2F] text-[#F4F1EA] text-xs font-mono tracking-wider uppercase transition-transform hover:-translate-y-0.5"
              data-cursor="open"
              data-cursor-label="PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Curriculum Vitae</span>
            </a>

            <a
              href="mailto:01.mabhusubhani@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-900 text-xs font-mono tracking-wider uppercase transition-colors"
            >
              <span>01.mabhusubhani@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
