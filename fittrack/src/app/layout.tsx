import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitTrack — Fitness & Wellness Platform",
  description:
    "A premium fitness and wellness platform for tracking workouts, nutrition, progress, and personal goals.",
  keywords: [
    "fitness",
    "wellness",
    "workout tracker",
    "nutrition",
    "health dashboard",
    "FitTrack",
  ],
  openGraph: {
    title: "FitTrack — Fitness & Wellness Platform",
    description:
      "Track workouts, nutrition, goals, and progress with a premium wellness dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}