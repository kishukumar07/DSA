
function runProgram(input) {
    // Write code here
    let line = input.trim("").split("\n");
    const [n, k] = line[0].split(" ").map(Number);
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

//leading to call stack overflow 

// Input
// 26 4
// 9 6 7 10
// Expected Output
// 15
// Output
// /judger/run/2cf1b1b778f14ddf832e97f643ab69d7/solution.js:10
// function againChoice(n, k, arr) {
//             
// RangeError: Maximum call stack size exceeded
//     at againChoice (/judger/run/2cf1b1b778f14ddf832e97f643ab69d7/solution.js:10:21)
//     at againChoice (/judger/run/2cf1b1b778f14ddf832e97f643ab69d7/solution.js:16:16)
//     at againChoice (/judger/run/2cf1b1b778f14ddf832e97f643ab69d7/solution.js:16:16)
//     at againChoice (/judger/run/2cf1b1b778f14ddf832e97f643ab69d7/solution.js:16:16)
//     at againCh...