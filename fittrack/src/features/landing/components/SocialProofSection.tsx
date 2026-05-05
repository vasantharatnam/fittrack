"use client"


import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { heroStats } from "@/data/landing";

const partnerLogos = ["Pulse", "MoveWell", "CoreFit", "ZenRun", "NutriLab"];


export function SocialProofSection() {
  return (
    <section className="border-y bg-card/40 py-10">
      <div className="fit-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-1 text-yellow-500 lg:justify-start">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-5 fill-current" />
              ))}
            </div>

            <p className="mt-3 text-center text-lg font-bold lg:text-left">
              Trusted by fitness enthusiasts, busy professionals, and wellness teams.
            </p>

            <p className="mt-2 text-center text-sm text-muted-foreground lg:text-left">
              Loved for its clean design, simple tracking, and habit-first wellness experience.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="rounded-3xl border bg-background/70 p-5 text-center shadow-sm"
              >
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.06,
                ease: "easeOut",
              }}
              className="flex h-16 items-center justify-center rounded-2xl border bg-background/70 text-sm font-black tracking-tight text-muted-foreground transition-colors hover:text-foreground"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}