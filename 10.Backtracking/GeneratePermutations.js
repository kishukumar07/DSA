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