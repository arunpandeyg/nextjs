"use server";

import  db  from "@/index";
import {User,  users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getAllUsers() {
  try {
    const allUsers = await db.select().from(users);
    return allUsers ?? [];   // always return array
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getSingleUser(id: string) {
    try {
        const singleUser = await db.select().from(users).where(eq(users.id, id));
        return singleUser
    } catch (error) {
        console.log(error, "Failed to get single user")
    }
}

export async function createUser(user: Omit<User, "id" | "createdAt" | "updatedAt">) {
    try {
        await db.insert(users).values(user).returning();
        
    } catch (error) {
        console.log(error);
        return {error: "Failed to create user"}
    }
}

export async function getUserByEmail(email: string) {
    try {
        const user = await db.select().from(users).where(eq(users.email, email));
        return user
    } catch (error) {
        console.log(error, "Failed to get user by email")
    }
}

export async function updateUser( user: Omit<User, "createdAt" | "updatedAt">) {
    // if (!user.id) {
    //  throw new Error('User ID is required');
    // }
   try {
    await db.update(users).set(user).where(eq(users.id, user.id ?? '')).returning();
    
   } catch (error) {
    console.log(error)
    return {error: "Failed to update user"};
   }
}

export async function deleteUser(id: string) {
    try {
        await db.delete(users).where(eq(users.id, id)).returning();
       
    } catch (error) {
        console.error(error, "Failed to delete user")
        return {error: "Failed to delete user"}
    }
}