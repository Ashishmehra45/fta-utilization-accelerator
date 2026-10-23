"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Download, Check, Globe, ShieldCheck, 
  Handshake, TrendingUp, ArrowUpRight, Scale, 
  FileCheck2, Ship, ChevronRight
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
    left: { x: -45, y: 0 },
    right: { x: 45, y: 0 },
    none: { x: 0, y: 0 }
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DropInText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
      className={cn("inline-flex flex-wrap justify-center gap-x-[0.26em]", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: -35, filter: "blur(4px)" },
            visible: { 
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)",
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } 
            }
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// --- Main Page Component ---
export default function FTAAcceleratorPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-violet-500 selection:text-white overflow-x-hidden">
      
      {/* NEO-MODERN HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-500 rounded-xl text-white flex items-center justify-center font-black text-sm tracking-tighter shadow-lg shadow-violet-500/20">
              FTA
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-zinc-900 leading-none">
                ACCELERATOR
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-violet-600 uppercase mt-1">
                Preferential Trade Desk
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-9 text-xs font-bold tracking-[0.16em] uppercase text-zinc-500">
            <a href="#sectors" className="hover:text-violet-600 transition-colors">Focus Sectors</a>
            <a href="#deliverables" className="hover:text-violet-600 transition-colors">Deliverables</a>
            <a href="#timeline" className="hover:text-violet-600 transition-colors">Timeline</a>
            <a href="#enrollment" className="hover:text-violet-600 transition-colors">Enrollment</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-zinc-900 text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.16em] uppercase hover:bg-violet-600 transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO SECTION - Pitch Black High Impact */}
      <section className="relative pt-36 pb-24 px-6 min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden">
        
        {/* GLOWING ABSTRACT MESH BACKGROUND */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-[120px] absolute top-[-10%] left-[-10%]" />
          <div className="w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] absolute bottom-[-10%] right-[-10%]" />
          <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <ScrollReveal delay={0.05} direction="up">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              
              <span className="text-xs font-extrabold tracking-[0.22em] text-white uppercase">
                Flagship Program
              </span>
            </div>
          </ScrollReveal>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.05] mb-6">
            <DropInText text="FTA Accelerator" />
            <br />
            <DropInText text="Program" className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500" />
          </h1>

          <ScrollReveal delay={0.2} direction="up" className="max-w-4xl mx-auto">
            <p className="text-xl md:text-3xl font-bold text-zinc-300 mb-8 leading-snug tracking-tight">
              Unlock Preferential Trade Benefits. Accelerate Your Global Market Access.
            </p>
            <p className="text-base md:text-lg text-zinc-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium bg-zinc-900/50 backdrop-blur-xl p-6 rounded-3xl border border-zinc-800">
              Institutional-grade support for exporters, importers, and businesses across{" "}
              <strong className="text-white font-bold">
                Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile
              </strong>{" "}
              to identify Free Trade Agreement (FTA) opportunities, optimize customs duties, navigate Rules of Origin, and strengthen cross-border trade through market intelligence, regulatory expertise, and strategic trade partnerships.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up" className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-16">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-9 py-4 rounded-full font-bold text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-violet-500/25"
            >
              Start Application <ArrowRight className="w-4 h-4" />
            </a>
            <button className="w-full sm:w-auto bg-zinc-900 border border-zinc-700 text-white px-9 py-4 rounded-full font-bold text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-3 hover:bg-zinc-800 transition-colors">
              <Download className="w-4 h-4 text-violet-400" /> Download Brochure
            </button>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-800 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 overflow-hidden shadow-2xl">
              {[
                { icon: <Scale className="w-5 h-5 text-violet-400" />, k: "WHO IT'S FOR", v: "Exporters, Importers & Manufacturers" },
                { icon: <TrendingUp className="w-5 h-5 text-violet-400" />, k: "CORE OUTCOME", v: "Preferential Tariff & Duty Savings" },
                { icon: <FileCheck2 className="w-5 h-5 text-violet-400" />, k: "COMPLIANCE", v: "Rules of Origin & CoO Readiness" },
                { icon: <Ship className="w-5 h-5 text-violet-400" />, k: "EXECUTION", v: "2–3 Month Structured Framework" }
              ].map((m, i) => (
                <div key={i} className="p-6 text-left flex flex-col justify-between hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/10 p-2 rounded-xl">{m.icon}</div>
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-zinc-500 uppercase">{m.k}</span>
                  </div>
                  <span className="text-sm font-bold text-zinc-200 leading-snug">{m.v}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOCUS SECTORS */}
      <section id="sectors" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-violet-600 uppercase block mb-3">
                01 // Priority Industries
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              <DropInText text="Our Focus Sectors" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-lg font-bold text-zinc-700 mb-3">
                Accelerating FTA  Across Four Key Sectors
              </p>
              <p className="text-zinc-500 leading-relaxed">
                The FTA  Accelerator supports businesses across four priority sectors, helping them identify applicable trade agreements, evaluate preferential tariff benefits, understand product-specific compliance requirements, and explore international market opportunities.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Pharmaceuticals",
                sub: "Pharmaceuticals & Healthcare Products",
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
                items: [
                  "Identify FTA opportunities for pharmaceutical products and eligible healthcare exports.",
                  "Analyze product classification, HS Codes, and applicable preferential tariffs.",
                  "Understand Rules of Origin and Certificate of Origin requirements.",
                  "Navigate relevant export-import documentation and destination-market regulations.",
                  "Identify potential international markets and trade partnerships."
                ]
              },
              {
                num: "02",
                title: "Agriculture",
                sub: "Agriculture & Agri-Products",
                img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
                items: [
                  "Identify preferential market access opportunities for eligible agricultural products.",
                  "Analyze product-specific tariffs and applicable trade agreements.",
                  "Understand Rules of Origin and Certificate of Origin requirements.",
                  "Review relevant export documentation and destination-market requirements.",
                  "Explore international buyers, importers, and agri-trade partnerships."
                ]
              },
              {
                num: "03",
                title: "Textiles",
                sub: "Textiles, Apparel & Technical Textiles",
                img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=900&q=80",
                items: [
                  "Identify FTA opportunities for textiles, fabrics, garments, and related products.",
                  "Assess HS Codes, preferential tariff rates, and potential duty savings.",
                  "Evaluate Rules of Origin, sourcing criteria, and product eligibility.",
                  "Understand relevant customs documentation and compliance requirements.",
                  "Prioritize international markets based on tariff advantages and trade potential."
                ]
              },
              {
                num: "04",
                title: "Engineering & Automobile",
                sub: "Engineering Goods, Automotive & Components",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
                items: [
                  "Identify FTA opportunities for engineering goods, automotive products, and components.",
                  "Compare standard and preferential tariffs for eligible product categories.",
                  "Assess Rules of Origin, component sourcing, and supply-chain considerations.",
                  "Understand applicable trade documentation and customs procedures.",
                  "Explore international buyers, distributors, manufacturers, and strategic trade partners."
                ]
              }
            ].map((sector, idx) => (
              <ScrollReveal key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-zinc-50 border border-zinc-200 rounded-3xl hover:border-violet-300 transition-all duration-300 h-full flex flex-col group shadow-sm hover:shadow-xl overflow-hidden"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={sector.img} 
                      alt={sector.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                    <div className="absolute top-5 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-extrabold tracking-[0.2em] px-4 py-1.5 rounded-full uppercase shadow-md">
                      Sector {sector.num}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{sector.title}</h3>
                      <p className="text-xs font-bold tracking-wider uppercase text-violet-200 mt-1">{sector.sub}</p>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex-grow bg-white">
                    <ul className="space-y-4">
                      {sector.items.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start text-zinc-600 text-sm md:text-base">
                          <span className="w-6 h-6 bg-violet-100 rounded-full text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <span className="leading-relaxed font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" className="mt-14 text-center">
            <p className="text-xs md:text-sm text-zinc-500 italic bg-zinc-50 px-6 py-4 rounded-2xl border border-zinc-200 inline-block">
              *All opportunities are subject to applicable trade agreements, product classification, Rules of Origin, tariff schedules, and destination-market requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE DELIVER - Pitch Black Section */}
      <section id="deliverables" className="py-28 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-fuchsia-500 uppercase block mb-3">
                02 // Core Capabilities
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              <DropInText text="What We Deliver" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-zinc-400 text-lg leading-relaxed">
                The FTA Utilization Accelerator transforms complex trade agreement requirements into a focused, outcome-driven execution program. By combining trade intelligence, tariff analysis, regulatory guidance, and institutional trade networks, participating businesses can identify preferential market access opportunities, improve trade competitiveness, and make informed export-import decisions across our four focus sectors.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: "INSIGHTS",
                title: "FTA & Market Intelligence",
                icon: <Globe className="w-6 h-6 text-fuchsia-500" />,
                items: [
                  "Country-wise FTA opportunity mapping and trade agreement analysis.",
                  "Product-level HS Code and preferential tariff assessment.",
                  "Sector-specific market selection and export-import opportunity identification.",
                  "Tariff comparison and potential duty savings analysis."
                ]
              },
              {
                tag: "COMPLIANCE",
                title: "Trade Regulations & Rules of Origin",
                icon: <ShieldCheck className="w-6 h-6 text-fuchsia-500" />,
                items: [
                  "Rules of Origin assessment and product eligibility guidance.",
                  "Certificate of Origin requirements and documentation support.",
                  "Customs procedures and trade compliance guidance.",
                  "FTA-specific regulatory requirements and documentation checklists."
                ]
              },
              {
                tag: "PARTNERS",
                title: "Trade Partnerships & Market Access",
                icon: <Handshake className="w-6 h-6 text-fuchsia-500" />,
                items: [
                  "Curated introductions to relevant importers, exporters, and trade partners.",
                  "B2B matchmaking and bilateral trade engagement opportunities.",
                  "Connections with industry associations and institutional stakeholders.",
                  "Commercial negotiation support and partnership facilitation."
                ]
              },
              {
                tag: "OPTIMIZATION",
                title: "FTA Utilization & Trade Optimization",
                icon: <TrendingUp className="w-6 h-6 text-fuchsia-500" />,
                items: [
                  "Identification of eligible preferential tariff opportunities.",
                  "Standard duty versus preferential duty comparison.",
                  "Potential customs duty savings assessment.",
                  "Trade utilization monitoring and market expansion recommendations."
                ]
              }
            ].map((block, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-zinc-900 border border-zinc-800 hover:border-fuchsia-500/50 rounded-3xl p-8 h-full flex flex-col justify-between transition-all duration-300 relative group shadow-lg"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-3xl" />
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                      <span className="text-xs font-extrabold tracking-[0.2em] text-fuchsia-500 bg-fuchsia-500/10 px-3 py-1 rounded-full uppercase">{block.tag}</span>
                      <div className="p-2 bg-zinc-800 rounded-xl">{block.icon}</div>
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-6 leading-snug">{block.title}</h3>
                    <ul className="space-y-4">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-zinc-400 text-sm flex gap-3 items-start leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-2 shrink-0 shadow-[0_0_8px_#EC4899]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE & DELIVERABLES - UNIQUE STACKED CARDS GRID */}
      <section id="timeline" className="py-28 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-violet-600 uppercase block mb-3">
                03 // Execution Architecture
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              <DropInText text="Timeline & Deliverables" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-lg font-bold text-zinc-700 mb-4">Accelerated 2–3 Month Program Structure</p>
              <p className="text-zinc-500 leading-relaxed">
                The FTA Utilization Accelerator follows a structured 2–3 month execution framework to help businesses across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile identify relevant trade agreements, evaluate preferential tariff opportunities, prepare compliance documentation, and develop actionable market-entry strategies.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                time: "Weeks 1–3",
                stage: "PHASE 01",
                title: "Trade Assessment & Opportunity Mapping",
                content: [
                  { t: "FTA Opportunity Report", d: "Analysis of relevant trade agreements, target markets, product categories, and potential preferential trade benefits." },
                  { t: "Product & HS Code Assessment", d: "Review of product classifications, applicable tariff lines, and relevant country-specific tariff requirements." },
                  { t: "Tariff Optimization Analysis", d: "Comparison of standard and preferential tariff rates wherever verified data is available, with an assessment of potential duty savings." },
                  { t: "Market Prioritization Framework", d: "Identification of priority markets based on trade potential, tariff advantages, regulatory requirements, and market access conditions." }
                ]
              },
              {
                time: "Weeks 4–6",
                stage: "PHASE 02",
                title: "Eligibility & Compliance Planning",
                content: [
                  { t: "Rules of Origin Assessment", d: "Preliminary assessment of product origin requirements, qualifying conditions, and agreement-specific eligibility criteria." },
                  { t: "Documentation Roadmap", d: "Checklist of applicable Certificates of Origin, customs documents, and supporting records." },
                  { t: "Trade Compliance Advisory", d: "Guidance on relevant customs procedures, product requirements, and documentation processes." },
                  { t: "Sector-Specific Readiness Assessment", d: "Evaluation of product information, supplier documentation, pricing, and sector-relevant export-import requirements." }
                ]
              },
              {
                time: "Weeks 7–10",
                stage: "PHASE 03",
                title: "Trade Facilitation & Partner Engagement",
                content: [
                  { t: "Trade Partner Identification", d: "Identification of relevant importers, exporters, distributors, and potential business partners in priority markets." },
                  { t: "B2B Introductions", d: "Facilitated business meetings and trade engagement opportunities, subject to partner availability." },
                  { t: "Commercial Strategy Support", d: "Guidance on pricing, landed-cost considerations, market positioning, and trade negotiation preparation." },
                  { t: "Documentation Coordination", d: "Support in preparing trade documentation and coordinating with relevant authorized agencies and service providers." }
                ]
              },
              {
                time: "Weeks 11–12",
                stage: "PHASE 04",
                title: "Implementation & Expansion Planning",
                content: [
                  { t: "FTA Utilization Action Plan", d: "A practical roadmap for claiming applicable preferential tariff benefits, subject to product eligibility and customs requirements." },
                  { t: "Trade Opportunity Report", d: "Consolidated analysis of identified markets, tariff opportunities, compliance requirements, and recommended next steps." },
                  { t: "Market Activation Support", d: "Guidance for initiating priority trade engagements and progressing qualified business opportunities." },
                  { t: "Post-Program Advisory", d: "Follow-up guidance for utilization improvement, partner engagement, and future market expansion planning." }
                ]
              }
            ].map((phase, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" className="h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-white border border-zinc-200 rounded-3xl p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-6">
                      <span className="bg-violet-100 text-violet-600 text-[11px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">
                        {phase.time}
                      </span>
                      <span className="text-xs font-black tracking-widest text-zinc-400">
                        {phase.stage}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-zinc-900 mb-6 leading-snug">{phase.title}</h3>
                    <div className="space-y-4">
                      {phase.content.map((item, i) => (
                        <div key={i} className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                          <strong className="block text-xs font-bold text-zinc-900 mb-1.5">{item.t}</strong>
                          <span className="text-xs text-zinc-500 leading-relaxed block">{item.d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" className="mt-16 text-center">
            <p className="text-xs md:text-sm text-zinc-500 italic">
              *Program duration and deliverables depend on product eligibility, data availability, regulatory requirements, and participating organizations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROGRAM ENROLLMENT & ENGAGEMENTS */}
      <section id="enrollment" className="py-28 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          
          {/* Enrollment */}
          <div className="mb-28">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal direction="up">
                <span className="text-xs font-extrabold tracking-[0.22em] text-violet-600 uppercase block mb-3">
                  04 // Application Gateway
                </span>
              </ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
                <DropInText text="Program Enrollment" />
              </h2>
              <ScrollReveal delay={0.15} direction="up">
                <p className="text-lg font-bold text-zinc-700 mb-2">Application Questionnaires</p>
                <p className="text-zinc-500">
                  Select the appropriate phase below. You will be redirected to the dedicated portal to complete your application securely.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Initial Questionnaire", desc: "Basic company details, business profile, focus sector, product categories, target markets, and export-import readiness assessment.", link: "Start Assessment →" },
                { step: "02", title: "Phase 1 Questionnaire", desc: "Detailed product information, HS Codes, current trade markets, pricing, origin details, sector-specific requirements, and FTA opportunity assessment.", link: "Start Phase 1 →" },
                { step: "03", title: "Phase 2 Questionnaire", desc: "Trade compliance requirements, Rules of Origin documentation, target market selection, and potential trade partner engagement.", link: "Start Phase 2 →" },
                { step: "04", title: "Phase 3 Questionnaire", desc: "Trade execution planning, commercial terms, preferential tariff implementation readiness, and market development priorities.", link: "Start Phase 3 →" }
              ].map((q, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-zinc-50 border border-zinc-200 rounded-3xl hover:border-violet-400 p-8 h-full flex flex-col justify-between transition-all group cursor-pointer shadow-sm hover:shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-extrabold tracking-[0.2em] text-zinc-500 bg-white border border-zinc-200 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 px-4 py-1.5 rounded-full uppercase transition-colors">
                          PHASE {q.step}
                        </span>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-xl font-black text-zinc-900 mb-4">{q.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-8">{q.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-zinc-200 text-xs font-extrabold uppercase tracking-[0.15em] text-zinc-900 group-hover:text-violet-600 transition-colors">
                      {q.link}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Engagements & Networking */}
          <div className="pt-20 border-t border-zinc-200">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal direction="up">
                <span className="text-xs font-extrabold tracking-[0.22em] text-violet-600 uppercase block mb-3">
                  Strategic Connect Programs
                </span>
              </ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
                <DropInText text="Engagements & Networking" />
              </h2>
              <ScrollReveal delay={0.15} direction="up">
                <p className="text-zinc-500 leading-relaxed">
                  Facilitating cross-border trade opportunities through focused business engagements, institutional connections, and targeted market access initiatives across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-black rounded-3xl text-white p-10 md:p-12 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/30 blur-[80px] rounded-full pointer-events-none" />
                  <div className="relative z-10">
                    <span className="text-xs font-extrabold tracking-[0.2em] text-fuchsia-500 uppercase block mb-2">Bespoke Advisory</span>
                    <h3 className="text-3xl font-black mb-4 tracking-tight">Exclusive One-on-One Engagements</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                      Personalized consultations designed to understand each company's business objectives and identify relevant FTA opportunities. These engagements focus on product eligibility, tariff advantages, compliance requirements, and actionable strategies for international market expansion.
                    </p>
                    <ul className="space-y-3.5 mb-10">
                      {[
                        "FTA Opportunity Assessment",
                        "Product-Level Tariff & HS Code Guidance",
                        "Sector-Specific Trade Requirements",
                        "Rules of Origin and Compliance Advisory",
                        "Trade Partner Identification",
                        "Long-Term Market Expansion Planning"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-200 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="relative z-10 bg-white text-black px-8 py-4 rounded-xl text-xs font-extrabold uppercase tracking-[0.18em] hover:bg-zinc-200 transition-colors w-full sm:w-max">
                    Engagement Meeting 1
                  </button>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-zinc-50 border border-zinc-200 rounded-3xl p-10 md:p-12 h-full flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <span className="text-xs font-extrabold tracking-[0.2em] text-zinc-500 uppercase block mb-2">Industry Forums</span>
                    <h3 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">Interactive Group Sessions</h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
                      Seminars, expert-led discussions, trade workshops, and business networking sessions designed to connect participants with exporters, importers, industry experts, and institutional stakeholders.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "FTA awareness and preferential trade workshops.",
                        "Sector-focused discussions for pharmaceuticals, agriculture, textiles, and engineering & automobile.",
                        "Expert sessions on tariffs and Rules of Origin.",
                        "Bilateral trade opportunity presentations.",
                        "B2B networking and business matchmaking.",
                        "Practical sessions on trade documentation and compliance."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-28 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-violet-600 uppercase block mb-3">
                05 // Contact Form
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              <DropInText text="Application Request for the Accelerator" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-zinc-500">
                Complete the form below to request program details, eligibility requirements, engagement options, and enrollment information.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25} direction="up">
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Your Email</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Company / Organization Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Sector</label>
                <div className="relative">
                  <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all appearance-none cursor-pointer">
                    <option>Pharmaceuticals</option>
                    <option>Agriculture</option>
                    <option>Textiles</option>
                    <option>Engineering & Automobile</option>
                  </select>
                  <ChevronRight className="w-4 h-4 text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Product Category / HS Code</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Target Export or Import Markets</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-[0.2em] py-5 transition-transform shadow-lg shadow-violet-500/25 mt-2"
              >
                Submit Now
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="bg-black py-8 text-center border-t border-zinc-900">
        <p className="text-zinc-600 text-xs md:text-sm tracking-widest uppercase font-bold">
          &copy; 2026 FTA Utilization Accelerator. All rights reserved.
        </p>
      </footer>

    </div>
  );
}