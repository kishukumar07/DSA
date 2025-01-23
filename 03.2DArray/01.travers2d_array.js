// 00 01 02   03 ^
// 10 11 12   13 ^
// 20 21 22   23 ^
// ----------->  ^
// order =m*n   (if is a squire matrix : m=n we always have to solve like ye toh rectangular v ho sakta hai ) 
// To solve this type of que you need to check which pointer varies at a iteration 
// here i vary so i will be the inner loop  thats it ...

// output ->> 20 10 00 21 11 01 22 12 02  23 13 03 

function traverse(arr ,n,m){

    let bag=""; 
    for(let j=0; j<m; j++){
        for(let i=n-1; i>=0; i--){
    
        bag+=arr[i][j]+" "; 
    
        }
    }
    console.log(bag); 
}


traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4); 




