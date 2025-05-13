// Find the square root if the number is a perfect square ✅
// Otherwise, print the floor of the square root ✅


function runProgram(input) {
    let lines = input.trim().split("\n");
    let t = +lines[0];
    let j = 1;
    while (t > 0) {
        let n = +lines[j++];
        findSqrt(n, 0, n, 0);
        t--;
    }
}

function findSqrt(n, low, high, ans) {
    if (low > high) {
        console.log(ans);
        return;
    }

    let mid = parseInt((low + high) / 2); // Use parseInt() for integer division

    if (mid * mid === n) {
        console.log(mid);
        return;
    } else if (mid * mid < n) {
        findSqrt(n, mid + 1, high, mid); // store mid as ans
    } else {
        findSqrt(n, low, mid - 1, ans);
    }
}

