import analyzeArray from "./analyzeArray";

const arr = [1, 8, 3, 4, 2, 6];

test("array length", () => {
  expect(analyzeArray(arr).average).toBe(4);
});

test("min number", () => {
  expect(analyzeArray(arr).min).toBe(1);
});

test("max number", () => {
  expect(analyzeArray(arr).max).toBe(8);
});

test("array length", () => {
  expect(analyzeArray(arr).length).toBe(6);
});

test("object has all properties", () => {
  expect(analyzeArray(arr)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
