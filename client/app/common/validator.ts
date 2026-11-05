import * as yup from "yup";

export const authSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
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

export const searchConsoleSchema = yup.object().shape({
  location: yup.string().required("Location or neighborhood is required"),
  dwellingType: yup.string().required("Select a property type"),
  maxBudget: yup.number().min(1000).max(6000).required(),
  beds: yup.string().required(),
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

export type AuthFormData = yup.InferType<typeof authSchema>;
export type SearchConsoleFormData = yup.InferType<typeof searchConsoleSchema>;
export type ChatInputFormData = yup.InferType<typeof chatInputSchema>;
export type ExploreSearchFormData = yup.InferType<typeof exploreSearchSchema>;
