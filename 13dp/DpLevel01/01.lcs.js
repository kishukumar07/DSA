/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//TOP-DOWN => ...

var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;
  //2d
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1).fill(-1);
  }

  return lcs(text1, text2, n, m, dp);
};

function lcs(s, t, n, m, dp) {
  if (n === 0 || m === 0) return 0;

  if (dp[n][m] != -1) return dp[n][m];

  if (s[n - 1] === t[m - 1]) {
    return (dp[n][m] = 1 + lcs(s, t, n - 1, m - 1, dp));
  }

  return (dp[n][m] = Math.max(
    lcs(s, t, n - 1, m, dp),
    lcs(s, t, n, m - 1, dp)
  ));
}

//BOTTOM-UP =>

var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;

  let dp = new Array(n + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(m + 1).fill(0);
  }

  // for (let i = 0; i <= m; i++) {
  //     dp[0][i] = 0;
  // }   //if n =0  the lcs =0

  // for (let i = 0; i <= n; i++) {
  //     dp[i][0] = 0;
  // } //if m = 0 the lcs will be 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        //0 based indexing
        dp[i][j] = 1 + dp[i - 1][j - 1]; //extending the lcs result by +1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[n][m];
};

//Tc => O(n+1 * m+1)
//sc =O(n^2)
