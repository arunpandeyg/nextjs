// lib/jwt.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
if (!JWT_SECRET) throw new Error("JWT_SECRET must be set");

export function signToken(payload: object) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET must be set");
  }
  const token = jwt.sign(payload, secret, { algorithm: 'HS256' }); // Specify the algorithm
  return { token, expiresIn: JWT_EXPIRES_IN }; // Return the token and expiresIn separately
}

export function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET must be set");
  }
  return jwt.verify(token, secret);
}
