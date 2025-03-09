function findCommonEL(arr1, arr2){
//method1.BruteForceApproach =>> O(n**2)
//taking with two ptr =>>O(n) or taking hasmap =>> O{n}

//if we using two ptr we have to sort the array first if not sorted=>O(n) for bestCase ifarray is already sorted nd O(nlogn) if array is not sorted 

arr1.sort((a, b) => a - b);  
arr2.sort((a, b) => a - b); //if used --->bubble sort O(nsquire)...   

let el; 
let i=0 ,j=0;  
while(i<arr1.length && j<arr2.length){  //here we using and operator bcs array is sorted 
    if(arr1[i]===arr2[j]){
        // console.log(arr1[i],arr2[j]); 
              el =arr1[i];
              break;  
    }
else if(arr1[i]<arr2[j]){
    i++; 
}
else if(arr1[j]<arr2[i]){
    j++; 
}
}

return el ; 
}

console.log(findCommonEL([1,2,3,4,5] , [9,6,9,6,,5]));  

