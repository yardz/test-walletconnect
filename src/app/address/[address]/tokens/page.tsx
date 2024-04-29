import { Token, WalletTokens } from "@src/interfaces/api";
import axios from "axios";
import styles from "./page.module.scss";
import { Card } from "@src/components/Card";
import { Address } from "@src/components/Address";

export default async function Page({
	params,
}: {
	params: { address: string };
}) {
	// Validation on middleware
	const address = params.address;

	const req = await axios.get<WalletTokens>(`/api/wallet/${address}/tokens`);
	const { tokens } = req.data;

	return (
		<main data-testid="TokensPage" className={styles.TokensPage}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						<span>List of tokens!</span>
					</h2>
				</div>
				<div className={styles.token}>
					{tokens.map((token: Token) => (
						<div key={token.tokenAddress} className={styles.token}>
							<Card>
								<h4 className={styles.tokenName}>
									{token.name} - {token.symbol}
								</h4>

								<div className={styles.content}>
									{token.logo && (
										// eslint-disable-next-line @next/next/no-img-element
										<img
											src={token.logo}
											width="100px"
											height="100px"
											alt="Token logo"
										/>
									)}

									<div className={styles.info}>
										<div>
											<span>Token Address: </span>
											<Address address={token.tokenAddress} /> <br />
										</div>
										<div>
											<span>Token balance: </span>
											{token.balance}
										</div>
									</div>
								</div>
							</Card>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
