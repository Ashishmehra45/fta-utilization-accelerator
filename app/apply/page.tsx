'use client';

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, User, LayoutGrid, Package, Globe, MessageSquare, 
  CheckSquare, Send, CheckCircle2, ArrowLeft, Settings, 
  FlaskConical, Leaf, Shirt, UploadCloud, AlertCircle, ArrowRight
} from "lucide-react";

// IMPORT HEADER AND FOOTER (Path apne folder structure ke hisaab se adjust kar lena)
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- Scroll & Animations ---
const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    none: { x: 0, y: 0 }
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  
  // --- MULTI-STEP LOGIC ---
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const stepTitles = [
    "Firm Details", "Attendee Info", "Sector Track", "Product Details", "Market & Buyer", "Final Question", "Declaration"
  ];

  // Validate current step before moving next
  const handleNext = () => {
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    const inputs = currentStepElement.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    for (let input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
        break;
      }
    }

    if (isValid) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FINAL SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRefNumber("FTA" + Math.floor(100000 + Math.random() * 900000));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  // Premium Tailwind Input Styles
  const inputStyle = "w-full bg-gray-50 text-gray-900 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent transition-all placeholder:text-gray-400";
  const selectStyle = "w-full bg-gray-50 text-gray-900 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent transition-all appearance-none cursor-pointer";

  // Reusable Premium Form Section Wrapper
  const FormSection = ({ icon, title, color, children }) => (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ backgroundColor: color }}></div>
      
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
        <div className="p-4 rounded-2xl text-white shadow-sm flex items-center justify-center w-[60px] h-[60px]" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <h3 className="font-black text-gray-900 m-0 text-[1.6rem] tracking-[-0.5px]">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden">
      
      <Header />

      <main>
        {/* ------------------------------------------------------------- */}
        {/* INNER PAGE HERO SECTION (WHITE/LIGHT THEME)                   */}
        {/* ------------------------------------------------------------- */}
        <section className="relative flex flex-col justify-center overflow-hidden bg-white border-b border-gray-100 min-h-[35vh]">
          
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img src="/back.png" alt="Madhya Pradesh Industry Background" className="w-full h-full object-cover opacity-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/70 to-white" />
          </div>

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 pt-16 pb-12 text-center">
            <ScrollReveal direction="up" className="mx-auto max-w-[850px]">
              <span className="inline-block bg-[#004B87]/10 text-[#004B87] px-4 py-2 mb-4 font-bold uppercase tracking-[1px] text-[12px] rounded-full">
                Cohort 1 Enrollment
              </span>
              
              <h1 className="font-black text-gray-900 mb-4 text-[clamp(2rem,4vw,3.5rem)] tracking-[-1px] leading-tight">
                Apply to the Accelerator
              </h1>
              
              <p className="text-gray-600 font-medium mx-auto m-0 text-[1.05rem] max-w-[700px] leading-[1.6]">
                Fill the form below or bring it to the FTA Helpdesk at the MPIDC Export Cell. Keep your Importer-Exporter Code (IEC) and product HS code at hand.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* MULTI-STEP WIZARD FORM AREA                                   */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 px-4">
          <div className="w-full max-w-screen-lg mx-auto py-2">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <div className="w-full mx-auto max-w-[850px]">
                  
                  {/* WIZARD PROGRESS BAR */}
                  <div className="mb-10 pb-4">
                    <div className="flex justify-between items-end mb-3">
                      <span className="font-bold text-[#004B87] uppercase text-[12px] tracking-[1px]">
                        Step {currentStep} of {totalSteps}
                      </span>
                      <span className="font-bold text-gray-900 text-[15px]">
                        {stepTitles[currentStep - 1]}
                      </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2.5 shadow-sm border border-gray-100 overflow-hidden">
                      <div 
                        className="bg-[#004B87] h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* FORM BODY */}
                  <form id="apply-form" onSubmit={handleSubmit}>
                    
                    {/* STEP 1: THE FIRM */}
                    <div id="step-1" className={currentStep === 1 ? 'block' : 'hidden'}>
                      <FormSection icon={<Building2 size={28}/>} title="A. The firm" color="#004B87">
                        <div className="md:col-span-2">
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Firm name <span className="text-red-500">*</span></label>
                          <input type="text" required className={inputStyle} placeholder="As on the IEC" />
                        </div>
                        
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Importer-Exporter Code (IEC) <span className="text-red-500">*</span></label>
                          <input type="text" maxLength={10} required className={`${inputStyle} mb-3`} placeholder="10-digit code" />
                          <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input type="checkbox" id="iecPending" className="w-4 h-4 rounded border-gray-300 text-[#004B87] focus:ring-[#004B87]" />
                            <span className="text-gray-600 font-medium text-[0.85rem]">Applied for; number to follow</span>
                          </label>
                        </div>
                        
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">GSTIN <span className="text-red-500">*</span></label>
                          <input type="text" maxLength={15} required className={inputStyle} placeholder="15-character ID" />
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Enterprise size <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select size...</option>
                            <option>Micro</option><option>Small</option><option>Medium</option><option>Large</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Udyam registration number</label>
                          <input type="text" className={inputStyle} placeholder="If registered as an MSME" />
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Type of firm <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select type...</option>
                            <option>Manufacturer</option>
                            <option>Manufacturer and exporter</option>
                            <option>Merchant exporter</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">District <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select district...</option>
                            <option>Bhopal</option><option>Indore</option><option>Gwalior</option><option>Jabalpur</option>
                            <option>Other MP District</option> 
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Factory or office address <span className="text-red-500">*</span></label>
                          <textarea required rows={2} className={`${inputStyle} resize-none`} placeholder="Complete address"></textarea>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Website or catalogue link</label>
                          <input type="url" className={inputStyle} placeholder="https://" />
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Export Council / Association</label>
                          <input type="text" className={inputStyle} placeholder="Council name and RCMC number" />
                        </div>
                      </FormSection>
                    </div>

                    {/* STEP 2: THE PERSON */}
                    <div id="step-2" className={currentStep === 2 ? 'block' : 'hidden'}>
                      <FormSection icon={<User size={28}/>} title="B. The person who will attend" color="#059669">
                        <div className="md:col-span-2 mb-2">
                          <div className="flex gap-3 items-start p-4 rounded-xl bg-green-50 border border-green-200 text-green-700">
                            <AlertCircle size={20} className="mt-0.5 shrink-0" />
                            <p className="m-0 text-[0.95rem] leading-[1.6]">
                              Must be the owner, a director, or the export manager. <strong>The same person attends all eight sessions.</strong>
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Full Name <span className="text-red-500">*</span></label>
                          <input type="text" required className={inputStyle} placeholder="Enter name" />
                        </div>
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Designation <span className="text-red-500">*</span></label>
                          <input type="text" required className={inputStyle} placeholder="Job title" />
                        </div>
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Mobile <span className="text-red-500">*</span></label>
                          <input type="tel" required className={inputStyle} placeholder="For WhatsApp updates" />
                        </div>
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Email <span className="text-red-500">*</span></label>
                          <input type="email" required className={inputStyle} placeholder="Programme mail goes here" />
                        </div>
                        
                        <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-100">
                          <label className="block font-bold text-gray-900 mb-1 text-[1.1rem]">Second contact <span className="text-gray-500 font-normal">(Optional)</span></label>
                          <p className="text-gray-500 mb-6 text-[0.9rem]">This person may join sessions online.</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" className={inputStyle} placeholder="Name" />
                            <input type="text" className={inputStyle} placeholder="Designation" />
                            <input type="tel" className={inputStyle} placeholder="Mobile" />
                            <input type="email" className={inputStyle} placeholder="Email" />
                          </div>
                        </div>
                      </FormSection>
                    </div>

                    {/* STEP 3: SECTOR TRACK */}
                    <div id="step-3" className={currentStep === 3 ? 'block' : 'hidden'}>
                      <FormSection icon={<LayoutGrid size={28}/>} title="C. Sector track" color="#7c3aed">
                        <div className="md:col-span-2">
                          <label className="block font-bold text-gray-900 mb-4 text-[0.95rem]">Select your primary track <span className="text-red-500">*</span></label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { id: "Engineering", icon: <Settings/>, label: "Engineering & Auto", activeColor: "bg-purple-50 border-purple-600", iconColor: "bg-purple-600" },
                              { id: "Pharma", icon: <FlaskConical/>, label: "Pharmaceuticals", activeColor: "bg-purple-50 border-purple-600", iconColor: "bg-purple-600" },
                              { id: "Agri", icon: <Leaf/>, label: "Agriculture & Food", activeColor: "bg-purple-50 border-purple-600", iconColor: "bg-purple-600" },
                              { id: "Textiles", icon: <Shirt/>, label: "Textiles & Apparel", activeColor: "bg-purple-50 border-purple-600", iconColor: "bg-purple-600" }
                            ].map((track) => (
                              <div 
                                key={track.id}
                                onClick={() => setSelectedTrack(track.id)}
                                className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all cursor-pointer select-none
                                  ${selectedTrack === track.id ? `${track.activeColor} shadow-md` : 'bg-gray-50 border-gray-200 hover:border-purple-300'}`}
                              >
                                <div className={`p-2 rounded-full text-white flex items-center justify-center w-[44px] h-[44px] ${selectedTrack === track.id ? track.iconColor : 'bg-gray-400'}`}>
                                  {track.icon}
                                </div>
                                <span className={`font-bold text-[1.05rem] ${selectedTrack === track.id ? 'text-gray-900' : 'text-gray-600'}`}>
                                  {track.label}
                                </span>
                              </div>
                            ))}
                          </div>
                          {/* Hidden input to ensure required validation */}
                          <input type="text" required value={selectedTrack} readOnly className="opacity-0 absolute -z-10 w-0 h-0" />
                        </div>
                      </FormSection>
                    </div>

                    {/* STEP 4: THE PRODUCT */}
                    <div id="step-4" className={currentStep === 4 ? 'block' : 'hidden'}>
                      <FormSection icon={<Package size={28}/>} title="D. The product" color="#d97706">
                        <div className="md:col-span-2">
                          <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-200">
                            <h6 className="font-bold text-gray-900 mb-4">Primary Product <span className="text-red-500">*</span></h6>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                              <div className="md:col-span-8">
                                <input type="text" required className={`${inputStyle} bg-white border-yellow-300 focus:ring-yellow-500`} placeholder="Product description (as on invoice)" />
                              </div>
                              <div className="md:col-span-4">
                                <input type="text" required className={`${inputStyle} bg-white border-yellow-300 focus:ring-yellow-500`} placeholder="HS Code (6/8 digits)" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-2 mt-4">
                          <p className="font-bold text-gray-900 mb-2 text-[0.95rem]">Additional Products <span className="text-gray-500 font-normal">(Optional)</span></p>
                          <p className="text-gray-500 mb-4 text-[0.85rem]">The plan is built for the first shipment of one of them.</p>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-3">
                              <input type="text" className={`${inputStyle} grow`} placeholder="Product 2 Description" />
                              <input type="text" className={`${inputStyle} md:w-[200px]`} placeholder="HS Code" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-3">
                              <input type="text" className={`${inputStyle} grow`} placeholder="Product 3 Description" />
                              <input type="text" className={`${inputStyle} md:w-[200px]`} placeholder="HS Code" />
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-1 mt-6 pt-6 border-t border-gray-100 md:border-t-0 md:pt-0">
                          <label className="block font-bold text-gray-900 mb-4 text-[0.95rem]">Made in Madhya Pradesh? <span className="text-red-500">*</span></label>
                          <div className="flex flex-col gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200">
                            <label className="flex items-center gap-3 cursor-pointer select-none m-0">
                              <input type="radio" name="madeInMp" className="w-4 h-4 text-[#d97706] focus:ring-[#d97706] border-gray-300" required/> 
                              <span className="text-gray-700 font-medium">Yes, in our own unit</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer select-none m-0">
                              <input type="radio" name="madeInMp" className="w-4 h-4 text-[#d97706] focus:ring-[#d97706] border-gray-300" required/> 
                              <span className="text-gray-700 font-medium">Yes, by another unit in the State</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer select-none m-0">
                              <input type="radio" name="madeInMp" className="w-4 h-4 text-[#d97706] focus:ring-[#d97706] border-gray-300" required/> 
                              <span className="text-gray-700 font-medium">Partly</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer select-none m-0">
                              <input type="radio" name="madeInMp" className="w-4 h-4 text-[#d97706] focus:ring-[#d97706] border-gray-300" required/> 
                              <span className="text-gray-700 font-medium">No</span>
                            </label>
                          </div>
                        </div>

                        <div className="md:col-span-1 mt-6 pt-6 border-t border-gray-100 md:border-t-0 md:pt-0 flex flex-col">
                          <label className="block font-bold text-gray-900 mb-4 text-[0.95rem]">Main imported inputs, if any</label>
                          <textarea className={`${inputStyle} resize-none grow min-h-[140px]`} placeholder="e.g., steel plate, fabric, API, imported sugar. Leave blank if none."></textarea>
                        </div>

                        <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-100">
                          <label className="block font-bold text-gray-900 mb-4 text-[0.95rem]">Certifications and standards held</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            {["ISO 9001", "IATF 16949", "WHO-GMP", "FSSAI", "HACCP or FSSC 22000", "Halal", "OEKO-TEX or GOTS", "CE or UKCA", "None yet"].map((cert, i) => (
                              <label key={i} className="flex items-center gap-3 cursor-pointer select-none m-0">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#d97706] focus:ring-[#d97706]" /> 
                                <span className="text-gray-700 text-[0.9rem] font-medium">{cert}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </FormSection>
                    </div>

                    {/* STEP 5: THE MARKET */}
                    <div id="step-5" className={currentStep === 5 ? 'block' : 'hidden'}>
                      <FormSection icon={<Globe size={28}/>} title="E. The market and the buyer" color="#0ea5e9">
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Target market for 1st shipment <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select market...</option>
                            <option>United Kingdom</option><option>UAE</option><option>Australia</option>
                            <option>Switzerland</option><option>Norway</option><option>Oman</option>
                            <option>New Zealand</option><option>European Union (from 2027)</option>
                            <option>Not decided, need guidance</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Second market <span className="text-gray-500 font-normal">(Optional)</span></label>
                          <select className={selectStyle}>
                            <option value="">Select market...</option>
                            <option>United Kingdom</option><option>UAE</option><option>Australia</option>
                            <option>Switzerland</option><option>Norway</option><option>Oman</option>
                            <option>New Zealand</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Buyer/Lead in that market? <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select status...</option>
                            <option>Yes, an order in hand</option><option>Yes, in discussion</option>
                            <option>An enquiry</option><option>Not yet</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Have you exported before? <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select experience...</option>
                            <option>Never</option><option>Yes, to other markets</option><option>Yes, to this market</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Exports in FY 2025-26 <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select range...</option>
                            <option>Nil</option><option>Under ₹ 1 crore</option><option>₹ 1 to 5 crore</option>
                            <option>₹ 5 to 25 crore</option><option>Over ₹ 25 crore</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Claimed preference under FTA? <span className="text-red-500">*</span></label>
                          <select required className={selectStyle}>
                            <option value="">Select status...</option>
                            <option>Never</option><option>Yes, once or twice</option><option>Yes, regularly</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Registered on Trade Connect?</label>
                          <select className={selectStyle}>
                            <option value="">Select...</option>
                            <option>Yes</option><option>No</option><option>Not sure</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-900 mb-2 text-[0.95rem]">Status Holder certificate?</label>
                          <select className={selectStyle}>
                            <option value="">Select...</option>
                            <option>Yes</option><option>No</option>
                          </select>
                        </div>
                      </FormSection>
                    </div>

                    {/* STEP 6: ONE QUESTION */}
                    <div id="step-6" className={currentStep === 6 ? 'block' : 'hidden'}>
                      <FormSection icon={<MessageSquare size={28}/>} title="F. One question" color="#eab308">
                        <div className="md:col-span-2">
                          <label className="block font-bold text-gray-900 mb-3 text-[1rem]">What is the one thing that has stopped you so far? <span className="text-red-500">*</span></label>
                          <p className="text-gray-500 mb-4 text-[0.9rem]">The rule, the certificate, the standard, the freight cost, the buyer, the finance, or something else. One or two lines.</p>
                          <textarea required maxLength={300} rows={5} className={`${inputStyle} resize-none`} placeholder="Type your answer here..."></textarea>
                        </div>
                      </FormSection>
                    </div>

                    {/* STEP 7: DECLARATION */}
                    <div id="step-7" className={currentStep === 7 ? 'block' : 'hidden'}>
                      <FormSection icon={<CheckSquare size={28}/>} title="G. Declaration" color="#64748b">
                        <div className="md:col-span-2 flex flex-col gap-5 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                          <label className="flex gap-4 items-start cursor-pointer select-none m-0">
                            <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded border-gray-300 text-gray-700 focus:ring-gray-700 shrink-0" />
                            <span className="text-gray-800 text-[0.95rem] leading-[1.6]"><strong>Commitment:</strong> The person named above will attend all eight sessions and do the work between them. <span className="text-red-500">*</span></span>
                          </label>
                          
                          <label className="flex gap-4 items-start cursor-pointer select-none m-0">
                            <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded border-gray-300 text-gray-700 focus:ring-gray-700 shrink-0" />
                            <span className="text-gray-800 text-[0.95rem] leading-[1.6]"><strong>Information:</strong> We will tell the Export Cell when our first consignment ships under an agreement and answer the two surveys. <span className="text-red-500">*</span></span>
                          </label>

                          <label className="flex gap-4 items-start cursor-pointer select-none m-0">
                            <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-gray-300 text-gray-700 focus:ring-gray-700 shrink-0" />
                            <span className="text-gray-800 text-[0.95rem] leading-[1.6]"><strong>Consent:</strong> The State may name our firm on the cohort 1 list (optional).</span>
                          </label>

                          <label className="flex gap-4 items-start cursor-pointer select-none m-0">
                            <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded border-gray-300 text-gray-700 focus:ring-gray-700 shrink-0" />
                            <span className="text-gray-800 text-[0.95rem] leading-[1.6]"><strong>Accuracy:</strong> The information given is correct. <span className="text-red-500">*</span></span>
                          </label>
                        </div>

                        <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-100">
                          <label className="block font-bold text-gray-900 mb-2 text-[1rem]">Documents <span className="text-gray-500 font-normal">(Optional)</span></label>
                          <p className="text-gray-500 mb-6 text-[0.9rem]">Upload IEC certificate, Udyam certificate, or product catalogue (Up to 10 MB each).</p>
                          
                          <label className="flex flex-col items-center justify-center p-10 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-300 hover:border-gray-500 hover:bg-gray-100 transition-all cursor-pointer group">
                            <UploadCloud size={44} className="text-gray-400 mb-4 group-hover:text-gray-600 transition-colors" />
                            <h6 className="font-bold text-gray-900 mb-1">Click to upload or drag & drop</h6>
                            <p className="text-gray-500 m-0 text-[0.85rem]">PDF, PNG, JPG up to 10MB</p>
                            <input type="file" multiple className="hidden" id="fileUpload" />
                          </label>
                        </div>
                      </FormSection>
                    </div>

                    {/* WIZARD NAVIGATION BUTTONS */}
                    <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                      {/* Back Button */}
                      <div>
                        {currentStep > 1 && (
                          <button 
                            type="button" 
                            onClick={handlePrev}
                            className="font-bold text-gray-600 flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                          >
                            <ArrowLeft size={18} /> Back
                          </button>
                        )}
                      </div>

                      {/* Next / Submit Button */}
                      <div>
                        {currentStep < totalSteps ? (
                          <button 
                            type="button" 
                            onClick={handleNext}
                            className="font-black text-white flex items-center gap-2 px-8 py-3 rounded-full shadow-lg bg-[#004B87] tracking-[0.5px] hover:-translate-y-1 hover:shadow-xl transition-all"
                          >
                            Next Step <ArrowRight size={18} />
                          </button>
                        ) : (
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="font-black text-white uppercase inline-flex justify-center items-center gap-2 px-8 py-3 rounded-full shadow-lg bg-[#10b981] tracking-[1px] hover:-translate-y-1 hover:shadow-xl transition-all disabled:opacity-70 disabled:hover:translate-y-0"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </>
                            ) : (
                              <><Send size={20} /> Submit Application</>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                  </form>
                </div>

              ) : (

                /* ------------------------------------------------------------- */
                /* SUCCESS CELEBRATION SCREEN                                    */
                /* ------------------------------------------------------------- */
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center mx-auto border border-gray-100 max-w-[600px] mt-[5vh] mb-[10vh]"
                >
                  <div className="mb-6 inline-flex p-5 rounded-full shadow-sm bg-[#10b981] text-white">
                    <CheckCircle2 size={64} />
                  </div>
                  <h2 className="font-black text-gray-900 mb-4 text-[2.5rem] tracking-[-1px]">Thank You!</h2>
                  <p className="text-gray-600 text-lg mb-8">Your application for the Madhya Pradesh FTA Accelerator, cohort 1, has been received.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl inline-block w-full mb-10 border border-gray-100">
                    <p className="text-gray-500 font-bold uppercase mb-2 text-[12px] tracking-[1px]">Your Reference Number</p>
                    <h3 className="font-black m-0 font-mono text-[#004B87] tracking-[2px] text-[2rem]">{refNumber}</h3>
                  </div>

                  <p className="text-gray-600 mb-10 mx-auto leading-[1.7] text-[1rem]">
                    The cohort lists are published on this Portal on <strong className="text-gray-900">30 November 2026</strong>. You will receive further updates from the Export Cell via email.
                  </p>

                  <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-100">
                    <p className="text-gray-500 font-bold m-0 text-[0.9rem]">Questions? Contact Helpdesk:</p>
                    <div className="flex justify-center gap-6 text-gray-900 font-medium text-[0.9rem]">
                      <span>📞 1800-XXX-XXXX</span>
                      <span>✉️ fta@mpidc.gov.in</span>
                    </div>
                    <button className="font-bold rounded-full px-6 py-3 mx-auto mt-6 flex items-center gap-2 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => window.location.reload()}>
                      <ArrowLeft size={16}/> Go Back to Home
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}