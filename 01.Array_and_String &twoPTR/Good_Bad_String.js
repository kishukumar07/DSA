//good string ->> no consecutive letter  ,you need to convert it to good 

function  badStrToGoodStr(str){
let goodStr=""; 

for(let i=0; i<str.length; i++){
if(str[i]!==str[i-1]){
 goodStr+=str[i]; 
}
}
return goodStr; 
}

console.log(badStrToGoodStr("aabbccsppdd"));  //output : abcspd 







