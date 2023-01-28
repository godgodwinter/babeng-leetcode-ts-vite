const twoSum = (nums: number[], target: number): number[] => {
  let result: number[] = [0];
  for (let [index, num] of nums.entries()) {
    if (result[num] !== undefined) return [result[num], index];
    result[target - num] = index;
  }
  //your code
  return result;
};
export default twoSum;

// -----------------------------------------------------
//!other example
// -----------------------------------------------------
// import { assert, describe, it } from "vitest";

// import sum from "../../leetcode/001_two_sum";
// test("example1", () => {
//   const example = sum(1, 2);
//   const example_result = 3;
//   expect(example).toBe(example_result);
// });

// const example = twoSum([2, 7, 11, 15], 9);

// -----------------------------------------------------

// const sum = (a: number, b: number): number => {
//   return a + b;
// };
// export default sum;
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
