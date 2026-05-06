"use client";

import type { ReactNode } from "react";
import { DashboardBottomNav } from "@/features/dashboard/components/DashboardBottomNav";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";
import { useDashboardProfile } from "@/features/dashboard/components/useDashboardProfile";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { profile } = useDashboardProfile();

  return (
    <main className="min-h-screen bg-background pb-24 text-foreground lg:pb-0 lg:pl-72">
      <DashboardSidebar />

      <div className="lg:p-8">
        <DashboardHeader
          fullName={profile.fullName}
          username={profile.username}
          avatarUrl={profile.avatarUrl}
        />

        <div className="px-4 py-6 sm:px-6 lg:px-0 lg:py-8">{children}</div>
      </div>

      <DashboardBottomNav />
    </main>
  );
}