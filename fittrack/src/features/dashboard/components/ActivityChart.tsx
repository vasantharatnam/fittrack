"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart3 } from "lucide-react";
import { weeklyActivityData } from "@/data/dashboard";

export function ActivityChart() {
  return (
    <div id="progress" className="rounded-3xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Activity
          </p>

          <h2 className="mt-3 text-2xl font-black">Weekly activity</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Your active minutes across the current week.
          </p>
        </div>

        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <BarChart3 className="size-6" />
        </div>
      </div>

      <div
        className="h-64 w-full sm:h-72"
        role="img"
        aria-label="Bar chart showing active minutes from Monday to Sunday"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyActivityData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className="stroke-border"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              className="text-xs"
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              className="text-xs"
              width={32}
            />

            <Tooltip
              cursor={{ opacity: 0.08 }}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--card))",
                color: "hsl(var(--card-foreground))",
              }}
              formatter={(value) => [`${value} min`, "Active time"]}
            />

            <Bar
              dataKey="minutes"
              radius={[12, 12, 0, 0]}
              fill="var(--primary)"
              barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ChartInsight label="Total active time" value="310 min" />
        <ChartInsight label="Best day" value="Saturday" />
        <ChartInsight label="Weekly change" value="+18%" />
      </div>
    </div>
  );
}

function ChartInsight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-background/70 p-4">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-black">{value}</p>
    </div>
  );
}
