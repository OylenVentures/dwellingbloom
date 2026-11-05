import { BadgeCheck, Globe, Lock, Mail, Radio } from "lucide-react";
import Link from "next/link";
import { LightLogo } from "../ui/Logo";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl">
      <div className="max-w-360 mx-auto px-gutter-lg py-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-lg pb-margin">
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <LightLogo />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Architectural clarity and refined living for discerning homeowners
              and modern residents. Surgical fintech trust meets bespoke
              property monograph curation.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              <span className="font-bold text-primary">DwellingBloom</span> is
              operated by{" "}
              <span className="font-bold text-on-tertiary-container">
                Oylen Ventures
              </span>{" "}
              | RC No. 9775081.
            </p>
            <div className="flex items-center gap-space-md pt-space-xs">
              <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest rounded-full text-secondary font-label-caps text-label-caps shadow-[0_1px_3px_0_rgba(30,58,95,0.04)]">
                <BadgeCheck className="w-4 h-4 text-on-tertiary-container" />
                Verified Portfolio
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest rounded-full text-secondary font-label-caps text-label-caps shadow-[0_1px_3px_0_rgba(30,58,95,0.04)]">
                <Lock className="w-4 h-4 text-on-tertiary-container" />
                Bank-Grade Escrow
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              Company
            </h4>
            <Link
              href="/about"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/press"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Monographs &amp; Press
            </Link>
            <Link
              href="/contact"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Contact Relations
            </Link>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              Guides &amp; Resources
            </h4>
            <Link
              href="/tenant-guide"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Tenant Handbook
            </Link>
            <Link
              href="/landlord-guide"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Homeowner Guide
            </Link>
            <Link
              href="/leasing"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Digital Leasing Hub
            </Link>
            <Link
              href="/insurance"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Coverage &amp; Assurances
            </Link>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              Legal &amp; Privacy
            </h4>
            <Link
              href="/terms"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/fair-housing"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Fair Housing Act
            </Link>
            <Link
              href="/security"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Security Protocol
            </Link>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © {year} DwellingBloom Technologies Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-space-md">
            <Link
              aria-label="Global Network"
              href="#"
              className="p-space-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
            </Link>
            <Link
              aria-label="Direct Inquiries"
              href="#"
              className="p-space-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <Link
              aria-label="Broadcast"
              href="#"
              className="p-space-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              <Radio className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <footer className="bg-white border-t border-border mt-auto py-8">
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
          &copy; {year} DwellingBloom. All rights reserved. Direct rent
          connections.
        </p>
      </div>
    </footer> */
}
