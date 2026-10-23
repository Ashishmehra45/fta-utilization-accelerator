"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Download, Check, Globe, ShieldCheck, 
  Handshake, TrendingUp, ArrowUpRight, Scale, 
  FileCheck2, Building2, Ship, Layers, ChevronRight
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
    <div className="min-h-screen bg-[#F4F5F7] text-[#0F141C] font-sans selection:bg-[#BE123C] selection:text-white overflow-x-hidden">
      
      {/* SWISS ARCHITECTURAL HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#F4F5F7]/90 backdrop-blur-xl border-b border-[#D8DCE3]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#BE123C] text-white flex items-center justify-center font-black text-sm tracking-tighter">
              FTA
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#0F141C] leading-none">
                FTA ACCELERATOR
              </span>
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#64748B] uppercase mt-1">
                Preferential Trade Desk
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-9 text-xs font-bold tracking-[0.16em] uppercase text-[#475569]">
            <a href="#sectors" className="hover:text-[#BE123C] transition-colors">Focus Sectors</a>
            <a href="#deliverables" className="hover:text-[#BE123C] transition-colors">Deliverables</a>
            <a href="#timeline" className="hover:text-[#BE123C] transition-colors">Timeline</a>
            <a href="#enrollment" className="hover:text-[#BE123C] transition-colors">Enrollment</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-[#0F141C] text-white px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#BE123C] transition-colors flex items-center gap-2"
          >
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 px-6 min-h-[95vh] flex flex-col items-center justify-center border-b border-[#D8DCE3] overflow-hidden">
        
        {/* SYNCED BACKGROUND PHOTO */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85" 
            alt="Global Container Shipping Network" 
            className="w-full h-full object-cover object-center grayscale contrast-125 opacity-[0.22] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,245,247,0.45)_0%,rgba(244,245,247,0.92)_75%,#F4F5F7_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F5F7]/80 via-transparent to-[#F4F5F7]" />
        </div>

        <div 
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(#0F141C 1px, transparent 1px), linear-gradient(90deg, #0F141C 1px, transparent 1px)', backgroundSize: '72px 72px' }} 
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <ScrollReveal delay={0.05} direction="up">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-[#D8DCE3] shadow-sm mb-8">
              <span className="w-2 h-2 bg-[#BE123C]" />
              <span className="text-xs font-extrabold tracking-[0.22em] text-[#0F141C] uppercase">
                Flagship Program
              </span>
            </div>
          </ScrollReveal>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#0F141C] leading-[1.03] mb-6">
            <DropInText text="FTA  Accelerator" />
            <br />
            <DropInText text=" Program" className="text-[#BE123C]" />
          </h1>

          <ScrollReveal delay={0.2} direction="up" className="max-w-4xl mx-auto">
            <p className="text-xl md:text-3xl font-bold text-[#1E293B] mb-6 leading-snug tracking-tight">
              Unlock Preferential Trade Benefits. Accelerate Your Global Market Access.
            </p>
            <p className="text-base md:text-lg text-[#475569] mb-10 leading-relaxed max-w-3xl mx-auto font-medium bg-white/80 backdrop-blur-md p-6 border border-[#D8DCE3] shadow-sm">
              Institutional-grade support for exporters, importers, and businesses across{" "}
              <strong className="text-[#0F141C] font-bold underline decoration-[#BE123C] decoration-2 underline-offset-4">
                Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile
              </strong>{" "}
              to identify Free Trade Agreement (FTA) opportunities, optimize customs duties, navigate Rules of Origin, and strengthen cross-border trade through market intelligence, regulatory expertise, and strategic trade partnerships.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-[#BE123C] text-white px-9 py-4 font-bold text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-3 hover:bg-[#9F1239] transition-all shadow-lg shadow-[#BE123C]/25 hover:-translate-y-1"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <button className="w-full sm:w-auto bg-white border border-[#CBD5E1] text-[#0F141C] px-9 py-4 font-bold text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-3 hover:border-[#0F141C] transition-all shadow-sm hover:-translate-y-1">
              <Download className="w-4 h-4 text-[#BE123C]" /> Download Brochure
            </button>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#0F141C] text-white border border-[#1E293B] shadow-2xl divide-y sm:divide-y-0 sm:divide-x divide-[#1E293B]">
              {[
                { icon: <Scale className="w-4 h-4 text-[#BE123C]" />, k: "WHO IT'S FOR", v: "Exporters, Importers & Manufacturers" },
                { icon: <TrendingUp className="w-4 h-4 text-[#BE123C]" />, k: "CORE OUTCOME", v: "Preferential Tariff & Duty Savings" },
                { icon: <FileCheck2 className="w-4 h-4 text-[#BE123C]" />, k: "COMPLIANCE", v: "Rules of Origin & CoO Readiness" },
                { icon: <Ship className="w-4 h-4 text-[#BE123C]" />, k: "EXECUTION", v: "2–3 Month Structured Framework" }
              ].map((m, i) => (
                <div key={i} className="p-5 text-left flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    {m.icon}
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#94A3B8] uppercase">{m.k}</span>
                  </div>
                  <span className="text-sm font-bold text-white leading-snug">{m.v}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOCUS SECTORS */}
      <section id="sectors" className="py-28 px-6 bg-white border-b border-[#D8DCE3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-[#BE123C] uppercase block mb-3">
                01 // Priority Industries
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F141C] mb-4">
              <DropInText text="Our Focus Sectors" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-lg font-bold text-[#1E293B] mb-3">
                Accelerating FTA Utilization Across Four Key Sectors
              </p>
              <p className="text-[#475569] leading-relaxed">
                The FTA Utilization Accelerator supports businesses across four priority sectors, helping them identify applicable trade agreements, evaluate preferential tariff benefits, understand product-specific compliance requirements, and explore international market opportunities.
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
                  className="bg-[#F4F5F7] border border-[#D8DCE3] hover:border-[#0F141C] transition-all duration-300 h-full flex flex-col group shadow-sm hover:shadow-2xl overflow-hidden"
                >
                  <div className="h-44 relative bg-[#0F141C] overflow-hidden">
                    <img 
                      src={sector.img} 
                      alt={sector.title} 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F141C] via-[#0F141C]/40 to-transparent" />
                    <div className="absolute top-4 left-6 bg-[#BE123C] text-white text-[11px] font-extrabold tracking-[0.2em] px-3 py-1 uppercase">
                      Sector {sector.num}
                    </div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{sector.title}</h3>
                      <p className="text-xs font-bold tracking-wider uppercase text-[#CBD5E1] mt-0.5">{sector.sub}</p>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex-grow">
                    <ul className="space-y-4">
                      {sector.items.map((item, i) => (
                        <li key={i} className="flex gap-3.5 items-start text-[#334155] text-sm md:text-base">
                          <span className="w-5 h-5 bg-[#BE123C]/10 text-[#BE123C] flex items-center justify-center shrink-0 mt-0.5">
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
            <p className="text-xs md:text-sm text-[#64748B] italic bg-[#F4F5F7] px-6 py-3 border border-[#D8DCE3] inline-block">
              *All opportunities are subject to applicable trade agreements, product classification, Rules of Origin, tariff schedules, and destination-market requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section id="deliverables" className="py-28 px-6 bg-[#0F141C] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-[#F43F5E] uppercase block mb-3">
                02 // Core Capabilities
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              <DropInText text="What We Deliver" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                The FTA Utilization Accelerator transforms complex trade agreement requirements into a focused, outcome-driven execution program. By combining trade intelligence, tariff analysis, regulatory guidance, and institutional trade networks, participating businesses can identify preferential market access opportunities, improve trade competitiveness, and make informed export-import decisions across our four focus sectors.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: "INSIGHTS",
                title: "FTA & Market Intelligence",
                icon: <Globe className="w-6 h-6 text-[#F43F5E]" />,
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
                icon: <ShieldCheck className="w-6 h-6 text-[#F43F5E]" />,
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
                icon: <Handshake className="w-6 h-6 text-[#F43F5E]" />,
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
                icon: <TrendingUp className="w-6 h-6 text-[#F43F5E]" />,
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
                  className="bg-[#161D28] border border-[#263040] hover:border-[#BE123C] p-8 h-full flex flex-col justify-between transition-all duration-300 relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#BE123C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#263040]">
                      <span className="text-xs font-extrabold tracking-[0.2em] text-[#F43F5E] uppercase">{block.tag}</span>
                      {block.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-6 leading-snug">{block.title}</h3>
                    <ul className="space-y-4">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-[#CBD5E1] text-sm flex gap-3 items-start leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-[#BE123C] mt-2 shrink-0" />
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

      {/* TIMELINE & DELIVERABLES - UNIQUE STACKED CARDS GRID (REPLACED ALTERNATING SNAKE) */}
      <section id="timeline" className="py-28 px-6 bg-[#F4F5F7] border-b border-[#D8DCE3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-[#BE123C] uppercase block mb-3">
                03 // Execution Architecture
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F141C] mb-4">
              <DropInText text="Timeline & Deliverables" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-lg font-bold text-[#1E293B] mb-4">Accelerated 2–3 Month Program Structure</p>
              <p className="text-[#475569] leading-relaxed">
                The FTA Utilization Accelerator follows a structured 2–3 month execution framework to help businesses across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile identify relevant trade agreements, evaluate preferential tariff opportunities, prepare compliance documentation, and develop actionable market-entry strategies.
              </p>
            </ScrollReveal>
          </div>

          {/* UNIQUE 4-COLUMN STACKED METRIC GRID (Brand new alignment & layout) */}
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
                  className="bg-white border border-[#D8DCE3] border-t-4 border-t-[#BE123C] p-8 h-full flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="bg-[#BE123C] text-white text-[11px] font-extrabold tracking-widest uppercase px-3 py-1">
                        {phase.time}
                      </span>
                      <span className="text-xs font-black tracking-widest text-[#94A3B8]">
                        {phase.stage}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#0F141C] mb-6 leading-snug">{phase.title}</h3>
                    <div className="space-y-4">
                      {phase.content.map((item, i) => (
                        <div key={i} className="bg-[#F4F5F7] p-3.5 border-l-2 border-[#0F141C]">
                          <strong className="block text-xs font-bold text-[#0F141C] mb-1">{item.t}</strong>
                          <span className="text-xs text-[#475569] leading-relaxed block">{item.d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" className="mt-16 text-center">
            <p className="text-xs md:text-sm text-[#64748B] italic">
              *Program duration and deliverables depend on product eligibility, data availability, regulatory requirements, and participating organizations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROGRAM ENROLLMENT & ENGAGEMENTS */}
      <section id="enrollment" className="py-28 px-6 bg-white border-b border-[#D8DCE3]">
        <div className="max-w-7xl mx-auto">
          
          {/* Enrollment */}
          <div className="mb-28">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal direction="up">
                <span className="text-xs font-extrabold tracking-[0.22em] text-[#BE123C] uppercase block mb-3">
                  04 // Application Gateway
                </span>
              </ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F141C] mb-4">
                <DropInText text="Program Enrollment" />
              </h2>
              <ScrollReveal delay={0.15} direction="up">
                <p className="text-lg font-bold text-[#1E293B] mb-2">Application Questionnaires</p>
                <p className="text-[#475569]">
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
                    className="bg-[#F4F5F7] border border-[#D8DCE3] hover:border-[#BE123C] p-8 h-full flex flex-col justify-between transition-all group cursor-pointer shadow-sm hover:shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-extrabold tracking-[0.2em] text-white bg-[#0F141C] group-hover:bg-[#BE123C] px-3 py-1 uppercase transition-colors">
                          PHASE {q.step}
                        </span>
                        <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-[#BE123C] group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-xl font-black text-[#0F141C] mb-4">{q.title}</h3>
                      <p className="text-sm text-[#475569] leading-relaxed mb-8">{q.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-[#D8DCE3] text-xs font-extrabold uppercase tracking-[0.15em] text-[#0F141C] group-hover:text-[#BE123C] transition-colors">
                      {q.link}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Engagements & Networking */}
          <div className="pt-20 border-t border-[#D8DCE3]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal direction="up">
                <span className="text-xs font-extrabold tracking-[0.22em] text-[#BE123C] uppercase block mb-3">
                  Strategic Connect Programs
                </span>
              </ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F141C] mb-6">
                <DropInText text="Engagements & Networking" />
              </h2>
              <ScrollReveal delay={0.15} direction="up">
                <p className="text-[#475569] leading-relaxed">
                  Facilitating cross-border trade opportunities through focused business engagements, institutional connections, and targeted market access initiatives across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-[#0F141C] text-white p-10 md:p-12 h-full flex flex-col justify-between shadow-xl border-t-4 border-[#BE123C]"
                >
                  <div>
                    <span className="text-xs font-extrabold tracking-[0.2em] text-[#F43F5E] uppercase block mb-2">Bespoke Advisory</span>
                    <h3 className="text-3xl font-black mb-4 tracking-tight">Exclusive One-on-One Engagements</h3>
                    <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-8">
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
                        <li key={i} className="flex items-center gap-3 text-sm text-[#F4F5F7] font-medium">
                          <span className="w-1.5 h-1.5 bg-[#BE123C]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-[#BE123C] text-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.18em] hover:bg-[#9F1239] transition-colors w-full sm:w-max">
                    Engagement Meeting 1
                  </button>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-[#F4F5F7] border border-[#D8DCE3] border-t-4 border-t-[#0F141C] p-10 md:p-12 h-full flex flex-col justify-between shadow-md"
                >
                  <div>
                    <span className="text-xs font-extrabold tracking-[0.2em] text-[#64748B] uppercase block mb-2">Industry Forums</span>
                    <h3 className="text-3xl font-black text-[#0F141C] mb-4 tracking-tight">Interactive Group Sessions</h3>
                    <p className="text-[#475569] text-sm md:text-base leading-relaxed mb-8">
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
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#1E293B] font-medium">
                          <span className="w-1.5 h-1.5 bg-[#BE123C] mt-2 shrink-0" />
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
      <section id="contact" className="py-28 px-6 bg-[#F4F5F7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal direction="up">
              <span className="text-xs font-extrabold tracking-[0.22em] text-[#BE123C] uppercase block mb-3">
                05 // Contact Form
              </span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F141C] mb-4">
              <DropInText text="Application Request for the Accelerator" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-[#475569]">
                Complete the form below to request program details, eligibility requirements, engagement options, and enrollment information.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25} direction="up">
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="bg-white p-8 md:p-12 border border-[#D8DCE3] border-t-4 border-t-[#BE123C] shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Your Name</label>
                  <input type="text" className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Your Email</label>
                  <input type="email" className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Company / Organization Name</label>
                  <input type="text" className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Sector</label>
                <select className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors cursor-pointer">
                  <option>Pharmaceuticals</option>
                  <option>Agriculture</option>
                  <option>Textiles</option>
                  <option>Engineering & Automobile</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Product Category / HS Code</label>
                  <input type="text" className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Target Export or Import Markets</label>
                  <input type="text" className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-widest text-[#0F141C] mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-[#F4F5F7] border border-[#CBD5E1] px-4 py-3.5 text-[#0F141C] focus:outline-none focus:border-[#BE123C] transition-colors resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#BE123C] text-white font-extrabold text-xs uppercase tracking-[0.2em] py-5 hover:bg-[#9F1239] transition-colors shadow-lg"
              >
                Submit Now
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* SINGLE-LINE MINIMAL FOOTER */}
      <footer className="bg-[#0F141C] py-6 text-center border-t border-[#1E293B]">
        <p className="text-[#94A3B8] text-xs md:text-sm tracking-widest uppercase font-semibold">
          &copy; 2026 FTA Utilization Accelerator. All rights reserved.
        </p>
      </footer>

    </div>
  );
}