"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  createAccountSchema,
  type CreateAccountFormValues,
} from "@/features/auth/schemas";

import { getPasswordStrength } from "@/features/auth/utils";
import { cn } from "@/lib/utils";

type CreateAccountStepProps = {
  values: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  onChange: (values: CreateAccountFormValues, isValid: boolean) => void;
};

export default function CreateAccountStep({
  values,
  onChange,
}: CreateAccountStepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    control,
    formState: { errors, isValid },
  } = useForm<CreateAccountFormValues>({
    resolver: zodResolver(createAccountSchema),
    mode: "onChange",
    defaultValues: values,
  });

  const fullName = useWatch({ control, name: "fullName" }) ?? "";
  const email = useWatch({ control, name: "email" }) ?? "";
  const password = useWatch({ control, name: "password" }) ?? "";
  const confirmPassword = useWatch({ control, name: "confirmPassword" }) ?? "";

  const passwordStrength = getPasswordStrength(password || "");

  useEffect(() => {
    onChange(
      {
        fullName,
        email,
        password,
        confirmPassword,
      },
      isValid,
    );
  }, [fullName, email, password, confirmPassword, isValid, onChange]);
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
        Create Account
      </p>

      <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
        Let&apos;s create your FitTrack account.
      </h1>

      <p className="mt-3 leading-7 text-muted-foreground">
        Start with your login details. We&apos;ll use this to personalize your
        onboarding and dashboard experience.
      </p>

      <Button
        type="button"
        variant="outline"
        className="mt-8 h-12 w-full rounded-2xl bg-background/70"
      >
        <FaChrome className="mr-2 size-4" />
        Sign up with Google
      </Button>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          or continue with email
        </p>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-5">
        <FormField
          label="Full name"
          error={errors.fullName?.message}
          icon={<User className="size-4" />}
        >
          <Input
            {...register("fullName")}
            placeholder="Enter your full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.fullName)}
            className="h-12 rounded-2xl pl-10"
          />
        </FormField>

        <FormField
          label="Email address"
          error={errors.email?.message}
          icon={<Mail className="size-4" />}
        >
          <Input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className="h-12 rounded-2xl pl-10"
          />
        </FormField>

        <FormField
          label="Password"
          error={errors.password?.message}
          icon={<Lock className="size-4" />}
        >
          <div className="relative">
            <Input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.password)}
              className="h-12 rounded-2xl pl-10 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>

          {password ? (
            <div className="mt-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-medium text-muted-foreground">
                  Password strength
                </p>
                <p className="text-xs font-bold text-foreground">
                  {passwordStrength.label}
                </p>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-300",
                    passwordStrength.barClassName,
                  )}
                  style={{ width: passwordStrength.width }}
                />
              </div>
            </div>
          ) : null}
        </FormField>

        <FormField
          label="Confirm password"
          error={errors.confirmPassword?.message}
          icon={<Lock className="size-4" />}
        >
          <div className="relative">
            <Input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.confirmPassword)}
              className="h-12 rounded-2xl pl-10 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword((value) => !value)}
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {showConfirmPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </FormField>
      </div>
    </div>
  );
}

function FormField({
  label,
  error,
  icon,
  children,
}: {
  label: string;
  error?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">{label}</label>

      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-6 z-10 -translate-y-1/2 text-muted-foreground">
          {icon}
        </div>

        {children}
      </div>

      {error ? (
        <p className="mt-2 text-sm font-medium text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
