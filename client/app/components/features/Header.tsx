"use client";
import { NAV_LINKS } from "@/app/common/data";
import { useAuthStore } from "@/app/store/useAuthStore";
import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LinkBtn } from "../ui/Btn";
import { LightLogo } from "../ui/Logo";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuthStore();
  const activePage = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-on-primary border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          <LightLogo />

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  activePage === link.href
                    ? "text-primary"
                    : "text-on-secondary-container hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {!user && (
              <LinkBtn
                href="/auth/login"
                styling="flex items-center gap-1.5 px-4 py-2 text-primary hover:text-on-secondary-container font-bold text-xs rounded-xl transition-all cursor-pointer"
                icon={<LogIn className="w-4 h-4" />}
                text="Sign In"
              />
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border text-primary hover:bg-background transition-colors cursor-pointer"
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
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen((current) => !current)}
                    className={`px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      activePage === link.href
                        ? "text-primary bg-on-primary"
                        : "text-on-secondary-container hover:bg-on-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-border p-3 space-y-2">
                {!user && (
                  <LinkBtn
                    href="/auth/login"
                    onClick={() => setIsMobileMenuOpen((current) => !current)}
                    styling="w-full flex items-center justify-center gap-2 px-4 py-3 border border-border text-primary font-bold text-sm rounded-xl hover:bg-on-secondary-container transition-all cursor-pointer"
                    icon={<LogIn className="w-4 h-4" />}
                    text="Sign In"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
