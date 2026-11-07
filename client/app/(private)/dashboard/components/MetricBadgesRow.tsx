"use client";
import {
  Building2,
  CreditCard,
  Users,
  PieChart,
  CheckCircle2,
  Check,
  Clock,
} from "lucide-react";

export const MetricBadgesRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
      {/* Stat 1: Total Active Listings */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            Total Active Listings
          </span>
          <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
            <Building2 className="w-5 h-5" />
          </div>
        </div>
        <div className="my-3">
          <div className="font-headline-md text-headline-md text-primary font-serif">
            4 Properties
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md mt-1">
            <CheckCircle2 className="w-4 h-4 text-on-tertiary-container" />
            <span>+1 pending verification</span>
          </div>
        </div>
        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full rounded-full"
            style={{ width: "80%" }}
          />
        </div>
      </div>

      {/* Stat 2: Monthly Rental Income */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            Monthly Rental Income
          </span>
          <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary-container">
            <CreditCard className="w-5 h-5" />
          </div>
        </div>
        <div className="my-3">
          <div className="font-headline-md text-headline-md text-primary font-serif">
            $9,850.00
          </div>
          <div className="flex items-center gap-1.5 text-on-tertiary-container font-label-md text-label-md mt-1">
            <Check className="w-4 h-4" />
            <span className="font-semibold">100% collected on time</span>
          </div>
        </div>
        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-on-tertiary-container h-full rounded-full"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Stat 3: Active Applications */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            Active Applications
          </span>
          <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
            <Users className="w-5 h-5" />
          </div>
        </div>
        <div className="my-3">
          <div className="font-headline-md text-headline-md text-primary font-serif">
            12 Verified
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md mt-1">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>3 awaiting review</span>
          </div>
        </div>
        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-secondary h-full rounded-full"
            style={{ width: "65%" }}
          />
        </div>
      </div>

      {/* Stat 4: Occupancy Rate */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            Occupancy Rate
          </span>
          <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
            <PieChart className="w-5 h-5" />
          </div>
        </div>
        <div className="my-3">
          <div className="font-headline-md text-headline-md text-primary font-serif">
            96%
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md mt-1">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Avg lease term: 14 mos</span>
          </div>
        </div>
        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-primary-container h-full rounded-full"
            style={{ width: "96%" }}
          />
        </div>
      </div>
    </div>
  );
};
