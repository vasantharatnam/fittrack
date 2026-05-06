import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.email) {
      return NextResponse.json(
        {
          message: "Full name and email are required",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Signup profile created successfully",
        user: {
          id: crypto.randomUUID(),
          name: body.fullName,
          email: body.email,
          username: body.username ?? "",
          goals: body.goals ?? [],
          activityLevel: body.activityLevel ?? "",
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        message: "Invalid request body",
      },
      { status: 400 }
    );
  }
}