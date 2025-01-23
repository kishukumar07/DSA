// Problem: you have to find the count of all Subarrays, the sum of whose elements is Even 


/* Aproach1.Brute force =>> O(n**2) =>>Time Limit Exceeded

function fun(arr) {   
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let subarr = [];
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            subarr.push(arr[j])
            sum += arr[j];
            if (sum % 2 === 0) {
                count++
            }
        }
    }
    return count;
}

console.log(fun([1, 2, 3, 4])); //output: 4

*/



//Aproach2: Optimised approach ??

