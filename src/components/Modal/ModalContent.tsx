import classNames from "classnames";
import styles from "./ModalContent.module.scss";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
	handleClose: () => void;
	children: React.ReactNode;
	title?: React.ReactNode;
	footer?: React.ReactNode;
}
export const ModalContent = ({
	title,
	handleClose,
	children,
	footer,
}: Props) => {
	return (
		<div
			data-testid="Modal"
			className={classNames(styles.Modal)}
			onClick={handleClose}
		>
			<div
				className={styles.body}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className={styles.header}>
					<h3>{title}</h3>
					<button onClick={handleClose}>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.content}>{children}</div>
				<div className={styles.footer}>
					{footer && <div className={styles.footer}>{footer}</div>}
				</div>
			</div>
		</div>
	);
};
