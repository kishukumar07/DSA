function runProgram(input) {
    let lines = input.trim().split("\n");
    let n = +lines[0];
    let arr = lines[1].trim().split(" ").map(Number);
    let k = +lines[2];

    const dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));

    console.log(isSubsetSum(arr, 0, k, dp) ? 1 : 0);
}

function isSubsetSum(arr, i, k, dp) {
    if (k === 0) return true;
    if (i === arr.length || k < 0) return false;

    if (dp[i][k] !== -1) return dp[i][k];

    // Include arr[i]
    const include = isSubsetSum(arr, i + 1, k - arr[i], dp);

    // Exclude arr[i]
    const exclude = isSubsetSum(arr, i + 1, k, dp);

    dp[i][k] = include || exclude;

    return dp[i][k];
}


// ⏱️ Time Complexity:
// Time: O(n * k) due to memoization
// Space: O(n * k) for the dp array and recursion stack
