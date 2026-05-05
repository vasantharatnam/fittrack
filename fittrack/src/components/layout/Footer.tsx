import Link from "next/link";
import { Activity } from "lucide-react";
import { navLinks } from "@/data/landing";
import { ROUTES } from "@/lib/constants";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";


const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Dashboard", href: ROUTES.dashboard },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter",   Icon : FaXTwitter,    href: "#" },
  { label: "Instagram", Icon : FaInstagram,   href: "#" },
  { label: "LinkedIn",  Icon : FaLinkedinIn,  href: "#" },
  { label: "GitHub",    Icon : FaGithub,      href: "#" },
  { label: "Facebook",  Icon : FaFacebookF,   href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card/40">
      <div className="fit-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <Link
              href={ROUTES.home}
              className="inline-flex items-center gap-2"
              aria-label="Go to FitTrack home"
            >
              <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Activity className="size-5" />
              </span>

              <span className="text-xl font-black tracking-tight">FitTrack</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
              A premium fitness and wellness platform designed to help people build
              consistent habits, track progress, and stay motivated.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.Icon;

                return(
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border bg-background text-xs font-black text-muted-foreground transition-colors hover:text-primary"
                >
                   <Icon className="size-4" />
                </a>
                )
               })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold">{group.title}</h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FitTrack. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            {navLinks.map((link) => (
              <a
                key={`bottom-${link.href}`}
                href={link.href}
                className="font-medium transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
