"use client";

import { DashboardStats } from "@/features/dashboard/components/DashboardStats";
import { GoalSummaryCard } from "@/features/dashboard/components/GoalSummaryCard";
import { QuickActions } from "@/features/dashboard/components/QuickActions";
import { WorkoutCard } from "@/features/dashboard/components/WorkoutCard";
import { useDashboardProfile } from "@/features/dashboard/components/useDashboardProfile";

export function DashboardOverview() {
  const { profile } = useDashboardProfile();

  return (
    <div className="grid gap-5">
      <DashboardStats />

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="min-h-80 rounded-3xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Activity
          </p>

          <h2 className="mt-3 text-2xl font-black">Weekly activity</h2>

          <p className="mt-2 text-muted-foreground">
            Chart will be added in the next commit.
          </p>
        </div>

        <WorkoutCard />
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <QuickActions />

        <GoalSummaryCard
          goals={profile.goals}
          activityLevel={profile.activityLevel}
        />
      </section>
    </div>
  );
}