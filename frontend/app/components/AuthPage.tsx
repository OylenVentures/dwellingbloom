"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import {
  login,
  signup,
  type LoginResponse,
  type SignupResponse,
} from "../api/auth";
import { getCurrentUser } from "../api/user";
import { Mail, Lock, Phone, ShieldCheck } from "lucide-react";

type AuthFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone_number: string;
  bvn: string;
  account_number: string;
  account_name: string;
  bank_name: string;
  role: "TENANT" | "OWNER";
};

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Something went wrong";
}

interface AuthPageProps {
  onNavigateToLogin: () => void;
  onNavigateToRegister: () => void;
  onNavigateToVerify: (email: string) => void;
  onNavigateToDashboard: () => void;
  onNavigateToForgot: () => void;
  mode: "login" | "register";
}

export default function AuthPage({
  onNavigateToLogin,
  onNavigateToRegister,
  onNavigateToVerify,
  onNavigateToDashboard,
  onNavigateToForgot,
  mode,
}: AuthPageProps) {
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const { register, handleSubmit } = useForm<AuthFormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_number: "",
      bvn: "",
      account_number: "",
      account_name: "",
      bank_name: "",
      role: "TENANT" as "TENANT" | "OWNER",
    },
  });

  const onSubmit = async (data: AuthFormValues) => {
    setLoading(true);
    try {
      const resData =
        mode === "login"
          ? await login({ email: data.email, password: data.password })
          : await signup(data);

      if (mode === "login") {
        const loginData = resData as LoginResponse;
        const currentUser = await getCurrentUser(loginData.access_token);
        localStorage.setItem("token", loginData.access_token);
        setUser(
          currentUser.data,
          loginData.access_token,
          loginData.refresh_token,
        );
        toast.success(
          loginData.message || "Login successful. Loading your dashboard...",
          {
            icon: "👋",
          },
        );
        onNavigateToDashboard();
      } else {
        const signupData = resData as SignupResponse;
        toast.success(
          signupData.message ||
            "Registration successful! Please verify your email.",
        );
        onNavigateToVerify(data.email);
      }
    } catch (error: unknown) {
      // If not verified, redirect to verify
      if (
        mode === "login" &&
        error == "Error: Account not verified, please check your email."
      ) {
        onNavigateToVerify(data.email);
      }
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-xl w-full bg-white border border-border p-8 rounded-3xl shadow-xl space-y-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary tracking-tight">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-text-secondary text-sm mt-1">
            {mode === "login"
              ? "Sign in to access your DwellingBloom account."
              : "Join as a renter or homeowner to get started."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {mode === "register" && (
            <>
              {/* Role Picker */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                <label className="flex items-center justify-center p-3 border rounded-xl cursor-pointer hover:bg-background transition-colors [&:has(input:checked)]:border-primary [&:has(input:checked)]:bg-primary/5">
                  <input
                    type="radio"
                    value="TENANT"
                    {...register("role")}
                    className="sr-only"
                    defaultChecked
                  />
                  <span className="text-sm font-semibold text-text-primary">
                    I want to Rent
                  </span>
                </label>
                <label className="flex items-center justify-center p-3 border rounded-xl cursor-pointer hover:bg-background transition-colors [&:has(input:checked)]:border-primary [&:has(input:checked)]:bg-primary/5">
                  <input
                    type="radio"
                    value="OWNER"
                    {...register("role")}
                    className="sr-only"
                  />
                  <span className="text-sm font-semibold text-text-primary">
                    I own Property
                  </span>
                </label>
              </div>

              {/* Basic Details */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    {...register("first_name", { required: "Required" })}
                    className="w-full px-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    {...register("last_name", { required: "Required" })}
                    className="w-full px-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                  />
                </div>
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              Email Address*
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="email"
                {...register("email", { required: "Required" })}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                placeholder="name@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-text-primary">
                Password*
              </label>
              {mode === "login" && (
                <button
                  type="button"
                  onClick={onNavigateToForgot}
                  className="cursor-pointer text-xs text-primary font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="password"
                {...register("password", { required: "Required" })}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Confirm Password */}
          {mode === "register" && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-text-primary">
                  Confirm Password*
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  type="password"
                  {...register("confirm_password", { required: "Required" })}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          {mode === "register" && (
            <>
              {/* Phone number */}
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Phone Number*
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input
                    type="tel"
                    {...register("phone_number", { required: "Required" })}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                    placeholder="e.g. 08012345678"
                  />
                </div>
              </div>

              {/* Identity Verification Section */}
              <div className="border-t border-border pt-4 mt-2">
                <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Identity & Financial Details</span>
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-text-primary mb-1">
                      BVN (Bank Verification Number)
                    </label>
                    <input
                      type="text"
                      maxLength={11}
                      {...register("bvn")}
                      className="w-full px-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                      placeholder="11-digit BVN"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      {...register("bank_name")}
                      className="w-full px-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                      placeholder="e.g. GTBank"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      maxLength={10}
                      {...register("account_number")}
                      className="w-full px-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                      placeholder="10-digit Account No."
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-text-primary mb-1">
                      Account Name
                    </label>
                    <input
                      type="text"
                      {...register("account_name")}
                      className="w-full px-4 py-2 border border-border rounded-xl text-sm focus:outline-hidden"
                      placeholder="Holder Name"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full py-3 mt-4 bg-primary hover:bg-secondary text-white font-semibold rounded-xl text-sm transition-colors shadow-xs"
          >
            {loading
              ? "Processing..."
              : mode === "login"
                ? "Login"
                : "Create Account"}
          </button>
        </form>

        {/* Toggle between auth states */}
        <div className="text-center pt-2 border-t border-border">
          <p className="text-text-secondary text-xs">
            {mode === "login"
              ? "Don't have an account?"
              : "Already registered?"}
            <button
              onClick={
                mode === "login" ? onNavigateToRegister : onNavigateToLogin
              }
              className="cursor-pointer text-primary font-bold ml-1 hover:underline text-xs"
            >
              {mode === "login" ? "Register here" : "Sign in here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
