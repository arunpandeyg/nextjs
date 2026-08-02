// FILE: app/api/product/[id]/route.ts
// -----------------------------
import connectToMongo from '@/lib/mongodb';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';


export async function GET(request: Request, { params }: { params: { id: string } }) {
await connectToMongo();
const { id } = params;
const product = await Product.findById(id).lean();
if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
return NextResponse.json({ product });
}