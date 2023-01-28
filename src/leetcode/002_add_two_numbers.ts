//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//! SOLUTION 1

const solution = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  //   function reverseString(str) {
  //     return str.split("").reverse().join("");
  //   }
  console.log(l1);
  console.log("====================================");
  console.log("----------------------");
  console.log("====================================");
  console.log(l2);
  let result: ListNode | null = null;
  let input1: string | null = null;
  let input2: string | null = null;

  //   // for(let i:number=0; i<=100;i++){
  //   let temp: ListNode | null = l1;
  //   const fn_ulang = (temp: ListNode | null): ListNode | null | void => {
  //     let angka: number = temp.val;
  //     console.log(angka, input1);
  //     temp = temp.next;
  //     if (angka) {
  //       if (input1 === null) {
  //         input1 = `${angka}`;
  //       } else {
  //         input1 += `${angka}`;
  //       }
  //       if (temp !== null) {
  //         fn_ulang(temp);
  //       }
  //     }
  //   };
  //   fn_ulang(l1);

  //   const fn_ulang2 = (temp: ListNode | null): ListNode | null | void => {
  //     let angka: number = temp.val;
  //     console.log(angka, input2);
  //     temp = temp.next;
  //     if (angka) {
  //       if (input2 === null) {
  //         input2 = `${angka}`;
  //       } else {
  //         input2 += `${angka}`;
  //       }
  //       if (temp !== null) {
  //         fn_ulang(temp);
  //       }
  //     }
  //   };
  //   fn_ulang2(l2);
  //   let num1: number = parseInt(reverseString(`${input1}`));
  //   let num2: number = parseInt(reverseString(`${input2}`));
  //   let numResult: number = num1 + num2;
  //   let rs: string = `${numResult}`;

  //   //  result=rs.split("");
  //   console.log(input1, input2);
  //   console.log(num1, num2, rs);
  return result;
};

export default solution;
