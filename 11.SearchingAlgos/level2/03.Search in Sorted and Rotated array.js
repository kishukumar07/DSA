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




function keyIndexInSandR(arr, key, minElIndex) {
    // 0- >min- >n-1 
    // 0-> min
    // min+1 -> n-1
    if (key >= arr[minElIndex] && key <= arr[arr.length - 1]) {
        return binarySearch(arr, key, minElIndex, arr.length - 1);
    }
    else {
        return binarySearch(arr, key, 0, minElIndex - 1);
    }
}

function binarySearch(arr, key, low, high) {
    //goal we have to search the index of the key 
    // console.log(low, high)
    if (low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == key) {
        return mid;
    }
    else if (key > arr[mid]) {
        return binarySearch(arr, key, mid + 1, high)
    }
    else {
        return binarySearch(arr, key, low, mid - 1)
    }

}



let minElIndex = minel(arr);

// console.log(minElIndex);

console.log(keyIndexInSandR(arr, 4, minElIndex));
console.log(keyIndexInSandR(arr, 3, minElIndex));
console.log(keyIndexInSandR(arr, 7, minElIndex));


//approach 2 Beats 100%  ....

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }

    // When dividing the roated array into two halves, one must be sorted.    
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;    
      } else {
        // target is in the right
        left = mid + 1;
      }
    } 
    
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;

      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }
    
  return -1;
};



