function unboundedKnapsack(W, val, wt) {
  const n = val.length;
  const dp = Array(n)
    .fill(null)
    .map(() => Array(W + 1).fill(-1));

  function solve(i, capacity) {
    if (i === n) return 0;
    if (capacity <= 0) return 0;

    if (dp[i][capacity] !== -1) return dp[i][capacity];

    // Don't take the item
    const dontTake = solve(i + 1, capacity);

    // Take the item (as many times as we want)
    let take = 0;
    if (wt[i] <= capacity) {
      take = val[i] + solve(i, capacity - wt[i]); //i+1 to i ;
    }

    return (dp[i][capacity] = Math.max(dontTake, take));
  }

  return solve(0, W);
}
const W = 100;
const val = [10, 30, 20];
const wt = [5, 10, 15];

console.log("Maximum value:", unboundedKnapsack(W, val, wt)); //300
