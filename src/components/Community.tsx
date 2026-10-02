"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeartHandshake, BrainCircuit, PenLine, Users } from "lucide-react";

const communityRoles = [
  {
    role: "Member",
    organization: "Volunteer Services Organisation (VSO), MAHE",
    focus: "Community Outreach & Social Impact",
    description:
      "Active participant in university-led community welfare projects, public awareness campaigns, and student volunteer initiatives across Manipal and regional communities.",
  },
  {
    role: "Volunteer",
    organization: "Psychology Department, Yuv Kriti NGO",
    focus: "Mental Health Advocacy & Support",
    description:
      "Contributed to grassroots community initiatives and mental health awareness workshops, collaborating with counselors and volunteers to support youth wellness programs.",
  },
  {
    role: "Publisher & Author",
    organization: "Medium Technical Publication",
    focus: "Engineering Knowledge Sharing",
    description:
      "Authoring accessible technical analyses, algorithmic insights, and system design notes to make core computer science topics transparent and engaging for emerging peers.",
  },
];

export function Community() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".community-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="community"
      className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500 dark:text-neutral-400">
          05 / Community & Social Engagement
        </span>
        <span className="mono-tag text-neutral-400 dark:text-neutral-600">
          Civic Contribution
        </span>
      </div>

      <div className="pt-10 pb-12 space-y-3 max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-neutral-950 dark:text-[#EAE7E0] font-normal">
          Beyond the terminal.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          A commitment to social responsibility, community wellness, and sharing knowledge with honesty and humility.
        </p>
      </div>

      {/* 3 Quiet Editorial Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {communityRoles.map((item, idx) => (
          <div
            key={idx}
            className="community-card p-6 rounded-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/30 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1E3A2F] dark:text-[#44725E] font-medium">
                  {item.role}
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-display text-2xl text-neutral-950 dark:text-neutral-100 font-normal leading-snug">
                {item.organization}
              </h3>

              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {item.focus}
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
