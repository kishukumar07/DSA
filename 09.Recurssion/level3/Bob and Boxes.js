
function runProgram(input) {
    let num = input.trim().split(" ").map(Number)[0];
    
    // no of ways to reach the num with 3 choices 1,3,5
    
    console.log(choice(num));
    
    function choice(num){
        
        if(num ===0 ) return 1; 
        if(num < 0 ) return 0; 
        
        
        
    let ch1 = choice(num-1) ; 
    let ch2 =choice(num-3); 
    let ch3 =choice(num-5); 
    
    
    return ch1+ch2+ch3; 
    
    
    }
    
    
    }
    
    if (process.env.USER === "") {
      runProgram(``);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }
    