"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useMemo } from "react";
import { goalOptions } from "@/data/landing";
import type { FitnessGoalsFormValues } from "@/features/auth/schemas";
import { cn } from "@/lib/utils";

type FitnessGoalsStepProps = {
  values: FitnessGoalsFormValues;
  onChange: (values: FitnessGoalsFormValues, isValid: boolean) => void;
};

const MAX_GOALS = 3;

export function FitnessGoalsStep({ values, onChange }: FitnessGoalsStepProps) {
  const selectedGoals = values.goals;

  const validationMessage = useMemo(() => {
    if (selectedGoals.length === 0) {
      return "Select at least one goal to continue.";
    }

    if (selectedGoals.length > MAX_GOALS) {
      return "You can select up to 3 goals only.";
    }

    return "";
  }, [selectedGoals.length]);

  const isValid = selectedGoals.length >= 1 && selectedGoals.length <= MAX_GOALS;

  useEffect(() => {
    onChange(
      {
        goals: selectedGoals,
      },
      isValid
    );
  }, [selectedGoals, isValid, onChange]);

  function toggleGoal(goalId: string) {
    const isSelected = selectedGoals.includes(goalId);

    if (isSelected) {
      onChange(
        {
          goals: selectedGoals.filter((id) => id !== goalId),
        },
        selectedGoals.length - 1 >= 1
      );
      return;
    }

    if (selectedGoals.length >= MAX_GOALS) {
      return;
    }

    onChange(
      {
        goals: [...selectedGoals, goalId],
      },
      true
    );
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
        Fitness Goals
      </p>

      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
        Choose the goals that matter most.
      </h1>

      <p className="mt-3 leading-7 text-muted-foreground">
        Select 1 to 3 goals. FitTrack will use this to personalize your dashboard,
        quick actions, and progress insights.
      </p>

      <div className="mt-4 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
        {selectedGoals.length}/{MAX_GOALS} selected
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {goalOptions.map((goal) => {
          const Icon = goal.icon;
          const selected = selectedGoals.includes(goal.id);
          const disabled = !selected && selectedGoals.length >= MAX_GOALS;

          return (
            <button
              key={goal.id}
              type="button"
              onClick={() => toggleGoal(goal.id)}
              disabled={disabled}
              className={cn(
                "group relative overflow-hidden rounded-3xl border bg-background/70 p-5 text-left transition-all duration-300",
                selected
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                  : "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl",
                disabled && "cursor-not-allowed opacity-50 hover:translate-y-0 hover:shadow-none"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl transition-all duration-300",
                    selected
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                  )}
                >
                  <Icon className="size-6" />
                </div>

                {selected ? (
                  <CheckCircle2 className="size-6 text-primary" />
                ) : (
                  <div className="size-6 rounded-full border border-border" />
                )}
              </div>

              <h3 className="mt-5 text-xl font-black">{goal.title}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {getGoalDescription(goal.id)}
              </p>
            </button>
          );
        })}
      </div>

      {validationMessage ? (
        <p
          className={cn(
            "mt-4 text-sm font-medium",
            selectedGoals.length === 0 ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {validationMessage}
        </p>
      ) : (
        <p className="mt-4 text-sm font-semibold text-primary">
          Looks good. You can continue.
        </p>
      )}
    </div>
  );
}

function getGoalDescription(goalId: string) {
  const descriptions: Record<string, string> = {
    "lose-weight": "Burn calories, improve consistency, and track fat-loss progress.",
    "build-muscle": "Focus on strength, volume, and progressive workout habits.",
    "stay-active": "Build a sustainable routine around daily movement.",
    "improve-flexibility": "Improve mobility, recovery, and body control.",
    "eat-healthier": "Create better nutrition habits and simple meal awareness.",
    "reduce-stress": "Use mindful activity and wellness habits to feel balanced.",
  };

  return descriptions[goalId] ?? "Build a healthier routine with FitTrack.";
}