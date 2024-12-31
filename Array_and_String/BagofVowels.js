// Print all the characters the string that are vowels if no vowels exist Print 'NotFoud'


function bagofVowels(str){

let bag=""; 
for(let i=0; i<str.length; i++){
    if( str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
bag+=str[i]; 
    }
}
if(!bag){
    return "NotFound"; 
}
else{
    return bag; 
}
}


console.log(bagofVowels("nature")); 
console.log(bagofVowels("bcd")); 

