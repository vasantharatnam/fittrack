import {
  Activity,
  Apple,
  BarChart3,
  Brain,
  Dumbbell,
  Flame,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const navLinks = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Stories",
    href: "#testimonials",
  },
];

export const heroStats = [
  {
    label: "Active users",
    value: "50K+",
  },
  {
    label: "Workouts logged",
    value: "1.2M",
  },
  {
    label: "Average rating",
    value: "4.9/5",
  },
];

export const features = [
  {
    title: "Workout Tracking",
    description:
      "Log workouts, track sets, and stay consistent with beautifully designed training flows.",
    icon: Dumbbell,
  },
  {
    title: "Nutrition Plans",
    description:
      "Build better eating habits with simple nutrition goals and meal logging patterns.",
    icon: Apple,
  },
  {
    title: "Progress Analytics",
    description:
      "Understand your weekly progress with clean charts, trends, and goal insights.",
    icon: BarChart3,
  },
  {
    title: "Community Support",
    description:
      "Stay motivated with wellness challenges, streaks, and community accountability.",
    icon: Users,
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Sign up",
    description: "Create your account and tell FitTrack about your lifestyle.",
    icon: ShieldCheck,
  },
  {
    step: "02",
    title: "Set goals",
    description: "Choose goals like fat loss, muscle gain, flexibility, or stress reduction.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Track progress",
    description: "Follow your plan, log activity, and watch your progress improve.",
    icon: Activity,
  },
];

export const testimonials = [
  {
    name: "Ananya Rao",
    role: "Product Designer",
    quote:
      "FitTrack made fitness feel simple again. The onboarding helped me set realistic goals in minutes.",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    role: "Software Engineer",
    quote:
      "The dashboard is clean, motivating, and easy to use. I finally understand my weekly progress.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "Founder",
    quote:
      "I love how premium the app feels. It gives me just enough insight without overwhelming me.",
    rating: 5,
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    description: "For getting started with basic wellness tracking.",
    features: ["Basic workout logs", "Simple goal tracking", "Weekly summary"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹499",
    description: "For users who want better insights and consistency.",
    features: [
      "Advanced analytics",
      "Nutrition planning",
      "Habit streaks",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "₹999",
    description: "For serious athletes and high-performance routines.",
    features: [
      "Personalized plans",
      "Recovery insights",
      "Coach collaboration",
      "Premium community",
    ],
    highlighted: false,
  },
];

export const goalOptions = [
  {
    id: "lose-weight",
    title: "Lose Weight",
    icon: Flame,
  },
  {
    id: "build-muscle",
    title: "Build Muscle",
    icon: Dumbbell,
  },
  {
    id: "stay-active",
    title: "Stay Active",
    icon: Activity,
  },
  {
    id: "improve-flexibility",
    title: "Improve Flexibility",
    icon: HeartPulse,
  },
  {
    id: "eat-healthier",
    title: "Eat Healthier",
    icon: Apple,
  },
  {
    id: "reduce-stress",
    title: "Reduce Stress",
    icon: Brain,
  },
];