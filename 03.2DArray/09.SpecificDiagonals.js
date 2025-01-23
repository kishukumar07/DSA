// you are give a element k and you need to print boths of its diagonals
// 00 01 02   03        
// 10 11 12   13                    
// 20 21 22   23                        let index of k = 12 
// output : diag1 = [01 ,12 ,23 ] //diff of index will be  equal 
// output : diag1 = [03 ,12 ,21 ] //sum of index will be  equal 



// Aproach => first we have to traverse the array and we have to find the index of k element or we have to know the diff or sum of their index
// then we find those elemets whose index diff is same this is element of diag1 nd whose sum is equal to sum is element of 2nd diagonal


function traverse(arr, n, m ,k) {
let sum =0;
let diff=0; 

for(let i=0; i<n; i++){ //O(n**2)
    for(let j=0; j<m; j++){
if(arr[i][j]===k){
diff=i-j;
sum=i+j;  
}
}
}

let diag1 = ""; 
let diag2 = ""; 
for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
  if(i-j===diff){
    diag1 += arr[i][j]+" ";
  }
  if(i+j===sum){  
    diag2+=arr[i][j]+" "; 
  }
    }
}

console.log("diag1=",diag1)
console.log("diag2=",diag2)


}


traverse([[1, 2, 3, 4],
          [4, 5, 6, 7],
          [7, 8, 9, 10]], 3, 4,6);

