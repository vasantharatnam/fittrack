
type CreateAccountStepProps = {
    fullName: string;
    email: string;
}

export default function CreateAccountStep({fullName , email}: CreateAccountStepProps){
    return (
       <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Create Account
        </p>

        <h1 className="mt-4 text-3xl font-black tracking-light sm:text-4xl">
           Let&apos;s create your FitTrack account.
        </h1>

         <p className="mt-3 leading-7 text-muted-foreground">
           Add your basic account details. In the next commits, we&apos;ll connect
            this to React Hook Form and real-time validation.
         </p>

           <div className="mt-8 rounded-3xl border bg-background/70 p-5">
             <p className="text-sm text-muted-foreground">Preview</p>
             <p className="mt-2 font-bold">Name: {fullName || "Not added yet"}</p>
             <p className="mt-1 font-bold">Email: {email || "Not added yet"}</p>
         </div>

       </div>
    )
}