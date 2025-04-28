// given sorted and rotated
//Goal finding min in sorted and rotated array. 
arr = [8, 9, 10, 1,2, 3, 4, 5, 6]
// arr=[5,6,7,8,2,3]
//we know min el always present in sorted part. 
function minInSandR(arr, low, high) {
    if (low >= high) return low;

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] > arr[high]) {
        //Right part is sorted one ...
       return minInSandR(arr, mid + 1, high);
    }
    else {
       return minInSandR(arr, low, mid); //left part is sorted  
    }

}

let result = minInSandR(arr,0,arr.length-1)
console.log(result)