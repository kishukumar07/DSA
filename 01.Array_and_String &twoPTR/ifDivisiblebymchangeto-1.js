//change those element which is divisible by -1;

function fun(arr, m){

    let arr2 =[]; 
    for(let i=0; i<arr.length; i++){
        
       if(arr[i]%m===0){
        arr2.push(-1); 
       }
       else{
        arr2.push(arr[i]);   //the time complexiety of arr.push or arr.pop is O(1); 
       } 
    
    }
    return arr2; 
}

//function invoking
console.log(fun([2,4,6,7,5,8] , 2)); 


//finally time complexity is =>> O(n); 
    //    space =>> O(n)