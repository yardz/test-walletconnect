/* eslint-disable @next/next/no-img-element */
import { Token } from "@src/interfaces/api";
import { Address } from "../Address";
import { CardSection } from "../Card";

import styles from "./TokenListItem.module.scss";

interface Props {
	token: Token;
}

export const TokenListItem = async ({ token }: Props) => {
	return (
		<CardSection title={token.name}>
			<div className={styles.box}>
				{token.logo && (
					<img src={token.logo} width={20} height={20} alt="token icon" />
				)}
				<span>
					{token.balance} {token.symbol}
				</span>
			</div>
			<Address address={token.tokenAddress} />
		</CardSection>
	);
};
