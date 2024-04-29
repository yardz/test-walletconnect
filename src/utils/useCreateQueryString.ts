import { useCallback } from "react";

interface Params {
	[key: string | number]: string;
}
export const useCreateQueryString = () => {
	return useCallback((params: Params) => {
		const result = new URLSearchParams(params);
		return result.toString();
	}, []);
};
