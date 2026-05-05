"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Activity , ArrowLeft , ArrowRight,  CheckCircle2} from "lucide-react";
import { useMemo , useState} from 'react';
import { Button } from "@/components/ui/button"
import { StepIndicator } from "@/components/shared/StepIndicator";
import { ROUTES } from "@/lib/constants";
import { ActivityLevelStep } from "../steps/ActivityLevelStep";
import CreateAccountStep from '../steps/CreateAccountStep';
import { FitnessGoalsStep } from "../steps/FitnessGoalsStep";
import { PersonalDetailsStep } from "../steps/PersonalDetailsStep";
import ProfileSetupStep from "../steps/ProfileSetupStep";

import { defaultSignupFormData } from "../type";
import type { SignupStep } from "../type";
import type { SignupFormData } from "../type";

const TOTAL_STEPS = 5;

const stepTitles: Record<SignupStep, string> = {
    1: "Create Account",
    2: "Personal Details",
    3: "Fitness Goals",
    4: "Activity Level",
    5: "Profile Setup"
};


export default function SignupFlow(){
     
    const [currentStep , setCurrentStep] = useState<SignupStep>(1);
    const [formData , setFormData ] = useState<SignupFormData>(defaultSignupFormData);

    const [isCompleted , setIsCompleted] =  useState(false);

    const canGoBack = currentStep > 1;

    const  currentStepTitle = useMemo( ()=> stepTitles[currentStep] , [currentStep]);

    function goBack(){
         if(!canGoBack){
            return;
         }
         setCurrentStep((previousStep) => (previousStep-1) as SignupStep)
    }

    function goNext(){
        if(currentStep === TOTAL_STEPS){
          localStorage.setItem("fittrack-profile", JSON.stringify(formData));
          setIsCompleted(true);
          return;
        }

        setCurrentStep((previousStep) => (previousStep + 1) as SignupStep);
    }

    function skipStep(){
        if(currentStep === 4 || currentStep === 5){
            goNext()
        }
    }

      function renderStep() {
    switch (currentStep) {
      case 1:
        return (
          <CreateAccountStep
            fullName={formData.fullName}
            email={formData.email}
          />
        );

      case 2:
        return <PersonalDetailsStep />;

      case 3:
        return <FitnessGoalsStep />;

      case 4:
        return <ActivityLevelStep />;

      case 5:
        return <ProfileSetupStep />;

      default:
        return null;
    }
  }

   if (isCompleted) {
    return <OnboardingSuccess />;
   }

   return (
       <main className="premium-gradient flex min-h-screen items-center px-4 py-6 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <aside className="hidden lg:block">
          <Link href={ROUTES.home} className="inline-flex items-center gap-2">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Activity className="size-5" />
            </span>

            <span className="text-2xl font-black tracking-tight">FitTrack</span>
          </Link>

          <div className="mt-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Premium onboarding
            </p>

            <h2 className="mt-4 text-balance text-5xl font-black tracking-tight">
              Your plan should feel personal from day one.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
              A guided setup helps FitTrack understand your goals, lifestyle,
              and preferences before you enter the dashboard.
            </p>
          </div>

          <div className="mt-10 grid max-w-md gap-4">
            {Object.entries(stepTitles).map(([step, title]) => {
              const stepNumber = Number(step);
              const isActive = stepNumber === currentStep;
              const isDone = stepNumber < currentStep;

              return (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-3xl border bg-background/70 p-4 backdrop-blur"
                >
                  <div
                    className={
                      isActive || isDone
                        ? "flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
                        : "flex size-10 items-center justify-center rounded-2xl bg-muted text-muted-foreground"
                    }
                  >
                    {isDone ? (
                      <CheckCircle2 className="size-5" />
                    ) : (
                      <span className="text-sm font-black">{stepNumber}</span>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="text-xs text-muted-foreground">
                      Step {stepNumber} of {TOTAL_STEPS}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        <section className="rounded-[2rem] border bg-card/90 p-5 shadow-2xl shadow-black/5 backdrop-blur-xl sm:p-8">
          <div className="mb-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <Link
                href={ROUTES.home}
                className="inline-flex items-center gap-2 lg:hidden"
              >
                <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Activity className="size-5" />
                </span>
                <span className="text-xl font-black">FitTrack</span>
              </Link>

              <p className="ml-auto rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground">
                {currentStepTitle}
              </p>
            </div>

            <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          </div>

          <div className="min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              disabled={!canGoBack}
              className="rounded-full"
            >
              <ArrowLeft className="mr-2 size-4" />
              Back
            </Button>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {(currentStep === 4 || currentStep === 5) && (
                <button
                  type="button"
                  onClick={skipStep}
                  className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
                >
                  Skip for now
                </button>
              )}

              <Button type="button" onClick={goNext} className="rounded-full">
                {currentStep === TOTAL_STEPS ? "Complete setup" : "Continue"}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
   );
} 

function OnboardingSuccess() {
  return (
    <main className="premium-gradient flex min-h-screen items-center justify-center px-4 py-8 text-foreground">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-xl rounded-[2rem] border bg-card/90 p-8 text-center shadow-2xl shadow-black/5 backdrop-blur-xl"
      >
        <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground">
          <CheckCircle2 className="size-8" />
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight">
          Welcome to FitTrack!
        </h1>

        <p className="mt-4 leading-7 text-muted-foreground">
          Your profile has been created. You&apos;re ready to explore your fitness
          dashboard.
        </p>

        <Button asChild className="mt-8 rounded-full">
          <Link href={ROUTES.dashboard}>
            Go to Dashboard
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </motion.div>
    </main>
  );
}