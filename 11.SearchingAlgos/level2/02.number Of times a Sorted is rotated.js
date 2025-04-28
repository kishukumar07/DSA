//dont you think if we found the index of minimum el in sorted and rotated array 
//the index will be the no of times sorted array is rotated . 
function timesOfRotation(arr, low=0, high=arr.length-1) {
    if (low >= high) return high;

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] > arr[high]) {
        return timesOfRotation(arr, mid + 1, high);
    }
    else {
        return timesOfRotation(arr, low, mid);
    }
}

const arr = [5,6,7,1,2,3,4] ; // 3 
    let noOftimes= timesOfRotation(arr)
    console.log(noOftimes)