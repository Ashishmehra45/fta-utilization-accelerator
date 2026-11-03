"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight, Wrench } from "lucide-react";

// --- Smooth Scroll & Animations ---
const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    none: { x: 0, y: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HomeHero() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden">
      <main>
        {/* ==================== MAIN LANDING HERO SECTION ==================== */}
        <section className="relative isolate min-h-screen overflow-hidden bg-[#0A192F] py-8 lg:py-12 flex flex-col justify-center">
          
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
          <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-4 mt-10 lg:mt-0 lg:grid-cols-[minmax(250px,0.8fr)_minmax(0,2fr)_minmax(250px,0.8fr)] lg:gap-5 xl:gap-8">
            
            {/* ----------------- MOBILE LEADERS ROW ----------------- */}
            <div className="mx-auto w-full max-w-[480px] lg:hidden mb-4">
              <ScrollReveal direction="up" className="w-full">
                <div className="grid grid-cols-2 items-end gap-4">
                  {/* PM MODI - MOBILE */}
                  <div className="flex min-w-0 flex-col">
                    <div className="flex h-[190px] w-full items-end justify-center overflow-hidden">
                      <img
                        src="/FTA/modi_ji-removebg-preview.png"
                        alt="PM Narendra Modi"
                        className="block h-full w-full object-contain object-bottom scale-110 origin-bottom"
                      />
                    </div>
                    <div className="w-full border-t-[3px] border-white/20 bg-[#004B87] px-1.5 py-3 text-center shadow-lg">
                      <h4 className="m-0 text-[13px] font-bold text-white sm:text-sm">Narendra Modi</h4>
                      <p className="mt-1 text-[9px] leading-tight text-white/75">Hon'ble Prime Minister, India</p>
                    </div>
                  </div>

                  {/* CM MOHAN YADAV - MOBILE */}
                  <div className="flex min-w-0 flex-col">
                    <div className="flex h-[190px] w-full items-end justify-center overflow-hidden">
                      <img
                        src="/FTA/mohan_yadav-removebg-preview.png"
                        alt="CM Dr. Mohan Yadav"
                        className="block h-full w-full object-contain object-bottom"
                      />
                    </div>
                    <div className="w-full border-t-[3px] border-white/20 bg-[#004B87] px-1.5 py-3 text-center shadow-lg">
                      <h4 className="m-0 text-[13px] font-bold text-white sm:text-sm">Dr. Mohan Yadav</h4>
                      <p className="mt-1 text-[9px] leading-tight text-white/75">Hon'ble Chief Minister, MP</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ----------------- PM MODI (DESKTOP) ----------------- */}
            <div className="hidden w-full min-w-0 flex-col lg:flex lg:-translate-y-12 xl:-translate-y-20 relative z-20">
              <ScrollReveal direction="left" className="flex w-full flex-col">
                <div className="flex h-[280px] w-full items-end justify-center overflow-visible xl:h-[380px]">
                  <img
                    src="/FTA/modi_ji-removebg-preview.png"
                    alt="PM Narendra Modi"
                    className="block h-full w-full object-contain object-bottom scale-110 origin-bottom"
                  />
                </div>
                <div className="relative z-10 w-full border-t-4 border-white/20 bg-[#004B87] px-2 py-4 text-center shadow-lg">
                  <h4 className="m-0 text-lg font-bold text-white xl:text-xl">Narendra Modi</h4>
                  <p className="mt-1 text-xs leading-tight text-white/75">Hon'ble Prime Minister, India</p>
                </div>
              </ScrollReveal>
            </div>

            {/* ----------------- CENTER CONTENT ----------------- */}
            <div className="flex min-w-0 flex-col items-center justify-center text-center pt-2 lg:pt-0 relative z-10">
              <ScrollReveal direction="up" className="flex w-full flex-col items-center">
                
                {/* TOP LABEL */}
                <div className="mb-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[2px] text-white shadow-md sm:text-[11px]">
                  Government of Madhya Pradesh
                </div>

                {/* MAIN HEADING */}
                <h1 className="mb-6 text-center font-bold text-7xl font-black leading-[1.05] text-white">
                  Madhya Pradesh
                  <br />
                  <span className="text-white font-bold">
                    FTA Accelerator
                  </span>
                </h1>

                {/* EVENT DETAILS (GLASSMORPHISM WIDGET) */}
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-4 shadow-xl">
                  <div className="flex items-center gap-2 text-blue-100">
                    <CalendarDays className="text-[#F59E0B]" size={20} />
                    <span className="text-[0.95rem] font-medium">1 Dec 2026 - 28 Feb 2027</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-blue-100">
                    <MapPin className="text-[#F59E0B]" size={20} />
                    <span className="text-[0.95rem] font-medium">MPIDC Export Cell, Bhopal</span>
                  </div>
                </div>

                {/* SUBHEADING */}
                <p className="mb-10 max-w-[700px] text-center text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.6] text-gray-300 font-light">
                  Choose your path below. Join the 12-week accelerator programme to make your first shipment, or access our powerful market analysis tools to find your global buyers.
                </p>

                {/* 🔥 TWO MAIN HIGHLIGHTED BUTTONS 🔥 */}
                <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 mt-2">
                  
                  {/* BUTTON 1: THE PROGRAM (NAVY/WHITE) */}
                  <Link
                    href="/home"
                    className="group relative flex w-full max-w-[280px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-center text-[1.1rem] font-bold text-[#004B87] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    FTA Accelerator
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* BUTTON 2: THE TOOLS (AMBER/GOLD - HIGH CONTRAST) */}
                  <Link
                    href="/tools"
                    className="group relative flex w-full max-w-[280px] items-center justify-center gap-3 rounded-full bg-[#0b3c98] px-8 py-4 text-center text-[1.1rem] font-bold text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fcfcfc] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:text-[#040404]"
                  >
                    <Wrench size={20} className="transition-transform group-hover:rotate-12" />
                    FTA Tools
                  </Link>

                </div>
              </ScrollReveal>
            </div>

            {/* ----------------- CM MOHAN YADAV (DESKTOP) ----------------- */}
            <div className="hidden w-full min-w-0 flex-col lg:flex lg:-translate-y-12 xl:-translate-y-20 relative z-20">
              <ScrollReveal direction="right" className="flex w-full flex-col">
                <div className="flex h-[280px] w-full items-end justify-center overflow-visible xl:h-[380px]">
                  <img
                    src="/FTA/mohan_yadav-removebg-preview.png"
                    alt="CM Dr. Mohan Yadav"
                    className="block h-full w-full object-contain object-bottom scale-100 origin-bottom"
                  />
                </div>
                <div className="relative z-10 w-full border-t-4 border-white/20 bg-[#004B87] px-2 py-4 text-center shadow-lg">
                  <h4 className="m-0 text-lg font-bold text-white xl:text-xl">Dr. Mohan Yadav</h4>
                  <p className="mt-1 text-xs leading-tight text-white/75">Hon'ble Chief Minister, MP</p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}