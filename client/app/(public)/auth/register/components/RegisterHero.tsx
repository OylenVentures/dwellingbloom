"use client";
import { LightLogo } from "@/app/components/ui/Logo";
import { CheckCircle2, ShieldCheck, Lock, Fingerprint } from "lucide-react";
import Image from "next/image";

export function RegisterHero() {
  return (
    <div className="lg:col-span-5 flex flex-col space-y-8 pt-4">
      {/* Brand Header */}
      <div className="flex flex-col space-y-3">
        <LightLogo />
        <span className="font-label-caps text-secondary tracking-widest uppercase">
          Architectural Living
        </span>
      </div>

      {/* Hero Headline & Intro */}
      <div className="flex flex-col space-y-4">
        <span className="inline-flex items-center gap-2 self-start py-1 px-3 rounded-full bg-surface-container text-secondary font-label-caps tracking-widest uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
          Unified Living Protocol
        </span>
        <h1 className="font-headline-xl text-primary leading-tight">
          Elevating modern leasing into an architectural art form.
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-md">
          Experience institutional-grade security, frictionless direct-owner
          communication, and curated residential spaces designed for longevity.
        </p>
      </div>

      {/* Featured Monograph Preview Card */}
      <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-xl bg-surface-container-low">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsUgD8LA-ZJMNB1HzIlofKchI5dAcgaZmufsQpUAFeiPh8qu2-LdRXCSksk7wAPLLG3erL6CznjKWbVOrbbaxYiUd0SOyKlRdXrwsO-VJlJHEfY2VyfAVttdCGJO5tueGvKyEhB850Nsk3QUDacSo6mmQvrwzc9bbjsA1gkJs8NVowOhKLQxJ9jkMLq5Vs_TgWKtgF8sbW-dOfjpUJ9JeKJO8rA4AQ-c57ho90879h"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          width={600}
          height={400}
          alt="Modern architectural living room"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
          <div className="flex items-center space-x-2 text-on-tertiary-container mb-1">
            <CheckCircle2 className="w-4 h-4 fill-current text-on-tertiary-container" />
            <span className="font-label-caps uppercase tracking-wider text-xs">
              Verified Portfolio
            </span>
          </div>
          <p className="font-headline-sm text-white">
            The Glasshouse Terraces, Suite 4B
          </p>
          <p className="font-body-sm text-surface-variant/90">
            Curated residential sanctuary • Verified leaseholder matching
          </p>
        </div>
      </div>

      {/* Security Trust Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm">
          <div className="flex items-center space-x-2 text-secondary mb-1">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-label-caps text-primary tracking-wider uppercase">
              256-Bit
            </span>
          </div>
          <span className="font-body-sm text-on-surface-variant leading-snug">
            Bank-level encryption standard
          </span>
        </div>
        <div className="flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm">
          <div className="flex items-center space-x-2 text-secondary mb-1">
            <Lock className="w-5 h-5" />
            <span className="font-label-caps text-primary tracking-wider uppercase">
              Zero Spam
            </span>
          </div>
          <span className="font-body-sm text-on-surface-variant leading-snug">
            Curated private network only
          </span>
        </div>
        <div className="flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm">
          <div className="flex items-center space-x-2 text-secondary mb-1">
            <Fingerprint className="w-5 h-5" />
            <span className="font-label-caps text-primary tracking-wider uppercase">
              ID Vetted
            </span>
          </div>
          <span className="font-body-sm text-on-surface-variant leading-snug">
            Multi-point identity checks
          </span>
        </div>
      </div>
    </div>
  );
}
