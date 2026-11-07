"use client";
import { useDashboardStore } from "@/app/store/useDashboardStore";
import { Download, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { SidebarNav } from "./components/SidebarNav";
import { HeaderNav } from "./components/HeaderNav";
import { MetricBadgesRow } from "./components/MetricBadgesRow";
import { PropertyCard } from "./components/PropertyCard";
import { FinancialVaultSection } from "./components/FinancialVaultSection";
import { ApplicantVettingRail } from "./components/ApplicantVettingRail";
import DashboardLayout from "./layout";

function Dashboard() {
  const { propertyFilter, setPropertyFilter, properties } = useDashboardStore();

  const filteredProperties = properties.filter((p) => {
    if (propertyFilter === "vacant") return p.status === "vacant";
    return true;
  });

  return (
    <DashboardLayout>
      <SidebarNav />
      <div className="pl-64">
        <HeaderNav />
        <main className="relative pt-20 w-full min-h-screen bg-surface px-space-xl">
          <div className="flex flex-col w-full pb-space-xl">
            {/* Top Welcome & Master Action Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-md mb-space-lg">
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider">
                    Portfolio Command
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    Live Synchronized
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Welcome back, Sarah Jenkins
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  Managing 4 executive urban residences across Portland &amp;
                  Seattle Metropolitan.
                </p>
              </div>
              <div className="flex items-center gap-space-sm self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => toast.success("Ledger exported to CSV")}
                  className="inline-flex items-center gap-2 bg-surface-container-lowest text-primary hover:bg-surface-container transition-colors px-4 py-2.5 rounded-lg shadow-sm font-label-lg text-label-lg"
                >
                  <Download className="w-5 h-5" /> Export Ledger
                </button>
                <button
                  type="button"
                  onClick={() =>
                    toast.success("Navigating to Property Creation flow")
                  }
                  className="inline-flex items-center gap-2 bg-tertiary-fixed-dim text-tertiary hover:opacity-95 transition-opacity px-5 py-2.5 rounded-lg shadow-sm font-label-lg text-label-lg font-semibold"
                >
                  <PlusCircle className="w-5 h-5" /> + Add New Property Listing
                </button>
              </div>
            </div>

            {/* Metric Badges Row */}
            <MetricBadgesRow />

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
              {/* Left Column: Managed Properties (8 Cols) */}
              <div className="xl:col-span-8 flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary">
                      My Managed Properties
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Real-time lease tenure, occupancy health, and resident
                      channels
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-label-caps text-secondary uppercase">
                      Filter by:
                    </span>
                    <button
                      type="button"
                      onClick={() => setPropertyFilter("all")}
                      className={`font-label-md text-label-md px-3 py-1.5 rounded-lg transition-colors ${
                        propertyFilter === "all"
                          ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
                          : "bg-transparent text-secondary hover:bg-surface-container-low"
                      }`}
                    >
                      All (4)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyFilter("vacant")}
                      className={`font-label-md text-label-md px-3 py-1.5 rounded-lg transition-colors ${
                        propertyFilter === "vacant"
                          ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
                          : "bg-transparent text-secondary hover:bg-surface-container-low"
                      }`}
                    >
                      Vacant (1)
                    </button>
                  </div>
                </div>

                {/* Properties List */}
                <div className="flex flex-col gap-space-md">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                  ))}
                </div>

                {/* Financial Vault Section */}
                <FinancialVaultSection />
              </div>

              {/* Right Column: Applicant Vetting Rail (4 Cols) */}
              <ApplicantVettingRail />
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
