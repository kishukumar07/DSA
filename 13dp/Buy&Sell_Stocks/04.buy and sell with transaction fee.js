/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {



    let dp = new Array(prices.length+ 1);
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(2).fill(-1);
    }
    return stock(dp, prices, fee);

};



function stock(dp, arr, fee, i = 0, buy = 1) {

    if (i >= arr.length) return 0;

    if (dp[i][buy] != -1) return dp[i][buy];


    if (buy) {
        return dp[i][buy] = Math.max(stock(dp, arr, fee, i + 1, 1), -arr[i] + stock(dp, arr, fee, i + 1, 0));
    } else {
        return dp[i][buy] = Math.max(stock(dp, arr, fee, i + 1, 0), arr[i] - fee + stock(dp, arr, fee, i + 1, 1))
    }


}