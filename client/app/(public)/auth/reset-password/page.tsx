"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Mail, Lock, Key, ArrowLeft, ArrowRight } from "lucide-react";
import { confirmPasswordReset, requestPasswordReset } from "../../../api/auth";
import { getErrorMessage } from "@/app/common/helper";
import { FormBtn } from "@/app/components/ui/Btn";

export default function PasswordResetPage() {
  const router = useRouter();
  const onBackToLogin = () => router.push("/auth/login");
  const [step, setStep] = useState<"forgot" | "reset">("forgot");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email address is required");
      return;
    }

    setLoading(true);
    try {
      await requestPasswordReset({ email });

      toast.success("Reset link/code requested successfully");
      setStep("reset");
    } catch (error: unknown) {
      console.log(error);
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || !password) {
      toast.error("Please fill in all reset fields");
      return;
    }

    setLoading(true);
    try {
      await confirmPasswordReset({
        otp: code,
        new_password: password,
        confirm_password: confirmPassword,
      });

      toast.success("Password changed successfully!", { icon: "🎉" });
      onBackToLogin();
    } catch (error: unknown) {
      toast.error(
        getErrorMessage(error) || "Verification failed. Try reset code: 654321",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-md w-full bg-white border border-border p-8 rounded-3xl shadow-xl space-y-6">
        <button
          onClick={onBackToLogin}
          className="cursor-pointer inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Login</span>
        </button>

        {step === "forgot" ? (
          <>
            <div>
              <h2 className="text-2xl font-extrabold text-primary tracking-tight">
                Forgot Password?
              </h2>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                Enter your registered email and we will send a password reset
                code.
              </p>
            </div>

            <form onSubmit={handleForgot} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <FormBtn
                type="submit"
                disabled={loading}
                styling="cursor-pointer w-full py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-primary/50"
                text={loading ? "Sending..." : "Request Reset Code"}
                icon={<ArrowRight className="w-4 h-4" />}
              />
            </form>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-2xl font-extrabold text-primary tracking-tight">
                Reset Password
              </h2>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                Enter the code sent to your email to configure a new password.
              </p>
            </div>

            <form onSubmit={handleReset} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Verification Code
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                    placeholder="e.g. 654321"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>{loading ? "Resetting..." : "Save New Password"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
