/**
 * Finds the minimum cost to make k elements equal in an array
 * by either increasing or decreasing values with given costs.
 *
 * @param {number[]} arr - The array of integers.
 * @param {number} n - Length of the array.
 * @param {number} x - Cost to increase an element by 1.
 * @param {number} y - Cost to decrease an element by 1.
 * @param {number} k - Number of elements to make equal.
 * @returns {number} - Minimum cost to achieve the goal.
 */
function solve(arr, n, x, y, k) {
    arr.sort((a, b) => a - b); // Sort the array for sliding window technique
    let minCost = Infinity;

    // Loop over all possible windows of size k
    for (let i = 0; i <= n - k; i++) {
        let cost = 0;

        // Choose the last element of the window as the target value
        let target = arr[i + k - 1];

        // Calculate total cost to convert all elements in window to 'target'
        for (let j = i; j < i + k; j++) {
            if (arr[j] < target) {
                cost += (target - arr[j]) * x; // Increase
            } else {
                cost += (arr[j] - target) * y; // Decrease
            }
        }

        // Keep track of minimum cost
        minCost = Math.min(minCost, cost);
    }

    return minCost;
}

// ✅ Example Invocation
const arr = [1, 3, 2, 4, 6];
const n = arr.length;
const x = 1; // Cost to increase
const y = 2; // Cost to decrease
const k = 3;

const result = solve(arr, n, x, y, k);
console.log("Minimum Cost:", result); // Expected Output: e.g., 2 or 4 depending on x/y
// ✅ Time Complexity
// Sorting: O(n log n)

// Window loop: O(n)

// Inner loop (k elements): O(k)

// So total: O(n log n + n × k)

// Efficient enough for n ≤ 10^4 and k ≤ 500.
