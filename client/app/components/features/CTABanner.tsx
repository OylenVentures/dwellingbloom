import { Check } from "lucide-react";
import { LinkBtn } from "../ui/Btn";

function CTABanner() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-360 mx-auto px-gutter-lg">
        <div className="relative bg-primary text-on-primary rounded-xl overflow-hidden shadow-xl p-space-xl md:p-margin-desktop">
          <div className="relative z-10 max-w-2xl flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest">
              Elevated Living Begins Here
            </span>
            <h2 className="font-display-hero text-headline-xl md:text-display-hero text-on-primary leading-tight">
              Ready to experience a higher standard of living?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim font-light">
              Join thousands of homeowners and residents reclaiming tranquility,
              security, and architectural beauty in everyday tenancy.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-md">
              <LinkBtn
                href="/explore"
                styling="w-full sm:w-auto px-space-lg py-space-md bg-on-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg shadow-md transition-all text-center"
                text="Explore Available Homes"
              />
              <LinkBtn
                href="/auth/register"
                styling="w-full sm:w-auto px-space-lg py-space-md bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-lg text-label-lg rounded-lg backdrop-blur-sm transition-all text-center"
                text="List Your Property"
              />
            </div>
            <div className="flex items-center gap-space-md pt-space-sm text-body-sm text-on-primary-container">
              <span className="inline-flex items-center gap-1">
                <Check className="w-4 h-4 text-on-tertiary-container" />{" "}
                Bank-grade identity clearance
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="w-4 h-4 text-on-tertiary-container" /> No
                hidden broker splits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
