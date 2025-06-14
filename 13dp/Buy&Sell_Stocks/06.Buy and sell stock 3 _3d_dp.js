/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {


    let k = 2;

    let dp = new Array(prices.length + 1);
    for (let i = 0; i <= prices.length; i++) {
        dp[i] = new Array(2).fill(null).map(() => { return new Array(k + 1).fill(-1) });

    }

return stock(dp, prices, 0, 1, k); 

};



function stock(dp, arr, i, buy, k) {

    if (i == arr.length || k === 0) return 0;
    if (dp[i][buy][k] != -1) return dp[i][buy][k];


    if (buy) {


        return dp[i][buy][k] = Math.max(stock(dp, arr, i + 1, 1, k),
            -arr[i] + stock(dp, arr, i + 1, 0, k))

    } else {
        return dp[i][buy][k] = Math.max(stock(dp, arr, i + 1, 0, k--),
            arr[i] + stock(dp, arr, i + 1, 1, k))

    }


}