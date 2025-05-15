// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      return NextResponse.json(
        { message: "API URL not configured" },
        { status: 500 }
      );
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch from NestJS API" },
      { status: 500 }
    );
  }
}
