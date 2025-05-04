
function runProgram(input) {
    //we need only that subset whose length is 2 
    //also in sorted way 
    const lines = input.trim().split("\n"); 
    
    const [n,k] = lines[0].trim().split(" ").map(Number);
    
    // console.log(n,k);
    
    let arr = [];
    for(let i=1; i<=n; i++){
        arr.push(i);
    }
    
    
    let result =[] ; 
       subset(arr,0,result,[],k);
    // console.log(result); 
    
    result.sort((a,b)=> {
     //sorting logic depends on array of array (by default 2d ho gya)
     for(let i=0; i< Math.min(a.length, b.length); i++){
         if(a[i]!==b[i]) return a[i]-b[i];
     }
    return a.length-b.length ;
     
        
    }).forEach((el)=>{ 
        console.log(el.join(" "));
    });
    
    
    }
    
    
    
    
    function subset(arr,i,result,sub,k){
       
       if(i===arr.length){
           if(sub.length===k){
               result.push(sub);
           }
           return ; 
       }
      
       
       subset(arr,i+1,result,[...sub,arr[i]],k);
       subset(arr,i+1,result,sub,k);
     
    }
    
    
    
    