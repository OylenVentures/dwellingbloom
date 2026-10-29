"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { resendActivation, verifyEmail } from "../api/auth";

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Something went wrong";
}

interface VerifyEmailPageProps {
  email: string;
  onVerificationSuccess: () => void;
}

export default function VerifyEmailPage({
  email,
  onVerificationSuccess,
}: VerifyEmailPageProps) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
      toast.error("Please enter the verification code");
      return;
    }

    setLoading(true);
    try {
      await verifyEmail(code);
      toast.success("Email verified successfully!", { icon: "✅" });

      // Update state
      if (user) {
        setUser({ ...user, isVerified: true });
      }
      onVerificationSuccess();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error) || "Invalid code. Hint: Use 123456");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-md w-full bg-white border border-border p-8 rounded-3xl shadow-xl text-center space-y-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-primary tracking-tight">
            Verify Your Email
          </h2>
          <p className="text-text-secondary text-sm mt-2 leading-relaxed">
            We&apos;ve sent a verification code to{" "}
            <span className="font-bold text-text-primary">{email}</span>.
          </p>
          {/* <p className="text-[11px] text-accent font-semibold mt-1 bg-accent/5 py-1 px-2 rounded-lg inline-block">
            For testing, enter code: <span className="font-mono">z4hvh6sz9MxqlqGgssBO4VTNp961xjkZ</span>
          </p> */}
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <input
              type="text"
              maxLength={225}
              placeholder="e.g. z4hvh6sz9MxqlqGgssBO4VTNp961xjkZ"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full text-center tracking-widest font-mono text-lg px-4 py-3 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>{loading ? "Verifying..." : "Verify Code"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-xs text-text-secondary">
          Didn&apos;t receive code?{" "}
          <button
            type="button"
            onClick={async () => {
              try {
                const resp = await resendActivation({ email });
                toast.success(resp.message || "Verification email resent");
              } catch (error: unknown) {
                console.error("Error resending verification email:", error);
                toast.error(
                  getErrorMessage(error) ||
                    "Unable to resend verification email",
                );
              }
            }}
            className="cursor-pointer text-primary font-bold hover:underline"
          >
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
}
