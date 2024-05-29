/**
 * 
 * 5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
   // your code here    
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 */

function main() {
  let arrays = [["1", "2", "3"], [true], [4, 5, 6]];

  console.log(flatten(arrays));
}

function flatten(array) {
  // return array.reduce((acc, curr) => {
  //   curr.forEach((element) => {
  //     acc.push(element);
  //   });

  //   return acc;
  // }, []);

  return array.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}

main();
