"use client";

import { motion } from "framer-motion";
import { dashboardStats } from "@/data/dashboard";

export function DashboardStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.07,
              ease: "easeOut",
            }}
            className="rounded-3xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>

                <p className="mt-2 text-3xl font-black tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold text-primary">
              {stat.trend}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}