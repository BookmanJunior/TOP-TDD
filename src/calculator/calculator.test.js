import calculator from "./calculator.js";

test("Add", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Subtract", () => {
  expect(calculator.subtract(10, 5)).toEqual(5);
});

test("Multiply", () => {
  expect(calculator.multiply(5, 3)).toEqual(15);
});

test("Divide", () => {
  expect(calculator.divide(20, 2)).toEqual(10);
});
