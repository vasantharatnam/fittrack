import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed bg-background/70 p-8 text-center">
      <div className="flex size-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
        <Icon className="size-7" />
      </div>

      <h3 className="mt-5 text-xl font-black">{title}</h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {actionLabel ? (
        <Button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-full"
        >
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}