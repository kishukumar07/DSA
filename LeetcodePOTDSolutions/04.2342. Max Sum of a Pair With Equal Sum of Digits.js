Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 109    //mean needs O(nlogn)/O(n)

//approach 1. BFS..  O(n**2)
 
var maximumSum = function(nums) {

let sumofnums=new Array(nums.length); 
for(let i=0; i<nums.length; i++){      //O(n*k-nums[i].length )
   sumofnums[i]= sumofdigits(nums[i]); 
}                        
console.log(sumofnums);  //checked! -OK

//2nd logic
let max=-Infinity;  
for(let i=0; i<=nums.length-1; i++){             //O(n^2)
    for(let j=i+1; j<=nums.length; j++ ){
        if(sumofnums[i]===sumofnums[j] && (nums[i]+nums[j])>max){
            console.log(i,j)
            max =nums[i]+nums[j]; 
        }
    }
} 

console.log(max); //checked ! oky
if(max===-Infinity) return -1; 
return max; 

//alternative required functions below .......
// function sumofdigits(el){    //O(k)
// let sum = 0; 
// while(el!==0){
// sum+= el%10
// el=Math.floor(el/10); 
// }
// return sum; 
// }

//alternative required functions with recursion method ...
function sumofdigits(el ,sum=0){      //O(k)
if(el==0) return 0; //base condition

sum+=el%10
return sum + sumofdigits(Math.floor(el/10) ) ; // return  reminder + ellastdigitrec.cal  
}

}; 


//approach2... 