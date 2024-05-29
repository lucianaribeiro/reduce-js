/**
 * 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
   // your code here    
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7
 */

function main() {
  var votes = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

  console.log("Total Votes: ", totalVotes(votes));
  console.log("Total Candidates: ", countCandidates(votes).length);
  console.log("Voted Candidates: ", getCandidatesByVote(votes, true));
  console.log("Voted Candidates: ", getCandidatesByVote(votes, false));
}

const totalVotes = (data) => {
  return data.reduce((acc, curr) => {
    return curr.voted ? acc + 1 : acc;
  }, 0);
};

const countCandidates = (data) =>
  data.reduce((acc, curr) => {
    if (!acc.includes(curr.name)) {
      acc.push(curr.name);
    }
    return acc;
  }, []);

const getCandidatesByVote = (data, vote) => {
  return data.reduce((acc, curr) => {
    if (vote && curr.voted) {
      acc.push([curr["name"], curr["voted"]]);
    } else if (!vote && !curr.voted) {
      acc.push([curr["name"], curr["voted"]]);
    }

    return acc;
  }, []);
};

main();
