function runProgram(input) {

    let lines = input.trim().split("\n").map(Number); 
    let t =lines[0]; 
    let j=1;
    
    while(t > 0){
    let num = lines[j++]; 
    console.log(choice(num));
        t--; 
    }
    
    function choice(num){
        if(num===0) return 1; 
        if(num<0) return 0; 
        
    let ch1= choice(num-4)
    let ch2 =choice(num-8)
    
    return ch1+ch2 ; 
    
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
    