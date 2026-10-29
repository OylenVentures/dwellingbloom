"use client";

import Image from "next/image";
import { Listing } from "../../store/useRealEstateStore";
import { MapPin, BedDouble, Bath, Mail, Phone, User } from "lucide-react";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Property Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-background">
        <Image
          src={listing.imageUrl}
          width={800}
          height={600}
          alt={listing.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full flex items-center shadow-xs">
          <span className="text-sm font-bold text-primary">
            ${listing.price}
          </span>
          <span className="text-xs text-text-secondary font-medium">/mo</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Location */}
        <div className="flex items-center gap-1 text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5 text-secondary" />
          <span>{listing.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1 mb-2">
          {listing.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-1">
          {listing.description || "No description provided."}
        </p>

        {/* Specs */}
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

        {/* Owner Details */}
        <div className="bg-background/50 rounded-xl p-3 text-xs space-y-1.5 border border-border/50">
          <div className="flex items-center gap-2 text-text-primary font-semibold">
            <User className="w-3.5 h-3.5 text-secondary" />
            <span>{listing.ownerName}</span>
            <span className="text-[10px] text-accent bg-accent/10 px-1.5 py-0.5 rounded-full font-medium ml-auto">
              Homeowner
            </span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <Mail className="w-3.5 h-3.5" />
            <a
              href={`mailto:${listing.ownerEmail}`}
              className="hover:text-primary transition-colors"
            >
              {listing.ownerEmail}
            </a>
          </div>
          {listing.ownerPhone && (
            <div className="flex items-center gap-2 text-text-secondary">
              <Phone className="w-3.5 h-3.5" />
              <a
                href={`tel:${listing.ownerPhone}`}
                className="hover:text-primary transition-colors"
              >
                {listing.ownerPhone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
