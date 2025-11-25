import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 256 }).notNull(),
	email: varchar("email", { length: 256 }).notNull().unique(),
	imageUrl: varchar("image_url", { length: 512 }),
	subscribed: boolean("subscribed").default(false),
});
