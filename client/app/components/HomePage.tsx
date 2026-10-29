"use client";

import { ArrowRight, Star, ShieldCheck, Zap, Heart } from "lucide-react";
import ListingCard from "./features/ListingCard";
import { Listing } from "../store/useRealEstateStore";
import Image from "next/image";

interface HomePageProps {
  featuredListings: Listing[];
  onNavigateToListings: () => void;
  onNavigateToLogin: () => void;
  onNavigateToRegister: () => void;
}

export default function HomePage({
  featuredListings,
  onNavigateToListings,
  onNavigateToRegister,
}: HomePageProps) {
  const data = featuredListings || [];

  return (
    <div className="flex-1 bg-background flex flex-col">
      {/* Hero Section */}
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
                Find Your Perfect{" "}
                <span className="text-secondary">Dwelling</span>, Made Simple.
              </h1>
              <p className="text-text-secondary text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                DwellingBloom connects verified tenants directly with
                homeowners. No middlemen, transparent pricing, secure
                agreements, and zero hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={onNavigateToListings}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Listings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToRegister}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-background text-text-primary border border-border font-bold rounded-2xl transition-all duration-200 cursor-pointer"
                >
                  <span>Register Account</span>
                </button>
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
                  <span className="text-md font-bold text-accent">
                    $3,200/mo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Trust Section */}
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

      {/* Featured Listings Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">
              Featured Dwellings
            </h2>
            <p className="text-text-secondary mt-2">
              Take a look at some of the highest-rated properties added
              recently.
            </p>
          </div>
          <button
            onClick={onNavigateToListings}
            className="flex items-center gap-2 text-primary font-bold text-sm hover:text-secondary group shrink-0"
          >
            <span>View More Dwellings</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {data?.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-border rounded-2xl bg-white">
            <p className="text-text-secondary">
              No featured dwellings listed currently.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.length > 0 &&
              data
                ?.slice(0, 3)
                ?.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
          </div>
        )}
      </section>
    </div>
  );
}
