'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, Mail, MessageCircle, 
  Clock, ShieldCheck, FileText, Info, Send, CheckCircle2 
} from "lucide-react";

import Header from "../components/Header"; // Aapka path alag ho sakta hai
import Footer from "../components/Footer"; // Aapka path alag ho sakta hai

const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    mobile: "",
    email: "",
    question: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Backend API call
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", firm: "", mobile: "", email: "", question: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans flex flex-col">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="bg-[#004B87] py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/FTA/667484d3-5998-4832-a549-b1b574ca67b4.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          <div className="max-w-screen-xl mx-auto text-center relative z-10">
            <ScrollReveal direction="up">
              <span className="inline-block bg-white/10 text-white border border-white/20 px-5 py-2 mb-6 text-[11px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                Get in Touch
              </span>
              <h1 className="text-white font-black text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-1px] leading-[1.1] mb-6">
                Contact Us
              </h1>
              <div className="w-[60px] h-[4px] bg-[#FFD700] mx-auto rounded-full mb-6" />
              <p className="text-blue-100 text-[1.1rem] md:text-[1.2rem] max-w-[700px] mx-auto font-light leading-[1.7]">
                Welcome to the FTA Helpdesk. Have a question about the Accelerator programme, eligibility, or your specific export scenario? We are here to help.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* MAIN CONTENT AREA */}
        <section className="py-16 px-4 -mt-10 relative z-20">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            
            {/* LEFT COLUMN - CONTACT INFO */}
            <div className="flex flex-col gap-6">
              <ScrollReveal direction="left" className="h-full">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl h-full">
                  <h3 className="font-bold text-[1.6rem] text-[#004B87] mb-8">FTA Helpdesk Details</h3>
                  
                  <div className="flex flex-col gap-6">
                    {[
                      { icon: <MapPin size={22} />, title: "Office", desc: "Export Cell, M.P. Industrial Development Corporation, 21 Arera Hills, Bhopal 462011" },
                      { icon: <Phone size={22} />, title: "Telephone", desc: "1800-XXX-XXXX" },
                      { icon: <Mail size={22} />, title: "Email", desc: "fta@mpidc.gov.in" },
                      { icon: <MessageCircle size={22} />, title: "WhatsApp", desc: "+91 99999 99999" },
                      { icon: <Clock size={22} />, title: "Hours", desc: "Working days, 10 AM to 6 PM" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 items-start group">
                        <div className="p-3.5 bg-[#004B87]/5 text-[#004B87] rounded-xl shrink-0 mt-0.5 group-hover:bg-[#004B87] group-hover:text-white transition-colors duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[1.05rem] text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-[0.95rem] leading-relaxed m-0">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                    
                   

                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div>
              <ScrollReveal direction="right" className="h-full">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl h-full relative overflow-hidden flex flex-col justify-center">
                  <h3 className="font-bold text-[1.6rem] text-gray-900 mb-2">Send a Message</h3>
                  <p className="text-gray-500 mb-8 text-[0.95rem]">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#004B87]/5 border border-[#004B87]/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[350px] my-auto"
                      >
                        <CheckCircle2 size={72} className="text-[#004B87] mb-6" />
                        <h4 className="font-black text-[1.5rem] text-gray-900 mb-3">Thank you.</h4>
                        <p className="text-gray-600 text-[1.1rem] leading-[1.6] max-w-[300px]">The Helpdesk will reply to your query within two working days.</p>
                        <button 
                          onClick={() => setStatus("idle")}
                          className="mt-8 px-6 py-3 bg-white border border-gray-200 rounded-full text-[#004B87] font-bold hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          Ask another question
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit} 
                        className="flex flex-col gap-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-[0.8rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#004B87] focus:ring-2 focus:ring-[#004B87]/20 transition-all text-gray-900" />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[0.8rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Firm</label>
                            <input required type="text" name="firm" value={formData.firm} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#004B87] focus:ring-2 focus:ring-[#004B87]/20 transition-all text-gray-900" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-[0.8rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Mobile</label>
                            <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#004B87] focus:ring-2 focus:ring-[#004B87]/20 transition-all text-gray-900" />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[0.8rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#004B87] focus:ring-2 focus:ring-[#004B87]/20 transition-all text-gray-900" />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-[0.8rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Question</label>
                          <textarea required name="question" rows="4" value={formData.question} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#004B87] focus:ring-2 focus:ring-[#004B87]/20 transition-all resize-none text-gray-900"></textarea>
                        </div>

                        <button 
                          type="submit" 
                          disabled={status === "loading"}
                          className="mt-4 w-full flex items-center justify-center gap-2 bg-[#004B87] hover:bg-[#003366] hover:-translate-y-1 text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          {status === "loading" ? "Submitting..." : <><Send size={18} /> Submit Question</>}
                        </button>

                        {status === "error" && (
                          <p className="text-red-500 text-sm text-center font-medium m-0">Something went wrong. Please try again later.</p>
                        )}
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

      

      </main>

      <Footer />
    </div>
  );
}