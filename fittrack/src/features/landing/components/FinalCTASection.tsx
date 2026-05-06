"use client"


import Link from "next/link"
import {ArrowRight , Mail , Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import GradientBlob from '../../../components/shared/GradientBlob';
import { ROUTES } from "@/lib/constants";

export default function FinalCTASection(){
  return (
      <section className = "section-padding relative overflow-hidden bg-background">
          <GradientBlob className="left-10 top-10 size-72"/>
          <GradientBlob className="bottom-0 right-10 size-80 bg-accent/30"/>

          <div className="fit-container relative z-10">
              <motion.div
               initial={{ opacity: 0 , y:28}}
               whileInView={{ opacity : 1 , y:0 }}
               viewport={{once: true , margin: "-80px"}}
               transition={{ duration: 0.55 , ease: "easeOut"}}
               className="relative overflow-hidden rounded-[1.75rem] border bg-primary px-5 py-10 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-20"
              >
               <div className="absolute inset-0 opacity-20">
                   <div className="absolute left-10 top-10 size-32 rounded-full bg-white blur-3xl" />
                   <div className="absolute bottom-10 right-10 size-40 rounded-full bg-white blur-3xl" />
               </div>
               
               <div className="relative z-10 mx-auto max-w-3xl">
                  <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-3xl bg-white/15">
                    <Sparkles className="size-7" />
                  </div>

                  <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                     Ready to build a healthier routine that actually lasts?
                 </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
                    Start your wellness journey with a guided onboarding flow , clear goals, and a dashboard
                    that keeps your progress visible every day
                  </p>

                  <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-[1.5rem] bg-white/10 p-2 backdrop-blur sm:flex-row sm:rounded-full">
                   <div className="flex flex-1 items-center gap-3 rounded-full bg-background px-4 text-foreground">
                    <Mail className="size-4 text-muted-foreground" />
                      <input
                         type="email"
                         placeholder="Enter your email"
                         aria-label="Email address"
                        className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                       />
                   </div>

                     <Button
                        asChild
                        variant="secondary"
                        className="h-12 rounded-full px-6 font-bold"
                     >
                       <Link href={ROUTES.signup}>
                          Get Started
                         <ArrowRight className="ml-2 size-4" />
                       </Link>
                      </Button>
                 </div>
               </div>
              </motion.div>
          </div>
      </section>
  )
}
