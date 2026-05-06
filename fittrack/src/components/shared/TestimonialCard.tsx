import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export function TestimonialCard({
  name,
  role,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="card-hover rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex gap-1 text-yellow-500">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>

      <p className="mt-5 leading-7 text-muted-foreground">“{quote}”</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>

        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
