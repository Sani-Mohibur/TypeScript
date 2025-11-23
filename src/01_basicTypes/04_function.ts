//normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
//console.log(add(2, 2));

//arrow function
const addTwoNum = (num1: number, num2: number): number => num1 + num2;
//console.log(addTwoNum(4, 4));

//object => function => method
const user = {
  name: "Fahim",
  balance: 420,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};
//console.log(user.addBalance(80));

//map function in loop
const arr: number[] = [1, 4, 6, 9];
//const squreArr = arr.map((element) => element * element);
const squreArr = arr.map((element: number): number => element * element);
console.log(squreArr);
