"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Ruler, Scale } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  personalDetailsSchema,
  type PersonalDetailsFormValues,
} from "@/features/auth/schemas";
import { cn } from "@/lib/utils";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
  { label: "Prefer not to say", value: "prefer-not-to-say" },
] as const;

type PersonalDetailsStepProps = {
  values: PersonalDetailsFormValues;
  onChange: (values: PersonalDetailsFormValues, isValid: boolean) => void;
};

export function PersonalDetailsStep({
  values,
  onChange,
}: PersonalDetailsStepProps) {
  const {
    register,
    control,
    formState: { errors, isValid },
  } = useForm<PersonalDetailsFormValues>({
    resolver: zodResolver(personalDetailsSchema),
    mode: "onChange",
    defaultValues: values,
  });

  const dateOfBirth = useWatch({ control, name: "dateOfBirth" }) ?? "";
  const gender = useWatch({ control, name: "gender" });
  const height = useWatch({ control, name: "height" }) ?? 0;
  const weight = useWatch({ control, name: "weight" }) ?? 0;
  const unitSystem = useWatch({ control, name: "unitSystem" }) ?? "metric";

  useEffect(() => {
    onChange(
      {
        dateOfBirth,
        gender,
        height: Number(height),
        weight: Number(weight),
        unitSystem,
      },
      isValid
    );
  }, [dateOfBirth, gender, height, weight, unitSystem, isValid, onChange]);

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
        Personal Details
      </p>

      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
        Tell us a little about yourself.
      </h1>

      <p className="mt-3 leading-7 text-muted-foreground">
        These details help FitTrack estimate goals, personalize progress ranges,
        and make your dashboard feel more relevant.
      </p>

      <div className="mt-8 grid gap-6">
        <div>
          <label className="mb-2 block text-sm font-bold">Date of birth</label>

          <div className="relative">
            <Calendar className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              {...register("dateOfBirth")}
              type="date"
              className="h-12 rounded-2xl pl-10"
            />
          </div>

          {errors.dateOfBirth?.message ? (
            <p className="mt-2 text-sm font-medium text-destructive">
              {errors.dateOfBirth.message}
            </p>
          ) : null}
        </div>

        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <div>
              <label className="mb-3 block text-sm font-bold">Gender</label>

              <div className="grid gap-3 sm:grid-cols-2">
                {genderOptions.map((option) => {
                  const selected = field.value === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => field.onChange(option.value)}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-left text-sm font-bold transition-all duration-200",
                        selected
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-background/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              {errors.gender?.message ? (
                <p className="mt-2 text-sm font-medium text-destructive">
                  {errors.gender.message}
                </p>
              ) : null}
            </div>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Controller
            control={control}
            name="height"
            render={({ field }) => (
              <MeasurementCard
                label="Height"
                icon={<Ruler className="size-4" />}
                value={Number(field.value)}
                min={90}
                max={250}
                unit={unitSystem === "metric" ? "cm" : "in"}
                error={errors.height?.message}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="weight"
            render={({ field }) => (
              <MeasurementCard
                label="Weight"
                icon={<Scale className="size-4" />}
                value={Number(field.value)}
                min={25}
                max={250}
                unit={unitSystem === "metric" ? "kg" : "lbs"}
                error={errors.weight?.message}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <Controller
          control={control}
          name="unitSystem"
          render={({ field }) => (
            <div>
              <label className="mb-3 block text-sm font-bold">Unit system</label>

              <div className="grid grid-cols-2 rounded-2xl border bg-background/70 p-1">
                {[
                  { label: "Metric", value: "metric" },
                  { label: "Imperial", value: "imperial" },
                ].map((option) => {
                  const selected = field.value === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => field.onChange(option.value)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-black transition-all",
                        selected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}

function MeasurementCard({
  label,
  icon,
  value,
  min,
  max,
  unit,
  error,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  value: number;
  min: number;
  max: number;
  unit: string;
  error?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-3xl border bg-background/70 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </span>
          <p className="font-bold">{label}</p>
        </div>

        <p className="text-sm font-bold text-muted-foreground">{unit}</p>
      </div>

      <div className="flex items-center gap-3">
        <Input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-12 rounded-2xl text-center text-lg font-black"
        />

        <p className="min-w-10 text-sm font-bold text-muted-foreground">
          {unit}
        </p>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-5 w-full accent-primary"
      />

      {error ? (
        <p className="mt-2 text-sm font-medium text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
