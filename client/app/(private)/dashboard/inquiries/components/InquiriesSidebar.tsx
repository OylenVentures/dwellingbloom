"use client";
import {
  LayoutGrid,
  Building2,
  FileText,
  Wallet,
  Wrench,
  MessageSquare,
  MoreVertical,
} from "lucide-react";
import Image from "next/image";

export const InquiriesSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest z-50 flex flex-col py-space-md shadow-[0_1px_8px_rgba(30,58,95,0.06)]">
      <div className="px-space-md flex items-center gap-space-sm mb-space-lg">
        <Image
          src="https://lh3.googleusercontent.com/aida/AEtjO1VANKWmDts0TmEDswGYNwziiJrv1uVEnPxcSgQ5f8vqAQh51-dUXksWa0UTuPw6njJ2QbFNi8YLJn8chwnqwvSbdDT5D9BBWnSf1l1eAzdHxTCJ3tQR_S16Dcalbu0BLU_DGT5aXyS71vyQnrqBgOIDXNYqZK076Zv50MINfSMEsResQoqFyFnjsyh8-dyF1g7-P6lGz6lLx79-NoKvqgVZno1tmTji0_PZnP8JqEUATA"
          width={32}
          height={32}
          className="h-7 w-auto object-contain"
          alt="DwellingBloom Logo"
        />
        <span className="font-headline-md text-headline-md text-primary">
          DwellingBloom
        </span>
      </div>
      <nav className="flex-1 px-space-sm flex flex-col gap-space-xs">
        <a
          href="#"
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-lg text-label-lg"
        >
          <LayoutGrid className="w-5 h-5" /> Overview
        </a>
        <a
          href="#"
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-lg text-label-lg"
        >
          <Building2 className="w-5 h-5" /> Properties
        </a>
        <a
          href="#"
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-lg text-label-lg"
        >
          <FileText className="w-5 h-5" /> Leases &amp; Tenants
        </a>
        <a
          href="#"
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-lg text-label-lg"
        >
          <Wallet className="w-5 h-5" /> Financials
        </a>
        <a
          href="#"
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-lg text-label-lg"
        >
          <Wrench className="w-5 h-5" /> Maintenance
        </a>
        <a
          href="#"
          aria-current="page"
          className="flex items-center gap-space-sm px-space-md py-space-sm transition-colors bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg"
        >
          <MessageSquare className="w-5 h-5" /> Inquiries
        </a>
      </nav>
      <div className="px-space-md pt-space-md">
        <div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-sm">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDag_qO1BTUhSSzNoa5FfkXF0QlpOQiNPLxGjpnFRCoIzkF0SQAb3UdHOu2gc8s5B5fbb66M5SFtyexJpVcRFUl3ncNI1omhkwixk5ubr-hY3hoYAzBrdCSgn8s2K7NSokGw00TseU2vpmtPgMLljHnjt2odUSEwz4RT64kwUzkoNdwIIEfbqKCp2bQ_tYW9eHSnM6W2OTDzxJbIzi1Zd2o4AhUqOXOoifQyDsSGKiO"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
            alt="Profile"
          />
          <div className="flex-1 min-w-0">
            <p className="font-label-md text-label-md text-on-surface truncate">
              Portfolio Admin
            </p>
            <p className="font-label-caps text-label-caps text-secondary truncate">
              Premium Host
            </p>
          </div>
          <MoreVertical className="w-4 h-4 text-secondary cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};
