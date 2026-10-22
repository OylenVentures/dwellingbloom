"use client";

import { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useRealEstateStore, Listing } from "../store/useRealEstateStore";
import AddListingModal from "./AddListingModal";
import type { LucideIcon } from "lucide-react";
import {
  Plus,
  Home as HomeIcon,
  Settings,
  Mail,
  Phone,
  Layers,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sliders,
  Search,
  Filter,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Video,
} from "lucide-react";
import toast from "react-hot-toast";
import { getCurrentUser } from "../api/user";
import Image from "next/image";
import { useRouter } from "next/navigation";

type NavItem = {
  id: "overview" | "apartments" | "users" | "settings";
  label: string;
  icon: LucideIcon;
};

export default function Dashboard() {
  const { user, accessToken, refreshToken, setUser } = useAuthStore(
    (state) => state,
  );
  const logout = useAuthStore((state) => state.logout);
  const { listings, fetchListings } = useRealEstateStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const navigate = useRouter();

  // Navigation / Layout customization state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "overview" | "apartments" | "users" | "settings"
  >("overview");

  // Renter apartments search, filter, pagination, details states
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentRenterPage, setCurrentRenterPage] = useState(1);
  const [selectedApartment, setSelectedApartment] = useState<Listing | null>(
    null,
  );

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  useEffect(() => {
    const loadCurrentUser = async () => {
      if (user || !accessToken) return;

      setProfileLoading(true);

      try {
        const currentUser = await getCurrentUser(accessToken);
        setUser(currentUser, accessToken, refreshToken);
      } catch {
        toast.error("Unable to confirm your profile. Please sign in again.");
        await logout();
      } finally {
        setProfileLoading(false);
      }
    };

    void loadCurrentUser();
  }, [accessToken, logout, refreshToken, setUser, user]);

  if (profileLoading || (!user && accessToken)) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-background">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto" />
          <p className="text-sm font-semibold text-text-primary">
            Confirming your session...
          </p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  // Filter listings owned by homeowner
  const ownerListings =
    listings && listings.length > 0
      ? listings?.filter(
          (l) => l.ownerEmail.toLowerCase() === user.email.toLowerCase(),
        )
      : [];

  // Left Sidebar Nav Items configuration
  const getNavItems = () => {
    const base: NavItem[] = [
      { id: "overview", label: "Overview", icon: Layers },
    ];
    if (user.role === "OWNER") {
      base.push({ id: "apartments", label: "My Apartments", icon: HomeIcon });
    }
    if (user.role === "TENANT") {
      base.push({ id: "apartments", label: "Apartments", icon: HomeIcon });
    }

    base.push({ id: "settings", label: "Settings", icon: Settings });
    return base;
  };

  const navItems = getNavItems();

  return (
    <div className="flex-1 flex min-h-screen bg-background relative">
      {/* Collapsible Left Side Navigation */}
      <aside
        className={`bg-white border-r border-border flex flex-col justify-between transition-all duration-300 z-30 shrink-0 sticky top-0 h-screen ${
          isSidebarCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Navigation Items Link List */}
        <div className="p-4 space-y-6">
          {/* Header toggle controls inside side navigation */}
          <div className="flex items-center justify-between pb-4 border-b border-border">
            {!isSidebarCollapsed && (
              <span className="text-xs font-black uppercase text-secondary tracking-widest">
                Portal Menu
              </span>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1.5 hover:bg-background rounded-lg border border-border text-text-secondary hover:text-text-primary ml-auto transition-colors"
              title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isSidebarCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-xs"
                      : "text-text-secondary hover:text-text-primary hover:bg-background"
                  } ${isSidebarCollapsed ? "justify-center" : ""}`}
                  title={item.label}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {!isSidebarCollapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card inside Side Navigation Bottom */}
        <div className="p-4 border-t border-border space-y-3">
          <div
            className={`flex items-center gap-3 ${isSidebarCollapsed ? "justify-center" : ""}`}
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black shrink-0">
              {user.first_name[0]}
              {user.last_name[0]}
            </div>
            {!isSidebarCollapsed && (
              <div className="min-w-0">
                <span className="text-xs font-bold text-text-primary block truncate">
                  {user.first_name} {user.last_name}
                </span>
                <span className="text-[10px] text-text-secondary font-medium block truncate">
                  {user.role}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              logout();
              navigate.refresh();
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-red-500 hover:bg-red-500/5 transition-all cursor-pointer ${
              isSidebarCollapsed ? "justify-center" : ""
            }`}
            title="Logout"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!isSidebarCollapsed && <span>Logout Account</span>}
          </button>
        </div>
      </aside>

      {/* Main Panel Content container */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {/* Dynamic view content based on side navigation tabs */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-accent tracking-tight">
                  Overview Dashboard
                </h1>
                <p className="text-text-secondary text-sm mt-1">
                  Hello, <b>{user.first_name}</b>. Welcome back to
                  DwellingBloom.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                    Role
                  </p>
                  <p className="mt-2 text-sm font-bold text-text-primary">
                    {user.role}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                    Session
                  </p>
                  <p className="mt-2 text-sm font-bold text-text-primary">
                    {accessToken ? "Token active" : "No active token"}
                  </p>
                </div>
              </div>

              {user.role === "OWNER" && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-secondary text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Apartment</span>
                </button>
              )}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-border rounded-2xl">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
                  Account Type
                </span>
                <span className="text-xl font-black text-primary mt-2 block uppercase">
                  {user.role}
                </span>
              </div>
              {user.role === "OWNER" && (
                <div className="p-6 bg-white border border-border rounded-2xl">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
                    Listed Apartments
                  </span>
                  <span className="text-xl font-black text-primary mt-2 block">
                    {ownerListings.length}
                  </span>
                </div>
              )}
              {user.role === "TENANT" && (
                <div className="p-6 bg-white border border-border rounded-2xl">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider block">
                    Applications Submitted
                  </span>
                  <span className="text-xl font-black text-primary mt-2 block">
                    0 Applications
                  </span>
                </div>
              )}
            </div>

            {/* Section details */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="text-md font-bold text-primary mb-4">
                Linked Verification Accounts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-background rounded-xl border border-border flex justify-between">
                  <span className="text-text-secondary font-semibold">
                    Bank Name
                  </span>
                  <span className="font-bold text-text-primary">
                    {user.bank_name || "N/A"}
                  </span>
                </div>
                <div className="p-3 bg-background rounded-xl border border-border flex justify-between">
                  <span className="text-text-secondary font-semibold">
                    Account Number
                  </span>
                  <span className="font-bold text-text-primary">
                    {user.account_number || "N/A"}
                  </span>
                </div>
                <div className="p-3 bg-background rounded-xl border border-border flex justify-between">
                  <span className="text-text-secondary font-semibold">
                    Account Holder
                  </span>
                  <span className="font-bold text-text-primary">
                    {user.account_name || "N/A"}
                  </span>
                </div>
                <div className="p-3 bg-background rounded-xl border border-border flex justify-between">
                  <span className="text-text-secondary font-semibold">
                    BVN Linked
                  </span>
                  <span className="font-bold text-accent">
                    ✓ Linked & Encrypted
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "apartments" && (
          <div className="space-y-6">
            {selectedApartment ? (
              /* Renter Apartment Details View */
              <div className="space-y-6 animate-fadeIn">
                <button
                  onClick={() => setSelectedApartment(null)}
                  className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm font-semibold transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Apartments</span>
                </button>

                <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-xs">
                  {/* Main Image */}
                  <div className="relative aspect-video md:h-96 w-full overflow-hidden bg-background">
                    <Image
                      src={selectedApartment.uploaded_images?.[0] || ""}
                      width={800}
                      height={600}
                      alt={selectedApartment.title}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-2xl flex items-center shadow-xs">
                      <span className="text-lg font-black text-primary">
                        ${selectedApartment.monthly_rent}
                      </span>
                      <span className="text-xs text-text-secondary font-medium">
                        /mo
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                      <div>
                        <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                          {selectedApartment.apartment_type}
                        </span>
                        <h2 className="text-2xl font-black text-primary tracking-tight mt-2">
                          {selectedApartment.title}
                        </h2>
                        <div className="flex items-center gap-1.5 text-text-secondary text-sm mt-1">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span>{selectedApartment.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${
                            selectedApartment.is_available
                              ? "bg-primary/10 text-primary"
                              : "bg-red-500/10 text-red-500"
                          }`}
                        >
                          {selectedApartment.is_available
                            ? "Available Now"
                            : "Occupied"}
                        </span>
                      </div>
                    </div>

                    {/* Key Specs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-background rounded-2xl border border-border/50">
                      <div className="text-center p-2 border-r border-border/50 last:border-0">
                        <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider block">
                          Monthly Rent
                        </span>
                        <span className="text-md font-bold text-primary">
                          ${selectedApartment.monthly_rent}
                        </span>
                      </div>
                      <div className="text-center p-2 border-r border-border/50 last:border-0">
                        <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider block">
                          Agreement Fee
                        </span>
                        <span className="text-md font-bold text-primary">
                          ${selectedApartment.agreement_fee}
                        </span>
                      </div>
                      <div className="text-center p-2 border-r border-border/50 last:border-0">
                        <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider block">
                          Bedrooms
                        </span>
                        <span className="text-md font-bold text-primary">
                          {selectedApartment.bedrooms} Rooms
                        </span>
                      </div>
                      <div className="text-center p-2 last:border-0">
                        <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider block">
                          Bathrooms
                        </span>
                        <span className="text-md font-bold text-primary">
                          {selectedApartment.bathrooms} Baths
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-primary">
                        About this Dwelling
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                        {selectedApartment.description ||
                          "No description available for this property."}
                      </p>
                    </div>

                    {/* Gallery / Uploaded Images */}
                    {selectedApartment.uploaded_images &&
                      selectedApartment.uploaded_images.length > 0 && (
                        <div className="space-y-3">
                          <h3 className="text-sm font-bold text-primary">
                            Photo Gallery
                          </h3>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {selectedApartment.uploaded_images.map(
                              (imgUrl, i) => (
                                <div
                                  key={i}
                                  className="aspect-video bg-background border border-border rounded-xl overflow-hidden"
                                >
                                  <Image
                                    src={imgUrl}
                                    width={68}
                                    height={70}
                                    alt={`Gallery Image ${i + 1}`}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                    {/* Walkthrough Video */}
                    {selectedApartment.video_url && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold text-primary">
                          Video Walkthrough
                        </h3>
                        <div className="p-4 bg-background border border-border rounded-2xl flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                              <Video className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-text-primary block">
                                Virtual Tour Available
                              </span>
                              <span className="text-[10px] text-text-secondary block">
                                Watch the walkthrough walkthrough
                              </span>
                            </div>
                          </div>
                          <a
                            href={selectedApartment.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-secondary text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                          >
                            <span>Watch Video</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Owner/Contact Details */}
                    <div className="border-t border-border pt-6 space-y-4">
                      <h3 className="text-sm font-bold text-primary">
                        Contact Information
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-background/50 rounded-2xl p-4 border border-border/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">
                            {selectedApartment.ownerName[0]}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-text-primary block">
                              {selectedApartment.ownerName}
                            </span>
                            <span className="text-[10px] text-text-secondary block">
                              Verified Homeowner
                            </span>
                          </div>
                        </div>
                        <div className="sm:ml-auto flex flex-wrap gap-2">
                          <a
                            href={`mailto:${selectedApartment.ownerEmail}`}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border text-text-primary text-xs font-bold rounded-xl hover:bg-background transition-all"
                          >
                            <Mail className="w-3.5 h-3.5 text-secondary" />
                            <span>Email</span>
                          </a>
                          {selectedApartment.ownerPhone && (
                            <a
                              href={`tel:${selectedApartment.ownerPhone}`}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border text-text-primary text-xs font-bold rounded-xl hover:bg-background transition-all"
                            >
                              <Phone className="w-3.5 h-3.5 text-secondary" />
                              <span>Call</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Apartments Dashboard List View */
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-black text-primary tracking-tight">
                      {user.role === "TENANT"
                        ? "Explore Rental Dwellings"
                        : "My Apartments Portfolio"}
                    </h1>
                    <p className="text-text-secondary text-sm mt-1">
                      {user.role === "TENANT"
                        ? "Browse, search and filter listings to find your next home."
                        : "Manage availability, images, walkthroughs and specifications."}
                    </p>
                  </div>
                  {user.role === "OWNER" && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-secondary text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create Apartment</span>
                    </button>
                  )}
                </div>

                {user.role === "TENANT" && (
                  /* Renter Search & Filter Panel */
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-xs flex flex-col md:flex-row gap-4 items-center mb-6">
                    <div className="relative w-full md:flex-1">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                      <input
                        type="text"
                        placeholder="Search by title, location, or description..."
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          setCurrentRenterPage(1);
                        }}
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs transition-all"
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
                            setCurrentRenterPage(1);
                          }}
                          className="w-full md:w-28 px-2 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-hidden"
                        />
                        <span className="text-text-secondary text-xs">-</span>
                        <input
                          type="number"
                          placeholder="Max Price ($)"
                          value={maxPrice}
                          onChange={(e) => {
                            setMaxPrice(e.target.value);
                            setCurrentRenterPage(1);
                          }}
                          className="w-full md:w-28 px-2 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* List Content */}
                {user.role === "OWNER" ? (
                  ownerListings.length === 0 ? (
                    <div className="bg-white border border-border p-12 text-center rounded-3xl">
                      <p className="text-text-secondary text-sm">
                        You haven&apos;t listed any apartments yet.
                      </p>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="mt-4 text-xs font-bold text-primary hover:underline cursor-pointer"
                      >
                        Add apartment specs now
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {ownerListings.map((listing) => (
                        <div
                          key={listing.id}
                          className="bg-white border border-border rounded-2xl overflow-hidden shadow-xs"
                        >
                          <Image
                            src={listing.uploaded_images?.[0] || ""}
                            width={68}
                            height={70}
                            alt={listing.title}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                                {listing.apartment_type}
                              </span>
                              <span
                                className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                                  listing.is_available
                                    ? "bg-primary/10 text-primary"
                                    : "bg-red-500/10 text-red-500"
                                }`}
                              >
                                {listing.is_available
                                  ? "Available"
                                  : "Occupied"}
                              </span>
                            </div>
                            <h4 className="text-md font-bold text-primary">
                              {listing.name}
                            </h4>
                            <p className="text-text-secondary text-xs">
                              {listing.location}
                            </p>
                            <div className="border-t border-border pt-2 flex justify-between text-xs font-bold text-primary">
                              <span>Rent: ${listing.monthly_rent}/mo</span>
                              <span>Fee: ${listing.agreement_fee}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  user.role === "TENANT" &&
                  /* Renter grid of listings */
                  (() => {
                    const filteredRenterListings = listings.length > 0;
                    listings?.filter((listing) => {
                      const matchesSearch =
                        listing.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        listing.location
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        listing.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase());

                      const matchesMinPrice =
                        minPrice === "" ||
                        listing.monthly_rent >= Number(minPrice);
                      const matchesMaxPrice =
                        maxPrice === "" ||
                        listing.monthly_rent <= Number(maxPrice);

                      return (
                        matchesSearch && matchesMinPrice && matchesMaxPrice
                      );
                    });

                    const renterItemsPerPage = 4;
                    const totalRenterPages = Math.ceil(
                      filteredRenterListings?.length / renterItemsPerPage,
                    );
                    const startRenterIndex =
                      (currentRenterPage - 1) * renterItemsPerPage;
                    const paginatedRenterListings =
                      filteredRenterListings &&
                      filteredRenterListings?.slice(
                        startRenterIndex,
                        startRenterIndex + renterItemsPerPage,
                      );

                    if (paginatedRenterListings.length === 0) {
                      return (
                        <div className="text-center py-12 bg-white border border-border rounded-2xl p-8">
                          <p className="text-sm font-bold text-text-primary mb-1">
                            No dwellings found
                          </p>
                          <p className="text-text-secondary text-xs max-w-sm mx-auto">
                            We couldn&apos;t find any rentals matching your
                            criteria. Try adjusting your filters.
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {paginatedRenterListings &&
                            paginatedRenterListings?.map((listing) => (
                              <div
                                key={listing.id}
                                onClick={() => setSelectedApartment(listing)}
                                className="group bg-white border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col h-full"
                              >
                                <div className="relative aspect-video w-full overflow-hidden bg-background">
                                  <Image
                                    src={listing.uploaded_images?.[0] || ""}
                                    width={68}
                                    height={70}
                                    alt={listing.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src =
                                        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                                    }}
                                  />
                                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center shadow-xs">
                                    <span className="text-xs font-bold text-primary">
                                      ${listing.monthly_rent}
                                    </span>
                                    <span className="text-[10px] text-text-secondary font-medium">
                                      /mo
                                    </span>
                                  </div>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-accent/10 text-accent">
                                      {listing.apartment_type}
                                    </span>
                                    <span className="text-[9px] font-bold uppercase text-primary">
                                      {listing.bedrooms} Bed •{" "}
                                      {listing.bathrooms} Bath
                                    </span>
                                  </div>
                                  <h4 className="text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
                                    {listing.title}
                                  </h4>
                                  <p className="text-[11px] text-text-secondary line-clamp-2 mt-1 mb-3 flex-1">
                                    {listing.description ||
                                      "No description provided."}
                                  </p>
                                  <div className="border-t border-border/50 pt-2.5 flex items-center justify-between text-[11px] font-medium text-text-secondary">
                                    <span className="flex items-center gap-0.5">
                                      <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                                      <span className="truncate max-w-30">
                                        {listing.location}
                                      </span>
                                    </span>
                                    <span className="text-primary font-bold hover:underline">
                                      View Details →
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>

                        {/* Renter Pagination Controls */}
                        {totalRenterPages > 1 && (
                          <div className="flex justify-center items-center gap-2 border-t border-border pt-4 mt-6">
                            <button
                              onClick={() =>
                                setCurrentRenterPage(currentRenterPage - 1)
                              }
                              disabled={currentRenterPage === 1}
                              className="p-1.5 border border-border rounded-lg hover:bg-background text-text-secondary disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                            >
                              <ArrowLeft className="w-4 h-4" />
                            </button>
                            {Array.from(
                              { length: totalRenterPages },
                              (_, idx) => idx + 1,
                            ).map((page) => (
                              <button
                                key={page}
                                onClick={() => setCurrentRenterPage(page)}
                                className={`w-8 h-8 rounded-lg font-semibold text-xs transition-all cursor-pointer ${
                                  currentRenterPage === page
                                    ? "bg-primary text-white"
                                    : "border border-border hover:bg-background text-text-primary"
                                }`}
                              >
                                {page}
                              </button>
                            ))}
                            <button
                              onClick={() =>
                                setCurrentRenterPage(currentRenterPage + 1)
                              }
                              disabled={currentRenterPage === totalRenterPages}
                              className="p-1.5 border border-border rounded-lg hover:bg-background text-text-secondary disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })()
                )}
              </>
            )}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-black text-primary tracking-tight">
                Portal Settings
              </h1>
              <p className="text-text-secondary text-sm mt-1">
                Configure profile security levels and alerts.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 max-w-lg space-y-4">
              <div className="flex items-center gap-3">
                <Sliders className="w-5 h-5 text-secondary" />
                <span className="text-sm font-bold text-text-primary">
                  System Preferences
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Your portal preferences are synchronized. To alter BVN details
                or link a different bank branch, contact admin support services.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Apartment Form Modal */}
      {isModalOpen && <AddListingModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
