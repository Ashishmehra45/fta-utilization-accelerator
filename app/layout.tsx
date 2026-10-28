import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madhya Pradesh FTA Accelerator",
  description:
    "Twelve weeks from your product to your first shipment under a trade agreement. A programme by the Government of Madhya Pradesh and MPIDC.",
  keywords: [
    "FTA",
    "Madhya Pradesh",
    "MPIDC",
    "Export",
    "Trade Agreement",
    "Accelerator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body
        className={`${montserrat.className} min-h-full flex flex-col bg-gray-50 text-[#333333]`}
      >
        {children}
      </body>
    </html>
  );
}
