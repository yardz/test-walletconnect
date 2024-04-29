/* eslint-disable @next/next/no-img-element */
import { NFT } from "@src/interfaces/api";
import { Address } from "../Address";
import { CardSection } from "../Card";

interface Props {
	nft: NFT;
}

export const NFTListItem = async ({ nft }: Props) => {
	return (
		<CardSection title={nft.name}>
			<span>{nft.symbol}</span>

			<Address address={nft.tokenAddress} />
		</CardSection>
	);
};
