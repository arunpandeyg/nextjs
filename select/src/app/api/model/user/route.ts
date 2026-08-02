import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const   userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    bio: { type: String, required: true },          
    image: { type: String, required: true },
  },{
    timestamps: true
  });

  export type User = mongoose.Document & {
    email: string;
    passwordHash: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };

  userSchema.pre("save", async function (next) {
    if (!this.isModified("passwordHash")) return next();
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.passwordHash, salt);
    this.passwordHash = hash;
    next();
  });
  
  const User = mongoose.model("User", userSchema);

  export default User