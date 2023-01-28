import sum from "@/leetcode/000__exampleTest";
import { assert, describe, it } from "vitest";

describe.only("test Example 1", () => {
  it("Example 1", () => {
    assert.equal(sum(1, 2), 3);
  });
});
describe.only("test Example 2", () => {
  it("Example 2", () => {
    assert.equal(sum(2, 3), 5);
  });
});
describe.only("test Example 3", () => {
  it("Example 3", () => {
    assert.equal(sum(4, 5), 9);
  });
});
// -----------------------------------------------------
//! link: -
// -----------------------------------------------------
// ! EXAMPLE 1
// Input: a = 1, b=2
// Output: 3
// Explanation: a+b=output
// ! EXAMPLE 2
// Input: a = 2, b=3
// Output: 5
// Explanation: a+b=output
// ! EXAMPLE 3
// Input: a = 4, b=5
// Output: 9
// Explanation: a+b=output
