//Description: Check if weather a given array is sorted and rotated or not ?
//App1 :- We'll find the min el index ~BS.Algo ... and then check the both L &R part if sorted or not... T.C->O(N)




let arr = [5, 6, 7, 8, 9, 1, 2, 3, 4];
//finding the min el index in S&R array...



function minElIndexinSandR(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return low;

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] > arr[high]) {
        //right part is sorted  here is the min el 
        return minElIndexinSandR(arr, mid + 1, high);
    }
    else {
        return minElIndexinSandR(arr, low, mid);
    }

}

let min = minElIndexinSandR(arr);
console.log(min);  //this is O(logn) T.c 




//we have to check weater the both part is sorted or not  
//=>we'll say yes if it is ...
//we'll say no if isn't it ...









