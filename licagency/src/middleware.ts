// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

function getCookie(req: NextRequest, name: string) {
  const cookie = req.cookies.get(name);
  if (!cookie) return null;
  return cookie.value;
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // only protect /admin routes
  if (!url.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = getCookie(req, "token");
  if (!token) {
    // not signed in
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  try {
    const payload = verifyToken(token) as any;
    if (!payload || payload.role !== "admin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    // admin: allow
    return NextResponse.next();
  } catch (err) {
    console.error("middleware error:", err);
    // invalid token
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}

// configure which paths this middleware runs for
export const config = {
  matcher: ["/admin/:path*"],
};





// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// export async function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     // no token -> redirect to signin
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   try {
//     const secret = process.env.JWT_SECRET as string;
//     const decoded = jwt.verify(token, secret) as { id: string; email: string; role?: string };

//     // allow only admins to access /admin
//     if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
//       return NextResponse.redirect(new URL("/", req.url)); // redirect non-admins
//     }

//     return NextResponse.next();
//   } catch (err) {
//     console.error("middleware auth error:", err);
//     return NextResponse.redirect(new URL("/", req.url));
//   }
// }

// // apply middleware only to /admin route
// export const config = {
//   matcher: ["/admin/:path*"],
// };
