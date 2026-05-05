import { Check } from "lucide-react";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PricingCardProps = {
    name: string;
    price: string;
    description: string;
    feature: string[];
    highlighted?: boolean;
}

export default function PricingCard({ name , price , description, feature , highlighted = false} : PricingCardProps){
    return (
        <div
         className={cn(
        "relative rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        highlighted && "border-primary bg-primary text-primary-foreground shadow-xl"
      )}
        >
      {
        highlighted ? (
        <div className="absolute right-6 top-6 rounded-full bg-background px-3 py-1 text-xs font-bold text-foreground">
          Popular
        </div>
        ) : null 
     }

     <h3 className="text-xl font-bold">{name}</h3>

     <div className="mt-5 flex items-end gap-1">
       <p className="text-4xl font-black">{price}</p>
        <p
          className={cn(
            "mb-1 text-sm",
            highlighted ? "text-primary-foreground/75" : "text-muted-foreground"
          )}
        >
          /month
        </p>
     </div>

     <p
        className={cn(
          "mt-4 leading-7",
          highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {feature.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full",
                highlighted
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary/10 text-primary"
              )}
            >
              <Check className="size-3.5" />
            </span>
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className="mt-8 w-full rounded-full"
        variant={highlighted ? "secondary" : "default"}
      >
        Get Started
      </Button>

  
    </div> 
    )
}