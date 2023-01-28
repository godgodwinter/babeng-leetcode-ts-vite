import twoSum from "../../leetcode/001_two_sum";
import { assert, describe, it } from "vitest";

describe.only("test Example 1", () => {
  it("EXAMPLE 1", () => {
    assert.equal(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
});

describe.only("test Example 2", () => {
  it("EXAMPLE 2", () => {
    assert.equal(twoSum([3, 2, 4], 6), [1, 2]);
  });
});

describe.only("test Example 3", () => {
  it("EXAMPLE 3", () => {
    assert.equal(twoSum([3, 3], 6), [0, 1]);
  });
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
