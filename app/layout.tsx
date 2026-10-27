import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using Inter font to match your FTA Accelerator design system
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Madhya Pradesh FTA Accelerator",
  description: "Twelve weeks from your product to your first shipment under a trade agreement. A programme by the Government of Madhya Pradesh and MPIDC.",
  keywords: ["FTA", "Madhya Pradesh", "MPIDC", "Export", "Trade Agreement", "Accelerator"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-[#333333] font-sans">
        {children}
      </body>
    </html>
  );
}