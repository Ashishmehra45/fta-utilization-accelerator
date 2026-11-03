"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Briefcase } from "lucide-react";

// --- Smooth Animation ---
const ScrollReveal = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HomeHero() {
  return (
    <div className="h-[100dvh] w-full bg-[#031124] text-white font-sans overflow-hidden flex flex-col relative">
      
     

      {/* ==================== TOP LOGO BAR (TRANSPARENT) ==================== */}
      <header className="w-full py-5 px-6 flex justify-center items-center gap-6 z-50 relative">
        <div className="flex items-center gap-3">
          <img 
            src="/madhya-pradesh-logo-png_seeklogo-188476-removebg-preview.png"
            alt="Government of Madhya Pradesh" 
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-white text-[10px] leading-tight">Government of</span>
            <span className="text-white font-bold text-[12px] leading-tight">Madhya Pradesh</span>
          </div>
        </div>

       

       
      </header>

      {/* ==================== MAIN HERO CONTENT ==================== */}
      <main className="flex-grow flex flex-col relative z-10 justify-center pb-12">
        <div className="max-w-[1600px] mx-auto w-full px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(250px,1fr)_minmax(0,2.5fr)_minmax(250px,1fr)] items-center gap-6">
          
          {/* ----------------- MOBILE LEADERS (Stacked on top for small screens) ----------------- */}
          <div className="flex lg:hidden flex-row justify-center items-end gap-4 w-full mb-4">
            <div className="flex flex-col items-center w-[45%] max-w-[150px]">
              <div className="flex justify-center items-end overflow-hidden w-full h-[120px]">
                <img src="/FTA/modi_ji-removebg-preview.png" alt="PM Modi" className="block h-full object-contain object-bottom scale-110" />
              </div>
              <div className="w-full text-center shadow-lg rounded-b-lg border-t-2 border-[#F59E0B] bg-gradient-to-r from-[#003366] to-[#004B87] py-2">
                <h4 className="text-white mb-0 text-[10px] font-bold">Narendra Modi</h4>
                <p className="text-white/70 mb-0 text-[8px]">Hon'ble Prime Minister, India</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-[45%] max-w-[150px]">
              <div className="flex justify-center items-end overflow-hidden w-full h-[95px]">
                <img src="/FTA/mohan_yadav-removebg-preview.png" alt="CM Yadav" className="block h-full object-contain object-bottom" />
              </div>
              <div className="w-full text-center shadow-lg rounded-b-lg border-t-2 border-[#F59E0B] bg-gradient-to-r from-[#003366] to-[#004B87] py-2">
                <h4 className="text-white mb-0 text-[10px] font-bold">Dr. Mohan Yadav</h4>
                <p className="text-white/70 mb-0 text-[8px]">Hon'ble Chief Minister, MP</p>
              </div>
            </div>
          </div>

          {/* ----------------- LEFT LEADER: PM MODI (DESKTOP) ----------------- */}
          <div className="hidden lg:flex flex-col items-center justify-end h-full">
            <ScrollReveal direction="left" className="w-full max-w-[280px]">
              <div className="flex justify-center items-end w-full h-[28vh] min-h-[220px]">
                <img
                  src="/FTA/modi_ji-removebg-preview.png"
                  alt="Narendra Modi"
                  className="block h-full object-contain object-bottom scale-125 origin-bottom"
                />
              </div>
              <div className="w-full text-center shadow-2xl rounded-b-xl border-t-[3px] border-[#F59E0B] bg-gradient-to-b from-[#00458a] to-[#002a54] py-3.5 px-2">
                <h4 className="text-white m-0 text-[1.1rem] font-bold tracking-wide">Narendra Modi</h4>
                <p className="text-white/80 m-0 text-[0.75rem] mt-1">Hon'ble Prime Minister, India</p>
              </div>
            </ScrollReveal>
          </div>

          {/* ----------------- CENTER TEXT & BUTTONS ----------------- */}
          <div className="flex flex-col items-center text-center">
            <ScrollReveal direction="up" className="w-full max-w-[850px] flex flex-col items-center">
              
              {/* Top Small Title with Lines */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#F59E0B]"></div>
                <span className="text-[#F59E0B] text-[13px] md:text-[15px] font-bold tracking-[3px] uppercase">
                  Madhya Pradesh
                </span>
                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#F59E0B]"></div>
              </div>

              {/* Main Title (Exact styling from image) */}
              <h1 className="text-white font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                FTA <span className="text-[#F59E0B]  font-semibold">Accelerator</span> Program
              </h1>

             

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                
                {/* Button 1: White with Glow */}
                <Link
                  href="/program"
                  className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[1.1rem] font-bold text-[#002A54] shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
                >
                 
                  <span>FTA Accelerator</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Button 2: Transparent/Bordered */}
                <Link
                  href="/tools"
                  className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-3 rounded-full bg-transparent border-2 border-white px-8 py-4 text-[1.1rem] font-bold text-white shadow-lg transition-all hover:bg-white/10 hover:scale-105"
                >
                 
                  <span>FTA Tools</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

              </div>
            </ScrollReveal>
          </div>

          {/* ----------------- RIGHT LEADER: CM YADAV (DESKTOP) ----------------- */}
          <div className="hidden lg:flex flex-col items-center justify-end h-full">
            <ScrollReveal direction="right" className="w-full max-w-[280px]">
              <div className="flex justify-center items-end w-full h-[28vh] min-h-[220px]">
                <img
                  src="/FTA/mohan_yadav-removebg-preview.png"
                  alt="Dr. Mohan Yadav"
                  className="block h-[90%] object-contain object-bottom scale-110 origin-bottom"
                />
              </div>
              <div className="w-full text-center shadow-2xl rounded-b-xl border-t-[3px] border-[#F59E0B] bg-gradient-to-b from-[#00458a] to-[#002a54] py-3.5 px-2">
                <h4 className="text-white m-0 text-[1.1rem] font-bold tracking-wide">Dr. Mohan Yadav</h4>
                <p className="text-white/80 m-0 text-[0.75rem] mt-1">Hon'ble Chief Minister, MP</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </main>
    </div>
  );
}