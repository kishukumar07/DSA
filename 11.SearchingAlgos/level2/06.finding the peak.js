// Description: find the peak in Sorted and Rotated array. 
//similar to :-  you remember the mimimun is S&R wala part ie Que ... we first trying to find the sorted wala part and there will be that min el present.
let arr = [7, 11, 9, 4, 3, 1, 10, 2, 4]


// the logic  "leftNeighbours < peakItem  > RightNeighbour" with binary search 

function bs(arr, low, high, result = -1) {

    if (low > high) return result;

    let mid = (low + (high - low) / 2);


}