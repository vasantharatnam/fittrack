"use client";

import { dashboardNavItems } from "@/data/dashboard";
import { cn } from "@/lib/utils";

export function DashboardBottomNav() {
  const visibleItems = dashboardNavItems.slice(0, 4);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/90 px-3 py-2 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-4 gap-1">
        {visibleItems.map((item, index) => {
          const Icon = item.icon;
          const active = index === 0;

          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-xs font-bold transition-all",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="mb-1 size-5" />
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}