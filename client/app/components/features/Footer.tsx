import { Home } from "lucide-react";

const year = new Date().getFullYear();

function Footer() {
  return (
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
          &copy; {year} DwellingBloom. All rights reserved. Direct rent
          connections.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
