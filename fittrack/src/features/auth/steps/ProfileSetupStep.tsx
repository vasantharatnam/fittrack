"use client";

import type { ChangeEvent } from "react";
import { Bell, Camera, ImagePlus, UserRound } from "lucide-react";
import { notificationOptions } from "@/data/landing";
import type { ProfileSetupFormValues } from "@/features/auth/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ProfileSetupStepProps = {
  values: ProfileSetupFormValues;
  onChange: (values: ProfileSetupFormValues, isValid: boolean) => void;
};

export function ProfileSetupStep({ values, onChange }: ProfileSetupStepProps) {
  const usernameError = getUsernameError(values.username);
  const bioError =
    values.bio && values.bio.length > 160
      ? "Bio must be less than 160 characters"
      : "";

  const isValid = !usernameError && !bioError;

  function updateValues(nextValues: Partial<ProfileSetupFormValues>) {
    const updatedValues = {
      ...values,
      ...nextValues,
    };

    const nextUsernameError = getUsernameError(updatedValues.username);
    const nextBioError =
      updatedValues.bio && updatedValues.bio.length > 160
        ? "Bio must be less than 160 characters"
        : "";

    onChange(updatedValues, !nextUsernameError && !nextBioError);
  }

  function handleAvatarChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    updateValues({
      avatarUrl: previewUrl,
    });
  }

  function updateNotification(
    key: keyof ProfileSetupFormValues["notifications"],
    checked: boolean
  ) {
    updateValues({
      notifications: {
        ...values.notifications,
        [key]: checked,
      },
    });
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
        Profile Setup
      </p>

      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
        Personalize your FitTrack profile.
      </h1>

      <p className="mt-3 leading-7 text-muted-foreground">
        Add your avatar, choose a username, and control which reminders you want.
        You can also skip this and update it later.
      </p>

      <div className="mt-8 grid gap-6">
        <div className="rounded-3xl border bg-background/70 p-5">
          <label className="mb-4 block text-sm font-bold">Profile avatar</label>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex size-24 items-center justify-center overflow-hidden rounded-full border bg-secondary text-secondary-foreground">
              {values.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={values.avatarUrl}
                  alt="Avatar preview"
                  className="size-full object-cover"
                />
              ) : (
                <UserRound className="size-10" />
              )}
            </div>

            <label className="group flex flex-1 cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed bg-card p-6 text-center transition-all hover:border-primary hover:bg-primary/5">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="sr-only"
              />

              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                {values.avatarUrl ? (
                  <Camera className="size-5" />
                ) : (
                  <ImagePlus className="size-5" />
                )}
              </div>

              <p className="mt-3 text-sm font-bold">
                {values.avatarUrl ? "Change avatar" : "Upload avatar"}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                PNG or JPG recommended
              </p>
            </label>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">Username</label>

          <div className="relative">
            <UserRound className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={values.username}
              onChange={(event) =>
                updateValues({
                  username: event.target.value,
                })
              }
              placeholder="ratan_fit"
              className="h-12 rounded-2xl pl-10"
            />
          </div>

          {usernameError ? (
            <p className="mt-2 text-sm font-medium text-destructive">
              {usernameError}
            </p>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">
              Use letters, numbers, and underscores only.
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label className="block text-sm font-bold">Short bio</label>

            <p
              className={cn(
                "text-xs font-bold",
                (values.bio ?? "").length > 160
                  ? "text-destructive"
                  : "text-muted-foreground"
              )}
            >
              {(values.bio ?? "").length}/160
            </p>
          </div>

          <Textarea
            value={values.bio}
            onChange={(event) =>
              updateValues({
                bio: event.target.value,
              })
            }
            placeholder="Building consistency one workout at a time..."
            className="min-h-24 resize-none rounded-2xl"
          />

          {bioError ? (
            <p className="mt-2 text-sm font-medium text-destructive">
              {bioError}
            </p>
          ) : null}
        </div>

        <div className="rounded-3xl border bg-background/70 p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Bell className="size-4" />
            </span>

            <h3 className="font-black">Notification preferences</h3>
          </div>

          <div className="grid gap-4">
            {notificationOptions.map((option) => {
              const key =
                option.id as keyof ProfileSetupFormValues["notifications"];
              const checked = values.notifications[key];

              return (
                <button
                  key={option.id}
                  type="button"
                  role="switch"
                  aria-checked={checked}
                  onClick={() => updateNotification(key, !checked)}
                  className={cn(
                    "flex items-start justify-between gap-4 rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/40 hover:bg-primary/5 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                    checked && "border-primary/40 bg-primary/5"
                  )}
                >
                  <div>
                    <p className="font-bold">{option.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {option.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-1 inline-flex h-[18.4px] w-8 shrink-0 items-center rounded-full transition-colors",
                      checked ? "bg-primary" : "bg-input"
                    )}
                  >
                    <span
                      className={cn(
                        "block size-4 rounded-full bg-background transition-transform",
                        checked ? "translate-x-3.5" : "translate-x-0"
                      )}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {!isValid ? (
          <p className="text-sm font-medium text-destructive">
            Please fix the profile details before continuing, or skip for now.
          </p>
        ) : (
          <p className="text-sm font-semibold text-primary">
            Profile details look good.
          </p>
        )}
      </div>
    </div>
  );
}

function getUsernameError(username: string) {
  const trimmedUsername = username.trim();

  if (trimmedUsername.length === 0) {
    return "Username is required";
  }

  if (trimmedUsername.length < 3) {
    return "Username must be at least 3 characters";
  }

  if (trimmedUsername.length > 24) {
    return "Username must be less than 24 characters";
  }

  if (!/^[a-zA-Z0-9_]+$/.test(trimmedUsername)) {
    return "Username can only contain letters, numbers, and underscores";
  }

  return "";
}
