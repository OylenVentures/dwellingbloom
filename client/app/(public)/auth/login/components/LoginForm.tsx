"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { useAuthStore } from "@/app/store/useAuthStore";
import { loginSchema, LoginFormData } from "@/app/common/validator";
import { FormBtn, LinkBtn } from "@/app/components/ui/Btn";
import { LightLogo } from "@/app/components/ui/Logo";
import { login, LoginResponse } from "@/app/api/auth";
import { getCurrentUser } from "@/app/api/user";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/app/common/helper";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const resData = await login(data);
      const loginData = resData as LoginResponse;
      const currentUser = await getCurrentUser(loginData.access_token);
      localStorage.setItem("token", loginData.access_token);
      setUser(
        currentUser.data,
        loginData.access_token,
        loginData.refresh_token,
      );
      toast.success(loginData.message || "Login successful.", { icon: "👋" });
      // router.push("/dashboard");
    } catch (error: unknown) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
      <div className="w-full max-w-xl mx-auto bg-surface-container-lowest rounded-xl p-6 sm:p-10 shadow-lg">
        {/* Identity Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 lg:hidden">
              <LightLogo />
            </div>
            <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-surface-container-low text-secondary text-label-caps font-label-caps">
              <Lock className="w-3 h-3" />
              <span>TLS 1.3 / 256-BIT</span>
            </div>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary font-normal">
            Sign in to DwellingBloom
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Welcome back to your rental community. Access your residences and
            management portals.
          </p>
        </div>

        {/* Authentication Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Address Input */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block font-label-md text-label-md text-on-surface font-medium"
            >
              Email Address
            </label>
            <div className="relative rounded bg-surface-container-lowest">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: "Required" })}
                placeholder="alexandra.vane@architecture.org"
                className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container shadow-inner transition-colors"
              />
            </div>
            {errors.email && (
              <p className="text-error text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block font-label-md text-label-md text-on-surface font-medium"
            >
              Password
            </label>
            <div className="relative rounded bg-surface-container-lowest">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none" />
              <input
                id="password"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Required" })}
                placeholder="••••••••••••"
                className="w-full pl-11 pr-12 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container shadow-inner transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors p-1"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-error text-xs">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between pt-1">
            <LinkBtn
              href="reset-password"
              styling="font-label-md text-label-md text-primary-container hover:text-primary underline transition-colors"
              text="Forgot password?"
            />

            <FormBtn
              type="submit"
              disabled={isSubmitting}
              styling="flex items-center justify-center space-x-2 py-3.5 px-6 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-70"
              text={
                isSubmitting ? "Verifying Authenticity..." : `Sign In to Portal`
              }
              icon={
                isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )
              }
            />
          </div>
        </form>

        <div className="mt-8 pt-6 bg-surface-container-low/50 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:px-10 rounded-b-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-on-surface-variant">
            <ShieldCheck className="w-5 h-5 text-tertiary-fixed-dim shrink-0" />
            <span className="font-label-caps text-label-caps uppercase tracking-wide">
              Encrypted connection active
            </span>
          </div>
          <div className="text-right">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              New here?{" "}
            </span>
            <LinkBtn
              href="/auth/register"
              styling="font-label-md text-label-md text-primary font-semibold hover:underline"
              text="Register as Tenant or Homeowner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
