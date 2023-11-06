import { relations } from "drizzle-orm";
import { serial, text, timestamp, integer, pgTable } from "drizzle-orm/pg-core";

export const token = pgTable("token", {
  id: serial("id").primaryKey(),
  passwordResetToken: text("password_reset_token"),
  passwordResetExpires: timestamp("password_reset_expires"),
  userId: integer("user_id").references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at"),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "user">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const userTokenRelations = relations(user, ({ one }) => ({
  token: one(token, {
    fields: [user.id],
    references: [token.userId],
  }),
}));
