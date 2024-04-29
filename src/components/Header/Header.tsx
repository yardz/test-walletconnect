import Link from "next/link";
import { Logo } from "../Logo/Logo";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "./Header.module.scss";

interface Props {}
export const Header = ({}: Props) => {
	return (
		<header data-testid="Header" className={styles.Header}>
			<Link href="/" style={{ textDecoration: "none" }}>
				<Logo fontSize="16px" />
			</Link>

			<div className={styles.rightContent}>
				<Link
					href="https://github.com/yardz"
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<div className={styles.social}>
						<GitHubIcon />
						<span>GitHub</span>
					</div>
				</Link>
			</div>
		</header>
	);
};
