//NORMAL GREEDY APPROACH  ...
class Solution {
  fractionalknapsack(val, wt, capacity) {
    // code here
    let arr = new Array(val.length);

    for (let i = 0; i < val.length; i++) {
      arr[i] = new Array(3).fill(0);
    }

    for (let i = 0; i < val.length; i++) {
      arr[i][0] = val[i] / wt[i];
      arr[i][1] = val[i];
      arr[i][2] = wt[i];
    }
    arr.sort((a, b) => b[0] - a[0]);
    return fun(arr, capacity);
  }
}

function fun(arr, capacity) {
  let maxVal = 0,
    i = 0;
  while (i < arr.length && capacity >= arr[i][2]) {
    maxVal += arr[i][1];
    capacity -= arr[i][2];
    i++;
  }

  if (i < arr.length) {
    maxVal += capacity * arr[i][0];
  }
  return maxVal;
}





