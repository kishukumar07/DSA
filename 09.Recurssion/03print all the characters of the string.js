function printchar(index,str){
if(index===str.length){
    return; 
} 
console.log(str[index]); 
printchar(++index,str); 
}
printchar(0,"Niket"); 



//have to print string chars in rev order 
function printcharInRev(index,str){
if(index===-1){
    return; 
} 
console.log(str[index]); 
printcharInRev(--index,str); 
}


console.log("output")
printcharInRev(4,"Niket"); 

