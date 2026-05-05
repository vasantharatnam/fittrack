

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center"
}


export  default function SectionHeader({eyebrow , title ,description , align="center"} : SectionHeaderProps){
    return (
        <div
        className={
            align === "center" ? "mx-auto max-w-3xl text-center": "max-w-3xl text-left"
        }
        >
        {
          eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </p>
          ) 
          : null  
        } 

        <h2 className="text-balance text-3xl font-black trackling-light text-foreground sm:text-4xl lg:text-5xl">
           {title}
        </h2>  

        {
          description ? (
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>) : null
        }

        </div>
    )
}