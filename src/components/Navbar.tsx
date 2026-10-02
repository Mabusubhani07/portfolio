"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "/#about", num: "01" },
    { label: "Hackathons", href: "/#hackathons", num: "02" },
    { label: "Skills", href: "/#skills", num: "03" },
    { label: "Writing", href: "/#writing", num: "04" },
    { label: "Education", href: "/#education", num: "05" },
    { label: "Contact", href: "/#contact", num: "06" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "py-3 bg-[#F4F1EA]/85 dark:bg-[#121314]/85 backdrop-blur-md hairline-b"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-current no-underline focus:outline-none"
            data-cursor="view"
            data-cursor-label="DM"
          >
            <span className="font-display text-2xl tracking-tight font-normal group-hover:italic transition-all">
              D Mabusubhani
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#1E3A2F] dark:bg-[#44725E] opacity-70" />
            <span className="hidden lg:inline-block text-[11px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              Bengaluru, IN
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-wider uppercase">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 link-draw transition-colors"
                data-cursor-label={link.num}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 text-neutral-800 dark:text-neutral-200 transition-all"
              data-cursor="open"
              data-cursor-label="Hello"
            >
              Contact
            </a>
          </nav>

          {/* Right Controls: Theme Toggle & Menu trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
              data-cursor-label={theme === "light" ? "Dark" : "Light"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-neutral-700" />
              ) : (
                <Sun className="w-4 h-4 text-neutral-300" />
              )}
            </button>

            {/* Mobile / Full Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 text-xs font-mono uppercase"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Takeover Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-[#141414] text-[#F4F1EA] flex flex-col justify-between p-8 md:p-14 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        }`}
      >
        <div className="flex items-center justify-between hairline-b pb-6 border-neutral-800">
          <span className="font-display text-2xl tracking-tight italic">
            D Mabusubhani
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 hover:bg-neutral-800 transition-colors text-xs font-mono uppercase"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Links list */}
        <div className="flex flex-col space-y-4 my-auto py-8">
          {navLinks.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-baseline justify-between py-2 border-b border-neutral-800/80 hover:border-neutral-400 transition-colors"
            >
              <span className="font-display text-3xl sm:text-5xl tracking-tight group-hover:italic transition-transform group-hover:translate-x-3 duration-300">
                {item.label}
              </span>
              <span className="font-mono text-xs text-neutral-500 group-hover:text-neutral-300">
                {item.num}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 hairline-t border-neutral-800 text-xs font-mono text-neutral-400">
          <div>
            <span className="block uppercase tracking-widest text-neutral-500 mb-1">
              Direct Contact
            </span>
            <a
              href="mailto:01.mabhusubhani@gmail.com"
              className="text-[#F4F1EA] hover:underline"
            >
              01.mabhusubhani@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6 sm:justify-end">
            <a
              href="https://github.com/Mabusubhani07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/d-mabusubhani-25a815371"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@01.mabhusubhani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
