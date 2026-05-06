"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Dumbbell, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "../../../components/shared/EmptyState";
import { todaysWorkout } from "@/data/dashboard";
import { cn } from "@/lib/utils";

export function WorkoutCard() {
  const [completedIds, setCompletedIds] = useState<string[]>(
    todaysWorkout.filter((item) => item.completed).map((item) => item.id)
  );

  const completedCount = completedIds.length;
  const totalCount = todaysWorkout.length;
  const progress =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  function toggleExercise(id: string) {
    setCompletedIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((itemId) => itemId !== id)
        : [...previousIds, id]
    );
  }

  return (
    <div id="workouts" className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Today
          </p>

          <h2 className="mt-3 text-2xl font-black">Today&apos;s workout</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Complete your recommended movement plan for today.
          </p>
        </div>

        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Dumbbell className="size-6" />
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-secondary p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-bold text-secondary-foreground">
            Workout progress
          </p>

          <p className="text-sm font-black text-secondary-foreground">
            {progress}%
          </p>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-background">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {todaysWorkout.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            icon={ListChecks}
            title="No workout planned"
            description="You do not have a workout scheduled for today. Start a custom workout or check back later."
            actionLabel="Create workout"
          />
        </div>
      ) : (
        <div className="mt-6 grid gap-3">
          {todaysWorkout.map((exercise) => {
            const completed = completedIds.includes(exercise.id);

            return (
              <button
                key={exercise.id}
                type="button"
                onClick={() => toggleExercise(exercise.id)}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border bg-background/70 p-4 text-left transition-all duration-200 hover:border-primary/40",
                  completed && "border-primary/40 bg-primary/5"
                )}
              >
                {completed ? (
                  <CheckCircle2 className="size-6 shrink-0 text-primary" />
                ) : (
                  <Circle className="size-6 shrink-0 text-muted-foreground" />
                )}

                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "font-bold",
                      completed && "text-muted-foreground line-through"
                    )}
                  >
                    {exercise.title}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {exercise.meta}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      <Button className="mt-6 w-full rounded-full">Start Workout</Button>
    </div>
  );
}