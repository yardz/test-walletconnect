import styles from "./SpanColor.module.scss";

interface Props {
	children: string;
	color: string;
}
export const SpanColor = ({ children, color }: Props) => {
	return (
		<span
			data-testid="SpanColor"
			style={{ color }}
			className={styles.SpanColor}
		>
			{children}
		</span>
	);
};
