function generateSubarrays(arr, n, i, subarray, result) {
    if (i === n) {
        if (subarray.length > 0) {
            result.push(subarray); // Add subarray to result
        }
        return;
    }

    // Include the current element and form subarrays
    generateSubarrays(arr, n, i + 1, [...subarray, arr[i]], result);

    // Exclude the current element, generating subarrays starting from the next elements onwards
    generateSubarrays(arr, n, i + 1, subarray, result);
}

function main(arr) {
    const n = arr.length;
    let result = [];

    // Generate all subsets (non-contiguous subsets)
    generateSubarrays(arr, n, 0, [], result);

    // Count how many subsets have an odd sum
    let count = 0;
    result.forEach((subset) => {
        if (condition(subset)) {
            count++;
        }
    });

    return count;
}

function condition(subset) {
    const sum = subset.reduce((acc, curr) => acc + curr, 0);
    return sum % 2 === 1; // Check if the sum is odd
}

// Test case:
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(main(arr));  // Output: Number of subsets with odd sums  16 but is giving 64 ???

/*
The issue with your original code was that it was **generating all subsets**, including non-contiguous ones, rather than focusing on **contiguous subarrays**, which is what you wanted. Let's break down the problems in the original code and how they were resolved:

### **What the Original Code Was Doing:**

Your original approach used the `generateSubarrays` function, which was designed to generate **all subsets**, including non-contiguous ones. A subset is a combination of any elements from the array, regardless of whether they are next to each other in the array. For example, `[1, 3]` or `[2, 4, 6]` are subsets, but they are not contiguous subarrays.

### **What You Needed:**

You wanted to count **contiguous subarrays** with an **odd sum**. A **contiguous subarray** means that the elements must be next to each other in the array, such as `[1]`, `[1, 2]`, or `[3, 4, 5]`, and not `[1, 3]`.

### **The Original Code Issue:**

Your `generateSubarrays` function was recursively generating all possible subsets, not just contiguous subarrays. When you generate subsets (instead of subarrays), you're including combinations like `[1, 3]` or `[2, 4]`, which are not contiguous in the original array.

### **The Correct Approach:**

*/


function generateContiguousSubsets(arr) {
    function backtrack(start, currentSubset) {
        // If start has reached the end of the array, we stop.
        if (start === arr.length) {
            return;
        }

        // Generate the subsets starting from each index
        for (let i = start; i < arr.length; i++) {
            // Add arr[i] to the current subset
            currentSubset.push(arr[i]);
            console.log([...currentSubset]);  // Print or store the current subset

            // Recur with the next index
            backtrack(i + 1, currentSubset);

            // Backtrack and remove the last added element
            currentSubset.pop();
        }
    }

    // Start backtracking from index 0 with an empty current subset
    backtrack(0, []);
}

// Example usage
const arr2 = [1, 2, 3];
generateContiguousSubsets(arr2);
