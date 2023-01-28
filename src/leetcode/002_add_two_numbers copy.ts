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
  function reverseString(str: string) {
    return str.split("").reverse().join("");
  }
  // console.log(l1?.val);
  // console.log("====================================");
  // console.log("----------------------");
  // console.log("====================================");
  // console.log(l2);
  let result: ListNode | null = null;
  let input1: string | null = null;
  let input2: string | null = null;

  //   // for(let i:number=0; i<=100;i++){
  let temp: ListNode | null = l1;
  const fn_ulang = (temp: ListNode | null): ListNode | null | void => {
    let angka: number = temp.val;
    // console.log(angka, input1);
    temp = temp.next;
    if (angka) {
      if (input1 === null) {
        input1 = `${angka}`;
      } else {
        input1 += `${angka}`;
      }
      if (temp !== null) {
        fn_ulang(temp);
      }
    }
  };
  fn_ulang(l1);

  const fn_ulang2 = (temp: ListNode | null): ListNode | null | void => {
    let angka: number = temp.val;
    // console.log(angka, input2);
    temp = temp.next;
    if (angka) {
      if (input2 === null) {
        input2 = `${angka}`;
      } else {
        input2 += `${angka}`;
      }
      if (temp !== null) {
        fn_ulang2(temp);
      }
    }
  };
  fn_ulang2(l2);
  let num1: number = parseInt(reverseString(`${input1}`));
  let num2: number = parseInt(reverseString(`${input2}`));
  let numResult: number = num1 + num2;
  let rs: string = reverseString(`${numResult}`);
  // let rsAkhir: string = reverseString(rs);

  //   //  result=rs.split("");
  // console.log(input1, input2);
  // console.log(num1, num2, rs, rs.length);

  // let rsTemp: ListNode = new ListNode();
  // let rsTemp1: ListNode = new ListNode();
  // let rsTemp3: ListNode = new ListNode();
  let myArr: Array<ListNode | null> | null = [];
  for (let i: number = 0; i < rs.length; i++) {
    console.log(rs[i]);

    // let tmp: ListNode = new ListNode();
    // tmp.val = parseInt(rs[i]);
    myArr[i] = new ListNode(parseInt(rs[i]));
    // if (i > 0) {
    //   let tmp: ListNode = new ListNode(parseInt(rs[i]));
    //   rsTemp.next = tmp;
    // } else {
    //   let tmp: ListNode = new ListNode(parseInt(rs[i]));
    //   rsTemp.val = tmp;
    // }
  }

  let rsTemp: Array<ListNode | null> | null = [];
  // let rsAkhir: ListNode = new ListNode();
  let newListNode = new ListNode(0);
  let rsAkhir = newListNode;
  let tempLast: Array<ListNode | null> | null = [];
  let tempLastNext: Array<ListNode | null> | null = [];
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;
  for (let i: number = 0; i < rs.length; i++) {
    // for (let j: number = 0; j < rs.length; j++) {
    sum = parseInt(rs[i]);
    head.next = new ListNode(sum);
    head = head.next;
    console.log(head);
    if (i < 1) {
      head = new ListNode(sum);
      List.next = head;
      // List.val = parseInt(rs[i]);
    }
    List.next = head;
    sum = carry;
    carry = 0;
    // }
  }
  console.log("====================================");
  console.log(List);
  console.log("====================================");
  // rsTemp.next = myArr[i];
  // if (i > 0) {
  //   rsTemp.next = myArr[i];
  //   // tempLast[i] = rsTemp.next;
  // } else {
  //   rsTemp.val = parseInt(rs[i]);
  // }
  // tempLast[i] = new ListNode();
  // tempLastNext[i] = new ListNode();
  // rsTemp[i] = new ListNode();
  // rsTemp[i].next = tempLast[i - 1];
  // tempLastNext[i].val = myArr[i];
  // tempLastNext[i].next = myArr[i - 1];
  // tempLast[i].val = parseInt(rs[i]);
  // tempLast[i].next = tempLast[i - 1];
  // rsAkhir.val = tempLast[i]?.val;
  // rsAkhir.next = tempLast[i]?.next;
  // rsAkhir.next = new ListNode(parseInt(rs[i]));
  // console.log(rsAkhir);
  // rsAkhir = rsAkhir.next;
  // tempLast[i].next = myArr[i - 1];
  // }
  // console.log("====================================");
  // console.log(myArr);
  // console.log(rsTemp);
  // console.log(tempLast);
  // console.log(rsAkhir);
  console.log("====================================");
  // result = tempLast[rs.length - 1];
  result = List;
  // console.log("====================================");
  console.log(result);
  console.log("====================================");
  return result;
};

export default solution;
