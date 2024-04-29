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
			// @ts-ignore
			if (nft?.internal_transaction) {
				transactions.push({
					from: nft.from_address,
					to: nft.to_address,
					value: nft.value,
					direction: address === nft.to_address ? "in" : "out",
					// @ts-ignore
					tokenSymbol: nft.token_symbol,
				});
			}
		});
		t.erc20_transfers.forEach((erc20) => {
			// @ts-ignore
			if (erc20?.internal_transaction) {
				transactions.push({
					from: erc20.from_address,
					to: erc20.to_address,
					value: erc20.value,
					direction:
						address.toLocaleLowerCase() === erc20.to_address ? "in" : "out",
					tokenSymbol: erc20.token_symbol,
				});
			}
		});
		t.native_transfers.forEach((native) => {
			if (native.internal_transaction) {
				transactions.push({
					from: native.from_address,
					to: native.to_address || "",
					value: native.value,
					direction: address === native.to_address ? "in" : "out",
					tokenSymbol: native.token_symbol,
				});
			}
		});
	});

	return NextResponse.json({ transactions });
}
