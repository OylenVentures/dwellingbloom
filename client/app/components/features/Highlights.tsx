import { Shield } from "lucide-react";

function Highlights() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-360 mx-auto px-gutter-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Fintech-Grade Dialogue
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary">
              Direct Landlord-Tenant Messaging
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              No middle agent gatekeeping your questions. Inquire directly
              within an audited, polite, and secure messaging container.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-lg flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container w-fit">
                <Shield className="w-4 h-4 text-on-tertiary-container" />
                <span className="font-label-caps text-label-caps text-secondary uppercase">
                  Financial Safety Protocol
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary">
                Safe Escrow &amp; Automated Rent Payments
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Security deposits shouldn't vanish into opaque private accounts.
                DwellingBloom locks tenant deposits in FDIC-insured neutral
                digital escrow until checkout terms are amicably fulfilled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
