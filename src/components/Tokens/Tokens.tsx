import { WalletTokens } from "@src/interfaces/api";
import axios from "axios";
import { Card, CardSection } from "../Card";
import { TokenListItem } from "./TokenListItem";

import Link from "next/link";
import styles from "./Tokens.module.scss";

interface Props {
	address: string;
}
export const Tokens = async ({ address }: Props) => {
	const req = await axios.get<WalletTokens>(`/api/wallet/${address}/tokens`);
	const { tokens } = req.data;

	return (
		<div data-testid="Tokens" className={styles.Tokens}>
			<Card>
				<h3>Tokens</h3>

				{tokens.slice(0, 3).map((token) => (
					<TokenListItem key={token.tokenAddress} token={token} />
				))}

				{tokens.length >= 3 && (
					<CardSection>
						<Link href={`/address/${address}/tokens`}>See all</Link>
					</CardSection>
				)}
			</Card>
		</div>
	);
};
