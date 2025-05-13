
function runProgram(input) {
    // Write code here
    let lines = input.trim().split("\n");

    let [n, key] = lines[0].trim().split(' ').map(Number);
    let arr = lines[1].trim().split(" ").map(Number);
    //first index of a given number 

    drainage(arr, key);
}

function drainage(arr, key, low = 0, high = arr.length, ans = -1) {

    if (low > high) {
        console.log(ans);
        return;
    }

    let mid = parseInt(low + (high - low) / 2);

    // console.log(arr[mid],key);

    if (arr[mid] === key) {
        drainage(arr, key, low, mid - 1, mid);
    } else if (arr[mid] < key) {
        drainage(arr, key, mid + 1, high, ans);
    } else {
        drainage(arr, key, low, mid - 1, ans);
    }

}