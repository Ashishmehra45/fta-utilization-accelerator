'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileCheck2, TrendingDown, Globe, UserCheck, 
  CheckCircle2, AlertCircle, Building, Landmark, 
  ArrowRight, HelpCircle, Check, Users, MapPin, 
  Briefcase, Medal
} from "lucide-react";

// 1. IMPORT HEADER AND FOOTER (Ensure these files exist in your folder)
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function EligibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden">
      
      {/* HEADER COMPONENT */}
      <Header />

      <main>
        {/* ------------------------------------------------------------- */}
        {/* INNER PAGE HERO SECTION                                       */}
        {/* ------------------------------------------------------------- */}
        <section className="relative flex flex-col justify-center overflow-hidden min-h-[50vh] bg-[#0A192F]">
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <img src="/back.png" alt="Madhya Pradesh Industry Background" className="w-full h-full object-cover opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#001E3C]/85 to-[#000F1E]/95" />
          </div>

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-16 text-center">
            <ScrollReveal direction="up" className="mx-auto max-w-[800px]">
              <span className="inline-block bg-[#FFD700] text-[#002A54] px-4 py-2 mb-6 font-bold uppercase tracking-[1px] text-[12px] rounded-full shadow-sm">
                Eligibility Check
              </span>
              <h1 className="font-black text-white mb-6 text-[clamp(2.5rem,5vw,4rem)] tracking-[-1px] leading-[1.1]">
                Who can apply
              </h1>
              <p className="font-bold mb-6 text-[clamp(1.1rem,2vw,1.4rem)] text-[#FFD700]">
                Four conditions. Firms of every size. Twenty seats in each sector.
              </p>
              <p className="text-white/70 font-light mx-auto mb-0 text-[1.05rem] leading-[1.8] max-w-[600px]">
                The Accelerator is designed for serious exporters ready to claim their duty benefits. Ensure you meet these criteria before enrolling.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* THE FOUR CONDITIONS (PREMIUM 2x2 GRID)                        */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 px-4 bg-white">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black text-[#004B87] mb-4 text-[2.5rem] tracking-[-0.5px]">The four conditions</h2>
              <div className="mx-auto rounded w-[60px] h-[4px] bg-[#FFD700]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  num: "1", icon: <FileCheck2 size={28} />, title: "A valid Importer-Exporter Code", color: "#0284c7",
                  desc: "Issued by DGFT and active. A firm without one can get it in a few days on dgft.gov.in; the Helpdesk will guide you, and you may apply to the Accelerator in parallel." 
                },
                { 
                  num: "2", icon: <TrendingDown size={28} />, title: "A product that gains duty", color: "#16a34a",
                  desc: "Made in MP, in one of the four sectors, and on a line where the partner’s duty has fallen under an agreement in force (UAE, Australia, EFTA, Oman, UK, NZ) or will fall under the EU agreement from 2027. If in doubt, apply and the Export Cell will check." 
                },
                { 
                  num: "3", icon: <Globe size={28} />, title: "A target market", color: "#d97706",
                  desc: "One of the partner markets where you intend to sell, with or without a buyer in hand. Focus on markets where MP goods have a distinct duty advantage." 
                },
                { 
                  num: "4", icon: <UserCheck size={28} />, title: "One named person", color: "#7c3aed",
                  desc: "The owner, a director or the export manager, who will attend all eight sessions and do the work between them. The programme is built entirely around this person." 
                }
              ].map((cond, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
                  <div className="bg-gray-50 p-8 md:p-10 rounded-3xl h-full border border-gray-100 relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-white cursor-default group">
                    
                    {/* Top colored line */}
                    <div className="absolute top-0 left-0 w-full h-[6px]" style={{ backgroundColor: cond.color }}></div>
                    
                    {/* Large Watermark Number */}
                    <div className="absolute font-black opacity-[0.03] text-[12rem] -bottom-10 -right-4 leading-none select-none z-0 transition-opacity duration-300 group-hover:opacity-[0.08]" style={{ color: cond.color }}>
                      {cond.num}
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 inline-flex p-4 rounded-2xl bg-white shadow-sm self-start transition-transform duration-300 group-hover:scale-110" style={{ color: cond.color }}>
                        {cond.icon}
                      </div>
                      <h3 className="font-black text-gray-900 mb-4 text-[1.4rem] tracking-[-0.3px]">{cond.title}</h3>
                      <p className="text-gray-600 mb-0 grow text-[1rem] leading-[1.7]">{cond.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* ALSO WELCOME (SPECIAL CATEGORIES)                             */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black text-[#004B87] mb-4 text-[2.5rem] tracking-[-0.5px]">Also welcome to apply</h2>
              <div className="mx-auto rounded w-[60px] h-[4px] bg-[#FFD700]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Globe size={24} />, title: "Firms that already export", desc: "To a partner market but have never claimed the preference: the duty saving is being lost or left with the importer. This is exactly the case the Accelerator is for." },
                { icon: <Briefcase size={24} />, title: "Merchant Exporters & Traders", desc: "Provided the goods are made in India and the firm can hold the records that show their origin (a manufacturer’s declaration and the cost sheet)." },
                { icon: <Medal size={24} />, title: "Status Holders", desc: "Firms recognised as a Status Holder, which can make their own origin declaration under the New Zealand agreement." },
                { icon: <MapPin size={24} />, title: "GI and ODOP producers", desc: "Chanderi and Maheshwari fabrics, Bagh and Batik prints, Ratlami sev, basmati from Raisen, zari-zardozi of Bhopal, with the Dev Commissioner as certifier." }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
                  <div className="bg-white p-6 md:p-8 rounded-3xl h-full flex flex-col sm:flex-row gap-6 border border-gray-100 shadow-sm transition-colors duration-300 hover:border-[#004B87]">
                    <div className="shrink-0 text-[#004B87]">
                      <div className="p-4 bg-blue-50/50 rounded-2xl inline-flex">{item.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3 text-[1.1rem]">{item.title}</h5>
                      <p className="text-gray-600 mb-0 text-[0.95rem] leading-[1.6]">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* HOW FIRMS ARE SELECTED (VISUAL PRIORITY FLOW)                 */}
        {/* ------------------------------------------------------------- */}
        <section className="py-24 px-4 bg-[#004B87]">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 text-white">
                <ScrollReveal direction="left">
                  <div className="inline-flex p-4 bg-white rounded-2xl mb-8">
                    <AlertCircle size={32} color="#004B87" />
                  </div>
                  <h2 className="font-black mb-6 text-[2.5rem] tracking-[-0.5px]">How firms are selected</h2>
                  <p className="text-white/80 leading-[1.8] mb-6 text-[1.1rem]">
                    Applications are checked by the Export Cell against the four conditions, with the Export Promotion Council of the sector. Every firm that meets them is eligible.
                  </p>
                  <p className="text-white leading-[1.8] mb-8 text-[1.1rem] font-medium">
                    Where a track has more eligible applicants than twenty seats, preference is given strictly in this order:
                  </p>

                  <div className="p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm">
                    <p className="text-white mb-0 text-[0.95rem] leading-[1.6]">
                      <strong className="text-[#FFD700]">Waitlist Guarantee:</strong> Firms not placed in cohort 1 go on the waiting list and are offered a seat in cohort 2 (October 2027) without applying again. Cohort lists are published on <strong>30 November 2026</strong>.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-7">
                <ScrollReveal direction="right">
                  <div className="flex flex-col gap-5">
                    {[
                      { num: "01", title: "MSMEs Priority", desc: "Preference is first given to Micro, Small and Medium Enterprises (MSMEs)." },
                      { num: "02", title: "First-time Claimants", desc: "Firms that have never claimed a preference under any trade agreement." },
                      { num: "03", title: "Geographical Spread", desc: "A spread of districts across the State, so that a track is not filled from just one cluster." }
                    ].map((step, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-3xl shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-transform duration-300 hover:-translate-x-3 cursor-default">
                        <h2 className="font-black text-gray-200 m-0 text-[3.5rem] leading-none shrink-0">{step.num}</h2>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-[1.15rem]">{step.title}</h4>
                          <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.5]">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* MUTUAL COMMITMENTS (FIRM VS STATE CHECKLISTS)                 */}
        {/* ------------------------------------------------------------- */}
        <section className="py-24 px-4 bg-white">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black text-[#004B87] mb-4 text-[2.5rem] tracking-[-0.5px]">Mutual Commitments</h2>
              <div className="mx-auto rounded w-[60px] h-[4px] bg-[#FFD700]"></div>
              <p className="text-gray-600 mt-6 mx-auto max-w-[600px] text-[1.05rem]">What we expect from you, and what you can expect from us.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Firm Commits */}
              <ScrollReveal direction="up" delay={0.1} className="h-full">
                <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-[2rem] h-full shadow-sm">
                  <div className="flex items-center gap-5 mb-10 pb-8 border-b border-gray-200">
                    <div className="p-4 rounded-full text-white shadow-sm shrink-0" style={{ backgroundColor: '#d97706' }}>
                      <Building size={28} />
                    </div>
                    <h3 className="font-black text-gray-900 m-0 text-[1.6rem] tracking-[-0.5px]">The firm commits to:</h3>
                  </div>
                  
                  <ul className="flex flex-col gap-6 m-0 p-0 list-none">
                    {[
                      "Name one person who attends all 8 sessions. Missing two sessions revokes the seat.",
                      "Answer the four questionnaires and do the work between sessions (cost sheet, checklist, etc).",
                      "Register on DGFT’s Trade Connect ePlatform during Phase 2.",
                      "Attend the buyer meetings for its sector and follow up on the meetings it gets.",
                      "Notify the Export Cell when its first consignment ships under an agreement, and answer two short surveys.",
                      "Allow the State to count its results. The firm is named publicly only with consent."
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 items-start text-gray-700 text-[1rem] leading-[1.6]">
                        <Check size={22} className="shrink-0 mt-0.5" style={{ color: '#d97706' }} />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* State Commits */}
              <ScrollReveal direction="up" delay={0.2} className="h-full">
                <div className="bg-white border border-[#059669]/20 p-8 md:p-12 rounded-[2rem] h-full shadow-md">
                  <div className="flex items-center gap-5 mb-10 pb-8 border-b border-gray-100">
                    <div className="p-4 rounded-full text-white shadow-sm shrink-0" style={{ backgroundColor: '#059669' }}>
                      <Landmark size={28} />
                    </div>
                    <h3 className="font-black text-gray-900 m-0 text-[1.6rem] tracking-[-0.5px]">The State commits to:</h3>
                  </div>

                  <ul className="flex flex-col gap-6 m-0 p-0 list-none">
                    {[
                      "Eight structured sessions with faculty from DGFT, Customs, Councils, ECGC, and EXIM Bank.",
                      "A named Export Cell officer from orientation to first shipment, with four 1-to-1 calls.",
                      "Deliver four custom tools, built directly from the firm’s own answers.",
                      "Arrange one round of buyer meetings for the sector via Indian Missions and chambers.",
                      "Ninety days of follow-up after the programme until the first certificate is filed.",
                      "A certificate of completion from the State Export Commissioner.",
                      <span key="no-fee" className="font-bold text-[#059669]">No fee for cohort 1.</span>
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 items-start text-gray-700 text-[1rem] leading-[1.6]">
                        <Check size={22} className="shrink-0 mt-0.5" style={{ color: '#059669' }} />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* FINAL CTA SECTION                                             */}
        {/* ------------------------------------------------------------- */}
        <section className="py-24 px-4 bg-[#002A54]">
          <div className="w-full max-w-screen-xl mx-auto text-center">
            <ScrollReveal direction="up" className="mx-auto max-w-[800px]">
              <h2 className="font-black text-white mb-6 text-[2.5rem] tracking-[-0.5px]">Ready to enroll?</h2>
              <p className="text-white/70 mb-10 text-[1.1rem] leading-[1.8]">
                Ensure you meet the four conditions and commit to the timeline before submitting your application. Enrolment closes firmly on 30 November 2026.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/apply" className="font-bold rounded-full px-8 py-4 uppercase shadow-lg flex items-center justify-center gap-2 bg-[#FFD700] text-[#002A54] tracking-[1px] hover:scale-105 transition-transform duration-300">
                  Apply now <ArrowRight size={18}/>
                </Link>
                <Link href="#faq" className="border-2 border-white/50 text-white font-bold rounded-full px-8 py-4 uppercase flex items-center justify-center gap-2 tracking-[1px] hover:bg-white hover:text-[#002A54] transition-colors duration-300">
                  <HelpCircle size={18}/> Questions and answers
                </Link>
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