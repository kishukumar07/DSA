const [a,b] =input.trim().split(" ").map(Number);

console.log(powerFunction(a,b)); 

function powerFunction(a,b){
    if(b===0) return 1 ;  //edge cases
    if(b===1) return a ; 
    
 let ans =  powerFunction(a,(Math.floor(b/2)));  
   
   
   if(b%2===0){
       return ans*ans; 
   }
   else{
       return ans*ans*a; 
   }
   
}   
   
    

//O(logb) <= T.c