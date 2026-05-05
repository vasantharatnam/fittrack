"use client"

import AnimatedContainer from "@/components/shared/AnimatedContainer"
import PricingCard from "@/components/shared/PricingCard"
import SectionHeader from "@/components/shared/SectionHeader"

import { pricingPlans } from "@/data/landing"

export default function PricingSection(){
    return (
        <section id="pricing" className="section-padding bg-card/40">
           <div className="fit-container">
            <SectionHeader
             eyebrow="Pricing"
             title="Start free. Upgrade when your routine gets serious."
             description="Choose a plan that matches your fitness journey. You can begin with the free plan and unlock more insights whenever you need them."
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-5">
              {pricingPlans.map((plan, index) => (
            <AnimatedContainer key={plan.name} delay={index * 0.08}>
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                feature={plan.features}
                highlighted={plan.highlighted}
              />
            </AnimatedContainer>
          ))}
            </div>
           </div>
        </section>
    )
}