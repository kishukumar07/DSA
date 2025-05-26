function plant(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check if current spot is empty
        if (arr[i] === 0) {
            // Get left and right neighbors, treat edges as 0 (empty)
            const left = i === 0 ? 0 : arr[i - 1];
            const right = i === arr.length - 1 ? 0 : arr[i + 1];

            // If both neighbors are empty, plant here
            if (left === 0 && right === 0) {
                arr[i] = 1; // Plant a flower
                count++;    // Increase the count
            }
        }
    }

    return count; // Total new plants added
}
