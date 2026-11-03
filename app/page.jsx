"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

// --- Smooth Scroll & Animations ---
const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 20, x: 0 }, // Reduced animation distance to prevent scrollbar flicker
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
    none: { x: 0, y: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HomeHero() {
  return (
    // 🔥 h-[100dvh] and overflow-hidden makes it a strict one-pager
    <div className="h-[100dvh] w-full bg-[#0A192F] text-white font-sans overflow-hidden flex flex-col">
      {/* --- CUSTOM STYLE FOR MARQUEE --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .marquee-scroll {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker 65s linear infinite;
        }
        .marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ==================== MARQUEE HEADER ==================== */}
      <header className="bg-[#004B87] border-b border-white/20 text-white/90 text-[0.8rem] md:text-[0.85rem] font-medium py-1.5 md:py-2 overflow-hidden relative z-50 shadow-md shrink-0">
        <div className="w-full whitespace-nowrap">
          {/* 🔥 Increased gap to gap-32 (mobile) and md:gap-48 (desktop) */}
          <div className="marquee-scroll gap-10 md:gap-10 items-center px-10">
            <span> <strong className="text-white">Enrollment Starts:</strong> 5 Nov 2026</span>
            <span> <strong className="text-white">Enrollment Closes:</strong> 30 Nov 2026</span>
            <span> <strong className="text-white">Helpline:</strong> 18004109101</span>
            <span> <strong className="text-white">Email:</strong> export.investment@mpidc.co.in</span>
            {/* DUPLICATED FOR CONTINUOUS LOOP */}
            <span> <strong className="text-white">Enrollment Starts:</strong> 5 Nov 2026</span>
            <span> <strong className="text-white">Enrollment Closes:</strong> 30 Nov 2026</span>
            <span> <strong className="text-white">Helpline:</strong> 18004109101</span>
            <span> <strong className="text-white">Email:</strong> export.investment@mpidc.co.in</span>
              <span> <strong className="text-white">Enrollment Starts:</strong> 5 Nov 2026</span>
            <span> <strong className="text-white">Enrollment Closes:</strong> 30 Nov 2026</span>
            <span> <strong className="text-white">Helpline:</strong> 18004109101</span>
            <span> <strong className="text-white">Email:</strong> export.investment@mpidc.co.in</span>
            {/* DUPLICATED FOR CONTINUOUS LOOP */}
            <span> <strong className="text-white">Enrollment Starts:</strong> 5 Nov 2026</span>
            <span> <strong className="text-white">Enrollment Closes:</strong> 30 Nov 2026</span>
            <span> <strong className="text-white">Helpline:</strong> 18004109101</span>
            <span> <strong className="text-white">Email:</strong> export.investment@mpidc.co.in</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col relative h-full">
        {/* ==================== MAIN LANDING HERO SECTION ==================== */}
        <section className="relative isolate flex-grow flex flex-col justify-center h-full">
          
          {/* BACKGROUND WITH DARK OVERLAY */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/FTA/667484d3-5998-4832-a549-b1b574ca67b4.jpg"
              alt="Madhya Pradesh Industry Background"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001932]/85 via-[#001329]/90 to-[#000a19]/95" />
          </div>

          {/* MAIN LAYOUT GRID */}
          <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-4 px-4 lg:grid-cols-[minmax(200px,0.8fr)_minmax(0,2fr)_minmax(200px,0.8fr)] lg:gap-5 xl:gap-8 h-full">
            
            {/* ----------------- MOBILE LEADERS ROW ----------------- */}
            <div className="mx-auto w-full max-w-[420px] lg:hidden mb-2">
              <ScrollReveal direction="up" className="w-full">
                <div className="grid grid-cols-2 items-end gap-3">
                  {/* PM MODI - MOBILE */}
                  <div className="flex min-w-0 flex-col">
                    {/* 🔥 Reduced height for mobile to prevent scrolling */}
                    <div className="flex h-[13vh] min-h-[110px] w-full items-end justify-center overflow-hidden">
                      <img
                        src="/FTA/modi_ji-removebg-preview.png"
                        alt="PM Narendra Modi"
                        className="block h-full w-full object-contain object-bottom scale-110 origin-bottom"
                      />
                    </div>
                    <div className="w-full border-t-[3px] border-white/20 bg-[#004B87] px-1 py-2 text-center shadow-lg">
                      <h4 className="m-0 text-[11px] font-bold text-white sm:text-xs">Narendra Modi</h4>
                      <p className="mt-0.5 text-[8px] leading-tight text-white/75">Hon'ble PM, India</p>
                    </div>
                  </div>

                  {/* CM MOHAN YADAV - MOBILE */}
                  <div className="flex min-w-0 flex-col">
                    <div className="flex h-[13vh] min-h-[110px] w-full items-end justify-center overflow-hidden">
                      <img
                        src="/FTA/mohan_yadav-removebg-preview.png"
                        alt="CM Dr. Mohan Yadav"
                        className="block h-full w-full object-contain object-bottom"
                      />
                    </div>
                    <div className="w-full border-t-[3px] border-white/20 bg-[#004B87] px-1 py-2 text-center shadow-lg">
                      <h4 className="m-0 text-[11px] font-bold text-white sm:text-xs">Dr. Mohan Yadav</h4>
                      <p className="mt-0.5 text-[8px] leading-tight text-white/75">Hon'ble CM, MP</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ----------------- PM MODI (DESKTOP) ----------------- */}
            <div className="hidden w-full min-w-0 flex-col lg:flex relative z-20 xl:-translate-y-10">
              <ScrollReveal direction="left" className="flex w-full flex-col">
                <div className="flex h-[25vh] min-h-[220px] max-h-[350px] w-full items-end justify-center overflow-visible">
                  <img
                    src="/FTA/modi_ji-removebg-preview.png"
                    alt="PM Narendra Modi"
                    className="block h-full w-full object-contain object-bottom scale-110 origin-bottom"
                  />
                </div>
                <div className="relative z-10 w-full border-t-4 border-white/20 bg-[#004B87] px-2 py-3 text-center shadow-lg">
                  <h4 className="m-0 text-[clamp(0.9rem,1.2vw,1.1rem)] font-bold text-white">Narendra Modi</h4>
                  <p className="mt-1 text-[clamp(0.6rem,0.8vw,0.75rem)] leading-tight text-white/75">Hon'ble Prime Minister, India</p>
                </div>
              </ScrollReveal>
            </div>

            {/* ----------------- CENTER CONTENT ----------------- */}
            <div className="flex min-w-0 flex-col items-center justify-center text-center relative z-10">
              <ScrollReveal direction="up" className="flex w-full flex-col items-center">
                
                {/* TOP LABEL */}
                <div className="mb-3 md:mb-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 md:px-5 md:py-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] text-white shadow-md">
                  Government of Madhya Pradesh
                </div>

                {/* MAIN HEADING (Dynamically scales to fit screen) */}
                <h1 className="mb-4 md:mb-6 text-center font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-white">
                  Madhya Pradesh
                  <br />
                  <span className="text-white font-bold">
                    FTA Accelerator
                  </span>
                </h1>

                {/* EVENT DETAILS */}
                <div className="mb-5 md:mb-7 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-3 md:p-4 shadow-xl w-[90%] sm:w-auto">
                  <div className="flex items-center gap-2 text-blue-100">
                    <CalendarDays className="text-[#F59E0B] w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-[0.85rem] md:text-[0.95rem] font-medium">1 Dec 2026 - 28 Feb 2027</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-6 md:h-8 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-blue-100">
                    <MapPin className="text-[#F59E0B] w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-[0.85rem] md:text-[0.95rem] font-medium">MPIDC Export Cell, Bhopal</span>
                  </div>
                </div>

                {/* SUBHEADING */}
                <p className="mb-6 md:mb-8 max-w-[700px] px-2 text-center text-[clamp(0.85rem,1.3vw,1.15rem)] leading-[1.5] text-gray-300 font-light">
                  Choose your path below. Join the 12-week accelerator programme to make your first shipment, or access our powerful market analysis tools to find your global buyers.
                </p>

                {/* 🔥 TWO MAIN HIGHLIGHTED BUTTONS 🔥 */}
                <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 px-4">
                  
                  {/* BUTTON 1: THE PROGRAM */}
                  <Link
                    href="/home"
                    className="group relative flex w-full sm:max-w-[240px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 md:py-3.5 text-center text-[0.95rem] md:text-[1.05rem] font-bold text-[#004B87] shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                  >
                    FTA Accelerator
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* BUTTON 2: THE TOOLS */}
                  <a
                    href="https://mp.intgrow.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full sm:max-w-[240px] items-center justify-center gap-2 rounded-full bg-[#0b3c98] px-6 py-3 md:py-3.5 text-center text-[0.95rem] md:text-[1.05rem] font-bold text-white shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fcfcfc] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:text-[#040404]"
                  >
                    FTA Tools
                  </a>

                </div>
              </ScrollReveal>
            </div>

            {/* ----------------- CM MOHAN YADAV (DESKTOP) ----------------- */}
            <div className="hidden w-full min-w-0 flex-col lg:flex relative z-20 xl:-translate-y-10">
              <ScrollReveal direction="right" className="flex w-full flex-col">
                <div className="flex h-[25vh] min-h-[220px] max-h-[350px] w-full items-end justify-center overflow-visible">
                  <img
                    src="/FTA/mohan_yadav-removebg-preview.png"
                    alt="CM Dr. Mohan Yadav"
                    className="block h-full w-full object-contain object-bottom scale-100 origin-bottom"
                  />
                </div>
                <div className="relative z-10 w-full border-t-4 border-white/20 bg-[#004B87] px-2 py-3 text-center shadow-lg">
                  <h4 className="m-0 text-[clamp(0.9rem,1.2vw,1.1rem)] font-bold text-white">Dr. Mohan Yadav</h4>
                  <p className="mt-1 text-[clamp(0.6rem,0.8vw,0.75rem)] leading-tight text-white/75">Hon'ble Chief Minister, MP</p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>
      </main>

      {/* ==================== MINI FOOTER ==================== */}
      <footer className="bg-[#001329] border-t border-white/10 py-2.5 md:py-4 text-center z-20 relative shrink-0">
        <p className="text-white/50 text-[0.7rem] md:text-[0.75rem] font-light m-0 tracking-wide px-4">
          © 2026 MP Industrial Development Corporation Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}