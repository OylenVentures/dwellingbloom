"use client";
import { LoginForm } from "./components/LoginForm";
import { LoginHero } from "./components/LoginHero";

function LoginPage() {
  return (
    <main className="w-full min-h-screen bg-surface flex items-center justify-center antialiased">
      <div className="flex flex-col w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-190">
            <LoginHero />
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
