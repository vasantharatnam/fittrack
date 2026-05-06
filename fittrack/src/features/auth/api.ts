 import type { SignupFormData } from "./type";

export async function submitSignupProfile(profile: SignupFormData) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...profile,
      password: undefined,
      confirmPassword: undefined,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit signup profile");
  }

  return response.json();
}