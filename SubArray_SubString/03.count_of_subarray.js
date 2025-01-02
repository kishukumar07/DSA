/* Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array. solve this in TC=> O(N) 

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

*/


/* Approach1: this solution uses Brute force approach =>>O(N**2)  =>>Time Limit Exceeded

 */


// function subarraySum  (nums, k) { 
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let subarr = [];
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             subarr.push(nums[j]);
//             sum += nums[j];
//             // console.log(subarr ,sum); 
//             if (sum === k) {
//                 count++
//             }
//         }
//     }
//     return count;
// };

     


/*Aproach2: Optimised way 
=>> HasMap+PrefixSum
*/


function subarraySum(nums, k) { 

let obj = {};
obj["0"] = 1;
let currentSum = 0;
let count = 0;

for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    let diff = currentSum - k;

    if (obj[diff]) {
        count += obj[diff];
    }

    if (obj[currentSum]) {
        obj[currentSum]++;
    } else {
        obj[currentSum] = 1; 
    } 
    //same line can be replaced with 
    // obj[currentSum] = (obj[currentSum] || 0) + 1; // Ensure obj[currentSum] is initialized to 0 if it doesn't exist
}
return count; 
}


console.log(subarraySum([1,1,1],2));