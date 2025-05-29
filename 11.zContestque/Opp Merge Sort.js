function runProgram(input) {
    // Write code here
    let lines = input.trim().split("\n");
    let n = +lines[0];
    let arr = lines[1].trim().split(" ").map(Number);

    rems(arr);
    console.log(arr.join(" "));


}
function rems(arr, low = 0, high = arr.length - 1) {

    if (low >= high) return;
    let mid = parseInt(low + (high - low) / 2);

    rems(arr, low, mid);
    rems(arr, mid + 1, high);
    mergeandupdate(arr, low, high, mid);

}

function mergeandupdate(arr, low, high, mid) {

    let temp = new Array(high - low + 1);
    let i = low;
    let j = mid + 1;
    let k = 0;

    while (i <= mid && j <= high) {

        if (arr[i] > arr[j]) {
            temp[k++] = arr[i];
            i++;
        } else {
            temp[k++] = arr[j];
            j++;
        }

    }

    while (i <= mid) {
        temp[k++] = arr[i];
        i++;
    }

    while (j <= high) {
        temp[k++] = arr[j];
        j++;
    }


    let p = 0;

    for (let i = low; i <= high; i++) {
        arr[i] = temp[p++];
    }

}




