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
    if (
      // !body.mainService ||
      // !body.availableService ||
      !body.timeDuration ||
      !body.providerCount ||
      !body.days ||
      !body.time ||
      !body.address ||
      !body.telephone ||
      !body.customerOtherDetail
    ) {
      return NextResponse.json(
        { message: "Fill the all fields" },
        { status: 400 }
      );
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/request-service`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        {
          message: data.message || "Authentication failed",
          error: data.error,
        },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
