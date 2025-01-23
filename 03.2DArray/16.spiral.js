// Leetcode 54. Spiral Matrix : Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function(matrix) {
    let m=matrix.length; 
    let n=matrix[0].length; 
        let count=0; 
        let result=[]; 
        let top = 0; 
        let left =0; 
        let right = n-1; 
        let bottom = m-1; 
    
    while(count<m*n){
    
    for(let i=left; i<=right && count<m*n; i++ )
    {
        result.push(matrix[top][i]); 
    count++; 
    }
    top++; 
    
    
    for(let i=top; i<=bottom && count<m*n; i++){
         result.push(matrix[i][right]); 
    count++; 
    }
    right--; 
           
    for(let i=right; i>=left &&count<m*n; i--){
        result.push(matrix[bottom][i]); 
    
    count++
    }
    bottom--; 
    
    for(let i=bottom; i>=top && count<m*n; i--){
        result.push(matrix[i][left]); 
        
        count++; 
    }
    left++; 
    
    
    }
    return result ; 
    };