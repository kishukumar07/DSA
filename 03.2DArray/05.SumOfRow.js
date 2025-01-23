// 00 01 02   03       output be like: sum of row  1 
// 10 11 12   13                       sum of row 2  
// 20 21 22   23                       sum of row 3  


// approach=>> we are traversing each row  from upward to downward  way in each iteration 
    //    => during each iteration  j varies ---> 0 to m-1 : InnerLoop 
    //acc to que we have to maintain a sum variable during each iteration  and console it in during each iteration 


function traverse(arr ,n,m){
    
    for(i=0; i<=n-1; i++){
        let sum = 0; 
        for(let j=0; j<=m-1; j++){
    
        sum+=arr[i][j]; 
    
        }
        console.log(sum); 
    }
   
}

traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4); 


