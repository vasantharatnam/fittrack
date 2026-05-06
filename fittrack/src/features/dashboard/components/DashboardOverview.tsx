"use client";

import { DashboardStats } from "@/features/dashboard/components/DashboardStats";
import { GoalSummaryCard } from "@/features/dashboard/components/GoalSummaryCard";
import { QuickActions } from "@/features/dashboard/components/QuickActions";
import { WorkoutCard } from "@/features/dashboard/components/WorkoutCard";
import { useDashboardProfile } from "@/features/dashboard/components/useDashboardProfile";
import { ActivityChart } from "@/features/dashboard/components/ActivityChart";

export function DashboardOverview() {
  const { profile } = useDashboardProfile();

  return (
    <div className="grid gap-5">
      <DashboardStats />

      <section className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <ActivityChart />
        <WorkoutCard />
      </section>

      <section className="grid min-w-0 gap-5 lg:grid-cols-2">
        <QuickActions />

        <GoalSummaryCard
          goals={profile.goals}
          activityLevel={profile.activityLevel}
        />
      </section>
    </div>
  );
}
