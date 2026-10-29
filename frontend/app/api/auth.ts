import { apiRequest } from "./client";

export interface AuthUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  bvn?: string;
  account_number?: string;
  account_name?: string;
  bank_name?: string;
  role: "TENANT" | "OWNER";
  isVerified: boolean;
}

export interface LoginResponse {
  user: AuthUser;
  access_token: string;
  refresh_token: string;
  message?: string;
}

export interface SignupResponse {
  user: AuthUser;
  message?: string;
}

export interface PasswordResetRequestPayload {
  email: string;
}

export interface PasswordResetConfirmPayload {
  otp: string;
  new_password: string;
  confirm_password: string;
}

export interface ResendActivationPayload {
  email: string;
}

export interface RefreshTokenPayload {
  refresh: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface VerifyEmailResponse {
  success?: boolean;
  message?: string;
  user?: AuthUser;
}

function authPath(path: string) {
  return `/auth${path}`;
}

export function login(payload: { email: string; password: string }) {
  return apiRequest<LoginResponse>(authPath("/login"), {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function signup(payload: Record<string, unknown>) {
  return apiRequest<SignupResponse>(authPath("/signup"), {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function logout() {
  return apiRequest<{ message?: string }>(authPath("/logout"), {
    method: "POST",
  });
}

export function requestPasswordReset(payload: PasswordResetRequestPayload) {
  return apiRequest<{ message?: string }>(authPath("/password-reset/request"), {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function confirmPasswordReset(payload: PasswordResetConfirmPayload) {
  return apiRequest<{ message?: string }>(authPath("/password-reset/confirm"), {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function resendActivation(payload: ResendActivationPayload) {
  return apiRequest<{ message?: string }>(authPath("/resend-activation"), {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function refreshToken(payload: RefreshTokenPayload) {
  return apiRequest<RefreshTokenResponse>(authPath("/token/refresh"), {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function verifyEmail(token: string) {
  return apiRequest<VerifyEmailResponse>(authPath("/verify-email"), {
    method: "POST",
    body: JSON.stringify({ token }),
  });
}
