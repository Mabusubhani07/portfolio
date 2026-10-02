"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, Copy, Check, Send } from "lucide-react";

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Engineering Internship / Collaboration",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 40,
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

  const copyEmail = () => {
    navigator.clipboard.writeText("01.mabhusubhani@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message or project inquiry";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose mailto fallback
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:01.mabhusubhani@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto hairline-b"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-8 hairline-b">
        <span className="mono-tag text-neutral-500 dark:text-neutral-400">
          08 / Initiate Contact
        </span>
        <span className="mono-tag text-neutral-400 dark:text-neutral-600">
          Collaboration & Inquiries
        </span>
      </div>

      {/* Giant Editorial Headline */}
      <div className="pt-12 pb-16 space-y-6">
        <h2 className="contact-reveal font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-950 dark:text-[#EAE7E0] font-normal leading-[0.98] tracking-tight max-w-5xl">
          Let’s build something worth trusting.
        </h2>
        <p className="contact-reveal text-base sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-light leading-relaxed">
          Open to software engineering internships, technical collaborations, and research dialogues. Always glad to discuss systems architecture, reliable tooling, and applied machine learning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
        {/* Left Column: Direct Magnetic Email Button & Social Links */}
        <div className="lg:col-span-5 space-y-10">
          <div className="contact-reveal space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">
              Direct Communication
            </span>

            {/* Email Action Card */}
            <div className="p-6 rounded-sm border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/50 space-y-4">
              <a
                href="mailto:01.mabhusubhani@gmail.com"
                className="font-display text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-100 hover:text-[#1E3A2F] dark:hover:text-[#44725E] transition-colors break-all"
                data-cursor="open"
                data-cursor-label="Email"
              >
                01.mabhusubhani@gmail.com
              </a>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:01.mabhusubhani@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A2F] text-white dark:bg-[#44725E] text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="contact-reveal space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">
              Profiles & Networks
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/d-mabusubhani-25a815371"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                data-cursor-label="LinkedIn"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  LinkedIn
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/Mabusubhani07"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                data-cursor-label="GitHub"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  GitHub
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://leetcode.com/u/DMabusubhani/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                data-cursor-label="LeetCode"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  LeetCode
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://medium.com/@01.mabhusubhani"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                data-cursor-label="Medium"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  Medium
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Validated Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="contact-reveal border border-neutral-300 dark:border-neutral-800 rounded-sm p-6 sm:p-10 bg-neutral-50/40 dark:bg-neutral-900/40 space-y-6"
          >
            <div className="flex items-center justify-between hairline-b pb-4">
              <span className="mono-tag text-neutral-500">
                Direct Dispatch Form
              </span>
              <span className="text-[10px] font-mono uppercase text-[#1E3A2F] dark:text-[#44725E]">
                Validated
              </span>
            </div>

            {submitted && (
              <div className="p-4 rounded bg-emerald-100/50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs font-mono text-emerald-800 dark:text-emerald-300">
                Mail client launched with your message. You can also contact directly at 01.mabhusubhani@gmail.com.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Sharma"
                  className={`w-full px-4 py-3 rounded-sm border bg-white dark:bg-[#151618] text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors ${
                    errors.name ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] font-mono text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Your Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. maya@organization.com"
                  className={`w-full px-4 py-3 rounded-sm border bg-white dark:bg-[#151618] text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors ${
                    errors.email ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] font-mono text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                Inquiry Topic
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Subject or project overview"
                className="w-full px-4 py-3 rounded-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151618] text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                Message & Context *
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Provide a concise description of your inquiry, internship scope, or engineering topic..."
                className={`w-full px-4 py-3 rounded-sm border bg-white dark:bg-[#151618] text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors ${
                  errors.message ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
                }`}
              />
              {errors.message && (
                <p className="text-[11px] font-mono text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">
                Direct transmission to inbox
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] text-[#F4F1EA] dark:bg-[#EAE7E0] dark:text-[#121314] text-xs font-mono tracking-wider uppercase transition-transform hover:-translate-y-0.5"
                data-cursor="open"
                data-cursor-label="Send"
              >
                <span>Transmit Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
