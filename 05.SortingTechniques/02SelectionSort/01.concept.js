//you are given an array sort the array in such a way that the elements are in acending order 
let arr = [3, 4, 5, 7, 1, 7, 0]; //O{N-squire} -  max to max -> n swap occurs
// let arr=[0,1,2,3,4];  //O{N-squire} -no swap occur
let n = arr.length;

console.log(selectionSort(arr, n));

function selectionSort(arr, n) {
  for (let i = 0; i <= n - 2; i++) {
    let min_el_index = i;
    for (let j = i + 1; j <= n - 1; j++) {

      if (arr[j] < arr[min_el_index]) {
        min_el_index = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min_el_index];
    arr[min_el_index] = temp;
  }
  return arr;
}


// Bestcase: no of swaps = 0 but tc is O{n-squire} ?? it will check for every elemet phase by phase
// Wrost case :O{n-squire}
//here swapping occurs less than bbl_sort_algo in worst case it will go n swap only
//bbl sort : in wrost case nsquire swap happens





/* Q. StableSortingAlgorithm:-relative ordering of element should not be changed 
bubbleSort ->> yes ,it a stable sorting algo. bcs every time we are comparing adjecent element..No
        Eg. inp=[4,'2A',3,'2B',5,'2C']
         phase1=['2A',3,'2B',4,'2C',5]  
        Phase2= ['2A','2B',3,'2C',4,5]
        phase3=['2A' '2B' ,'2C', 3 ,4 ,5 ]
        output =['2A' '2B' ,'2C', 3 ,4 ,5 ]  -->>   //at every phase relative order is maintained
   

SelectionSort ->> No, it is unstable sorting algo. bcs of its working Procedure 
                  Eg. inp=['2A','2B',1,'2C' ,4 ]
                    phase1=[1,'2B','2A','2C' ,4 ]  ---at this phare realative ordering
                                                                     is not maintained ..
                                                                     
  But we can make it stable using extra space   onece we picked the smallest elemnt we keep it into new array and we delete it from old array  
  

*/ 


