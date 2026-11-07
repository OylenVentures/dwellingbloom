import { Toaster } from "react-hot-toast";
import "@/app/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex-1 flex flex-col">{children}</div>
    </>
  );
}
