import { getInfuraClient } from "@src/services/getInfuraClient";
import { getWeb3Provider } from "@src/services/getWeb3Provider";
import { weiToEther } from "./weiToEther";

const getBalanceInfura = async (address: string) => {
	const client = getInfuraClient();
	const balance = await client("eth_getBalance", [address, "latest"]);
	return weiToEther(balance);
};

const getBalanceWeb3 = async (address: string) => {
	const provider = getWeb3Provider();
	const balance = await provider.eth.getBalance(address);
	const bs = balance.toString();
	return weiToEther(balance.toString());
};

export const getBalance = async (address: string) => {
	// This is a rece condition. Since both functions are async, the first one to resolve will be returned, i don't care which one.
	return Promise.race([getBalanceInfura(address), getBalanceWeb3(address)]);
};
