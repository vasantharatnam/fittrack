"use client";

import AnimatedContainer from "@/components/shared/AnimatedContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/data/landing";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="fit-container">
        <SectionHeader
          eyebrow="Stories"
          title="Loved by people building healthier routines."
          description="Users choose FitTrack because it feels simple, motivating and premium without becoming overwhelming"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedContainer key={testimonial.name} delay={index * 0.08}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
