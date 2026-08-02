import { connectToDatabase } from "@/libs/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        const {name,email, password} = await request.json()

        if(!name || !email || !password){
            return NextResponse.json(
                {error: "Email and password are required"},
                {status: 400}
            )
        }
        await connectToDatabase()
        const existingUser = await User.findOne({email})
        if(existingUser){
            return NextResponse.json(
                {error: "User already registered"},
                {status: 400}
            )
        }

        await User.create({
            name,
            email,
            password
        })
        return NextResponse.json(
            {message: "User registered successfully"},
            {status: 201}
        )
    } catch (error) {
        console.error("Registration Failed", error)
        return NextResponse.json(
            {error: "Failed to register New User"},
            {status: 400}
        )
    }
}