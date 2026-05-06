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


export const fitnessGoalsSchema = z.object({
      goals: z
    .array(z.string())
    .min(1, "Select at least one fitness goal")
    .max(3, "You can select up to 3 goals"),
});

export type FitnessGoalsFormValues = z.infer<typeof fitnessGoalsSchema>;


export const activityLevelSchema = z.object({
  activityLevel: z.enum([
    "sedentary",
    "light",
    "moderate",
    "very-active",
    "athlete",
  ]),
});

export type ActivityLevelFormValues = z.infer<typeof activityLevelSchema>;

export const profileSetupSchema = z.object({
  avatarUrl: z.string().optional(),
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(24, "Username must be less than 24 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  bio: z.string().max(160, "Bio must be less than 160 characters").optional(),
  notifications: z.object({
    workoutReminders: z.boolean(),
    weeklyReports: z.boolean(),
    communityUpdates: z.boolean(),
  }),
});

export type ProfileSetupFormValues = z.infer<typeof profileSetupSchema>;