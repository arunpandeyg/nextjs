import { connectToMongo } from "@/lib/config/bd";
import Email from "@/lib/models/emai.model";
import { NextResponse } from "next/server";

interface CustomRequest extends Request {
  nextUrl: URL;
}

const loadDB = async () => {
    await connectToMongo();
}

loadDB();

export async function POST(request: Request) {
    const formData = await request.formData();
    const emailData = {        
      email:` ${formData.get("email")}`,
    }
    await Email.create(emailData);
    return NextResponse.json({ success: true, message: "Email added successfully" }, { status: 200 });
}

export async function GET(  request: Request) {
 const emails = await Email.find({});
 return NextResponse.json({emails});
}

export async function DELETE(request: CustomRequest) {
  const id =request.nextUrl.searchParams.get("id");
  const email = await Email.findById(id);
  await Email.findByIdAndDelete(id);
  return NextResponse.json({message: "Email deleted successfully"});
}