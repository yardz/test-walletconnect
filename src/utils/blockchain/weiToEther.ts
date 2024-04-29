import * as web3 from "web3";

export const weiToEther = (value: string) => {
	return web3.utils.fromWei(value, "ether");
};
