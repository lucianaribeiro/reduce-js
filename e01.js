// 1) Turn an array of numbers into a total of all the numbers

/**
 * function total(arr) {
   // your code here
}

console.log(total([1,2,3])); // 6
 */

const array = [1, 2, 3];

function total(array) {
  console.log("array", array);
  return array.reduce((acc, curr) => {
    console.log("acc", acc);
    return acc + curr;
  }, 0);
}

console.log(total(array));
