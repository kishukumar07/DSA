function evenSumRows(index,N,M,arr){
    if (index == N){
    	return;
    }
    // completing the rest of the function
    let sum =0; 
    col(0,M)
    function col(j,M){
        if(j===M){
            return; 
        }
        if(arr[index][j]%2===0){
            sum+=arr[index][j]; 
        }
        col(++j,M)
       }
console.log(sum); 
 evenSumRows(++index,N,M,arr); 
}
evenSumRows(0,3,3,[[1,2,3],[4,5,6],[7,8,9]]); 