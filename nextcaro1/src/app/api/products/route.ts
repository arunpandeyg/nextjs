// FILE: app/api/products/route.ts
// -----------------------------
import connectToMongo from '@/lib/mongodb';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
await connectToMongo();


const url = new URL(request.url);
const skip = parseInt(url.searchParams.get('skip') || '0', 10);
const limit = Math.min(parseInt(url.searchParams.get('limit') || '10', 10), 50);


const products = await Product.find({})
.sort({ createdAt: -1 })
.skip(skip)
.limit(limit)
.lean();


return NextResponse.json({ products });
}