import { create } from "zustand";
import {
  createApartment,
  listApartments,
  type Apartment,
} from "../api/apartment";

export type Listing = Apartment;

interface RealEstateStore {
  listings: Listing[];
  page: number;
  page_size: number;
  search: string;
  isLoading: boolean;
  error: string | null;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
  fetchListings: (
    page?: number,
    page_size?: number,
    search?: string,
  ) => Promise<void>;
  addListing: (listing: FormData) => Promise<Listing | null>;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An error occurred";
}

export const useRealEstateStore = create<RealEstateStore>((set) => ({
  listings: [],
  page: 1,
  page_size: 18,
  search: "",
  isLoading: false,
  error: null,
  setPage: (page) => set({ page }),
  setSearch: (search) => set({ search }),
  fetchListings: async (page, page_size, search) => {
    set({ isLoading: true, error: null });
    try {
      const resp = await listApartments({ page, page_size, search });
      set({ listings: resp?.data, isLoading: false });
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
