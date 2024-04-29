import { SpanMultColorLetters } from "../SpanColor";

import styles from "./Logo.module.scss";

interface Props {
	fontSize?: string;
}
export const Logo = ({ fontSize }: Props) => {
	return (
		<span
			data-testid="Logo"
			style={{ fontSize: fontSize || "inherit" }}
			className={styles.Logo}
		>
			<SpanMultColorLetters text="GooExplorer" />
		</span>
	);
};
