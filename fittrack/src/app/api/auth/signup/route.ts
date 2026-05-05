import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const body = await request.json();

        return NextResponse.json(
            {
              message: "Signup data received successfully",
              user: {
                id: crypto.randomUUID(),
                name: body.fullName ?? "",
                email: body.email ?? "",
              },
            },
            { status: 201 }
        );
    } catch {
         return NextResponse.json(
            {
                message: "Invalid request body",
            },
            { status: 400}
         );
    }
}