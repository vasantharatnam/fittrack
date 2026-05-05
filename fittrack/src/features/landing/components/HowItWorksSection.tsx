"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import  SectionHeader  from '../../../components/shared/SectionHeader';
import { howItWorks } from "@/data/landing";


export function HowItWorksSection(){
    return (
        <section id="how-it-works" className="section-padding bg-card/40">
           <div className="fit-container">
               <SectionHeader 
                 eyebrow="How it Works"
                 title="From sign up to progress tracking in three simple steps"
                 description="FitTrack keeps the journey simple. Create your profile, define your goals, and start building consistent wellness habits."
               />
            
            <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
                <div className="absolute left-1/2 top-20 hidden h-px w-[70%] -translate-x-1/2 bg-border lg:block"/>
                          {
                            howItWorks.map((item , index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                     key={item.title}
                                     initial={{opacity: 0 ,y: 24}}
                                     whileInView={{opacity: 1 , y: 0}}
                                     viewport={{ once: true, margin: "-80px"}}
                                     transition={{
                                        duration:0.5,
                                        delay: index * 0.12,
                                        ease: "easeOut"
                                     }}
                                     className="relative rounded-3xl border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                     <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                        <Icon className="size-7"/>
                                     </div>

                                     <div className="mx-auto mt-5 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-black text-secondary-foreground">
                                       Step {item.step}
                                     </div>

                                     <h3 className="mt-4 text-2xl font-black">{item.title}</h3>

                                     <p className="mt-3 leading-7 text-muted-foreground">
                                      {item.description}
                                     </p>

                                      {index < howItWorks.length - 1 ? (
                                        <div className="absolute -right-5 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-primary shadow-sm lg:flex">
                                          <ArrowRight className="size-4" />
                                         </div>
                                      ) : null}

                                    </motion.div>
                                )
                            })}
              
               </div>
            </div>
        </section>
    );
}