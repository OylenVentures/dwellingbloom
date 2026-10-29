"use client";

import { useState } from "react";
import { Listing } from "../store/useRealEstateStore";
import ListingCard from "./ListingCard";
import { Search, Filter, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface ListingsPageProps {
  listings: Listing[];
  loading: boolean;
  onNavigateHome: () => void;
}

export default function ListingsPage({
  listings,
  loading,
  onNavigateHome,
}: ListingsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const data = listings || [];

  console.log(data);

  // Filter listings
  const filteredListings =
    data.length > 0 &&
    data?.filter((listing) => {
      const matchesSearch =
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchTerm.toLowerCase());

      const price = listing.price;
      const matchesMinPrice = minPrice === "" || price >= Number(minPrice);
      const matchesMaxPrice = maxPrice === "" || price <= Number(maxPrice);

      return matchesSearch && matchesMinPrice && matchesMaxPrice;
    });

  // Paginated chunk
  const totalPages =
    data.length > 0 && Math.ceil(filteredListings?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedListings =
    data.length > 0 &&
    filteredListings?.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col">
      {/* Back to Home Button */}
      <button
        onClick={onNavigateHome}
        className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm font-semibold mb-6 transition-colors self-start"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Head */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight">
          Browse Dwellings
        </h1>
        <p className="text-text-secondary mt-1">
          Explore and filter rental dwellings currently looking for tenants.
        </p>
      </div>

      {/* Filter panel */}
      <div className="bg-white p-4 rounded-2xl border border-border shadow-xs flex flex-col md:flex-row gap-4 items-center mb-8">
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search by title, location, or amenities..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-text-secondary shrink-0" />
          <div className="flex items-center gap-1.5 w-full">
            <input
              type="number"
              placeholder="Min Price ($)"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full md:w-32 px-3 py-2 bg-background border border-border rounded-xl text-sm focus:outline-hidden"
            />
            <span className="text-text-secondary text-xs">-</span>
            <input
              type="number"
              placeholder="Max Price ($)"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full md:w-32 px-3 py-2 bg-background border border-border rounded-xl text-sm focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Listings */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 flex-1">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-sm font-semibold text-text-secondary">
            Loading properties...
          </p>
        </div>
      ) : paginatedListings?.length === 0 ? (
        <div className="text-center py-20 bg-white border border-border rounded-2xl p-8 flex-1">
          <p className="text-lg font-bold text-text-primary mb-1">
            No dwellings found
          </p>
          <p className="text-text-secondary text-sm max-w-sm mx-auto">
            We could not find any rentals matching your criteria. Try adjusting
            your filters.
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedListings &&
              paginatedListings?.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 border-t border-border pt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border border-border rounded-lg hover:bg-background text-text-secondary disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-border hover:bg-background text-text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border border-border rounded-lg hover:bg-background text-text-secondary disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
