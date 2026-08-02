// lib/mongo.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_DB_URI!;
if (!MONGO_URI) throw new Error("MONGO_URI not defined in env");

const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = {
  conn: null,
  promise: null,
};

export async function connectToMongo() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const opts = {
      // useNewUrlParser etc are not necessary on modern drivers but harmless
      bufferCommands: false,
      autoIndex: true,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts).then((m) => m);
    console.log("MongoDB connected");
  }
  cached.conn = await cached.promise;
  return cached.conn;
};




