function runProgram(input) {
  let lines = input.trim().split("\n");
  let t = +lines[0];
  let j = 1;

  while (t > 0) {
    let [m, n] = lines[j++].trim().split(" ").map(Number);
    let men = lines[j++].trim().split(" ").map(Number);
    let women = lines[j++].trim().split(" ").map(Number);
// console.log(men,women)
    console.log(check(men, women, m, n));
    t--;
  }
}

function check(men, women, m, n) {
  if (m > n) return "NO";

  men.sort((a, b) => a - b);
  women.sort((a, b) => a - b);

  console.log(men ,"\n",women); 


  for (let i = 0; i < n; i++) {
    if (men[i] <= women[i]) return "NO";
  }

  return "YES";
}

// Sample input simulation
const fs = require("fs");
const path = require("path");

// Simulating input
const input = `1
4 5
2 5 6 8
3 8 5 1 7`;

runProgram(input);
