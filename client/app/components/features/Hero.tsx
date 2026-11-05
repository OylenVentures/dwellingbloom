import { BadgeCheck } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-surface-container-lowest via-surface to-surface-container-low pb-space-xl">
      <div className="max-w-360 mx-auto px-gutter-lg pt-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center mb-space-xl">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-high rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                Architectural Clarity • Direct Verified Leasing
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-primary tracking-tight max-w-2xl">
              Where Finding a Home Feels Like Coming Home
            </h1>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl font-light">
              DwellingBloom connects quality homeowners directly with verified
              tenants. Zero friction, transparent escrow, and seamless
              communication.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-4/3 bg-surface-container">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8dI0a_2JtcmRAek5Fzrl4R7P1VAOwuZl_7kIJoO9qMCkxWo3qBsoqAVpaBHvSOmJWCIVaaBpMI4ae10AQC1nelXa3TYFHYuY9vTUNcv4pEY5zKGOI0cZzrxAxk57GZP7y9tcamKMYeFopHowcE3_ndddpvRQbUGkb9LGeinbPiUrGIDpG1N4C04p1yaoQ9ONXGWfaYPV2JJZFpA7iEh4br2XGQsGi6gLqyJqV2JJ7"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                width={300}
                height={300}
                alt="Modern architectural interior"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-space-md rounded-lg shadow-md flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <BadgeCheck className="w-5 h-5 text-on-tertiary-container fill-on-tertiary-container" />
                  <div>
                    <div className="font-label-md text-label-md text-primary">
                      Ketu • Lagos
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary">
                      Pre-screened &amp; Leased in 18 hrs
                    </div>
                  </div>
                </div>
                <span className="font-numeric-data text-numeric-data text-primary font-bold bg-surface-container-high px-space-sm py-1 rounded">
                  Direct Escrow
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-xl pt-space-lg">
          <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest/60 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="font-headline-lg text-headline-lg text-primary tracking-tight">
              14,000+
            </div>
            <div className="font-label-caps text-label-caps text-secondary uppercase">
              Verified Homes
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Archived &amp; inspected in-person
            </div>
          </div>
          <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest/60 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="font-headline-lg text-headline-lg text-on-tertiary-container tracking-tight">
              99.4%
            </div>
            <div className="font-label-caps text-label-caps text-secondary uppercase">
              Verified Landlords
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Strict title &amp; escrow checks
            </div>
          </div>
          <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest/60 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="font-headline-lg text-headline-lg text-primary tracking-tight">
              24hr
            </div>
            <div className="font-label-caps text-label-caps text-secondary uppercase">
              Average Lease Approval
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Direct digital signature workflow
            </div>
          </div>
          <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest/60 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="font-headline-lg text-headline-lg text-primary tracking-tight">
              ₦0
            </div>
            <div className="font-label-caps text-label-caps text-secondary uppercase">
              Hidden Fees
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Zero application inflation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
