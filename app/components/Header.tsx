'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Calendar, AlertTriangle, PhoneCall } from "lucide-react"; 
// BOOTSTRAP IMPORT REMOVED FROM HERE 🚀

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Programme", path: "/program" },
    { label: "Sectors", path: "/sectors" },
    { label: "Who Can Apply", path: "/who-can-apply" },
    { label: "Apply Now", path: "/apply" },
    { label: "FAQ", path: "/FAQs" },
    { label: "Contact Us", path: "/contact" } 
  ];

  const mainDesktopLinks = navLinks.filter(link => link.label !== "Apply Now");

  return (
    <>
      <style>
        {`
          .header-marquee-container {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            background-color: #004B87;
            color: white;
            padding: 8px 0;
            display: flex;
            align-items: center;
            
          }
          .header-marquee-content {
            display: inline-block;
            animation: headerMarquee 30s linear infinite;
            font-weight: 600;
            font-size: 11px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-marquee-item {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin: 0 20px;
          }
          @keyframes headerMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .header-marquee-container:hover .header-marquee-content {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* TOP STRIP - SEAMLESS MARQUEE */}
      <div className="header-marquee-container relative z-40">
        <div className="header-marquee-content">
          <span className="header-marquee-item">Madhya Pradesh FTA Accelerator</span> •
          <span className="header-marquee-item"><Calendar size={12}/> Cohort 1: 1 Dec 2026 to 28 Feb 2027</span> •
          <span className="header-marquee-item" style={{ color: '#white' }}><AlertTriangle size={12}/> Enrolment closes 30 Nov 2026</span> •
          <span className="header-marquee-item"><PhoneCall size={12}/> FTA Helpdesk: 1800-XXX-XXXX</span> •
          
          <span className="header-marquee-item">Madhya Pradesh FTA Accelerator</span> •
          <span className="header-marquee-item"><Calendar size={12}/> Cohort 1: 1 Dec 2026 to 28 Feb 2027</span> •
          <span className="header-marquee-item" style={{ color: '#white' }}><AlertTriangle size={12}/> Enrolment closes 30 Nov 2026</span> •
          <span className="header-marquee-item"><PhoneCall size={12}/> FTA Helpdesk: 1800-XXX-XXXX</span> •
        </div>
      </div>

      {/* MAIN WHITE HEADER */}
      <header className="bg-white border-b border-gray-100 sticky top-0 shadow-sm z-30">
        <div className="w-full max-w-[1536px] mx-auto px-4 md:px-6 flex items-center justify-between h-[80px]">
          
          {/* 1. LOGO SECTION */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 z-10 cursor-pointer no-underline group">
            <div className="relative shrink-0 w-[150px] h-[80px] transition-transform duration-300 group-hover:scale-105">
               <Image 
                  src="/FTA/MPIDC.png" 
                  alt="MP Govt Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100px, 150px"
                  priority
               />
            </div>
            <div className="hidden sm:block mx-1 md:mx-2 h-[40px] w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="font-bold uppercase leading-none text-[14px] tracking-[0.5px]  text-[#004B87]">
              MP  FTA Accelerator
              </span>
             
            </div>
          </Link>
          
          {/* 2. DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainDesktopLinks.map((item, index) => (
              <Link 
                key={index} 
                href={item.path} 
                className="no-underline text-gray-900 font-bold text-[14px] hover:text-[#004B87] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 3. RIGHT SIDE */}
          <div className="flex items-center gap-4 z-10">
            <Link 
              href="/apply" 
              className="hidden lg:flex font-bold rounded-full px-6 py-2 bg-[#004B87] text-white text-[14px] tracking-[0.5px] hover:bg-[#003366] transition-colors"
            >
              Apply now
            </Link>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 lg:hidden text-[#004B87]">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 z-40 bg-black/50 lg:hidden" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full bg-white z-50 shadow-xl flex flex-col lg:hidden w-[80%] max-w-[350px]">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-bold uppercase text-[#004B87] text-[18px]">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-600"><X size={20} /></button>
              </div>
              <nav className="flex flex-col p-6 gap-2">
                {navLinks.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="no-underline text-gray-900 font-bold border-b border-gray-100 py-4 flex items-center justify-between text-[16px]" 
                  >
                    {item.label} <ArrowRight size={16} className="text-gray-400" />
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}