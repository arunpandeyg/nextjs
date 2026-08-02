import User from "@/app/api/model/user/route";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/libs/mongoDB";

export async function POST(req: Request) {
    try {
        const { email, password, username, name, bio, image } = await req.json();

        if (!email || !password || !username || !name || !bio || !image) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // find user in database
        const user = await db.user.findUnique({
            where: { email },
        });

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // create user in database
        const newUser = await db.user.create({
            data: {
                email,
                passwordHash: hash,
                username,
                name,
                bio,
                image,
            },
        });

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}

