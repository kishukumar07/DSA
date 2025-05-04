function generateContiguousSubsets(arr) {
    let result = [];  // This will store all contiguous subsets

    function backtrack(start, currentSubset) {
        // If start has reached the end of the array, we stop.
        if (start === arr.length) {
            return;
        }

        // Generate the subsets starting from each index
        for (let i = start; i < arr.length; i++) {
            // Add arr[i] to the current subset
            currentSubset.push(arr[i]);
            result.push([...currentSubset]);  // Store the current subset in result

            // Recur with the next index
            backtrack(i + 1, currentSubset);

            // Backtrack and remove the last added element
            currentSubset.pop();
        }
    }

    // Start backtracking from index 0 with an empty current subset
    backtrack(0, []);

    return result;  // Return the result array containing all contiguous subsets
}

// Example usage
const arr2 = [1, 2, 3];
const result = generateContiguousSubsets(arr2);
console.log(result);  // This will print all contiguous subsets
