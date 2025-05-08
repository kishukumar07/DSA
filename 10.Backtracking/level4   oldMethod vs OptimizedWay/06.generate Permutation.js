function runProgram(input) {
    
    
    const lines = input.trim().split("\n"); 
    let n = +lines[0]; 
    let arr = lines[1].trim().split(" ").map(Number);
    
      let result=[]; 
      permute(arr,0,result);
      
      result.sort().forEach((el)=>console.log(el.join(" ")))
      
      
    }
    
    
    function permute(arr,start,result){
        if(start===arr.length){
            result.push([...arr]);
        return; 
            
        }
    
        for(let i=start; i<arr.length; i++){
            [arr[start],arr[i]]=[arr[i],arr[start]];
            permute(arr,start+1,result);
        [arr[start],arr[i]]=[arr[i],arr[start]];
        }
        
        
    }
    
    
    