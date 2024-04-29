import styles from "./CardSection.module.scss";

interface Props {
	title?: string;
	children: React.ReactNode;
}
export const CardSection = ({ title, children }: Props) => {
	return (
		<div data-testid="CardSection" className={styles.CardSection}>
			{title && <h6>{title}</h6>}
			<div>{children}</div>
		</div>
	);
};
