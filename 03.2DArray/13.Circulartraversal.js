// Description: you are given a matrix of size n*m:find the circular traverse of the matrix
// [[00 01 02 03 04 05],
// [10 11 12 13 14 15],
// [20 21 22 23 24 25] ] order=>n*m



function circularTraverse(arr,n,m){


//for l1
let line1=""; 

for(let i=n-1; i>=0; i--){
    line1+=arr[i][0]+" "; 
}


let line2="";
for(let i=1; i<=m-1; i++){
    line2+=arr[0][i]+" "; 
}

let line3=""; 
for(let i=1; i<=n-1; i++){
    line3+=arr[i][m-1]+" "; 
}

let line4=""; 
for(let i=m-2; i>=1; i--){
line4+=arr[n-1][i]+" "; 
}


console.log(line1+line2+line3+line4 ); 

}



circularTraverse([[0, 1 ,2 ,3 ,4 ,5],
    [10 ,11 ,12 ,13 ,14 ,15],
    [20 ,21 ,22 ,23 ,24 ,25] ] ,3,6); 
