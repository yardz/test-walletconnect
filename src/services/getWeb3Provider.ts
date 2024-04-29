import { Web3 } from "web3";

export const getWeb3Provider = () => {
	const apiKei = process.env.INFURA_API_KEY;
	const provider = `https://mainnet.infura.io/v3/${apiKei}`;
	const web3Provider = new Web3.providers.HttpProvider(provider);

	return new Web3(web3Provider);
};
