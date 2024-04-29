import { Token, WalletTokens } from "@src/interfaces/api";
import { getMoralisClient } from "@src/services/getMoralisClient";
import { weiToEther } from "@src/utils/blockchain/weiToEther";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
	request: NextRequest,
	{ params }: { params: { address: string } }
) {
	const address = params.address;

	const moralisClient = await getMoralisClient();

	const tokensRaw = await moralisClient.getWalletTokenBalances(address);
	const tokens: Token[] = tokensRaw.map((t) => ({
		symbol: t.symbol ?? "",
		name: t.name ?? "",
		tokenAddress: t.token_address ?? "",
		logo: t.thumbnail ?? t.logo ?? "",
		balance: weiToEther(t.balance),
	}));

	const response: WalletTokens = {
		tokens,
	};

	return NextResponse.json(response);
}
