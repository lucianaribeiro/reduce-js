/**
 * 
 * 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 *
 * 

function shoppingSpree(arr) {
   // your code here    
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005
 */

function main() {
  var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 },
  ];

  console.log(shoppingSpree(wishlist));
}

const shoppingSpree = (list) => {
  return list.reduce((acc, curr) => acc + curr.price, 0);
};

main();
