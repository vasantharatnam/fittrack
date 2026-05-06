import Link from "next/link";
import { Activity } from "lucide-react";
import { dashboardNavItems } from "@/data/dashboard";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r bg-card/80 p-5 backdrop-blur-xl lg:block">
      <Link href={ROUTES.home} className="inline-flex items-center gap-2">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
          <Activity className="size-5" />
        </span>

        <span className="text-2xl font-black tracking-tight">FitTrack</span>
      </Link>

      <nav className="mt-10 grid gap-2" aria-label="Dashboard navigation">
        {dashboardNavItems.map((item, index) => {
          const Icon = item.icon;
          const active = index === 0;

          return (
            <a
              key={item.label}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all",
                active
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="size-5" />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="absolute bottom-5 left-5 right-5 rounded-3xl border bg-background/70 p-5">
        <p className="text-sm font-bold">Today&apos;s focus</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Complete your workout and keep your streak alive.
        </p>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[72%] rounded-full bg-primary" />
        </div>
      </div>
    </aside>
  );
}
