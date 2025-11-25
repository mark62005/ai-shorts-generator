import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/drizzle/schemas/index.ts",
	out: "./migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL!,
	},
});
