import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react"
import  { cn } from "@/lib/utils"


type FeatureCardProps = {
     title : string;
     description: string;
     icon: LucideIcon;
     className?: string;
};


export default function FeatureCard({ title , description , icon: Icon , className,}: FeatureCardProps){
    return (
         <div
      className={cn(
        "group card-hover rounded-3xl border bg-card p-6 shadow-sm hover:border-primary/40",
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-6" />
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>

      <div className="mt-6 inline-flex items-center text-sm font-bold text-primary">
        Learn more
        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
    )
}
