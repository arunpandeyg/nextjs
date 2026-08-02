// FILE: models/Product.ts
// -----------------------------
import mongoose, { Schema, models } from 'mongoose';


export interface IProduct extends mongoose.Document {
name: string;
description: string;
image: string; // store image URL or path
createdAt?: Date;
}


const ProductSchema = new Schema<IProduct>({
name: { type: String, required: true },
description: { type: String, required: true },
image: { type: String, required: true },
createdAt: { type: Date, default: Date.now },
});


export default models.Product || mongoose.model<IProduct>('Product', ProductSchema);