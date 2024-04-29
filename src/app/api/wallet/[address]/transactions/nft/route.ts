import { TypedTransaction } from "@src/interfaces/api";
import { getMoralisClient } from "@src/services/getMoralisClient";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
	request: NextRequest,
	{ params }: { params: { address: string } }
) {
	const address = params.address;

	const moralisClient = await getMoralisClient();
	const transactionsRaw = await moralisClient.getTransaction(address);

	const transactions: TypedTransaction[] = [];
	transactionsRaw.forEach((t) => {
		t.nft_transfers.forEach((nft) => {
			transactions.push({
				from: nft.from_address,
				to: nft.to_address,
				value: nft.value,
				direction:
					address.toLocaleLowerCase() === nft.to_address ? "in" : "out",
				// @ts-ignore
				tokenSymbol: nft?.token_symbol,
			});
		});
	});

	return NextResponse.json({ transactions });
}
