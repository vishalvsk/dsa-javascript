let person = {
  name: "vishal",
  age: 26,
};

let Arr = ["apple", "banana", "papaya", person];
// console.log(Arr.push("orange"));

// Arr.pop("orange");

//  top of the array
// Arr.unshift("banana");
//  console.log(Arr);

//  loops in array
// 1 - for loop and while loop
// for (let i = 0; i < Arr.length; i++) {
//     const element = Arr[i];
//     console.log(element);
// }

const Number = [1, 2, 3, 4, 5];
const newNum = Number.filter((item, index, array) => {
  return item > 3;
});

// console.log(newNum);

const number2 = [2, 3, 5, 8, 9, 10, 11, 15];

// const sum = number2.reduce((prev, index) => {
//     return prev + index;
// }, 0);

// console.log(sum);

// const some = number2.some((item, index, array) => {
//     return item > 15;
// });

// console.log(some);

//  spred and rest operator

const num = [1, 2, 3];
const num2 = [4, 5, 6, 7];

const finalNums = [...num, ...num2]; // spread operator
// console.log(finalNums);

//  rest operator 
function sum(...numbers) {
  return numbers;
}

console.log(sum(num, num2, "5", 10));

//  More Arrays methods
//  concat method 
const newArr = num.concat(num2,Arr)
console.log(newArr);

//  slice

const newArr2 = num.slice(num2, num);
console.log(newArr2);

const unsorted = [5, 7, 2, 1, 3, 6, 15, 47];

unsorted.sort((a,b) => a===b);
console.log(unsorted);
