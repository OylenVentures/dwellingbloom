import { Building2, CheckCircle2, Home } from "lucide-react";

function Audience() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-360 mx-auto px-gutter-lg">
        <div className="flex flex-col items-center text-center mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest bg-surface-container-high px-space-sm py-1 rounded-full mb-space-xs">
            Symmetrical Harmony
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary max-w-xl">
            Crafted for Mutual Dignity
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
            Removing the predatory middlemen. DwellingBloom re-architects the
            rental balance sheet so owners gain security and tenants gain ease.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg">
          <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-primary/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-primary font-label-caps text-label-caps uppercase">
                  <Building2 className="w-3.5 h-3.5" />
                  Property Custodians
                </span>
                <span className="font-label-caps text-label-caps text-secondary tracking-widest">
                  PORTFOLIO PROTOCOL
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-space-sm">
                For Homeowners
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Maximize your asset yield while preserving peace of mind. We
                automate legalities, vet every candidate with surgical rigor,
                and protect monthly income.
              </p>
              <ul className="flex flex-col gap-space-md mb-space-xl">
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      Guaranteed On-Time Payouts
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Rent delivered on the 1st of every month through our
                      insured clearinghouse.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      Verified Credit &amp; Background Audits
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Comprehensive reports, income verification, and fraud
                      detection in seconds.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      Automated State-Compliant Leases
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Jurisdiction-tailored digital leases ready for binding
                      e-signatures.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      Maintenance Ticketing &amp; Direct Chat
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Triage repair requests smoothly with vetted local
                      contractor network options.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-secondary/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase">
                  <Home className="w-3.5 h-3.5" />
                  Modern Residents
                </span>
                <span className="font-label-caps text-label-caps text-secondary tracking-widest">
                  RESIDENTIAL SUITE
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-space-sm">
                For Tenants
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Say farewell to phantom listings, predatory application
                deposits, and silent property managers. Welcome to architectural
                transparency.
              </p>
              <ul className="flex flex-col gap-space-md mb-space-xl">
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      Immersive Virtual Tours
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Spatial 3D walkthroughs with real dimension schematics.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      1-Click Universal Rental Application
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Pay one single verification fee valid across all listings
                      on the platform.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      Encrypted Security Deposit Escrow
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Funds remain safeguarded in an independent
                      interest-bearing vault.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-space-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container mt-0.5 shrink-0" />
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary block">
                      Instant Key Handover Tracking
                    </strong>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Automated lockbox codes and verified move-in condition
                      audit reports.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audience;
