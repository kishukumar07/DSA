function runProgram(input) {
    // Write code here
    
   let lines=input.split(" ").map(Number); 
  //  console.log(lines);
   
    console.log(crazy(lines[0],lines[1])); 
  
    function crazy(a,b){
        if(b===0) return 1; 
        if(b===1){
            return a; 
        }
       ans = crazy(a,Math.floor(b/2)); 
        if(a%2===0){
            return ans * ans ; 
        }else{
            return ans * ans *a ; 
        }
    }
    
    
  }