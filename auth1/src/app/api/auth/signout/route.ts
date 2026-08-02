// app/api/auth/signout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Signed out" }, { status: 200 });
  // expire cookie
  res.cookies.set({
    name: "token",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  });
  return res;
}
