
function runProgram(input) {
    // Write code here

    let line = input.trim("").split("\n");

    const [n, k] = line[0].split(" ");

    const arr = line[1].split(" ").map(Number);


    //   console.log(n,k,arr)

    console.log(againChoice(n, k, arr));

}

function againChoice(n, k, arr) {


    if (k === 0) return 1; 
    if (k < 0) return 0;  //base case




    let xyz = 0;
    for (let i = 0; i < n; i++) {
        xyz += againChoice(n, k - arr[i], arr);
    }

    return xyz;



}



// The recursive againChoice function you provided can lead to a call stack error, particularly for larger values of k and n. Here's why:

// Understanding the Call Stack

// The call stack is a data structure that keeps track of active function calls in your program.
// When a function is called, a new "frame" is pushed onto the stack. This frame contains information about the function's variables and the point where it should return.
// When a function returns, its frame is popped off the stack.
// The call stack has a limited size. If you make too many nested function calls, the stack will overflow, resulting in a "stack overflow" or "call stack error."
// Why Your Function Can Cause a Stack Overflow

// Deep Recursion:
// The againChoice function is recursive. For each call, it makes n more recursive calls.
// This leads to a tree-like structure of function calls. If k is large, the depth of this tree can become very deep.
// Each recursive call adds a new frame to the call stack.
// Lack of Memoization/Dynamic Programming:
// The function recalculates the same subproblems multiple times. For example, if you have already calculated againChoice(n, 2, arr), it might be recalculated many times during the execution.
// This redundant calculation significantly increases the number of function calls and, therefore, the depth of the call stack.
// Exponential Time Complexity:
// The time complexity of the provided recursive solution is exponential. For every call to the function there are n more calls. This leads to a very large amount of function calls, which in turn leads to a stack overflow.
// How to Mitigate the Call Stack Error

// Dynamic Programming (Memoization or Tabulation):
// Store the results of subproblems in a table (e.g., a 2D array or a map).
// Before making a recursive call, check if the result for the current subproblem is already stored.
// If it is, return the stored result; otherwise, calculate it and store it.
// This significantly reduces the number of redundant calculations and the depth of the call stack.
// Iterative Approach (Tabulation):
// Instead of using recursion, use a loop to build up the solution from the bottom up.
// This eliminates the need for the call stack and avoids stack overflow errors.
// This approach is typically more efficient than memoization.
// Tail Call Optimization (If Supported):
// In some programming languages, tail call optimization can eliminate the need to create a new stack frame for tail recursive calls.
// However, JavaScript does not reliably support tail call optimization in all environments.
// Reduce input size:
// If possible, reduce the size of k and n.
// Example of Dynamic Programming (Memoization) in JavaScript

// JavaScript

function againChoiceDP(n, k, arr) {
    const memo = {};

    function solve(k) {
        if (k === 0) return 1;
        if (k < 0) return 0;
        if (memo[k] !== undefined) return memo[k];

        let count = 0;
        for (let i = 0; i < n; i++) {
            count += solve(k - arr[i]);
        }

        memo[k] = count;
        return count;
    }

    return solve(k);
}
// By using memoization we store the results of already computed sub problems, and prevent the function from recalculating the same values. This dramatically decreases the amount of function calls, and prevents the call stack from overflowing.