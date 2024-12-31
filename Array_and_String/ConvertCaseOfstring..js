//given a string containing both uper and lower case letters u need to convert both uppercase to lowercase and lower case to upperCase


//brute force Approach 
function convertCaseofStr(str){  //finall Time complexity => O(n*k)
    let uppercaseAlphabets="QWERTYUIOPASDFGHJKLZXCVBNM"; 
    let lowercaseAlphabets="qwertyuiopasdfghjklzxcvbnm"; 
    let resultStr=""; 
    for(let i=0; i<str.length; i++){              //O(n)
        for(let j=0; j<26; j++){                  //O(k) :k=26
            if(str[i]===uppercaseAlphabets[j]){    
                resultStr+=lowercaseAlphabets[j]; 
            } 
            else if(str[i]===lowercaseAlphabets[j]){
                resultStr+=uppercaseAlphabets[j]; 
            }
        }
    }
    return resultStr; 
}


console.log(convertCaseofStr("nIkEt"));  //output : NiKeT 


//method2 .using ascii valu