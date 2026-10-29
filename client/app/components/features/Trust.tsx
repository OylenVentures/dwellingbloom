import { Heart, ShieldCheck, Zap } from "lucide-react";

function Trust() {
  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary tracking-tight">
            Why Choose DwellingBloom?
          </h2>
          <p className="text-text-secondary mt-3">
            We provide a secure and streamlined system to support all your
            rental listing requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Verified Members
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Security is our priority. Every renter and homeowner must verify
              details like BVN to maintain absolute platform integrity.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Direct Messaging
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Easily connect with the counterpart. Reach out directly to
              homeowners with contact details listed on every single dwelling
              page.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Zero Admin Fee
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              List and apply completely free of hidden administration costs.
              Clear, upfront monthly rental fees agreed by both parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
