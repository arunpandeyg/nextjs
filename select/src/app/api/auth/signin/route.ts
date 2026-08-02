// app/api/auth/signin/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/libs/mongoDB"; // your DB client (Prisma/Drizzle/etc.)
import { signJwt } from "@/libs/jwt"; // helper for JWT signing

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // find user in database
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // compare password
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // create JWT token
    const token = await signJwt({ id: user.id, email: user.email });

    return NextResponse.json(
      { message: "Sign in successful", token, user: { id: user.id, email: user.email } },
      { status: 200 }
    );
  } catch (err) {
    console.error("Sign in error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}


