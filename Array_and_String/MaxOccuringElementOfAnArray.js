//Print the maximum occuring element of an array  


//Aproach1.Brute force =>O(n**2)
//Aproach2.Has_Map => ()
    // * Object  =>  O(n) 
    // * forin_loop => O(n) here we check whose key is max we store that key and we got it 
        

function maxOccEl(arr){

let obj={}; 
for(let i=0; i<arr.length; i++){ //O(n)

    if(obj[arr[i]]===undefined){
          obj[arr[i]]=1; 
    }
    else{
        obj[arr[i]]++; 
    }

}
// console.log(obj); 

let max=-Infinity; 
let maxOccEl;
for(let key in obj){ //O(n)
    
if (obj[key]>max ){

    max=obj[key]; 
    maxOccEl =key; 
}
}
return maxOccEl; 

}


console.log(maxOccEl([2,3,4])); 

 
