import { IMenuItem } from "./MenuItem";
import { LucideIcon } from "lucide-react";

export interface IMenuItemWithIcon extends IMenuItem {
	icon: LucideIcon;
}
