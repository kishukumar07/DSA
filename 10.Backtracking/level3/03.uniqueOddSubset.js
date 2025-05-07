
function runProgram(input) {
    // Write code here

    let lines = input.trim().split("\n");
    let n = +lines[0];
    let arr = lines[1].trim().split(" ").map(Number);
    let k = +lines[2];

    let ans = subset(arr, i = 0, sub = [], k);

    if (ans) {
        console.log("True");
    } else {
        console.log("False");
    }



}

function subset(arr, i, sub, k) {

    if (i === arr.length) {
        if (kdistinctel(sub, k) && isSubOdd(sub)) {
            return true;
        }
        return false;
    }

    let s = subset(arr, i + 1, [...sub, arr[i]], k);
    let p = subset(arr, i + 1, sub, k);

    return s || p;

}


function kdistinctel(sub, k) {
    //falana dimkana logic ..

    let count = 0;
    let obj = {};
    for (let el of sub) {
        if (obj[el] === undefined) {
            count += 1;
            obj[el] = 1;
        }
    }
    // console.log(count===k);
    if (count === k) return true;

    return false;
}

function isSubOdd(sub) {
    let sum = 0;

    for (let i = 0; i < sub.length; i++) {
        sum += sub[i];
    }
    if (sum % 2 === -1 || sum % 2 === 1) return true;
    return false;
}
// ✅ Time Complexity = O(n × 2ⁿ)
// ✅ Space Complexity = O(n²)

