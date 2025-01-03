// 00 01 02   03   // go in zig-zag 
// 10 11 12   13 
// 20 21 22   23 

// output: 03 02 01 00  10 11 12 13  23 22 21 20
  
// ==> on each iteration j is varying : this is inner loop when i is odd  j -->> 0--->m-1 
//     and when i is even j->>m-1 to 0

function traverse(arr ,n,m){

    let bag=""; 

    for(i=0; i<=n-1; i++){
 
 if(i%2===0){
    for(let j=m-1; j>=0; j--){
    
        bag+=arr[i][j]+" "; 
    
        }
 }else{

    for(let j=0; j<=m-1; j++){
    
        bag+=arr[i][j]+" "; 
    
        }
 }
        
    }
    console.log(bag); 
}


traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4); 
