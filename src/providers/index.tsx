"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { IGeneralLayoutProps } from "@/types/app/layout-props";
import { registerNewUserInDatabase } from "@/lib/utils/auth";
import { SidebarProvider } from "@/components/ui/sidebar";

function Providers({ children }: IGeneralLayoutProps) {
	const { user } = useUser();

	useEffect(() => {
		user && registerNewUserInDatabase(user);
	}, [user]);

	return <SidebarProvider>{children}</SidebarProvider>;
}
export default Providers;
