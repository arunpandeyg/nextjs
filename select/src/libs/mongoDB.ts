// lib/mongodb.ts
import mongoose from "mongoose";

const MONGO_DB_URI = process.env.MONGO_DB_URI as string;

if (!MONGO_DB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/* 
  Cached connection to avoid multiple connections 
  when Next.js hot-reloads or re-renders server functions.
*/
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_DB_URI, {
      dbName: "myDatabase", // optional, replace with your DB name
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
