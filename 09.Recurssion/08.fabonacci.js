function runProgram(input) {
    // Write code here
  rec=(input)=>{
        if(input===1) return 1;
        if(input===0) return 0; 
           return rec(input-1)+rec(input-2)
    }
  console.log(rec(input)); 
  }//will print the fabonacci of a single int 

  runProgram(4)//output should be 3 