"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

interface Milestone {
  phase: string;
  timeline: string;
  title: string;
  institution: string;
  location: string;
  details: string;
  coursework: string[];
}

const milestones: Milestone[] = [
  {
    phase: "Current Academic Standing",
    timeline: "Semester 3 (Sophomore)",
    title: "Sophomore Year · Systems & Machine Learning Focus",
    institution: "Manipal Institute of Technology (MAHE)",
    location: "Bengaluru, Karnataka, India",
    details:
      "Deepening core computer science competencies with practical system implementations. Concentrating on algorithmic optimization, relational database architectures, and applied machine learning integration.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Relational Databases (PostgreSQL)",
      "Applied Machine Learning",
      "System Design Fundamentals",
    ],
  },
  {
    phase: "Freshman Foundations",
    timeline: "2025 (Semesters 1 & 2)",
    title: "Exploring Tech, Programming Languages & Web Development",
    institution: "Manipal Institute of Technology (MAHE)",
    location: "Bengaluru, Karnataka, India",
    details:
      "Focused on exploring modern technologies, learning multiple programming languages, and building foundational skills in software and web development.",
    coursework: [
      "Programming Languages (C, Java, Python)",
      "Web Development Fundamentals",
      "Algorithmic Logic",
      "Technology Exploration",
    ],
  },
  {
    phase: "Degree Completion Target",
    timeline: "Anticipated 2029",
    title: "Bachelor of Technology (B.Tech)",
    institution: "Manipal Institute of Technology (MAHE)",
    location: "India",
    details:
      "Four-year undergraduate engineering degree curriculum culminating in capstone systems architecture, production software development, and applied artificial intelligence research.",
    coursework: [
      "Advanced Distributed Systems",
      "Cybersecurity & Cryptography",
      "Large-Scale Machine Learning",
      "Capstone Engineering Thesis",
    ],
  },
];

export function Education() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate vertical timeline line drawing on scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "bottom 85%",
              scrub: 0.5,
            },
          }
        );
      }

      // Animate milestone nodes
      gsap.from(".timeline-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="education"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500 dark:text-neutral-400">
          07 / Education & Academics
        </span>
        <span className="mono-tag text-neutral-400 dark:text-neutral-600">
          Institutional Path
        </span>
      </div>

      <div className="pt-12 pb-14 space-y-4 max-w-3xl">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-neutral-950 dark:text-[#EAE7E0] font-normal leading-[1.05]">
          Academic trajectory grounded in core principles.
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          Rigorous engineering training at Manipal Institute of Technology (MAHE), pairing academic theory with hands-on systems construction.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pt-6 max-w-4xl mx-auto">
        {/* Background Track Line */}
        <div className="absolute left-4 md:left-8 top-8 bottom-8 w-[1px] bg-neutral-300 dark:bg-neutral-800" />

        {/* Dynamic Drawing Fill Line */}
        <div
          ref={lineRef}
          className="absolute left-4 md:left-8 top-8 bottom-8 w-[2px] bg-[#1E3A2F] dark:bg-[#44725E] will-change-transform"
        />

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="timeline-card relative pl-12 md:pl-20 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-2.5 md:left-6.5 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F4F1EA] dark:bg-[#121314] border-2 border-[#1E3A2F] dark:border-[#44725E] flex items-center justify-center transition-transform group-hover:scale-125">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E]" />
              </div>

              {/* Milestone Content Box */}
              <div className="border border-neutral-300 dark:border-neutral-800 rounded-sm p-6 md:p-8 bg-neutral-50/50 dark:bg-neutral-900/30 transition-all duration-300 hover:border-neutral-500 dark:hover:border-neutral-700">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 hairline-b text-xs font-mono">
                  <span className="text-[#1E3A2F] dark:text-[#44725E] font-medium uppercase tracking-wider">
                    {item.phase}
                  </span>
                  <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.timeline}
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-100 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-300 font-mono">
                    {item.institution}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed pt-3">
                  {item.details}
                </p>

                {/* Coursework Tags */}
                <div className="pt-5 flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono tracking-wide px-2.5 py-1 rounded bg-neutral-200/50 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
