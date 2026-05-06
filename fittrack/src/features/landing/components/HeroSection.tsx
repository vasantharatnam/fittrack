"use client";


import Link from "next/link"
import { motion }  from "framer-motion";

import {
    ArrowRight,
    CheckCircle2,
    Flame,
    Footprints,
    HeartPulse,
    PlayCircle,
    Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import GradientBlob from '../../../components/shared/GradientBlob';
import { heroStats } from "@/data/landing";
import { ROUTES } from "@/lib/constants";


export  default function HeroSection() {
  return (
    <section className="premium-gradient relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-20">
      <GradientBlob className="-left-24 top-24 size-80" />
      <GradientBlob className="-right-28 top-10 size-96 bg-accent/30" />
      <GradientBlob className="bottom-10 left-1/2 size-72 -translate-x-1/2 bg-primary/10" />

      <div className="fit-container relative z-10 grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur lg:mx-0">
            <Sparkles className="size-4" />
            Fitness, nutrition, and wellness in one beautiful place
          </div>

          <h1 className="text-balance text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Build healthy habits with a fitness companion that feels personal.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0">
            FitTrack helps you track workouts, plan nutrition, measure progress,
            and stay consistent with a premium wellness experience designed for
            everyday life.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button size="lg" asChild className="h-12 rounded-full px-6">
              <Link href={ROUTES.signup}>
                Get Started Free
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full bg-background/70 px-6 backdrop-blur"
            >
              <PlayCircle className="mr-2 size-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-3xl border bg-background/70 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <HeroMockup />
      </div>
    </section>
  );
}


function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 32 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
      className="relative mx-auto w-full max-w-sm sm:max-w-md"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card relative rounded-[1.75rem] p-3 sm:rounded-[2.25rem] sm:p-5"
      >
        <div className="rounded-[1.5rem] bg-card p-4 shadow-sm sm:rounded-[1.75rem] sm:p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Today&apos;s progress
              </p>
              <h2 className="mt-1 text-3xl font-black tracking-tight">
                82% complete
              </h2>
            </div>

            <div className="flex size-13 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <HeartPulse className="size-6" />
            </div>
          </div>

          <div className="rounded-3xl bg-secondary p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">Morning Run</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  5.2 km • 42 min
                </p>
              </div>

              <div className="flex size-10 items-center justify-center rounded-2xl bg-background text-primary">
                <Footprints className="size-5" />
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-background">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <MiniStat label="Calories" value="640" icon={<Flame className="size-5" />} />
            <MiniStat
              label="Streak"
              value="14d"
              icon={<CheckCircle2 className="size-5" />}
            />
          </div>

          <div className="mt-4 rounded-3xl border bg-background/70 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-bold">Weekly activity</p>
              <p className="text-sm font-semibold text-primary">+18%</p>
            </div>

            <div className="flex h-28 items-end gap-2">
              {[42, 58, 48, 76, 64, 92, 70].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{
                    duration: 0.65,
                    delay: 0.7 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex-1 rounded-t-full bg-primary/80"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, delay: 0.85 }}
        className="absolute -left-4 top-20 hidden rounded-3xl border bg-background/90 p-4 shadow-xl backdrop-blur sm:block"
      >
        <p className="text-sm font-medium text-muted-foreground">Heart rate</p>
        <p className="mt-1 text-2xl font-black">128 bpm</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, delay: 1 }}
        className="absolute -right-4 bottom-20 hidden rounded-3xl border bg-background/90 p-4 shadow-xl backdrop-blur sm:block"
      >
        <p className="text-sm font-medium text-muted-foreground">Goal</p>
        <p className="mt-1 text-2xl font-black">5/6 done</p>
      </motion.div>
    </motion.div>
  );
}


function MiniStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border bg-background/70 p-4">
      <div className="flex items-center justify-between">
        <div className="text-primary">{icon}</div>
      </div>

      <p className="mt-4 text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}
