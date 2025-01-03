// 00 01 02 03 04 05 
// 10 11 12 13 14 15
// 20 21 22 23 24 25
// 30 31 32 33 34 35
// 40 41 42 43 44 45
// 50 51 52 53 54 55  order=>n*n




function traversediagonals(arr,n){ //O(n)

let diag1=""; 
let diag2=""; 
    

for(let i=0; i<=n-1; i++){ 
    
            diag1+=arr[i][i]+' ';  //for diag 1 
       
            diag2+=arr[i][n-1-i]+" ";     //for diag2

        }

        console.log(diag1+"\n"+diag2);
    
    }

    traversediagonals([[1,2,3],[4,5,6],[7,8,9]],3)

