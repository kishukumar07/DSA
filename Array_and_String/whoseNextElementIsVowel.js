// Print all the characters in the string whose next are vowels if no vowels exist Print 'NotFoud'


function bagofVowels(str){

    let bag=""; 
    for(let i=0; i<str.length; i++){
        if( str[i+1]==='a'||str[i+1]==='e'||str[i+1]==='i'||str[i+1]==='o'||str[i+1]==='u'){
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
    
    