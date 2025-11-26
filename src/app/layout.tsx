import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IGeneralLayoutProps } from "@/types/app/layout-props";
import ClerkProvider from "@/providers/ClerkProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "AI Shorts Generator",
	description: "Generate short videos in seconds using AI",
};

export default function RootLayout({ children }: IGeneralLayoutProps) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
