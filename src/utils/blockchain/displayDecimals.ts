export const displayDecimals = (value: string, decimals: number) => {
	const [int, dec] = value.split(".");
	if (!dec) return int;
	const sliced = dec.slice(0, decimals);
	if (Number.parseInt(sliced) === 0) {
		return int;
	}
	return `${int}.${sliced}`;
};
