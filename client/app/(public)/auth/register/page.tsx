"use client";

import { RegisterForm } from "./components/RegisterForm";
import { RegisterHero } from "./components/RegisterHero";

function Register() {
  return (
    <main className="w-full min-h-screen bg-surface flex items-center justify-center antialiased">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden bg-surface py-12 px-4 sm:px-6 lg:px-12 flex justify-center items-center">
          {/* Subtle Editorial Ambient Glow Backgrounds */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-linear-to-br from-secondary-fixed/40 to-transparent blur-3xl" />
            <div className="absolute top-1/2 -right-48 w-lg h-128 rounded-full bg-linear-to-bl from-tertiary-fixed-dim/20 via-primary-fixed/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-surface-container-high/60 blur-2xl" />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <RegisterHero />
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
