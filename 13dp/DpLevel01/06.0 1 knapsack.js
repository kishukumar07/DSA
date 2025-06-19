/**
 * @param {number} W
 * @param {number[]} val
 * @param {number[]} wt
 * @returns {number}
 */

//TOP DOWN APPROACH =MEMOIZATION

class Solution {
  knapsack(W, val, wt) {
    // code here
    let dp = new Array(val.length + 1);
    for (let i = 0; i <= val.length; i++) {
      dp[i] = new Array(W + 1).fill(-1);
    }

    return solve(W, val, wt, 0, dp);
  }
}

function solve(W, val, wt, i = 0, dp) {
  if (i == val.length) return 0;

  if (W <= 0) return 0;

  if (dp[i][W] != -1) return dp[i][W];

  if (wt[i] > W) return solve(W, val, wt, i + 1, dp);

  let takeit = val[i] + solve(W - wt[i], val, wt, i + 1, dp);
  let donttakeit = solve(W, val, wt, i + 1, dp);

  return (dp[i][W] = Math.max(takeit, donttakeit));
}
//TC = N*W
//SC= N*W

//BOttom UP
function solve(W, val, wt, i, dp) {
  for (let i = 0; i <= W; i++) {
    dp[0][i] = 0;
  }
  for (let i = 0; i <= val.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i <= val.length; i++) {
    for (let j = 1; j <= W; j++) {
      if (wt[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          val[i - 1] + dp[i - 1][j - wt[i - 1]],
          dp[i - 1][j]
        );
      }
    }
  }

  return dp[val.length][W];
}
