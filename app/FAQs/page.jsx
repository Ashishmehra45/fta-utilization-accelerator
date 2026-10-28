'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

// HEADER AUR FOOTER IMPORT (Apne folder structure ke hisaab se path adjust kar lena)
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- FAQ DATA ---
const faqs = [
  {
    question: "What is the Madhya Pradesh FTA Accelerator?",
    answer: "A twelve-week programme of the Government of Madhya Pradesh that takes eighty firms of the State, twenty in each of four sectors, from a product to their first shipment under a trade agreement, in four phases: the agreement for the product, the rule of origin and its proof, the market and its costs, and the buyer. It ends with buyer meetings for each sector. It is run by the Export Cell of the M.P. Industrial Development Corporation and was launched by the Hon’ble Chief Minister on 5 November 2026."
  },
  {
    question: "Is there a fee?",
    answer: "No. The State bears cohort 1. The firm bears its own travel for the in-person day and its own costs of samples, testing, certification and shipment, for which assistance is available under the Madhya Pradesh Export Policy 2025 and the Export Promotion Mission."
  },
  {
    question: "Who can apply?",
    answer: "Any firm in Madhya Pradesh in one of the four sectors that has a valid Importer-Exporter Code, a product that gains duty under an agreement, a target market, and one named person who will attend every session. Firms of every size."
  },
  {
    question: "Which sectors?",
    answer: "Engineering and auto components, pharmaceuticals, agriculture and food, and textiles and apparel: the State’s four largest export sectors. Chemicals joins in cohort 2."
  },
  {
    question: "We have never exported. Can we apply?",
    answer: "Yes, if you have an Importer-Exporter Code (or have applied for one) and a product that gains duty under an agreement. Cohort 1 is selected on readiness, so a firm with a product, a market in mind and a named person is ready enough. Cohort 2, in October 2027, will have a separate track for first-time exporters."
  },
  {
    question: "We are a merchant exporter. Can we apply?",
    answer: "Yes, provided the goods are made in India and you can hold the records that show their origin: a declaration from the manufacturer and the cost sheet. Phase 2 covers exactly what a merchant exporter needs from its supplier."
  },
  {
    question: "Do we have to be an MSME?",
    answer: "No. Firms of every size may apply. Where a track has more eligible applicants than seats, MSMEs, firms that have never claimed a preference, and districts outside the main clusters get preference."
  },
  {
    question: "Can we bring more than one product or market?",
    answer: "You may name up to three product lines and two markets. The first-shipment plan is built for one product and one market, because that is what gets a consignment moving; the method then carries to the rest."
  },
  {
    question: "We already export to the United Kingdom and the UAE but have never claimed the preference. Is this for us?",
    answer: "Yes. This is the most common case in the State and the one the Accelerator is built for. The duty saving on every consignment you have shipped has either been lost or kept by the importer. Phase 2 takes you from your current invoices to a filed certificate."
  },
  {
    question: "What is a “first shipment under an agreement”?",
    answer: "A consignment that enters the partner market at the agreement’s preferential duty against a certificate of origin, or an origin declaration, issued for that consignment. The importer claims the lower duty against the document; the exporter issues or obtains the document. That is the Accelerator’s measure of success for each firm."
  },
  {
    question: "How are the phases run?",
    answer: "Each phase opens with a ten-minute questionnaire, has two sessions of ninety minutes on Thursday mornings and one thirty-minute call with your Export Cell officer, and closes with a tool built from your own answers: the Duty Saving Sheet, the Origin File, the Market Entry Sheet and the First-Shipment Plan. A question asked by one firm is answered in writing for every firm before the next session."
  },
  {
    question: "Where are the sessions held and who teaches?",
    answer: "Online, except Session 7, the pitch day, which is held in person at Indore on 28 January 2027. Faculty come from the DGFT Regional Authority, Bhopal, and DGFT headquarters; the Bhopal and Indore Customs Commissionerates; the Export Inspection Agency, the Textiles Committee, APEDA and the Spices Board; the Export Promotion Councils of the four sectors; ECGC, EXIM Bank and SIDBI; the Indian Missions; and exporters of the State who have shipped under the agreements."
  },
  {
    question: "In which language?",
    answer: "Hindi and English in the sessions. The materials are in English; the Hindi edition of the Handbook follows in January 2027."
  },
  {
    question: "What does our firm have to do?",
    answer: "Name one person who attends all eight sessions; answer the four questionnaires; do the work between sessions (two to four hours each time); register on Trade Connect in Phase 2; attend the buyer meetings; tell the Export Cell when the first consignment ships; answer two short surveys."
  },
  {
    question: "What if our named person misses a session?",
    answer: "The recording and the worksheet are shared the same day, and the Export Cell officer helps the person catch up. A firm whose named person misses two sessions leaves the cohort and its seat goes to the waiting list; the seats are limited and other firms are waiting."
  },
  {
    question: "How do the buyer meetings work?",
    answer: "In Phase 4, after the pitch day, the Export Cell arranges one round of meetings for each sector through the Indian Missions and bilateral chambers in the partner markets, between 8 and 19 February 2027, online or at a trade fair. Each firm goes in with its one-page offer and its price with the duty advantage shown. The meetings each firm gets are recorded in its plan. The order is the firm’s to win; firms that arrive with an enquiry in hand use the programme to convert it."
  },
  {
    question: "Does the State pay for the certificate, the testing or the freight?",
    answer: "The self-declaration under the UK and EFTA agreements is free; an agency certificate costs a small fee. Testing, certification, freight and marketing are the firm’s costs, and assistance for them is available under the Madhya Pradesh Export Policy 2025 (claimed through MPIDC’s single window) and under the Export Promotion Mission (claimed on DGFT’s portals). Phase 3 shows what to claim and how."
  },
  {
    question: "What happens after the programme?",
    answer: "Ninety days of follow-up: the firm’s Export Cell officer stays with it until the first certificate or declaration is filed and the consignment ships. After that the firm keeps the Helpdesk and the Export Cell, its shipment is counted in the State’s FTA dashboard, and graduates are invited to mentor cohort 2 and to the State’s buyer-seller meets and delegations."
  },
  {
    question: "How is our information used?",
    answer: "The application and the questionnaires are used to select the cohort and to build the firm’s tools. The cost sheet and the buyer information stay with the firm. Shipment results are reported in aggregate; a firm is named on this page only with its consent."
  },
  {
    question: "How do we apply, and when do we hear?",
    answer: "On the Apply page of this Portal, at the FTA Helpdesk in Bhopal, or at the enrolment desk of the Conclave on 5 November 2026. Enrolment closes on 30 November 2026. The cohort lists are published on this Portal the same day and every applicant receives an email. Selected firms receive the enrolment letter, the orientation link for 1 December and the Readiness Questionnaire."
  },
  {
    question: "We missed cohort 1. What now?",
    answer: "Register interest on the Apply page. Cohort 2 opens in October 2027 with district quotas, a chemicals track and a track for first-time exporters. Waiting-list firms from cohort 1 are offered a seat first."
  }
];

