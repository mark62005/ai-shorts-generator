import Link from "next/link";
import { Button } from "@/components/ui/button";

function VideosEmptyState() {
	return (
		<div className="flex flex-col items-center mt-10 p-5 py-24 border-2 border-dashed rounded-md">
			<h2 className="">You don't have any shorts created.</h2>

			<Link href="/videos/create">
				<Button className="mt-4">Create New</Button>
			</Link>
		</div>
	);
}
export default VideosEmptyState;
