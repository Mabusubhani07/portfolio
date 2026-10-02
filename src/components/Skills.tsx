"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    category: "AI / ML",
    number: "01",
    summary: "Applied model integration, generative workflows & data evaluation",
    skills: [
      "Machine Learning",
      "Generative AI",
      "LLM APIs",
      "AI Application Development",
      "Data Analytics",
    ],
  },
  {
    category: "Programming",
    number: "02",
    summary: "Foundational computer science, memory management & algorithmic paradigms",
    skills: [
      "Java",
      "C",
      "Python",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    category: "Web / Backend",
    number: "03",
    summary: "Production web applications, relational schemas & robust API design",
    skills: [
      "HTML & CSS",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful APIs",
      "Authentication & RBAC",
    ],
  },
  {
    category: "Cloud / Engineering",
    number: "04",
    summary: "Deployment pipelines, secure systems & reliable development operations",
    skills: [
      "Amazon Web Services (AWS)",
      "Git & GitHub",
      "DevOps Workflows",
      "Cybersecurity Principles",
      "Secure-System Design",
    ],
  },
];

const marqueeItems = [
  "MACHINE LEARNING",
  "DATA STRUCTURES & ALGORITHMS",
  "DETERMINISTIC SYSTEMS",
  "POSTGRESQL & PRISMA",
  "SHA-256 INTEGRITY",
  "NEXT.JS & TYPESCRIPT",
  "SECURE ARCHITECTURE",
  "APPLIED LLM PIPELINES",
];

export function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate subtle Y lift only; never animate opacity so cards are always 100% visible and crisp
      gsap.from(".skill-card", {
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="py-24 md:py-32 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Header */}
      <div className="px-6 md:px-12 flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500">
          03 / Skills & Capabilities
        </span>
        <span className="mono-tag text-neutral-400">
          Core Tooling & Knowledge
        </span>
      </div>

      <div className="px-6 md:px-12 pt-12 pb-14 space-y-4 max-w-3xl">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-neutral-950 font-normal leading-[1.05]">
          A toolkit centered on fundamentals and durability.
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          Grouped by engineering discipline. No synthetic rating bars or artificial percentages—only concrete proficiencies deployed across academic coursework and active projects.
        </p>
      </div>

      {/* Slow Infinite Marquee */}
      <div className="py-6 my-4 overflow-hidden select-none hairline-t hairline-b bg-neutral-100/50">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-neutral-700 mx-6"
            >
              <span>{item}</span>
              <span className="ml-12 w-1.5 h-1.5 rounded-full bg-[#1E3A2F] opacity-60" />
            </span>
          ))}
        </div>
      </div>

      {/* 4 Grouped Lists in an Asymmetric Grid Layout */}
      <div className="px-6 md:px-12 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {skillGroups.map((group, idx) => (
          <div
            key={group.category}
            className={`skill-card border border-neutral-300 rounded-sm p-6 sm:p-8 bg-neutral-50/70 transition-colors duration-200 hover:border-neutral-700 ${
              idx % 2 === 1 ? "md:mt-4" : ""
            }`}
          >
            <div className="pb-4 hairline-b">
              <span className="font-mono text-xs text-neutral-400">
                {group.number}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-neutral-950 font-normal pt-4">
              {group.category}
            </h3>

            <p className="text-xs text-neutral-500 font-mono mt-1 mb-6">
              {group.summary}
            </p>

            {/* Clean editorial skill tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono tracking-wide px-3 py-1.5 rounded-sm bg-neutral-200/70 text-neutral-800 border border-neutral-300/60 hover:border-neutral-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
