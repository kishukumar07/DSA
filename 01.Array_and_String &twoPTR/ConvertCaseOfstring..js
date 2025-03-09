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


/*method2 .using ascii value   => O(n)

How to know ascii value of a character

const character = 'A';
const asciiValue = character.charCodeAt(0); // Get ASCII value of the first character
console.log(asciiValue); // Output: 65

how to know character from ascii value
const asciiCode = 65; 
const character = String.fromCharCode(asciiValue); 
console.log(character); // Output: "A"


A (uppercase): 65
a (lowercase): 97
Z (uppercase): 90
z (lowercase): 122 
*/


//given a string containing both uper and lower case letters u need to convert both uppercase to lowercase and lower case to upperCase

conversion("dsfD")
function conversion(str){

    let n=str.length; 
    let bag=""; 

    for(let i=0; i<n; i++){
      
         let asciiValue= str[i].charCodeAt(0)
        //let asciiValue= str.charCodeAt(i)   //both_are_correct....
                
         if(asciiValue >=97){ //mean it's smallercase
                 asciiValue-=32; 
           }else{
                 asciiValue+=32; 
           }
           let character= String.fromCharCode(asciiValue); 
           bag+= character; 
         }
       console.log(bag); 

}
