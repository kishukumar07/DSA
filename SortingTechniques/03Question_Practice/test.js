let arr=[ 20, 4, 4, 3 ]; 



n=4; 

for(let i=0; i<=n-2; i++){
    let isswaped = false; 
    for(let j=0; j<=n-1-i; j++){
    
        if(arr[j] > arr[j+1]){
           let temp = arr[j];
           arr[j]=arr[j+1]; 
           arr[j+1]=temp; 
           isswaped=true; 
        }
    
    
    }   

    console.log(arr);
    
    // if(isswaped){
    // break; 
    // }
   
    }
    //sorting completed 
    // console.log(arr);