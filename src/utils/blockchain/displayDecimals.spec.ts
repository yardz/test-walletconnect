import { displayDecimals } from "./displayDecimals";

test("Show show intergers", () => {
	expect(displayDecimals("1", 3)).toBe("1");
});

test("Show show intergers", () => {
	expect(displayDecimals("1.000000", 3)).toBe("1");
});

test("Show show intergers", () => {
	expect(displayDecimals("1.1234", 3)).toBe("1.123");
});

test("Show show intergers", () => {
	expect(displayDecimals("1.12", 7)).toBe("1.12");
});

test("Show show intergers", () => {
	expect(displayDecimals("1.0", 7)).toBe("1");
});
