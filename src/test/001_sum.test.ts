import sum from "../leetcode/000__exampleTest";
import { assert, describe, it } from "vitest";

// Only this suite (and others marked with only) are run
describe.only("tes Example sum", () => {
  it("testsum", () => {
    assert.equal(sum(1, 2), 3);
  });
});
