import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: varchar({ length: 255 }),
  image: varchar({ length: 5500 }),
  createdAt: varchar({ length: 255 }).notNull(),
  updatedAt: varchar({ length: 255 }).notNull(),
});

export type User = typeof users.$inferInsert;

