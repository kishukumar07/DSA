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
    // 0- >min- >n-1 
    // 0-> min
    // min+1 -> n-1
    if (key > arr[minElIndex] && key < arr[arr.length - 1]) {
        return binarySearch(arr, key, minElIndex, arr.length - 1);
    }
    else {
        return binarySearch(arr, key, 0, minElIndex + 1);
    }
}

function binarySearch(arr, key, low, high) {
    //goal we have to search the index of the key 
    if (low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == key) return mid;

    else if (key > arr[mid]) {
        return binarySearch(arr, key, low, mid - 1)
    }
    else {
        return binarySearch(arr, key, mid + 1, high)
    }

}




let minElIndex = minel(arr);
console.log(keyIndexInSandR(arr, 5, minElIndex))








