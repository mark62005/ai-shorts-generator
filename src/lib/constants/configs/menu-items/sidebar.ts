import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import { IMenuItemWithIcon } from "@/types/app/constants/configs/menu-item";

export const SIDEBAR_MENU_ITEMS: IMenuItemWithIcon[] = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: PanelsTopLeft,
	},
	{
		title: "Create New",
		href: "/videos/create",
		icon: FileVideo,
	},
	{
		title: "Upgrade",
		href: "/upgrade",
		icon: ShieldPlus,
	},
	{
		title: "Account",
		href: "/account",
		icon: CircleUser,
	},
];
