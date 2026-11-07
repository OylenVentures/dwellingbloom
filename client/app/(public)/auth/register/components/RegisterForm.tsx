"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {
  Building2,
  Home,
  CheckCircle2,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { registerSchema, RegisterFormData } from "@/app/common/validator";
import { signup, SignupResponse } from "@/app/api/auth";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/app/common/helper";
import { FormBtn, LinkBtn } from "@/app/components/ui/Btn";

export function RegisterForm() {
  const router = useRouter();
  const [role, setRole] = useState<"TENANT" | "OWNER">("TENANT");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: { role: "TENANT" },
  });

  const handleRoleChange = (selectedRole: "TENANT" | "OWNER") => {
    setRole(selectedRole);
    setValue("role", selectedRole);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    setPasswordStrength(score);
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const resData = await signup(data);
      const signupData = resData as SignupResponse;
      toast.success(
        signupData.message ||
          "Registration successful! Please verify your email.",
      );
      router.push(`/auth/verify-email?email=${encodeURIComponent(data.email)}`);
    } catch (error: unknown) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-xl p-6 sm:p-10 flex flex-col space-y-8">
      <div className="flex flex-col space-y-2">
        <h2 className="font-headline-lg text-primary tracking-tight">
          Create your DwellingBloom account
        </h2>
        <p className="font-body-md text-on-surface-variant">
          Join thousands of homeowners and tenants experiencing modern,
          transparent leasing.
        </p>
      </div>

      {/* Role Selector Tabs */}
      <div className="flex flex-col space-y-2">
        <label className="font-label-caps uppercase text-secondary tracking-wider">
          Select Account Type
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-surface-container rounded-lg">
          <button
            type="button"
            onClick={() => handleRoleChange("TENANT")}
            className={`cursor-pointer flex flex-col text-left p-3.5 rounded-md transition-all duration-200 ${
              role === "TENANT"
                ? "bg-surface-container-lowest shadow-md text-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-headline-sm text-base text-primary flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-secondary" />I am a Tenant
              </span>
              {role === "TENANT" && (
                <CheckCircle2 className="w-4 h-4 text-on-tertiary-container fill-current" />
              )}
            </div>
            <p className="font-body-sm text-on-surface-variant leading-tight">
              Looking to lease a home, browse listings &amp; chat with owners
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange("OWNER")}
            className={`cursor-pointer flex flex-col text-left p-3.5 rounded-md transition-all duration-200 ${
              role === "OWNER"
                ? "bg-surface-container-lowest shadow-md text-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-headline-sm text-base text-primary flex items-center gap-1.5">
                <Home className="w-4 h-4 text-secondary" />I am a Homeowner
              </span>
              {role === "OWNER" && (
                <CheckCircle2 className="w-4 h-4 text-on-tertiary-container fill-current" />
              )}
            </div>
            <p className="font-body-sm text-on-surface-variant leading-tight">
              Looking to list properties, manage leases &amp; collect rent
            </p>
          </button>
        </div>
      </div>

      {/* Main Registration Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label
              className="font-label-md text-on-surface"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              id="first_name"
              {...register("first_name", { required: "Required" })}
              className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
              placeholder="Eleanor"
            />
            {errors.first_name && (
              <span className="text-xs text-error">
                {errors.first_name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <label
              className="font-label-md text-on-surface"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              id="last_name"
              {...register("last_name", { required: "Required" })}
              className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
              placeholder="Vance"
            />
            {errors.last_name && (
              <span className="text-xs text-error">
                {errors.last_name.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="font-label-md text-on-surface" htmlFor="email">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-outline pointer-events-none" />
              <input
                id="email"
                {...register("email", { required: "Required" })}
                type="email"
                className="w-full bg-surface-container-low pl-10 pr-4 py-3 rounded-lg text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                placeholder="eleanor.vance@studio.com"
              />
            </div>
            {errors.email && (
              <span className="text-xs text-error">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <label className="font-label-md text-on-surface" htmlFor="phone">
              Phone Number
            </label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3.5 w-4 h-4 text-outline pointer-events-none" />
              <input
                id="phone"
                {...register("phone_number", { required: "Required" })}
                type="tel"
                className="w-full bg-surface-container-low pl-10 pr-4 py-3 rounded-lg text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                placeholder="+1 (555) 392-8172"
              />
            </div>
            {errors.phone_number && (
              <span className="text-xs text-error">
                {errors.phone_number.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <label className="font-label-md text-on-surface" htmlFor="password">
            Password
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 w-4 h-4 text-outline pointer-events-none" />
            <input
              {...register("password", { required: "Required" })}
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                register("password").onChange(e);
                handlePasswordInput(e);
              }}
              className="w-full bg-surface-container-low pl-10 pr-10 py-3 rounded-lg text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
              id="password"
              placeholder="At least 8 characters with numbers &amp; symbols"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-3.5 text-outline hover:text-primary transition-colors flex items-center"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-xs text-error">
              {errors.password.message}
            </span>
          )}

          {/* Password Strength Indicator Bars */}
          <div className="mt-2 flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-outline uppercase tracking-wider text-xs">
                Security Rating
              </span>
              <span className="font-label-caps text-outline uppercase text-xs">
                {passwordStrength === 0 && "Enter characters"}
                {passwordStrength === 1 && "Weak"}
                {passwordStrength === 2 && "Fair"}
                {passwordStrength === 3 && "Good"}
                {passwordStrength === 4 && "Institutional Grade"}
              </span>
            </div>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden flex">
              <div
                className={`h-full w-1/4 transition-colors duration-300 ${passwordStrength >= 1 ? "bg-error" : "bg-transparent"}`}
              />
              <div
                className={`h-full w-1/4 transition-colors duration-300 ml-0.5 ${passwordStrength >= 2 ? "bg-secondary" : "bg-transparent"}`}
              />
              <div
                className={`h-full w-1/4 transition-colors duration-300 ml-0.5 ${passwordStrength >= 3 ? "bg-primary-container" : "bg-transparent"}`}
              />
              <div
                className={`h-full w-1/4 transition-colors duration-300 ml-0.5 ${passwordStrength >= 4 ? "bg-tertiary-fixed-dim" : "bg-transparent"}`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <label
            className="font-label-md text-on-surface"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 w-4 h-4 text-outline pointer-events-none" />
            <input
              id="confirm_password"
              {...register("confirm_password", { required: "Required" })}
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                register("confirm_password").onChange(e);
                handlePasswordInput(e);
              }}
              className="w-full bg-surface-container-low pl-10 pr-10 py-3 rounded-lg text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
              placeholder="At least 8 characters with numbers &amp; symbols"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-3.5 text-outline hover:text-primary transition-colors flex items-center"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.confirm_password && (
            <span className="text-xs text-error">
              {errors.confirm_password.message}
            </span>
          )}

          {/* Password Strength Indicator Bars */}
          <div className="mt-2 flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-outline uppercase tracking-wider text-xs">
                Security Rating
              </span>
              <span className="font-label-caps text-outline uppercase text-xs">
                {passwordStrength === 0 && "Enter characters"}
                {passwordStrength === 1 && "Weak"}
                {passwordStrength === 2 && "Fair"}
                {passwordStrength === 3 && "Good"}
                {passwordStrength === 4 && "Institutional Grade"}
              </span>
            </div>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden flex">
              <div
                className={`h-full w-1/4 transition-colors duration-300 ${passwordStrength >= 1 ? "bg-error" : "bg-transparent"}`}
              />
              <div
                className={`h-full w-1/4 transition-colors duration-300 ml-0.5 ${passwordStrength >= 2 ? "bg-secondary" : "bg-transparent"}`}
              />
              <div
                className={`h-full w-1/4 transition-colors duration-300 ml-0.5 ${passwordStrength >= 3 ? "bg-primary-container" : "bg-transparent"}`}
              />
              <div
                className={`h-full w-1/4 transition-colors duration-300 ml-0.5 ${passwordStrength >= 4 ? "bg-tertiary-fixed-dim" : "bg-transparent"}`}
              />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-container-low flex flex-col space-y-4">
          <div className="flex items-center space-x-2 text-secondary">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-label-caps uppercase tracking-wider text-xs text-primary font-bold">
              Identity & Financial Details
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-label-md text-on-surface" htmlFor="bvn">
              BVN (Bank Verification Number)
            </label>
            <input
              id="bvn"
              {...register("bvn")}
              type="text"
              maxLength={11}
              className="w-full bg-surface-container-lowest px-3 py-2.5 rounded-lg text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-inner"
              placeholder="11-digit BVN"
            />
            {errors.bvn && (
              <span className="text-xs text-error">{errors.bvn.message}</span>
            )}
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-start space-x-3 pt-1">
            <input
              id="terms-check"
              {...register("terms", { required: "Required" })}
              type="checkbox"
              className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary/30 accent-primary cursor-pointer"
            />
            <label
              className="font-body-sm text-on-surface-variant leading-relaxed select-none cursor-pointer"
              htmlFor="terms-check"
            >
              I agree to DwellingBloom&apos;s{" "}
              <LinkBtn
                href="#"
                styling="text-primary font-semibold hover:underline"
                text="Terms of Service"
              />{" "}
              and{" "}
              <LinkBtn
                href="#"
                styling="text-primary font-semibold hover:underline"
                text="Privacy Policy"
              />
              , including institutional identity verification and background
              vetting.
            </label>
          </div>
          {errors.terms && (
            <span className="text-xs text-error">{errors.terms.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <FormBtn
          type="submit"
          disabled={isSubmitting}
          styling="w-full py-4 px-6 rounded-lg bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-tertiary font-label-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
          text={
            isSubmitting ? "Encrypting & Provisioning..." : "Create Account"
          }
          icon={
            isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5 font-bold" />
            )
          }
        />

        <div className="flex flex-col items-center justify-center space-y-2 pt-2">
          <p className="font-body-md text-on-surface-variant">
            Already have an account?{" "}
            <LinkBtn
              href="/auth/login"
              styling="text-primary font-semibold hover:underline ml-1"
              text="Log in here"
            />
          </p>
        </div>
      </form>
    </div>
  );
}
