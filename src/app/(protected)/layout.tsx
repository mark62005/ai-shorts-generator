import { IGeneralLayoutProps } from "@/types/app/layout-props";
import AppSidebar from "@/components/Sidebar";
import Header from "@/components/Header";

function DashboardLayout({ children }: IGeneralLayoutProps) {
	return (
		<div className="w-full">
			<AppSidebar />
			<Header />
			<main className="md:ml-64 p-10">{children}</main>
		</div>
	);
}
export default DashboardLayout;
