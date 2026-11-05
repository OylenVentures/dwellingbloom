"use client";
import { useRealEstateStore } from "@/app/store/useRealEstateStore";
import { MapPin, X } from "lucide-react";

export default function ExploreHero() {
  const { filters, setFilters } = useRealEstateStore();

  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
      <div className="space-y-space-xs max-w-2xl">
        <div className="flex items-center gap-space-sm text-secondary font-label-caps text-label-caps uppercase tracking-wider">
          <span className="inline-block w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
          <span>Curated Metropolitan Monograph</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-normal">
          Explore Available Homes &amp; Apartments
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant space-x-space-sm pt-space-xs">
          <span className="text-on-tertiary-container">Verified</span>
          <span>properties indexed across your selected search perimeter</span>
        </p>
      </div>

      <div className="flex-1 flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-lg">
        <MapPin className="w-5 h-5 text-secondary" />
        <div className="flex flex-col flex-1">
          <label
            htmlFor="location"
            className="font-label-caps text-label-caps text-secondary uppercase"
          >
            Location or Neighborhood
          </label>
          <input
            id="location"
            type="text"
            value={filters}
            onChange={(e) => setFilters(e.target.value)}
            className="bg-transparent border-none outline-none font-body-md text-body-md text-on-surface p-0 placeholder-secondary"
            placeholder="Search by city"
          />
        </div>
        <button
          type="button"
          onClick={() => setFilters("")}
          aria-label="Clear location"
          className="cursor-pointer text-secondary hover:text-primary transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
