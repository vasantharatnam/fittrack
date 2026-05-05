import Image from "next/image";
import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/constants";
import  Navbar  from '../components/layout/Navbar';
import HeroSection from "@/features/landing/components/HeroSection";
import {FeaturesSection }from "@/features/landing/components/FeaturesSection";
import  { SocialProofSection }  from "@/features/landing/components/SocialProofSection";

export default function Home() {
  return (
      <main className="min-h-screen overflow-hidden bg-background text-foreground">
       <Navbar />
       <HeroSection/>
       <SocialProofSection />
      <FeaturesSection />
    </main>
  );
}
