let result = linearsearch([1, 2, 3, 4, 5], 4, 0);
//searching the index of key in arr linearly if array is not sorted this is the best option ->> O(n). 

function linearsearch(arr, key, i) {

    if (i == arr.length) {    //base case 
        return -1;
    }


    if (arr[i] == key) return i;   //main case 


    return linearsearch(arr, key, i + 1);  //recursive code 

}
//time complexcity of this recursive code = > no of call vs n => 4 calls vs n=4(arr.length) 
// =>so it's O(N) 
console.log(result)




//when array is sorted --- BINARY SEARCH ALGORITHM ....

let result2 = binarySearch([1, 2, 3, 4, 5, 34, 675, 787], 675)

function binarySearch(arr, key, low = 0, high = arr.length) {
    if (low > high) {
        return -1
    }; //base case when they cross

    let mid = Math.floor(low + ((high - low) / 2));  //main case 

    if (arr[mid] == key) {
        return mid;
    }


    else if (arr[mid] < key) {
        return binarySearch(arr, key, mid + 1, high)//moving to left part  
        //recursive callings on certain conditions ...
    }
    else {
        return binarySearch(arr, key, low, mid - 1);  //moving to right part
    }
}

console.log(result2);  // serched index of the key  