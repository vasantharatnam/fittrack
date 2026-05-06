"use client";

import { CheckCircle2 } from "lucide-react";
import { activityLevelOptions } from "@/data/landing";
import type { ActivityLevelFormValues } from "@/features/auth/schemas";
import { cn } from "@/lib/utils";

type ActivityLevelStepProps = {
  values: ActivityLevelFormValues;
  onChange: (values: ActivityLevelFormValues, isValid: boolean) => void;
};

export function ActivityLevelStep({
  values,
  onChange,
}: ActivityLevelStepProps) {
  function selectActivityLevel(activityLevel: ActivityLevelFormValues["activityLevel"]) {
    onChange(
      {
        activityLevel,
      },
      true
    );
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
        Activity Level
      </p>

      <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
        How active are you right now?
      </h1>

      <p className="mt-3 leading-7 text-muted-foreground">
        Choose the option that best matches your current lifestyle. This helps
        FitTrack create a realistic starting point.
      </p>

      <div className="mt-8 grid gap-3">
        {activityLevelOptions.map((option) => {
          const Icon = option.icon;
          const selected = values.activityLevel === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => selectActivityLevel(option.id)}
              aria-pressed={selected}
              aria-label={`Select ${option.title} activity level`}
              className={cn(
                "group flex items-start gap-4 rounded-3xl border bg-background/70 p-4 text-left transition-all duration-300",
                selected
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                  : "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              )}
            >
              <div
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300",
                  selected
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                )}
              >
                <Icon className="size-6" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-black">{option.title}</h3>

                  {selected ? (
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  ) : (
                    <div className="size-5 shrink-0 rounded-full border border-border" />
                  )}
                </div>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {!values.activityLevel ? (
        <p className="mt-4 text-sm font-medium text-muted-foreground">
          This step is optional. You can skip it for now and update it later.
        </p>
      ) : (
        <p className="mt-4 text-sm font-semibold text-primary">
          Great. Your activity level is selected.
        </p>
      )}
    </div>
  );
}
