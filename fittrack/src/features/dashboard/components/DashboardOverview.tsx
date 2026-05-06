"use client";

import { Activity, Dumbbell, Flame, Trophy } from "lucide-react";

const overviewCards = [
  {
    label: "Calories Burned",
    value: "2,480",
    helper: "+12% from last week",
    icon: Flame,
  },
  {
    label: "Workouts This Week",
    value: "5",
    helper: "2 more than last week",
    icon: Dumbbell,
  },
  {
    label: "Streak Days",
    value: "14",
    helper: "Keep it going",
    icon: Trophy,
  },
  {
    label: "Goal Progress",
    value: "82%",
    helper: "Almost there",
    icon: Activity,
  },
];

export function DashboardOverview() {
  return (
    <div className="grid gap-5">
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="rounded-3xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-2 text-3xl font-black tracking-tight">
                    {card.value}
                  </p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
              </div>

              <p className="mt-4 text-sm font-semibold text-primary">
                {card.helper}
              </p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="min-h-80 rounded-3xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Activity
          </p>

          <h2 className="mt-3 text-2xl font-black">Weekly activity</h2>

          <p className="mt-2 text-muted-foreground">
            Chart will be added in the next commits.
          </p>
        </div>

        <div className="min-h-80 rounded-3xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Today
          </p>

          <h2 className="mt-3 text-2xl font-black">Today&apos;s workout</h2>

          <p className="mt-2 text-muted-foreground">
            Workout checklist will be added in the next commit.
          </p>
        </div>
      </section>
    </div>
  );
}