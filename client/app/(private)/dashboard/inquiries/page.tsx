"use client";
import { HeaderNav } from "../components/HeaderNav";
import { SidebarNav } from "../components/SidebarNav";
import DashboardLayout from "../layout";
import { ChatWorkspace } from "./components/ChatWorkspace";
import { InquiriesBanner } from "./components/InquiriesBanner";
import { RentingHubColumn } from "./components/RentingHubColumn";

function Inquiries() {
  return (
    <DashboardLayout>
      <SidebarNav />
      <div className="pl-64">
        <HeaderNav />
        <main className="relative pt-20 w-full min-h-screen bg-surface px-space-xl">
          <div className="flex flex-col w-full pb-space-xl">
            {/* Top Greeting & Architectural Banner Header */}
            <InquiriesBanner />

            {/* 2-Column Responsive Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <RentingHubColumn />
              <ChatWorkspace />
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}

export default Inquiries;
