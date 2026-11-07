import { create } from "zustand";

export interface Property {
  id: string;
  name: string;
  status: "active" | "vacant" | "maintenance" | "offer";
  statusLabel: string;
  statusColor: string;
  location: string;
  specs: string;
  price: number;
  image: string;
  imageAlt: string;
  primaryDetail: { icon: string; label: string };
  secondaryDetail: { icon: string; label: string };
  tenantName?: string;
  inquiriesCount?: number;
  ticketCount?: number;
}

export interface Applicant {
  id: string;
  initials: string;
  name: string;
  targetProperty: string;
  matchType: "Top Match" | "In Review";
  creditScore: number;
  stat2Label: string;
  stat2Value: string;
  stat3Label: string;
  stat3Value: string;
  employer: string;
}

interface DashboardState {
  propertyFilter: "all" | "vacant";
  properties: Property[];
  applicants: Applicant[];
  setPropertyFilter: (filter: "all" | "vacant") => void;
  removeApplicant: (id: string) => void;
}

const initialProperties: Property[] = [
  {
    id: "prop-1",
    name: "The Evergreen Residences #4B",
    status: "active",
    statusLabel: "Active • Paid",
    statusColor:
      "bg-surface-container-low text-on-tertiary-container font-semibold",
    location: "Pearl District, Portland, OR",
    specs: "2 Bed, 2 Bath • 1,120 sq ft",
    price: 2400,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByuXDo8mLdHpBSnwFXQBP9Bl8I5HKMXCI5-WP_jG6JtrGkxrfFx6bn9nfaubPcNcCWpnQr_gqYqtJT9K530IlXhJ0Hd9Ghsu57D4XuKgJJdVqabZXXzTXcJy_9DGJUMGsUMex8UNrDGDnEeEp5NlovuICLLoMao2zAamcC8nX9a1YP10VB9WCS1Eep0AaxRWG2eHBDstDJ6XD-evQvQFiJ5qJE3nUKYZsTV5DiZGa-",
    imageAlt:
      "Modern luxury condominium exterior with clean timber siding in Portland.",
    primaryDetail: { icon: "user", label: "Tenant: Alex Chen" },
    secondaryDetail: { icon: "calendar", label: "Lease ends Nov 2025" },
    tenantName: "Alex Chen",
  },
  {
    id: "prop-2",
    name: "Cascadia Loft #12",
    status: "vacant",
    statusLabel: "Vacant • 6 Inquiries",
    statusColor: "bg-secondary-fixed text-on-secondary-fixed font-semibold",
    location: "South Lake Union, Seattle, WA",
    specs: "1 Bed, 1.5 Bath • 940 sq ft",
    price: 3150,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBojjsKc6ouBUQzScV2OUgPOOTbYab2TNcMSnWq5ki-GcUS8Fq2bhVxYilX64Bggw05j217SopTqzcKTxEiFrJEmrQPt8OHQuaJLFzsW9afyFDSX6SaFAbTjepwEnvj6KA1NQdBKhgClTQu_PdIG6vg6efhDuoZ6wqHoe_RQVuXt5lFkih5vatsF2KVUuW7XIW0k--9ToxFVPQdclBNz9Os1v6TvvLKxGAS5OHJzKu2",
    imageAlt:
      "High-ceiling modern industrial loft apartment with double-height windows.",
    primaryDetail: { icon: "eye", label: "24 views today" },
    secondaryDetail: { icon: "bellRing", label: "High Demand Area" },
    inquiriesCount: 6,
  },
  {
    id: "prop-3",
    name: "Sunlit Pearl Townhouse",
    status: "maintenance",
    statusLabel: "Maintenance Open",
    statusColor: "bg-error-container text-on-error-container font-semibold",
    location: "Alphabet District, Portland, OR",
    specs: "3 Bed, 2.5 Bath • 1,650 sq ft",
    price: 2800,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAH3XFYbAljbj4hkXLvpHGRmmljbbZf_yzsCMvykPNBfQOB3ez5-BkSebzfwsNMMXGhmFtulc5Np6UzXfRKHDzqNxU7UCvAlioTelxcnQldbIIMKvd0C9-T3YxgGqYiFl4r3shrWgNkJtS_P-fn_mAOWu7UqJBlvCdrIQ-V8StsLTCnjPEPik9hGFJGa2Tc_POZqmmnbc2JwNkcC_i7rP-jPgE8QPm1Pkv14BrKbZRP",
    imageAlt:
      "Scandinavian-inspired contemporary townhouse facade in upscale neighborhood.",
    primaryDetail: { icon: "user", label: "Tenant: Marcus Vance" },
    secondaryDetail: { icon: "wrench", label: "Water pressure valve review" },
    tenantName: "Marcus Vance",
    ticketCount: 1,
  },
  {
    id: "prop-4",
    name: "Highland Park Flat 2A",
    status: "offer",
    statusLabel: "Under Offer",
    statusColor:
      "bg-surface-container-high text-on-surface-variant font-semibold",
    location: "Capitol Hill, Seattle, WA",
    specs: "1 Bed, 1 Bath • 620 sq ft",
    price: 1500,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxgDOVl3IUQfqAsTsk4qnWztk6pzQHi3pV0tKZJxLN1l0s-W8RBZEHQRzjBn0H5HEma_u4SdPSvs8S94z9pwf837152-l_2sYaVqmGD93Htd4Haz-KZqc6nxRTRiRIRgAwF7FFf1jEnT9M1WG5EQ8wghGba_BECXnMDlgBTudmdbQky6HIbnidE1SOM8aeL4mKpdRYb3NelltpeMRvPLhcWT3kDlkcg2MPR6IUX274",
    imageAlt:
      "Interior shot of bright studio apartment with minimalist white kitchen.",
    primaryDetail: { icon: "hourglass", label: "Background check cleared" },
    secondaryDetail: { icon: "penTool", label: "Awaiting signature" },
  },
];

const initialApplicants: Applicant[] = [
  {
    id: "app-1",
    initials: "ER",
    name: "Elena Rostova",
    targetProperty: "Cascadia Loft #12",
    matchType: "Top Match",
    creditScore: 780,
    stat2Label: "Income Ratio",
    stat2Value: "3.8x",
    stat3Label: "Move-In",
    stat3Value: "Oct 1",
    employer: "Senior Architect at NBBJ",
  },
  {
    id: "app-2",
    initials: "DK",
    name: "David Kim",
    targetProperty: "Cascadia Loft #12",
    matchType: "In Review",
    creditScore: 745,
    stat2Label: "Background",
    stat2Value: "Clear",
    stat3Label: "Pets",
    stat3Value: "None",
    employer: "Staff Engineer, AWS",
  },
];

export const useDashboardStore = create<DashboardState>((set) => ({
  propertyFilter: "all",
  properties: initialProperties,
  applicants: initialApplicants,
  setPropertyFilter: (filter) => set({ propertyFilter: filter }),
  removeApplicant: (id) =>
    set((state) => ({
      applicants: state.applicants.filter((a) => a.id !== id),
    })),
}));
