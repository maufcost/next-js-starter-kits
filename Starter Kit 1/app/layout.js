import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "A Next App",
	description: "Let's practice Next.js!",
};

export default function RootLayout({ children }) {
	const header = (
		<header className="main-header">
			<h1>I'm the header on all the pages</h1>
		</header>
	)

	const footer = (
		<footer className="main-footer">
			<p>Created with ❤️ by Mauricio Costa</p>
		</footer>
	)

	return (
		<html lang="en">
			<Head />
			<AuthProvider>
				<body className={`${geistSans.variable} ${geistMono.variable}`}>
					{header}
					{children}
					{footer}
				</body>
			</AuthProvider>
		</html>
	);
}
