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




