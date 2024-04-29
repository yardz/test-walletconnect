"use client";

import classNames from "classnames";
import React, { FunctionComponent, useState } from "react";
import {
	CopyToClipboard as CopyToClipboardComponent,
	Props as CopyToClipboardComponentProps,
} from "react-copy-to-clipboard";

import styles from "./CopyToClipboard.module.scss";
import { Tooltip } from "@mui/material";

interface Props extends CopyToClipboardComponentProps {
	className?: string;
	onCopy?: () => void;
	children?: React.ReactNode;
}

/*
 * IMPORTANT!!!!!!!
 * I developed this component for OreIdWalletConnect (Aikon), then I copied it to this project. It problably needs some adjustments/updates, but for this test it is serving its purpose.
 * https://github.com/TeamAikon/oreid-react-components/tree/master/packages/OreIdWalletConnect/src/CopyToClipboard
 */
export const CopyToClipboard: FunctionComponent<Props> = (props) => {
	const { children, className, onCopy, ...other } = props;
	const [copied, setCopied] = useState(false);
	return (
		<CopyToClipboardComponent
			{...other}
			onCopy={() => {
				setCopied(true);
				if (onCopy) onCopy();
			}}
		>
			<Tooltip open={copied} title="Copied!" placement="top">
				<div
					onAnimationEnd={() => setCopied(false)}
					className={classNames(className, {
						[styles.copyToClipboard]: true,
						[styles.copied]: copied,
					})}
				>
					{children}
				</div>
			</Tooltip>
		</CopyToClipboardComponent>
	);
};
