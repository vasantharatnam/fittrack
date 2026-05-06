"use client"

import Link from "next/link"
import { Activity, Menu , X } from "lucide-react"
import { useEffect , useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../shared/ThemeToggle"
import { navLinks } from "@/data/landing"
import { ROUTES } from "@/lib/constants"
import { cn } from "@/lib/utils"


export default function Navbar(){

    const [isScrolled , setIsScrolled] = useState(false);
    const [isMobileOpen , setIsMobileOpen] = useState(false);

    useEffect( () => {
       function handleScroll() {
         setIsScrolled(window.scrollY > 12);
       }
       
       handleScroll();
       window.addEventListener("scroll" , handleScroll);

       return () => window.removeEventListener("scroll" , handleScroll);

    }, [])

    function closeMobileMenu() {
    setIsMobileOpen(false);
  }

  return (
      <>
       <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="fit-container flex h-20 items-center justify-between">
          <Link
            href={ROUTES.home}
            className="group inline-flex items-center gap-2"
            aria-label="Go to FitTrack home"
          >
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
              <Activity className="size-5" />
            </span>

            <span className="text-xl font-black tracking-tight">FitTrack</span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-2 py-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Button variant="ghost" asChild className="rounded-full">
              <Link href={ROUTES.dashboard}>Dashboard</Link>
            </Button>

            <Button asChild className="rounded-full">
              <Link href={ROUTES.signup}>Get Started</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              className="rounded-full bg-background/70 backdrop-blur"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </nav>
      </header>
       {isMobileOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 flex h-full w-[min(88vw,380px)] flex-col border-l bg-background p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link
                href={ROUTES.home}
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-2"
              >
                <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Activity className="size-5" />
                </span>
                <span className="text-xl font-black">FitTrack</span>
              </Link>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="rounded-full"
              >
                <X className="size-5" />
              </Button>
            </div>

            <div className="mt-10 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto grid gap-3">
              <Button variant="outline" asChild className="rounded-full">
                <Link href={ROUTES.dashboard} onClick={closeMobileMenu}>
                  Dashboard
                </Link>
              </Button>

              <Button asChild className="rounded-full">
                <Link href={ROUTES.signup} onClick={closeMobileMenu}>
                  Get Started Free
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      ) : null}
      </>
  )

}
