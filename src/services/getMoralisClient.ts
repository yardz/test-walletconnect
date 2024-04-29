import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

export const getMoralisClient = async () => {
	if (!Moralis.Core.isStarted) {
		await Moralis.start({
			apiKey: process.env.MORALIS_TOKEN ?? "",
		});
	}
	const chain = EvmChain.ETHEREUM;

	return {
		getWalletTokenBalances: async (address: string) => {
			const response = await Moralis.EvmApi.token.getWalletTokenBalances({
				chain,
				address,
			});
			return response.raw;
		},
		getWalletNFTs: async (address: string) => {
			const response = await Moralis.EvmApi.nft.getWalletNFTs({
				chain,
				address,
			});
			return response.raw;
		},
		getTransaction: async (address: string) => {
			const response = await Moralis.EvmApi.wallets.getWalletHistory({
				chain,
				order: "DESC",
				address: address,
			});
			const transactions = response.result;
			return transactions.map((transaction) => transaction.toJSON());
		},
	};
};
