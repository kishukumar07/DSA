// Leetcode 54. Spiral Matrix : Given an m x n matrix, return all elements of the matrix in spiral order.



function spiral(arr,m,n){

    let count=0; 
    let bag=""; 
    let top = 0; 
    let left =0; 
    let right = n-1; 
    let bottom =m-1; 

while(count<m*n){

    for(let i=top; i<=bottom && count<m*n ; i++){
    bag+=arr[i][left]+" "; 
    count++ ; 
    }
    left++; 

    for(let i=left; i<=right && count<m*n; i++ ){
    bag+=arr[bottom][i]+" "; 
    count++; 
    }
    bottom--; 

    for(let i=bottom; i>=top && count<m*n; i--){ 
        bag+=arr[i][right]+" ";
        count++;  
    }
    right --; 
    
    for(let i=right; i>=left && count<m*n; i--){
        bag+=arr[top][i]+" "; 
        count++; 
    }

    top++;  
    
    
}
console.log(bag);

}

spiral([[1,2,3,4],[5,6,7,8],[9,10,11,12]],3,4);//m(rows)-     n(coloumn)