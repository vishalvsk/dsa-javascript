// Solution number 2
// let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// function SumOfPair(array) {
//   let left = 0;
//   let right = array.length - 1;

//     while (left < right) {
//         console.log("outer loop");
//     if (array[left] + array[right] === 0) {
//       return [array[left], array[right]];
//     } else if (array[left] + array[right] > 0) {
//       right--;
//     } else {
//         left++;
//     }
//   }
// }

// const result = SumOfPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

//  time complixivity - o(n);

//  2nd time

// let array = [-4, -5, -9, -8, -2, 0, 5, 6, 8, 1, 2, 3];
// let array2 = array.sort();
// console.log(array2);

// function SumOfPair(array2) {
//   let left = 0;
//   let right = array2.length - 1;

//   while (left < right) {
//     if (array2[left] + array[right] === 0) {
//       return [array2[left], array2[right]];
//     } else if (array2[left] + array[right] > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// const result = SumOfPair(array2);
// console.log(result);

//  3rd time

