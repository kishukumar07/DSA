//find if a given no is perfect squire of another number  without using squire root mean : without finding squire root of that number

//Math.sqrt(num) is banned 



/*
 linear search ->  run a loop till num  
                     -> -will make check if (i squire === num )  return i ; 
                     ->    =>O(n)

 binary search    ->  will mentain a arr =[1,2,3,4.....num-1 ]  -> O(n) space and time 

                     -> for the array we'll check weather the middleEl in the space 
                           -> squireofmiddleEl === num  -> we got that ele
                           ->   "  arr[mid] "     <   num  -> we have to move left part /space 
                           ->   "  arr[mid] "     >   num  -> we have to move for the right part/space 
                           -> => O(log-n)


overall time complexity =? n  
                           */




function main(num) {       
    let arr = new Array();   //O(n)  ->space
    for (let i = 1; i <=num; i++) { //O(n)->time 
        arr.push(i);
    }
    return squareRoot(arr, num);   //(logn-time complexity)
}

function squareRoot(arr, num, low = 0, high = arr.length) { //O(logn)->time

    if (low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);

    if ((arr[mid] * arr[mid]) === num) {
        return arr[mid];
    }
    else if ((arr[mid] * arr[mid]) > num) {
        return squareRoot(arr, num, low,  mid - 1) //move for left part
    }
    else {
        return squareRoot(arr, num,  mid + 1, high) //move to the right part
    }
}





//invoking 
let result = main(1); 
console.log(result)


// ✅ Here's the Corrected and Optimized Version (No Extra Space Needed):
// javascript

function main(num) {
    return squareRoot(num, 1, num);
}

function squareRoot(num, low, high) {
    if (low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);
    let square = mid * mid;

    if (square === num) {
        return mid;
    } else if (square > num) {
        return squareRoot(num, low, mid - 1);
    } else {
        return squareRoot(num, mid + 1, high);
    }
}

// invoking
let result2 = main(49);
console.log(result2); // Output: 7