import { create } from "zustand";
import {
  logout as logoutRequest,
  refreshToken as refreshTokenRequest,
  type AuthUser,
} from "../api/auth";

export type User = AuthUser;

interface AuthStore {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
  setUser: (
    user: User | null,
    accessToken?: string | null,
    refreshToken?: string | null,
  ) => void;
  logout: () => Promise<void>;
  refreshSession: () => Promise<{
    access_token: string;
    refresh_token: string;
  }>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
  setUser: (user, accessToken = null, refreshToken = null) => {
    set({ user, accessToken, refreshToken });
  },
  logout: async () => {
    try {
      await logoutRequest();
    } catch {
      // Ignore server logout errors and clear local state.
    }
    set({ user: null, accessToken: null, refreshToken: null });
  },
  refreshSession: async () => {
    const currentRefreshToken = useAuthStore.getState().refreshToken;

    if (!currentRefreshToken) {
      throw new Error("No refresh token available");
    }

    const data = await refreshTokenRequest({
      refresh: currentRefreshToken,
    });

    set({ accessToken: data.access_token, refreshToken: data.refresh_token });
    return data;
  },
}));
