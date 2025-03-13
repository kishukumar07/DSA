function runProgram(input) {

 function fact(n){
       if(n===0)return 1; 
       return n*fact(n-1); 
   }
   console.log(fact(input));

  }
runProgram(5); 