function runProgram(input) {
    
  let lines = input.trim().split("\n");
  const n= +lines[0] ;  
  const arr =lines[1].split(" ").map(Number); 
  
  let result = {}; 
      coinsum(arr,n,0,[],result); 
      // console.log(result);
    console.log(Object.keys(result).length);  // prints the object length
console.log(Object.keys(result).join(" ") );         // prints the keys
}


function coinsum(arr,n,i,sub,result){
  if(i===n){
      if(sub){
          let sum=0;
          for(let i=0; i<sub.length; i++){
              sum+=sub[i]; 
          }
          if(sum) result[`${sum}`] =1 ; 
      }
      return ; 
  }
  
  
coinsum(arr,n,i+1,[...sub,arr[i]],result);
coinsum(arr,n,i+1,sub,result); 

}
 