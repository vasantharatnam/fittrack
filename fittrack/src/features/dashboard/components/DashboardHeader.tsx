"use client";

import Link from "next/link";
import { Activity, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../../../components/shared/ThemeToggle";
import { ROUTES } from "@/lib/constants";

type DashboardHeaderProps = {
  fullName?: string;
  username?: string;
  avatarUrl?: string;
};

export function DashboardHeader({
  fullName,
  username,
  avatarUrl,
}: DashboardHeaderProps) {
  const firstName = fullName?.split(" ")[0] || "there";
  const initials =
    fullName
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "FT";

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl lg:static lg:border-b-0 lg:bg-transparent lg:backdrop-blur-0">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-0 lg:py-0">
        <Link href={ROUTES.home} className="inline-flex items-center gap-2 lg:hidden">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Activity className="size-5" />
          </span>

          <span className="text-xl font-black">FitTrack</span>
        </Link>

        <div className="hidden lg:block">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight">
            Welcome back, {firstName}
          </h1>

          <p className="mt-2 text-muted-foreground">
            Here&apos;s your fitness overview for today.
          </p>
        </div>

        <div className="ml-auto flex min-w-0 items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Search"
            className="hidden rounded-full bg-background/70 sm:inline-flex"
          >
            <Search className="size-4" />
          </Button>

          <ThemeToggle />

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Notifications"
            className="rounded-full bg-background/70"
          >
            <Bell className="size-4" />
          </Button>

          <div className="flex min-w-0 items-center gap-3 rounded-full border bg-card py-1 pl-1 pr-2 sm:pr-3">
            <div className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-sm font-black text-primary">
              {avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={avatarUrl} alt="Profile avatar" className="size-full object-cover" />
              ) : (
                initials
              )}
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-none">{firstName}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                @{username || "fittrack_user"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-6 lg:hidden">
        <h1 className="text-2xl font-black tracking-tight">
          Welcome back, {firstName}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Here&apos;s your fitness overview for today.
        </p>
      </div>
    </header>
  );
}
