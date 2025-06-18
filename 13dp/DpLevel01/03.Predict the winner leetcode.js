/**
 * Determines whether Player 1 can win assuming both players play optimally.
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
  let n = nums.length;
  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(n + 1).fill(-1);
  }

  let myResult = fun(nums, dp, 0, n - 1); // Player 1's max possible score
  let totalSum = nums.reduce((a, b) => a + b, 0);
  let player2 = totalSum - myResult;

  return myResult >= player2;
};

function fun(arr, dp, s, e) {
  if (s > e) return 0;
  if (s === e) return arr[s];
  if (dp[s][e] !== -1) return dp[s][e];

  let op1 =
    arr[s] + Math.min(fun(arr, dp, s + 2, e), fun(arr, dp, s + 1, e - 1));
  let op2 =
    arr[e] + Math.min(fun(arr, dp, s + 1, e - 1), fun(arr, dp, s, e - 2));

  return (dp[s][e] = Math.max(op1, op2));
}

// Tc=N*M
// sc=N*m
