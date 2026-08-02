"use server"

import db from "@/db/index";
import { users } from "@/db/schema";

export async function getUsers() {
    try {
       const allUsers = await db.select().from(users)
       return allUsers
    } catch (error) {
        console.log(error)
        return {
            error: "Error fetching users"
        }
    }
}

