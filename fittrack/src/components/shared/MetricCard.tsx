import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";


type MetricCardProps = {
    label: string;
    value: string;
    icon?: LucideIcon;
    trend?: string;
    className?: string;
}

export default function MetricCard({
    label,
    value,
    icon: Icon,
    trend,
    className
}: MetricCardProps){
     return (
          <div
      className={cn(
        "rounded-3xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-black tracking-tight">{value}</p>
        </div>

        {Icon ? (
          <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="size-5" />
          </div>
        ) : null}
      </div>

      {trend ? (
        <p className="mt-4 text-sm font-semibold text-primary">{trend}</p>
      ) : null}
    </div>
     )
}