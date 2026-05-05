import Navbar from "../components/layout/Navbar";
import HeroSection from "@/features/landing/components/HeroSection";
import { FeaturesSection } from "@/features/landing/components/FeaturesSection";
import { SocialProofSection } from "@/features/landing/components/SocialProofSection";
import TestimonialSection from "@/features/landing/components/TestimonialSection";
import { HowItWorksSection } from "@/features/landing/components/HowItWorksSection";
import PricingSection from "@/features/landing/components/PricingSection";
import FinalCTASection from "@/features/landing/components/FinalCTASection";
import { Footer } from "@/components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PricingSection />
       <FinalCTASection />
      <Footer />
    </main>
  );
}
