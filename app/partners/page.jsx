'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Building2, Users, Landmark, FileCheck, 
  Briefcase, Globe, UserCheck, Mail, Download, Megaphone
} from "lucide-react";

// HEADER AUR FOOTER IMPORT (Apne folder path ke hisaab se set karein)
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- SCROLL REVEAL COMPONENT ---
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

// --- PARTNERS DATA ---
const partners = [
  {
    title: "Export Promotion Councils",
    icon: <Building2 size={24} />,
    desc: "Nominate your Madhya Pradesh members for the track of your sector; send an officer as faculty for Phases 1 and 3; join the panel on the pitch day; co-host the buyer meetings of your sector; receive the list of cohort firms in your sector for your own buyer-seller meets."
  },
  {
    title: "Industry associations and chambers",
    icon: <Users size={24} />,
    desc: "Circulate this page to your members with the enrolment deadline; nominate members; host the pitch day; bring your members’ bottlenecks to the Helpdesk and the State’s logistics meeting."
  },
  {
    title: "District Industries Centres & DEPCs",
    icon: <Landmark size={24} />,
    desc: "Identify two to five firms from the district for each track and help them apply at the Centre; add the Accelerator to the District Export Action Plan; follow up the district’s firms after the programme."
  },
  {
    title: "Certificate-issuing agencies",
    icon: <FileCheck size={24} />,
    sub: "(EIA, Textiles Committee, APEDA, Spices Board, DC Handicrafts)",
    desc: "Teach Session 4 for your products; hold a desk day for cohort firms during the follow-up so that the first certificate is issued without delay."
  },
  {
    title: "Banks, ECGC, EXIM Bank and SIDBI",
    icon: <Briefcase size={24} />,
    desc: "Teach Session 6; offer cohort firms a single point of contact for export credit, the Mission’s interest subvention and collateral cover, and export credit insurance."
  },
  {
    title: "Indian Missions and bilateral chambers",
    icon: <Globe size={24} />,
    desc: "Host the buyer meetings for a sector, online or at a fair; share buyer lists; receive the one-page offers of the cohort firms."
  },
  {
    title: "Exporters of the State",
    icon: <UserCheck size={24} />,
    sub: "(Who have shipped under the agreements)",
    desc: "Mentor a group of firms in your sector: one call a month during the programme and the follow-up, and a seat on the pitch-day panel. Mentors are named on this page with their consent."
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden flex flex-col">
      
      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative bg-[#0A192F] py-20 px-4 overflow-hidden">
          {/* Background pattern/gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#001932]/80 to-[#000a19]/90 z-0" />
          
          <div className="relative z-10 w-full max-w-[900px] mx-auto text-center pt-8 md:pt-12">
            <ScrollReveal direction="up">
              <span className="inline-block bg-white/10 text-blue-100 border border-white/20 px-5 py-2 mb-6 text-[11px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                For Partners
              </span>
              
              <h1 className="font-bold mb-6 text-[clamp(2.2rem,4vw,3.5rem)] text-white tracking-tight leading-[1.2]">
                For Councils, associations, districts and banks
              </h1>
              
              <div className="mb-8 rounded-full w-[60px] h-[4px] bg-white mx-auto opacity-50"></div>
              
              <p className="text-blue-50 text-[1.1rem] md:text-[1.2rem] leading-[1.7] max-w-[800px] mx-auto font-light">
                Cohort 1 is recruited through the Export Promotion Councils, the industry associations of the State and the District Industries Centres, and taught by the agencies that issue the certificates, the Councils, ECGC and EXIM Bank.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* PARTNERS CARDS GRID */}
        <section className="py-20 px-4 bg-gray-50 -mt-10 relative z-20">
          <div className="w-full max-w-screen-xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {partners.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 hover:border-[#004B87]/30">
                    
                    {/* Icon Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gray-50 text-[#004B87] rounded-xl group-hover:bg-[#004B87] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-[1.15rem] leading-tight text-gray-900 group-hover:text-[#004B87] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Subtext if exists */}
                    {item.sub && (
                      <p className="text-[0.75rem] font-bold text-gray-400 uppercase tracking-wide mb-4 leading-relaxed -mt-3">
                        {item.sub}
                      </p>
                    )}

                    {/* What you can do (Description) */}
                    <div className="mt-auto">
                      <span className="block font-bold uppercase mb-2 text-[0.7rem] tracking-widest text-[#004B87]/50">
                        What you can do
                      </span>
                      <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.7]">
                        {item.desc}
                      </p>
                    </div>
                    
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* ACTIONS & INSTRUCTIONS SECTION */}
        <section className="py-16 px-4 bg-white border-t border-gray-200">
          <div className="w-full max-w-screen-xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* Box 1: Nominate Members */}
              <ScrollReveal direction="left" className="bg-[#004B87]/5 border border-[#004B87]/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Users size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-[#004B87] text-[1.6rem] mb-4 flex items-center gap-3">
                    <Mail className="text-[#004B87]" /> Nominate members
                  </h3>
                  <p className="text-gray-600 leading-[1.7] mb-4 text-[1.05rem]">
                    Send a list (firm, district, product, named person, mobile, email, track) to <strong className="text-gray-900">fta@mpidc.gov.in</strong> with the subject "Accelerator nominations", or ask the Export Cell to hold an online briefing for your members.
                  </p>
                  <p className="text-gray-600 leading-[1.7] text-[1.05rem] m-0 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <strong className="text-[#004B87]">Note:</strong> Nominated firms still apply on the Apply page, so that every firm is checked against the same four conditions.
                  </p>
                </div>
              </ScrollReveal>

              {/* Box 2: Enrolment Desk */}
              <ScrollReveal direction="right" delay={0.2} className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Megaphone size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-gray-900 text-[1.6rem] mb-4 flex items-center gap-3">
                    <Building2 className="text-gray-500" /> Enrolment desk at your events
                  </h3>
                  <p className="text-gray-600 leading-[1.7] mb-4 text-[1.05rem]">
                    The Export Cell places an FTA desk, with the Helpdesk and Accelerator enrolment, at the State’s trade events: regional industry conclaves, the Global Investors Summit 2027 and its roadshows, Bharat Tex, the ODOP exhibitions.
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <span className="font-bold text-sm uppercase tracking-wide text-gray-500">Ask for the desk:</span>
                    <a href="mailto:fta@mpidc.gov.in" className="font-bold text-[#004B87] hover:underline">fta@mpidc.gov.in</a>
                  </div>
                </div>
              </ScrollReveal>
              
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link 
                href="mailto:fta@mpidc.gov.in?subject=Accelerator%20nominations" 
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#004B87] text-white font-bold rounded-full shadow-lg hover:bg-[#003366] hover:-translate-y-1 transition-all"
              >
                <Users size={18} /> Nominate members
              </Link>
              <Link 
                href="/brochure.pdf" 
                target="_blank"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-[#004B87] border border-gray-200 font-bold rounded-full shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <Download size={18} /> Download the brochure
              </Link>
            </ScrollReveal>

          </div>
        </section>

      </main>

      {/* FOOTER COMPONENT */}
      <Footer />
      
    </div>
  );
}