
function runProgram(input) {
  const lines = input.trim().split("\n");
  const n =+lines[0]; 
  const arr =lines[1].split(" ").map(Number); 
let result=[]  ;
 genPer(arr,result); 
//   console.log(result);
 console.log(result.sort().join("\n"));
}

function genPer(arr,result,index=0){
   
   
   if(index ===arr.length){
        result.push([...arr].join(" "));        
return;
   }
   
   for(let i=index ; i<arr.length; i++){
       [arr[index], arr[i] ]=[arr[i], arr[index]  ]; //swap
     genPer(arr,result,index+1);
         [arr[index], arr[i] ]=[arr[i], arr[index] ]; //swap back
   }

   
}



function testCases() {
  console.log("🔹 Test Case 1:");
  runProgram(`3\n1 2 3`);
  console.log("\n🔹 Test Case 2:");
  runProgram(`3\n1 1 2`);
  console.log("\n🔹 Test Case 3:");
  runProgram(`4\n1 2 3 4`);
  console.log("\n🔹 Test Case 4:");
  runProgram(`1\n5`);
  console.log("\n🔹 Test Case 5:");
  runProgram(`2\n9 8`);
}

testCases();


// 🔹 Test Case 1:
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

// 🔹 Test Case 2:
// 1 1 2
// 1 2 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 1 1

// 🔹 Test Case 3:
// 1 2 3 4
// 1 2 4 3
// 1 3 2 4
// 1 3 4 2
// ...
// 4 3 2 1

// 🔹 Test Case 4:
// 5

// 🔹 Test Case 5:
// 8 9
// 9 8