// Solution number 2
let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function SumOfPair(array) {
  let left = 0;
  let right = array.length - 1;

    while (left < right) {
        console.log("outer loop");
    if (array[left] + array[right] === 0) {
      return [array[left], array[right]];
    } else if (array[left] + array[right] > 0) {
      right--;
    } else {
        left++;
    }
  }
}

const result = SumOfPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

//  time complixivity - o(n);
