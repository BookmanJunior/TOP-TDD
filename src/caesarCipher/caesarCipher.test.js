import caesarCipher from "./caesarCipher.js";

test("wrapping", () => {
  expect(caesarCipher("zaz", 1)).toBe("aba");
});

test("case sensitive", () => {
  expect(caesarCipher("ZazA", 1)).toBe("AbaB");
});

test("punctuation", () => {
  expect(caesarCipher("Za zA", 1)).toBe("Ab aB");
});
