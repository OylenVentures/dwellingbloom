"use client";

import Image from "next/image";
import { Listing } from "../../store/useRealEstateStore";
import { BadgeCheck, Bath, BedDouble, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import { useAuthStore } from "@/app/store/useAuthStore";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { user } = useAuthStore();
  const handleMessageOwner = () => {
    toast(`Message channel opened for ${listing.name}`, { icon: "💬" });
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div className="relative aspect-16/10 overflow-hidden bg-surface-container">
        <Image
          src={listing?.images[0].image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          width={600}
          height={300}
          alt={listing.name}
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 px-space-sm py-1 bg-surface-container-lowest/90 backdrop-blur-md rounded-full shadow-sm">
          <BadgeCheck className="w-4 h-4 text-on-tertiary-container fill-on-tertiary-container" />
          <span className="text-[11px] font-bold text-primary uppercase">
            Verified Homeowner
          </span>
        </div>
        <div className="absolute bottom-3 left-3 bg-primary text-on-primary px-space-sm py-1 rounded-md text-sm font-bold">
          ₦{listing.monthly_rent.toLocaleString()}{" "}
          <span className="text-xs font-normal text-on-primary-container">
            / mo
          </span>
        </div>
      </div>
      <div className="p-space-lg flex-1 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary uppercase tracking-wider mb-1">
            <MapPin className="w-3.5 h-3.5 mx-auto" /> {listing.city}{" "}
            {listing.state}
          </div>
          <h3 className="font-display text-xl text-primary group-hover:text-secondary transition-colors mb-space-xs">
            {listing.name}
          </h3>
          <p className="text-xs text-on-surface-variant line-clamp-2 mb-space-md">
            {listing.apartment_type}
          </p>
          <div className="grid grid-cols-2 gap-2 py-space-sm bg-surface-container-low rounded-lg text-center">
            <div className="inline-flex items-center justify-center gap-1">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase text-secondary font-bold">
                <BedDouble className="w-3.5 h-3.5" />
                Beds
              </span>
              <span className="text-xs text-primary font-bold">
                {listing.bedrooms}
              </span>
            </div>
            <div className="inline-flex items-center justify-center gap-1">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase text-secondary font-bold">
                <Bath className="w-3.5 h-3.5" />
                Baths
              </span>
              <span className="text-xs text-primary font-bold">
                {listing.bathrooms}
              </span>
            </div>
          </div>
        </div>

        {user && (
          <div className="grid grid-cols-2 gap-space-sm mt-space-lg">
            <button
              onClick={handleMessageOwner}
              type="button"
              className="cursor-pointer py-2.5 px-space-sm bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold rounded-lg transition-colors text-center"
            >
              Message Owner
            </button>
            <button
              onClick={() => {
                toast.success(`Payment channel opened for ${listing.name}`, {
                  icon: "💰",
                });
              }}
              type="button"
              className="cursor-pointer py-2.5 px-space-sm bg-on-tertiary-container text-on-primary hover:bg-tertiary text-xs font-semibold rounded-lg transition-colors text-center"
            >
              Make Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
  <div className="relative aspect-video w-full overflow-hidden bg-background">
    <Image
      src={listing.images[0].image}
      width={800}
      height={600}
      alt={listing.name}
      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
      }}
    />
    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full flex items-center shadow-xs">
      <span className="text-sm font-bold text-primary">
        ₦{listing.monthly_rent}
      </span>
      <span className="text-xs text-text-secondary font-medium">/mo</span>
    </div>
  </div>

  <div className="p-5 flex flex-col flex-1">
    <div className="flex items-center gap-1 text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
      <MapPin className="w-3.5 h-3.5 text-secondary" />
      <span>
        {listing.city} {listing.state}
      </span>
    </div>

    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1 mb-2">
      {listing.name}
    </h3>

    <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-1">
      {listing.apartment_type || "No description provided."}
    </p>

    <div className="flex gap-4 py-3 border-y border-border mb-4 text-xs font-medium text-text-secondary">
      <div className="flex items-center gap-1.5">
        <BedDouble className="w-4 h-4 text-secondary" />
        <span>
          {listing.bedrooms} {listing.bedrooms === 1 ? "Bed" : "Beds"}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Bath className="w-4 h-4 text-secondary" />
        <span>
          {listing.bathrooms} {listing.bathrooms === 1 ? "Bath" : "Baths"}
        </span>
      </div>
    </div>
  </div>
</div> */
}
