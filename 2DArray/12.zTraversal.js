// Description: you are given a matrix of size n*n :find the Z traverse of the matrix
// [[00 01 02 03 04 05],
// [10 11 12 13 14 15],
// [20 21 22 23 24 25],
// [30 31 32 33 34 35],
// [40 41 42 43 44 45],
// [50 51 52 53 54 55]] order=>n*n



function ntraversal(arr,n){ //O(n)
    // for Line1
    let line1=""; 
    for(let i=n-1; i>=0; i--){
    line1+=arr[0][i]+" "; 
    }
    //for Line2
    let line2=""; 
    for(let i=1; i<=n-1; i++){
        line2+=arr[i][i]+" "; 
    }
    //for line3 
    let line3=""; 
    for(let i=n-1-1; i>=0; i--){
        line3+=arr[n-1][i]+" "; 
    }
    
    
    console.log(line1+line2+line3); 
    }
    
    
    ntraversal([['00', '01', '02'],
        ['10', '11', '12' ],
        ['20', '21', '22' ],
       ] ,3) 