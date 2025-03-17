function runProgram(input) {
    let lines = input.trim().split("\n");  // Correctly splitting input by lines

    let t = Number(lines[0]); // Number of test cases
    let j = 1;
    while (t > 0) {
        let n = Number(lines[j++]); // Length of string
        let str = lines[j++]; // The actual string
   

        console.log(elliot(str, 0, n - 1)); // Correct function call

        t--;
    }
}

function elliot(str, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return ""; // Base case: stop recursion when left exceeds right
    }

    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    let bag1 = str[midIndex];

    let bag2 = elliot(str, leftIndex, midIndex - 1);  // Left part
    let bag3 = elliot(str, midIndex + 1, rightIndex); // Right part

    return bag1 + bag2 + bag3;
}




