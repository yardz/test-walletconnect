import Image from "next/image";
import { Card, CardSection } from "../Card";
import styles from "./Overview.module.scss";

import { WalletOverview } from "@src/interfaces/api";
import axios from "axios";
import Link from "next/link";
import EthIcon from "./ethereum.svg";

interface Props {
	address: string;
}
export const Overview = async ({ address }: Props) => {
	const req = await axios.get<WalletOverview>(
		`/api/wallet/${address}/overview`
	);
	const { balance, estimateGas, tokens } = req.data;

	return (
		<div data-testid="Overview" className={styles.Overview}>
			<Card>
				<div className={styles.stack}>
					<h3>Overview</h3>

					<CardSection title="ETH Balance">
						<div className={styles.box}>
							<Image src={EthIcon} width={20} alt="eth icon" />
							<span>{balance} ETH</span>
						</div>
					</CardSection>

					<CardSection title="Gas Price">
						<div className={styles.box}>
							<Image src={EthIcon} width={20} alt="eth icon" />
							<span>{estimateGas} ETH</span>
						</div>
					</CardSection>

					<CardSection title="Tokens owned">
						<span>{tokens}</span>
					</CardSection>

					<CardSection>
						<Link href={`/address/${address}/transactions`}>
							See all transactions
						</Link>
					</CardSection>
				</div>
			</Card>
		</div>
	);
};
