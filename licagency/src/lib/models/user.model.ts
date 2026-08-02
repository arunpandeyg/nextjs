// models/User.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string; // hashed
  role?: "user" | "admin";
  image?: string;   // <-- new field
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    image: { type: String, default: "" }, // store URL (e.g. Cloudinary/ImageKit) or Base64
  },
  { timestamps: true }
);

const User: Model<IUser> =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);

export default User;




// models/User.ts
// import mongoose, { Schema, model, models } from "mongoose";

// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     phoneNumber: { type: String, required: true },
//     image: { type: String }, // store image URL/base64
//     password: { type: String, required: true },
//     role: { type: String, default: "admin" }, // 👈 add this
//   },
//   { timestamps: true }
// );

// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;
