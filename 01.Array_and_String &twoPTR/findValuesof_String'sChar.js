// Problem. Given a string in lowerCase defining the value a->1 , b->2 ... z->26 Now you have to find the total value 
//  Sample input : str ="aba" 
//  Sample output : 4

function SumOfCharactervalues(str){
//with brute force we can  solve this by takig a array or string of letters="abc...z" =>> O(n*k) where k will be the length of the letter=26;  lets..think a different approach 

/*How to know ascii value of a character in string 
 console.log('a'.charCodeAt(0)); //this works in any language    
 *How to know character from asciiCode or charCode 
 console.log( asciiToChar(97) );       //this will not work in js
 console.log( String.fromCharCode(122) );       //this will not work in js
 Lets try to solve using the charcode logic   */

 let value=0; 
 for (let i=0; i<str.length; i++){ //O(n)
    value+=(str.charCodeAt([i])-96); 
 }
return value;     
}

console.log(SumOfCharactervalues("aba")); 

