import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
