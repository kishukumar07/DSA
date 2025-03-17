
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

