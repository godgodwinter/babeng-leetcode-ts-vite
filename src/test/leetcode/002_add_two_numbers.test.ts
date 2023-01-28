import solution from "@/leetcode/002_add_two_numbers";
import { expect } from "vitest";
//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

interface ISample {
  name: string;
  input1: ListNode | null;
  input2: ListNode | null;
  output: ListNode | null;
}

// let newListNode = new ListNode(0);
// let headOfNewListNode = new ListNode(0);
// headOfNewListNode = new ListNode(0);
// headOfNewListNode.next = 4;

// dummyTemp.val = 3;
// dummyOne.next = dummyTemp;
// dummyOne.next = 3;

// dummyTwo.val = 5;
// dummyTwo.val = 6;
// dummyTwo.val = 4;
// dummyResultOne.val = 7;
// dummyResultOne.val = 0;
// dummyResultOne.val = 8;

let sample: [ISample] = [
  {
    name: "example1",
    input1: null,
    input2: null,
    output: null,
  },
];

let dummyOne = new ListNode(0);
let dummyTwo = new ListNode();
let dummyThree = new ListNode();
dummyThree.val = 3;
dummyTwo.val = 4;
dummyTwo.next = dummyThree;
dummyOne.val = 2;
dummyOne.next = dummyTwo;
sample[0].input1 = dummyOne;

let input2Dummy1 = new ListNode(0);
let input2Dummy2 = new ListNode();
let input2Dummy3 = new ListNode();
input2Dummy1.val = 4;
input2Dummy2.val = 6;
input2Dummy2.next = input2Dummy1;
input2Dummy3.val = 5;
input2Dummy3.next = input2Dummy2;
sample[0].input2 = input2Dummy3;

let result1 = new ListNode(0);
let result2 = new ListNode();
let result3 = new ListNode();
result1.val = 8;
result2.val = 0;
result2.next = result1;
result3.val = 7;
result3.next = result2;
sample[0].output = result3;
//   //   { name: "example1", input: [0], input2: [0], output: [0] },
//   //   {
//   //     name: "example1",
//   //     input: [9, 9, 9, 9, 9, 9, 9],
//   //     input2: [9, 9, 9, 9],
//   //     output: [8, 9, 9, 9, 0, 0, 0, 1],
//   //   },
// ];
for (let [index, element] of sample.entries()) {
  test(element.name, () => {
    const example = solution(element.input1, element.input2);
    const example_result = element.output;
    expect(example).toStrictEqual(example_result);
  });
}

// -----------------------------------------------------
//! link: https://leetcode.com/problems/add-two-numbers/
// -----------------------------------------------------
// ! EXAMPLE 1
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// ! EXAMPLE 2
// Input: (l1 = [0]), (l2 = [0]);
// Output: [0];
// ! EXAMPLE 3
// Input: (l1 = [9, 9, 9, 9, 9, 9, 9]), (l2 = [9, 9, 9, 9]);
// Output: [8, 9, 9, 9, 0, 0, 0, 1];
// explanation=9999999+9999=10.009.998
