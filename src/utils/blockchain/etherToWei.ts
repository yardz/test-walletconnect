import * as web3 from "web3";

export const etherToWei = (value: string) => {
	return web3.utils.toWei(value, "ether");
};
