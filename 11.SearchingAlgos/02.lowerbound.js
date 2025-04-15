function lowerbound(arr, key, low = 0, high = arr.length - 1, result = -1) {

    if (low > high) return result;

    let mid = low + high - low / 2;


    if (arr[mid] >= key) {
        return lowerbound(arr, key, low, mid - 1, mid)
    } else {
        return lowerbound(arr, key, mid + 1, high, result)
    }
}





let result = lowerbound([1, 2, 3, 3, 3, 4, 5, 6, 7], 3);
let result2 = lowerbound([1, 2, 3, 3, 3, 4, 5, 6, 7], 22);
console.log(result, result2); 

//time - O(logn)
//space -O(1)