"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ModalContent } from "./ModalContent";

interface Props {
	open: boolean;
	handleClose: () => void;
	children: React.ReactNode;

	title?: React.ReactNode;
	footer?: React.ReactNode;
}
export const Modal = ({ open, ...props }: Props) => {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<ModalContent {...props} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};
