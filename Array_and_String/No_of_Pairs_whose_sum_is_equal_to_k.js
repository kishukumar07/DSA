//with brute force approach it will going to be O(n**2)



function pairs(arr, k) {

    let count = 0;
    let l = 0, r = arr.length - 1;

    //using two pointers we can solve it in O(n) if array is already sorted  and if array is not shorted we have to sort it that lead to use of arr.sort() method && it will make O(nlogn)+O(n)   : O(nlogn)will becomes O(1) if already sorted

   arr.sort((a, b) => a - b); //O(nlogn)     

    while (l < r) {  //O(n)
        if (arr[l] + arr[r] === k) {
            count++;
            l++;
            r--;
        }
        else if (arr[l] + arr[r] > k) {
            r--;
        }
        else if (arr[l] + arr[r] < k) {
            l++;
        }
    }
    return count;
}

console.log(pairs([1, 2, 3, 3, 4, 5, 6], 9));