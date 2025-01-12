/* Goal: your task is to make the final integer as large as possible

sample Input1            sample Output1
1                          4321
2
1 2 3 4    

sample Input2            sample Output2
1                          880
2
80 8                      
*/


// Approach :customise bubble sorting algo : if(`${arr[j+1]}+${arr[j]}` >`${arr[j]}+${arr[j+1]}`) then swap 
// customiseSort([1,2,3,4]); 
customiseSort([10,4,8,4,9,7]); 

function customiseSort(arr){
let n=arr.length;
for(let i=0; i<n-2; i++){
    isSwaped =0; 
for(let j=0; j<=n-1-i; j++){

let str1 =""; 
str1+=arr[j];  
str1+=arr[j+1]; 

let str2 =""; 
str2+=arr[j+1];  
str2+=arr[j];    


if(str1 < str2)
{
//we will do swapping bw j and j+1 
isSwaped=1; 
let temp = arr[j]; 
arr[j]=arr[j+1]; 
arr[j+1]=temp; 
}
}

if(isSwaped===0){
    break; 
}

}

console.log(arr.join("")); 

}