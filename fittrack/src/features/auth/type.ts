export type SignupStep = 1 | 2 | 3 | 4 | 5;

export type SignupFormData = {
     fullName: string;
     email: string;
     password: string;
     confirmPassword: string;

     dateOfBirth: string;
     gender: "male" | "female" | "other" | "prefer-not-to-say"  | "";

     height: number;
     weight: number;
     unitSystem: "metric" | "imperial";

     goals: string[];

     activityLevel:
       | "sedentary"
       | "light"
       | "moderate"
       | "very-active"
       | "athlete"
       | "";
    
    avatarUrl: string;
    username: string;
    bio: string;

    notifications: {
        workoutReminders: boolean;
        weeklyReports:boolean;
        communityUpdates: boolean;
    };

}

export const defaultSignupFormData: SignupFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",

  dateOfBirth: "",
  gender: "",

  height: 170,
  weight: 70,
  unitSystem: "metric",

  goals: [],

  activityLevel: "",

  avatarUrl: "",
  username: "",
  bio: "",

  notifications: {
    workoutReminders: true,
    weeklyReports: true,
    communityUpdates: false,
  },
};