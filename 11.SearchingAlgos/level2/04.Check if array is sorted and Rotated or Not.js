// Javascript program to check an array is sorted and
// rotated
function check(arr)
{
    // Initialize count of the number of times the sequence
    // is out of order
    let count = 0;

    let n = arr.length; // Get the size of the array

    // Iterate through the array
    for (let i = 0; i < n; i++) {
        // Check if the current element is greater than the
        // next element
        if (arr[i] > arr[(i + 1) % n]) {
            // Increment count if the sequence is out of
            // order
            count++;
        }
    }

    // Return true if there is at most one point where the
    // sequence is out of order
    return count <= 1;
}

// Driver Code
// Example of a rotated and sorted array
const arr = [ 3, 4, 5, 1, 2 ];

// Call the check function and determine if the array is
// rotated and sorted
if (check(arr)) {
    // Print YES if the array is rotated and sorted
    console.log("YES");
}
else {
    // Print NO if the array is not rotated and sorted
    console.log("NO");
}