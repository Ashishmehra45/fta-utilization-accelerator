'use client';

import React from "react";
import Link from "next/link"; // Next.js routing
import { motion } from "framer-motion";
import { 
  Check, ShieldCheck, Handshake, TrendingUp, CheckCircle2, MessageSquare,
  Clock, Building2, Layers, IndianRupee, CalendarOff,
  FileText, Download, Phone, Info
} from "lucide-react";

// 1. COMPONENTS IMPORT KAR (Path apne folder structure ke hisaab se check kar lena)
import Header from "./components/Header";
import Footer from "./components/Footer";

// --- Scroll & Animations ---
const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
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

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden">
      
      {/* HEADER COMPONENT */}
      <Header />

      <main>
        {/* ------------------------------------------------------------- */}
        {/* HERO SECTION - PERFECT ALIGNMENT WITH LEADERS ON LEFT/RIGHT   */}
        {/* ------------------------------------------------------------- */}
        <section className="relative flex flex-col justify-between overflow-hidden min-h-[90vh] bg-[#0A192F]">
          
          {/* Background Layer */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img src="/FTA/667484d3-5998-4832-a549-b1b574ca67b4.jpg" alt="Madhya Pradesh Industry Background" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#001932]/70 to-[#000a19]/90" />
          </div>

          {/* MAIN CONTENT AREA WITH LEADERS */}
          {/* Note: Changed to flex-col to allow mobile leaders at the top */}
          <div className="relative z-10 w-full h-full grow flex flex-col items-center justify-center   pb-8 lg:pt-20">
            
            {/* MOBILE LEADERS (Visible only on Mobile/Tablet) - MOVED TO TOP */}
            <ScrollReveal direction="up" className="flex lg:hidden flex-col items-center w-full max-w-[420px] mb-8">
              <div className="flex flex-row justify-between items-end w-full">
                {/* PM Modi - Slightly Larger on Mobile */}
                <div className="w-[52%] h-[240px] flex justify-center items-end overflow-hidden">
                  <img src="/FTA/modi_ji-removebg-preview.png" alt="PM Modi" className="w-full h-full object-contain object-bottom block" />
                </div>
                {/* CM Yadav */}
                <div className="w-[48%] h-[210px] flex justify-center items-end overflow-hidden">
                  <img src="/FTA/mohan_yadav-removebg-preview.png" alt="CM Yadav" className="w-full h-full object-contain object-bottom block" />
                </div>
              </div>
              <div className="flex flex-row w-full shadow-md bg-[#004B87] border-t-[3px] border-[#FFD700]">
                <div className="text-center py-2.5 w-[52%]">
                  <h4 className="font-bold text-white text-[14px] m-0">Narendra Modi</h4>
                  <p className="text-white/60 text-[10px] mt-1 m-0 leading-none">Hon'ble PM, India</p>
                </div>
                <div className="text-center py-2.5 w-[48%] border-l border-white/15">
                  <h4 className="font-bold text-white text-[13px] m-0">Dr. Mohan Yadav</h4>
                  <p className="text-white/60 text-[9px] mt-1 m-0 leading-none">Hon'ble CM, MP</p>
                </div>
              </div>
            </ScrollReveal>

            {/* DESKTOP LAYOUT WRAPPER */}
            <div className="w-full max-w-[1536px] mx-auto flex flex-col lg:flex-row items-center justify-between relative">
              
              {/* LEFT LEADER (PM Modi) - Desktop */}
              <ScrollReveal direction="left" className="hidden lg:flex flex-col items-center w-[280px]">
                <div className="h-[360px] w-full flex justify-center items-end overflow-hidden">
                   <img src="/FTA/modi_ji-removebg-preview.png" alt="PM Narendra Modi" className="w-full h-full object-contain object-bottom block" />
                </div>
                <div className="w-full text-center py-3 shadow-md bg-[#004B87] border-t-[4px] border-[#FFD700]">
                  <h4 className="font-bold text-white text-[18px] m-0">Narendra Modi</h4>
                  <p className="text-white/60 text-[12px] mt-1 m-0 leading-none">Hon'ble Prime Minister, India</p>
                </div>
              </ScrollReveal>

              {/* CENTER TEXT AREA */}
              <ScrollReveal direction="up" className="flex flex-col items-center text-center px-0 md:px-8 grow max-w-[950px]">
                <div className="bg-white text-gray-900 font-bold rounded-full px-5 py-2 mb-6 shadow-sm text-[11px] tracking-[1px] uppercase">
                  Government of Madhya Pradesh · MPIDC
                </div>
                
                <h1 className="font-black text-white mb-6 text-center text-[clamp(2.5rem,4.5vw,4.5rem)] tracking-[-1px] leading-[1.1]">
                  Madhya Pradesh <br className="md:hidden" />
                  <span className="text-[#FFD700]">FTA Accelerator</span>
                </h1>
                
                <p className="font-bold mb-6 text-center text-[clamp(1rem,1.8vw,1.4rem)] text-[#FFD700] leading-[1.4]">
                  Twelve weeks from your product to your first shipment under a trade agreement.
                </p>
                
                <p className="font-light text-white text-center mb-10 hidden md:block text-[clamp(0.9rem,1.2vw,1.1rem)] leading-[1.7] max-w-[850px]">
                  India’s trade agreements with the United Kingdom, the UAE, Australia, the EFTA countries, Oman and New Zealand have removed the duty on almost everything Madhya Pradesh exports. Most of that saving is still unclaimed. The Accelerator takes eighty firms of the State through four phases: the agreement for your product, the rule of origin, the market costs, and the buyer.
                </p>
                
                <p className="font-light text-white text-center mb-10 md:hidden text-[0.95rem] leading-[1.7]">
                  India’s trade agreements have removed duty on almost everything MP exports. The Accelerator takes 80 firms through the agreement, rules of origin, market costs, and buyers to claim these savings.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                  <Link href="/apply" className="font-bold rounded-full px-6 py-3.5 shadow-lg bg-[#FFD700] text-[#002A54] text-[1.05rem] w-full max-w-[200px] text-center hover:-translate-y-1 transition-transform">
                    Apply now
                  </Link>
                  <Link href="#phases" className="text-white font-medium rounded-full px-6 py-3.5 bg-white/10 border border-white/30 backdrop-blur-sm text-[1.05rem] w-full max-w-[220px] text-center hover:bg-white/20 transition-colors">
                    The programme
                  </Link>
                  <Link href="#contact" className="text-white font-medium rounded-full px-6 py-3.5 bg-white/10 border border-white/30 backdrop-blur-sm text-[1.05rem] w-full max-w-[200px] text-center hover:bg-white/20 transition-colors">
                    Call Helpdesk
                  </Link>
                </div>
              </ScrollReveal>

              {/* RIGHT LEADER (CM Yadav) - Desktop */}
              <ScrollReveal direction="right" className="hidden lg:flex flex-col items-center w-[250px]">
                <div className="h-[310px] w-full flex justify-center items-end overflow-hidden">
                   <img src="/FTA/mohan_yadav-removebg-preview.png" alt="CM Dr. Mohan Yadav" className="w-full h-full object-contain object-bottom block" />
                </div>
                <div className="w-full text-center py-3 shadow-md bg-[#004B87] border-t-[4px] border-[#FFD700]">
                  <h4 className="font-bold text-white text-[16px] m-0">Dr. Mohan Yadav</h4>
                  <p className="text-white/60 text-[11px] mt-1 m-0 leading-none">Hon'ble Chief Minister, MP</p>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* BOTTOM FACTS CARDS */}
          <div className="relative z-20 w-full mx-auto px-4 md:px-6 pb-6 mt-8 lg:mt-0 max-w-[1536px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 m-0">
              {[
                { icon: <Clock size={20} className="text-white" />, label: "12 Weeks", sub: "1 Dec '26 - 28 Feb '27" },
                { icon: <Building2 size={20} className="text-white" />, label: "80 Firms", sub: "20 in 4 sectors" },
                { icon: <Layers size={20} className="text-white" />, label: "4 Phases", sub: "Sessions & Buyer Meets" },
                { icon: <IndianRupee size={20} className="text-white" />, label: "No Fee", sub: "State bears cohort 1" },
                { icon: <CalendarOff size={20} className="text-white" />, label: "30 Nov 2026", sub: "Enrolment Closes" }
              ].map((card, idx) => (
                <ScrollReveal key={idx} delay={0.4 + (idx * 0.1)} direction="up" className="h-full">
                  <div className="flex flex-col justify-center h-full p-4 rounded-xl text-center bg-[#001E3C]/70 border border-white/15 backdrop-blur-md transition-colors hover:bg-[#004B87]/90 cursor-default">
                    <div className="mx-auto mb-3 p-2 rounded-full bg-white/10">
                      {card.icon}
                    </div>
                    <span className="text-white font-bold block leading-none mb-1 text-[14px]">{card.label}</span>
                    <span className="text-white/60 font-medium block leading-tight text-[10px]">{card.sub}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* LAUNCHED & WHY NOW (SIMPLE & CLEAN LAYOUT)                      */}
        {/* ------------------------------------------------------------- */}
        <section id="why-now" className="py-20 px-4 bg-white">
          <div className="w-full max-w-[1100px] mx-auto">
            <div className="mb-12 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Content */}
                <div className="flex flex-col">
                  <span className="font-bold uppercase mb-3 block text-[#004B87] text-[15px] tracking-[1px]">
                    The Launch • 5 November 2026
                  </span>
                  <h2 className="font-bold text-gray-900 mb-6 text-[2.2rem] leading-[1.2]">
                    One of five major initiatives the State launched
                  </h2>
                  <p className="text-gray-600 mb-4 text-[1.1rem] leading-[1.7]">
                    At the Madhya Pradesh Export and FTA Conclave 2026 in Bhopal, the Hon’ble Chief Minister launched the <strong className="text-black">Madhya Pradesh FTA Action Plan 2026-27</strong>, the <strong className="text-black">MP FTA Handbook for Exporters</strong>, the <strong className="text-black">FTA Helpdesk</strong> at the MPIDC Export Cell, the <strong className="text-black">FTA module</strong> of this Portal, and the <strong className="text-black">Madhya Pradesh FTA Accelerator</strong>.
                  </p>
                  <p className="text-gray-600 mb-0 text-[1.1rem] leading-[1.7]">
                    The Accelerator is run by the Export Cell of the M.P. Industrial Development Corporation under the State Export Commissioner, with faculty from DGFT, Customs, the certificate-issuing agencies, the Export Promotion Councils, ECGC and EXIM Bank.
                  </p>
                </div>

                {/* Right Side: Image */}
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                    alt="Global Trade and FTA Exports" 
                    className="w-full object-cover h-[400px]" 
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ONE OUTCOME & TOOLS (CARDS) */}
        <section id="outcomes" className="py-20 px-4 bg-white border-b border-gray-100">
          <div className="w-full max-w-screen-xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-16 pb-4 flex flex-col items-center">
              <span className="inline-block bg-gray-50 text-gray-500 border border-gray-200 px-4 py-2 mb-4 font-bold tracking-[1px] uppercase rounded-full">
                One Outcome
              </span>
              <h2 className="font-black text-gray-900 mb-4 text-[clamp(2rem,3vw,2.8rem)] tracking-[-0.5px]">
                The first shipment under an agreement.
              </h2>
              <div className="mb-6 rounded w-[60px] h-[4px] bg-[#FFD700]"></div>
              <p className="text-gray-600 mb-0 mx-auto max-w-[750px] text-[1.1rem] leading-[1.8]">
                Every firm that completes the programme leaves with a written first-shipment plan, has met buyers in its market, and files its first preferential certificate of origin (or declaration) within 90 days. The Export Cell stays with the firm until the consignment ships.
              </p>
            </div>

            <h4 className="font-bold text-center mb-12 text-[#004B87] text-[1.25rem]">What each firm leaves with:</h4>
            
            {/* Premium Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: "TOOL 01",
                  title: "Duty Saving", 
                  subtitle: "Match & Calculate", 
                  icon: <FileText size={28} />,
                  color: "#ea580c", 
                  bgLight: "rgba(234, 88, 12, 0.1)",
                  items: [
                    "Firm's products matched against 870 lines.", 
                    "Duty before and after analysis.", 
                    "Saving per consignment calculated.", 
                    "Product & market chosen for shipment."
                  ]
                },
                {
                  id: "TOOL 02",
                  title: "Origin File", 
                  subtitle: "Rules & Compliance", 
                  icon: <ShieldCheck size={28} />,
                  color: "#d97706", 
                  bgLight: "rgba(217, 119, 6, 0.1)",
                  items: [
                    "Cost sheet and origin determination.", 
                    "Supplier declarations secured.", 
                    "Trade Connect registration.", 
                    "Draft of first certificate/declaration."
                  ]
                },
                {
                  id: "TOOL 03",
                  title: "Market Entry", 
                  subtitle: "Standards & Cost", 
                  icon: <TrendingUp size={28} />,
                  color: "#0284c7", 
                  bgLight: "rgba(2, 132, 199, 0.1)",
                  items: [
                    "Buyer & border requirements.", 
                    "Testing & certifiers in State identified.", 
                    "Landed cost from factory to market.", 
                    "Price with duty advantage shown."
                  ]
                },
                {
                  id: "TOOL 04",
                  title: "Shipment Plan", 
                  subtitle: "Execution & Buyers", 
                  icon: <Handshake size={28} />,
                  color: "#059669", 
                  bgLight: "rgba(5, 150, 105, 0.1)",
                  items: [
                    "One-page offer created.", 
                    "Buyer target list generated.", 
                    "Record of buyer meetings.", 
                    "Signed plan to first consignment."
                  ]
                }
              ].map((block, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
                  <div 
                    className="bg-white p-6 xl:p-10 rounded-3xl h-full relative overflow-hidden transition-all duration-300 border flex flex-col border-gray-200 shadow-sm cursor-default" 
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px ${block.bgLight}`;
                      e.currentTarget.style.borderColor = block.color;
                    }} 
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.borderColor = '#e5e7eb'; // tailwind gray-200
                    }}
                  >
                    {/* Top Color Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[4px]" style={{ backgroundColor: block.color }}></div>

                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl shadow-sm" style={{ backgroundColor: block.bgLight, color: block.color }}>
                        {block.icon}
                      </div>
                      <span className="font-bold px-2 py-1 rounded bg-gray-100 text-gray-500 text-[0.75rem] tracking-[1px]">
                        {block.id}
                      </span>
                    </div>

                    {/* Card Titles */}
                    <div className="mb-6">
                      <h3 className="font-black text-gray-900 mb-2 text-[1.4rem] tracking-[-0.5px]">
                        {block.title}
                      </h3>
                      <p className="font-bold m-0 text-[0.8rem] uppercase tracking-[1.5px]" style={{ color: block.color }}>
                        {block.subtitle}
                      </p>
                    </div>
                    
                    {/* List Items */}
                    <ul className="list-none flex flex-col gap-4 m-0 p-0 grow">
                      {block.items.map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: block.color }} />
                          <span className="text-gray-600 font-medium text-[0.95rem] leading-[1.6]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* HOW IT WORKS (PHASES TIMELINE - PREMIUM CARDS)                */}
        {/* ------------------------------------------------------------- */}
        <section id="phases" className="py-20 px-4 bg-gray-50 border-b border-gray-200">
          <div className="w-full max-w-screen-xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16 flex flex-col items-center">
              <span className="inline-block bg-white text-gray-500 border border-gray-200 px-4 py-2 mb-4 font-bold uppercase tracking-[1px] rounded-full">
                How it works
              </span>
              <h2 className="font-black mb-4 text-[clamp(2rem,3vw,3rem)] text-[#004B87] tracking-[-0.5px]">
                The Four Phases
              </h2>
              <div className="mb-6 rounded w-[60px] h-[4px] bg-[#FFD700]"></div>
              <p className="text-gray-600 mb-0 mx-auto max-w-[700px] text-[1.1rem] leading-[1.7]">
                Each phase opens with a ten-minute questionnaire, has two sessions and one one-to-one call with your Export Cell officer, and closes with a custom tool you keep.
              </p>
            </div>

            {/* Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
              {[
                {
                  num: "Phase 1", time: "1-10 Dec 2026", title: "The agreement for your product",
                  color: "#0284c7", bgLight: "rgba(2, 132, 199, 0.05)",
                  action: "Readiness Questionnaire. Which agreements apply, what they give, duty saved per consignment, product and market selection.",
                  tool: "Tool 01: Duty Saving Sheet"
                },
                {
                  num: "Phase 2", time: "11 Dec - 7 Jan", title: "The rule of origin and its proof",
                  color: "#d97706", bgLight: "rgba(217, 119, 6, 0.05)",
                  action: "Origin Questionnaire. Does the product qualify: cost sheet, rule, supplier declarations. Proof: Trade Connect, self-declaration or agency cert.",
                  tool: "Tool 02: Origin File"
                },
                {
                  num: "Phase 3", time: "8-21 Jan 2027", title: "The market: standards, cost & finance",
                  color: "#059669", bgLight: "rgba(5, 150, 105, 0.05)",
                  action: "Market Questionnaire. Border/buyer requirements, certifiers, landed cost, insurance, credit, assistance to claim, price with duty advantage.",
                  tool: "Tool 03: Market Entry Sheet"
                },
                {
                  num: "Phase 4", time: "22 Jan - 28 Feb", title: "The buyer",
                  color: "#7c3aed", bgLight: "rgba(124, 58, 237, 0.05)",
                  action: "Buyer Questionnaire. One-page offer, pitch (in person); buyer meetings for each sector via Indian Missions (8-19 Feb); closing session.",
                  tool: "Tool 04: First-Shipment Plan"
                }
              ].map((phase, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
                  <div 
                    className="bg-white rounded-3xl border border-gray-200 h-full flex flex-col relative overflow-hidden transition-all duration-300 cursor-default"
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = phase.color;
                      e.currentTarget.style.boxShadow = `0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px ${phase.bgLight}`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[4px]" style={{ backgroundColor: phase.color }}></div>
                    
                    <div className="p-6 md:p-10 flex flex-col h-full">
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-black px-4 py-1.5 rounded-full text-[0.85rem] tracking-[1px] uppercase" style={{ backgroundColor: phase.bgLight, color: phase.color }}>
                          {phase.num}
                        </span>
                        <span className="text-gray-500 font-bold text-[0.85rem]">
                          {phase.time}
                        </span>
                      </div>

                      <h3 className="font-black text-gray-900 mb-6 text-[1.4rem] tracking-[-0.3px] leading-[1.3]">
                        {phase.title}
                      </h3>
                      
                      <div className="mb-6 grow">
                        <span className="block font-bold uppercase mb-2 text-[0.75rem] tracking-[1px] text-gray-500">
                          What Happens
                        </span>
                        <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.7]">
                          {phase.action}
                        </p>
                      </div>

                      <div className="mt-auto p-4 rounded-xl flex items-center gap-4 border border-gray-100 bg-gray-50">
                        <div className="p-2 bg-white rounded-full shadow-sm" style={{ color: phase.color }}>
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <span className="block font-bold uppercase mb-1 text-[0.7rem] tracking-[1px]" style={{ color: phase.color }}>
                            You Leave With
                          </span>
                          <strong className="text-gray-900 block text-[0.95rem]">
                            {phase.tool}
                          </strong>
                        </div>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            {/* Footer Note */}
            <div className="text-center mt-16 pt-8">
              <p className="text-gray-500 italic mb-8 text-[1rem]">
                After the programme, you receive ninety days of follow-up until the first consignment ships under the agreement. <br className="hidden md:block"/> Results published in August 2027.
              </p>
              <Link href="/program"> 
                <button className="font-bold px-10 py-4 rounded-full transition-colors bg-[#004B87] text-white tracking-[0.5px] hover:bg-[#003366]">
                  View the programme in full
                </button> 
              </Link>  
            </div>
          </div>
        </section>

        {/* FOCUS SECTORS */}
        <section id="sectors" className="py-20 px-4 bg-white border-b border-gray-100">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-center mb-16 flex flex-col items-center">
              <h2 className="font-bold mb-4 text-[clamp(1.875rem,3vw,3rem)] text-[#004B87] tracking-[-0.5px]">
                Four sector tracks
              </h2>
              <div className="mb-6 rounded w-[60px] h-[4px] bg-[#FFD700]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Engineering & auto components", sub: "UK, UAE, Australia, Oman, NZ; EU from 2027",
                  img: "https://i.pinimg.com/736x/4a/0b/b8/4a0bb8c3d8dd851a1f5240d0fa2014be.jpg",
                  items: ["Auto components, gear boxes, brakes, axles", "Light goods vehicles", "Pumps and valves", "Steel and aluminium articles, fasteners"]
                },
                {
                  title: "Pharmaceuticals", sub: "UK, Australia, EFTA, UAE, Oman",
                  img: "https://i.pinimg.com/1200x/ce/1c/6c/ce1c6c5f57751da4f7c6bc157f77a79d.jpg",
                  items: ["Intermediates (pyridine, pyrimidine, pyrazole)", "Immunological products", "Dressings, medicinal herbs", "Formulations (where the work is registration)"]
                },
                {
                  title: "Agriculture and food", sub: "UK, UAE, Australia, Norway, Oman, NZ",
                  img: "https://i.pinimg.com/736x/11/ba/f6/11baf6c33a7078af8800a7a545bc218f.jpg",
                  items: ["Namkeen and food preparations", "Sauces, puffed cereals, biscuits", "Soybean products", "Spices, fresh produce"]
                },
                {
                  title: "Textiles and apparel", sub: "UK, Australia, Norway, UAE, NZ",
                  img: "https://i.pinimg.com/1200x/ad/71/25/ad712546693e604a3822003497decfc7.jpg",
                  items: ["Cotton T-shirts, pullovers", "Trousers, shirts and dresses", "Bed linen and made-ups", "Polyester fabric"]
                }
              ].map((sector, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row h-full shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#004B87] group">
                    <div className="relative overflow-hidden w-full md:w-[40%] min-h-[220px]">
                      <img src={sector.img} alt={sector.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-0 left-0 w-full h-full bg-[#004B87]/20 transition-colors group-hover:bg-transparent" />
                    </div>
                    <div className="p-6 flex flex-col w-full md:w-[60%]">
                      <h3 className="font-bold text-gray-900 mb-2 text-[1.25rem]">{sector.title}</h3>
                      <p className="font-semibold mb-4 pb-4 border-b border-gray-200 text-[#004B87] text-[11px] tracking-[0.5px]">MARKETS: {sector.sub}</p>
                      <ul className="list-none flex flex-col gap-3 m-0 p-0 mb-6 grow">
                        {sector.items.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-gray-600 text-[13px]">
                            <Check size={14} className="mt-0.5 shrink-0 text-[#004B87]" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/sector" className="inline-flex justify-center items-center w-full px-4 py-2 mt-auto font-bold rounded text-gray-900 border border-gray-300 hover:bg-gray-100 transition-colors text-[0.875rem]">
                        See the track
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* WHO SHOULD APPLY / COST / HELPDESK & CTA (CLEAN LAYOUT)       */}
        {/* ------------------------------------------------------------- */}
        <section id="contact" className="py-20 px-4 bg-gray-50">
          <div className="w-full max-w-screen-xl mx-auto">
            
            {/* TOP ROW: ELIGIBILITY & COST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              
              <div className="flex flex-col">
                <ScrollReveal direction="up">
                  <h3 className="font-bold mb-6 text-[#004B87] text-[2rem]">Who should apply</h3>
                  <p className="text-gray-600 text-[1.1rem] leading-[1.7] mb-4">
                    Any firm in Madhya Pradesh that makes or exports a product in one of the four sectors and meets four conditions:
                  </p>
                  <ul className="text-gray-600 mb-6 text-[1.05rem] leading-[1.8] list-disc pl-5">
                    <li>A valid Importer-Exporter Code.</li>
                    <li>A product that gains duty under an agreement in force (or EU 2027).</li>
                    <li>A target market.</li>
                    <li>One named person who will attend every session.</li>
                  </ul>
                  
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-[#FFD700]">
                    <p className="m-0 text-gray-600 text-[0.95rem] leading-[1.5]">
                      <strong className="text-gray-900">Note:</strong> Firms of every size may apply. Where a track has more applicants than seats, preference goes to MSMEs, to firms that have never claimed a preference, and to ensure a spread of districts across the State.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="flex flex-col">
                <ScrollReveal direction="up" delay={0.1}>
                  <h3 className="font-bold mb-6 text-[#004B87] text-[2rem]">No fee for cohort 1</h3>
                  <p className="text-gray-600 mb-6 text-[1.1rem] leading-[1.7]">
                    The State bears the programme. The firm bears its own travel for the in-person day and its own costs of samples, testing, certification, and shipment.
                  </p>
                  <p className="text-gray-600 text-[1.1rem] leading-[1.7] m-0">
                    Assistance for certification, freight, and marketing is available under the MP Export Policy 2025; Phase 3 of the programme shows exactly how to claim it.
                  </p>
                </ScrollReveal>
              </div>

            </div>

            {/* BOTTOM ROW: HELPDESK & ACTION */}
            <ScrollReveal direction="up">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-[#002A54]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  
                  <div className="p-8 md:p-12 lg:border-r border-white/10 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <Info size={28} color="#FFD700" />
                      <h4 className="font-bold text-white m-0 text-[1.8rem]">FTA Helpdesk</h4>
                    </div>
                    <p className="text-white/70 mb-8 text-[1.05rem]">
                      Have questions? Call or write to the MPIDC Export Cell, Bhopal:
                    </p>
                    
                    <ul className="list-none p-0 m-0 text-white flex flex-col gap-4 mb-8">
                      <li className="flex items-center gap-4">
                        <Phone size={20} className="text-[#FFD700]" />
                        <span className="font-medium text-[1.1rem]">1800-XXX-XXXX</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <MessageSquare size={20} className="text-[#FFD700]" />
                        <span className="font-medium text-[1.1rem]">fta@mpidc.gov.in</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Phone size={20} className="text-[#FFD700]" />
                        <span className="font-medium text-[1.1rem]">+91 99999 99999 (WhatsApp)</span>
                      </li>
                    </ul>
                    
                    <p className="text-white/50 m-0 text-[0.9rem] mt-auto">
                      Working days, 10 AM to 6 PM. Answers within two working days.
                    </p>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center bg-[#003366]">
                    <h4 className="font-bold text-white mb-3 text-[1.8rem]">Ready to accelerate?</h4>
                    <p className="text-[#FFD700] font-medium mb-8">Enrolment closes 30 November 2026.</p>
                    
                    <Link href="/apply" className="inline-flex justify-center items-center font-bold w-full py-4 mb-4 uppercase rounded-xl shadow-sm transition-colors text-center no-underline bg-[#FFD700] text-[#002A54] tracking-[1px] text-[1.05rem] hover:bg-yellow-300">
                      Apply Now
                    </Link>
                    
                    <button className="inline-flex justify-center items-center font-medium w-full py-4 mb-8 rounded-xl border border-white/30 text-white gap-2 transition-colors hover:bg-white/10">
                      <Download size={18} /> Download the brochure
                    </button>

                    <div className="flex flex-col gap-3 text-left pt-6 border-t border-white/10">
                      <span className="text-white/50 font-bold mb-2 text-[11px] tracking-[1px]">OTHER DOWNLOADS</span>
                      <Link href="#" className="no-underline text-white flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity text-[0.95rem]">
                        <Download size={16} /> MP FTA Handbook for Exporters (PDF)
                      </Link>
                      <Link href="#" className="no-underline text-white flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity mt-2 text-[0.95rem]">
                        <Download size={16} /> MP FTA Action Plan 2026-27 (PDF)
                      </Link>
                      <Link href="#" className="no-underline text-white flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity mt-2 text-[0.95rem]">
                        <Download size={16} /> Offline Application form (PDF)
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>
      </main>
      
      {/* FOOTER COMPONENT */}
      <Footer />

    </div>
  );
}