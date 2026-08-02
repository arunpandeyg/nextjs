// app/api/auth/signout/route.ts
import { NextResponse } from "next/server";
import { serializeCookie } from "@/lib/cookie";

export async function POST() {
  // set cookie with maxAge 0 to clear
  const cookie = serializeCookie("token", "", {
    maxAge: 0,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  const res = NextResponse.json({ ok: true });
  res.headers.set("Set-Cookie", cookie);
  return res;
}





// // app/api/auth/signout/route.ts
// import dotenv from 'dotenv';
// import { NextResponse } from "next/server";
// import { serializeCookie } from "@/lib/cookie";


// dotenv.config({ path: './.env' });

// export async function POST() {
//   // set cookie with maxAge 0 to clear
//   const cookie = serializeCookie("token", "", {
//     maxAge: 0,
//     path: "/",
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "development",
//     sameSite: "lax",
//   });
//   const res = NextResponse.json({ ok: true });
//   res.headers.set("Set-Cookie", cookie);
//   return res;
// }











// // app/api/auth/signout/route.ts
// import { NextResponse } from "next/server";

// export async function POST() {
//   const res = NextResponse.json({ message: "Signed out" }, { status: 200 });
//   // expire cookie
//   res.cookies.set({
//     name: "token",
//     value: "",
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     expires: new Date(0),
//   });
//   return res;
// }


// export async function POST() {
//   const requestCookies = await cookies();
//   requestCookies.delete("token"); // remove JWT cookie
//   return NextResponse.json({ message: "Signed out successfully" }, { status: 200 });
// }
