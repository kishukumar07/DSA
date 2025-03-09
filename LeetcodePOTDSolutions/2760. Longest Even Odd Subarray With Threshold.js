/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {

    function condn(nums, low, high, threshold) {


        if ((nums[low] % 2) !== 0 || nums[low] > threshold) return false; //for first one


        //optimization concept here 
        while (low < high) {
            // console.log( (nums[low]%2) === (nums[low+1]%2) || nums[low] > threshold  )  
            if ((nums[low] % 2) === (nums[low + 1] % 2) || nums[low] > threshold) return false;
            low++ //at last this block runs till high-1 
        }
        if (nums[low] > threshold) return false; //for last one 

        return true;

    }



    let maxlength = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        // console.log(143)
        for (let j = i; j < n; j++) {
            if (condn(nums, i, j, threshold) && (j - i + 1) > maxlength) {
                // console.log(condn(nums, i, j) , i,j , maxlength )
                maxlength = j - i + 1 //nothing but the length ; of the goal subarray 
            }
        }
    }
    // console.log(maxlength)
    return maxlength;

};