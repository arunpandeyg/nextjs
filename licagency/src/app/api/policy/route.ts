import { lic_data } from "@/data/LIC";
import { connectToMongo } from "@/lib/config/bd";
import { NextResponse } from "next/server";
import { Buffer } from "buffer";
import { writeFile } from "fs/promises";
import fs from "fs";
import path from "path";
import Policy from "@/lib/models/policy.model";
import type { NextRequest } from 'next/server'

const loadDB = async () => {
  await connectToMongo();
};
loadDB();

export async function GET(request: NextRequest) {
  const policyId = request.nextUrl.searchParams.get("id");
  if(policyId){
    const policy = await Policy.findById(policyId);
    return NextResponse.json({policy});
  }else{
     const policies = await Policy.find();
  return NextResponse.json({policies});
  }
 
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image") as File | null;
  if (!image) {
    return NextResponse.json(
      { error: "No image file provided" },
      { status: 400 }
    );
  } else {
    const imageByteData = await image?.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image?.name}`;
    const imageUrl = `/${timestamp}_${image?.name}`;
      

    try {
      await writeFile(path, imageBuffer); 
      
      const policyData = {
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      image: imageUrl,
    };

    await Policy.create(policyData);
    console.log('Policy created successfully');
    return NextResponse.json({success: true, message: "Policy created successfully" }, { status: 200 });
           
    } catch (error) {
      console.error("Error uploading image:", error);
      return NextResponse.json(
        { error: "Error uploading image" },
        { status: 500 }
      );
    }   
     
  }
   
}

//Delete Policy

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const policy = await Policy.findById(id);
  fs.unlink(`./public/${policy?.image}`, ()=>{});
  await Policy.findByIdAndDelete(id);

  return NextResponse.json({message: "Policy deleted successfully"});
}

//Update Policy

export async function PUT(request: NextRequest) {
  const formData = await request.formData();
  const policyId = request.nextUrl.searchParams.get("id");
  const policy = await Policy.findByIdAndUpdate(policyId, {
    title: formData.get("title"),
    category: formData.get("category"),
    description: formData.get("description"),
  });
  return NextResponse.json({policy});
}