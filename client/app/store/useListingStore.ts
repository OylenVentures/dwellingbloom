import { create } from "zustand";
import { ChatMessage, SearchFilters } from "../common/interface";

interface AppState {
  filters: SearchFilters;
  messages: ChatMessage[];
  setFilters: (filters: Partial<SearchFilters>) => void;
  addMessage: (msg: ChatMessage) => void;
}

export const useListingStore = create<AppState>((set) => ({
  filters: {
    location: "Ketu, Lagos",
    dwellingType: "Apartment",
    maxBudget: 750000,
    beds: "1",
  },
  messages: [
    {
      id: "1",
      sender: "Claire Russell",
      role: "owner",
      text: "Hello Maya, thanks for your note! Yes, well-trained dogs are welcome with no additional monthly pet rent.",
      timestamp: "10:42 AM",
    },
  ],
  setFilters: (newFilters) =>
    set((state) => ({ filters: { ...state.filters, ...newFilters } })),
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
}));
