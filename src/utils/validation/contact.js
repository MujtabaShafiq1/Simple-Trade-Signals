import { object, string } from "yup";

export const contactSchema =  object({
  name: string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: string().email("Invalid email address").required("Email is required"),
  phoneNo: string()
    .min(6, "Phone number must be at least 6 characters")
    .max(15, "Phone number must be at most 15 characters")
    .required("Phone number is required"),
  description: string()
    .min(3, "Description must be at least 3 characters")
    .max(1000, "Description must be at most 1000 characters")
    .required("Description is required"),
});
