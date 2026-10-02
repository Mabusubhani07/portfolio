"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Award, ChevronRight } from "lucide-react";

interface HackathonItem {
  id: string;
  number: string;
  name: string;
  organizer: string;
  year: string;
  role: string;
  status: string;
  description: string;
  focus: string[];
}

const hackathons: HackathonItem[] = [
  {
    id: "adobe",
    number: "01",
    name: "Adobe University Hackathon 2026",
    organizer: "Adobe Inc.",
    year: "2026",
    role: "Core Developer & Systems Architect",
    status: "Reached Round 2 · Certificate of Participation",
    description:
      "Cleared Round 1 through competitive Coding and Data Structures & Algorithms (DSA) testing, advancing to Round 2 focused on in-depth case study analytics and strategic problem-solving evaluated by Adobe engineering leads.",
    focus: ["Coding & DSA (Round 1)", "Case Study Analytics (Round 2)", "Problem Solving"],
  },
  {
    id: "sih",
    number: "02",
    name: "Smart India Hackathon 2026",
    organizer: "Ministry of Education & AICTE",
    year: "2026",
    role: "Team LUCID · Full-Stack & Systems Lead",
    status: "National Initiative Participant · Team LUCID",
    description:
      "Represented Manipal Institute of Technology (MAHE) as part of Team LUCID to tackle complex public sector problem statements. Engineered deterministic workflows, API integrations, and robust database architectures designed for scale.",
    focus: ["System Architecture", "Public Sector Solutions", "Database Design"],
  },
  {
    id: "powernext",
    number: "03",
    name: "PowerNext AI Hackathon",
    organizer: "Central Power Research Institute (CPRI), Govt. of Karnataka",
    year: "2026",
    role: "AI/ML Solutions Builder",
    status: "Government of Karnataka / CPRI Showcase",
    description:
      "Architected applied machine learning solutions tailored to state-level power and energy infrastructure challenges. Built analytical pipelines and predictive heuristics addressing operational optimization in public utility contexts.",
    focus: ["Applied Machine Learning", "Data Analytics", "Infrastructure Optimization"],
  },
];

export function Hackathons() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string | null>("adobe");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".hackathon-row", {
        y: 30,
        opacity: 0,
        duration: 0.8,
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
      id="hackathons"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Tag */}
      <div className="flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500">
          02 / Hackathons & Recognition
        </span>
        <span className="mono-tag text-neutral-400">
          Competitive Builds
        </span>
      </div>

      <div className="pt-12 pb-14 space-y-4 max-w-3xl">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-neutral-950 font-normal leading-[1.05]">
          Testing engineering under constraint.
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          Competitive builds provide an uncompromising proving ground. Selected national hackathon milestones and institutional showcases.
        </p>
      </div>

      {/* Numbered List with Hairline Dividers */}
      <div className="divide-y divide-neutral-200 hairline-t hairline-b">
        {hackathons.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <div
              key={item.id}
              className="hackathon-row group cursor-pointer transition-colors duration-300 hover:bg-neutral-100/50 py-8 px-2 md:px-6"
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(isOpen ? null : item.id)}
              data-cursor-label={item.number}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                {/* Number & Name */}
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-mono text-sm md:text-base text-neutral-400 font-medium">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-neutral-950 font-normal transition-transform duration-300 group-hover:translate-x-2">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">
                      {item.organizer}
                    </p>
                  </div>
                </div>

                {/* Right: Status Pill & Arrow */}
                <div className="flex items-center gap-4 pl-12 md:pl-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-200/60 text-neutral-800 border border-neutral-300">
                    {item.status}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 text-neutral-400 ${
                      isOpen ? "rotate-90 text-neutral-900" : ""
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Collapsible / Revealed Details */}
              <div
                className={`grid transition-all duration-500 ease-out overflow-hidden ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 hairline-t"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 pl-12 md:pl-16 space-y-4">
                  <p className="text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mr-2">
                      Focus Areas:
                    </span>
                    {item.focus.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-neutral-200/50 text-neutral-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
