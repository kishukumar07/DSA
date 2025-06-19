let input = `
3
1 50 50
50 50 50 
1 50 50 
`;

console.log(money_shoping(input));

function money_shoping(input) {
  let lines = input.trim().split("\n");
  let n = +lines[0];

  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr[i - 1] = lines[i].trim().split(" ").map(Number);
  }

  return minimize(arr, n);

}

function minimize(arr, n) {
  let dp = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(3).fill(0);
  }
  //  dp[i][j] => represents the price till the ith shop and with jth item.

  //base case => we'll fill the base case for the 0th shop first
  dp[0][0] = arr[0][0]; //if we didnt buy any item
  dp[0][1] = arr[0][1]; //if we buy first item
  dp[0][2] = arr[0][2]; //if we buy 2nd item
 
  //we'll have to continue from the 2nd shop
  for (let i = 1; i < n; i++) {
    dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }


  return Math.min(dp[n-1][0] , dp[n-1][1], dp[n-1][2]);
}
 