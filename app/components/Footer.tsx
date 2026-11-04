import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react"; 

export default function Footer() {
  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "Programme", path: "/program" },
    { label: "Sectors", path: "/sectors" },
    { label: "Who Can Apply", path: "/who-can-apply" },
    { label: "Apply Now", path: "/apply" },
    { label: "FAQs", path: "/FAQs" },
    { label: "Contact Us", path: "/contact" }
  ];

  return (
    <footer className="lg:py-16 py-10" style={{ backgroundColor: '#002A54' }}>
      <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '1300px' }}>
        
        {/* 3-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 lg:gap-16 mb-12">
          
          {/* Column 1: Logos & About Programme */}
          <div className="flex flex-col">
            
            {/* Government & Partner Logos */}
            <div className="flex items-center flex-wrap gap-5 mb-6">
              <Link 
                href="https://sws.invest.mp.gov.in/about-us/mpidc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block no-underline bg-white rounded-md p-1.5"
              >
                <img
                  src="/FTA/MPIDC.png"
                  alt="MP Govt Logo"
                  style={{
                    width: "90px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </Link>

              <Link 
                href="https://sws.invest.mp.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block no-underline bg-white rounded-md p-1.5"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYNwHGeLsD-Rh2iKyhlWZh4fjqHf22b1Dfr5-o7UwiFID8aDHt3MvaVGa&s=10"
                  alt="Invest MP"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </Link>

              <Link 
                href="https://www.incubationmasters.com/assets/assets/images/logo/logo-light.png" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block no-underline ml-2"
              >
                <img
                  src="/image.png"
                  alt="IM Global"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>

            <p className="text-white/80 leading-[1.8] text-[0.9rem] font-light mt-2">
              The Madhya Pradesh FTA Accelerator is a programme of the Department of 
              Industrial Policy and Investment Promotion Government of Madhya 
              Pradesh, run by the Export Cell of the M.P. Industrial Development 
              Corporation. Launched by the Hon'ble Chief Minister on 5 November 2026 
              at the Madhya Pradesh Export and FTA Conclave 2026, Bhopal.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col md:pl-10 lg:pl-16">
            <h5 className="text-white text-[13px] font-bold tracking-wider uppercase mb-6">
              QUICK LINKS
            </h5>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path}
                  className="text-white/80 hover:text-white text-[0.95rem] font-light transition-colors no-underline flex items-center gap-3 group"
                >
                  <span className="text-white/60 group-hover:text-white text-[10px]">▸</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Helpdesk Contact */}
          <div className="flex flex-col">
            <h5 className="text-white text-[13px] font-bold tracking-wider uppercase mb-6">
              HELPDESK CONTACT
            </h5>
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4 text-white/80">
                <MapPin size={20} className="mt-1 text-white" strokeWidth={1.5} />
                <p className="m-0 text-[0.95rem] font-light leading-relaxed">
                  Export Cell, M.P. Industrial Development Corporation,<br />
                  21 Arera Hills, Bhopal 462011
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-white/80">
                <Phone size={20} className="text-white" strokeWidth={1.5} />
                <p className="m-0 text-[0.95rem] font-light">
                  +91-755-257-7145
                </p>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <Mail size={20} className="text-white" strokeWidth={1.5} />
                <p className="m-0 text-[0.95rem] font-light">
                  export.investment@mpidc.co.in
                </p>
              </div>
              
            </div>
          </div>

        </div>
        
        {/* Bottom Copyright Area */}
        <div className="pt-6 pb-2 flex flex-col md:flex-row justify-center items-center gap-4 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <p className="text-white/60 font-light text-[0.8rem] m-0">
            © 2026 MP Industrial Development Corporation Ltd. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}