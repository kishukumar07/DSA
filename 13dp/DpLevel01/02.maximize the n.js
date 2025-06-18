// Recursive Approach
function maximizeN(n) {
  if (n <= 1) return n;
  return Math.max(
    n,
    maximizeN(Math.floor(n / 2)) +
      maximizeN(Math.floor(n / 3)) +
      maximizeN(Math.floor(n / 4))
  );
}

// Memoization Approach
let dp = new Map();

function maximizeNMemo(n) {
  if (n <= 1) return n;
  if (dp.has(n)) return dp.get(n);

  let result = Math.max(
    n,
      maximizeNMemo(Math.floor(n / 2)) +
      maximizeNMemo(Math.floor(n / 3)) +
      maximizeNMemo(Math.floor(n / 4))
  );
  dp.set(n, result);
  return result;
}

// Bottom-Up Approach
function maximizeNBottomUp(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(
      i,
      dp[Math.floor(i / 2)] + dp[Math.floor(i / 3)] + dp[Math.floor(i / 4)]
    );
  }

  return dp[n];
}
