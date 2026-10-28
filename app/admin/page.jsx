"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, Eye, X, Building2, User, LayoutGrid, Package, 
  Globe, MessageSquare, Download, RefreshCw, Printer
} from "lucide-react";

export default function AdminDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/registration-response");
      const result = await res.json();
      if (result.success) {
        setApplications(result.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const filteredApps = applications.filter((app) => 
    app.firmName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.sectorTrack.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    // Body gets white background during print
    <div className={`min-h-screen bg-gray-50 text-gray-900 font-sans ${selectedApp ? 'print:bg-white' : ''}`}>
      
      {/* TOP NAVIGATION - Hidden during PDF print */}
      <header className="bg-[#004B87] text-white px-6 py-4 shadow-md flex justify-between items-center print:hidden">
        <div className="flex items-center gap-3">
          <Building2 size={24} className="text-[#FFD700]" />
          <h1 className="font-black text-xl tracking-wide uppercase">FTA Admin Portal</h1>
        </div>
        <Link href="/" className="text-white/80 hover:text-white font-medium text-sm transition-colors flex items-center gap-2">
          <Globe size={16} /> Go to Website
        </Link>
      </header>

      {/* MAIN DASHBOARD - Hidden during PDF print */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:hidden">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Applications Dashboard</h2>
            <p className="text-gray-500 mt-1 font-medium">Review and manage FTA Accelerator enrollments</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by Firm, Ref No, Sector..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#004B87] shadow-sm text-sm"
              />
            </div>
            <button 
              onClick={fetchApplications}
              className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-[#004B87] hover:bg-gray-50 shadow-sm transition-all"
              title="Refresh Data"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-200">
                  <th className="px-6 py-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Reference No.</th>
                  <th className="px-6 py-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Firm Details</th>
                  <th className="px-6 py-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Sector Track</th>
                  <th className="px-6 py-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Contact Person</th>
                  <th className="px-6 py-4 font-bold text-gray-500 text-xs uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <RefreshCw size={32} className="animate-spin text-[#004B87] mb-3" />
                        <p className="font-medium">Loading applications...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredApps.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500 font-medium">
                      No applications found.
                    </td>
                  </tr>
                ) : (
                  filteredApps.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <span className="inline-block px-2.5 py-1 bg-blue-50 text-[#004B87] font-mono text-xs font-bold rounded-md border border-blue-100">
                          {app.referenceNumber}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {new Date(app.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900 text-sm m-0">{app.firmName}</p>
                        <p className="text-xs text-gray-500 m-0 mt-0.5">{app.district} • {app.enterpriseSize}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full border border-purple-100">
                          <LayoutGrid size={12} /> {app.sectorTrack}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900 text-sm m-0">{app.primaryContact?.name}</p>
                        <p className="text-xs text-gray-500 m-0 mt-0.5">{app.primaryContact?.mobile}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => setSelectedApp(app)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#004B87] font-bold text-sm rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm"
                        >
                          <Eye size={16} /> View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* FULL DETAILS MODAL (TABULAR & PRINT READY) */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 print:absolute print:inset-0 print:p-0 print:block print:bg-white print:overflow-visible">
          {/* Backdrop - Hidden in print */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm print:hidden" onClick={() => setSelectedApp(null)}></div>
          
          {/* Modal Content - Expands fully in print */}
          {/* Removed fixed max heights and overflow hidden for print */}
          <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 print:shadow-none print:rounded-none print:block print:w-full print:max-w-none print:overflow-visible">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 bg-gray-50 print:bg-white print:border-b-2 print:border-black print:pb-4">
              <div>
                <h3 className="text-2xl font-black text-[#004B87] print:text-black">Application Report</h3>
                <p className="text-sm text-gray-600 font-mono mt-1 print:text-black">Ref: <strong>{selectedApp.referenceNumber}</strong> | Submitted: {new Date(selectedApp.createdAt).toLocaleString('en-IN')}</p>
              </div>
              <div className="flex items-center gap-4 print:hidden">
                <button 
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#004B87] text-white font-bold text-sm rounded-lg hover:bg-[#003865] transition-colors shadow-sm"
                >
                  <Download size={16} /> Download PDF
                </button>
                <button 
                  onClick={() => setSelectedApp(null)}
                  className="p-2 bg-white border border-gray-300 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body - FIX: Replaced inline style with Tailwind classes for proper printing */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-85px)] print:max-h-none print:overflow-visible print:h-auto print:p-2">
              
              <div className="flex flex-col gap-8 print:gap-6">
                
                {/* 1. Firm Details Table */}
                <div className="print:break-inside-avoid">
                  <h4 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-3 border-b-2 border-[#004B87] pb-2 inline-block print:border-black">
                    <Building2 size={20} className="text-[#004B87] print:text-black" /> Firm Details
                  </h4>
                  <table className="w-full text-sm text-left border-collapse border border-gray-300">
                    <tbody>
                      <TabularRow label="Firm Name" value={selectedApp.firmName} />
                      <TabularRow label="Type of Firm" value={selectedApp.firmType} />
                      <TabularRow label="Enterprise Size" value={selectedApp.enterpriseSize} />
                      <TabularRow label="GSTIN" value={selectedApp.gstin} />
                      <TabularRow label="IEC Code" value={selectedApp.iecPending ? "Applied (Pending)" : selectedApp.iecCode} />
                      <TabularRow label="Udyam Number" value={selectedApp.udyamNumber || "N/A"} />
                      <TabularRow label="District" value={selectedApp.district} />
                      <TabularRow label="Address" value={selectedApp.address} />
                      <TabularRow label="Website" value={selectedApp.website || "N/A"} />
                      <TabularRow label="Export Council" value={selectedApp.exportCouncil || "N/A"} />
                    </tbody>
                  </table>
                </div>

                {/* 2. Contact Information Table */}
                <div className="print:break-inside-avoid">
                  <h4 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-3 border-b-2 border-green-600 pb-2 inline-block print:border-black">
                    <User size={20} className="text-green-600 print:text-black" /> Contact Information
                  </h4>
                  <table className="w-full text-sm text-left border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 print:bg-gray-100">
                        <th className="border border-gray-300 p-3 font-bold text-gray-700 w-1/4">Contact Type</th>
                        <th className="border border-gray-300 p-3 font-bold text-gray-700 w-1/4">Name</th>
                        <th className="border border-gray-300 p-3 font-bold text-gray-700 w-1/4">Designation</th>
                        <th className="border border-gray-300 p-3 font-bold text-gray-700 w-1/4">Mobile & Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold text-gray-700 bg-gray-50 print:bg-transparent">Primary Contact</td>
                        <td className="border border-gray-300 p-3">{selectedApp.primaryContact?.name}</td>
                        <td className="border border-gray-300 p-3">{selectedApp.primaryContact?.designation}</td>
                        <td className="border border-gray-300 p-3">
                          {selectedApp.primaryContact?.mobile}<br/>
                          <span className="text-blue-600 print:text-black">{selectedApp.primaryContact?.email}</span>
                        </td>
                      </tr>
                      {selectedApp.secondaryContact?.name && (
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold text-gray-700 bg-gray-50 print:bg-transparent">Secondary Contact</td>
                          <td className="border border-gray-300 p-3">{selectedApp.secondaryContact.name}</td>
                          <td className="border border-gray-300 p-3">{selectedApp.secondaryContact.designation || "N/A"}</td>
                          <td className="border border-gray-300 p-3">
                            {selectedApp.secondaryContact.mobile || "N/A"}<br/>
                            <span className="text-blue-600 print:text-black">{selectedApp.secondaryContact.email || "N/A"}</span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* 3. Product & Sector Table */}
                <div className="print:break-inside-avoid">
                  <h4 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-3 border-b-2 border-yellow-500 pb-2 inline-block print:border-black">
                    <Package size={20} className="text-yellow-600 print:text-black" /> Sector & Product Details
                  </h4>
                  <table className="w-full text-sm text-left border-collapse border border-gray-300">
                    <tbody>
                      <TabularRow label="Sector Track" value={<span className="font-bold text-[#004B87] print:text-black">{selectedApp.sectorTrack}</span>} />
                      <TabularRow label="Primary Product" value={`${selectedApp.primaryProduct?.description} (HS: ${selectedApp.primaryProduct?.hsCode})`} />
                      
                      {selectedApp.additionalProducts?.some(p => p.description) && (
                        <TabularRow label="Additional Products" value={
                          <ul className="list-disc pl-4 m-0">
                            {selectedApp.additionalProducts.map((p, i) => p.description && (
                              <li key={i}>{p.description} <span className="text-gray-500 print:text-gray-800">(HS: {p.hsCode})</span></li>
                            ))}
                          </ul>
                        } />
                      )}
                      
                      <TabularRow label="Made in MP?" value={selectedApp.madeInMp} />
                      <TabularRow label="Imported Inputs" value={selectedApp.importedInputs || "None"} />
                      <TabularRow label="Certifications Held" value={selectedApp.certifications?.length > 0 ? selectedApp.certifications.join(', ') : "None"} />
                    </tbody>
                  </table>
                </div>

                {/* 4. Market Readiness Table */}
                <div className="print:break-inside-avoid">
                  <h4 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-3 border-b-2 border-blue-500 pb-2 inline-block print:border-black">
                    <Globe size={20} className="text-blue-500 print:text-black" /> Market Readiness
                  </h4>
                  <table className="w-full text-sm text-left border-collapse border border-gray-300">
                    <tbody>
                      <TabularRow label="Target Market (1st Shipment)" value={selectedApp.targetMarket} />
                      <TabularRow label="Second Market" value={selectedApp.secondMarket || "N/A"} />
                      <TabularRow label="Buyer/Lead Status" value={selectedApp.buyerStatus} />
                      <TabularRow label="Past Export Experience" value={selectedApp.exportedBefore} />
                      <TabularRow label="Exports in FY 2025-26" value={selectedApp.exportsLastFy} />
                      <TabularRow label="Claimed FTA Preference?" value={selectedApp.claimedFtaBefore} />
                      <TabularRow label="Registered on Trade Connect?" value={selectedApp.tradeConnectRegistered || "N/A"} />
                      <TabularRow label="Status Holder Certificate?" value={selectedApp.statusHolder || "N/A"} />
                    </tbody>
                  </table>
                </div>

                {/* 5. Final Question */}
                <div className="bg-gray-50 border border-gray-300 p-6 rounded-xl print:border-black print:bg-white print:break-inside-avoid">
                  <h4 className="flex items-center gap-2 text-md font-bold text-gray-900 mb-2">
                    <MessageSquare size={18} className="text-gray-700 print:text-black" /> 
                    What is the one thing that has stopped you so far?
                  </h4>
                  <p className="text-sm font-medium text-gray-800 leading-relaxed italic pl-6 border-l-4 border-yellow-400 print:border-black">
                    "{selectedApp.stoppingFactor}"
                  </p>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}

// Helper component for creating Table Rows strictly formatted
const TabularRow = ({ label, value }) => (
  <tr className="border-b border-gray-300">
    <th className="w-1/3 bg-gray-50 border-r border-gray-300 p-3 text-gray-700 font-semibold align-top print:bg-gray-100">
      {label}
    </th>
    <td className="w-2/3 p-3 text-gray-900 align-top">
      {value}
    </td>
  </tr>
);