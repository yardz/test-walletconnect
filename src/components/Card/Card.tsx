import styles from "./Card.module.scss";

interface Props {
	children: React.ReactNode;
}
export const Card = ({ children }: Props) => {
	return (
		<div data-testid="Card" className={styles.Card}>
			{children}
		</div>
	);
};
