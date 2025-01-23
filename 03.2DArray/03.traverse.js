
// 00 01 02   03   //rhs to lhs and  downward  to upward 
// 10 11 12   13 
// 20 21 22   23 


// ==> here i is not constant in each iteration so it will be inner loop i->>n-1 to 0
//j=m-1 to 0




function traverse(arr ,n,m){

    let bag=""; 
    for(j=m-1; j>=0; j--){
        for(let i=n-1; i>=0; i--){
    
        bag+=arr[i][j]+" "; 
    
        }
    }
    console.log(bag); 
}


traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4); 
