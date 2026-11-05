import { Toaster } from "react-hot-toast";
import "@/app/globals.css";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
