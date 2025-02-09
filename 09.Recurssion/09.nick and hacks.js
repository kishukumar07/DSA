console.log(nickandhacks(204,1));  //the amout U need , the amount you have 


function nickandhacks(n,x){ //n-(the amount u need ) , x-(the amount u have)
if(x===n)return true; 
if(x>n) return false; 

return  nickandhacks(n,x*10)||nickandhacks(n,x*20); 
}



//solving with rev recursion  tree
console.log(nickandhacksREV(204,1)); //n-(the amount u need ) , x-(the amount u have)

function nickandhacksREV(n,x){ //n (the amount u need ) , x(the amount u have)
if(n===x) return true; 
if(n<x) return false; 

return  nickandhacksREV(n/10,x)||nickandhacksREV(n/20,x); 
}