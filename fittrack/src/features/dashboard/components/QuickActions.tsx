"use client";

import { BarChart3, Dumbbell, Plus, Salad } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    label: "Start Workout",
    description: "Begin your planned session",
    icon: Dumbbell,
  },
  {
    label: "Log Meal",
    description: "Add nutrition details",
    icon: Salad,
  },
  {
    label: "View Progress",
    description: "Open analytics overview",
    icon: BarChart3,
  },
];

export function QuickActions() {
  return (
    <div className="rounded-3xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Quick Actions
          </p>

          <h2 className="mt-3 text-2xl font-black">What would you like to do?</h2>
        </div>

        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Plus className="size-6" />
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              className="flex items-center gap-4 rounded-2xl border bg-background/70 p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Icon className="size-5" />
              </div>

              <div>
                <p className="font-bold">{action.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <Button variant="outline" className="mt-6 w-full rounded-full">
        Customize dashboard
      </Button>
    </div>
  );
}
