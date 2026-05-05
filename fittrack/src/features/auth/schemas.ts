import { z } from "zod";

export const createAccountSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters"),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CreateAccountFormValues = z.infer<typeof createAccountSchema>;


export const personalDetailsSchema = z.object({
  dateOfBirth: z.string().min(1, "Date of birth is required"),

  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    message: "Please select your gender",
  }),

  height: z
    .number()
    .min(90, "Height must be at least 90")
    .max(250, "Height must be less than 250"),

  weight: z
    .number()
    .min(25, "Weight must be at least 25")
    .max(250, "Weight must be less than 250"),

  unitSystem: z.enum(["metric", "imperial"]),
});

export type PersonalDetailsFormValues = z.infer<typeof personalDetailsSchema>;