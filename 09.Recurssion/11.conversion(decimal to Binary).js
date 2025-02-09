let bag=""
function decimaltobinary(num){
if(num===1||num==0){
    // console.log(num%2); 
    bag+=(num%2); 
    return; 
}; 
decimaltobinary(Math.floor(num/2))
// console.log(num%2); 
bag+=(num%2); 
return bag; 
}

let x=decimaltobinary(5); 
console.log(x); 