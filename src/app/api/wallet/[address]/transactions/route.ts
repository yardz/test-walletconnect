import { Transaction } from "@src/interfaces/api";
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

	const transactions: Transaction[] = transactionsRaw.map((transactionRaw) => ({
		hash: transactionRaw.hash,
		summary: transactionRaw.summary,
		block: transactionRaw.block_number,
		age: transactionRaw.block_timestamp,
		from: transactionRaw.from_address,
		to: transactionRaw.to_address,
		value: transactionRaw.value,
		fee: transactionRaw.gas || "",
	}));

	return NextResponse.json({ transactions });
}
