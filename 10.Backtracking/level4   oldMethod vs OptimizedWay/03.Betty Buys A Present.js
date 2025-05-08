function runProgram(input) {
    const [target, k] = input.trim().split(" ").map(Number);
    const coins = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    let result = [];
    ways(coins, target, k, result, [], 0); // Pass empty array for subset and 0 for start
  
    if (result.length === 0) {
      console.log(-1);
    } else {
      for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(" "));
      }
    }
  }
  
  function ways(coins, target, k, result, subset, start) {
    if (start === coins.length) {
      if (subset.length === k && subset.reduce((a, b) => a + b, 0) === target) {
        result.push([...subset]);
      }
      return;
    }
  
    // Include the current coin
    ways(coins, target, k, result, [...subset, coins[start]], start + 1);
  
    // Exclude the current coin
    ways(coins, target, k, result, subset, start + 1);
  }
  
  //Overall Time Complexity = O(2ⁿ × n)













  //optional way but optimized .....


function findCombinations(P, K) {
    let result = [];

    function backtrack(start, path, total) {
        
        
        if (path.length === K) {
            if (total === P) {
                result.push([...path]);
            }
            return;
        }


        for (let i = start; i <= 9; i++) {  // Coins from 1 to 9
            path.push(i);
            backtrack(i + 1, path, total + i);
            path.pop();
        }
       
        
    }

    backtrack(1, [], 0);

    if (result.length === 0) {
        console.log(-1);
    } else {
        result.forEach(comb => console.log(...comb));
    }
}

// Example usage:
// const input = "8 2";  // Replace this line with actual input if needed
// const [P, K] = input.split(' ').map(Number);
// findCombinations(P, K);
