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

import sum from "../../leetcode/001_two_sum";
import { assert, describe, it } from "vitest";

// Only this suite (and others marked with only) are run
describe.only("tes Example sum", () => {
  it("testsum", () => {
    assert.equal(sum(1, 2), 3);
  });
});
describe.only("tes Example sum", () => {
  it("testsum", () => {
    assert.equal(sum(2, 3), 5);
  });
});
describe.only("tes Example sum", () => {
  it("testsum", () => {
    assert.equal(sum(4, 5), 9);
  });
});
