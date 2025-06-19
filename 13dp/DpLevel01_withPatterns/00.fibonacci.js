/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  var dp = new Array(n + 1).fill(-1);

  return solve(n, dp);
};

function solve(n, dp) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (dp[n] !== -1) return dp[n];

  return (dp[n] = solve(n - 1, dp) + solve(n - 2, dp));
}

//tc=>O(N)
//space =>O(N)
