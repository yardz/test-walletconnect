import { getInfuraClient } from "@src/services/getInfuraClient";
import { weiToEther } from "./weiToEther";

export const getEstimateGasFee = async (address: string) => {
	const client = getInfuraClient();
	const value = await client("eth_getBalance", [address, "latest"]);
	const estimateGas = await client("eth_estimateGas", [
		{
			from: address,
			to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
			value,
		},
	]);
	return weiToEther(estimateGas);
};
