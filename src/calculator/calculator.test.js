import calculator from "./calculator.js";

test("Add", () => {
  expect(calculator.add(2, 2)).toBe(4);
});
