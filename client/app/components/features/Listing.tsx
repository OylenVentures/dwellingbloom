"use client";
import { ArrowRight } from "lucide-react";
import ListingCard from "./ListingCard";
import { useRealEstateStore } from "@/app/store/useRealEstateStore";
import Loading from "../ui/Loading";
import { useEffect } from "react";
import LinkBtn from "../ui/Btn";

function Listing() {
  const { listings, loading, fetchListings } = useRealEstateStore();

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col sm:flex-row items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tight">
            Featured Dwellings
          </h2>
          <p className="text-text-secondary mt-2">
            Take a look at some of the highest-rated properties added recently.
          </p>
        </div>
        <LinkBtn
          href="/property"
          styling="flex items-center gap-2 text-primary font-bold text-sm hover:text-secondary group shrink-0"
          icon={
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          }
          text="View More Dwellings"
        />
      </div>

      {loading ? (
        <Loading />
      ) : listings?.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-2xl bg-white">
          <p className="text-text-secondary">
            No featured dwellings listed currently.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings?.length > 0 &&
            listings
              ?.slice(0, 3)
              ?.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
        </div>
      )}
    </section>
  );
}

export default Listing;
