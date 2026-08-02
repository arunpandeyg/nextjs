// app/api/auth/signin/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/lib/models/user.model";
import { connectToMongo } from "@/lib/config/bd";
import { signToken } from "@/lib/jwt";
import { serializeCookie } from "@/lib/cookie";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    await connectToMongo();
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const tokenData = signToken({
      id: JSON.stringify(user._id),
      role: user.role,
      email: user.email,
    });
    const token = tokenData.token;

    // cookie maxAge in seconds (7 days default)
    const maxAge = 60 * 60 * 24 * 7;
    const cookie = serializeCookie("token", token, {
      maxAge,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    const res = NextResponse.json({
      ok: true,
      role: user.role,
      name: user.name,
      image: user.image || null, // <-- added
    });
    res.headers.set("Set-Cookie", cookie);
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}




