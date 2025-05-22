// what is merge sort? 

/*
merge sort is a powerfull-Sorting algorithm ...which uses divide and conquer approach...
it divides lists  recursively in two part(BS_alog) and merge together after sorting each subarray .
the process continues untill the whole array is sorted .   
*/


let arr = [22, 43, 63, 556, 2, -1, 0];

function mergeSort(arr) {

    bs(arr, low = 0, high = arr.length - 1); 


    function bs(arr, low = 0, high = arr.length - 1) {

        if (low >= high) return ;

        let mid = parseInt(low + (high - low) / 2);
// console.log(mid) ; 

        //divide ... 
        bs(arr, low, mid);
        bs(arr, mid + 1, high);
        //conqurer ...  
        merge(arr, low,mid ,high);
        
    }


    function merge(arr, low,mid, high) {
        
        // let mid = parseInt(low + (high - low) / 2);
        let temp = new Array((high - low) + 1);
        

        let ptr1 = 0;  //to mid 
        let ptr2 = mid + 1;   //high 
        let k = 0;
        //merging two array logic ...
        while (ptr1 <= mid && ptr2 <= high) {

            if (arr[ptr1] <= arr[ptr2]) {
                temp[k++] = arr[ptr1++];
            }
            else {
                temp[k++] = arr[ptr2++];
            }


        }

        while (ptr1 <= mid) {
            temp[k++] = arr[ptr1++];
        }

        while (ptr2 <= high) {
            temp[k++] = arr[ptr2++];
        }

        //modifying the orignal array (basically the given subarray in that ); 

        let ptr3 = 0;
        for (let p = low; p <= high; p++) {
            arr[p] = temp[ptr3++];

        }


    }




}


mergeSort(arr);  //after this the array will be sorted by reference . 
console.log(arr);

// mini part (sort ) merge -> mini-- part (sort) -> merge 






























