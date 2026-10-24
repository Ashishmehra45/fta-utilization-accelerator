"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Download, Check, Globe, ShieldCheck, 
  Handshake, TrendingUp, FileCheck2, ChevronRight, Menu, X,
  LineChart, FileText, Calculator, CheckSquare
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Scroll & Animations ---
const ScrollReveal = ({ 
  children, className, delay = 0, direction = "up" 
}: { 
  children: React.ReactNode, className?: string, delay?: number, direction?: "up" | "left" | "right" | "none" 
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    none: { x: 0, y: 0 }
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

export default function FTAAcceleratorPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#004B87] selection:text-white overflow-x-hidden">
      
      {/* TOP BLUE BAR (MPIDC Style) */}
      <div className="bg-[#004B87] text-white text-[10px] md:text-xs py-1.5 px-4 md:px-8 flex justify-between items-center z-[60] relative">
        <div className="flex gap-4">
          <span className="text-yellow-400 font-bold">What's New</span>
        </div>
        <div className="flex items-center gap-4 hidden sm:flex">
          <a href="#" className="hover:text-yellow-400 transition-colors">Click Here to Download - Telegram</a>
          <div className="flex gap-2 items-center border-l border-white/20 pl-4">
            <button className="hover:text-yellow-400">A-</button>
            <button className="hover:text-yellow-400">A</button>
            <button className="hover:text-yellow-400">A+</button>
            <button className="hover:text-yellow-400 font-hindi ml-2">अ</button>
          </div>
        </div>
      </div>

      {/* MAIN WHITE HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center p-1">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ae/Emblem_of_Madhya_Pradesh.svg/1024px-Emblem_of_Madhya_Pradesh.svg.png" alt="MP Govt Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#004B87] text-sm md:text-lg leading-tight uppercase tracking-tight">
                MPIDC
              </span>
              <span className="text-[8px] md:text-[10px] font-semibold text-gray-500 uppercase leading-tight">
                MP Industrial Development<br/>Corporation Ltd.
              </span>
            </div>
          </div>
          
          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#004B87] transition-colors flex items-center gap-1">Sectors <ChevronRight className="w-3 h-3 rotate-90" /></a>
            <a href="#deliverables" className="text-sm font-medium text-gray-700 hover:text-[#004B87] transition-colors flex items-center gap-1">Policies <ChevronRight className="w-3 h-3 rotate-90" /></a>
            <a href="#timeline" className="text-sm font-medium text-gray-700 hover:text-[#004B87] transition-colors flex items-center gap-1">Services <ChevronRight className="w-3 h-3 rotate-90" /></a>
            <a href="#enrollment" className="text-sm font-medium text-gray-700 hover:text-[#004B87] transition-colors flex items-center gap-1">For Investor <ChevronRight className="w-3 h-3 rotate-90" /></a>
          </nav>

          {/* ACTIONS & MOBILE TOGGLE */}
          <div className="flex items-center gap-3 z-10">
            <div className="hidden sm:flex gap-3">
              <button className="w-9 h-9 rounded-full border border-[#004B87] text-[#004B87] flex items-center justify-center hover:bg-[#004B87] hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </button>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#004B87]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-bold text-[#004B87] text-lg uppercase">MPIDC Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-[#004B87]">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-2">
                {[{ label: "Sectors", href: "#sectors" }, { label: "Policies", href: "#deliverables" }, { label: "Services", href: "#timeline" }, { label: "For Investor", href: "#enrollment" }].map((item, i) => (
                  <a key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-800 border-b border-gray-100 py-4 flex items-center justify-between">
                    {item.label} <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

     {/* HERO SECTION - MPIDC Theme Exact Match */}
      <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0A192F]">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/back.png" 
            alt="Madhya Pradesh Industry Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Main Content Area (Centered Text + Leaders) */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-grow">
          
          {/* Centered Main Text */}
          <div className="flex flex-col items-center text-center w-full lg:w-2/3 lg:absolute lg:left-1/2 lg:-translate-x-1/2 mt-4 md:mt-0 order-2 lg:order-1">
            <ScrollReveal direction="up" className="flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 md:mb-4 tracking-tight">
                FTA Accelerator Program
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white mb-6 md:mb-10 px-2">
               Unlock Preferential Trade Benefits. Accelerate Your Global Market Access.
              </p>

               <p className="text-sm sm:text-base md:text-lg w-full sm:w-[85vw] lg:w-[55vw] font-light text-white mb-8 px-4 leading-relaxed hidden md:block">
               Institutional-grade support for exporters, importers, and businesses across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile to identify Free Trade Agreement (FTA) opportunities, optimize customs duties, navigate Rules of Origin, and strengthen cross-border trade.
              </p>
              <p className="text-sm sm:text-base md:text-lg w-full sm:w-[85vw] lg:w-[55vw] font-light text-white/90 mb-8 px-4 leading-relaxed md:hidden">
               Institutional-grade support for exporters & importers across key sectors to identify FTA opportunities, optimize customs duties, and strengthen cross-border trade.
              </p>
              
              
              {/* Blue CTA Button */}
              <a 
                href="#contact" 
                className="inline-block bg-[#004B87]/80 md:bg-transparent border-2 border-[#004B87] hover:bg-[#004B87] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-medium transition-all backdrop-blur-sm w-[90%] sm:w-auto"
              >
                Start your Investment Journey with MP
              </a>

              <div className="mt-8 text-white/90 text-sm sm:text-base md:text-xl font-light tracking-wide flex items-center justify-center gap-2 sm:gap-3 divide-x divide-white/40 px-2">
                <span className="pr-2 sm:pr-3 whitespace-nowrap">Robust Policies</span>
                <span className="px-2 sm:px-3 whitespace-nowrap">Seamless Processes</span>
                <span className="pl-2 sm:pl-3 whitespace-nowrap hidden sm:inline">Sustainable Growth</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Leaders Area (Right Side - Desktop & Mobile Friendly) */}
          <div className="flex flex-row items-end justify-center lg:justify-end gap-4 sm:gap-6 w-full lg:w-auto lg:ml-auto mb-8 lg:mb-0 z-20 order-1 lg:order-2">
            <ScrollReveal delay={0.2} direction="up" className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-b-2 md:border-b-4 border-transparent overflow-hidden">
                <img 
                  src="/modi_ji-removebg-preview.png" 
                  alt="Narendra Modi" 
                  className="w-full h-full object-cover object-top mask-image-bottom-fade"
                />
              </div>
              <div className="bg-[#004B87]/90 backdrop-blur-sm w-[110%] md:w-[120%] text-center py-1.5 md:py-2 mt-[-10px] z-10 border-t border-white/20 rounded-sm">
                <h4 className="font-bold text-white text-[10px] sm:text-xs md:text-sm">Narendra Modi</h4>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-white/80 leading-tight">Hon'ble Prime Minister, India</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up" className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 border-b-2 md:border-b-4 border-transparent overflow-hidden">
                <img 
                  src="/mohan_yadav-removebg-preview.png" 
                  alt="Dr. Mohan Yadav" 
                  className="w-full h-full object-cover object-top mask-image-bottom-fade"
                />
              </div>
              <div className="bg-[#004B87]/90 backdrop-blur-sm w-[110%] md:w-[120%] text-center py-1.5 md:py-2 mt-[-10px] z-10 border-t border-white/20 rounded-sm">
                <h4 className="font-bold text-white text-[10px] sm:text-xs md:text-sm">Dr. Mohan Yadav</h4>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-white/80 leading-tight">Hon'ble Chief Minister, MP</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Glassy Action Cards */}
        <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-4 pb-6 mt-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <LineChart className="w-4 h-4 md:w-5 md:h-5 text-white" />, label: "Intention to Invest" },
              { icon: <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />, label: "Know Our Policies" },
              { icon: <Calculator className="w-4 h-4 md:w-5 md:h-5 text-white" />, label: "Calculate Incentives" },
              { icon: <CheckSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />, label: "Know Approvals" }
            ].map((card, idx) => (
              <ScrollReveal key={idx} delay={0.4 + (idx * 0.1)} direction="up">
                <a href="#" className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-2 sm:gap-3 md:gap-4 bg-[#002A54]/80 hover:bg-[#004B87]/90 backdrop-blur-md border border-white/20 rounded-lg p-3 md:p-4 transition-colors group text-center sm:text-left h-full">
                  <div className="bg-white/10 p-1.5 md:p-2 rounded-md group-hover:bg-white/20 transition-colors shrink-0">
                    {card.icon}
                  </div>
                  <span className="text-white font-medium text-[10px] sm:text-xs md:text-sm leading-tight">{card.label}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS SECTORS - MPIDC Light Theme Style */}
      <section id="sectors" className="py-24 px-6 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#004B87] mb-6">
              Our Focus Sectors
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              The FTA Accelerator supports businesses across four priority sectors, helping them identify applicable trade agreements, evaluate preferential tariff benefits, understand product-specific compliance requirements, and explore international market opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                num: "01", title: "Pharmaceuticals", sub: "Pharmaceuticals & Healthcare Products",
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify FTA opportunities for pharmaceutical products.",
                  "Analyze product classification and applicable preferential tariffs.",
                  "Understand Rules of Origin and Certificate of Origin requirements.",
                  "Navigate relevant export-import documentation."
                ]
              },
              {
                num: "02", title: "Agriculture", sub: "Agriculture & Agri-Products",
                img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify preferential market access opportunities.",
                  "Analyze product-specific tariffs and trade agreements.",
                  "Review relevant export documentation and requirements.",
                  "Explore international buyers and agri-trade partnerships."
                ]
              },
              {
                num: "03", title: "Textiles", sub: "Textiles, Apparel & Technical Textiles",
                img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify FTA opportunities for fabrics and garments.",
                  "Assess potential duty savings and tariff rates.",
                  "Evaluate Rules of Origin and sourcing criteria.",
                  "Understand relevant customs documentation."
                ]
              },
              {
                num: "04", title: "Engineering & Auto", sub: "Engineering Goods & Automotive",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify FTA opportunities for engineering goods.",
                  "Compare standard and preferential tariffs.",
                  "Assess component sourcing and supply-chain considerations.",
                  "Understand applicable trade documentation and procedures."
                ]
              }
            ].map((sector, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col md:flex-row h-full group hover:shadow-xl hover:border-[#004B87] transition-all duration-300">
                  <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                    <img src={sector.img} alt={sector.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#004B87]/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-4 left-4 bg-[#004B87] text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                      Sector {sector.num}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-[#333333] mb-1">{sector.title}</h3>
                    <p className="text-xs font-semibold text-[#004B87] uppercase tracking-wider mb-4 pb-4 border-b border-gray-100">{sector.sub}</p>
                    <ul className="space-y-3 flex-grow">
                      {sector.items.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

     {/* WHAT WE DELIVER */}
      <section id="deliverables" className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#004B87] mb-6">
              What We Deliver
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              By combining trade intelligence, tariff analysis, regulatory guidance, and institutional trade networks, participating businesses can identify preferential market access opportunities and improve trade competitiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "MARKET INTELLIGENCE", 
                subtitle: "Insights • Mapping • Tariffs", 
                icon: <Globe className="w-6 h-6 text-[#E87A4F]" />, // Matching the orange theme icon color
                bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
                gradientFrom: "from-[#E87A4F]", // Orange gradient
                items: ["FTA opportunity mapping", "Preferential tariff assessment", "Market selection", "Duty savings analysis"]
              },
              {
                title: "TRADE REGULATIONS", 
                subtitle: "Rules of Origin • Compliance", 
                icon: <ShieldCheck className="w-6 h-6 text-[#D9A05B]" />, // Matching the yellow/gold theme icon color
                bgImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
                gradientFrom: "from-[#D9A05B]", // Gold gradient
                items: ["Rules of Origin guidance", "Certificate of Origin support", "Customs procedures", "Regulatory checklists"]
              },
              {
                title: "TRADE PARTNERSHIPS", 
                subtitle: "B2B • Intro • Negotiation", 
                icon: <Handshake className="w-6 h-6 text-[#3A7CA5]" />, // Matching the blue theme icon color
                bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
                gradientFrom: "from-[#3A7CA5]", // Blue gradient
                items: ["Importers/Exporters intros", "B2B matchmaking", "Institutional connections", "Negotiation support"]
              },
              {
                title: "TRADE OPTIMIZATION", 
                subtitle: "Duty Savings • Expansion", 
                icon: <TrendingUp className="w-6 h-6 text-[#4B8B7B]" />, // Matching the green theme icon color
                bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
                gradientFrom: "from-[#4B8B7B]", // Green gradient
                items: ["Tariff opportunities", "Standard vs preferential duty", "Customs duty assessment", "Market expansion plans"]
              }
            ].map((block, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-[450px]">
                <div className="relative w-full h-full rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-lg cursor-default">
                  
                  {/* Background Image[cite: 4] */}
                  <img 
                    src={block.bgImage} 
                    alt={block.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay matching the reference style[cite: 4] */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${block.gradientFrom} via-[${block.gradientFrom}]/60 to-black/30 opacity-90`} />

                  {/* Top Centered Circular Icon[cite: 4] */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    {block.icon}
                  </div>

                  {/* Bottom Text Content[cite: 4] */}
                  <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-center text-center">
                    <h3 className="text-white font-black text-xl mb-2 leading-tight uppercase tracking-wide">
                      {block.title}
                    </h3>
                    <p className="text-white/90 text-[10px] uppercase font-bold tracking-widest mb-6">
                      {block.subtitle}
                    </p>
                    
                    {/* Hover List (Reveals slightly on hover or keeps visible) */}
                    <ul className="space-y-2 w-full text-center">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-white/80 text-xs font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24 px-6 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#004B87] mb-6">
              Timeline & Deliverables
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-lg font-bold text-gray-800 mb-2">Accelerated 2–3 Month Program</p>
            <p className="text-gray-600 max-w-3xl leading-relaxed">
              A structured execution framework to help businesses identify relevant trade agreements, evaluate preferential tariff opportunities, and develop actionable market-entry strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "Phase 1", time: "Weeks 1–3", title: "Assessment & Opportunity Mapping",
                content: [{ t: "Opportunity Report", d: "Analysis of relevant trade agreements and target markets." }, { t: "Product Assessment", d: "Review of classifications and country-specific tariffs." }]
              },
              {
                num: "Phase 2", time: "Weeks 4–6", title: "Eligibility & Compliance Planning",
                content: [{ t: "Rules of Origin", d: "Assessment of origin requirements and qualifying conditions." }, { t: "Compliance Advisory", d: "Guidance on customs procedures and documentation processes." }]
              },
              {
                num: "Phase 3", time: "Weeks 7–10", title: "Trade Facilitation & Engagement",
                content: [{ t: "Partner Identification", d: "Finding importers, distributors, and partners in priority markets." }, { t: "B2B Introductions", d: "Facilitated business meetings and engagement opportunities." }]
              },
              {
                num: "Phase 4", time: "Weeks 11–12", title: "Implementation & Expansion",
                content: [{ t: "Action Plan", d: "Roadmap for claiming applicable preferential tariff benefits." }, { t: "Activation Support", d: "Guidance for progressing qualified business opportunities." }]
              }
            ].map((phase, idx) => (
              <ScrollReveal key={idx} delay={0.1} direction="up">
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#004B87] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                    <span className="text-sm font-bold text-[#004B87] uppercase tracking-wider">{phase.num}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded">{phase.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-6">{phase.title}</h3>
                  <div className="space-y-4 flex-grow">
                    {phase.content.map((item, i) => (
                      <div key={i}>
                        <strong className="block text-sm font-bold text-gray-800 mb-1">{item.t}</strong>
                        <span className="text-sm text-gray-600 leading-relaxed block">{item.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLMENT */}
      <section id="enrollment" className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#004B87] mb-6">
              Program Enrollment
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
              Select the appropriate phase below. You will be redirected to the dedicated portal to complete your application securely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {[
                { title: "Initial Questionnaire", desc: "Basic company details, business profile, focus sector, and readiness assessment." },
                { title: "Phase 1 Questionnaire", desc: "Detailed product info, HS Codes, pricing, origin details, and FTA opportunity assessment." },
                { title: "Phase 2 Questionnaire", desc: "Trade compliance requirements, Rules of Origin docs, and partner engagement." },
                { title: "Phase 3 Questionnaire", desc: "Trade execution planning, commercial terms, and market development priorities." }
              ].map((q, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-6 h-full flex flex-col justify-between hover:shadow-md hover:border-[#004B87] transition-all cursor-pointer group">
                    <div>
                      <h3 className="text-lg font-bold text-[#333333] mb-3">{q.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">{q.desc}</p>
                    </div>
                    <div className="flex items-center text-sm font-bold text-[#004B87] group-hover:text-yellow-600 transition-colors mt-auto">
                      Start Phase <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 px-6 bg-[#004B87]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Application Request
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6 mx-auto"></div>
            <p className="text-blue-100">
              Complete the form below to request program details, eligibility requirements, engagement options, and enrollment information.
            </p>
          </div>

          <ScrollReveal delay={0.2} direction="up" className="w-full">
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="bg-white p-8 md:p-10 rounded-xl shadow-2xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Your Name *</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:border-[#004B87] focus:ring-1 focus:ring-[#004B87] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:border-[#004B87] focus:ring-1 focus:ring-[#004B87] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Your Email *</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:border-[#004B87] focus:ring-1 focus:ring-[#004B87] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Company / Organization *</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:border-[#004B87] focus:ring-1 focus:ring-[#004B87] transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Sector *</label>
                <select className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:border-[#004B87] focus:ring-1 focus:ring-[#004B87] transition-all">
                  <option>Pharmaceuticals</option>
                  <option>Agriculture</option>
                  <option>Textiles</option>
                  <option>Engineering & Automobile</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:border-[#004B87] focus:ring-1 focus:ring-[#004B87] transition-all resize-none" />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#004B87] text-white font-bold rounded text-sm uppercase tracking-wide py-4 hover:bg-[#003366] transition-colors mt-4"
              >
                Submit Application
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002A54] py-8 text-center border-t border-white/10">
        <p className="text-white/70 text-sm">
          &copy; 2026 MP Industrial Development Corporation Ltd. All rights reserved.
        </p>
      </footer>

    </div>
  );
}