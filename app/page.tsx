"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Download, Check, Globe, ShieldCheck, 
  Handshake, TrendingUp, ArrowUpRight, Scale, 
  FileCheck2, Ship, ChevronRight, Menu, X 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Scroll & Word Drop Animations ---
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
    <div className="min-h-screen bg-[#F4F5F7] text-[#111827] font-sans selection:bg-[#ccff00] selection:text-[#111827] overflow-x-hidden">
      
      {/* FLOATING PILL HEADER */}
      <div className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
        <header className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-4 py-3 flex items-center justify-between w-full max-w-6xl shadow-sm pointer-events-auto relative">
          
          {/* LOGO (Left) */}
          <div className="flex items-center gap-2 pl-2 z-10">
            <div className="w-8 h-8 bg-[#111827] rounded-full flex items-center justify-center">
              <span className="font-black text-white text-[10px]">FTA</span>
            </div>
            <span className="font-bold text-sm tracking-tight text-[#111827] uppercase">
              Accelerator
            </span>
          </div>
          
          {/* DESKTOP NAV (Perfectly Centered) */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-50 rounded-full p-1 border border-gray-100 absolute left-1/2 -translate-x-1/2">
            <a href="#sectors" className="text-gray-500 hover:text-[#111827] px-4 py-1.5 rounded-full text-xs font-bold transition-all">Sectors</a>
            <a href="#deliverables" className="text-gray-500 hover:text-[#111827] px-4 py-1.5 rounded-full text-xs font-bold transition-all">Capabilities</a>
            <a href="#timeline" className="text-gray-500 hover:text-[#111827] px-4 py-1.5 rounded-full text-xs font-bold transition-all">Timeline</a>
            <a href="#enrollment" className="text-gray-500 hover:text-[#111827] px-4 py-1.5 rounded-full text-xs font-bold transition-all">Enroll</a>
          </nav>

          {/* ACTIONS & MOBILE TOGGLE (Right) */}
          <div className="flex items-center gap-2 z-10">
            <a 
              href="#contact" 
              className="hidden sm:flex bg-[#111827] text-white px-5 py-2.5 rounded-full text-xs font-bold items-center gap-2 hover:bg-black transition-all shadow-md group"
            >
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Hamburger Button for Mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden bg-gray-50 border border-gray-200 p-2.5 rounded-full text-[#111827] hover:bg-gray-100 transition-colors pointer-events-auto"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE SIDEBAR MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col md:hidden"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#111827] rounded-full flex items-center justify-center">
                    <span className="font-black text-white text-[10px]">FTA</span>
                  </div>
                  <span className="font-bold text-sm tracking-tight text-[#111827] uppercase">Menu</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-[#111827] hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Links */}
              <nav className="flex flex-col p-6 gap-2">
                {[
                  { label: "Focus Sectors", href: "#sectors" },
                  { label: "Capabilities", href: "#deliverables" },
                  { label: "Timeline", href: "#timeline" },
                  { label: "Enrollment", href: "#enrollment" },
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-[#111827] border-b border-gray-50 py-4 flex items-center justify-between group"
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#ccff00] group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </nav>

              {/* Sidebar Footer CTA */}
              <div className="mt-auto p-6 bg-gray-50">
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#ccff00] text-[#111827] w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] transition-transform"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO SECTION - Side-by-Side Flex Layout */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
        
        {/* LEFT CONTENT (Text Side) */}
        <ScrollReveal direction="up" className="flex flex-col items-start text-left z-10 w-full lg:w-1/2">
          <div className="bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm flex items-center gap-2">
            
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Flagship Program</span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-[4.5rem] font-bold tracking-tight text-[#111827] leading-[1.05] mb-6">
            FTA Accelerator Program
          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Unlock Preferential Trade Benefits. Accelerate Your Global Market Access.
          </p>

          <p className="text-base text-gray-500 mb-10 leading-relaxed max-w-xl">
            Institutional-grade support for exporters, importers, and businesses across 
            <strong className="text-[#111827] font-bold"> Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile</strong> to identify Free Trade Agreement (FTA) opportunities, optimize customs duties, navigate Rules of Origin, and strengthen cross-border trade.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-[#ccff00] text-[#111827] px-8 py-3.5 rounded-full font-black text-sm flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-[#ccff00]/20"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <button className="w-full sm:w-auto bg-white border border-gray-200 text-[#111827] px-8 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
              <Download className="w-4 h-4" /> Download Brochure
            </button>
          </div>
        </ScrollReveal>

        {/* RIGHT CONTENT (Image Side) */}
        <ScrollReveal delay={0.2} direction="left" className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
          <div className="w-full h-[400px] md:h-[500px] xl:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-gray-200/50">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80" 
              alt="Global Trade" 
              className="w-full h-full object-cover"
            />
            {/* Soft gradient overlay at the bottom of the image for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
        </ScrollReveal>
        
      </section>

      {/* FOCUS SECTORS - Centralised & Airy */}
      <section id="sectors" className="py-24 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3 border border-gray-200 rounded-full px-3 py-1">Our Focus Sectors</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111827] mb-6">
              Accelerating FTA Across <br/> Key Sectors
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              The FTA Accelerator supports businesses across four priority sectors, helping them identify applicable trade agreements, evaluate preferential tariff benefits, understand product-specific compliance requirements, and explore international market opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "1", title: "Pharmaceuticals", sub: "Pharmaceuticals & Healthcare Products",
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify FTA opportunities for pharmaceutical products and eligible healthcare exports.",
                  "Analyze product classification, HS Codes, and applicable preferential tariffs.",
                  "Understand Rules of Origin and Certificate of Origin requirements.",
                  "Navigate relevant export-import documentation and destination-market regulations.",
                  "Identify potential international markets and trade partnerships."
                ]
              },
              {
                num: "2", title: "Agriculture", sub: "Agriculture & Agri-Products",
                img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify preferential market access opportunities for eligible agricultural products.",
                  "Analyze product-specific tariffs and applicable trade agreements.",
                  "Understand Rules of Origin and Certificate of Origin requirements.",
                  "Review relevant export documentation and destination-market requirements.",
                  "Explore international buyers, importers, and agri-trade partnerships."
                ]
              },
              {
                num: "3", title: "Textiles", sub: "Textiles, Apparel & Technical Textiles",
                img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify FTA opportunities for textiles, fabrics, garments, and related products.",
                  "Assess HS Codes, preferential tariff rates, and potential duty savings.",
                  "Evaluate Rules of Origin, sourcing criteria, and product eligibility.",
                  "Understand relevant customs documentation and compliance requirements.",
                  "Prioritize international markets based on tariff advantages and trade potential."
                ]
              },
              {
                num: "4", title: "Engineering & Automobile", sub: "Engineering Goods, Automotive & Components",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                items: [
                  "Identify FTA opportunities for engineering goods, automotive products, and components.",
                  "Compare standard and preferential tariffs for eligible product categories.",
                  "Assess Rules of Origin, component sourcing, and supply-chain considerations.",
                  "Understand applicable trade documentation and customs procedures.",
                  "Explore international buyers, distributors, manufacturers, and strategic trade partners."
                ]
              }
            ].map((sector, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-[#F8F9FA] border border-gray-200 rounded-[2.5rem] p-6 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
                  <div className="h-56 relative rounded-[2rem] overflow-hidden mb-6">
                    <img src={sector.img} alt={sector.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white text-[#111827] text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm">
                      {sector.num}. {sector.title}
                    </div>
                  </div>
                  <div className="px-2 pb-2 flex-grow flex flex-col">
                    <h3 className="text-xl font-black text-[#111827] mb-1">{sector.title}</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">{sector.sub}</p>
                    <ul className="space-y-3 mb-6">
                      {sector.items.map((item, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-gray-600">
                          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#111827] stroke-[3]" />
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[11px] text-gray-400 italic bg-gray-50 px-6 py-3 rounded-full border border-gray-200 inline-block">
              *All opportunities are subject to applicable trade agreements, product classification, Rules of Origin, tariff schedules, and destination-market requirements.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER - Centralised Grid */}
      <section id="deliverables" className="py-24 px-6 bg-[#F4F5F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3 border border-gray-200 rounded-full px-3 py-1 bg-white">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111827] mb-6">
              What We Deliver
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-3xl">
              The FTA Accelerator transforms complex trade agreement requirements into a focused, outcome-driven execution program. By combining trade intelligence, tariff analysis, regulatory guidance, and institutional trade networks, participating businesses can identify preferential market access opportunities, improve trade competitiveness, and make informed export-import decisions across our four focus sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: "INSIGHTS", title: "FTA & Market Intelligence", icon: <Globe className="w-6 h-6 text-[#111827]" />,
                items: [
                  "Country-wise FTA opportunity mapping and trade agreement analysis.",
                  "Product-level HS Code and preferential tariff assessment.",
                  "Sector-specific market selection and export-import opportunity identification.",
                  "Tariff comparison and potential duty savings analysis."
                ]
              },
              {
                tag: "COMPLIANCE", title: "Trade Regulations & Rules of Origin", icon: <ShieldCheck className="w-6 h-6 text-[#111827]" />,
                items: [
                  "Rules of Origin assessment and product eligibility guidance.",
                  "Certificate of Origin requirements and documentation support.",
                  "Customs procedures and trade compliance guidance.",
                  "FTA-specific regulatory requirements and documentation checklists."
                ]
              },
              {
                tag: "PARTNERS", title: "Trade Partnerships & Market Access", icon: <Handshake className="w-6 h-6 text-[#111827]" />,
                items: [
                  "Curated introductions to relevant importers, exporters, and trade partners.",
                  "B2B matchmaking and bilateral trade engagement opportunities.",
                  "Connections with industry associations and institutional stakeholders.",
                  "Commercial negotiation support and partnership facilitation."
                ]
              },
              {
                tag: "OPTIMIZATION", title: "FTA & Trade Optimization", icon: <TrendingUp className="w-6 h-6 text-[#111827]" />,
                items: [
                  "Identification of eligible preferential tariff opportunities.",
                  "Standard duty versus preferential duty comparison.",
                  "Potential customs duty savings assessment.",
                  "Trade monitoring and market expansion recommendations."
                ]
              }
            ].map((block, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-white border border-gray-200 rounded-[2rem] p-8 h-full flex flex-col group hover:shadow-lg hover:border-[#ccff00] transition-all">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#111827] uppercase bg-gray-100 px-3 py-1 rounded-full">{block.tag}</span>
                    <div className="w-12 h-12 rounded-full bg-[#ccff00] flex items-center justify-center">{block.icon}</div>
                  </div>
                  <h3 className="text-2xl font-black text-[#111827] mb-6">{block.title}</h3>
                  <ul className="space-y-4">
                    {block.items.map((item, i) => (
                      <li key={i} className="text-gray-500 text-sm flex gap-3 items-start leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111827] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE - GIANT NUMBERS WITH HOVER HIGHLIGHT */}
      <section id="timeline" className="py-24 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3 border border-gray-200 rounded-full px-3 py-1">Timeline</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111827] mb-4">
              Timeline & Deliverables
            </h2>
            <p className="text-lg font-bold text-gray-800 mb-2">Accelerated 2–3 Month Program Structure</p>
            <p className="text-gray-500 max-w-3xl leading-relaxed">
              The FTA Accelerator follows a structured 2–3 month execution framework to help businesses across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile identify relevant trade agreements, evaluate preferential tariff opportunities, prepare compliance documentation, and develop actionable market-entry strategies.
            </p>
            <p className="text-[11px] text-gray-400 italic mt-4">
              Program duration and deliverables depend on product eligibility, data availability, regulatory requirements, and participating organizations.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                num: "01", time: "Weeks 1–3", title: "Trade Assessment & Opportunity Mapping",
                content: [
                  { t: "FTA Opportunity Report", d: "Analysis of relevant trade agreements, target markets, product categories, and potential preferential trade benefits." },
                  { t: "Product & HS Code Assessment", d: "Review of product classifications, applicable tariff lines, and relevant country-specific tariff requirements." },
                  { t: "Tariff Optimization Analysis", d: "Comparison of standard and preferential tariff rates wherever verified data is available, with an assessment of potential duty savings." },
                  { t: "Market Prioritization Framework", d: "Identification of priority markets based on trade potential, tariff advantages, regulatory requirements, and market access conditions." }
                ]
              },
              {
                num: "02", time: "Weeks 4–6", title: "Eligibility & Compliance Planning",
                content: [
                  { t: "Rules of Origin Assessment", d: "Preliminary assessment of product origin requirements, qualifying conditions, and agreement-specific eligibility criteria." },
                  { t: "Documentation Roadmap", d: "Checklist of applicable Certificates of Origin, customs documents, and supporting records." },
                  { t: "Trade Compliance Advisory", d: "Guidance on relevant customs procedures, product requirements, and documentation processes." },
                  { t: "Sector-Specific Readiness Assessment", d: "Evaluation of product information, supplier documentation, pricing, and sector-relevant export-import requirements." }
                ]
              },
              {
                num: "03", time: "Weeks 7–10", title: "Trade Facilitation & Partner Engagement",
                content: [
                  { t: "Trade Partner Identification", d: "Identification of relevant importers, exporters, distributors, and potential business partners in priority markets." },
                  { t: "B2B Introductions", d: "Facilitated business meetings and trade engagement opportunities, subject to partner availability." },
                  { t: "Commercial Strategy Support", d: "Guidance on pricing, landed-cost considerations, market positioning, and trade negotiation preparation." },
                  { t: "Documentation Coordination", d: "Support in preparing trade documentation and coordinating with relevant authorized agencies and service providers." }
                ]
              },
              {
                num: "04", time: "Weeks 11–12", title: "Implementation & Expansion Planning",
                content: [
                  { t: "FTA Action Plan", d: "A practical roadmap for claiming applicable preferential tariff benefits, subject to product eligibility and customs requirements." },
                  { t: "Trade Opportunity Report", d: "Consolidated analysis of identified markets, tariff opportunities, compliance requirements, and recommended next steps." },
                  { t: "Market Activation Support", d: "Guidance for initiating priority trade engagements and progressing qualified business opportunities." },
                  { t: "Post-Program Advisory", d: "Follow-up guidance for improvement, partner engagement, and future market expansion planning." }
                ]
              }
            ].map((phase, idx) => (
              <ScrollReveal key={idx} delay={0.1} direction="up">
                <div className="bg-[#F8F9FA] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group border border-gray-100 hover:border-[#ccff00] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
                  
                  {/* GIANT NUMBER: Turns dark (black watermark) on hover and slightly scales */}
                  <span className="absolute -left-6 -top-10 text-[180px] font-black text-white group-hover:text-[#111827] opacity-100 group-hover:opacity-[0.07] transition-all duration-500 select-none pointer-events-none z-0 transform origin-top-left group-hover:scale-105 group-hover:-rotate-2">
                    {phase.num}
                  </span>
                  
                  <div className="md:w-1/3 relative z-10">
                    <span className="bg-[#ccff00] text-[#111827] text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4 shadow-sm group-hover:shadow-md transition-all">
                      {phase.time}
                    </span>
                    <h3 className="text-2xl font-black text-[#111827] leading-snug">{phase.title}</h3>
                  </div>

                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                    {phase.content.map((item, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <strong className="block text-sm font-bold text-[#111827] mb-1">{item.t}</strong>
                        <span className="text-sm text-gray-500 leading-relaxed block">{item.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLMENT & ENGAGEMENTS - Centralised */}
      <section id="enrollment" className="py-24 px-6 bg-[#F4F5F7]">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          
          {/* Enrollment */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3 border border-gray-200 rounded-full px-3 py-1 bg-white">Gateway</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111827] mb-4">
              Program Enrollment
            </h2>
            <p className="text-lg font-bold text-gray-800 mb-2">Application Questionnaires</p>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Select the appropriate phase below. You will be redirected to the dedicated portal to complete your application securely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {[
                { title: "Initial Questionnaire", desc: "Basic company details, business profile, focus sector, product categories, target markets, and export-import readiness assessment.", link: "Start Assessment" },
                { title: "Phase 1 Questionnaire", desc: "Detailed product information, HS Codes, current trade markets, pricing, origin details, sector-specific requirements, and FTA opportunity assessment.", link: "Start Phase 1" },
                { title: "Phase 2 Questionnaire", desc: "Trade compliance requirements, Rules of Origin documentation, target market selection, and potential trade partner engagement.", link: "Start Phase 2" },
                { title: "Phase 3 Questionnaire", desc: "Trade execution planning, commercial terms, preferential tariff implementation readiness, and market development priorities.", link: "Start Phase 3" }
              ].map((q, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className="bg-white border border-gray-200 rounded-[2rem] p-8 h-full flex flex-col justify-between hover:shadow-xl hover:border-[#ccff00] transition-all cursor-pointer group">
                    <div>
                      <h3 className="text-xl font-black text-[#111827] mb-4">{q.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-8">{q.desc}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#111827]">{q.link}</span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ccff00] transition-colors">
                        <ArrowRight className="w-4 h-4 text-[#111827]" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Engagements */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3 border border-gray-200 rounded-full px-3 py-1 bg-white">Strategic Connect Programs</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111827] mb-6">
              Engagements & Networking
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-3xl">
              Facilitating cross-border trade opportunities through focused business engagements, institutional connections, and targeted market access initiatives across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full text-left">
              <ScrollReveal direction="left">
                <div className="bg-[#111827] text-white p-10 md:p-14 rounded-[2.5rem] h-full flex flex-col shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/10 blur-[80px] rounded-full pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-4">Exclusive One-on-One Engagements</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-10">
                      Personalized consultations designed to understand each company's business objectives and identify relevant FTA opportunities. These engagements focus on product eligibility, tariff advantages, compliance requirements, and actionable strategies for international market expansion.
                    </p>
                    <ul className="space-y-4 mb-10">
                      {[
                        "FTA Opportunity Assessment",
                        "Product-Level Tariff & HS Code Guidance",
                        "Sector-Specific Trade Requirements",
                        "Rules of Origin and Compliance Advisory",
                        "Trade Partner Identification",
                        "Long-Term Market Expansion Planning"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="relative z-10 bg-[#ccff00] text-[#111827] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-colors w-max mt-auto">
                    Engagement Meeting 1
                  </button>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="bg-white border border-gray-200 p-10 md:p-14 rounded-[2.5rem] h-full flex flex-col shadow-sm">
                  <h3 className="text-3xl font-black text-[#111827] mb-4">Interactive Group Sessions</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-10">
                    Seminars, expert-led discussions, trade workshops, and business networking sessions designed to connect participants with exporters, importers, industry experts, and institutional stakeholders.
                  </p>
                  <ul className="space-y-4 flex-grow">
                    {[
                      "FTA awareness and preferential trade workshops.",
                      "Sector-focused discussions for pharmaceuticals, agriculture, textiles, and engineering & automobile.",
                      "Expert sessions on tariffs and Rules of Origin.",
                      "Bilateral trade opportunity presentations.",
                      "B2B networking and business matchmaking.",
                      "Practical sessions on trade documentation and compliance."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#111827] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT FORM - Centralised Block */}
      <section id="contact" className="py-24 px-6 bg-white border-y border-gray-200">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3 border border-gray-200 rounded-full px-3 py-1 bg-gray-50 w-max mx-auto">Contact Form</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111827] mb-4">
              Application Request
            </h2>
            <p className="text-gray-500">
              Complete the form below to request program details, eligibility requirements, engagement options, and enrollment information.
            </p>
          </div>

          <ScrollReveal delay={0.2} direction="up" className="w-full">
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="bg-[#F8F9FA] p-8 md:p-12 rounded-[2.5rem] border border-gray-200 space-y-6 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Your Email</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Company / Organization Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Sector</label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all appearance-none cursor-pointer">
                    <option>Pharmaceuticals</option>
                    <option>Agriculture</option>
                    <option>Textiles</option>
                    <option>Engineering & Automobile</option>
                  </select>
                  <ChevronRight className="w-4 h-4 text-gray-400 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Product Category / HS Code</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Target Export or Import Markets</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Your Message</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#111827] text-white font-black rounded-2xl text-xs uppercase tracking-widest py-5 hover:bg-black transition-colors mt-4"
              >
                Submit Now
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827] py-12 text-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center font-black text-[10px] mb-6">
            FTA
          </div>
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">
            &copy; 2026 FTA Accelerator. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}