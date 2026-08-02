// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/lib/models/user.model";
import cloudinary from "@/lib/cloudinary";
import { connectToMongo } from "@/lib/config/bd";

export async function POST(req: Request) {
  try {
    await connectToMongo();

    const formData = await req.formData();
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phoneNumber = (formData.get("phoneNumber") as string) || "";
    const password = (formData.get("password") as string) || "";
    const image = formData.get("image") as File | null;

    if (!name || !email || !phoneNumber || !password) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const existing = await User.findOne({ email });
    if (existing) return NextResponse.json({ error: "User already exists" }, { status: 400 });

    // Upload image if provided
    let imageUrl = "";
    if (image) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const uploadResult: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "nextjs-users", resource_type: "image" },
          (err, result) => (err ? reject(err) : resolve(result))
        );
        stream.end(buffer);
      });
      imageUrl = uploadResult?.secure_url || "";
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      phoneNumber,
      image: imageUrl,
      password: hashed,
    });

    // create JWT
    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign({ id: newUser._id, email: newUser.email, role: newUser.role }, secret, {
      expiresIn: "7d",
    });

    // respond and set cookie so browser receives it
    const res = NextResponse.json(
      { message: "User created", user: { id: newUser._id, email: newUser.email } },
      { status: 201 }
    );

    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err: any) {
    console.error("signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
