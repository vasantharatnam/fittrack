import Image from "next/image";
import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/constants";
import { ThemeToggle } from "@/components/shared/ThemeToggle";



export default function Home() {
  return (
      <main className="min-h-screen overflow-hidden bg-background text-foreground">
       <div className="fixed right-5 top-5 z-50">
       <ThemeToggle />
      </div>
      <section className="premium-gradient relative flex min-h-screen items-center">
        <div className="fit-container relative z-10 grid items-center gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary lg:mx-0">
              Fitness, nutrition, and wellness in one beautiful place
            </div>

            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Your premium fitness journey starts here.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground lg:mx-0">
              Track workouts, build better habits, and understand your wellness progress
              with a clean, modern fitness dashboard.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="rounded-full">
                <Link href={ROUTES.signup}>
                  Get Started Free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-background/70 backdrop-blur"
              >
                <PlayCircle className="mr-2 size-4" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="glass-card relative mx-auto w-full max-w-md rounded-[2rem] p-5">
            <div className="rounded-[1.5rem] bg-card p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today&apos;s progress</p>
                  <h2 className="text-2xl font-bold">82% complete</h2>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  ⚡
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-secondary p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Morning Run</p>
                    <p className="text-sm text-muted-foreground">42 min</p>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-background">
                    <div className="h-full w-4/5 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border bg-background/70 p-4">
                    <p className="text-sm text-muted-foreground">Calories</p>
                    <p className="mt-2 text-2xl font-bold">640</p>
                  </div>

                  <div className="rounded-2xl border bg-background/70 p-4">
                    <p className="text-sm text-muted-foreground">Streak</p>
                    <p className="mt-2 text-2xl font-bold">14d</p>
                  </div>
                </div>

                <div className="rounded-2xl border bg-background/70 p-4">
                  <p className="mb-3 font-semibold">Weekly activity</p>
                  <div className="flex h-24 items-end gap-2">
                    {[35, 52, 44, 68, 58, 80, 62].map((value, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-full bg-primary/80"
                        style={{ height: `${value}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
