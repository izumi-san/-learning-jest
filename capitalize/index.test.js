import capitalize from "./index";

const textInput = "aa";

test(`Test capitalize the first letter of ${textInput} `, () => {
	const correctOutput = "Aa";
	expect(capitalize(textInput)).toBe(correctOutput);
});

test(`Test function capitalize recieving a single char "a"`, () => {
	const correctOutput = "A";
	expect(capitalize("a")).toBe(correctOutput);
});

test(`Test function capitalize recieving a number`, () => {
	expect(() => {capitalize(1)}).toThrow(new Error(`Input recieved in capitalize is not a string.`));
});

test(`Test function capitalize recieving an empty string`, () => {
	expect(capitalize("")).toBe("");
})

test(`Test function capitalize recieving a single character`, () => {
	expect(capitalize("b")).toBe("B");
})

test(`Test function capitalize recieving a string starting with a uppercase letter`, () => {
	expect(capitalize("Uppercase Test")).toBe("Uppercase Test");
});

test(`Test fuction capitalize recieving special characters or number at the beginning`, () => {
	expect(capitalize("1 - 2 - 3 - start")).toBe("1 - 2 - 3 - start");
	expect(capitalize("-- 1 - first step...")).toBe("-- 1 - first step...");
	expect(capitalize(" [] ")).toBe(" [] ");
	expect(capitalize("[]")).toBe("[]");
})

test("Teste function capitalize recieving a non-ASCII character", () => {
	expect(capitalize("¿")).toBe("¿");
})