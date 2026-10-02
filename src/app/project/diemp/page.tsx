import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Shield, Key, Search, FileCheck, Database, Cpu, Lock, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIEMP Case Study · D Mabusubhani",
  description:
    "Comprehensive case study of DIEMP: Digital Investigation & Evidence Management Platform. Case-centric workspace, SHA-256 cryptographic verification, and AI-assisted forensic summarization.",
};

export default function DiempCaseStudy() {
  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Return Link */}
      <div className="pb-8 hairline-b">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors link-draw"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Index</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="py-12 md:py-16 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A2F]">
          <span>Case Study 01</span>
          <span>·</span>
          <span>Security & Digital Forensics</span>
          <span>·</span>
          <span>2025 — 2026</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-neutral-950 font-normal leading-[1.05] tracking-tight">
          DIEMP: Digital Investigation & Evidence Management Platform
        </h1>

        <p className="text-lg sm:text-2xl text-neutral-700 font-light leading-relaxed max-w-3xl">
          An end-to-end investigation workspace pairing deterministic SHA-256 cryptographic proof with natural-language discovery and AI-assisted synthesis for digital forensics.
        </p>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 hairline-t text-xs font-mono">
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">
              Role
            </span>
            <span className="text-neutral-900 font-medium">
              Lead Architect & Builder
            </span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">
              Focus
            </span>
            <span className="text-neutral-900 font-medium">
              Evidence Custody & Security
            </span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">
              Stack
            </span>
            <span className="text-neutral-900 font-medium">
              Next.js, TypeScript, PostgreSQL
            </span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">
              Integrity
            </span>
            <span className="text-neutral-900 font-medium">
              SHA-256 & Audit Logs
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="space-y-20 pt-8">
        {/* Section 01: The Problem */}
        <section className="space-y-6 hairline-t pt-12">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>01</span>
            <span>/</span>
            <span>The Problem</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-neutral-950 font-normal">
            Fragile custody chains and unverified evidentiary data.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            <p>
              In digital investigations and legal proceedings, the integrity of evidence is paramount. Traditional evidence management workflows frequently suffer from fragmented tools, manual custody ledgers, and untracked file modification risks.
            </p>
            <p>
              When evidence passes through multiple departments—from first responders and forensic examiners to legal prosecutors—the lack of deterministic verification creates severe vulnerabilities:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
              <li>
                <strong>Bit-level tampering risks:</strong> Without automated checksum validations, subtle accidental modifications or deliberate alterations go undetected.
              </li>
              <li>
                <strong>Opaque audit histories:</strong> Absence of append-only, immutable logs makes proving chronological chain of custody difficult during cross-examination.
              </li>
              <li>
                <strong>Information overload:</strong> Modern cases contain hundreds of dense investigative files, leading to slow discovery and delayed case proceedings.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 02: The Approach */}
        <section className="space-y-6 hairline-t pt-12">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>02</span>
            <span>/</span>
            <span>The Approach</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-neutral-950 font-normal">
            Cryptographic guarantees paired with contextual intelligence.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            <p>
              The core architectural thesis of DIEMP is that intelligence should never precede integrity. Rather than relying on black-box heuristics, DIEMP structures the entire investigation workflow around two foundational pillars:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-sm border border-neutral-300 bg-neutral-100/50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1E3A2F] font-medium">
                  <Shield className="w-4 h-4" />
                  <span>Pillar 1: Deterministic Proof</span>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Every uploaded artifact is hashed using SHA-256 at the ingestion boundary. An append-only audit trail records every user action, download, and review with cryptographic timestamps.
                </p>
              </div>

              <div className="p-6 rounded-sm border border-neutral-300 bg-neutral-100/50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1E3A2F] font-medium">
                  <Search className="w-4 h-4" />
                  <span>Pillar 2: Accelerated Discovery</span>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Investigators can query evidence archives using plain natural language, rapidly isolating relevant case documents, timelines, and generating structured summaries without compromising file authenticity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Key Features */}
        <section className="space-y-6 hairline-t pt-12">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>03</span>
            <span>/</span>
            <span>Key Features</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-neutral-950 font-normal">
            Modular, case-centric security primitives.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 01
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                Case-Centric Workspace
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Organizes forensic artifacts, evidence logs, investigator notes, and formal reports into isolated, securely delineated case workspaces.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 02
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                Role-Based Access Control (RBAC)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Granular permissions enforcing strict separation between Case Officers, Forensic Specialists, Legal Supervisors, and External Auditors.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 03
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                SHA-256 Integrity Verification
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Calculates cryptographic hashes on upload and executes automated recurrent checksum audits to certify non-tampering.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 04
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                Evidence Version Control
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Preserves immutable parent artifacts while tracking annotated revisions, redactions, and evidentiary filings in distinct version trees.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 05
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                Tamper-Evident Audit Trails
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Chronological ledger documenting view events, downloads, transfers, and status transitions with cryptographically traceable logs.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 06
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                Natural-Language Search
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Semantic retrieval enabling investigators to query records, witness statements, and metadata using conversational queries.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 07
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                AI-Assisted Summarization
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Distills multi-page investigative transcripts into key facts, timelines, and entity lists while linking directly back to source evidence.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-2">
              <span className="text-[11px] font-mono text-[#1E3A2F] uppercase tracking-wider block">
                Feature 08
              </span>
              <h3 className="font-display text-xl text-neutral-900">
                Secure Investigation Workflow
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Structured progression stages from Initial Intake and Forensic Analysis to Review, Legal Signoff, and Archive sealing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 04: Tools & Technical Architecture */}
        <section className="space-y-6 hairline-t pt-12">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>04</span>
            <span>/</span>
            <span>Tools & Architecture</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-neutral-950 font-normal">
            Deterministic stack engineered for resilience.
          </h2>

          <div className="space-y-6 text-base text-neutral-700 leading-relaxed">
            <p>
              The platform employs a modern full-stack TypeScript architecture designed around strict typing, relational schemas, and hardened cryptographic boundaries:
            </p>

            <div className="border border-neutral-300 rounded-sm p-6 bg-neutral-50 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block mb-1">
                    Application Framework
                  </span>
                  <p className="text-neutral-900 font-medium">
                    Next.js (App Router), React, TypeScript
                  </p>
                  <p className="text-neutral-500 mt-1">
                    Server components for protected data access and client interactivity.
                  </p>
                </div>

                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block mb-1">
                    Database & ORM
                  </span>
                  <p className="text-neutral-900 font-medium">
                    PostgreSQL with Prisma ORM
                  </p>
                  <p className="text-neutral-500 mt-1">
                    ACID-compliant transactions for chain of custody and version histories.
                  </p>
                </div>

                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block mb-1">
                    Integrity Primitives
                  </span>
                  <p className="text-neutral-900 font-medium">
                    Web Crypto & Node.js Crypto (SHA-256)
                  </p>
                  <p className="text-neutral-500 mt-1">
                    Bitwise hashing streaming directly during file ingestion.
                  </p>
                </div>

                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block mb-1">
                    Language Models
                  </span>
                  <p className="text-neutral-900 font-medium">
                    Structured LLM APIs
                  </p>
                  <p className="text-neutral-500 mt-1">
                    Strict prompt templates with strict citation constraints to eliminate hallucinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: Outcome & Authentic Placeholders */}
        <section className="space-y-6 hairline-t pt-12">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>05</span>
            <span>/</span>
            <span>Outcome & Evaluation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-neutral-950 font-normal">
            Measured impact and verifiable documentation.
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            In keeping with strict ethical engineering principles, all platform outcomes are represented accurately without synthetic benchmarks. The sections below provide dedicated entry points for field evaluation data and visual artifacts.
          </p>

          {/* Real Platform Interface Walkthrough Showcase */}
          <div className="space-y-6 pt-4">
            <div className="border border-neutral-300 rounded-sm overflow-hidden bg-white space-y-0 shadow-sm">
              <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] max-h-[500px]">
                <Image
                  src="/assets/diemp-preview.png"
                  alt="DIEMP: Digital Investigation & Evidence Management Platform Interface"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4 hairline-t bg-neutral-50 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
                  <span className="font-medium text-neutral-900">
                    Platform Interface Walkthrough — Unified Legal & Forensic Pipeline
                  </span>
                </div>
                <span className="text-[#1E3A2F] font-medium">
                  Verified Production Interface
                </span>
              </div>
            </div>

            {/* Metrics Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-neutral-300 rounded-sm p-6 bg-neutral-100/40 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Performance Benchmark Placeholder
                </span>
                <p className="font-mono text-xs text-neutral-800">
                  [Placeholder: Insert evidentiary throughput benchmark & hashing latency metrics here]
                </p>
              </div>

              <div className="border-2 border-dashed border-neutral-300 rounded-sm p-6 bg-neutral-100/40 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Field Evaluation Placeholder
                </span>
                <p className="font-mono text-xs text-neutral-800">
                  [Placeholder: Insert case evaluation / trial deployment results and institutional feedback here]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation within Case Study */}
        <div className="pt-12 hairline-t flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 hover:border-neutral-900 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Main Portfolio</span>
          </Link>

          <a
            href="mailto:01.mabhusubhani@gmail.com?subject=Inquiry regarding DIEMP Architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A2F] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <span>Discuss DIEMP Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
