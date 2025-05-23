// Array to be sorted
let arr = [1, 2, 3, 4, 5, 6, 324, 45, 564, -1, 0];

// Start quicksort
bs(arr, 0, arr.length - 1);

// Output sorted array
console.log(arr);

/**
 * Quick Sort function (recursive)
 * @param {number[]} arr - Array to sort
 * @param {number} low - Start index
 * @param {number} high - End index
 */
function bs(arr, low, high) {
    if (low < high) {
        // Partition the array and get the pivot index
        let pivotIndex = partition(arr, low, high);

        // Recursively sort the subarrays
        bs(arr, low, pivotIndex - 1);    // Left subarray
        bs(arr, pivotIndex + 1, high);   // Right subarray
    }
}

/**
 * Partition function: rearranges the elements around a pivot
 * @param {number[]} arr - The array
 * @param {number} low - Start index
 * @param {number} high - End index (pivot is arr[high])
 * @returns {number} - Correct index of the pivot
 */
function partition(arr, low, high) {
    let pivot = arr[high];   // Choose last element as pivot
    let i = low - 1;         // Index of smaller element

    // Loop through the array from low to high - 1
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }

    // Place pivot at the correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1; // Return the pivot index
}
