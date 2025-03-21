
function runProgram(input) {
    
    let lines = input.trim().split("\n");
    let [n,k] = lines[0].split(" ").map(Number);
    let arr = lines[1].split(" ").map(Number); 
    
      const ways = choicesum(arr,n,k);
      console.log(ways) ;   
    }
    
       function choicesum(arr,n,k){
        
        
        }

// ✅ Test Cases
let input1 = `3 5\n1 2 3`;
runProgram(input1); // Expected Output: 2

let input2 = `1 10\n10`;
runProgram(input2); // Expected Output: 1

let input3 = `4 0\n1 2 3 4`;
runProgram(input3); // Expected Output: 1

let input4 = `4 15\n1 2 3 4`;
runProgram(input4); // Expected Output: 0

let input5 = `6 21\n1 2 3 4 5 6`;
runProgram(input5); // Expected Output: 4 ✅

let input6 = `5 10\n2 3 5 6 8`;
runProgram(input6); // Expected Output: 3

let input7 = `4 9\n4 5 6 7`;
runProgram(input7); // Expected Output: 2

let input8 = `6 12\n1 2 3 4 5 6`;
runProgram(input8); // Expected Output: 7