// --- ACCORDION ITEM COMPONENT ---
const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <h3
          className={`font-bold text-[1.1rem] md:text-[1.2rem] pr-8 transition-colors duration-300 ${
            isOpen ? "text-[#004B87]" : "text-gray-900 group-hover:text-[#004B87]"
          }`}
        >
          {faq.question}
        </h3>
        <span
          className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#004B87]/10 text-[#004B87] rotate-180"
              : "bg-gray-50 text-gray-400 group-hover:bg-[#004B87]/5 group-hover:text-[#004B87]"
          }`}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-[1.05rem] leading-[1.7] pl-2 border-l-2 border-[#004B87]/20 ml-2">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0); // Pehla sawal by default open rakha hai

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden flex flex-col">
      
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="w-full max-w-[900px] mx-auto">
            
            {/* HEADER SECTION */}
            <div className="text-center mb-16 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <span className="inline-block bg-white text-[#004B87] border border-[#004B87]/10 px-5 py-2 mb-4 text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  FAQ
                </span>
                
                {/* HEADLINE THIN KI GAYI HAI (font-bold instead of font-black) */}
                <h1 className="font-bold mb-4 text-[clamp(2.5rem,4vw,3.5rem)] text-[#004B87] tracking-tight">
                  Questions and answers
                </h1>
                
                <div className="mb-6 rounded-full w-[60px] h-[4px] bg-[#004B87]"></div>
              </motion.div>
            </div>

            {/* ACCORDION LIST */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 mb-12">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>

            {/* HELPDESK CTA BOX */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#004B87] rounded-[2rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background pattern/glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-white font-bold text-[1.5rem] md:text-[2rem] mb-4">
                  A question that is not here?
                </h3>
                <p className="text-blue-100 text-[1.1rem] md:text-[1.2rem] mb-8 max-w-[600px]">
                  A question asked by one firm becomes a written answer on this page for every firm. Ask the FTA Helpdesk:
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                  <Link 
                    href="tel:1800XXXXXXX" 
                    className="flex items-center gap-3 bg-white text-[#004B87] px-8 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform w-full sm:w-auto justify-center"
                  >
                    <Phone size={20} />
                    <span>1800-XXX-XXXX</span>
                  </Link>
                  <Link 
                    href="mailto:fta@mpidc.gov.in" 
                    className="flex items-center gap-3 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto justify-center backdrop-blur-sm"
                  >
                    <MessageSquare size={20} />
                    <span>fta@mpidc.gov.in</span>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );
}