/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {


    const arr = prices;

    let dp = new Array(arr.length + 1);

    for (let i = 0; i < arr.length; i++) {
        dp[i] = new Array(2).fill(-1);
    }

    // console.log(dp)
    return stock(dp, arr)





};


function stock(dp, arr, i = 0, buy = 1) {


    if (i >= arr.length) return 0;

    if (dp[i][buy] != -1) return dp[i][buy];

    let op1, op2;

    if (buy) {
        op1 = stock(dp, arr, i + 1, 1);
        op2 = -arr[i] + stock(dp, arr, i + 1, 0);
    }
    else {
        op1 = stock(dp, arr, i + 1, 0);
        op2 = arr[i];
    }

    return dp[i][buy] = Math.max(op1, op2);

}