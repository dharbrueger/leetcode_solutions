import { firstMissingPositive } from "./firstMissingPositive";

it('returns fmp of: [5, 7, 8, 0]', () => {
  const result = firstMissingPositive([5, 7, 8, 0]);
  expect(result).toEqual(1);
});

it('returns fmp of: [1,2,0]', () => {
  const result = firstMissingPositive([1,2,0]);
  expect(result).toEqual(3);
});

it('returns fmp of: [3,4,-1,1]', () => {
  const result = firstMissingPositive([3,4,-1,1]);
  expect(result).toEqual(2);
});