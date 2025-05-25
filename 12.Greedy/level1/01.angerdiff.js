// Leetcode-style Title: Minimize Maximum Difference in Circular Arrangement
// Problem Link (similar): https://leetcode.com/discuss/interview-question/1744034/Minimize-the-Maximum-Difference-between-Adjacent-People-in-a-Circle
// Author: Niket (Kishu Kumar)
// Description: Given an array of anger levels, arrange them in a circle to minimize the max adjacent difference.

function minimizeDanger(arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b); // Step 1: Sort the array in ascending order

    let arranged = Array(n);
    let left = 0;
    let right = n - 1;
    let toggle = true;

    // Step 2: Zig-zag placement (greedy distribution from smallest to largest)
    // 🤔 Why zig-zag?
    // We place smaller and larger values alternately from both ends to the center
    // to avoid placing largest and second-largest adjacent in the circle.
    // Example: [1, 3, 6, 8, 12, 14, 18]
    // Result: 1 6 12 18 14 8 3 (arranged in a wave form around the circle)
    // This minimizes the maximum difference between neighbors.
    for (let i = 0; i < n; i++) {
        if (toggle) {
            arranged[left++] = arr[i]; // Fill from start
        } else {
            arranged[right--] = arr[i]; // Fill from end
        }
        toggle = !toggle; // Switch between left and right
    }

    // Step 3: Calculate the maximum absolute difference between adjacent elements in a circle
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
        const diff = Math.abs(arranged[i] - arranged[(i + 1) % n]); // %n for circular comparison
        maxDiff = Math.max(maxDiff, diff);
    }

    console.log("Arranged Circle:", arranged);
    console.log("Minimum Possible Danger Value:", maxDiff);
    return maxDiff;
}

// 🔍 Sample Test
const angerLevels = [1, 12, 3, 14, 6, 18, 8];
minimizeDanger(angerLevels);

/*
📌 Notes:
- Time Complexity: O(n log n) due to sorting
- Space Complexity: O(n) for rearranged array
- Pattern: Greedy + Two-pointer + Circular difference
- Useful for: Circular seatings, adjacent difference optimization
*/
