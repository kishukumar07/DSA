var findPeakElement = function (nums, low = 0, high = nums.length - 1) {

    if (nums.length == 1) return 0;  //edge case handelling

    // Check if the first element is a peak ...    
    if (nums[0] > nums[1])
        return 0;

    // Check if the last element is a peak
    if (nums[nums.length - 1] > nums[nums.length - 2])
        return nums.length - 1;


    if (low > high) {
        return -1;    //base cond^n; 
    }


    let mid = parseInt(low + (high - low) / 2);


    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {

        return mid;

    }

    else if (nums[mid + 1] > nums[mid]) {

        return findPeakElement(nums, mid + 1, high);

    }

    else {

        return findPeakElement(nums, low, mid - 1);

    }


};