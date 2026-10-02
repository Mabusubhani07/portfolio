"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(true);

  useEffect(() => {
    // Check for touch / coarse pointer
    const checkTouch = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouch(isCoarse || hasTouch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const setPosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth following loop
    const ticker = gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.22, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      if (cursor) {
        gsap.set(cursor, {
          x: pos.x,
          y: pos.y,
        });
      }
    });

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest<HTMLElement>("[data-cursor], a, button");
      if (cursorTarget) {
        setIsHovered(true);
        const label = cursorTarget.getAttribute("data-cursor-label");
        const customType = cursorTarget.getAttribute("data-cursor");
        if (label) {
          setCursorText(label);
        } else if (customType === "view") {
          setCursorText("View");
        } else if (customType === "open") {
          setCursorText("Open");
        } else if (customType === "explore") {
          setCursorText("Explore");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", setPosition);
    document.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", setPosition);
      document.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      gsap.ticker.remove(ticker);
    };
  }, [isTouch, isVisible]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          cursorText
            ? "w-20 h-20 bg-[#1E3A2F] text-[#F4F1EA] dark:bg-[#EAE7E0] dark:text-[#121314] shadow-xl text-[10px] tracking-widest uppercase font-medium"
            : isHovered
            ? "w-10 h-10 bg-transparent border border-current text-[#141414] dark:text-[#EAE7E0] scale-110"
            : "w-2.5 h-2.5 bg-[#141414] dark:bg-[#EAE7E0]"
        }`}
      >
        {cursorText && (
          <span className="animate-fade-in font-mono select-none px-1 text-center leading-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
