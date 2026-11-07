"use client";
import { ChevronDown, UserCircle } from "lucide-react";
import toast from "react-hot-toast";

export const HeaderNav = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-20 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(30,58,95,0.06)] z-40 flex items-center justify-end px-space-xl">
      <div className="flex items-center gap-space-md">
        <button
          type="button"
          onClick={() => toast.success("Navigating to Property Creation flow")}
          className="cursor-pointer inline-flex items-center px-space-md py-space-sm bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg transition-colors shadow-[0_1px_3px_0_rgba(30,58,95,0.04)]"
        >
          List Property
        </button>

        <div className="flex items-center gap-space-xs cursor-pointer">
          <UserCircle className="w-8 h-8 text-secondary" />
          <ChevronDown className="w-4 h-4 text-secondary" />
        </div>
      </div>
    </header>
  );
};
