import { NFT, WalletNFTs } from "@src/interfaces/api";
import { getMoralisClient } from "@src/services/getMoralisClient";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
	request: NextRequest,
	{ params }: { params: { address: string } }
) {
	const address = params.address;

	const moralisClient = await getMoralisClient();
	const nftsRaw = await moralisClient.getWalletNFTs(address);

	const notSpamtokens = nftsRaw.result.filter(
		(nft) =>
			!nft.possible_spam && Number(nft.amount) > 0 && Number(nft.token_id) > 0
	);

	const nfts: NFT[] = notSpamtokens.map((t) => ({
		amount: Number(t.amount),
		tokenId: Number(t.token_id),
		tokenAddress: t.token_address ?? "",
		metadata: t.metadata ?? "",
		name: t.name ?? "",
		symbol: t.symbol ?? "",
		tokenHash: t.token_hash ?? "",
		tokenUri: t.token_uri ?? "",

		// Types as outdated
		// @ts-ignore
		collectionLogo: t.collection_logo ?? "",
		// @ts-ignore
		collectionBannerImage: t.collection_banner_image ?? "",
	}));

	const response: WalletNFTs = {
		nfts,
	};

	return NextResponse.json(response);
}
