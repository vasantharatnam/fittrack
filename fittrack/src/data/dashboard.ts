import {
  Activity,
  BarChart3,
  Dumbbell,
  Home,
  LineChart,
  Salad,
  Settings,
  Trophy,
  User,
} from "lucide-react";

export const dashboardNavItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Workouts",
    href: "#workouts",
    icon: Dumbbell,
  },
  {
    label: "Nutrition",
    href: "#nutrition",
    icon: Salad,
  },
  {
    label: "Progress",
    href: "#progress",
    icon: LineChart,
  },
  {
    label: "Profile",
    href: "#profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "#settings",
    icon: Settings,
  },
];

export const dashboardStats = [
  {
    label: "Calories Burned",
    value: "2,480",
    trend: "+12% from last week",
    icon: Activity,
  },
  {
    label: "Workouts This Week",
    value: "5",
    trend: "2 more than last week",
    icon: Dumbbell,
  },
  {
    label: "Streak Days",
    value: "14",
    trend: "Keep it going",
    icon: Trophy,
  },
  {
    label: "Goal Progress",
    value: "82%",
    trend: "Almost there",
    icon: BarChart3,
  },
];

export const weeklyActivityData = [
  { day: "Mon", minutes: 35 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 25 },
  { day: "Thu", minutes: 60 },
  { day: "Fri", minutes: 40 },
  { day: "Sat", minutes: 75 },
  { day: "Sun", minutes: 30 },
];

export const todaysWorkout = [
  {
    id: "warmup",
    title: "Dynamic warm-up",
    meta: "8 min",
    completed: true,
  },
  {
    id: "squats",
    title: "Bodyweight squats",
    meta: "3 sets × 15 reps",
    completed: true,
  },
  {
    id: "pushups",
    title: "Push-ups",
    meta: "3 sets × 12 reps",
    completed: false,
  },
  {
    id: "plank",
    title: "Plank hold",
    meta: "3 rounds × 45 sec",
    completed: false,
  },
];