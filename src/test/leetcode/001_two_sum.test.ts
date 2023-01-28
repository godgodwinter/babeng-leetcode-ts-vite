import twoSum from "../../leetcode/001_two_sum";
import { expect } from "vitest";
test("two_sum_1", () => {
  const example = twoSum([2, 7, 11, 15], 9);
  const example_result = [0, 1];
  expect(example).toStrictEqual(example_result);
});

test("two_sum_2", () => {
  const example = twoSum([3, 2, 4], 6);
  const example_result = [1, 2];
  expect(example).toStrictEqual(example_result);
});

test("two_sum_3", () => {
  const example = twoSum([3, 3], 6);
  const example_result = [0, 1];
  expect(example).toStrictEqual(example_result);
});

// -----------------------------------------------------
//! link: //leetcode.com/problems/two-sum/description/
// -----------------------------------------------------
// ! EXAMPLE 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// ! EXAMPLE 2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// ! EXAMPLE 3
// Input: nums = [3,3], target = 6
// Output: [0,1]
