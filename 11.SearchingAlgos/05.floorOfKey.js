
function findFloor(arr, key, low = 0, high = arr.length - 1, ans = -1) {

    if (low > high) return ans;

    let mid = Math.floor(low + ((high - low) / 2));

    if (arr[mid] == key) {
        return arr[mid]
    }
    else if (arr[mid] < key) {
        return findFloor(arr, key, mid + 1, high, arr[mid])
    }
    else {
        return findFloor(arr, key, low, mid - 1, ans)
    }

}


let result  = findFloor([1, 4, 5, 6, 6, 6, 6, 6, 8, 10, 12], 0)//-1
let result2 = findFloor([1, 4, 5, 6, 6, 6, 6, 6, 8, 10, 12], 9) //8
let result3 = findFloor([1, 4, 5, 6, 6, 6, 6, 6, 8, 10, 12], 5) //5
console.log(result ,result2 ,result3);


