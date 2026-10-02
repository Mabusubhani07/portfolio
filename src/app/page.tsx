"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Hackathons } from "@/components/Hackathons";
import { Skills } from "@/components/Skills";
import { Community } from "@/components/Community";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <Navbar />
      <main className="relative flex-1">
        <Hero />
        <About />
        <Hackathons />
        <Skills />
        <Education />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
