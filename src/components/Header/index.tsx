import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

function Header() {
	return (
		<header className="flex justify-between items-center p-3 px-5 shadow-md">
			<div className="flex items-center gap-3">
				<Image
					src="/logo.png"
					alt="Logo of AI Shorts Generator"
					width={30}
					height={30}
				/>

				<h1 className="font-bold text-xl">AI Shorts Generator</h1>
			</div>

			<div className="flex items-center gap-3">
				<Button>Dashboard</Button>
				<UserButton />
			</div>
		</header>
	);
}
export default Header;
