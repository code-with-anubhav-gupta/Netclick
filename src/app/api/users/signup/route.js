// app/api/items/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      return NextResponse.json(
        { message: "API URL not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();

    // Basic validation
    if (!body.email || !body.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          message: data.message || "Authentication failed",
          error: data.error,
        },
        { status: res.status }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
