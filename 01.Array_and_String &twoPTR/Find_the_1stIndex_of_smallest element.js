// Problem: you are given an array A of N elements. You are allowed to remove only one element which makes the sum of all the Remaining Element exactly divisible by 7 



function findIndex(arr){

let sum =0; 
    for(let i=0; i<arr.length; i++){ //O(n)
            
sum+=arr[i]; 

    }
  
    // console.log(sum);

    let min = Infinity; 
    
    let index;  //undefined

    for(let i=0; i<arr.length; i++){    //O(n)
        
        if(arr[i]<min && (sum-arr[i])%7==0  ){
            // console.log(1)
            index =i; 
            min=arr[i];
          
        } 
    }
 
return(index); 
}
 

console.log(findIndex([14,8,2,14,7,4])); 