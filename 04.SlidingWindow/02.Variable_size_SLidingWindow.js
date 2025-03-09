// Q.find is there any subarray with the given sum k  [return true/false]

//Approach 1 =>bruteforce=> Object(n*2) see-solution of O3 in Subarr_SubString


/*Aproach 2 => variable size sliding_window =>O(n)for best case/ O(n**2)for wrost case  
*/

// function fun(arr, n, sum) { //O(n**2)
//     let window_sum = 0;
//     let i = 0, j = 0;
//     for (let i = 0; i < n; i++) {            //O(n)
//         while (window_sum < sum && j < n) {  //O(n) wrost case 
//             window_sum += arr[j];
//             j++; 
//         }
//         if (window_sum === sum) {
//             return true;
//         }
//         window_sum -= arr[i];
//     }
//     return false;
// }
// console.log(fun([3,4,20,3,10,5],6,33)); 


//Aproach 3 =>PrefixSum+Hasmap =>O(n)

function subarraySum(nums, k) { 

    let obj = {};
    obj["0"] = 1;
    let currentSum = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        let diff = currentSum - k;
    
        if (obj[diff]) {
            return true; 
        }
    
        if (obj[currentSum]) {
            obj[currentSum]++;
        } else {
            obj[currentSum] = 1; 
        } 
        //same line can be replaced with 
        // obj[currentSum] = (obj[currentSum] || 0) + 1; // Ensure obj[currentSum] is initialized to 0 if it doesn't exist
    }
    return false; 
    }
    
console.log(subarraySum([3,4,20,3,10,5],33));