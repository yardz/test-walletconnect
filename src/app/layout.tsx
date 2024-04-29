import type { Metadata } from "next";
import { defaultFontFamily } from "@src/styles/font";
import { Header } from "@src/components/Header";

import axios from "axios";

import "./global.scss";
import styles from "./layout.module.scss";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
	title: "GooExplorer",
	description: "Google Styled Block Explorer - Walletconnect test!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={defaultFontFamily.className}>
			<body>
				<Header />
				<div className={styles.container}>{children}</div>
			</body>
		</html>
	);
}
