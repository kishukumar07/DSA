// Array to be sorted
let arr = [1, 2, 3, 4, 5, 6, 324, 45, 564, -1, 0];

// Start the Quick Sort algorithm with the full range of the array
bs(arr, 0, arr.length - 1);

// Print the sorted array after sorting is complete
console.log(arr);

/**
 * Recursive Quick Sort function
 * @param {number[]} arr - The array to sort
 * @param {number} low - The starting index of the current subarray
 * @param {number} high - The ending index of the current subarray
 */
function bs(arr, low, high) {
    // Base condition: if subarray has less than 2 elements, do nothing
    if (low < high) {
        // Partition the array into two parts and get the pivot's correct position
        let pivotIndex = partition(arr, low, high);

        // Recursively sort the left subarray (elements less than pivot)
        bs(arr, low, pivotIndex - 1);

        // Recursively sort the right subarray (elements greater than pivot)
        bs(arr, pivotIndex + 1, high);
    }
}

/**
 * Partition function: places the pivot in its correct position
 * and arranges all elements smaller than pivot to its left
 * and all greater elements to its right
 *
 * @param {number[]} arr - The array to partition
 * @param {number} low - Start index of the subarray
 * @param {number} high - End index of the subarray (pivot is chosen here)
 * @returns {number} - The index where the pivot is finally placed
 */
function partition(arr, low, high) {
    // Choose the last element as pivot
    let pivot = arr[high];

    // i marks the boundary of elements less than or equal to pivot
    let i = low - 1;

    // Traverse elements from low to high - 1
    for (let j = low; j < high; j++) {
        // If current element is less than or equal to pivot
        if (arr[j] <= pivot) {
            i++; // Move boundary forward
            // Swap current element with the element at index i
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // After loop, place pivot in its correct position (i + 1)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Return the index of the pivot
    return i + 1;
}
