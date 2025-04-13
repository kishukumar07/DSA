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







