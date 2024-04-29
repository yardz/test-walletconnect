import { WalletOverview } from "@src/interfaces/api";
import { getMoralisClient } from "@src/services/getMoralisClient";
import { getBalance } from "@src/utils/blockchain/getBalance";
import { getEstimateGasFee } from "@src/utils/blockchain/getEstimateGasFee";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
	request: NextRequest,
	{ params }: { params: { address: string } }
) {
	const address = params.address;

	// Check my "getBalance" function. It is using race for get balance from 2 different api's
	const balance = await getBalance(address);

	const estimateGas = await getEstimateGasFee(address);

	const moralisClient = await getMoralisClient();
	const tokensRaw = await moralisClient.getWalletTokenBalances(address);

	const response: WalletOverview = {
		balance: balance,
		estimateGas,
		tokens: tokensRaw.length,
	};
	return NextResponse.json(response);
}
