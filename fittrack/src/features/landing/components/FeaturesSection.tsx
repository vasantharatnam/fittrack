"use client";

import  AnimatedContainer from "../../../components/shared/AnimatedContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import { features } from "@/data/landing";

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="fit-container">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need to stay consistent, without the clutter."
          description="FitTrack brings together workout tracking, nutrition planning, analytics, and community motivation in a clean experience that feels effortless."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedContainer key={feature.title} delay={index * 0.08}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="h-full"
              />
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}