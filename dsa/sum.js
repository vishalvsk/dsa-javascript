//  sum of all natural numbers
/*
function sumOfNumber(num) {
  let sum = 0;
  for (let i = 1; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

console.log(sumOfNumber([1, 2, 3, 4, 5]));

*/

//  sum of all the digits

// function countOfDigits(num) {
//   let count = 0;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//       count++;
//     //   console.log(num);
//   }

//   return count;
// }

// console.log(countOfDigits(123554124));

// var isPalindrome = function (x) {
//   let myArr = String(x)
//     .split("")
//     .map((num) => {
//     //   console.log(num);
//         return Number(num)

//     });
//     // console.log(myArr);
//     let myArr2 = myArr;
//     myArr.reverse();
//     console.log(myArr);
//     console.log(myArr2);
//     if (myArr.join('') === myArr2.join('')) {
//         return true
//     }
//     return false;
// };

// isPalindrome(123);

//  find the element present in an array if yes return that else return -1
// let arr = [1, 10, 5, 6, 8, 9, 10, 56, 74, 25, "5"];
// function findElement(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     if (arr[i] == target) {
//       return true;
//     }
//   }

//   return -1;
// }

// console.log(findElement(arr, 5));
// console.log(arr.indexOf(10));


