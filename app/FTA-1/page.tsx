"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Download, CheckCircle2, Globe2, 
  ShieldCheck, Handshake, TrendingUp, Sparkles, 
  FileCheck, Building2, Ship, Scale, ArrowUpRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Smooth Scroll & Drop Animations ---
const ScrollReveal = ({ 
  children, className, delay = 0, direction = "up" 
}: { 
  children: React.ReactNode, className?: string, delay?: number, direction?: "up" | "left" | "right" | "none" 
}) => {
  const directions = {
    up: { y: 45, x: 0 },
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
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
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
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
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
    <div className="min-h-screen bg-[#F6F5F0] text-[#111C18] font-sans selection:bg-[#062C21] selection:text-[#E5C158] overflow-x-hidden">
      
      {/* FLOATING PILL HEADER */}
      <header className="fixed top-5 inset-x-0 z-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-[#062C21]/95 backdrop-blur-xl text-white border border-white/10 rounded-2xl px-6 h-20 flex items-center justify-between shadow-2xl shadow-[#062C21]/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C59B27] flex items-center justify-center text-[#062C21] font-black text-lg">
              FTA
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block leading-none">FTA Accelerator</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3B8B0] block mt-1">Global Trade Desk</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#D1DDD8]">
            <a href="#sectors" className="hover:text-[#E5C158] transition-colors">Focus Sectors</a>
            <a href="#deliverables" className="hover:text-[#E5C158] transition-colors">Deliverables</a>
            <a href="#timeline" className="hover:text-[#E5C158] transition-colors">Timeline</a>
            <a href="#enrollment" className="hover:text-[#E5C158] transition-colors">Enrollment</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-[#C59B27] text-[#062C21] px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide hover:bg-[#d8ad33] transition-all flex items-center gap-2 shadow-md"
          >
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO SECTION - Executive Center + Maritime Showcase Card */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Subtle Warm Radial Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#C59B27]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <ScrollReveal delay={0.05} direction="up">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#062C21]/5 border border-[#062C21]/15 text-[#062C21] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                Flagship Program
              </div>
            </ScrollReveal>

            <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-[#062C21] leading-[1.06] mb-6">
              <DropInText text="FTA Accelerator " />
              <br />
              <DropInText text="Program" className="text-[#8C6D1F]" />
            </h1>

            <ScrollReveal delay={0.2} direction="up">
              <p className="text-xl md:text-2xl font-semibold text-[#1E352F] mb-6 leading-snug">
                Unlock Preferential Trade Benefits. Accelerate Your Global Market Access.
              </p>
              <p className="text-base md:text-lg text-[#4B5E58] mb-10 leading-relaxed max-w-3xl mx-auto">
                Institutional-grade support for exporters, importers, and businesses across{" "}
                <strong className="text-[#062C21] font-semibold underline decoration-[#C59B27]/60 underline-offset-4">
                  Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile
                </strong>{" "}
                to identify Free Trade Agreement (FTA) opportunities, optimize customs duties, navigate Rules of Origin, and strengthen cross-border trade through market intelligence, regulatory expertise, and strategic trade partnerships.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
              <a 
                href="#contact" 
                className="w-full sm:w-auto bg-[#062C21] text-white px-9 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-[#0A3D2E] transition-all shadow-xl shadow-[#062C21]/15 hover:-translate-y-1"
              >
                Contact Us <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </a>
              <button className="w-full sm:w-auto bg-white border border-[#D5D2C8] text-[#062C21] px-9 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center gap-3 hover:border-[#062C21] transition-all shadow-sm hover:-translate-y-1">
                <Download className="w-4 h-4 text-[#8C6D1F]" /> Download Brochure
              </button>
            </ScrollReveal>
          </div>

          {/* Visual Context Banner - Shows immediately what the portal does */}
          <ScrollReveal delay={0.4} direction="up">
            <div className="relative rounded-3xl overflow-hidden border border-[#062C21]/15 shadow-2xl bg-[#062C21]">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=85" 
                alt="Global Maritime Container Port" 
                className="w-full h-[340px] md:h-[420px] object-cover opacity-45 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062C21] via-[#062C21]/60 to-transparent" />

              {/* Bottom Trade Intelligence Bar */}
              <div className="relative md:absolute bottom-0 inset-x-0 p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#062C21]/90 backdrop-blur-md border-t border-white/10">
                {[
                  { icon: <Scale className="w-5 h-5 text-[#E5C158]" />, label: "CORE FOCUS", val: "Customs Duty Optimization & Tariff Analysis" },
                  { icon: <FileCheck className="w-5 h-5 text-[#E5C158]" />, label: "COMPLIANCE", val: "Rules of Origin & Certificate of Origin" },
                  { icon: <Building2 className="w-5 h-5 text-[#E5C158]" />, label: "4 PRIORITY SECTORS", val: "Pharma, Agri, Textiles & Engineering" },
                  { icon: <Ship className="w-5 h-5 text-[#E5C158]" />, label: "EXECUTION", val: "2–3 Month Structured Trade Program" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-3.5 border-l-2 border-[#C59B27]/40 pl-4">
                    <div className="mt-0.5 shrink-0">{stat.icon}</div>
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.18em] text-[#A3B8B0] block">{stat.label}</span>
                      <span className="text-sm font-semibold text-white mt-1 block leading-snug">{stat.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOCUS SECTORS - Rich Editorial Cards with Image Headers */}
      <section id="sectors" className="py-28 px-6 bg-white border-y border-[#E6E4DC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8C6D1F] uppercase block mb-3">Priority Industries</span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C21] tracking-tight mb-6">
              <DropInText text="Our Focus Sectors" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-lg font-semibold text-[#1E352F] mb-3">
                Accelerating FTA Utilization Across Four Key Sectors
              </p>
              <p className="text-[#5A6B65] leading-relaxed">
                The FTA Utilization Accelerator supports businesses across four priority sectors, helping them identify applicable trade agreements, evaluate preferential tariff benefits, understand product-specific compliance requirements, and explore international market opportunities.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                  className="bg-[#F6F5F0] rounded-3xl overflow-hidden border border-[#E2DFD5] shadow-md hover:shadow-2xl hover:border-[#062C21]/30 transition-all duration-300 h-full flex flex-col group"
                >
                  {/* Card Image Banner */}
                  <div className="h-52 relative overflow-hidden bg-[#062C21]">
                    <img 
                      src={sector.img} 
                      alt={sector.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062C21] via-[#062C21]/30 to-transparent" />
                    <span className="absolute top-4 right-5 bg-[#062C21]/90 backdrop-blur-md text-[#E5C158] border border-white/15 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest">
                      SECTOR {sector.num}
                    </span>
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white">{sector.title}</h3>
                      <p className="text-[#D1DDD8] text-sm font-medium">{sector.sub}</p>
                    </div>
                  </div>

                  {/* Card Bullet Points */}
                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <ul className="space-y-4">
                      {sector.items.map((item, i) => (
                        <li key={i} className="flex gap-3.5 items-start text-[#2C3E38] text-sm md:text-base">
                          <CheckCircle2 className="w-5 h-5 shrink-0 text-[#062C21] mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" className="mt-14 text-center">
            <p className="text-xs md:text-sm text-[#6E7E78] italic bg-[#F6F5F0] px-6 py-3 rounded-xl inline-block border border-[#E2DFD5]">
              *All opportunities are subject to applicable trade agreements, product classification, Rules of Origin, tariff schedules, and destination-market requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE DELIVER - Deep Emerald Executive Section */}
      <section id="deliverables" className="py-28 px-6 bg-[#062C21] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C59B27]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#E5C158] uppercase block mb-3">Program Pillars</span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              <DropInText text="What We Deliver" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-[#C2D1CC] text-lg leading-relaxed">
                The FTA Utilization Accelerator transforms complex trade agreement requirements into a focused, outcome-driven execution program. By combining trade intelligence, tariff analysis, regulatory guidance, and institutional trade networks, participating businesses can identify preferential market access opportunities, improve trade competitiveness, and make informed export-import decisions across our four focus sectors.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                tag: "INSIGHTS",
                title: "FTA & Market Intelligence",
                icon: <Globe2 className="w-7 h-7 text-[#E5C158]" />,
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
                icon: <ShieldCheck className="w-7 h-7 text-[#E5C158]" />,
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
                icon: <Handshake className="w-7 h-7 text-[#E5C158]" />,
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
                icon: <TrendingUp className="w-7 h-7 text-[#E5C158]" />,
                items: [
                  "Identification of eligible preferential tariff opportunities.",
                  "Standard duty versus preferential duty comparison.",
                  "Potential customs duty savings assessment.",
                  "Trade utilization monitoring and market expansion recommendations."
                ]
              }
            ].map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-[#0B3B2D] border border-white/10 hover:border-[#C59B27]/50 rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between transition-all shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-extrabold tracking-[0.2em] text-[#E5C158] bg-[#C59B27]/15 border border-[#C59B27]/30 px-3.5 py-1.5 rounded-lg">
                        {pillar.tag}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">{pillar.title}</h3>
                    <ul className="space-y-4">
                      {pillar.items.map((item, i) => (
                        <li key={i} className="flex gap-3.5 items-start text-[#D1DDD8] text-sm md:text-base">
                          <div className="w-2 h-2 rounded-full bg-[#C59B27] mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
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

      {/* TIMELINE & DELIVERABLES - Left/Right Alternating */}
      <section id="timeline" className="py-28 px-6 bg-[#F6F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8C6D1F] uppercase block mb-3">Execution Roadmap</span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C21] tracking-tight mb-4">
              <DropInText text="Timeline & Deliverables" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-xl font-bold text-[#1E352F] mb-4">Accelerated 2–3 Month Program Structure</p>
              <p className="text-[#5A6B65] leading-relaxed">
                The FTA Utilization Accelerator follows a structured 2–3 month execution framework to help businesses across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile identify relevant trade agreements, evaluate preferential tariff opportunities, prepare compliance documentation, and develop actionable market-entry strategies.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative">
            {/* Center Spine Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-[#062C21]/20 -translate-x-1/2" />

            {[
              {
                weeks: "Weeks 1–3",
                title: "Trade Assessment & Opportunity Mapping",
                points: [
                  { h: "FTA Opportunity Report", d: "Analysis of relevant trade agreements, target markets, product categories, and potential preferential trade benefits." },
                  { h: "Product & HS Code Assessment", d: "Review of product classifications, applicable tariff lines, and relevant country-specific tariff requirements." },
                  { h: "Tariff Optimization Analysis", d: "Comparison of standard and preferential tariff rates wherever verified data is available, with an assessment of potential duty savings." },
                  { h: "Market Prioritization Framework", d: "Identification of priority markets based on trade potential, tariff advantages, regulatory requirements, and market access conditions." }
                ]
              },
              {
                weeks: "Weeks 4–6",
                title: "Eligibility & Compliance Planning",
                points: [
                  { h: "Rules of Origin Assessment", d: "Preliminary assessment of product origin requirements, qualifying conditions, and agreement-specific eligibility criteria." },
                  { h: "Documentation Roadmap", d: "Checklist of applicable Certificates of Origin, customs documents, and supporting records." },
                  { h: "Trade Compliance Advisory", d: "Guidance on relevant customs procedures, product requirements, and documentation processes." },
                  { h: "Sector-Specific Readiness Assessment", d: "Evaluation of product information, supplier documentation, pricing, and sector-relevant export-import requirements." }
                ]
              },
              {
                weeks: "Weeks 7–10",
                title: "Trade Facilitation & Partner Engagement",
                points: [
                  { h: "Trade Partner Identification", d: "Identification of relevant importers, exporters, distributors, and potential business partners in priority markets." },
                  { h: "B2B Introductions", d: "Facilitated business meetings and trade engagement opportunities, subject to partner availability." },
                  { h: "Commercial Strategy Support", d: "Guidance on pricing, landed-cost considerations, market positioning, and trade negotiation preparation." },
                  { h: "Documentation Coordination", d: "Support in preparing trade documentation and coordinating with relevant authorized agencies and service providers." }
                ]
              },
              {
                weeks: "Weeks 11–12",
                title: "Implementation & Expansion Planning",
                points: [
                  { h: "FTA Utilization Action Plan", d: "A practical roadmap for claiming applicable preferential tariff benefits, subject to product eligibility and customs requirements." },
                  { h: "Trade Opportunity Report", d: "Consolidated analysis of identified markets, tariff opportunities, compliance requirements, and recommended next steps." },
                  { h: "Market Activation Support", d: "Guidance for initiating priority trade engagements and progressing qualified business opportunities." },
                  { h: "Post-Program Advisory", d: "Follow-up guidance for utilization improvement, partner engagement, and future market expansion planning." }
                ]
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Left or Right Card */}
                <div className="w-full md:w-[46%]">
                  <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                    <motion.div 
                      whileHover={{ y: -6 }}
                      className="bg-white rounded-3xl p-8 md:p-10 border border-[#E2DFD5] shadow-lg hover:shadow-2xl hover:border-[#062C21]/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-[#062C21] text-[#E5C158] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                          {step.weeks}
                        </span>
                        <span className="text-2xl font-black text-[#E2DFD5]">0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#062C21] mb-6">{step.title}</h3>
                      <div className="space-y-4">
                        {step.points.map((pt, i) => (
                          <div key={i} className="bg-[#F6F5F0] p-4 rounded-2xl border border-[#EAE7DF]">
                            <strong className="text-[#062C21] text-sm font-bold block mb-1">{pt.h}:</strong>
                            <p className="text-[#4B5E58] text-sm leading-relaxed">{pt.d}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>

                {/* Center Badge Node */}
                <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-11 h-11 rounded-full bg-[#062C21] border-4 border-[#F6F5F0] text-[#E5C158] items-center justify-center font-bold text-xs z-20 shadow-md">
                  {index + 1}
                </div>

                {/* Empty Spacer Side */}
                <div className="hidden md:block w-[46%]" />
              </div>
            ))}
          </div>

          <ScrollReveal direction="up" className="mt-16 text-center">
            <p className="text-xs md:text-sm text-[#6E7E78] italic">
              *Program duration and deliverables depend on product eligibility, data availability, regulatory requirements, and participating organizations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROGRAM ENROLLMENT & ENGAGEMENTS */}
      <section id="enrollment" className="py-28 px-6 bg-white border-t border-[#E6E4DC]">
        <div className="max-w-7xl mx-auto">
          
          {/* Enrollment Questionnaires */}
          <div className="mb-28">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal direction="up">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8C6D1F] uppercase block mb-3">Application Portal</span>
              </ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C21] tracking-tight mb-4">
                <DropInText text="Program Enrollment" />
              </h2>
              <ScrollReveal delay={0.15} direction="up">
                <p className="text-lg font-semibold text-[#1E352F] mb-2">Application Questionnaires</p>
                <p className="text-[#5A6B65]">
                  Select the appropriate phase below. You will be redirected to the dedicated portal to complete your application securely.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { phase: "STEP 01", title: "Initial Questionnaire", desc: "Basic company details, business profile, focus sector, product categories, target markets, and export-import readiness assessment.", btn: "Start Assessment →" },
                { phase: "STEP 02", title: "Phase 1 Questionnaire", desc: "Detailed product information, HS Codes, current trade markets, pricing, origin details, sector-specific requirements, and FTA opportunity assessment.", btn: "Start Phase 1 →" },
                { phase: "STEP 03", title: "Phase 2 Questionnaire", desc: "Trade compliance requirements, Rules of Origin documentation, target market selection, and potential trade partner engagement.", btn: "Start Phase 2 →" },
                { phase: "STEP 04", title: "Phase 3 Questionnaire", desc: "Trade execution planning, commercial terms, preferential tariff implementation readiness, and market development priorities.", btn: "Start Phase 3 →" }
              ].map((q, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-[#F6F5F0] border border-[#E2DFD5] hover:border-[#062C21] rounded-3xl p-8 h-full flex flex-col justify-between transition-all group shadow-sm hover:shadow-xl cursor-pointer"
                  >
                    <div>
                      <span className="text-[11px] font-extrabold tracking-widest text-[#8C6D1F] bg-[#C59B27]/15 px-3 py-1 rounded-md inline-block mb-4">
                        {q.phase}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#062C21] mb-4">{q.title}</h3>
                      <p className="text-sm text-[#4B5E58] leading-relaxed mb-8">{q.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-[#E2DFD5] text-sm font-bold text-[#062C21] group-hover:text-[#8C6D1F] flex items-center justify-between transition-colors">
                      <span>{q.btn}</span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Engagements & Networking */}
          <div className="pt-20 border-t border-[#E6E4DC]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal direction="up">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8C6D1F] uppercase block mb-3">Strategic Connect Programs</span>
              </ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C21] tracking-tight mb-6">
                <DropInText text="Engagements & Networking" />
              </h2>
              <ScrollReveal delay={0.15} direction="up">
                <p className="text-[#5A6B65] leading-relaxed">
                  Facilitating cross-border trade opportunities through focused business engagements, institutional connections, and targeted market access initiatives across Pharmaceuticals, Agriculture, Textiles, and Engineering & Automobile.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-[#062C21] text-white rounded-3xl p-10 md:p-12 h-full flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E5C158] mb-3">1-on-1 Advisory</span>
                    <h3 className="text-3xl font-extrabold mb-4">Exclusive One-on-One Engagements</h3>
                    <p className="text-[#C2D1CC] text-sm md:text-base leading-relaxed mb-8">
                      Personalized consultations designed to understand each company's business objectives and identify relevant FTA opportunities. These engagements focus on product eligibility, tariff advantages, compliance requirements, and actionable strategies for international market expansion.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                      {[
                        "FTA Opportunity Assessment",
                        "Product-Level Tariff & HS Code Guidance",
                        "Sector-Specific Trade Requirements",
                        "Rules of Origin and Compliance Advisory",
                        "Trade Partner Identification",
                        "Long-Term Market Expansion Planning"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full sm:w-max bg-[#C59B27] text-[#062C21] font-bold px-8 py-4 rounded-xl hover:bg-[#d8ad33] transition-colors shadow-lg">
                    Engagement Meeting 1
                  </button>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className="bg-[#F6F5F0] border border-[#E2DFD5] rounded-3xl p-10 md:p-12 h-full flex flex-col justify-between shadow-md"
                >
                  <div>
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#8C6D1F] mb-3"> Ecosystem Forums</span>
                    <h3 className="text-3xl font-extrabold text-[#062C21] mb-4">Interactive Group Sessions</h3>
                    <p className="text-[#4B5E58] text-sm md:text-base leading-relaxed mb-8">
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
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#2C3E38]">
                          <CheckCircle2 className="w-5 h-5 text-[#062C21] shrink-0 mt-0.5" />
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
      <section id="contact" className="py-28 px-6 bg-[#F6F5F0] border-t border-[#E2DFD5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8C6D1F] uppercase block mb-3">Contact Form</span>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C21] tracking-tight mb-4">
              <DropInText text="Application Request for the Accelerator" />
            </h2>
            <ScrollReveal delay={0.15} direction="up">
              <p className="text-[#5A6B65]">
                Complete the form below to request program details, eligibility requirements, engagement options, and enrollment information.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25} direction="up">
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="bg-white rounded-3xl p-8 md:p-12 border border-[#E2DFD5] shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Your Name</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Your Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Company / Organization Name</label>
                  <input type="text" placeholder="Organization Ltd." className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Sector</label>
                <select className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors cursor-pointer">
                  <option>Pharmaceuticals</option>
                  <option>Agriculture</option>
                  <option>Textiles</option>
                  <option>Engineering & Automobile</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Product Category / HS Code</label>
                  <input type="text" placeholder="e.g. 3004 / Apparel" className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Target Export or Import Markets</label>
                  <input type="text" placeholder="e.g. UAE, EU, Australia, ASEAN" className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#062C21] mb-2">Your Message</label>
                <textarea rows={4} placeholder="Share your trade requirements or questions..." className="w-full bg-[#F6F5F0] border border-[#D5D2C8] rounded-xl px-4 py-3.5 text-[#111C18] focus:outline-none focus:border-[#062C21] transition-colors resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#062C21] text-[#E5C158] font-bold text-lg py-4 rounded-xl hover:bg-[#0A3D2E] transition-colors shadow-lg"
              >
                Submit Now
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* SINGLE-LINE MINIMAL FOOTER */}
      <footer className="bg-[#062C21] py-6 text-center border-t border-white/10">
        <p className="text-[#A3B8B0] text-xs md:text-sm tracking-widest uppercase font-semibold">
          &copy; 2026 FTA Utilization Accelerator. All rights reserved.
        </p>
      </footer>

    </div>
  );
}