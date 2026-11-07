"use client";
import { SubmitEvent, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Mail, Lock, Key, ArrowLeft, ArrowRight } from "lucide-react";
import { confirmPasswordReset, requestPasswordReset } from "../../../api/auth";
import { getErrorMessage } from "@/app/common/helper";
import { FormBtn } from "@/app/components/ui/Btn";
import AuthLayout from "../layout";
import { useForm } from "react-hook-form";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@/app/common/validator";
import { yupResolver } from "@hookform/resolvers/yup";

export default function PasswordResetPage() {
  const router = useRouter();
  const onBackToLogin = () => router.push("/auth/login");
  const [step, setStep] = useState<"forgot" | "reset">("forgot");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleForgot = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email address is required");
      return;
    }

    setLoading(true);
    try {
      await requestPasswordReset({ email });
      toast.success("Reset code requested successfully");
      setStep("reset");
    } catch (error: unknown) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (data: ResetPasswordFormData) => {
    try {
      await confirmPasswordReset(data);
      toast.success("Password changed successfully!");
      reset();
      onBackToLogin();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error) || "Verification failed");
    }
  };

  return (
    <AuthLayout>
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

              <form onSubmit={handleSubmit(handleReset)} className="space-y-4">
                <div>
                  <label
                    htmlFor="otp"
                    className="block text-xs font-semibold text-text-primary mb-1"
                  >
                    Verification Code
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input
                      id="otp"
                      type="text"
                      {...register("otp")}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                      placeholder="e.g. 654321"
                    />
                  </div>
                  {errors.otp && (
                    <p className="text-error text-xs mt-1">
                      {errors.otp.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-text-primary mb-1"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input
                      id="password"
                      type="password"
                      {...register("new_password")}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.new_password && (
                    <p className="text-error text-xs mt-1">
                      {errors.new_password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block text-xs font-semibold text-text-primary mb-1"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input
                      id="confirm_password"
                      type="password"
                      {...register("confirm_password")}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.confirm_password && (
                    <p className="text-error text-xs mt-1">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>

                <FormBtn
                  type="submit"
                  disabled={isSubmitting}
                  styling="cursor-pointer w-full py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  text={isSubmitting ? "Resetting..." : "Save New Password"}
                  icon={<ArrowRight className="w-4 h-4" />}
                />
              </form>
            </>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
