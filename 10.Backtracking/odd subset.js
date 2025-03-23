function runProgram(input) {
    let lines = input.trim().split("\n"); 
    let n = +lines[0];
    let arr = lines[1].split(" ").map(Number);
    
    let result= countOddSumSubsets(arr, 0); 
    
    console.log(result.length);
}


function countOddSumSubsets(arr, index = 0, sequence = [], result = []) {
    if (index === arr.length) {
        const sum = sequence.reduce((acc, num) => acc + num, 0);
        if (sum % 2 !== 0) {  // Check if sum is odd
            result.push([...sequence]);
        }
        return;
    }

    // Include current element
    countOddSumSubsets(arr, index + 1, [...sequence, arr[index]], result);

    // Exclude current element
    countOddSumSubsets(arr, index + 1, sequence, result);

    return result;
}

