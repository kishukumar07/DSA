function runProgram(input) {
    // Write code here ... 
    let lines =input.trim().split("\n"); 
    let n = +lines[0];
    let mat=[]; 
  
   for(let i=1; i<=n; i++){
       mat.push(lines[i].trim().split(" ").map(Number));
   }
   
  
      let result=[]; 
      ratinMaze(mat,n,i=0,j=0,sub="",result);
      if(result.length){
   console.log(result.sort().join(" "));   
      }else{
          console.log(-1); 
      }
  }
  
  function ratinMaze(arr,n,i,j,sub,result){
     
     if(i<0||j<0|i===n||j===n||arr[i][j]===0) return; 
      
      if(i===n-1 && j===n-1){
          result.push(sub);
          return ; 
      } 
      
     arr[i][j] = 0; 
      ratinMaze(arr,n,i+1,j,sub+'D',result);
      ratinMaze(arr,n,i-1,j,sub+'U',result);
      ratinMaze(arr,n,i,j+1,sub+'R',result);
      ratinMaze(arr,n,i,j-1,sub+'L',result);
     arr[i][j] = 1 ;
      
  }
  
  
  