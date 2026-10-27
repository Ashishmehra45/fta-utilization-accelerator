import React from "react";

export default function Footer() {
  return (
    <footer className="py-5 text-center" style={{ backgroundColor: '#002A54', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container mx-auto" style={{ maxWidth: '900px' }}>
        
        <p className="text-white mb-0 lh-lg" style={{ fontSize: '0.9rem', opacity: 0.85 }}>
          The <strong className="text-white">Madhya Pradesh FTA Accelerator</strong> is a programme of the Department of Industrial Policy and Investment Promotion & MSME, Government of Madhya Pradesh, run by the Export Cell of the M.P. Industrial Development Corporation. Launched by the Hon’ble Chief Minister on 5 November 2026 at the Madhya Pradesh Export and FTA Conclave 2026, Bhopal.
        </p>
        
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-white mb-0 text-uppercase fw-medium" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
            {/* Yahan se new Date() hata diya aur direct 2026 likh diya */}
            &copy; 2026 MP Industrial Development Corporation Ltd. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}