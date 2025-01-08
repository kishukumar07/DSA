// you are given a array and you need to short this array either in accending order or decending order 


let arr=[3,5,6,1,5,9,2,0]; //O{N-squire} --> max to max n squire swap occurs 
// let arr=[0,1,2,3,4];  //O{N} -> no swap occurs
let n=arr.length; 
console.log(bubbleSort(arr,n)); 
function bubbleSort(arr , n ){
for(let i=0; i<=n-2; i++){  
    let isSwaped=false; 
for(let j=0;  j<=n-1-i; j++){   //at every phase the comparision starts from 0th index

    if(arr[j]  > arr[j+1]){
       let temp =arr[j]; 
       arr[j]=arr[j+1];
       arr[j+1]=temp;
      isSwaped=true; 
    }
}
if(isSwaped===false){
break; 
}

}

return arr; 


}