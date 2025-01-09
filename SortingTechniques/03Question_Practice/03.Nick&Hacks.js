/* Nick and Hacks...
tom and nick are good friends Once. Tom asked nick exactly N rupees, but nick has only 1 rupees in his bank account .
Nick wants to help his friend so he wrote two hacks can multiply the amount of money he owns by 10 
while the Second can multiply it by 20. These hacks can be used at y number of times .
Can Nick help tom with his hacks?
sampleInput          sampleOutput
5                        No 
1                        Yes 
2                        No 
10                      Yes
25                       No
200                      Yes  
*/



// Solution :   


let ans=tomandnick(300);
console.log(ans); 

function  tomandnick(num){
    let c1=0; 
    let c2=0; 
while(num%10===0){
    c1++ ;
    num=num/10; 
}
while(num%2===0){
    c2++; 
    num=num/2; 
}

if(c1>=c2 && num==1){
  return true; 
}
return false ;
}

