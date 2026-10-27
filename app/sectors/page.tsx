'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Settings, FlaskConical, Leaf, Shirt, 
  MapPin, TrendingUp, FileText, CheckCircle2, Globe, 
  ArrowRight, ShieldCheck, Scale, CircleDollarSign
} from "lucide-react";

// 1. IMPORT HEADER AND FOOTER
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

// --- DATA STRUCTURE FOR TRACKS ---
const TRACKS_DATA = [
  {
    id: "engineering",
    icon: <Settings size={32} />,
    title: "Engineering & Auto Components",
    exports: "USD 2,058 million (26% of State’s exports)",
    clusters: "Pithampur, Dewas, Mandideep, Malanpur, Indore",
    description: "Engineering is the State’s largest export sector. The agreements remove duties of 3 to 14% on auto components, light commercial vehicles, pumps and valves, steel and aluminium articles in the UK, UAE, Australia, Oman and NZ, and will do so in the EU. In Switzerland and Norway most engineering lines were already duty-free.",
    table: [
      { hs: "870421", product: "Light goods vehicles, diesel", market: "United Kingdom", duty: "14% → 0", imports: "7,993" },
      { hs: "870421", product: "Light goods vehicles, diesel", market: "Australia", duty: "5% → 0", imports: "6,606" },
      { hs: "870829", product: "Vehicle body parts and accessories", market: "United Kingdom", duty: "4% → 0", imports: "2,317" },
      { hs: "870899", product: "Automotive components", market: "UAE", duty: "5% → 0", imports: "1,903" },
      { hs: "760612", product: "Aluminium plates and sheets", market: "United Kingdom", duty: "8% → 0", imports: "1,747" },
      { hs: "848180", product: "Taps, cocks and valves", market: "Australia", duty: "3% → 0", imports: "1,192" },
      { hs: "731815", product: "Screws and bolts", market: "United Kingdom", duty: "4% → 0", imports: "778" }
    ],
    rule: "Use a change in tariff sub-heading/heading + value content. Imported steel/bearings count as non-originating. Value added in State must reach threshold (35-50%). Keep cost sheet and supplier declarations.",
    cert: "Export Inspection Agency or DGFT Regional Authority, Bhopal. Exporter’s own declaration for UK and EFTA. Council: EEPC India.",
    markets: "United Kingdom, UAE, and Australia for first shipments; EU prepared for 2027.",
    color: "#0284c7", // Deep Sky Blue
    bgLight: "rgba(2, 132, 199, 0.05)"
  },
  {
    id: "pharma",
    icon: <FlaskConical size={32} />,
    title: "Pharmaceuticals",
    exports: "USD 1,720 million (22% of State’s exports)",
    clusters: "Pithampur, Ratlam, Malanpur, Indore, Dewas",
    description: "Most finished medicines already enter duty-free. The gains are in intermediates and specialty chemicals (pyridine, pyrimidine, vitamins) where the EU and UK charged 2-6%, and in immunological products in Australia. The main hurdle is registration (marketing authorisation, GMP), which is covered in Phase 3.",
    table: [
      { hs: "300215", product: "Immunological products, dosed", market: "Australia", duty: "3% → 0", imports: "2,373" },
      { hs: "293359", product: "Pyrimidine compounds", market: "United Kingdom", duty: "6% → 0", imports: "462" },
      { hs: "130219", product: "Vegetable saps and extracts", market: "Australia", duty: "2% → 0", imports: "98" },
      { hs: "121190", product: "Medicinal plants and herbs", market: "UAE", duty: "4% → 0", imports: "46" },
      { hs: "300490", product: "Medicaments in retail packs", market: "United Kingdom", duty: "0 → 0", imports: "13,557" }
    ],
    rule: "Formulations made from imported APIs qualify via change in tariff heading + value content. APIs from imported intermediates qualify via chemical reaction rule. Repacking/mixing does not confer origin.",
    cert: "Export Inspection Agency or DGFT Regional Authority. Own declaration for UK/EFTA. Council: Pharmexcil. CDSCO for Pharma Certificate.",
    markets: "United Kingdom and Australia for intermediates; Switzerland for registration route under EFTA.",
    color: "#10b981", // Emerald Green
    bgLight: "rgba(16, 185, 129, 0.05)"
  },
  {
    id: "agri",
    icon: <Leaf size={32} />,
    title: "Agriculture & Food",
    exports: "USD 1,462 million (19% of State’s exports)",
    clusters: "Indore, Dewas, Ujjain, Sehore, Vidisha, Chhindwara",
    description: "Agreements differ greatly here. UK, Australia, Oman, UAE open almost everything. Largest gains are in processed foods (namkeen, biscuits, sauces) where 1-7% duties have gone. Border requirements (pesticide limits, FSSAI, Halal) decide if the shipment gets in; duty is secondary.",
    table: [
      { hs: "210690", product: "Namkeen and food preparations", market: "United Kingdom", duty: "3% → 0", imports: "3,140" },
      { hs: "210690", product: "Namkeen and food preparations", market: "Australia", duty: "1% → 0", imports: "1,641" },
      { hs: "210390", product: "Sauces and mixed condiments", market: "United Kingdom", duty: "2% → 0", imports: "1,045" },
      { hs: "070200", product: "Tomatoes, fresh", market: "United Kingdom", duty: "25% → 0", imports: "801" },
      { hs: "190410", product: "Puffed and roasted cereal foods", market: "United Kingdom", duty: "13% → 0", imports: "349" },
      { hs: "120190", product: "Soya beans", market: "Norway", duty: "23% → 0", imports: "205" }
    ],
    rule: "Products grown in MP are wholly obtained. Processed foods from Indian grain/oil qualify. If imported input (palm oil/sugar) is used, check product-specific rule (mostly change in tariff heading).",
    cert: "Export Inspection Agency, APEDA, Spices Board, or DGFT. Own declaration for UK/EFTA. Councils: APEDA, SOPA, FIEO.",
    markets: "UK, UAE, Australia for namkeen/sauces; Norway for processed food under EFTA; New Zealand for sauces.",
    color: "#d97706", // Amber
    bgLight: "rgba(217, 119, 6, 0.05)"
  },
  {
    id: "textiles",
    icon: <Shirt size={32} />,
    title: "Textiles & Apparel",
    exports: "USD 1,291 million (17% of State’s exports)",
    clusters: "Indore, Pithampur, Ujjain, Burhanpur, Ashoknagar",
    description: "Every line enters all 7 markets duty-free. Largest gain is in garments and home textiles (UK charged up to 12%, Norway 11%). GI products (Chanderi, Maheshwari, Bagh, Batik) are included with the Development Commissioner (Handicrafts) as the certifier.",
    table: [
      { hs: "610910", product: "Cotton T-shirts and vests", market: "United Kingdom", duty: "10% → 0", imports: "1,480" },
      { hs: "611020", product: "Cotton pullovers and cardigans", market: "Norway", duty: "11% → 0", imports: "643" },
      { hs: "610910", product: "Cotton T-shirts and vests", market: "UAE", duty: "5% → 0", imports: "572" },
      { hs: "540752", product: "Textured polyester fabric, dyed", market: "UAE", duty: "5% → 0", imports: "433" },
      { hs: "620342", product: "Men’s cotton trousers", market: "Australia", duty: "5% → 0", imports: "353" },
      { hs: "630231", product: "Cotton bed linen, unprinted", market: "United Kingdom", duty: "10% → 0", imports: "224" }
    ],
    rule: "Change in tariff classification + value content (40% ex-works for UK, 40% FOB for UAE/NZ). EFTA/EU rules require two stages of manufacture (needs Indian or partner-made fabric).",
    cert: "Textiles Committee, Export Inspection Agency or DGFT. Dev Commissioner for handicrafts. Councils: AEPC, TEXPROCIL, EPCH.",
    markets: "United Kingdom and Australia for garments/home textiles; Norway for apparel under EFTA.",
    color: "#7c3aed", // Violet
    bgLight: "rgba(124, 58, 237, 0.05)"
  }
];

