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
  
  
  


  //the main part of this que  ....
/*
let arr = [
  [1],
  [1, 10],
  [1, 2],
  [1, 2, 10],
  [1, 2, 3],
  [1, 2, 3, 10],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 10]
];

//arr.sort will not work properly here ?  .. bcs it will sort on the basis of first el of an integer only ...

arr.sort((a, b) => {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) {                                              //just see this u'll understand ur solution... 
      return a[i] - b[i]; // compare first different number
    }
  }
  return a.length - b.length; // shorter array comes first if all elements same
});



console.log(arr);


👉 Here, the .sort() function expects a callback (comparator) which takes two items at a time, a and b, and:

If it returns a negative number, a comes before b.

If it returns a positive number, a comes after b.

If it returns 0, their order doesn't change.
Now, inside your callback:
for (let i = 0; i < Math.min(a.length, b.length); i++)

➔ It loops over elements of both arrays a and b, only up to the shorter one.

if (a[i] !== b[i])

➔ As soon as it finds a position i where elements are different, it does:

return a[i] - b[i]

If a[i] < b[i], it returns negative ➔ a comes before b.

If a[i] > b[i], it returns positive ➔ b comes before a.

If all compared elements are same (example: [1, 2, 3] vs [1, 2, 3, 4]),
then it checks:

return a.length - b.length;
➔ The shorter array comes first if they match up to the shorter length.

*/