/* leetcode1196.
description: you have some apples in  basket  that can carry up to W units of weight .
Given integer array weight of size N where weight[i] is the weight of the ith apple , return the maximum number of apples you can put in the basket.  

Input :  
the first line contains the number of apples N and weight that the basket can carry  W. 
The 2nd line contains N integer as weight of the aples 

Output : a single integer telling the no of max apple you can store in the basket 

sampleInp :        sampleOutput : 
4 20                3
3 10 4 4

SampleInp2:    sampleOutput :      
4 20               3
20 4 4 3 

*/

// const input = `
// 4 20
// 20 4 4 3
// `;

const input = `
4 20
3 10 4 4
`;



// Approach : the que can be solved using more opimal approach but for practice we can use bubble sort 

leetcode(input); 

function leetcode(input){
let lines =input.trim().split("\n"); //.trim removes marginal whitespace &and .split will store the both linesdata in array in string format
// console.log(lines); 
let [n,w] = lines[0].split(' ').map(Number);
// console.log(n ,w);  //n is length of arr and w is weightpower of basket
let arr=lines[1].split(' ').map(Number);
// console.log(arr); 
//now we have n , w , arr 

// let sort the arr 
for(let i=0; i<=n-2; i++){
let isswaped = false; 
for(let j=0; j<=n-1-i; j++){

    if(arr[j] > arr[j+1]){
       let temp = arr[j];
       arr[j]=arr[j+1]; 
       arr[j+1]=temp ; 
       isswaped=true; 
    }


}   
if(isswaped==false){
break; 
}
}
//sorting completed 
// console.log(arr);

let max_no_of_apple=0; 
let i=0; 
let weightsum=0; 
    while( weightsum <= w){
        weightsum+=arr[i];
        i++    //[3,4,4,20] w=20
    } 

max_no_of_apple =i-1; 



console.log(max_no_of_apple); 
return max_no_of_apple; 

}






