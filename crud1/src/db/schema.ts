
import { uuid, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  age: text().notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  username: text("username").notNull().unique(),
  createdAt: timestamp().notNull().default(new Date()),
  updatedAt: timestamp().notNull().default(new Date()),
});

export type User = typeof users.$inferInsert;

