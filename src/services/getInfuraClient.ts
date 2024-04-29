import axios from "axios";

export const getInfuraClient = () => {
	const apiKei = process.env.INFURA_API_KEY;

	return async (method: string, params: any[]) => {
		const request = await axios.post(`https://mainnet.infura.io/v3/${apiKei}`, {
			jsonrpc: "2.0",
			method,
			params,
			id: 1,
		});
		return request.data.result;
	};
};
