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
