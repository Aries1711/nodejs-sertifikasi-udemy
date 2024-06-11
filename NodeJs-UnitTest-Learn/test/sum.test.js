import { sum } from "../src/sum";
import { sumAll } from "../src/sum";
import { calculate } from "../src/sum";
import { calculateAndReturn } from "../src/sum";

test("sum a", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("sum b", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("sum c", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("test sum all", () => {
  const numbers = [1, 1, 1, 1, 1];
  expect(sumAll(numbers)).toBe(5);
});

const mockCallback = jest.fn((x) => 42 + x);
const mockCallbackTwo = jest.fn((x) => 41 + x);

test("test calculate", () => {
  const numbers = [1, 1, 1, 1];
  calculate(numbers, mockCallback);
  expect(mockCallback.mock.calls).toHaveLength(1);
});

test("test calculate", () => {
  const numbersss = [1, 1, 1];
  calculateAndReturn(numbersss, mockCallbackTwo);
  expect(mockCallbackTwo.mock.calls).toHaveLength(1);
});
