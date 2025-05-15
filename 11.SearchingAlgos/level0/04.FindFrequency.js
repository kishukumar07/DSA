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

    let mid = Math.floor(low + (high - low) / 2);


    if (arr[mid] === key) {
        return firstIndexOfKey(arr, key, low, mid - 1, mid)
    }
    else {
        return firstIndexOfKey(arr, key, mid + 1, high, index)
    }
}


//invoking ... 
let firstindex = firstIndexOfKey([1, 2, 2, 2, 4, 5, 6], 2)
let result = firstIndexOfKey([1, 2, 2, 2, 4, 5, 6], 12)
let result2 = firstIndexOfKey([1, 2, 2, 2, 4, 5, 6], 3)
console.log(firstindex, result, result2) // first index of the key 






// 2.finding Last occurance ... (last index of key)...

//    #technique => this is something same as previous 
                        // if(midel === key)  -> we'll store mid and move to right space
                        // else move to the left part ..  
function lastOccurence(arr, key, low = 0, high = arr.length - 1, lastindex = -1) {

    if (low > high) return lastindex;


    let mid = Math.floor(low + (high - low) / 2);



    if (arr[mid] === key) {
        return lastOccurence(arr, key, mid + 1, high, mid)
    }
    else {
        return lastOccurence(arr, key, low, mid - 1, mid)
    }
}

let lastindex =   lastOccurence([1, 2, 2, 2, 4, 5, 6], 2)
let resultx   =   lastOccurence([1, 2, 2, 2, 4, 5, 6], 12)
let resulty   =   lastOccurence([1, 2, 2, 2, 4, 5, 6], 3)
console.log(lastindex, resultx, resulty) // first index of the key 






// 3.finding frequency  (no of indexes of the same key)...



function frequency(arr,key){ 

    if(lastOccurence(arr,key)){
        return lastOccurence(arr,key) - firstIndexOfKey(arr,key) ; 
    }
return -1 ; 
}

console.log(frequency([1,2,2,2,34] ,2))   // log-n

console.log(frequency([1,2,2,2,34] ,43)) // log-n