// Description: find the peak in Sorted and Rotated array. 
//similar to :-  you remember the mimimun is S&R wala part ie Que ... we first trying to find the sorted wala part and there will be that min el present.
let arr = [7, 11, 9, 4, 3, 1, 10, 2, 4]


// the logic  "leftNeighbours < peakItem  > RightNeighbour" with binary search 

function bs(arr, low, high, result = -1) {

    if (low > high) return result;

    let mid = (low + (high - low) / 2);


    if (arr[mid - 1] < arr[mid] > arr[mid + 1]) {
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



console.log(bs([5, 6, 7, 8, 1, 2, 3, 4]))