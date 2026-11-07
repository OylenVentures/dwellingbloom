"use client";
import { useInquiriesStore } from "@/app/store/useInquiriesStore";
import { ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

export const InquiriesBanner = () => {
  const { activeTab, setActiveTab } = useInquiriesStore();

  return (
    <section className="w-full mb-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <div className="flex items-center gap-space-xs text-secondary mb-1">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              Verified Resident &amp; Applicant
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim" />
            <span className="font-numeric-data text-body-sm text-secondary">
              ID #DW-84920
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Welcome back, Elena Rostova
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Manage current lease applications, track approvals, and coordinate
            directly with property hosts in real-time.
          </p>
        </div>
        {/* Live Escrow & Readiness Metric Spark */}
        <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="pr-space-sm">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Tenant Credit &amp; ID
            </p>
            <div className="flex items-center gap-2">
              <span className="font-numeric-data text-headline-sm text-on-surface font-bold">
                Tier 1 Approved
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-caps font-label-caps bg-surface-container-high text-on-tertiary-container font-semibold">
                99.8% Trust Score
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Selector Navigation Strip */}
      <div className="flex items-center gap-space-xs mt-space-lg overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => {
            setActiveTab("journey");
            toast("Switched to My Rental Journey");
          }}
          className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap transition-transform active:scale-95 ${
            activeTab === "journey"
              ? "bg-primary-container text-on-primary"
              : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
          }`}
        >
          My Rental Journey
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("applications");
            toast("Viewing Current Applications");
          }}
          className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            activeTab === "applications"
              ? "bg-primary-container text-on-primary"
              : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span>Current Applications</span>
          <span className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container text-label-caps font-label-caps flex items-center justify-center font-bold">
            2
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("saved");
            toast("Viewing Saved Homes");
          }}
          className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            activeTab === "saved"
              ? "bg-primary-container text-on-primary"
              : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span>Saved Homes</span>
          <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface text-label-caps font-label-caps flex items-center justify-center font-bold">
            5
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("chat");
            toast("Viewing Direct Messages & Landlord Chat");
          }}
          className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            activeTab === "chat"
              ? "bg-primary-container text-on-primary"
              : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
          <span>Direct Messages &amp; Landlord Chat</span>
        </button>
      </div>
    </section>
  );
};
