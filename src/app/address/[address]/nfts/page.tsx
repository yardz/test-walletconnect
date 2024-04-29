import { WalletNFTs, NFT, NftImage } from "@src/interfaces/api";
import axios from "axios";
import styles from "./page.module.scss";
import { Card } from "@src/components/Card";
import { Address } from "@src/components/Address";

interface NftCollection {
	name: string;
	banner: string;
	nfts: NFT[];
}

export default async function Page({
	params,
}: {
	params: { address: string };
}) {
	// Validation on middleware
	const address = params.address;

	const req = await axios.get<WalletNFTs>(`/api/wallet/${address}/nfts`);

	const { nfts } = req.data;

	const collectionsMap: { [key: string]: NftCollection } = {};
	nfts.forEach((nft) => {
		if (!collectionsMap[nft.name]) {
			collectionsMap[nft.name] = {
				name: nft.name,
				banner: nft.collectionBannerImage,
				nfts: [],
			};
		}
		collectionsMap[nft.name].nfts.push(nft);
	});
	const collections = Object.values(collectionsMap);

	return (
		<main data-testid="NftsPage" className={styles.NFTPage}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						<span>List of nfts!</span>
					</h2>
				</div>
				<div className={styles.nft}>
					{collections.map((collection) => {
						return (
							<div key={collection.name} className={styles.nft}>
								<Card>
									{collection.banner && (
										// eslint-disable-next-line @next/next/no-img-element
										<img
											className={styles.banner}
											src={collection.banner}
											alt="NFt Banner"
										/>
									)}
									<h4 className={styles.nftName}>{collection.name}</h4>

									{collection.nfts.map((nft) => (
										<div key={nft.tokenId} className={styles.content}>
											<div className={styles.info}>
												<div>
													<span>ID: </span>
													{nft.tokenId}
												</div>
												<div>
													<span>Nft Address: </span>
													<Address address={nft.tokenAddress} /> <br />
												</div>
												<div>
													<span>Amount: </span>
													{nft.amount}
												</div>
											</div>
										</div>
									))}
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
