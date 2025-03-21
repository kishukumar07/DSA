
function runProgram(input) {
    // Write code here
  //   let find k= max el in array;  
  //   then find subsequence   sum equals k;  
  //   Same as finding trucks capacity =k  ;
  
  
  let  lines = input.trim().split("\n");
  
  let t = +lines[0]; 
  
  let j=1; 
  
   while(t>0){
      
    let n =  +lines[j++]; 
    let arr =  lines[j++].split(" ").map(Number); 
    let maxel =  Math.max(...arr); 
    let k=maxel ; 
      arr.splice(arr.indexOf(maxel), 1); //removing the max el from array
  choicewala(arr, n ,0,k )? console.log("Yes"): console.log("No");  
          t--; 
              }
  }
    
   function choicewala(arr, n ,i,k ){
  
   if (k === 0){ 
              return 1; 
   }
  if (i >= n || k < 0) return 0;  // Ensure recursion stops correctly
  
  
       let ch1 = choicewala(arr,n,i+1 , k-arr[i]); //include
       let ch2 = choicewala(arr, n , i+1 , k ); //exclude       
  
     return ( ch1 || ch2); 
     
    }
  