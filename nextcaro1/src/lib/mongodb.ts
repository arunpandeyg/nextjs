// FILE: lib/mongodb.ts
// -----------------------------
import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI as string;


if (!MONGODB_URI) {
throw new Error('Please define the MONGODB_URI environment variable');
}


const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = (global as any)._mongo || { conn: null, promise: null };


if (!cached.promise) {
const opts = {
bufferCommands: false,
// add any mongoose options you want
} as mongoose.ConnectOptions;


cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
(global as any)._mongo = cached;
}


export default async function connectToMongo() {
if (cached.conn) return cached.conn;
cached.conn = await cached.promise;
return cached.conn;
}