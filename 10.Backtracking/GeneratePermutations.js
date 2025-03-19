function runProgram(input) {
    let lines = input.trim().split("\n");
    let n = +lines[0];
    let arr = lines[1].split(" ").map(Number);
  
    let result = [];
    possibleSequence(arr, n, 0, result);
  
    console.log(result.join("\n")); // Print all permutations
  }
  
  // Swap function
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Shorter way to swap using destructuring
  }
  
  // Generate all permutations using backtracking
  function possibleSequence(arr, n, k, result) {
    if (k === n) {
      result.push(arr.join(" ")); // Store each permutation as a string
      return;
    }
  
    for (let i = k; i < n; i++) {
      swap(arr, i, k);  // Swap elements
      possibleSequence(arr, n, k + 1, result);
      swap(arr, i, k);  // Swap back (backtracking)
    }
  }




  //this way u can get ans in structured and sorted manner 

 function runProgram(input) {
  let lines = input.trim().split("\n");
  let n = +lines[0];
  let arr = lines[1].split(" ").map(Number);

  arr.sort((a, b) => a - b); // Ensure the array starts in sorted order
  let result = [];
  possibleSequence(arr, n, 0, result);
  console.log(result.join("\n"));
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap using destructuring
}

function possibleSequence(arr, n, k, result) {
  if (k === n) {
    result.push(arr.join(" ")); // Store permutation
    return;
  }

  for (let i = k; i < n; i++) {
    swap(arr, i, k); // Swap elements
    possibleSequence(arr, n, k + 1, result);
    swap(arr, i, k); // Swap back (backtracking)
  }
}

function testCases() {
  console.log("🔹 Test Case 1:");
  runProgram(`3\n1 2 3`);
  console.log("\n🔹 Test Case 2:");
  runProgram(`3\n1 1 2`);
  console.log("\n🔹 Test Case 3:");
  runProgram(`4\n1 2 3 4`);
  console.log("\n🔹 Test Case 4:");
  runProgram(`1\n5`);
  console.log("\n🔹 Test Case 5:");
  runProgram(`2\n9 8`);
}

testCases();
