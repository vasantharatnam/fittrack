

export type Gender = "male" | "female" | "other" | "prefer-not-to-say";

export type Activitylevel = 
       | "sedentary"
       | "light"
       | "moderate"
       | "very-active"
       | "athlete";

export type UnitSystem = "metric" | "imperial"

export type SignupProfile = {
    fullName : string;
    email : string;
    password?: string;
    dateOfBirth?: string;
    gender?: Gender;
    height?: number;
    weight?: number;
    unitSystem?: UnitSystem;
    goals?: string[];
    activityLevel?: Activitylevel;
    avatarUrl ?: string;
    username ?: string;
    bio ?:  string;
    notifications ?: {
        workoutReminders: boolean;
        weeklyReports: boolean;
        communityUpdates: boolean;
    }
}