//basically sorted array is provided .....and with the logic of binarySearch algorithm ....



// 1.finding first occurance (first index of key)...

/* 
we keep finding and storing mid ad result at case midel === key {we'll move left} part 
    else  
        we'll move for right space

========while(low<high) ========
      */


function firstIndexOfKey(arr, key, low = 0, high = arr.length - 1, index = -1) {

    if (low > high) return index;

    let mid =Math.floor( low + (high - low) / 2);


    if (arr[mid] === key) {
        return firstIndexOfKey(arr, key, low, mid - 1, mid)
    }
    else {
        return firstIndexOfKey(arr, key, mid + 1, high, index)
    }
}

//invoking  
  let firstindex = firstIndexOfKey([1,2,2,2,4,5,6],2) 
  let result = firstIndexOfKey([1,2,2,2,4,5,6],12) 
  let result2 = firstIndexOfKey([1,2,2,2,4,5,6],3) 
console.log(firstindex , result ,result2) // first index of the key 



// 2.finding Last occurance  (last index of key)...


// 3.finding frequency  (no of indexes of the same key)...