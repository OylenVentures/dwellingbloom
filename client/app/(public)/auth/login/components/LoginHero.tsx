"use client";
import { Leaf } from "lucide-react";
import { DarkLogo } from "@/app/components/ui/Logo";

export function LoginHero() {
  return (
    <div className="hidden lg:flex lg:col-span-5 flex-col justify-between relative rounded-xl overflow-hidden bg-primary p-10 text-on-primary shadow-xl">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA000Q4Tz_Kkz0uSCG4p33o27AWPzcTh_AZQGEt03Y1Vzm2cKrbcw2Q2gsT4QGOLL2nBrlEUCSN1hEu7Jwn7sBs9JhJQLGzTEX4f4m2h1CHpKQhHdzYgdFl6xYdbD61_WFfGj2YkoKZrq1MKXJOSebYVCvPsW4Tu9gt3ehGSvIDZ_thy8iJ27dUB5OESgHguAYVP_pDetwwvAth5JV30_QDcbPW6nyR5CUz-B1rSX9g')",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/75 to-transparent z-0" />

      {/* Upper Branding & Monograph Marker */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-col items-center space-y-3">
          <DarkLogo />
          <p className="font-label-caps text-label-caps text-secondary-fixed opacity-80 uppercase tracking-widest">
            Architectural Tenancy Network
          </p>
        </div>
      </div>

      {/* Middle Narrative */}
      <div className="relative z-10 my-auto py-12 max-w-sm">
        <div className="flex items-center space-x-2 text-tertiary-fixed mb-4">
          <Leaf className="w-4 h-4 fill-current" />
          <span className="font-label-caps text-label-caps tracking-widest uppercase">
            Verified Ecosystem
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg leading-tight mb-4 text-surface-container-lowest">
          Precision living, unified for stewards and residents.
        </h2>
        <p className="font-body-md text-body-md text-secondary-fixed opacity-90 leading-relaxed">
          One credential harmonizes sovereign lease contracts, bespoke
          architectural portfolios, and real-time maintenance concierge
          channels.
        </p>
      </div>

      {/* Real-time Operational Ledger Snippet */}
      <div className="relative z-10 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-pulse" />
            <span className="font-label-md text-label-md text-surface-container-lowest">
              Community Settlement Engine
            </span>
          </div>
          <span className="font-numeric-data text-numeric-data text-secondary-fixed">
            99.98% SLA
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3">
          <div className="p-2.5 rounded bg-primary/40">
            <p className="font-label-caps text-label-caps text-secondary-fixed opacity-75 uppercase">
              Active Tenants
            </p>
            <p className="font-headline-sm text-headline-sm text-surface-container-lowest font-medium mt-0.5">
              14,820
            </p>
          </div>
          <div className="p-2.5 rounded bg-primary/40">
            <p className="font-label-caps text-label-caps text-secondary-fixed opacity-75 uppercase">
              Escrow Value
            </p>
            <p className="font-headline-sm text-headline-sm text-surface-container-lowest font-medium mt-0.5">
              $38.4M
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
