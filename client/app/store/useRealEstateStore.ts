import { create } from "zustand";
import {
  createApartment,
  listApartments,
  type Apartment,
} from "../api/apartment";

export type Listing = Apartment;

interface RealEstateStore {
  listings: Listing[];
  filters: string;
  isLoading: boolean;
  error: string | null;
  setFilters: (filters: string) => void;
  fetchListings: () => Promise<void>;
  addListing: (listing: FormData) => Promise<Listing | null>;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An error occurred";
}

export const useRealEstateStore = create<RealEstateStore>((set) => ({
  listings: [],
  filters: "",
  isLoading: false,
  error: null,
  setFilters: (newFilters) => set({ filters: newFilters }),
  fetchListings: async () => {
    set({ isLoading: true, error: null });
    try {
      const resp = await listApartments();
      set({ listings: resp.data, isLoading: false });
    } catch (error: unknown) {
      set({ error: getErrorMessage(error), isLoading: false });
    }
  },
  addListing: async (newListing) => {
    set({ isLoading: true, error: null });
    try {
      const created = await createApartment(newListing);
      set((state) => ({
        listings: [created, ...state.listings],
        isLoading: false,
      }));
      return created;
    } catch (error: unknown) {
      set({ error: getErrorMessage(error), isLoading: false });
      return null;
    }
  },
}));
