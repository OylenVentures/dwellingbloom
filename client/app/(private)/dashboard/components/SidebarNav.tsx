"use client";
import { SIDEBAR_LINKS } from "@/app/common/data";
import { LightLogo } from "@/app/components/ui/Logo";
import {
  LayoutGrid,
  Building2,
  FileText,
  Wallet,
  Wrench,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const icons = {
  layoutgrid: LayoutGrid,
  building2: Building2,
  filetext: FileText,
  wallet: Wallet,
  wrench: Wrench,
  messagesquare: MessageSquare,
};

export const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest z-50 flex flex-col py-space-md shadow-[0_1px_8px_rgba(30,58,95,0.06)]">
      <div className="px-space-md flex items-center gap-space-sm mb-space-lg">
        <LightLogo />
      </div>

      <nav className="flex-1 px-space-sm flex flex-col gap-space-xs">
        {SIDEBAR_LINKS.map((link) => {
          const Icon = icons[link.icon as keyof typeof icons];
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-space-sm px-space-md py-space-sm transition-colors font-label-lg text-label-lg rounded-lg ${pathname === link.href ? "bg-primary-container text-on-primary" : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"}`}
            >
              <Icon className="w-5 h-5" />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="mx-space-md mt-space-md p-space-sm rounded-lg bg-surface-container flex flex-col gap-space-sm">
        <p className="font-label-md text-label-md text-on-surface truncate">
          Portfolio Admin
        </p>
        <p className="font-label-caps text-label-caps text-secondary truncate">
          Premium Host
        </p>
      </div>
    </aside>
  );
};
