"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Smooth Animation ---
const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 20, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    none: { x: 0, y: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HomeHero() {
  return (
    <div className="h-[100dvh] w-full bg-[#051329] text-white font-sans overflow-hidden flex flex-col relative">
     {/* ==================== BACKGROUND WITH MP MAP ==================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 🔥 Main Image (Full Screen set kiya taaki gayab na ho) 🔥 */}
        <img
          src="/MPimg.png" 
          alt="Madhya Pradesh Map Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
        />
        
        {/* 🔥 Dark Gradients (Top aur Bottom se fade karne ke liye) 🔥 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051329] via-transparent to-[#051329] z-10 opacity-90"></div>
        
        {/* 🔥 Ek extra halka dark overlay taaki text easily padhne me aaye 🔥 */}
        <div className="absolute inset-0 bg-[#051329]/30 z-10"></div>
      </div>

      {/* ==================== TOP NAVBAR (EXACT FROM SCREENSHOT) ==================== */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center z-50 relative">
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/madhya-pradesh-logo-png_seeklogo-188476-removebg-preview.png"
            alt="Government of Madhya Pradesh" 
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-white text-[10px] md:text-xs leading-tight">Government of</span>
            <span className="text-white font-bold text-[13px] md:text-sm leading-tight">Madhya Pradesh</span>
          </div>
        </div>

        {/* Center Links (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-gray-300">
          {/* <Link href="#" className="text-white relative after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[2px] after:bg-gray-400">Home</Link> */}
          <Link href="/home" className="hover:text-white transition-colors">MP FTA Portal</Link>
          <Link href="https://mp.intgrow.co/" className="hover:text-white transition-colors">FTA Tools</Link>
        </nav>

        {/* Right Login Button Placeholder */}
        <div></div>
      </header>

      {/* ==================== MAIN HERO CONTENT ==================== */}
      <main className="flex-grow flex flex-col relative z-20 justify-center pb-8 pt-4">
        <div className="max-w-[1500px] mx-auto w-full px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(250px,1fr)_minmax(0,2.5fr)_minmax(250px,1fr)] items-center gap-6">
          
          {/* ----------------- MOBILE LEADERS (For small screens) ----------------- */}
          <div className="flex lg:hidden flex-row justify-center items-end gap-4 w-full mb-4">
            {/* PM Modi - Mobile */}
            <div className="flex flex-col items-center w-[45%] max-w-[160px]">
              <div className="flex justify-center items-end overflow-visible w-full h-[140px]">
                <img src="/FTA/modi_ji-removebg-preview.png" alt="PM Modi" className="block h-full object-contain object-bottom scale-[1.15] origin-bottom" />
              </div>
              <div className="w-full text-center shadow-lg rounded-b-lg border-t-2 border-[#F5B642] bg-[#0c1f3d] py-2 relative z-10">
                <h4 className="text-white mb-0 text-[10px] font-bold">Narendra Modi</h4>
                <p className="text-white/70 mb-0 text-[8px]">Hon'ble Prime Minister, India</p>
              </div>
            </div>
            {/* CM Yadav - Mobile */}
            <div className="flex flex-col items-center w-[45%] max-w-[160px]">
              <div className="flex justify-center items-end overflow-visible w-full h-[115px]">
                <img src="/FTA/mohan_yadav-removebg-preview.png" alt="CM Yadav" className="block h-full object-contain object-bottom scale-110 origin-bottom" />
              </div>
              <div className="w-full text-center shadow-lg rounded-b-lg border-t-2 border-[#F5B642] bg-[#0c1f3d] py-2 relative z-10">
                <h4 className="text-white mb-0 text-[10px] font-bold">Dr. Mohan Yadav</h4>
                <p className="text-white/70 mb-0 text-[8px]">Hon'ble Chief Minister, MP</p>
              </div>
            </div>
          </div>

          {/* ----------------- LEFT LEADER: PM MODI (DESKTOP) ----------------- */}
          <div className="hidden lg:flex flex-col items-center justify-end h-full -translate-y-8">
            <ScrollReveal direction="left" className="w-full max-w-[280px]">
              <div className="flex justify-center items-end w-full h-[32vh] min-h-[280px] overflow-visible">
                <img
                  src="/FTA/modi_ji-removebg-preview.png"
                  alt="Narendra Modi"
                  className="block h-full object-contain object-bottom scale-[1.45] origin-bottom drop-shadow-2xl"
                />
              </div>
              <div className="w-full text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-b-xl border-t-[3px] border-[#F5B642] bg-[#0a1e3f] py-3.5 px-2 relative z-10">
                <h4 className="text-white m-0 text-[1.1rem] font-bold tracking-wide">Narendra Modi</h4>
                <p className="text-gray-300 m-0 text-[0.75rem] mt-0.5 font-medium">Hon'ble Prime Minister, India</p>
              </div>
            </ScrollReveal>
          </div>

          {/* ----------------- CENTER TEXT & BUTTONS ----------------- */}
          <div className="flex flex-col items-center text-center -translate-y-4">
            <ScrollReveal direction="up" className="w-full max-w-[850px] flex flex-col items-center">
              
              {/* Top Golden Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#F5B642]"></div>
                <span className="text-[#F5B642] text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase">
                  Madhya Pradesh
                </span>
                <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#F5B642]"></div>
              </div>

              {/* Main Title */}
              <h1 className="text-white font-black text-[clamp(2.8rem,6vw,5.5rem)] leading-[1] mb-5 tracking-tight drop-shadow-lg">
                MP FTA <span className="text-[#F5B642]">Portal</span>
              </h1>

              {/* Subheading */}
              <p className="text-gray-300 font-normal text-[clamp(1rem,1.5vw,1.35rem)] leading-relaxed mb-10">
                Your Gateway to Global Markets
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
                
                {/* Yellow Filled Button */}
                <Link
                  href="/home"
                  className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#F5B642] px-8 py-3.5 text-[1.05rem] font-bold text-[#051329] shadow-[0_0_20px_rgba(245,182,66,0.2)] transition-all hover:bg-[#e5a93d] hover:scale-105"
                >
                  <span>MP FTA Portal</span>
                  <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Transparent Bordered Button */}
                <Link
                  href="https://mp.intgrow.co/"
                  className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-3 rounded-full bg-transparent border border-gray-400 px-8 py-3.5 text-[1.05rem] font-medium text-white transition-all hover:border-white hover:bg-white/5 hover:scale-105"
                >
                  <span>FTA Tools</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

              </div>
            </ScrollReveal>
          </div>

          {/* ----------------- RIGHT LEADER: CM YADAV (DESKTOP) ----------------- */}
          <div className="hidden lg:flex flex-col items-center justify-end h-full -translate-y-8">
            <ScrollReveal direction="right" className="w-full max-w-[260px]">
              <div className="flex justify-center items-end w-full h-[32vh] min-h-[260px] overflow-visible">
                <img
                  src="/FTA/mohan_yadav-removebg-preview.png"
                  alt="Dr. Mohan Yadav"
                  className="block h-[95%] object-contain object-bottom scale-[1.30] origin-bottom drop-shadow-2xl"
                />
              </div>
              <div className="w-full text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-b-xl border-t-[3px] border-[#F5B642] bg-[#0a1e3f] py-3.5 px-2 relative z-10">
                <h4 className="text-white m-0 text-[1.05rem] font-bold tracking-wide">Dr. Mohan Yadav</h4>
                <p className="text-gray-300 m-0 text-[0.75rem] mt-0.5 font-medium">Hon'ble Chief Minister, MP</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </main>
    </div>
  );
}