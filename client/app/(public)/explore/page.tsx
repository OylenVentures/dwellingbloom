"use client";
import { ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";
import ExploreHero from "./components/ExploreHero";
import ExploreListings from "./components/ExploreListings";

function Explore() {
  return (
    <div className="w-full max-w-360 mx-auto px-gutter-lg py-margin">
      <ExploreHero />
      <ExploreListings />

      <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center text-tertiary-fixed shrink-0">
            <ShieldCheck className="w-6 h-6 text-tertiary-fixed" />
          </div>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary font-medium">
              DwellingBloom Resident Assurance
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Deposits and holding bonds are held in regulated FINRA-compliant
              trust accounts until lease signature and digital walk-through
              confirmation.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => toast.success("Opened Resident Assurance Protocol")}
          className="cursor-pointer whitespace-nowrap px-space-md py-2.5 bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-lg text-label-sm rounded-lg shadow-sm transition-colors"
        >
          Review Protocol
        </button>
      </div>
    </div>
  );
}

export default Explore;
