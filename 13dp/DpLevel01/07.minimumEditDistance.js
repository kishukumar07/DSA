var minDistance = function (word1, word2) {
  let s = word1,
    t = word2,
    n = word1.length,
    m = word2.length;

  let dp = new Array(n + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(m + 1).fill(-1);
  }

  return solve(s, t, n, m, dp);
};

function solve(s, t, n, m, dp) {
  if (n == 0) return m;
  if (m == 0) return n;
  if (dp[n][m] != -1) return dp[n][m];

  if (s[n - 1] === t[m - 1]) {
    // Characters match, no operation needed
    return (dp[n][m] = solve(s, t, n - 1, m - 1, dp));
  }

  let op1 = 1 + solve(s, t, n, m - 1, dp); //add
  let op2 = 1 + solve(s, t, n - 1, m, dp); //rem
  let op3 = 1 + solve(s, t, n - 1, m - 1, dp); //del
  return (dp[n][m] = Math.min(op1, op2, op3));
}
