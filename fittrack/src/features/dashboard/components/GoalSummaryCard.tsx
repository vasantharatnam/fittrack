"use client";

import { Target } from "lucide-react";
import { EmptyState } from "../../../components/shared/EmptyState";

type GoalSummaryCardProps = {
  goals?: string[];
  activityLevel?: string;
};

const goalLabels: Record<string, string> = {
  "lose-weight": "Lose Weight",
  "build-muscle": "Build Muscle",
  "stay-active": "Stay Active",
  "improve-flexibility": "Improve Flexibility",
  "eat-healthier": "Eat Healthier",
  "reduce-stress": "Reduce Stress",
};

const activityLabels: Record<string, string> = {
  sedentary: "Sedentary",
  light: "Lightly Active",
  moderate: "Moderately Active",
  "very-active": "Very Active",
  athlete: "Athlete",
};

export function GoalSummaryCard({
  goals = [],
  activityLevel,
}: GoalSummaryCardProps) {
  const hasGoals = goals.length > 0;
  const visibleGoals = goals;
  return (
    <div className="rounded-3xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Profile
          </p>

          <h2 className="mt-3 text-2xl font-black">Your goals</h2>
        </div>

        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Target className="size-6" />
        </div>
      </div>

      {hasGoals ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {visibleGoals.map((goal) => (
            <span
              key={goal}
              className="rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground"
            >
              {goalLabels[goal] ?? goal}
            </span>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <EmptyState
            icon={Target}
            title="No goals selected"
            description="Complete onboarding or update your profile to personalize your dashboard goals."
            actionLabel="Update goals"
          />
        </div>
      )}

      <div className="mt-6 rounded-3xl bg-background/70 p-4">
        <p className="text-sm font-medium text-muted-foreground">
          Activity level
        </p>

        <p className="mt-2 text-xl font-black">
          {activityLabels[activityLevel ?? ""] ?? "Moderately Active"}
        </p>
      </div>
    </div>
  );
}
