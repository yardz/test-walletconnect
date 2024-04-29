"use client";

import classNames from "classnames";
import { FunctionComponent } from "react";
import { CopyToClipboard } from "../CopyToClipboard";
import TruncateMiddle from "./TruncateMiddle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import styles from "./LongText.module.scss";
import Link from "next/link";

interface LongTextProps {
	className?: string;
	text: string;
	showCopy?: boolean;
	onCopy?: () => void;
	onClick?: () => void;
	showRedirect?: boolean;
}

/*
 * IMPORTANT!!!!!!!
 * I developed this component for OreIdWalletConnect (Aikon), then I copied it to this project. It problably needs some adjustments/updates, but for this test it is serving its purpose.
 * https://github.com/TeamAikon/oreid-react-components/blob/master/packages/OreIdWalletConnect/src/LongText/LongText.tsx
 */
export const LongText: FunctionComponent<LongTextProps> = ({
	className,
	text,
	onCopy,
	onClick,
	showCopy = true,
	showRedirect = true,
}) => {
	return (
		<div className={styles.longText}>
			<div
				rel="noreferrer"
				className={classNames(className, {
					[styles.link]: true,
				})}
				onClick={onClick}
			>
				<TruncateMiddle>
					<span>{text}</span>
				</TruncateMiddle>
			</div>

			{showCopy && (
				<div className={styles.copy} onClick={(e) => e.stopPropagation()}>
					<CopyToClipboard text={text} onCopy={onCopy} />
				</div>
			)}

			{showRedirect && (
				<div className={styles.goTo} onClick={(e) => e.stopPropagation()}>
					<Link href={`/address?address=${text}`}>
						<ExitToAppIcon />
					</Link>
				</div>
			)}
		</div>
	);
};
