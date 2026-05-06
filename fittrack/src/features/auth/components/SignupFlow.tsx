"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/shared/StepIndicator";
import { ROUTES } from "@/lib/constants";
import { ActivityLevelStep } from "../steps/ActivityLevelStep";
import CreateAccountStep from "../steps/CreateAccountStep";
import { FitnessGoalsStep } from "../steps/FitnessGoalsStep";
import { PersonalDetailsStep } from "../steps/PersonalDetailsStep";
import { ProfileSetupStep } from "../steps/ProfileSetupStep";
import { submitSignupProfile } from "@/features/auth/api";
import { saveSignupProfile } from "@/features/auth/storage";
import type {
  ActivityLevelFormValues,
  PersonalDetailsFormValues,
  FitnessGoalsFormValues,
  ProfileSetupFormValues,
} from "@/features/auth/schemas";

import { defaultSignupFormData } from "../type";
import type { SignupStep } from "../type";
import type { SignupFormData } from "../type";

const TOTAL_STEPS = 5;

const stepTitles: Record<SignupStep, string> = {
  1: "Create Account",
  2: "Personal Details",
  3: "Fitness Goals",
  4: "Activity Level",
  5: "Profile Setup",
};

export default function SignupFlow() {
  const [currentStep, setCurrentStep] = useState<SignupStep>(1);
  const [formData, setFormData] = useState<SignupFormData>(
    defaultSignupFormData,
  );

  const [stepValidity, setStepValidity] = useState<Record<SignupStep, boolean>>(
    {
      1: false,
      2: false,
      3: false,
      4: true,
      5: true,
    },
  );

  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canGoBack = currentStep > 1;

  const currentStepTitle = useMemo(
    () => stepTitles[currentStep],
    [currentStep],
  );

  const handleCreateAccountChange = useCallback(
    (
      values: {
        fullName: string;
        email: string;
        password: string;
        confirmPassword: string;
      },
      isValid: boolean,
    ) => {
      setFormData((previousData) => {
        const isSame =
          previousData.fullName === values.fullName &&
          previousData.email === values.email &&
          previousData.password === values.password &&
          previousData.confirmPassword === values.confirmPassword;

        if (isSame) {
          return previousData;
        }

        return {
          ...previousData,
          ...values,
        };
      });

      setStepValidity((previousValidity) => {
        if (previousValidity[1] === isValid) {
          return previousValidity;
        }

        return {
          ...previousValidity,
          1: isValid,
        };
      });
    },
    [],
  );
  const handlePersonalDetailsChange = useCallback(
    (values: PersonalDetailsFormValues, isValid: boolean) => {
      setFormData((previousData) => {
        const isSame =
          previousData.dateOfBirth === values.dateOfBirth &&
          previousData.gender === values.gender &&
          previousData.height === values.height &&
          previousData.weight === values.weight &&
          previousData.unitSystem === values.unitSystem;

        if (isSame) {
          return previousData;
        }

        return {
          ...previousData,
          ...values,
        };
      });

      setStepValidity((previousValidity) => {
        if (previousValidity[2] === isValid) {
          return previousValidity;
        }

        return {
          ...previousValidity,
          2: isValid,
        };
      });
    },
    [],
  );

  const handleFitnessGoalsChange = useCallback(
    (values: FitnessGoalsFormValues, isValid: boolean) => {
      setFormData((previousData) => {
        const previousGoals = previousData.goals.join(",");
        const nextGoals = values.goals.join(",");

        if (previousGoals === nextGoals) {
          return previousData;
        }

        return {
          ...previousData,
          goals: values.goals,
        };
      });

      setStepValidity((previousValidity) => {
        if (previousValidity[3] === isValid) {
          return previousValidity;
        }

        return {
          ...previousValidity,
          3: isValid,
        };
      });
    },
    [],
  );

  const handleActivityLevelChange = useCallback(
    (values: ActivityLevelFormValues, isValid: boolean) => {
      setFormData((previousData) => {
        if (previousData.activityLevel === values.activityLevel) {
          return previousData;
        }

        return {
          ...previousData,
          activityLevel: values.activityLevel,
        };
      });

      setStepValidity((previousValidity) => {
        if (previousValidity[4] === isValid) {
          return previousValidity;
        }

        return {
          ...previousValidity,
          4: isValid,
        };
      });
    },
    [],
  );

  const handleProfileSetupChange = useCallback(
    (values: ProfileSetupFormValues, isValid: boolean) => {
      setFormData((previousData) => {
        const isSame =
          previousData.avatarUrl === values.avatarUrl &&
          previousData.username === values.username &&
          previousData.bio === values.bio &&
          previousData.notifications.workoutReminders ===
            values.notifications.workoutReminders &&
          previousData.notifications.weeklyReports ===
            values.notifications.weeklyReports &&
          previousData.notifications.communityUpdates ===
            values.notifications.communityUpdates;

        if (isSame) {
          return previousData;
        }

        return {
          ...previousData,
          avatarUrl: values.avatarUrl ?? "",
          username: values.username,
          bio: values.bio ?? "",
          notifications: values.notifications,
        };
      });

      setStepValidity((previousValidity) => {
        if (previousValidity[5] === isValid) {
          return previousValidity;
        }

        return {
          ...previousValidity,
          5: isValid,
        };
      });
    },
    [],
  );

  function goBack() {
    if (!canGoBack) {
      return;
    }
    setCurrentStep((previousStep) => (previousStep - 1) as SignupStep);
  }

  async function goNext() {
    if (!stepValidity[currentStep] || isSubmitting) return;

    if (currentStep === TOTAL_STEPS) {
      setIsSubmitting(true);

      try {
        saveSignupProfile(formData);
        await submitSignupProfile(formData);
      } catch {
        saveSignupProfile(formData);
      } finally {
        setIsSubmitting(false);
        setIsCompleted(true);
      }

      return;
    }

    setCurrentStep((previousStep) => (previousStep + 1) as SignupStep);
  }

  function skipStep() {
    if (currentStep === 4 || currentStep === 5) {
      goNext();
    }
  }

  function renderStep() {
    switch (currentStep) {
      case 1:
        return (
          <CreateAccountStep
            values={{
              fullName: formData.fullName,
              email: formData.email,
              password: formData.password,
              confirmPassword: formData.confirmPassword,
            }}
            onChange={handleCreateAccountChange}
          />
        );

      case 2:
        return (
          <PersonalDetailsStep
            values={{
              dateOfBirth: formData.dateOfBirth,
              gender: formData.gender as PersonalDetailsFormValues["gender"],
              height: formData.height,
              weight: formData.weight,
              unitSystem: formData.unitSystem,
            }}
            onChange={handlePersonalDetailsChange}
          />
        );

      case 3:
        return (
          <FitnessGoalsStep
            values={{
              goals: formData.goals,
            }}
            onChange={handleFitnessGoalsChange}
          />
        );

      case 4:
        return (
          <ActivityLevelStep
            values={{
              activityLevel:
                formData.activityLevel === ""
                  ? "sedentary"
                  : formData.activityLevel,
            }}
            onChange={handleActivityLevelChange}
          />
        );

      case 5:
        return (
          <ProfileSetupStep
            values={{
              avatarUrl: formData.avatarUrl,
              username:
                formData.username ||
                formData.fullName
                  .toLowerCase()
                  .replace(/\s+/g, "_")
                  .slice(0, 20),
              bio: formData.bio,
              notifications: formData.notifications,
            }}
            onChange={handleProfileSetupChange}
          />
        );

      default:
        return null;
    }
  }

  if (isCompleted) {
    return <OnboardingSuccess fullName={formData.fullName} />;
  }

  return (
    <main className="premium-gradient flex min-h-screen items-start px-3 py-4 text-foreground sm:items-center sm:px-6 sm:py-6 lg:px-8">
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

        <section className="w-full rounded-[1.5rem] border bg-card/90 p-4 shadow-2xl shadow-black/5 backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
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

          <div className="min-h-[360px] sm:min-h-[420px]">
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

          <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              disabled={!canGoBack}
              className="w-full rounded-full sm:w-auto"
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

              <Button
                type="button"
                onClick={goNext}
                disabled={!stepValidity[currentStep] || isSubmitting}
                className="w-full rounded-full sm:w-auto"
              >
                {isSubmitting
                  ? "Saving..."
                  : currentStep === TOTAL_STEPS
                    ? "Complete setup"
                    : "Continue"}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function OnboardingSuccess({ fullName }: { fullName: string }) {
  return (
    <main className="premium-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 text-foreground">
      <SuccessConfetti />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl rounded-[2rem] border bg-card/90 p-8 text-center shadow-2xl shadow-black/5 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0.7, rotate: -12 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 14,
            delay: 0.15,
          }}
          className="mx-auto flex size-20 items-center justify-center rounded-[2rem] bg-primary text-primary-foreground shadow-lg shadow-primary/20"
        >
          <CheckCircle2 className="size-10" />
        </motion.div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Setup complete
        </p>

        <h1 className="mt-3 text-balance text-4xl font-black tracking-tight sm:text-5xl">
          Welcome to FitTrack{fullName ? `, ${fullName.split(" ")[0]}` : ""}!
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">
          Your profile has been created and saved locally for this demo. Your
          dashboard is ready with your goals, activity preferences, and wellness
          overview.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Button asChild className="rounded-full">
            <Link href={ROUTES.dashboard}>
              Go to Dashboard
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" className="rounded-full">
            <Link href={ROUTES.home}>Back to Home</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}

function SuccessConfetti() {
  const particles = [
    { left: "12%", top: "18%", delay: 0, size: "size-3" },
    { left: "22%", top: "72%", delay: 0.15, size: "size-2" },
    { left: "35%", top: "12%", delay: 0.25, size: "size-2.5" },
    { left: "64%", top: "20%", delay: 0.1, size: "size-3" },
    { left: "78%", top: "70%", delay: 0.2, size: "size-2" },
    { left: "88%", top: "30%", delay: 0.3, size: "size-2.5" },
  ];

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{ opacity: [0, 1, 1, 0], y: [-10, -70], scale: [0.6, 1, 0.8] }}
          transition={{
            duration: 2.4,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeOut",
          }}
          className={`absolute ${particle.size} rounded-full bg-primary`}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
}
