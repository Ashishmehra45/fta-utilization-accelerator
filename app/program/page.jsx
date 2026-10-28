'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, Calendar, Video, Phone, FileText, UserCheck, 
  BookOpen, Handshake, Globe, Package, LifeBuoy, Award,
  ArrowRight, CheckCircle2, FileQuestion, BookMarked, Users2,
  Clock, MapPin
} from "lucide-react";

// 1. IMPORT HEADER & FOOTER
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

export default function ProgrammePage() {

  // --- DATA FOR PHASES ---
  const PHASES = [
    {
      badge: "PHASE 1",
      color: "#004B87",
      bgLight: "rgba(0, 75, 135, 0.05)",
      title: "The agreement for your product",
      dates: "1 to 10 December 2026",
      opensWith: "The Readiness Questionnaire: products and HS codes, markets served, shipments in the last year, inputs imported, certificates held, whether a preference has ever been claimed, who in the firm owns exports.",
      sessions: [
        { num: "1", date: "Thu, 3 Dec", title: "The agreements and your product", desc: "The six agreements in force and the EU agreement to come; what each gives the sector; the State’s list of 870 product-market lines and how to read it; demand in the partner markets; where the duty was already zero; the readiness score explained." },
        { num: "2", date: "Thu, 10 Dec", title: "Choosing the first shipment", desc: "The duty saved per consignment, product by product; the worth-claiming test; choosing the product and the market for the first shipment; what Phase 2 will ask for." }
      ],
      call: "The product-agreement check: the officer goes through the firm’s product list and confirms the agreement, the line and the duty for each, and the choice for the first shipment.",
      closesWith: "Tool 01, the Duty Saving Sheet: the firm’s products against the State’s list, the agreement, the duty before and after, the saving per consignment, the product and market chosen, and the readiness score with what to fix.",
      faculty: "DGFT Regional Authority, Bhopal; the MPIDC Export Cell; the Export Promotion Council of the sector."
    },
    {
      badge: "PHASE 2",
      color: "#b45309",
      bgLight: "rgba(180, 83, 9, 0.05)",
      title: "The rule of origin and its proof",
      dates: "11 December 2026 to 7 January 2027",
      opensWith: "The Origin Questionnaire: the bill of materials for the chosen product, the imported inputs and their value, the ex-works and FOB price, the suppliers of Indian inputs, the records the firm keeps, the digital signature linked to the IEC.",
      sessions: [
        { num: "3", date: "Thu, 17 Dec", title: "Does your product qualify", desc: "Wholly obtained goods; change in tariff classification; value content by the build-up and build-down methods; tolerance; cumulation; the textile, chemical and food rules; the cost sheet; supplier declarations for Indian inputs; what does not confer origin." },
        { num: "4", date: "Thu, 7 Jan", title: "Proof of origin on Trade Connect", desc: "Registration on DGFT’s Trade Connect ePlatform, done live; self-declaration (UK, EFTA; Status Holders for NZ) and agency certificates; the invoice number on the certificate and shipping bill; retrospective issue; records for five years; answering verification requests." }
      ],
      call: "The origin review: the officer checks the cost sheet and the origin determination with the firm, line by line, and confirms the route for the proof.",
      closesWith: "Tool 02, the Origin File: the cost sheet, the origin determination, the supplier declarations, the Trade Connect registration and a draft of the first certificate or declaration.",
      faculty: "DGFT (Trade Connect); Export Inspection Agency, Textiles Committee, APEDA and Spices Board; Customs; empanelled customs brokers."
    },
    {
      badge: "PHASE 3",
      color: "#047857",
      bgLight: "rgba(4, 120, 87, 0.05)",
      title: "The market: standards, cost and finance",
      dates: "8 to 21 January 2027",
      opensWith: "The Market Questionnaire: the target market and any buyer in hand, certifications held, the route from the factory to the port, bank and credit arrangements, insurance, the assistance already claimed under the Export Policy or the Mission.",
      sessions: [
        { num: "5", date: "Thu, 14 Jan", title: "What the border and the buyer require", desc: "UK import controls and UKCA/CE marking; UAE conformity, Halal and Arabic labelling; Australian import conditions; EFTA rules; GMP for medicines; residue limits; fibre labelling. Who tests/certifies in the State. Assistance under Export Policy." },
        { num: "6", date: "Thu, 21 Jan", title: "The landed cost and the money", desc: "Factory to ICD to port; freight and transit times; incoterms; ECGC insurance; pre- and post-shipment finance; interest subvention, collateral cover and factoring; freight assistance; landed-cost sheet; the price with the duty advantage shown." }
      ],
      call: "The landed-cost review: the officer checks the landed cost and the price with the firm and lists the assistance it can claim, with the forms.",
      closesWith: "Tool 03, the Market Entry Sheet: the requirements checklist for the market with who certifies, the landed cost from factory to market, the price with the duty advantage, and the claims plan.",
      faculty: "The Export Promotion Council of the sector; the Export Inspection Agency and the testing laboratories; ECGC; EXIM Bank and SIDBI; the MPIDC Export Cell; the inland container depot operators."
    },
    {
      badge: "PHASE 4",
      color: "#6d28d9",
      bgLight: "rgba(109, 40, 217, 0.05)",
      title: "The buyer",
      dates: "22 January to 28 February 2027",
      opensWith: "The Buyer Questionnaire: the buyers the firm wants to meet, the channel (importer, distributor, retailer, manufacturer), samples and catalogue ready, who will attend the meetings, availability for travel.",
      sessions: [
        { num: "7", date: "Thu, 28 Jan", title: "The pitch (in person, Indore)", desc: "The one-page offer; the price with the duty advantage; catalogue and samples; the questions buyers ask and the answers; mock pitches before a panel of importers, Council officers and mentors; preparation for the buyer meetings." },
        { num: "—", date: "8 to 19 Feb", title: "Buyer meetings (Special Event)", desc: "One round of buyer meetings for each sector, arranged through the Indian Missions and bilateral chambers (London, Dubai, Sydney, Melbourne, Berne). Online or at a trade fair. Each firm’s meetings are recorded in its plan." },
        { num: "8", date: "Thu, 25 Feb", title: "Closing: the first shipment", desc: "Each firm reports its meetings and its next step; the first-shipment plan is signed off by the firm and its officer; the follow-up calendar to the first consignment; the certificate of completion." }
      ],
      call: "The pitch rehearsal: the officer and a mentor hear the firm’s offer and fix it before the pitch day.",
      closesWith: "Tool 04, the First-Shipment Plan: the one-page offer, the buyer target list, the record of the meetings and the plan to the first consignment.",
      faculty: "The Indian Missions and bilateral chambers; importers and distributors from the partner markets; the Export Promotion Council of the sector; exporters of the State who have shipped under the agreements, as mentors."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* HEADER COMPONENT                                              */}
      {/* ------------------------------------------------------------- */}
      <Header />

      <main>
        {/* ------------------------------------------------------------- */}
        {/* HERO SECTION - CLEAN AND CENTERED                             */}
        {/* ------------------------------------------------------------- */}
        <section className="relative flex flex-col justify-center overflow-hidden min-h-[50vh] bg-[#0A192F]">
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <img src="/back.png" alt="Madhya Pradesh Industry Background" className="w-full h-full object-cover opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#001E3C]/85 to-[#000F1E]/95" />
          </div>

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-16 text-center">
            <ScrollReveal direction="up" className="mx-auto max-w-[800px]">
              <span className="inline-block bg-[#f1efe5] text-[#002A54] px-4 py-2 mb-6 font-bold uppercase tracking-[1px] text-[12px] rounded-full shadow-sm">
                Detailed Overview
              </span>
              <h1 className="font-black text-white mb-6 text-[clamp(2.5rem,5vw,4rem)] tracking-[-1px] leading-[1.1]">
                The Programme
              </h1>
              <p className="font-bold mb-6 text-[clamp(1.1rem,2vw,1.4rem)] text-[#e9e8e6]">
                Four phases, eight sessions, four one-to-one calls, buyer meetings in February, ninety days of follow-up.
              </p>
              <p className="text-white/70 font-light mx-auto mb-0 text-[1.05rem] leading-[1.8] max-w-[700px]">
                Built around one document: the firm’s first-shipment plan. Each phase opens with a questionnaire, has two working sessions and a one-to-one call with your Export Cell officer, and closes with a tool you keep. We follow up until your first consignment ships.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* THE FORMAT (MODERN GRID)                                      */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 px-4 bg-white">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black text-[#004B87] mb-4 text-[2.5rem] tracking-[-0.5px]">The Format</h2>
              <div className="mx-auto rounded w-[60px] h-[4px] bg-[#002A54]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Users size={22} />, title: "Cohort", desc: "80 firms in four sector tracks of 20: engineering & auto, pharma, agriculture & food, textiles & apparel." },
                { icon: <Calendar size={22} />, title: "Dates", desc: "1 Dec 2026 to 28 Feb 2027. Orientation on 1 Dec; sessions on Thursdays, 10-11:30 AM. Break: 24 Dec - 6 Jan." },
                { icon: <Video size={22} />, title: "Sessions", desc: "Eight 90-min sessions. 1-6 & 8 online; Session 7 (Pitch Day) in person at Indore." },
                { icon: <Phone size={22} />, title: "One-to-one calls", desc: "One 30-min call with your Export Cell officer in each phase for personalized review and prep." },
                { icon: <FileQuestion size={22} />, title: "Questionnaires & Tools", desc: "Each phase opens with a 10-min questionnaire and closes with a custom tool built from your answers." },
                { icon: <UserCheck size={22} />, title: "Who attends", desc: "One named person (owner/director/manager) attends all 8 sessions. A second may join online." },
                { icon: <BookOpen size={22} />, title: "Work between sessions", desc: "Each session sets one practical task (2-4 hrs) to bring to the next session." },
                { icon: <Handshake size={22} />, title: "Buyer meetings", desc: "Phase 4 includes buyer meetings arranged via Indian Missions & bilateral chambers." },
                { icon: <Globe size={22} />, title: "Language", desc: "Sessions in Hindi and English. Materials in English; Hindi Handbook follows in Jan 2027." },
                { icon: <Package size={22} />, title: "Materials", desc: "Shipment plan template, FTA Handbook, worksheets, Q&A records, and session recordings." },
                { icon: <LifeBuoy size={22} />, title: "Support", desc: "Priority FTA Helpdesk, WhatsApp group, and monthly online clinics with customs brokers." },
                { icon: <Award size={22} />, title: "Certificate", desc: "Certificate of completion from State Export Commissioner for firms completing their plan." }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05} direction="up" className="h-full">
                  <div className="bg-gray-50 p-6 rounded-2xl h-full border border-gray-100 flex flex-col items-start transition-all duration-300 hover:bg-white hover:border-gray-200 hover:shadow-md cursor-default">
                    <div className="flex items-center gap-4 mb-4 w-full">
                      <div className="p-3 rounded-xl bg-[#004B87]/10 text-[#004B87]">
                        {item.icon}
                      </div>
                      <h4 className="font-bold m-0 text-gray-900 text-[1.1rem]">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.6]">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* THE 4 PHASES (TIMELINE / MODERN CARD LAYOUT)                  */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
          <div className="w-full max-w-screen-xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="font-black text-[#004B87] mb-4 text-[2.5rem] tracking-[-0.5px]">The Four Phases</h2>
              <div className="mx-auto rounded w-[60px] h-[4px] bg-[#002A54]"></div>
            </div>

            <div className="flex flex-col gap-12">
              {PHASES.map((phase, idx) => (
                <ScrollReveal key={idx} direction="up">
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                    
                    {/* Top Color Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[6px]" style={{ backgroundColor: phase.color }}></div>
                    
                    <div className="p-6 md:p-10 lg:p-12">
                      {/* Phase Header */}
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-100 pb-8">
                        <div>
                          <span className="inline-block px-4 py-2 mb-4 font-bold rounded-lg tracking-[1px] uppercase text-[0.85rem]" style={{ backgroundColor: phase.bgLight, color: phase.color }}>
                            {phase.badge}
                          </span>
                          <h3 className="font-black text-gray-900 m-0 text-[clamp(1.5rem,3vw,2.2rem)] tracking-[-0.5px]">
                            {phase.title}
                          </h3>
                        </div>
                        <div className="mt-6 md:mt-0 md:text-right">
                          <span className="text-gray-500 font-bold block mb-1 text-[0.85rem] uppercase tracking-[1px] flex items-center md:justify-end gap-1">
                            <Calendar size={14} className="pb-0.5"/> Timeline
                          </span>
                          <span className="font-bold text-gray-900 text-xl">{phase.dates}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* LEFT COLUMN: Process Details */}
                        <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-8 lg:border-r lg:border-gray-100">
                          
                          <div>
                            <h6 className="font-bold uppercase flex items-center gap-2 mb-3 text-[#d97706] text-[0.85rem] tracking-[1px]">
                              <FileQuestion size={18} /> Opens With
                            </h6>
                            <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.6]">{phase.opensWith}</p>
                          </div>

                          <div>
                            <h6 className="font-bold uppercase flex items-center gap-2 mb-3 text-[#0284c7] text-[0.85rem] tracking-[1px]">
                              <Phone size={18} /> One-to-one call
                            </h6>
                            <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.6]">{phase.call}</p>
                          </div>

                          <div>
                            <h6 className="font-bold uppercase flex items-center gap-2 mb-3 text-[#16a34a] text-[0.85rem] tracking-[1px]">
                              <BookMarked size={18} /> Closes With
                            </h6>
                            <p className="text-gray-900 font-medium m-0 text-[0.95rem] leading-[1.6]">{phase.closesWith}</p>
                          </div>

                          <div className="pt-6 border-t border-gray-100 mt-auto">
                            <h6 className="font-bold uppercase flex items-center gap-2 mb-3 text-gray-500 text-[0.85rem] tracking-[1px]">
                              <Users2 size={18} /> Faculty
                            </h6>
                            <p className="text-gray-600 m-0 text-[0.9rem] leading-[1.5]">{phase.faculty}</p>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Sessions Timeline */}
                        <div className="lg:col-span-7 lg:pl-4">
                          <h6 className="font-bold text-gray-900 uppercase mb-8 text-[0.85rem] tracking-[1px]">Sessions Overview</h6>
                          
                          <div className="flex flex-col gap-8">
                            {phase.sessions.map((session, i) => (
                              <div key={i} className="flex gap-4 md:gap-6">
                                {/* Timeline Node */}
                                <div className="flex flex-col items-center mt-1">
                                  <div className="flex items-center justify-center rounded-full text-white font-bold shadow-sm shrink-0 w-[40px] h-[40px] text-[0.95rem]" style={{ backgroundColor: phase.color }}>
                                    {session.num}
                                  </div>
                                  {i !== phase.sessions.length - 1 && (
                                    <div className="flex-grow mt-3 w-[2px] bg-gray-200 min-h-[50px]"></div>
                                  )}
                                </div>
                                {/* Session Content */}
                                <div className="pb-4">
                                  <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-3">
                                    <h5 className="font-bold text-gray-900 m-0 text-[1.15rem]">{session.title}</h5>
                                    <span className="bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1 rounded shrink-0 flex items-center gap-1 text-[0.8rem] font-medium">
                                      <Clock size={12}/> {session.date}
                                    </span>
                                  </div>
                                  <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.6]">
                                    {session.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* AFTER THE PROGRAMME                                           */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 px-4 bg-white">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black text-[#004B87] mb-4 text-[2.5rem] tracking-[-0.5px]">After the programme</h2>
              <div className="mx-auto rounded w-[60px] h-[4px] bg-[#002A54]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Follow-up", date: "March to May 2027", desc: "Export Cell officer follows firm until first preferential certificate is filed and consignment ships. Agency, broker, bank, Export Policy claim tracked." },
                { title: "Results", date: "August 2027", desc: "State publishes cohort's results: firms completing, shipping under agreement, markets used. Target: 3 in 5 firms shipping within 6 months." },
                { title: "Cohort 2", date: "October 2027", desc: "Eighty more firms, with district quotas, a chemicals track, and a track for first-time exporters. Cohort 1 graduates mentor cohort 2." }
              ].map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
                  <div className="bg-gray-50 p-8 md:p-10 rounded-3xl h-full text-center border border-gray-100 flex flex-col items-center">
                    <span className="bg-blue-600 text-white mb-6 px-4 py-2 rounded-full shadow-sm tracking-[1px] text-[0.8rem] font-bold uppercase">{step.date}</span>
                    <h4 className="font-black text-gray-900 mb-4 text-2xl">{step.title}</h4>
                    <p className="text-gray-600 m-0 text-base leading-[1.7]">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* FACULTY & FINAL CTA                                           */}
        {/* ------------------------------------------------------------- */}
        <section className="py-24 px-4 bg-[#002A54]">
          <div className="w-full max-w-screen-xl mx-auto text-center">
            <ScrollReveal direction="up" className="mx-auto max-w-[850px]">
              <h2 className="font-black text-white mb-6 text-[2.5rem] tracking-[-0.5px]">Who teaches</h2>
              <p className="text-white/70 mb-12 text-[1.1rem] leading-[1.8]">
                The people who write the rules and the people who have used them. Officers of the DGFT Regional Authority, Bhopal, and of DGFT headquarters for Trade Connect; the Bhopal and Indore Customs Commissionerates; the Export Inspection Agency, the Textiles Committee, APEDA and the Spices Board, which issue the certificates; the Export Promotion Councils (EEPC India, Pharmexcil, APEDA, FIEO, AEPC, TEXPROCIL); ECGC, EXIM Bank and SIDBI; the Indian Missions and bilateral chambers; and exporters of Madhya Pradesh who have already shipped under the agreements, as mentors.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/apply" className="font-bold rounded-full px-8 py-4 uppercase shadow-lg flex items-center justify-center gap-2 bg-[#002A54] text-[#eaebec] tracking-[1px] hover:scale-105 transition-transform duration-300 border-2 border-[#d3d4d5] hover:bg-[#eaebec] hover:text-[#002A54]">
                  Apply now <ArrowRight size={18}/>
                </Link>
                <Link href="/sector" className="border-2 border-white/50 text-white font-bold rounded-full px-8 py-4 uppercase flex items-center justify-center tracking-[1px] hover:bg-white hover:text-[#002A54] transition-colors">
                  See sector tracks
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------- */}
      {/* FOOTER COMPONENT                                              */}
      {/* ------------------------------------------------------------- */}
      <Footer />

    </div>
  );
}