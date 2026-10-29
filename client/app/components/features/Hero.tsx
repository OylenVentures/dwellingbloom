import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import LinkBtn from "../ui/Btn";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-border py-20 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-tr from-background to-white pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Next-Gen Rental Network</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-primary tracking-tight leading-tight">
              Find Your Perfect <span className="text-secondary">Dwelling</span>
              , Made Simple.
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              DwellingBloom connects verified tenants directly with homeowners.
              No middlemen, transparent pricing, secure agreements, and zero
              hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <LinkBtn
                href="/property"
                styling="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all duration-200 cursor-pointer"
                icon={<ArrowRight className="w-4 h-4" />}
                text="Explore Listings"
              />
              <LinkBtn
                href="/auth/register"
                styling="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-background text-text-primary border border-border font-bold rounded-2xl transition-all duration-200"
                text="Get Started"
              />
            </div>
          </div>

          {/* Right Column (Hero Graphic) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square max-w-112.5 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                loading="eager"
                width={800}
                height={800}
                alt="Modern House exterior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-border shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-xs text-text-secondary font-bold uppercase tracking-wider block">
                    Featured Dwelling
                  </span>
                  <span className="text-lg font-extrabold text-primary">
                    Luxury Glasshouse
                  </span>
                </div>
                <span className="text-md font-bold text-accent">$3,200/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
