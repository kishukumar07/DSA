// 00 01 02   03       output be like: sum of column 1 even elements only 
// 10 11 12   13                       sum of column 2    ""
// 20 21 22   23                       sum of column 3    ""




function traverse(arr ,n,m){

    for(j=0; j<=m-1; j++){
        let sum = 0; 
        for(let i=0; i<=n-1; i++){
            if(arr[i][j]%2!==1)  {
                sum+=arr[i][j]; 
            }
        }
        console.log(sum); 
    }
}


traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4);  


