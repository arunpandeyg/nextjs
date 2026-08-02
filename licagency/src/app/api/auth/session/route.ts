// app/api/auth/session/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookiesPromise = cookies();
    const cookiesObject = await cookiesPromise;
    const token = cookiesObject.get("token")?.value;
    if (!token) return NextResponse.json({ authenticated: false });

    const secret = process.env.JWT_SECRET as string;
    if (!secret) return NextResponse.json({ authenticated: false });

    try {
      const payload = jwt.verify(token, secret); // throws if invalid
      return NextResponse.json({ authenticated: true, user: payload }, { status: 200 });
    } catch (err) {
      console.error("session route error:", err);
      return NextResponse.json({ authenticated: false }, { status: 200 });
    }
  } catch (err) {
    console.error("session route error:", err);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}
