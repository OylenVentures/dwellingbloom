"use client";
import { FileText, Calculator, MapPin, Calendar } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

export const RentingHubColumn = () => {
  return (
    <div className="lg:col-span-4 xl:col-span-5 flex flex-col gap-space-lg">
      {/* Current Lease / Application Status Group */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center justify-between mb-space-md">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="font-headline-md text-headline-md text-primary">
              Applications &amp; Status
            </h2>
          </div>
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
            Live Filings (2)
          </span>
        </div>
        <div className="flex flex-col gap-space-md">
          {/* Card 1: Cascadia Modern Loft #12 */}
          <div className="relative bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md transition-all shadow-sm group">
            <div className="flex gap-space-md items-start">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0zZGZU27DU4K2faA5snNa1uC2YX-AQQB7Lzwh1fflbHs8ZwG-mf02JGb4QHc99peje3reTv8eDnCM7IDgVOlgpOLey39od-GwjSCcLYiyCEUQ_WXs0wcE_Cnka9q76GCXIqAqmx30h2ha3PNiJ_SB17VihPaZxe2P3wkM2ues_OZ21gHw25ILNzEGRphFTzr7BkeBLStkCEaoZ8MW8-3wqgEEaUBqf5EyM3I3MXCL"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  alt="Cascadia Modern Loft #12"
                />
                <span className="absolute top-1 left-1 bg-primary text-on-primary font-label-caps text-label-caps px-1 rounded">
                  #12
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                    Cascadia Modern Loft #12
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-secondary truncate mt-0.5">
                  Under Review by Sarah Jenkins (Homeowner)
                </p>
                <div className="flex items-center gap-2 mt-space-sm flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-caps text-label-caps bg-surface-container-highest text-tertiary font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-ping" />
                    Chat active
                  </span>
                  <span className="font-numeric-data text-body-sm text-on-surface font-semibold">
                    $3,150{" "}
                    <span className="text-secondary font-normal">/mo</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Progress Mini Bar */}
            <div className="mt-space-sm pt-space-xs">
              <div className="flex justify-between text-label-caps font-label-caps text-secondary mb-1">
                <span>Background Check Passed</span>
                <span className="text-primary font-semibold">Stage 3 of 4</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-on-tertiary-container rounded-full"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: The Pearl District Flat */}
          <div className="relative bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md transition-all shadow-sm group">
            <div className="flex gap-space-md items-start">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBABZJnQAFDSBxJD4VLUWoAFuUeY-If4KQQsZPQ4_M4l9RxIRUs8lHX0nlORCcQSHLznydfFBJCNaJHdpkyqaKoMldEiZ0KMcgaM3KRGHjoZKpP1SGJkZd9gF14m1g64y37zX4UlcQ8uLPPIzPzJdIRLVHsZETwVJzf-XEobmeovuvxkep_29y9VRu0u3U7_Rwda1znDOYLZzzd1GJq0h9ZFLhSL1jhXU6dDPcllm7n"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  alt="The Pearl District Flat"
                />
                <span className="absolute top-1 left-1 bg-secondary text-on-secondary font-label-caps text-label-caps px-1 rounded">
                  Flat 4B
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                    The Pearl District Flat
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-secondary truncate mt-0.5">
                  Hosted by Marcus Sterling
                </p>
                <div className="flex items-center gap-2 mt-space-sm flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-caps text-label-caps bg-secondary-fixed text-on-secondary-fixed font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    Tour: Thursday 2:00 PM
                  </span>
                  <span className="font-numeric-data text-body-sm text-on-surface font-semibold">
                    $2,800{" "}
                    <span className="text-secondary font-normal">/mo</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-space-sm flex items-center justify-between bg-surface-container-lowest p-2 rounded-lg">
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <MapPin className="w-4 h-4 text-secondary" /> Northwest 11th Ave
              </span>
              <button
                type="button"
                onClick={() => toast.success("Directions opened in map")}
                className="font-label-md text-label-md text-primary-container hover:underline cursor-pointer"
              >
                Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Estimator & Escrow Calculator Widget */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="flex items-center justify-between mb-space-md">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            <h2 className="font-headline-md text-headline-md text-primary">
              Rent &amp; Escrow Ledger
            </h2>
          </div>
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            DwellingBloom Shield
          </span>
        </div>
        <div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm">
          <div className="flex justify-between items-center text-body-sm font-body-sm">
            <span className="text-on-surface-variant">
              Selected Base (Cascadia #12)
            </span>
            <span className="font-numeric-data text-on-surface font-medium">
              $3,150.00
            </span>
          </div>
          <div className="flex justify-between items-center text-body-sm font-body-sm">
            <span className="text-on-surface-variant">
              Security Holding (Refundable)
            </span>
            <span className="font-numeric-data text-on-surface font-medium">
              $3,150.00
            </span>
          </div>
          <div className="flex justify-between items-center text-body-sm font-body-sm">
            <span className="text-on-surface-variant">
              HOA Move-In &amp; Elevator Deposit
            </span>
            <span className="font-numeric-data text-on-surface font-medium">
              $250.00
            </span>
          </div>
          <div className="pt-space-xs mt-space-xs flex justify-between items-center text-body-md font-body-md font-bold">
            <span className="text-primary">Initial Escrow Target</span>
            <span className="font-numeric-data text-primary font-bold text-headline-sm">
              $6,550.00
            </span>
          </div>
        </div>

        {/* Micro Move-in Checklist */}
        <div className="mt-space-md">
          <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-space-sm">
            Pre-Occupancy Checklist
          </h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
              <span className="w-4 h-4 rounded bg-primary flex items-center justify-center text-on-primary text-[10px]">
                ✓
              </span>
              <span className="font-body-sm text-body-sm text-on-surface line-through text-opacity-60">
                Verified Identity &amp; Employment Proof
              </span>
            </label>
            <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
              <span className="w-4 h-4 rounded bg-primary flex items-center justify-center text-on-primary text-[10px]">
                ✓
              </span>
              <span className="font-body-sm text-body-sm text-on-surface line-through text-opacity-60">
                Credit History Authorization
              </span>
            </label>
            <label className="flex items-center gap-3 p-2 rounded-lg bg-surface-container-low transition-colors cursor-pointer">
              <span className="w-4 h-4 rounded bg-surface-container-highest flex items-center justify-center" />
              <span className="font-body-sm text-body-sm text-on-surface font-medium">
                Virtual Walkthrough &amp; Host Confirmation
              </span>
            </label>
            <label className="flex items-center gap-3 p-2 rounded-lg bg-surface-container-low transition-colors cursor-pointer">
              <span className="w-4 h-4 rounded bg-surface-container-highest flex items-center justify-center" />
              <span className="font-body-sm text-body-sm text-on-surface font-medium">
                DwellingBloom Escrow Lock Activation
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Saved Properties Carousel Mini-Snippet */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
        <div className="flex items-center justify-between mb-space-sm">
          <h4 className="font-headline-sm text-headline-sm text-primary">
            Saved Homes (5)
          </h4>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toast("Viewing all saved homes");
            }}
            className="font-label-md text-label-md text-secondary hover:text-primary transition-colors"
          >
            View All
          </a>
        </div>
        <div className="flex gap-space-sm overflow-x-auto pb-2">
          <div
            onClick={() => toast("Selected Skyline Atelier #80")}
            className="w-40 shrink-0 bg-surface-container-low rounded-lg p-2 group cursor-pointer hover:bg-surface-container transition-all"
          >
            <div className="h-24 rounded overflow-hidden mb-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8SwpRytI6Y3PWQU4FE6hwpNAx2M3WlYnB58fH1bXdR5fbwm5w8QllpVNPak_999WWf_j8UhdtAJCzeGygiZa_hv4jNZNBDBJVO3MtReLwjkG_WE6nrhgnAKJmpevEDlY84FEF8M7Z5GupP1oaSeyWjBHEfAtPnNQeYnKp5HHL4f6O8L0w_xa-z-mitZi8rBciY3G0dtyvL2V8ZLiTBkYLdh911UUIMAav_kZbuOFy"
                width={100}
                height={100}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Skyline Atelier #80"
              />
            </div>
            <p className="font-label-md text-label-md text-on-surface truncate">
              Skyline Atelier #80
            </p>
            <p className="font-numeric-data text-body-sm text-secondary">
              $3,400/mo
            </p>
          </div>
          <div
            onClick={() => toast("Selected Heritage Brownstone")}
            className="w-40 shrink-0 bg-surface-container-low rounded-lg p-2 group cursor-pointer hover:bg-surface-container transition-all"
          >
            <div className="h-24 rounded overflow-hidden mb-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxGS6_pMos6s9a9W5o8e1apH3QK07b9rzcxt1l1c0xNuJLaHb1BSFaqpeLbT_M1V-g66LHa3MBv5QIDOS-l08ZXFVwuiCNPmMuYUArJtFjU0moeWexkkLa38HQxNi17prw5OBbd_iuWB93zOfRWYZUco-J6ZeBkCsQrbTMcSKzQjA1hhJUx7SwKm3oyAOjkjN9hd5q9AT3uqDvjms_7W_wWuYwjm48mRmnARFwea8X"
                width={100}
                height={100}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Heritage Brownstone"
              />
            </div>
            <p className="font-label-md text-label-md text-on-surface truncate">
              Heritage Brownstone
            </p>
            <p className="font-numeric-data text-body-sm text-secondary">
              $2,950/mo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
