"use client";

import React from "react";
import { ExploreToolbar } from "@/components/explore/ExploreToolbar";
import { FilterSidebar } from "@/components/explore/FilterSidebar";
import {
  ListingCard,
  ListingCardProps,
} from "@/components/explore/ListingCard";
import { useExploreStore } from "@/store/useExploreStore";
import {
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

const listingsData: ListingCardProps[] = [
  {
    id: "1",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhdO6VBRNeLwlput6Ul5GVNs4DfZdzmC56yDj5x-zv9iHgnSMNEt6rB3PkCMRiy3e8SiNNLB4Tclwt5c-ibyRIOGhMxHdLtJvl5_wFSBJnKKiBlu10Owi6LPVIEwKcXt7mYsX--e1RI40IZYuKsFkE6bBJkEokOVRDq20u19UuPeiqIvIPxZcLaW0_H9Pcyp4YQmplv_n_FvBdI_cUzIZYbNd-vK8-rq3FIVyHsX7",
    badge: "New Listing",
    price: 2650,
    neighborhood: "Pearl District, Portland",
    title: "The Evergreen Residences – Unit 4B",
    address: "1138 NW 12th Avenue, Unit 4B, Portland, OR 97209",
    beds: 2,
    baths: "2.0",
    sqft: "1,140",
    amenityText: "Pets OK",
    ownerName: "Sarah Mitchell",
    ownerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpqCGkW50f6GoWsb9HACuKoCSO3AdZaGrL-mtl19p_xjLzIeatKUUqn96Ld0CqX2Zs7_FJwI1NiLfd0e4Fd8EErK1iOJSyPvawAAPUyddTjhI5TTRgLyeA-4BjapnCVVLRkrT91axPZlj7seD_E-iEvfOPzNgG-mcbCs2ysXPB7L2mVnqTwSjQfuoRf9BPZM-WaPzny-Y6ktXr3jIRQiFYMIg7rh_Vn2lPu6EVpH38",
    rating: 4.96,
    reviewsCount: 18,
    verifiedEscrow: true,
  },
  {
    id: "2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbLG3mVvAzDF_Hwqic_reqRlH4mdNCPu4qDLi2Dk62x7uF3ycur0jNd7QL8fEIW-WTYgXgV6Jh1myb4d5HOhwP5GkwL9d_pS9l9eYoYGEEuk2b2qLS11s2Q5e49yShwTQXrofYXIqkb3uW1r71TcrTel7yVFruGoV0tDeVZwVU_grEj2GedQ67gL4DtvN7EGnF0k2zI28W5RO2pZJqwH5mG91OaoU1EHBgj5ydgI3G",
    badge: "Verified Exclusive",
    price: 3200,
    neighborhood: "Downtown Central, Portland",
    title: "Sunlit Pearl Loft with Private Terrace",
    address: "820 NW Davis Street, Unit 702, Portland, OR 97209",
    beds: "1 / Loft",
    baths: "1.5",
    sqft: "980",
    amenityText: "Terrace",
    ownerName: "Julian Vance",
    ownerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJYKhQTW4EpSVv89aSx0kGhfvu4WbpEgBsxC0HkNvdryhUZxYE0igJR90sqpsXy_bL4UIT7AwAMUdB8E4ae7cDvYI5EgiKIjzoH7VuElCNZABmXlgDbNLpozeYFXsB5VwOq3xahu2Lqbf_HEkIVkMziyBp8Z_rNEM0FmKVB92pRE1nxxr-nbbNOEd7X9iWedRMzcSCRVHg01S3v7RU2EOthrGN2TnDjDXD-X4Rtsw4",
    rating: 5.0,
    reviewsCount: 32,
    verifiedEscrow: false,
  },
  {
    id: "3",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBap1VRPKEb9KKKKFns2ihFjubyJ2W-QemxN2pZgwYvJTViLHiRn4v3_MDOnNhfRvHPPKJgTfCABSLDPepfJ-iZp7598Qhh11ZluqXxVmvl0H0ANtFZuvVESZA_WVsglMey9klfmorFUz5ugeGVIZ4C07diBDtSROI09I6hxRIK_WZ6N96qbUOBFaeg0HqVJfH_eEwxlJgIeo9vlNMn-JprMcWMLnak4-HaqZxKSp8j",
    badge: "EV Charging",
    price: 2950,
    neighborhood: "Nob Hill, Portland",
    title: "Cascadia Modern 2-Bedroom Condo",
    address: "2144 NW Kearney Street, Portland, OR 97210",
    beds: 2,
    baths: "2.0",
    sqft: "1,280",
    amenityText: "Garage",
    ownerName: "Marcus Thorne",
    ownerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCB2m8Cxy3RiuHZx2T2xC99RGoxDQOxXg8bQu-YoBlw7ZtQJ1WofaGI5SURbtIExexGW9t-xhDNvIIzrZ1cFfg70T4Yp2TrL_9pruuIL5u2R1QshAU6rX8knFwspHyNGMx7BiBGHJGsjobPGXJRm626Qc84K1lT0crcCvU0DfVIJgaNxQNTUi0ZSDsNTskzY8vVrzCggkseoFr7sX5yCIYOYx67q0Y3UDGCdaUexBF1",
    rating: 4.88,
    reviewsCount: 9,
    verifiedEscrow: true,
  },
  {
    id: "4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeZ1cCoJKq0tHnK5YBShqq3CNXFwi2t9hlLikMgritE2OgtZAE1aJMSW3KFbMuEXueWMpPCf6pJgMdQ1VPQxld_L_kOB-il8P8H9cpmqEFqhIiZxesj_qw_or7O-llXl2YYTUYlDvcUuZj8Y6dteVs3JCgrKWmy7hR7_xfR_TpsqIlLKKc0d9ElLWq82PXjUdQ8lN2jEQCfYh0PivOJ-W4W16KrWyXR1I-_faGKGnK",
    badge: "Garden Unit",
    price: 3450,
    neighborhood: "Irvington Heritage, Portland",
    title: "Maple Leaf Garden Townhome",
    address: "1840 NE 16th Avenue, Portland, OR 97212",
    beds: 3,
    baths: "2.5",
    sqft: "1,620",
    amenityText: "Dogs Ok",
    ownerName: "Elena Rostova",
    ownerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_V6xhLovkvGPTzCCqVtAGUhay7BLfwFK1fTGl5OOj4fEePjLsMf7YCuczqANVj05C7z3avkdg5WWTMmZ-i_iVpadk1kh2999F-uuColAXVgmzntCuNJq7kqXa0aIztlmm5qzQ4rrugpc1bO84RqUOV2blvS8Too96B019ac5nYF_LyXsuRXhy-nSjyeyubu21Yy7LmxlFLLRsEp9bkP2TXlq4Ft1fEZkC6T8FPZsI",
    rating: 4.94,
    reviewsCount: 44,
    verifiedEscrow: true,
  },
  {
    id: "5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3to3kEUNX9CBOO0rssZA_LP4VIlw_AJ5KY9aMExqLxxAVyTjuA1iohhtEOb85HNEInbCbFG3GtRzP4QiVSf7Qo2VvC-9tTqjarSiOXLDjf_K5dFMVgkxuMdepA3Y8SPwk5Nw7r2Q9eatjgG4ygW8ueV77lsamcnDAF_H4Mn194Edaty_zvX0UG6j2i7Jcn-vJHQ5HGUzcHZQmMyCns2H0ly6qlAYKBppYC2qr9MSg",
    badge: "Skyline View",
    price: 3150,
    neighborhood: "South Waterfront, Portland",
    title: "Highland Park Skyline Flat",
    address: "3470 S River Parkway, Unit 19B, Portland, OR 97239",
    beds: 2,
    baths: "2.0",
    sqft: "1,180",
    amenityText: "Central AC",
    ownerName: "David Chen",
    ownerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkXcwB-0_inW93_Xdc2VoeJ3XyHV9mxJYP-Ede-A7I-7A6xclrxi5PcB4YRdlxuifykKOsER1x9SF795Y414CoykZe1dO4xDg3loShM6rcF49LmRZ0iomc4VOFb9p_wvFjH8giKlmNCArhjHP_D5ig2pSWOD6DH6X3aYdv-T8JjHx9VRWo8T2djXGnSgFh8iiL4_5H3mzjojgbF33jilnSn_7WfhwGtx7Kh7E5bsIZ",
    rating: 4.91,
    reviewsCount: 21,
    verifiedEscrow: true,
  },
  {
    id: "6",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD7SqGdl5d7IVU6KJ5e60-h-wbGhQfqwJseQm3MCUPV4ogR1-VHInnWFHbNvwZDXIu_Y7hK2r9KJrXJfI1xVt1om-vBmnuZl2nuoH9gP3KJUFc6W5YZ0dfZ2nVFD83VOASUpOVhZf8YvFwWkIQ4YTDmZAKJk7-V0qTvFyrlsct1vVZT17KV5oyuWJKvM-j5ETbl0hDK6gyKOQsuyu4Rf99zKK3Sp9ZsIRMVGK0_d5q",
    badge: "Quiet Haven",
    price: 2250,
    neighborhood: "Eastmoreland Greenbelt, Portland",
    title: "Beacon Hill Quiet Garden Suite",
    address: "2902 SE Tolman Street, Portland, OR 97202",
    beds: 2,
    baths: "1.0",
    sqft: "920",
    amenityText: "W/D In-Unit",
    ownerName: "Miriam Al-Mansoor",
    ownerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2t7W4m-1XY-yEWjl93qQaSi9BpYAwYfr7AeY83uwmZf0wqn96siV-r21yO3fK_TMl8q5mPBgQFK7naCiHK-Wudc3sstnoTN5ZxnKKfGnbD_YxDwXtaAirOx0YnTNOjRqkcbnEInWtZ-HHJikGqHgMCDPoW3Zd-pBPlWlj2lLX_YtChyrUGrNag8SHm1Llckcdu8d5y7hyBuBTXRnQQz6ejPZbL7DL-yFiSqIPr-2P",
    rating: 4.98,
    reviewsCount: 52,
    verifiedEscrow: true,
  },
];

export default function ExplorePage() {
  const { viewMode } = useExploreStore();

  return (
    <div className="w-full max-w-360 mx-auto px-gutter-lg py-margin">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
        <div className="space-y-space-xs max-w-2xl">
          <div className="flex items-center gap-space-sm text-secondary font-label-caps text-label-caps uppercase tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
            <span>Curated Metropolitan Monograph</span>
            <span className="text-outline-variant">/</span>
            <span>Pacific Northwest Directory</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-normal">
            Explore Available Homes &amp; Apartments
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant flex items-center gap-space-sm pt-space-xs">
            <span className="font-numeric-data text-numeric-data text-primary font-bold px-2 py-0.5 bg-surface-container-high rounded-full">
              142
            </span>
            <span>
              verified properties indexed across your selected search perimeter
            </span>
          </p>
        </div>

        {/* Quick Context Stat Strip */}
        <div className="flex items-center gap-space-lg bg-surface-container-lowest p-space-md rounded-xl shadow-sm self-start lg:self-auto">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary uppercase">
              Median Rent
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-medium">
              $2,480
              <span className="text-body-sm font-normal text-on-surface-variant">
                /mo
              </span>
            </span>
          </div>
          <div className="h-8 w-px bg-surface-container-highest" />
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary uppercase">
              Average Lease Speed
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-medium">
              4.2{" "}
              <span className="text-body-sm font-normal text-on-surface-variant">
                days
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Segmented Top Filter Bar */}
      <ExploreToolbar />

      {/* Main Two-Column Architectural Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
        {/* LEFT SIDEBAR */}
        <FilterSidebar />

        {/* RIGHT CONTENT: Property Grid & Results Stream */}
        <section className="lg:col-span-8 xl:col-span-9 space-y-space-lg">
          {/* Active Filter Chips Row */}
          <div className="flex flex-wrap items-center gap-space-xs bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
            <span className="font-label-caps text-label-caps text-secondary uppercase mr-2">
              Active Criteria:
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low text-primary rounded-full font-label-md text-label-md">
              <span>$800 – $3,500/mo</span>
              <button
                type="button"
                onClick={() => toast("Filter removed")}
                className="hover:text-error transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low text-primary rounded-full font-label-md text-label-md">
              <span>Pet Friendly</span>
              <button
                type="button"
                onClick={() => toast("Filter removed")}
                className="hover:text-error transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low text-primary rounded-full font-label-md text-label-md">
              <span>2+ Beds</span>
              <button
                type="button"
                onClick={() => toast("Filter removed")}
                className="hover:text-error transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
            <button
              type="button"
              onClick={() => toast("All active filters cleared")}
              className="ml-auto font-label-caps text-label-caps text-secondary hover:text-error uppercase tracking-wider transition-colors px-2 py-1"
            >
              Clear all
            </button>
          </div>

          {/* Map Split View Panel (Toggled) */}
          {viewMode === "map" && (
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-headline-sm text-headline-sm text-primary">
                    Geospatial Distribution
                  </span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary">
                  6 Selected in Active Viewport
                </span>
              </div>
              <div className="w-full h-80 rounded-lg bg-surface-container flex items-end p-4 relative">
                <div className="bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg shadow-md max-w-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-on-tertiary-container" />
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Centering around Portland Pearl District. Click pins to
                    reveal monograph specifications.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Property Monograph Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {listingsData.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>

          {/* Pagination & Density Counter */}
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
            <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
              <span>Showing</span>
              <span className="font-numeric-data text-numeric-data text-primary font-bold">
                1 – 6
              </span>
              <span>of 142 total verified properties</span>
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
                className="w-9 h-9 rounded-lg bg-primary text-on-primary font-numeric-data text-numeric-data font-semibold"
                type="button"
              >
                1
              </button>
              <button
                className="w-9 h-9 rounded-lg hover:bg-surface-container-high text-primary font-numeric-data transition-colors"
                type="button"
              >
                2
              </button>
              <button
                className="w-9 h-9 rounded-lg hover:bg-surface-container-high text-primary font-numeric-data transition-colors"
                type="button"
              >
                3
              </button>
              <span className="px-1 text-secondary font-numeric-data">…</span>
              <button
                className="w-9 h-9 rounded-lg hover:bg-surface-container-high text-primary font-numeric-data transition-colors"
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
            <button
              type="button"
              onClick={() => toast.success("Loaded next 12 properties")}
              className="inline-flex items-center gap-space-xs px-space-md py-2 bg-surface-container-low hover:bg-surface-container text-primary font-label-lg text-label-md rounded-lg transition-colors"
            >
              <span>Load Next 12</span>
              <Expand className="w-4 h-4" />
            </button>
          </div>

          {/* Reassurance Fintech & Escrow Anchor Card */}
          <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center text-tertiary-fixed shrink-0">
                <ShieldCheck className="w-6 h-6 text-tertiary-fixed" />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-medium">
                  DwellingBloom Resident Assurance
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Deposits and holding bonds are held in regulated
                  FINRA-compliant trust accounts until lease signature and
                  digital walk-through confirmation.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                toast.success("Opened Resident Assurance Protocol")
              }
              className="whitespace-nowrap px-space-md py-2.5 bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-lg text-label-sm rounded-lg shadow-sm transition-colors"
            >
              Review Protocol
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
