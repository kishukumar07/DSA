function runProgram(input) {
    // Write code here
    /*goal : -> we are given a decimal number 
        have to give binary number ...
        constraints => 1<=n<=10^5
  Tc =>  t* O(N)
   */

    const lines = input.trim().split("\n").map(Number);

    let t = lines[0];
    let j = 1;
    while (t > 0) {
        let num = lines[j++];
        console.log(binary(num));
        t--;
    }

    function binary(num, bag = "") {
        if (num === 0) return bag;

        return binary(Math.floor(num / 2), bag) + num % 2;
    }


}



//without extra space  
/*
function binary(num) {
  if (num === 0) return "0";
  if (num === 1) return "1";
  return binary(Math.floor(num / 2)) + (num % 2);
}
  */


// So every time, num becomes half.
// Example:
// If num = 8, recursion calls:

// 8 → 4 → 2 → 1 → (base case)

// That's log₂(8) = 3 calls.

T .C = log(num)||log(n)