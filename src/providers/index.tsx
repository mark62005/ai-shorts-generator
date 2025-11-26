"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { IGeneralLayoutProps } from "@/types/app/layout-props";
import { registerNewUserInDatabase } from "@/lib/utils/auth";

function Providers({ children }: IGeneralLayoutProps) {
	const { user } = useUser();

	useEffect(() => {
		user && registerNewUserInDatabase(user);
	}, [user]);

	return <div>{children}</div>;
}
export default Providers;
