function runProgram(input) {
    
    const lines =input.trim().split("\n");
    const  line0 =lines[0].trim().split(" ").map(Number);
    const k =line0[0];
    const arr= lines[1].trim().split(" ").map(Number);
    
    
    
  //   console.log(arr,k)
  console.log(pAndc(arr ,k));
  }
  
  function pAndc(arr,k){
      if(k===0)return 1; 
      if(k<0)return 0; 
      let ways =0;
      
      for(let i=0; i<arr.length; i++){
    
              ways+=pAndc(arr,k-arr[i]); 
      }
      
      return ways ;
  
  }
  