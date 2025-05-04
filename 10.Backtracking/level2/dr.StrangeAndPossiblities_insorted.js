function runProgram(input) {
    // Write code here
    
    let n=+input;
  //   console.log(typeof(n));
  let arr =[];   
  for(let i=1; i<=input; i++){
      arr.push(i);
      }
    
    let result =[];
    generatesubset(arr,0,result);
    
  //   console.log(result) ; //have to sort in proper order ...
    
    
    
    result.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i]; // compare first different number
      }
    }
    return a.length - b.length; // shorter array comes first if all elements same
  }).forEach((el)=>{console.log(el.join(" "))});
  
  
  }
  function generatesubset(arr,i,result,sub=[]){
  
      if(i===arr.length){
          if(sub){
              //have to push sub in result .  
              result.push(sub);
          }
          return; 
      }
      
      
      generatesubset(arr,i+1,result,[...sub,arr[i]]);
      generatesubset(arr,i+1,result ,sub);
      
  }
  
  
  