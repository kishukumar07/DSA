function countEl(arr){
   let count =0; 
   
   for(let i=0; i<arr.length; i++ ){
    if( checkPrime(arr[i+1]) || checkPrime(arr[i-1]) ){
        count++; 
    }    

   }

   return count; 

}

//checkLeftPrime or checkRightprime function
function checkPrime(el){
    if(el <=1) {
        return false; }
    for(let i=2; i<=el**1/2; i++){
        if(el%i===0){
            return  false; 
        }
    }
return true; 

}



// console.log(checkPrime(1));
console.log(countEl([1,2,3,7,6])); 
