import { Home } from "lucide-react";
import Link from "next/link";

export function LightLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-hidden"
    >
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-md shadow-primary/20">
        <Home className="w-5 h-5" />
      </div>
      <div>
        <span className="text-lg font-extrabold text-primary tracking-tight">
          Dwelling
        </span>
        <span className="text-lg font-extrabold text-on-tertiary-container tracking-tight">
          Bloom
        </span>
      </div>
    </Link>
  );
}

export function DarkLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-hidden"
    >
      <div className="w-10 h-10 rounded-xl bg-on-primary flex items-center justify-center text-primary shadow-md shadow-primary/20">
        <Home className="w-5 h-5" />
      </div>
      <div>
        <span className="text-lg font-extrabold text-on-primary tracking-tight">
          Dwelling
        </span>
        <span className="text-lg font-extrabold text-on-tertiary-container tracking-tight">
          Bloom
        </span>
      </div>
    </Link>
  );
}
