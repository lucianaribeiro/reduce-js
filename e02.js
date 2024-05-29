// 2) Turn an array of numbers into a long string of all those numbers.
/**
 * function stringConcat(arr) {
   // your code here 
}

console.log(stringConcat([1,2,3])); // "123"
 */

// option 1
const arrayData = [1, 2, 3];

const stringConcat = (array) => {
  return array.reduce((acc, curr) => acc.concat(curr), "");
};

console.log(stringConcat(arrayData));

// option 2

const arrayData2 = [1, 2, 4];

const stringConcat2 = (array) => {
  return array.reduce((acc, curr) => acc + curr, "");
};

console.log(stringConcat2(arrayData2));
