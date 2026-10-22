"use client";

import { useEffect, useState } from "react";
import { useRealEstateStore } from "./store/useRealEstateStore";
import { useAuthStore } from "./store/useAuthStore";
import HomePage from "./components/HomePage";
import ListingsPage from "./components/ListingsPage";
import AuthPage from "./components/AuthPage";
import VerifyEmailPage from "./components/VerifyEmailPage";
import PasswordResetPage from "./components/PasswordResetPage";
import Dashboard from "./components/Dashboard";
import toast, { Toaster } from "react-hot-toast";
import { Home, LogIn, Menu, X } from "lucide-react";

export default function App() {
  const { listings, loading, fetchListings } = useRealEstateStore();
  const { user, refreshToken, setUser, refreshSession } = useAuthStore();

  // Navigation states: 'home' | 'listings' | 'login' | 'register' | 'verify' | 'forgot' | 'dashboard'
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "listings"
    | "login"
    | "register"
    | "verify"
    | "forgot"
    | "dashboard"
  >("home");
  const [verifyEmailAddress, setVerifyEmailAddress] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activePage:
    | "home"
    | "listings"
    | "login"
    | "register"
    | "verify"
    | "forgot"
    | "dashboard" = user ? (user.id ? "dashboard" : "verify") : currentPage;
  const showGlobalChrome = activePage !== "dashboard";

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  // Periodic refresh token simulation
  useEffect(() => {
    if (!refreshToken) return;

    const interval = setInterval(
      async () => {
        try {
          const data = await refreshSession();
          if (user) {
            localStorage.setItem("token", data.access_token);
            setUser(user, data.access_token, data.refresh_token);
          }
        } catch (error: unknown) {
          console.log(error);
          toast.error(
            error instanceof Error
              ? error.message
              : "Session refresh failed. Please log in again.",
          );
        }
      },
      5 * 60 * 1000,
    ); // refresh every 5 minutes

    return () => clearInterval(interval);
  }, [refreshToken, user, setUser, refreshSession]);

  // View router helper
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <HomePage
            featuredListings={listings}
            onNavigateToListings={() => setCurrentPage("listings")}
            onNavigateToLogin={() => setCurrentPage("login")}
            onNavigateToRegister={() => setCurrentPage("register")}
          />
        );
      case "listings":
        return (
          <ListingsPage
            listings={listings}
            loading={loading}
            onNavigateHome={() => setCurrentPage("home")}
          />
        );
      case "login":
        return (
          <AuthPage
            mode="login"
            onNavigateToLogin={() => setCurrentPage("login")}
            onNavigateToRegister={() => setCurrentPage("register")}
            onNavigateToDashboard={() => setCurrentPage("dashboard")}
            onNavigateToForgot={() => setCurrentPage("forgot")}
            onNavigateToVerify={(email) => {
              setVerifyEmailAddress(email);
              setCurrentPage("verify");
            }}
          />
        );
      case "register":
        return (
          <AuthPage
            mode="register"
            onNavigateToLogin={() => setCurrentPage("login")}
            onNavigateToRegister={() => setCurrentPage("register")}
            onNavigateToDashboard={() => setCurrentPage("dashboard")}
            onNavigateToForgot={() => setCurrentPage("forgot")}
            onNavigateToVerify={(email) => {
              setVerifyEmailAddress(email);
              setCurrentPage("verify");
            }}
          />
        );
      case "verify":
        return (
          <VerifyEmailPage
            email={verifyEmailAddress}
            onVerificationSuccess={() => setCurrentPage("dashboard")}
          />
        );
      case "forgot":
        return (
          <PasswordResetPage onBackToLogin={() => setCurrentPage("login")} />
        );
      case "dashboard":
        return <Dashboard />;
      default:
        return (
          <HomePage
            featuredListings={listings}
            onNavigateToListings={() => setCurrentPage("listings")}
            onNavigateToLogin={() => setCurrentPage("login")}
            onNavigateToRegister={() => setCurrentPage("register")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Global Header Navigation */}
      {showGlobalChrome && (
        <header className="sticky top-0 z-40 bg-white border-b border-border shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between gap-3">
              {/* Logo */}
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-primary tracking-tight">
                    Dwelling
                  </span>
                  <span className="text-lg font-extrabold text-accent tracking-tight">
                    Bloom
                  </span>
                </div>
              </button>

              {/* Desktop nav menu links */}
              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => {
                    setCurrentPage("home");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${
                    activePage === "home"
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setCurrentPage("listings");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${
                    activePage === "listings"
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  All Dwellings
                </button>
              </nav>

              {/* Desktop action buttons */}
              <div className="hidden md:flex items-center gap-3">
                {!user && (
                  <>
                    <button
                      onClick={() => setCurrentPage("login")}
                      className="flex items-center gap-1.5 px-4 py-2 text-text-primary hover:text-primary font-bold text-xs rounded-xl transition-all cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Sign In</span>
                    </button>
                    <button
                      onClick={() => setCurrentPage("register")}
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      <span>Get Started</span>
                    </button>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border text-text-primary hover:bg-background transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="md:hidden pb-4">
                <div className="rounded-2xl border border-border bg-white shadow-lg shadow-primary/5 overflow-hidden">
                  <nav className="flex flex-col py-2">
                    <button
                      onClick={() => {
                        setCurrentPage("home");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        activePage === "home"
                          ? "text-primary bg-background"
                          : "text-text-primary hover:bg-background"
                      }`}
                    >
                      Home
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage("listings");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        activePage === "listings"
                          ? "text-primary bg-background"
                          : "text-text-primary hover:bg-background"
                      }`}
                    >
                      All Dwellings
                    </button>
                  </nav>

                  <div className="border-t border-border p-3 space-y-2">
                    {!user && (
                      <>
                        <button
                          onClick={() => {
                            setCurrentPage("login");
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-border text-text-primary font-bold text-sm rounded-xl hover:bg-background transition-all cursor-pointer"
                        >
                          <LogIn className="w-4 h-4" />
                          <span>Sign In</span>
                        </button>
                        <button
                          onClick={() => {
                            setCurrentPage("register");
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-secondary text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                          <span>Get Started</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      )}

      {/* Dynamic View Mount */}
      {renderPage()}

      {/* Global Footer */}
      {showGlobalChrome && (
        <footer className="bg-white border-t border-border mt-auto py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Home className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-primary text-sm">
                DwellingBloom
              </span>
            </div>
            <p className="text-text-secondary text-xs">
              &copy; {new Date().getFullYear()} DwellingBloom. All rights
              reserved. Direct rent connections.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
