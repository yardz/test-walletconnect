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
		t?.erc20_transfers?.forEach((erc20) => {
			transactions.push({
				from: erc20.from_address,
				to: erc20.to_address,
				value: erc20.value,
				direction:
					address.toLocaleLowerCase() === erc20.to_address ? "in" : "out",
				tokenSymbol: erc20.token_symbol,
			});
		});
	});

	return NextResponse.json({ transactions });
}
