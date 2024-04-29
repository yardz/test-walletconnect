import { TypedTransaction } from "@src/interfaces/api";
import { TypedTransactionTable } from "./TypedTransactionTable";
import { render, screen } from "@testing-library/react";

const getMockData = (): TypedTransaction[] => {
	return [
		{
			from: "0x6cdaa9acc79d127ee3a916834c36b3892c554ffe",
			to: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			value: "1000000000000000000000",
			direction: "out",
			tokenSymbol: "DEXT",
		},
		{
			from: "0x6cdaa9acc79d127ee3a916834c36b3892c554ffe",
			to: "0xb63cac384247597756545b500253ff8e607a8020",
			value: "68180952888",
			direction: "out",
			tokenSymbol: "OHM",
		},
		{
			from: "0xb63cac384247597756545b500253ff8e607a8020",
			to: "0x6cdaa9acc79d127ee3a916834c36b3892c554ffe",
			value: "68180952888",
			direction: "in",
			tokenSymbol: "sOHM",
		},
		{
			from: "0x69b81152c5a8d35a67b32a4d3772795d96cae4da",
			to: "0x6cdaa9acc79d127ee3a916834c36b3892c554ffe",
			value: "68180952888",
			direction: "in",
			tokenSymbol: "OHM",
		},
	];
};

test("Should Render", () => {
	const data = getMockData();
	render(<TypedTransactionTable transactions={data} />);
	// This case we dont need a expect, because if the screen.get* dont find the element, it will throw an error and the test will fail
	screen.getByRole("table");
	screen.getByTestId("TypedTransactionTable");
});

test("Should have all collums + 1 (header)", () => {
	const data = getMockData();
	render(<TypedTransactionTable transactions={data} />);
	const trElements = screen.getAllByRole("row");
	expect(trElements).toHaveLength(data.length + 1);
});
