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


//to get ouput in sorted order  we use sorting  

function runProgram(input) {
  let lines = input.trim().split("\n");
  let n = +lines[0];
  let arr = lines[1].split(" ").map(Number);


  let result = [];
  generatePermutations(arr, n, 0, result);
  
  console.log(result.sort().join("\n"));   //sorting the result. 
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
}

function generatePermutations(arr, n, index, result) {
  if (index === n) {
    result.push(arr.join(" ")); // Store permutation
    return;
  }

  let used = {}; // Object to track duplicate elements at the current level

  for (let i = index; i < n; i++) {
    if (used[arr[i]]) continue; // Skip duplicate values
    used[arr[i]] = true;

    swap(arr, i, index); // Swap
    generatePermutations(arr, n, index + 1, result);
    swap(arr, i, index); // Backtrack
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


// 🔹 Test Case 1:
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

// 🔹 Test Case 2:
// 1 1 2
// 1 2 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 1 1

// 🔹 Test Case 3:
// 1 2 3 4
// 1 2 4 3
// 1 3 2 4
// 1 3 4 2
// ...
// 4 3 2 1

// 🔹 Test Case 4:
// 5

// 🔹 Test Case 5:
// 8 9
// 9 8