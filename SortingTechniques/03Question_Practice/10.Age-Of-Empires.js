/*Description : you are playing the popular game "AgeOF-Empire" you are the king of the empire where you have 2n workers will be grouped in the association with size 2 , so a total of N associations have to be formed . 
*THe building speed of the i-th  worker is A[i]. 
*To make an association , you pick up 2 workers. let the minimum building speed b/w both workers be X then the association has the resultant building speedX . 
You have to print the maximum value possible of the sum of building speed of N.Associations if you make the associations Optimally ..

Input : first line contains an integer N. representing the number of association to be made next line contians 2n space separated integers denoting the building speeds of 2n workers 
sample input              sample output        

2                             3
1 3 1 2 
*/



// goal :=> Max sum of resultant speed of all the association
goal([2,12,18,3,3,16,6,8]); 

function goal(arr){
    console.log("Given : " + arr);
    let maxsumresAsso=0; 
//we need to sort the array 
let n=arr.length; 
for(let i=0; i<n-2; i++){
    let isswapped=false; 
for(let j=0; j<=n-1-i; j++ ){
          if(arr[j] >arr[j+1]){
            let temp = arr[j]; 
            arr[j]=arr[j+1]; 
            arr[j+1]=temp; 
            isswapped =true; 
          }
}    
if(isswapped===false){
    break; 
}
}
console.log("Sorted : "+arr);
let sortedarr=arr; 



for(let i=0; i<=n-1; i+=2)
{

    maxsumresAsso+=arr[i]; 


}

console.log(maxsumresAsso); 
    return maxsumresAsso; 
}

