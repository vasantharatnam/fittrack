"use client";

import { useEffect, useState } from "react";
import { getSavedSignupProfile } from "@/features/auth/storage";

type DashboardProfile = {
  fullName?: string;
  email?: string;
  username?: string;
  avatarUrl?: string;
  goals?: string[];
  activityLevel?: string;
};

const fallbackProfile: DashboardProfile = {
  fullName: "FitTrack User",
  email: "user@fittrack.app",
  username: "fittrack_user",
  avatarUrl: "",
  goals: ["stay-active"],
  activityLevel: "moderate",
};

export function useDashboardProfile() {
  const [profile] = useState<DashboardProfile>(() => {
    const savedProfile = getSavedSignupProfile();

    if (!savedProfile) {
      return fallbackProfile;
    }

    return {
      ...fallbackProfile,
      ...savedProfile,
    };
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return {
    profile,
    isLoading,
  };
}
