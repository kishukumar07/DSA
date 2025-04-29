//goal: To find the index of given key in sorted and rotated array

let arr = [5, 6, 7, 8, 9, 1, 2, 3, 4];




function minel(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return high;

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] > arr[high]) {
        return minel(arr, mid + 1, high);
    }
    else {
        return minel(arr, low, mid);
    }

}


// console.log(minElIndex); 



function keyIndexInSandR(arr, key, minElIndex) {





}





let minElIndex = minel(arr);
console.log(keyIndexInSandR(arr, 1, minElIndex))








