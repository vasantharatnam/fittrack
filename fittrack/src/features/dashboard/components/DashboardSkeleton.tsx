export function DashboardSkeleton() {
  return (
    <div className="grid gap-5">
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-3xl border bg-card p-5 shadow-sm"
          >
            <div className="h-4 w-28 animate-pulse rounded-full bg-muted" />
            <div className="mt-4 h-8 w-20 animate-pulse rounded-full bg-muted" />
            <div className="mt-6 h-4 w-36 animate-pulse rounded-full bg-muted" />
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border bg-card p-6 shadow-sm">
          <div className="h-4 w-24 animate-pulse rounded-full bg-muted" />
          <div className="mt-4 h-8 w-48 animate-pulse rounded-full bg-muted" />
          <div className="mt-8 h-72 animate-pulse rounded-3xl bg-muted" />
        </div>

        <div className="rounded-3xl border bg-card p-6 shadow-sm">
          <div className="h-4 w-24 animate-pulse rounded-full bg-muted" />
          <div className="mt-4 h-8 w-48 animate-pulse rounded-full bg-muted" />

          <div className="mt-8 grid gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-20 animate-pulse rounded-2xl bg-muted"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="h-80 animate-pulse rounded-3xl border bg-muted" />
        <div className="h-80 animate-pulse rounded-3xl border bg-muted" />
      </section>
    </div>
  );
}