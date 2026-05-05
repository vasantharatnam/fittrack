

export default function DashboardPage(){
     return (
        <main className="min-h-screen bg-background px-6 py-8 text-foreground">
          <section className="mx-auto max-w-7xl">
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                   <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
                      Dashboard
                   </p>

                   <h1 className="mt-4 text-3xl font-bold">
                      Welcome back to FitTrack
                   </h1>

                   <p className="mt-3 text-muted-foreground">
                      Your post-login fitness overview will be built here.
                   </p>
              </div>
          </section>
        </main>
     )
}