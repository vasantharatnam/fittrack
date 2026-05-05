export function getPasswordStrength(password: string) {
  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 1) {
    return {
      score,
      label: "Weak",
      barClassName: "bg-destructive",
      width: "25%",
    };
  }

  if (score <= 3) {
    return {
      score,
      label: "Good",
      barClassName: "bg-yellow-500",
      width: "60%",
    };
  }

  return {
    score,
    label: "Strong",
    barClassName: "bg-primary",
    width: "100%",
  };
}