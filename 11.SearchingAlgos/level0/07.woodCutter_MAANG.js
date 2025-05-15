/* you are given height of the woods in an array 
you need to cut  the wood till W = 20(given weight w)
*/
arr = [5, 9, 15, 20, 24, 28, 32, 37, 40]
arr2 = [20, 15, 10, 17].sort((a, b) => a - b);   //array should be sorted first===>O{nlogN}
/*
#technique : - we'll find the middle tree in sorted trees .. then we'll start cutting tree from the height of the middle tree to high th tree(the extra height will be cut down) we keep store the wood we get     
  we'll check if we got exact weight of wood we required 
if its less than  we'll  move to the left space in order to find midd again and start cutting extra heights of the other trees from mid tree+1st tree  
-if the wtgot is > required weight we'll move to the right space in order to get less weight ...

//--okay we need a binary search algorithm . 



# algorithm: -1. Sort the array - (n.logn)
2. finding mid = low + high / 2
                   calculate how much wood can be got by cutting at height A[m]
3.   compare wood got with W   
              if (woodgot === W) return "Yes";
else if (woodgot < W) //we should move towards the left space in order to get more wood    
                    else if (woodgot > W) //we should move towards the right space in order to get less wood.

    4. iterate while (low > high)


Output : the first and only line of output must contain the required height setting 


    TestCase : 
Sample Input1.                       Sample Output1.         
4 7                                       15 
20 15 10 17                 

Sample  Input2 .                    Sample Output2 . 
9 20                                       32  
5,9,15,20,24,28,32,37,40 


*/

function woodCutter(arr, W, low = 0, high = arr.length - 1, result = -1) {

    if (low > high) {
        return result;
    }

    let mid = Math.floor(low + ((high - low) / 2));

    //we'll cut wood from mid+1 to high and make it store in woodgot.
    // woodgot logic here 
    let woodgot = 0;

    for (let i = mid + 1; i <= high; i++) {
        woodgot += (arr[i] - arr[mid]);
    }
    // console.log(mid, woodgot, result)

    if (woodgot === W) {

        return arr[mid];
        //here we can use break  .... till W 
    }
    else if (woodgot < W) {
        return woodCutter(arr, W, low, mid - 1, arr[mid]);
    }
    else {
        return woodCutter(arr, W, mid + 1, high, result);
    }

}



let result = woodCutter(arr,20) //28
let result2 = woodCutter(arr2, 7) //15
console.log(result);
console.log(result2);




// present sir 




