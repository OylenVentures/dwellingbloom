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
  account_number: yup.string().required("Account number is required"),
  account_name: yup.string().required("Account name is required"),
  bank_name: yup.string().required("Bank name is required"),
  role: yup
    .string()
    .oneOf(["TENANT", "OWNER"], "Invalid role")
    .required("Role is required"),
});

export type AuthFormData = yup.InferType<typeof authSchema>;
