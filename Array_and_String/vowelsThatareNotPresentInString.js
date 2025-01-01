// you have to find the vowels that are not present in the string 

function vow(str){
    let vowel=['a','e','i','o','u']; 
    let isPresent=[false,false,false,false,false];
    let bag=""; 
    for(let i=0; i<str.length; i++){ //O(n*k)
     for(j=0; j<5; j++){
        if(str[i]===vowel[j]){
         isPresent[j]=true; 
        }
    }
    }
    // console.log(isPresent);
    
    for(let i=0; i<5; i++){
               if(!isPresent[i]){
                bag+=vowel[i]; 
               }   
    }
    console.log(bag); 
}
vow("nature"); 


