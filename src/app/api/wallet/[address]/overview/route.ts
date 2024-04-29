import { Token, WalletOverview } from "@src/interfaces/api";
import { getInfuraClient } from "@src/services/getInfuraClient";
import { getMoralisClient } from "@src/services/getMoralisClient";
import { getWeb3Provider } from "@src/services/getWeb3Provider";
import { getBalance } from "@src/utils/blockchain/getBalance";
import { getEstimateGasFee } from "@src/utils/blockchain/getEstimateGasFee";
import { weiToEther } from "@src/utils/blockchain/weiToEther";
import { NextRequest, NextResponse } from "next/server";

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
