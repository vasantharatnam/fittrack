import { LOCAL_STORAGE_KEYS } from "@/lib/constants";
import type { SignupFormData } from "./type";

export function saveSignupProfile(profile: SignupFormData) {
  if (typeof window === "undefined") return;

  const profileToSave = {
    ...profile,
    password: undefined,
    confirmPassword: undefined,
    completedAt: new Date().toISOString(),
  };

  localStorage.setItem(
    LOCAL_STORAGE_KEYS.profile,
    JSON.stringify(profileToSave)
  );
}

export function getSavedSignupProfile() {
  if (typeof window === "undefined") return null;

  const savedProfile = localStorage.getItem(LOCAL_STORAGE_KEYS.profile);

  if (!savedProfile) return null;

  try {
    return JSON.parse(savedProfile);
  } catch {
    return null;
  }
}