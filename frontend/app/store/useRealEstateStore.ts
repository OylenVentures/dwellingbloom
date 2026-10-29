"use client";

import { create } from "zustand";
import {
  createApartment,
  listApartments,
  type Apartment,
} from "../api/apartment";

export type Listing = Apartment;

interface RealEstateStore {
  listings: Listing[];
  loading: boolean;
  error: string | null;
  fetchListings: () => Promise<void>;
  addListing: (listing: FormData) => Promise<Listing | null>;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An error occurred";
}

export const useRealEstateStore = create<RealEstateStore>((set) => ({
  listings: [],
  loading: false,
  error: null,
  fetchListings: async () => {
    set({ loading: true, error: null });
    try {
      const resp = await listApartments();
      set({ listings: resp.data, loading: false });
    } catch (error: unknown) {
      set({ error: getErrorMessage(error), loading: false });
    }
  },
  addListing: async (newListing) => {
    set({ loading: true, error: null });
    try {
      const created = await createApartment(newListing);
      set((state) => ({
        listings: [created, ...state.listings],
        loading: false,
      }));
      return created;
    } catch (error: unknown) {
      set({ error: getErrorMessage(error), loading: false });
      return null;
    }
  },
}));
