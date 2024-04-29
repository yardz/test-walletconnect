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
		t.native_transfers.forEach((native) => {
			transactions.push({
				from: native.from_address,
				to: native.to_address || "",
				value: native.value,
				direction:
					address.toLocaleLowerCase() === native.to_address ? "in" : "out",
				tokenSymbol: native.token_symbol,
			});
		});
	});

	return NextResponse.json({ transactions });
}
