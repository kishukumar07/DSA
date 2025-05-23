function runProgram(input) {       //call stack size reached ....err partial accepted ??? with this approach ...   
    // Write code here
    const lines = input.trim().split("\n").map(Number);
    let t = lines[0];
    let j = 1;

    while (t > 0) {
        let num = lines[j++];
        //  console.log(num); 
        console.log(superdigit(num));
        t--;
    }

    function superdigit(num) {
        if (Math.floor(num / 10) === 0) return num;
        return superdigit(sumofdigits(num))
    }
    //  console.log(sumofdigits(45))

    function sumofdigits(num, sum = 0) {

        if (num === 0) return 0;

        sum = sumofdigits(Math.floor(num / 10), sum)
        sum += num % 10
        return sum;
    }


}




//the better way not to get stackoverflow
function runProgram(input) {
    const lines = input.trim().split("\n");
    let t = parseInt(lines[0], 10);
    processCases(lines, 1, t);
}

function processCases(lines, index, t) {
    if (t === 0) return; // Base case

    let numStr = lines[index].trim();  
    console.log(superdigit(numStr)); 

    processCases(lines, index + 1, t - 1);
}

function superdigit(numStr) {  
    if (numStr.length === 1) return parseInt(numStr, 10); // Base case

    // Compute sum of digits using string processing
    let sum = numStr.split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    return superdigit(sum.toString()); // Recursive call with reduced number
}

// Fix: Use String Processing Insteda of Recursion for Summing Digits
// Instead of performing recursion on large numbers directly, we can:

// Convert the number to a string.
// Use .split("").reduce() to sum its digits efficiently.
// Call superdigit() on the summed result.
// Why This Works Better?
// ✅ Avoids stack overflow

// Instead of recursive calls for summing digits, we use .split("").reduce(), reducing the call stack depth.
// ✅ Handles very large numbers efficiently

// Works on numbers as strings instead of converting them to Number, preventing loss of precision.
// ✅ Correct output even for large inputs

// Since we reduce the size of the number at each step, recursion depth remains manageable.


