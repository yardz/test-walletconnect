"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "./Tab.module.scss";
import classNames from "classnames";

interface Option {
	id: string;
	label: string;
	content: React.ReactNode;
}
interface Props {
	initial: string;
	options: Option[];
}

export const Tab = ({ initial, options }: Props) => {
	const [selected, setSelected] = useState(initial);

	return (
		<div className={styles.Tab}>
			<div className={styles.header}>
				{options.map((option) => (
					<button
						key={option.id}
						className={classNames({
							[styles.active]: selected === option.id,
						})}
						onClick={() => setSelected(option.id)}
					>
						{option.label}
					</button>
				))}
			</div>
			<div className={styles.content}>
				{options.map((option) =>
					selected === option.id ? option.content : null
				)}
			</div>
		</div>
	);
};
