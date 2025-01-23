
// 00 01 02   03   //rhs to lhs and  up to downward 
// 10 11 12   13 
// 20 21 22   23 


// =>   here for each iteration i is moving so i will be inner loop 


function traverse(arr ,n,m){

    let bag=""; 
    for(let j=m-1; j>=0; j--){
        for(let i=0; i<n; i++){
    
        bag+=arr[i][j]+" "; 
    
        }
    }
    console.log(bag); 
}


traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4); 




