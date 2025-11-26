import { eq } from "drizzle-orm";
import { db } from "@/drizzle/db";
import { Users } from "@/drizzle/schemas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function registerNewUserInDatabase(user: any): Promise<void> {
	if (!user) return;

	const resultFromDatabase = await db
		.select()
		.from(Users)
		.where(eq(Users.email, user?.emailAddresses[0]?.emailAddress));

	if (resultFromDatabase.length === 0) {
		await db.insert(Users).values({
			name: user?.fullName || "",
			email: user?.emailAddresses[0]?.emailAddress || "",
			imageUrl: user?.imageUrl || "",
		});
	}
}
