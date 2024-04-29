import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { getTransaction } from "web3-eth";

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
			return response.result;
		},
	};
};