export default function SectorTracksPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#333333] font-sans overflow-x-hidden">
      
      {/* HEADER COMPONENT */}
      <Header />

      <main>
        {/* ------------------------------------------------------------- */}
        {/* HERO SECTION                                                  */}
        {/* ------------------------------------------------------------- */}
        <section className="relative flex flex-col justify-center overflow-hidden min-h-[50vh] bg-[#0A192F]">
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <img src="/back.png" alt="Madhya Pradesh Industry Background" className="w-full h-full object-cover opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#001E3C]/85 to-[#000F1E]/95" />
          </div>

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-16 text-center">
            <ScrollReveal direction="up" className="mx-auto max-w-[800px]">
              <span className="inline-block bg-[#FFD700] text-[#002A54] px-4 py-2 mb-6 font-bold uppercase tracking-[1px] text-[12px] rounded-full shadow-sm">
                Sector Focus
              </span>
              <h1 className="font-black text-white mb-6 text-[clamp(2.5rem,5vw,4rem)] tracking-[-1px] leading-[1.1]">
                Four Sector Tracks
              </h1>
              <p className="font-bold mb-6 text-[clamp(1.1rem,2vw,1.4rem)] text-[#FFD700]">
                Twenty firms in each. The examples, the rules and the faculty are those of the sector.
              </p>
              <p className="text-white/70 font-light mx-auto mb-0 text-[1.05rem] leading-[1.8] max-w-[700px]">
                These tracks follow the State’s four largest export sectors, carrying five-sixths of MP's exports. 
                Even if your product is not in the examples below, you may still apply.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTOR TRACKS (MODERN TAILWIND CARDS)                           */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 px-4 bg-gray-50 border-b border-gray-200">
          <div className="w-full max-w-screen-xl mx-auto">
            
            {TRACKS_DATA.map((track, idx) => (
              <ScrollReveal key={idx} direction="up" className="mb-16 pb-4">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
                  
                  {/* Top Colored Accent Line */}
                  <div style={{ height: '6px', width: '100%', backgroundColor: track.color }}></div>
                  
                  <div className="p-6 md:p-12">
                    
                    {/* Header: Icon, Title, and Stats */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-10 pb-8 border-b border-gray-100">
                      <div className="p-4 rounded-2xl text-white shrink-0 inline-flex items-center justify-center shadow-sm" style={{ backgroundColor: track.color, width: '75px', height: '75px' }}>
                        {track.icon}
                      </div>
                      <div className="grow">
                        <h2 className="font-black text-gray-900 mb-6 text-[clamp(1.8rem,3vw,2.2rem)] tracking-[-0.5px]">
                          {track.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 h-full">
                            <TrendingUp size={20} className="text-gray-500 mt-1 shrink-0" />
                            <div>
                              <span className="block font-bold text-gray-900 mb-1 text-[0.85rem] uppercase tracking-[1px]">Exports FY 25-26</span>
                              <span className="text-gray-600 text-[0.95rem]">{track.exports}</span>
                            </div>
                          </div>
                          <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 h-full">
                            <MapPin size={20} className="text-gray-500 mt-1 shrink-0" />
                            <div>
                              <span className="block font-bold text-gray-900 mb-1 text-[0.85rem] uppercase tracking-[1px]">Key Clusters</span>
                              <span className="text-gray-600 text-[0.95rem]">{track.clusters}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sector Description */}
                    <div className="mb-10">
                      <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-[1.1rem]">
                        <ShieldCheck size={22} style={{ color: track.color }}/> The sector under the agreements
                      </h5>
                      <p className="text-gray-700 m-0 p-6 rounded-2xl text-[1.05rem] leading-[1.8] border border-gray-50" style={{ backgroundColor: track.bgLight }}>
                        {track.description}
                      </p>
                    </div>

                    {/* Duty Fallen Data Grid (Tailwind Flex/Grid replacing HTML table) */}
                    <div className="mb-10">
                      <h5 className="font-bold text-gray-900 mb-6 flex items-center gap-3 text-[1.1rem]">
                        <CircleDollarSign size={22} style={{ color: track.color }}/> Example lines where duty has fallen
                      </h5>
                      
                      {/* Desktop Header Row (Hidden on mobile) */}
                      <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 mb-3 bg-gray-50 rounded-full font-bold text-gray-500 uppercase text-[0.75rem] tracking-[1px]">
                        <div className="col-span-2">HS Code</div>
                        <div className="col-span-4">Product Line</div>
                        <div className="col-span-2">Target Market</div>
                        <div className="col-span-2">Duty Savings</div>
                        <div className="col-span-2 text-right">Market Imports</div>
                      </div>

                      {/* Data Rows */}
                      <div className="flex flex-col gap-3">
                        {track.table.map((row, i) => (
                          <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-5 lg:px-6 py-5 bg-white border border-gray-100 rounded-2xl items-center shadow-sm hover:shadow-md transition-all">
                            
                            {/* HS Code */}
                            <div className="col-span-12 lg:col-span-2 mb-2 lg:mb-0">
                              <span className="inline-block text-gray-600 bg-gray-50 border border-gray-200 font-medium px-3 py-1 rounded-md text-[0.85rem]">
                                HS: {row.hs}
                              </span>
                            </div>
                            
                            {/* Product */}
                            <div className="col-span-12 lg:col-span-4 mb-3 lg:mb-0 font-bold text-gray-900 text-[1rem]">
                              {row.product}
                            </div>
                            
                            {/* Market */}
                            <div className="col-span-12 lg:col-span-2 mb-3 lg:mb-0 text-gray-600 flex items-center gap-2 text-[0.95rem]">
                              <Globe size={16} className="shrink-0" /> <span className="font-medium">{row.market}</span>
                            </div>
                            
                            {/* Duty Drop (Highlighted) */}
                            <div className="col-span-6 lg:col-span-2">
                              <span className="inline-block px-4 py-2 text-white font-bold shadow-sm rounded-lg text-[0.85rem]" style={{ backgroundColor: track.color }}>
                                {row.duty}
                              </span>
                            </div>
                            
                            {/* Imports (Market Size) */}
                            <div className="col-span-6 lg:col-span-2 text-right">
                              <span className="block text-gray-400 text-[0.75rem] uppercase tracking-wider">Size</span>
                              <span className="font-bold text-gray-900 text-[1.05rem]">${row.imports}M</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Info Grid (Rules, Certs, Markets) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                      <div className="flex flex-col lg:pr-8 lg:border-r lg:border-gray-100">
                        <h6 className="font-bold text-gray-900 uppercase mb-4 flex items-center gap-2 text-[0.85rem] tracking-[1px]">
                          <Scale size={18} style={{ color: track.color }}/> Rule of Origin
                        </h6>
                        <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.7]">{track.rule}</p>
                      </div>
                      
                      <div className="flex flex-col lg:px-8 lg:border-r lg:border-gray-100">
                        <h6 className="font-bold text-gray-900 uppercase mb-4 flex items-center gap-2 text-[0.85rem] tracking-[1px]">
                          <CheckCircle2 size={18} style={{ color: track.color }}/> Certificate
                        </h6>
                        <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.7]">{track.cert}</p>
                      </div>
                      
                      <div className="flex flex-col lg:pl-8">
                        <h6 className="font-bold text-gray-900 uppercase mb-4 flex items-center gap-2 text-[0.85rem] tracking-[1px]">
                          <Globe size={18} style={{ color: track.color }}/> First Markets
                        </h6>
                        <p className="text-gray-600 m-0 text-[0.95rem] leading-[1.7]">{track.markets}</p>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="text-center lg:text-left mt-10 pt-6">
                      <Link href="/apply" className="inline-flex items-center gap-2 font-bold px-8 py-4 text-white rounded-full shadow-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: track.color, letterSpacing: '0.5px' }}>
                        Apply for this track <ArrowRight size={18} />
                      </Link>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}

          </div>
        </section>

      </main>

      {/* FOOTER COMPONENT */}
      <Footer />

    </div>
  );
}