"use client";
import ListingCard from "@/app/components/features/ListingCard";
import Loading from "@/app/components/ui/Loading";
import { useRealEstateStore } from "@/app/store/useRealEstateStore";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ExploreListings() {
  const { listings, isLoading, fetchListings } = useRealEstateStore();

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : listings?.length === 0 ? (
        <section className="text-center py-20 bg-white border border-border rounded-2xl p-8 flex-1">
          <p className="text-lg font-bold text-text-primary mb-1">
            No dwellings found
          </p>
          <p className="text-text-secondary text-sm max-w-sm mx-auto">
            We could not find any rentals matching your criteria. Try adjusting
            your filters.
          </p>
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg z-20 mt-space-lg">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </section>
      )}

      <section className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mt-space-lg">
        <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
          <span>Showing</span>
          <span className="font-numeric-data text-numeric-data text-primary font-bold">
            1 – 6
          </span>
        </div>
        <div className="flex items-center gap-space-xs">
          <button
            aria-label="Previous page"
            disabled
            className="p-2 text-outline-variant cursor-not-allowed rounded-lg"
            type="button"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="cursor-pointer w-9 h-9 rounded-lg bg-primary text-on-primary font-numeric-data text-numeric-data font-semibold"
            type="button"
          >
            1
          </button>
          <button
            className="cursor-pointer w-9 h-9 rounded-lg hover:bg-surface-container-high text-primary font-numeric-data transition-colors"
            type="button"
          >
            2
          </button>
          <button
            className="cursor-pointer w-9 h-9 rounded-lg hover:bg-surface-container-high text-primary font-numeric-data transition-colors"
            type="button"
          >
            3
          </button>
          <span className="px-1 text-secondary font-numeric-data">…</span>
          <button
            className="cursor-pointer w-9 h-9 rounded-lg hover:bg-surface-container-high text-primary font-numeric-data transition-colors"
            type="button"
          >
            24
          </button>
          <button
            aria-label="Next page"
            onClick={() => toast.success("Loaded page 2")}
            className="p-2 text-secondary hover:text-primary rounded-lg transition-colors cursor-pointer"
            type="button"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}
