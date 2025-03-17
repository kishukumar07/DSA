//given n ,r have to find gp(Geometric Progression) ...
function runProgram(input) {
    // Write code here 
    
    
   let lines = input.trim().split(" ").map(Number);
   let n =lines[0]; 
   let r =lines[1]; 
  
  
    let result = findGp(n,r);
    console.log(result.toFixed(4)); 
  
    
  }
  
  function findGp(n,r){
      
      // if(n===1) return 2; //the gp of 1 will be 2 so we'll  consider this in test case 
      if(n===0 ) return 1;  //base case 
     
     let value = ( 1/ (r**n) );//can use powfunction
  
       return value + findGp(n-1,r);
  
  }
  
  