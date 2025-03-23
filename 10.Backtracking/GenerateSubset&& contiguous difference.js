function main(arr) {
    // Generate all subsets (non-contiguous subsets)
    let result = generateSubarrays(arr, arr.length, 0, [], []);

    return result;
    return result.sort();

}



function generateSubarrays(arr, n, i, subarray, result) {

    if (i === n) {
        if (subarray.length > 0) {
            result.push(subarray); // Add subarray to result
        }
        return result;
    }


    // Include the current element and form subarrays
    generateSubarrays(arr, n, i + 1, [...subarray, arr[i]], result);
    // Exclude the current element, generating subarrays starting from the next elements onwards
    generateSubarrays(arr, n, i + 1, subarray, result);





    return result;
}


// Test case:
let arr = [1, 2, 3];
console.log(main(arr));  // Output: Number of subsets with odd sums  16 but is giving 64 ???



//2nd code with contiguousSubsets only 

function generateContiguousSubsets(arr) {
    function backtrack(start, currentSubset, result = []) {
        // If start has reached the end of the array, we stop.
        if (start === arr.length) {
            return result;
        }

        // Generate the subsets starting from each index
        for (let i = start; i < arr.length; i++) {
            // Add arr[i] to the current subset
            currentSubset.push(arr[i]);
            result.push([...currentSubset]);  // Print or store the current subset //(...) to create a shallow copy of the currentSubset array before pushing it into the result array.
            // Avoid Mutating the Original Array: If we pushed currentSubset directly (i.e., result.push(currentSubset)), any future changes made to currentSubset would also affect the previously stored references in result
            // Recur with the next index
            backtrack(i + 1, currentSubset, result);

            // Backtrack and remove the last added element
            currentSubset.pop();
        }
        return result;
    }

    // Start backtracking from index 0 with an empty current subset
    let result = backtrack(0, []);
    return result;
}

// Example usage
const arr2 = [1, 2, 3];
console.log(generateContiguousSubsets(arr2));
