import { ThemeContext } from "@/themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next Project - Projects Manager",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeContext>
					{children}
				</ThemeContext>
			</body>
		</html>
	);
}