import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.POSTGRES_URL) {
  throw new Error("Please provide POSTGRES_URL in env!");
}

export default {
  schema: "./src/app/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  },
} satisfies Config;
