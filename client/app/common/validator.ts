import * as yup from "yup";

export const registerSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  phone_number: yup.string().required("Phone number is required"),
  bvn: yup.string().required("BVN is required"),
  role: yup
    .string()
    .oneOf(["TENANT", "OWNER"], "Invalid role")
    .required("Role is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

export const verifyEmailSchema = yup.object({
  token: yup.string().required("Token is required"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const resetPasswordSchema = yup.object({
  otp: yup.string().required("OTP is required"),
  new_password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

export const searchConsoleSchema = yup.object().shape({
  location: yup.string().required("Location or neighborhood is required"),
});

export const chatInputSchema = yup.object().shape({
  message: yup.string().trim().min(1, "Cannot send empty message"),
});

export const exploreSearchSchema = yup.object().shape({
  location: yup.string().required("Location is required"),
  minPrice: yup.number().min(0).required(),
  maxPrice: yup.number().max(10000).required(),
  beds: yup.string().required(),
  baths: yup.string().required(),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
export type VerfiyEmailFormData = yup.InferType<typeof verifyEmailSchema>;
export type LoginFormData = yup.InferType<typeof loginSchema>;
export type ResetPasswordFormData = yup.InferType<typeof resetPasswordSchema>;
export type SearchConsoleFormData = yup.InferType<typeof searchConsoleSchema>;
export type ChatInputFormData = yup.InferType<typeof chatInputSchema>;
export type ExploreSearchFormData = yup.InferType<typeof exploreSearchSchema>;
