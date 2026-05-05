import Image from "next/image";

export default function Home() {
  return (
     <main className="min-h-screen bg-background text-foreground">
        <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
               <div className="text-center">
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                          FitTrack
                      </p>

                      <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-light md:text-7xl">
                         Your premium fitness journey starts here
                      </h1>

                      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                         Track workouts, build better habits, and understand your wellness program with 
                         a clean, modern fitness dashboard.
                      </p>
               </div>
        </section>
     </main>
  );
}
