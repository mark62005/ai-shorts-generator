"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import VideosEmptyState from "@/components/dashboard/VideosEmptyState.tsx";

function DashboardPage() {
	const [videos, setVideos] = useState([]);

	return (
		<div>
			{/* HEADER */}
			<div className="flex justify-between items-center">
				<h2 className="font-bold text-2xl text-primary">Dashboard</h2>

				<Link href="/videos/create">
					<Button>Create Now</Button>
				</Link>
			</div>

			{/* VIDEO LIST */}
			{videos.length === 0 ? (
				<VideosEmptyState />
			) : (
				<div>{/* Render list of videos here */}</div>
			)}
		</div>
	);
}
export default DashboardPage;
