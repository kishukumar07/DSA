
//Leetcode : 238
var productExceptSelf = function(nums) {
    let result =new Array(nums.length); 
 
 let leftproduct=1; 
 for(let i=0; i<nums.length; i++){
 
 result[i]=leftproduct; 
 leftproduct*=nums[i]; 
 
 }
 
 let rightproduct =1; 
 for(let i=nums.length-1; i>=0; i--){
     
 result[i]*=rightproduct
 rightproduct*=nums[i]; 
 
 }
 
 
 console.log(result); 
//  return result; 
 };


 productExceptSelf([1,2,3,4]);  
