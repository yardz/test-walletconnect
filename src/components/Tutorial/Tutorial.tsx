"use client";

import { useState } from "react";
import { Modal } from "../Modal";

interface Props {
	children: React.ReactNode;
}
export const Tutorial = ({ children }: Props) => {
	const [show, setShow] = useState(true);
	const handleClose = () => {
		setShow(false);
	};
	return (
		<>
			<Modal title={"Page's Tutorial"} open={show} handleClose={handleClose}>
				{children}
			</Modal>
		</>
	);
};
