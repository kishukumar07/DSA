/*Q.Maximum Sum of Subarrays With Length K
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0. */



var maximumSubarraySum = function(nums, k){  //O(n-k)

    let maxsum =0; 
             for(let i=0; i<=k-1 ; i++){
            maxsum+=nums[i];     
                    }
                    // console.log(maxsum) 
    for (let i=0;  i<=nums.length-1-k; i++){  
               if( (maxsum-nums[i]+nums[i+k]) > maxsum){
               maxsum = (maxsum-nums[i]+nums[i+k]); 
               }
            }

    return maxsum; 
    };

console.log(maximumSubarraySum([1,5,4,2,9,9,9],3)); 