import { NextResponse } from "next/server";
import Profile from "@/models/Profile";
import connectDB from "@/libs/mongodb";


export async function POST( request: Request ) {    
    const {name, email, phoneNumber, description} = await request.json();
    await connectDB();
    const profile = await Profile.create({name, email, phoneNumber, description});
    return NextResponse.json({message: "Profile created successfully", profile}, {status: 201});
}

export async function GET() {
    await connectDB();
    const profiles = await Profile.find();
    return NextResponse.json({profiles}, {status: 200});
}

export async function DELETE(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const id = searchParams.get('id');
    await connectDB();
    await Profile.findByIdAndDelete(id);
    return NextResponse.json({message: "Profile deleted successfully"}, {status: 200});
}


export async function PATCH(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const id = searchParams.get('id');
    const {name, email, phoneNumber, description} = await request.json();
    await connectDB();
    await Profile.findByIdAndUpdate(id, {name, email, phoneNumber, description}, {new: true});
    return NextResponse.json({message: "Profile updated successfully"}, {status: 200});
}

// export async function PUT(request: Request) {

//     const searchParams = new URLSearchParams(request.url.split('?')[1]);
//     const id = searchParams.get('id');
//     const {name, email, phoneNumber, description} = await request.json();
//     await connectDB();
//     await Profile.findByIdAndUpdate(id, {name, email, phoneNumber, description}, {new: true});
//     return NextResponse.json({message: "Profile updated successfully"}, {status: 200});
// }