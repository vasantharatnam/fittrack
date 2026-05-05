import { cn } from "@/lib/utils";

type GradientBlobProps = {
    className?: string;
}


export default function GradientBlob ({className}: GradientBlobProps) {
    return (
        <div aria-hidden = "true" 
         className= {cn( "pointer-events-none absolute rounded-full bg-primary/20 blur-3xl", className)}
        /> 
    )
}