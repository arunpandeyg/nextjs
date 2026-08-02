// models/User.ts
import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, required: true },
    image: { type: String }, // store image URL/base64
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
