import { WalletNFTs } from "@src/interfaces/api";
import axios from "axios";
import { NFTListItem } from "./NFTListItem";

import Link from "next/link";
import { Card, CardSection } from "../Card";
import styles from "./NFTs.module.scss";

interface Props {
	address: string;
}
export const NFTs = async ({ address }: Props) => {
	const req = await axios.get<WalletNFTs>(`/api/wallet/${address}/nfts`);
	const { nfts } = req.data;

	return (
		<div data-testid="NFTs" className={styles.NFTs}>
			<Card>
				<h3>NFTs ({nfts.length})</h3>

				{nfts.slice(0, 3).map((nft) => (
					<NFTListItem key={nft.tokenAddress} nft={nft} />
				))}

				{nfts.length >= 1 && (
					<CardSection>
						<Link href={`/address/${address}/nfts`}>See all</Link>
					</CardSection>
				)}
			</Card>
		</div>
	);
};
