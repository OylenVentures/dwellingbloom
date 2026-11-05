export interface AuthPageProps {
  mode?: "login" | "register";
}

export interface SearchFilters {
  location: string;
  dwellingType: string;
  maxBudget: number;
  beds: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  role: "owner" | "renter";
  text: string;
  timestamp: string;
}

export interface ExploreFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  propertyTypes: string[];
  beds: string;
  baths: string;
  leaseTerm: string;
  amenities: string[];
  verifiedOnly: boolean;
  sortBy: string;
}
