// app/api/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb"; // your mongoose connection utility
import Profile from "@/models/Profile"; // your mongoose model

// PUT /api/[id]
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await context.params;
    const body = await req.json();

    const { name, email, phoneNumber, description } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      { name, email, phoneNumber, description },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProfile, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    await dbConnect();
    const { id } = context.params;
    const profile = await Profile.findById(id);
    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }
    return NextResponse.json(profile, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}









// import connectDB from "@/libs/mongodb";
// import Profile from "@/models/Profile";
// import { NextResponse } from "next/server";



// export async function PUT(request: Request, {params}: {params: {id: string}}) {  
//     const { id } = params;
//     const {newName: name, newEmail: email, newPhoneNumber: phoneNumber, newDescription: description} = await request.json();
//     await connectDB();
//     await Profile.findByIdAndUpdate(id, {name, email, phoneNumber, description}, {new: true});
//     return NextResponse.json({message: "Profile updated successfully"}, {status: 200});
// }