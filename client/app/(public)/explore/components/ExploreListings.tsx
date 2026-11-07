"use client";
import ListingCard from "@/app/components/features/ListingCard";
import Loading from "@/app/components/ui/Loading";
import { useRealEstateStore } from "@/app/store/useRealEstateStore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function ExploreListings() {
  const {
    listings,
    isLoading,
    fetchListings,
    page,
    page_size,
    search,
    setPage,
  } = useRealEstateStore();

  useEffect(() => {
    fetchListings(page, page_size, search);
  }, [fetchListings, page, page_size, search]);

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
            {page_size * (page - 1) + 1} -{" "}
            {Math.min(page_size * page, listings.length)}
          </span>
        </div>

        <div className="flex items-center gap-space-xs">
          <button
            type="button"
            disabled={page === 1}
            aria-label="Previous page"
            className="cursor-pointer p-2 bg-primary text-on-primary hover:bg-primary/80 rounded-lg disabled:cursor-not-allowed disabled:bg-surface-container-low disabled:text-on-surface-variant transition-colors"
            onClick={() => setPage(page - 1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            aria-label="Next page"
            onClick={() => setPage(page + 1)}
            className="cursor-pointer p-2 bg-primary text-on-primary hover:bg-primary/80 rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}
