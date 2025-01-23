// 00 01 02   03       output be like: sum of row  1  (only even elements of row )
// 10 11 12   13                       sum of row 2   ""
// 20 21 22   23                       sum of row 3  ""


    function traverse(arr ,n,m){
    
        for(i=0; i<=n-1; i++){
            let sum = 0; 
            for(let j=0; j<=m-1; j++){
        
                if(arr[i][j]%2===0)
            sum+=arr[i][j]; 
        
            }
            console.log(sum); 
        }
       
    }
    
    traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4); 
    
    
    