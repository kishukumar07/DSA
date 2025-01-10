/* Description :
You are given an array of size N. 
You will given Q queries. Each query has L and R such that (0<=L<=R<=N)
You need find sum from L TO R for each queries.

Sampleinputs                         SampleOutputs
4  -->N                                   
3 2 1 5  --->arr 
4     ->>>>Q, no of queries
1 3   --->L & R                           6
4 4  --->L & R                            8
1 4 --->L & R                             11
3 3--->L & R                              1


*/

// Approach1 : this question can be solved using cummulative frequency and  Approach2  with single ptr  also

//aproach2
let arr =[3,2,1,5];
let n=arr.length; 
printsumofwindow(arr,n,3,3); 
function printsumofwindow(arr,n,L,R){
    let sum=0; 
    for(let i=L-1; i<=R-1; i++){
        sum+=arr[i]; 
    }
console.log(sum); 
} 


//Aproach1:  using cumlative frequency of array or Prefix sum





