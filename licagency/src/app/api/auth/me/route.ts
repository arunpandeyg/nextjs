// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import User from "@/lib/models/user.model";
import { connectToMongo } from "@/lib/config/bd";

function getCookieFromHeader(header: string | null, name: string) {
  if (!header) return null;
  const matches = header.split(";").map(s => s.trim()).filter(Boolean);
  for (const part of matches) {
    if (!part) continue;
    const [k, v] = part.split("=");
    if (k === name) return decodeURIComponent(v);
  }
  return null;
}

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie");
    const token = getCookieFromHeader(cookieHeader, "token");
    if (!token) return NextResponse.json({ user: null }, { status: 200 });

    const payload = verifyToken(token) as any;
    if (!payload?.id) return NextResponse.json({ user: null }, { status: 200 });

    await connectToMongo();
    const user = await User.findById(payload.id).select("-password").lean();
    if (!user) return NextResponse.json({ user: null }, { status: 200 });

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("me error", err);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}







// // app/api/auth/me/route.ts
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export async function GET(req: Request) {
//   const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0];

//   if (!token) return NextResponse.json({ user: null });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
//     return NextResponse.json({ user: decoded });
//   } catch {
//     return NextResponse.json({ user: null });
//   }
// }
