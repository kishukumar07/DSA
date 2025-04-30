// Description: find the peak in Sorted and Rotated array. 
//similar to :-  you remember the mimimun is S&R wala part ie Que ... we first trying to find the sorted wala part and there will be that min el present.
let arr = [7, 8, 9, 10, 1, 2, 3, 4, 5, 6]


// the logic  "leftNeighbours < peakItem  > RightNeighbour" with binary search 

function bs(arr, low = 0, high = arr.length - 1, result = -1) {

    if (low > high) return result;

    let mid = Math.floor(low + (high - low) / 2);

    if ((arr[mid - 1] < arr[mid]) && (arr[mid] > arr[mid + 1])) {
        return mid;
    }
    else if (arr[mid - 1] > arr[mid]) {
        //left part has that peak el ...
        return bs(arr, low, mid - 1, result);
    }
    else {
        return bs(arr, mid + 1, high, result);
    }

}



console.log(bs(arr))