import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/features/Header";
import Footer from "./components/features/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DwellingBloom",
  description:
    "Direct P2P marketplace connecting verified landlords directly with prospective tenants, completely exiting out exploitative middlemen and rental scams.",
  keywords: [
    "DwellingBloom",
    "Real Estate",
    "Property Rental",
    "Landlord",
    "Tenant",
    "P2P Marketplace",
    "Verified Landlords",
    "Rental Scams",
    "Direct Connection",
    "Property Listings",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        data-new-gr-c-s-check-loaded="14.1307.0"
        data-gr-ext-installed=""
      >
        <div className="min-h-screen bg-background flex flex-col font-sans">
          <Toaster position="top-right" reverseOrder={false} />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
