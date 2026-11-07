import { Toaster } from "react-hot-toast";
import "@/app/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
        {children}
      </div>
    </>
  );
}
