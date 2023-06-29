import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Get data submitted in request's body.
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  return NextResponse.json({ email, password });
}
