//  checking sum zero problem
//  [-5,-4,-3,-2,0,2,4,6,8];

// we have to check the first two numbers which has zero sum

// function getSumOfNum(array) {
//   for (let number of array) {
//     // console.log(number);
//     console.log("outer loop");
//       for (i = 1; i < array.length; i++) {
//           console.log("inner loop");
//       if (number + array[i] === 0) {
//         return([number, array[i]]);
//       }
//     }
//   }
// }
// const result = getSumOfNum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// function getSumOfNum(array) {
//   for (let number of array) {
//     console.log("outer loop");
//     // console.log(number);
//     for (let i = 1; i < array.length; i++) {
//       console.log("inner loop");
//       if (number + array[i] === 0) {
//         return ([number, array[i]]);
//       }
//     }
//   }
// }

const result = getSumOfNum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

let array = [-5, -4, -3, -2, 0, 9, 8, 5, 7, 2];
let array2 = array.sort();
// console.log(array2);
function getSumOfNUmber(array2) {
    for (let number of array2) {
        // console.log(number);
        console.log("outer loop");
        for (let j = 1; j < array2.length; j++){
            console.log("inner loop");
            if (number + array[j] === 0) {
                return ([number, array2[j]]);
            }
        }
    }
}
console.log(getSumOfNUmber(array2));
