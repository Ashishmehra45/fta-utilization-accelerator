import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react"; // Icons for helpdesk

export default function Footer() {
  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "Programme", path: "/program" },
    { label: "Sectors", path: "/sectors" },
    { label: "Who Can Apply", path: "/who-can-apply" },
    { label: "Apply Now", path: "/apply" },
    { label: "FAQ", path: "/FAQs" },
    { label: "Contact Us", path: "/contact" }
  ];

  return (
    <footer className=" lg:py-16" style={{ backgroundColor: '#002A54', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '1200px' }}>
        
        {/* 3-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: About Programme */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-[1.2rem] mb-4 tracking-wide">
              MP FTA Accelerator
            </h4>
            <p className="text-white/80 leading-relaxed text-[0.95rem]">
              A programme of the Department of Industrial Policy and Investment Promotion & MSME, Government of Madhya Pradesh, run by the Export Cell of the M.P. Industrial Development Corporation.
            </p>
          </div>

          {/* Column 2: Vertical Quick Links */}
          <div className="flex flex-col md:pl-8">
            <h5 className="text-white/50 text-[11px] font-bold tracking-widest uppercase mb-5">
              Quick Links
            </h5>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path}
                  className="text-white/80 hover:text-white text-[0.95rem] font-medium transition-colors no-underline flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004B87] group-hover:bg-white transition-colors"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Helpdesk */}
          <div className="flex flex-col">
            <h5 className="text-white/50 text-[11px] font-bold tracking-widest uppercase mb-5">
              FTA Helpdesk
            </h5>
            <div className="flex flex-col gap-4">
              
              <div className="flex items-start gap-3 text-white/80">
                <Phone size={18} className="mt-0.5 text-white/50" />
                <div>
                  <p className="m-0 text-[0.95rem] font-medium text-white">1800-XXX-XXXX</p>
                  <p className="m-0 text-[0.8rem] text-white/60">Mon - Fri, 10 AM to 6 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-white/80">
                <Mail size={18} className="mt-0.5 text-white/50" />
                <div>
                  <p className="m-0 text-[0.95rem] font-medium text-white">fta@mpidc.gov.in</p>
                  <p className="m-0 text-[0.8rem] text-white/60">Answers within 2 working days</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="mt-0.5 text-white/50" />
                <div>
                  <p className="m-0 text-[0.95rem] font-medium text-white">MPIDC Export Cell</p>
                  <p className="m-0 text-[0.8rem] text-white/60">Bhopal, Madhya Pradesh</p>
                </div>
              </div>
              
            </div>
          </div>

        </div>
        
        {/* Bottom Copyright Area */}
        <div className="pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-white/50 mb-0 font-medium uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1.5px' }}>
            &copy; 2026 MP Industrial Development Corporation Ltd. All rights reserved.
          </p>
          
        </div>
        
      </div>
    </footer>
  );
}