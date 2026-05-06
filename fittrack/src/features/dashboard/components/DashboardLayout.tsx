"use client";

import type { ReactNode } from "react";
import { DashboardBottomNav } from "@/features/dashboard/components/DashboardBottomNav";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";
import { useDashboardProfile } from "@/features/dashboard/components/useDashboardProfile";
import { DashboardSkeleton } from "@/features/dashboard/components/DashboardSkeleton";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { profile, isLoading } = useDashboardProfile();

  return (
    <main className="relative min-h-screen overflow-hidden bg-background pb-24 text-foreground lg:pb-0 lg:pl-72">
      <div
        aria-hidden="true"
        className="soft-grid-bg pointer-events-none fixed inset-0 opacity-[0.18]"
      />

      <DashboardSidebar />

      <div className="relative z-10 lg:p-8">
        <DashboardHeader
          fullName={profile.fullName}
          username={profile.username}
          avatarUrl={profile.avatarUrl}
        />

        <div className="px-4 py-6 sm:px-6 lg:px-0 lg:py-8">
          {isLoading ? <DashboardSkeleton /> : children}
        </div>
      </div>

      <DashboardBottomNav />
    </main>
  );
}
