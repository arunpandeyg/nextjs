import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Clear the auth cookie (named "token" here, adjust if needed)
    const response = NextResponse.json(
      { message: "Signed out successfully" },
      { status: 200 }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0), // expire immediately
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Signout error:", error);
    return NextResponse.json(
      { error: "Something went wrong during signout" },
      { status: 500 }
    );
  }
}
