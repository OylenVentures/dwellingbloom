"use client";

import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { resendActivation, verifyEmail } from "../../../api/auth";
import { getErrorMessage } from "@/app/common/helper";
import { FormBtn } from "@/app/components/ui/Btn";
import AuthLayout from "../layout";
import { useForm } from "react-hook-form";
import { VerfiyEmailFormData, verifyEmailSchema } from "@/app/common/validator";
import { Suspense, useState } from "react";
import Loading from "@/app/components/ui/Loading";
import { yupResolver } from "@hookform/resolvers/yup";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VerfiyEmailFormData>({
    resolver: yupResolver(verifyEmailSchema),
  });

  const handleVerify = async (data: VerfiyEmailFormData) => {
    try {
      await verifyEmail(data.token);
      toast.success("Email verified successfully!");
      reset();
      router.push("/dashboard");
    } catch (error: unknown) {
      toast.error(getErrorMessage(error) || "Invalid code.");
    }
  };

  return (
    <AuthLayout>
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-md w-full bg-white border border-border p-8 rounded-3xl shadow-xl text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-primary tracking-tight">
              Verify Your Email
            </h2>

            {email && (
              <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                We've sent a verification code to{" "}
                <span className="font-bold text-text-primary">{email}</span>.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit(handleVerify)} className="space-y-4">
            <div>
              <input
                type="text"
                maxLength={225}
                {...register("token")}
                placeholder="e.g. z4hvh6sz9MxqlqGgssBO4VTNp961xjkZ"
                className="w-full text-center tracking-widest font-mono text-lg px-4 py-3 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />

              {errors.token && (
                <p className="text-xs text-error mt-1">
                  {errors.token.message}
                </p>
              )}
            </div>

            <FormBtn
              type="submit"
              disabled={isSubmitting}
              styling="cursor-pointer w-full py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-primary/50"
              text={isSubmitting ? "Verifying..." : "Verify Code"}
              icon={<ArrowRight className="w-4 h-4" />}
            />
          </form>

          {email && (
            <div className="text-xs text-text-secondary">
              Didn't receive code?{" "}
              <button
                type="button"
                onClick={async () => {
                  setLoading(true);
                  try {
                    const resp = await resendActivation({ email });
                    toast.success(resp.message || "Verification email resent");
                  } catch (error: unknown) {
                    toast.error(
                      getErrorMessage(error) ||
                        "Unable to resend verification email",
                    );
                  } finally {
                    setLoading(false);
                  }
                }}
                disabled={loading}
                className="cursor-pointer text-primary font-bold hover:underline disabled:cursor-not-allowed disabled:bg-primary/50"
              >
                {loading ? "Resending..." : "Resend Email"}
              </button>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<Loading />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
