import { create } from "zustand";

export interface Message {
  id: string;
  sender: "Sarah Jenkins" | "You (Elena)";
  text: string;
  timestamp: string;
}

interface InquiriesState {
  activeTab: string;
  messages: Message[];
  isTourAccepted: boolean;
  setActiveTab: (tab: string) => void;
  sendMessage: (text: string) => void;
  acceptTour: () => void;
}

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "Sarah Jenkins",
    text: "Hi Elena! Thank you for your interest in Cascadia Loft #12. I saw your application profile and credit verification. Would you like to schedule an in-person or virtual walkthrough?",
    timestamp: "10:14 AM",
  },
  {
    id: "2",
    sender: "You (Elena)",
    text: "Good morning Sarah! Yes, I love the natural light and open layout. Is the balcony pet-friendly for a small golden retriever?",
    timestamp: "10:18 AM",
  },
  {
    id: "3",
    sender: "Sarah Jenkins",
    text: "Absolutely! The building has a dedicated rooftop pet run and dog wash station as well. We'd love to have you. I have an opening tomorrow at 3:30 PM if that works for you.",
    timestamp: "10:21 AM",
  },
  {
    id: "4",
    sender: "You (Elena)",
    text: "Tomorrow at 3:30 PM works perfectly. Should I bring the deposit receipt or submit it right through DwellingBloom?",
    timestamp: "10:24 AM",
  },
  {
    id: "5",
    sender: "Sarah Jenkins",
    text: "You can complete all deposit holding right in the DwellingBloom secure escrow tab whenever you're ready! Looking forward to meeting you.",
    timestamp: "10:26 AM",
  },
];

export const useInquiriesStore = create<InquiriesState>((set) => ({
  activeTab: "journey",
  messages: initialMessages,
  isTourAccepted: false,
  setActiveTab: (tab) => set({ activeTab: tab }),
  sendMessage: (text) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: String(Date.now()),
          sender: "You (Elena)",
          text,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ],
    })),
  acceptTour: () => set({ isTourAccepted: true }),
}));
