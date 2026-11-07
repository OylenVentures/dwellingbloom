"use client";
import { Lock, ArrowDown, Landmark } from "lucide-react";

export const FinancialVaultSection = () => {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mt-space-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-2">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-secondary">
            Financial Vault
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
            Automated ACH &amp; Escrow Timeline
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-on-tertiary-container font-label-md text-label-md font-semibold bg-surface-container px-2.5 py-1 rounded-full">
            <Lock className="w-4 h-4 text-on-tertiary-container" />
            FDIC-Insured Escrow Active
          </span>
        </div>
      </div>

      {/* Inline Bar Ledger SVG Chart */}
      <div className="bg-surface-container-low p-space-md rounded-lg mb-space-md">
        <div className="flex items-center justify-between text-secondary font-label-caps text-label-caps mb-3">
          <span>Monthly Distribution Overview (Aug - Nov 2025)</span>
          <span className="text-on-surface-variant">
            Total Volume: $39,400.00
          </span>
        </div>
        <svg
          className="w-full h-32 text-primary"
          preserveAspectRatio="none"
          viewBox="0 0 600 120"
        >
          <line
            x1="0"
            y1="20"
            x2="600"
            y2="20"
            stroke="currentColor"
            strokeDasharray="3,3"
            strokeOpacity="0.08"
          />
          <line
            x1="0"
            y1="60"
            x2="600"
            y2="60"
            stroke="currentColor"
            strokeDasharray="3,3"
            strokeOpacity="0.08"
          />
          <line
            x1="0"
            y1="100"
            x2="600"
            y2="100"
            stroke="currentColor"
            strokeDasharray="3,3"
            strokeOpacity="0.08"
          />
          {/* Aug */}
          <rect x="50" y="30" width="45" height="70" rx="4" fill="#1e3a5f" />
          <rect x="100" y="70" width="30" height="30" rx="4" fill="#beddff" />
          {/* Sep */}
          <rect x="200" y="25" width="45" height="75" rx="4" fill="#1e3a5f" />
          <rect x="250" y="65" width="30" height="35" rx="4" fill="#beddff" />
          {/* Oct */}
          <rect x="350" y="20" width="45" height="80" rx="4" fill="#1e3a5f" />
          <rect x="400" y="55" width="30" height="45" rx="4" fill="#beddff" />
          {/* Nov */}
          <rect x="500" y="10" width="45" height="90" rx="4" fill="#4ae176" />
          <rect x="550" y="45" width="30" height="55" rx="4" fill="#beddff" />
        </svg>
        <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md mt-2 px-6">
          <span>Aug: $9,850</span>
          <span>Sep: $9,850</span>
          <span>Oct: $11,350 (est)</span>
          <span className="text-tertiary-fixed-dim font-bold">
            Nov: $13,000 (target)
          </span>
        </div>
      </div>

      {/* Ledger Line Items */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-tertiary-container">
              <ArrowDown className="w-5 h-5" />
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-primary">
                Evergreen #4B - Rent Disbursement
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Chase Business •••• 9012 via ACH
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-headline-sm text-headline-sm text-primary font-serif">
              +$2,400.00
            </p>
            <span className="font-label-caps text-label-caps text-on-tertiary-container">
              Settled Sep 01
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-primary">
                Cascadia #12 Security Deposit In Trust
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                DwellingBloom Escrow Vault #ESC-892
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-headline-sm text-headline-sm text-secondary font-serif">
              $3,150.00
            </p>
            <span className="font-label-caps text-label-caps text-secondary">
              Escrow Locked
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
