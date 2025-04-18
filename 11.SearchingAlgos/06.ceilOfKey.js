function findCeil(arr, key, low = 0, high = arr.length - 1, ans = -1) {

    if (low > high) return ans;

    let mid = Math.floor(low + ((high - low) / 2));

    if(arr[mid] === key) {
        return arr[mid];
    }
    else if (arr[mid] > key) {
        return findCeil(arr, key, low, mid - 1, arr[mid]);
    }
    else {
        return findCeil(arr, key, mid + 1, ans);
    }

}



let result = findCeil([1,4,5,6,6,6,6,6,8,10,12],6)  //6
let result1 = findCeil([1,4,5,6,6,6,6,6,8,10,12],3) //4
let result2 = findCeil([1,4,5,6,6,6,6,6,8,10,12],15) //-1
console.log(result ,result1 ,result2); 






























