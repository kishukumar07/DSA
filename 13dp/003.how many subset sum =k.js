function countSubsetsTopDown(arr, targetSum) {
  const n = arr.length;
  const memo = Array(n)
    .fill(null)
    .map(() => Array(targetSum + 1).fill(-1));

  function solve(index, currentSum) {
    if (currentSum === 0) {
      return 1;
    }
    if (index >= n || currentSum < 0) {
      return 0;
    }
    if (memo[index][currentSum] !== -1) {
      return memo[index][currentSum];
    }

    const include = solve(index + 1, currentSum - arr[index]);
    const exclude = solve(index + 1, currentSum);

    memo[index][currentSum] = include + exclude;
    return memo[index][currentSum];
  }

  return solve(0, targetSum);
}

const arr = [1, 2, 3, 4, 5];
const X = 7;
const result = countSubsetsTopDown(arr, X);
console.log(`Number of subsets with sum ${X}: ${result}`);