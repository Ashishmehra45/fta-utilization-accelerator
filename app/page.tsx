"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2, ChevronRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Snappy SaaS Animations ---
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
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} // Snappier easing
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DropInText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
      className={cn("flex flex-wrap justify-center gap-x-[0.25em]", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- Main Page Component ---
export default function FTAAcceleratorPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* HEADER - Sleek Glass */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="font-extrabold text-2xl tracking-tighter text-slate-900">
            FTA<span className="text-blue-600 font-bold">Accelerator</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-500">
            <a href="#sectors" className="hover:text-blue-600 transition-colors">Sectors</a>
            <a href="#deliverables" className="hover:text-blue-600 transition-colors">Deliverables</a>
            <a href="#timeline" className="hover:text-blue-600 transition-colors">Timeline</a>
          </div>
          <a href="#contact" className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95">
            Contact Us
          </a>
        </div>
      </header>

      {/* HERO SECTION - Bright, Airy & Direct */}
      <section className="pt-40 pb-32 px-6 min-h-[95vh] flex flex-col items-center justify-center relative overflow-hidden bg-slate-50">
        
        {/* Soft glowing orb background effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <ScrollReveal delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs md:text-sm font-bold tracking-widest text-slate-600 uppercase">Flagship Program</span>
            </div>
          </ScrollReveal>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 mb-6 w-full">
            <DropInText text="FTA Utilization" />
            <DropInText text="Accelerator." className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-1 pb-2" />
          </h1>
          
          <ScrollReveal delay={0.3} direction="up" className="max-w-4xl mx-auto flex flex-col items-center">
            {/* The Clear Purpose Statement */}
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 leading-snug max-w-3xl">
              Unlock Preferential Trade Benefits. <br className="hidden md:block" /> Accelerate Your Global Market Access.
            </p>
            <p className="text-base md:text-lg text-slate-500 mb-12 leading-relaxed text-center font-medium max-w-3xl">
              An institutional-grade execution program designed specifically for <strong className="text-slate-900">exporters, importers, and manufacturing businesses</strong> across Pharmaceuticals, Agriculture, Textiles, and Engineering. We help you identify Free Trade Agreement (FTA) opportunities, optimize customs duties, navigate complex Rules of Origin, and establish strategic cross-border trade partnerships.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-blue-700 shadow-xl shadow-blue-600/20 hover:-translate-y-1 transition-all">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
            <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold tracking-wide flex items-center justify-center gap-2 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 transition-all shadow-sm">
              <Download className="w-4 h-4 text-slate-400" /> Download Brochure
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* FOCUS SECTORS - Modern SaaS Grid */}
      <section id="sectors" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              <DropInText text="Our Focus Sectors" />
            </h2>
            <ScrollReveal delay={0.2} direction="up">
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                The FTA Utilization Accelerator supports businesses across four priority sectors, helping them identify applicable trade agreements, evaluate preferential tariff benefits, and ensure product-specific compliance.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                num: "01", title: "Pharmaceuticals", sub: "Pharmaceuticals & Healthcare Products",
                items: ["Identify FTA opportunities for pharmaceutical products and eligible healthcare exports.", "Analyze product classification, HS Codes, and applicable preferential tariffs.", "Understand Rules of Origin and Certificate of Origin requirements.", "Navigate relevant export-import documentation and destination-market regulations.", "Identify potential international markets and trade partnerships."]
              },
              {
                num: "02", title: "Agriculture", sub: "Agriculture & Agri-Products",
                items: ["Identify preferential market access opportunities for eligible agricultural products.", "Analyze product-specific tariffs and applicable trade agreements.", "Understand Rules of Origin and Certificate of Origin requirements.", "Review relevant export documentation and destination-market requirements.", "Explore international buyers, importers, and agri-trade partnerships."]
              },
              {
                num: "03", title: "Textiles", sub: "Textiles, Apparel & Technical Textiles",
                items: ["Identify FTA opportunities for textiles, fabrics, garments, and related products.", "Assess HS Codes, preferential tariff rates, and potential duty savings.", "Evaluate Rules of Origin, sourcing criteria, and product eligibility.", "Understand relevant customs documentation and compliance requirements.", "Prioritize international markets based on tariff advantages and trade potential."]
              },
              {
                num: "04", title: "Engineering & Auto", sub: "Engineering Goods, Automotive & Components",
                items: ["Identify FTA opportunities for engineering goods, automotive products, and components.", "Compare standard and preferential tariffs for eligible product categories.", "Assess Rules of Origin, component sourcing, and supply-chain considerations.", "Understand applicable trade documentation and customs procedures.", "Explore international buyers, distributors, manufacturers, and strategic trade partners."]
              }
            ].map((sector, idx) => (
              <ScrollReveal key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={idx > 1 ? 0.1 : 0}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-white p-10 md:p-12 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] transition-all duration-300 h-full flex flex-col group"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform duration-300">
                      {sector.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900">{sector.title}</h3>
                      <p className="text-slate-500 font-semibold text-sm">{sector.sub}</p>
                    </div>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {sector.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-slate-600 font-medium">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" /> 
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" className="mt-16 text-center">
            <p className="text-sm text-slate-400 font-medium bg-slate-50 inline-block px-6 py-3 rounded-full">
              *All opportunities are subject to applicable trade agreements, product classification, Rules of Origin, tariff schedules, and destination-market requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE DELIVER - Soft Blue Accent Section */}
      <section id="deliverables" className="py-32 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-8 my-10 shadow-2xl relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              <DropInText text="What We Deliver" />
            </h2>
            <ScrollReveal delay={0.2} direction="up">
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                We transform complex trade agreement requirements into a focused, outcome-driven execution program. By combining trade intelligence, tariff analysis, and institutional networks, we ensure measurable export-import optimization.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-800">
            {[
              { title: "Insights", subtitle: "FTA & Market Intelligence", items: ["Country-wise FTA opportunity mapping and trade agreement analysis.", "Product-level HS Code and preferential tariff assessment.", "Sector-specific market selection and export-import opportunity identification.", "Tariff comparison and potential duty savings analysis."] },
              { title: "Compliance", subtitle: "Trade Regulations & Origin", items: ["Rules of Origin assessment and product eligibility guidance.", "Certificate of Origin requirements and documentation support.", "Customs procedures and trade compliance guidance.", "FTA-specific regulatory requirements and documentation checklists."] },
              { title: "Partners", subtitle: "Trade Partnerships", items: ["Curated introductions to relevant importers, exporters, and trade partners.", "B2B matchmaking and bilateral trade engagement opportunities.", "Connections with industry associations and institutional stakeholders.", "Commercial negotiation support and partnership facilitation."] },
              { title: "Optimization", subtitle: "Trade Optimization", items: ["Identification of eligible preferential tariff opportunities.", "Standard duty versus preferential duty comparison.", "Potential customs duty savings assessment.", "Trade utilization monitoring and market expansion recommendations."] }
            ].map((block, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <motion.div whileHover={{ y: -5 }} className="h-full flex flex-col p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-4 bg-blue-500/10 inline-block w-max px-3 py-1 rounded-full">{block.title}</h3>
                  <h4 className="text-2xl font-bold mb-8 text-white">{block.subtitle}</h4>
                  <ul className="space-y-4 flex-grow">
                    {block.items.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm flex gap-3 items-start leading-relaxed font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" /> 
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE - True Alternating Left/Right */}
      <section id="timeline" className="py-32 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              <DropInText text="Timeline & Deliverables" />
            </h2>
            <ScrollReveal delay={0.2} direction="up">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold rounded-full text-sm uppercase tracking-wide mb-6">Accelerated 2–3 Month Program Structure</span>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                The FTA Utilization Accelerator follows a structured execution framework to help businesses identify relevant trade agreements, prepare compliance documentation, and develop actionable market-entry strategies.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative pt-10">
            {/* Desktop Center Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 rounded-full"></div>
            
            {[
              {
                time: "Weeks 1–3",
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
                title: "Implementation & Expansion Planning",
                content: [
                  { t: "FTA Utilization Action Plan", d: "A practical roadmap for claiming applicable preferential tariff benefits, subject to product eligibility and customs requirements." },
                  { t: "Trade Opportunity Report", d: "Consolidated analysis of identified markets, tariff opportunities, compliance requirements, and recommended next steps." },
                  { t: "Market Activation Support", d: "Guidance for initiating priority trade engagements and progressing qualified business opportunities." },
                  { t: "Post-Program Advisory", d: "Follow-up guidance for utilization improvement, partner engagement, and future market expansion planning." }
                ]
              }
            ].map((phase, index) => (
              <div key={index} className={cn("relative flex flex-col md:flex-row items-center justify-between mb-24 group", index % 2 !== 0 ? "md:flex-row-reverse" : "")}>
                
                {/* Content Side */}
                <div className={cn("w-full md:w-[45%] z-10", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                    <motion.div 
                      whileHover={{ y: -8 }}
                      className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] transition-all duration-300 text-left relative overflow-hidden"
                    >
                      <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4 bg-blue-50 px-3 py-1 rounded-full">
                        {phase.time}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-6">{phase.title}</h3>
                      <div className="space-y-5">
                        {phase.content.map((item, i) => (
                          <div key={i} className="text-sm border-l-2 border-slate-100 pl-4 group-hover:border-blue-200 transition-colors">
                            <strong className="block text-slate-800 mb-1">{item.t}:</strong>
                            <span className="text-slate-500 leading-relaxed font-medium">{item.d}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>

                {/* Timeline Center Node - Glowing Pulse */}
                <ScrollReveal direction="none" delay={0.2} className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 items-center justify-center z-20 shadow-[0_0_0_6px_rgb(255,255,255)] ring-1 ring-slate-200">
                  <div className="w-full h-full bg-blue-400 rounded-full animate-ping opacity-50 absolute"></div>
                </ScrollReveal>

                {/* Spacer Side */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
          
          <ScrollReveal direction="up" className="mt-16 text-center text-sm text-slate-400 font-medium">
            *Program duration and deliverables depend on product eligibility, data availability, regulatory requirements, and participating organizations.
          </ScrollReveal>
        </div>
      </section>

      {/* ENROLLMENT & NETWORKING - Centered Headings */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Enrollment Section */}
          <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                <DropInText text="Program Enrollment" />
              </h2>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-lg text-slate-500 font-medium">
                  Select the appropriate phase below. You will be redirected to the dedicated portal to complete your application securely.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Initial Questionnaire", desc: "Basic company details, business profile, focus sector, product categories, target markets, and export-import readiness assessment.", link: "Start Assessment" },
                { title: "Phase 1 Questionnaire", desc: "Detailed product information, HS Codes, current trade markets, pricing, origin details, sector-specific requirements, and FTA opportunity assessment.", link: "Start Phase 1" },
                { title: "Phase 2 Questionnaire", desc: "Trade compliance requirements, Rules of Origin documentation, target market selection, and potential trade partner engagement.", link: "Start Phase 2" },
                { title: "Phase 3 Questionnaire", desc: "Trade execution planning, commercial terms, preferential tariff implementation readiness, and market development priorities.", link: "Start Phase 3" }
              ].map((q, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <motion.div whileHover={{ y: -8 }} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all h-full flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-blue-600/5">
                    <div>
                      <h4 className="text-xl font-extrabold text-slate-900 mb-4">{q.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{q.desc}</p>
                    </div>
                    <span className="text-sm font-bold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                      {q.link} <ChevronRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Networking Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16 border-t border-slate-100 pt-24">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                <DropInText text="Engagements & Networking" />
              </h2>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full inline-block">Strategic Connect Programs</p>
                <p className="text-lg text-slate-500 font-medium mt-4">
                  Facilitating cross-border trade opportunities through focused business engagements, institutional connections, and targeted market access initiatives.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <motion.div whileHover={{ y: -8 }} className="bg-blue-600 text-white p-10 md:p-12 rounded-[2rem] h-full shadow-lg hover:shadow-2xl hover:shadow-blue-600/20 transition-all">
                  <h4 className="text-3xl font-extrabold mb-4">Exclusive One-on-One Engagements</h4>
                  <p className="text-blue-100 mb-8 leading-relaxed font-medium text-sm md:text-base">Personalized consultations designed to understand each company's business objectives and identify relevant FTA opportunities. These engagements focus on product eligibility, tariff advantages, compliance requirements, and actionable strategies for international market expansion.</p>
                  <ul className="space-y-4 mb-12 text-blue-50 font-medium">
                    {["FTA Opportunity Assessment", "Product-Level Tariff & HS Code Guidance", "Sector-Specific Trade Requirements", "Rules of Origin and Compliance Advisory", "Trade Partner Identification", "Long-Term Market Expansion Planning"].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-white text-blue-600 px-6 py-4 rounded-full font-bold tracking-wide w-full hover:bg-slate-50 transition-colors shadow-lg active:scale-95">
                    Engagement Meeting 1
                  </button>
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <motion.div whileHover={{ y: -8 }} className="bg-slate-50 border border-slate-200 p-10 md:p-12 rounded-[2rem] h-full shadow-sm hover:shadow-xl transition-all">
                  <h4 className="text-3xl font-extrabold text-slate-900 mb-4">Interactive Group Sessions</h4>
                  <p className="text-slate-500 font-medium mb-8 leading-relaxed text-sm md:text-base">Seminars, expert-led discussions, trade workshops, and business networking sessions designed to connect participants with exporters, importers, industry experts, and institutional stakeholders.</p>
                  <ul className="space-y-4 mb-12 text-slate-700 font-medium">
                    {["FTA awareness and preferential trade workshops.", "Sector-focused discussions for pharmaceuticals, agriculture, textiles, and engineering & automobile.", "Expert sessions on tariffs and Rules of Origin.", "Bilateral trade opportunity presentations.", "B2B networking and business matchmaking.", "Practical sessions on trade documentation and compliance."].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT FORM - Centered Headings */}
      <section id="contact" className="py-32 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              <DropInText text="Application Request" />
            </h2>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 inline-block">Contact Form</p>
              <p className="text-lg text-slate-500 font-medium mt-2">
                Complete the form below to request program details, eligibility requirements, engagement options, and enrollment information.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <motion.form 
              whileHover={{ y: -4 }}
              className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Your Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Your Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Organization Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Sector</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                  <option>Pharmaceuticals</option>
                  <option>Agriculture</option>
                  <option>Textiles</option>
                  <option>Engineering & Automobile</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Product Category / HS Code</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Target Markets</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white font-bold tracking-wide py-5 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 mt-4"
              >
                Submit Application
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="bg-white py-8 text-center border-t border-slate-100">
        <p className="text-slate-400 text-sm font-medium">
          &copy; 2026 FTA Utilization Accelerator. All rights reserved.
        </p>
      </footer>

    </div>
  );
}